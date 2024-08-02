import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  Controller,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeOf } from "zod";
import { LoadingButton } from "../../components/LoadingButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStore from "../../store";
import { emailVerificationSchema } from "../../schema";
import Headerregister from "../../components/HeaderRegister";
import Footer2 from "../../components/Footer2";
import { ILoginTokenResponse } from "../../types";
import OTPInput from "../../components/OTPInput";
import getBasePath from "../../lib/getBasePath";

export type EmailVerificationInput = TypeOf<typeof emailVerificationSchema>;

export default function index() {
  const store = useStore();
  const authUser = store.authUser;

  const [timer, setTimer] = useState<number>(3600); // 1 hour in seconds
  const [isTimerActive, setIsTimerActive] = useState(false); // new state to track timer active

  const router = useRouter();

  const methods = useForm<EmailVerificationInput>({
    resolver: zodResolver(emailVerificationSchema),
  });

  const {
    reset,
    handleSubmit,
    setValue,
    formState: { isSubmitSuccessful, errors },
    control,
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const UserID = `${authUser?.user.email}`;

  const resendVerificationCode = async () => {
    try {
      const verifyData = {
        email: UserID,
      };
      await fetch(`${getBasePath()}/api/auth/email/verify/initiate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verifyData),
      }).then((response) => {
        if (response.status === 200) {
          toast.success(
            "Verification code has been resent. Please check your email",
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
          setIsTimerActive(true); // set timer active
          setTimer(3600); // reset timer to 1 hour
          router.push("/verifyemail");
        } else {
          toast.error(response.statusText, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-right",
      });
    }
  };

  const verifyEmail = async (data: EmailVerificationInput) => {
    try {
      const verifyData = {
        ...data,
        email: UserID,
      };

      store.setRequestLoading(true);
      const response = await fetch(
        `${getBasePath()}/api/auth/email/verify/complete`,
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(verifyData),
        }
      );
      if (response.status === 204) {
        toast.success("Email verified", {
          position: toast.POSITION.TOP_RIGHT,
        });
        store.setRequestLoading(false);
        router.push("/payments");
      } else {
        toast.error(response.statusText, {
          position: toast.POSITION.TOP_RIGHT,
        });
        store.setRequestLoading(false);
      }
    } catch (error) {
      store.setRequestLoading(false);

      toast.error(`${error}`, {
        position: "top-right",
      });
    }
  };

  const onSubmitHandler: SubmitHandler<EmailVerificationInput> = (values) => {
    verifyEmail(values);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      if (interval) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerActive, timer]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    console.log(authUser);
    if (store.authUser?.user.email_verified == true) {
      router.push("/payments");
    } else {
      router.push("/verifyemail");
    }
  }, []);

  return (
    <section>
      <Head>
        <title>Nobus | Email Verification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full">
        <div className="">
          <div className="lg:grid lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Headerregister />
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmitHandler)} className="p-20">
                  <div className="overflow-hidden  sm:rounded-md ">
                    <div className="mx-auto justify-center pb-5 flex">
                      <a href="/">
                        <img className="h-16 w-auto" src="/2fa.png" alt="" />
                      </a>
                    </div>
                    <div className="py-5 text-center mb-5">
                      <h3 className="text-xl font-medium leading-relaxed tracking-wider text-gray-500 pt-4">
                        PLEASE VERIFY YOUR EMAIL ADDRESS
                      </h3>
                    </div>

                    {/* <FormInput label="Verification Code" placeholder="Enter verification code" name="code" />
                     */}
                    <label
                      htmlFor="code"
                      className="block text-md text-gray-700 my-5 mx-auto text-center"
                    >
                      Enter verification code
                    </label>

                    <div>
                      <Controller
                        name="code"
                        control={control}
                        render={({ field: { onChange } }) => (
                          <div className="mx-auto max-w-md justify-center">
                            <OTPInput length={6} onComplete={onChange} />
                          </div>
                        )}
                      />
                      {errors.code && (
                        <span className="text-red-500 text-xs pt-1 block text-center">
                          {errors.code?.message as string}
                        </span>
                      )}

                      <p className="text-center py-2 text-md">
                        Time remaining:{" "}
                        <span className="text-blue-600 font-semibold">
                          {formatTime(timer)}
                        </span>
                      </p>
                    </div>
                    <div className="my-5 p-2 max-w-sm mx-auto justify-center">
                      <LoadingButton
                        loading={store.requestLoading}
                        textColor="text-ct-blue-600"
                      >
                        Submit
                      </LoadingButton>
                    </div>
                  </div>

                  <div className="flex flex-col mx-auto text-center justify-center text-md">
                    <h6>Didn't get a code?</h6>
                    <button
                      className=""
                      onClick={() => resendVerificationCode()}
                    >
                      <a className="hover:underline text-blue-600 font-semibold">
                        Resend Verification Code
                      </a>
                    </button>
                  </div>
                </form>
              </FormProvider>
            </div>

            <div className="hidden lg:block lg:col-span-1">
              <img
                className="w-full h-full bg-contain"
                src="/k8s-ad.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="px-4">
          <Footer2 />
        </div>
      </div>
    </section>
  );
}
