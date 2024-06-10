import React from 'react';
import Head from 'next/head';
import { useEffect, useState } from "react";
import { useRouter, useParams} from "next/navigation";
import { useForm, FormProvider, SubmitHandler, Controller } from "react-hook-form";
import FormInput from "../../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeOf } from "zod";
import { LoadingButton } from "../../components/LoadingButton";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStore from "../../store";
import { emailVerificationSchema } from "../../schema";
import Headerregister from '../../components/HeaderRegister';
import Footer2 from '../../components/Footer2';
import OtpInput from 'react-otp-input';
import { ILoginTokenResponse } from "../../types";

export type EmailVerificationInput = TypeOf<typeof emailVerificationSchema>;

export default function index() {

  const store = useStore();
  const authUser = store.authUser;
  const router = useRouter();

  const methods = useForm<EmailVerificationInput>({
    resolver: zodResolver(emailVerificationSchema),
  });
  
  const {
    reset,
    handleSubmit,
    setValue,
    formState: { isSubmitSuccessful, errors },
    control
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const UserID = `${authUser?.user.email}`

  const resendVerificationCode = async () => {
    try {
      const verifyData = {
        email: UserID
      }
      await fetch(`${API_URL}/auth/email/verify/initiate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verifyData),
      }).then((response) => {
        if (response.status !== 200) {
          toast.error( response.statusText, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        if (response.status === 200) {
          toast.success("Verification code has been resent. Please check your email", {
            position: toast.POSITION.TOP_RIGHT,
          });
          router.push("/verifyemail");
        }
      })

    } catch (error: any) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage, {
        position: "top-right",
      });
    }
  };
  

  const verifyEmail = async (data: EmailVerificationInput) => {
    try {
      const verifyData = {
        ...data,
        email: UserID
      }

      store.setRequestLoading(true);
      const response = await fetch(`${API_URL}/auth/email/verify/complete`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verifyData),
      })
      const responseData: ILoginTokenResponse = await response.json();
      console.log(responseData);
      if (response.status !== 204) {
        toast.error( response.statusText, {
          position: toast.POSITION.TOP_RIGHT,
        });
        store.setRequestLoading(false);
      }
      if (response.status === 204) {
        toast.success("Email verified", {
          position: toast.POSITION.TOP_RIGHT,
        });
        store.setAuthUser(responseData);
        store.setRequestLoading(false);
        router.push("/payments");
      }
    } catch (error: any) {
      store.setRequestLoading(false);
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage, {
        position: "top-right",
      });
    }
  };

  const onSubmitHandler: SubmitHandler<EmailVerificationInput> = (values) => {
    verifyEmail(values);
  };

  useEffect(() => {
    console.log(authUser);
    if (store.authUser?.user.email_verified == true) {
      router.push('/payments');
    } else {
      router.push('/verifyemail');
    }
  }, []);

  return (
    <section>
      <Head>
        <title>Nobus | Email Verification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="w-full h-full">
        <div className="mt-10 sm:mt-0">
          <div className="lg:grid lg:grid-cols-3">
            <div className="mt-5 lg:col-span-2 lg:mt-0 ">
              <Headerregister />           
                <FormProvider {...methods}>
                  <form
                    onSubmit={handleSubmit(onSubmitHandler)}
                    className="p-20"
                  >
                      <div className="overflow-hidden  sm:rounded-md ">
                        <div className="py-5 text-center mb-5">
                          <h3 className="text-xl font-medium leading-relaxed tracking-wider text-gray-500 pt-4">
                            PLEASE VERIFY YOUR EMAIL ADDRESS
                          </h3>                          
                        </div>

                        {/* <FormInput label="Verification Code" placeholder="Enter verification code" name="code" />
                         */}
                        <label
                          htmlFor="code"
                          className="block text-md text-gray-700 my-5 mx-auto text-center">
                       
                          Enter verification code
                        </label>
                        
                        <div>  
                        <Controller
                        name="code"
                        control={control}
                        render={({ field: { onChange, value } }) => (                       
                        <OtpInput
                          value={value}
                          onChange={onChange}
                          placeholder="000000"
                          numInputs={6}
                          inputType="text"
                          renderSeparator={<span>-</span>}
                          renderInput={(props) => <input {...props} />}
                          inputStyle={`overflow-hidden text-lg p-1 mx-1 sm:mx-2 rounded-full`}
                          containerStyle={`flex mx-auto justify-center`}
                        />
                        
                        
                        )}
                        />
                        {errors.code && (
                          <span className='text-red-500 text-xs pt-1 block text-center'>
                            {errors.code?.message as string}
                          </span>
                        )}
                        </div>
                          <div className='my-5 p-2 max-w-7xl mx-auto justify-center'>
                          <LoadingButton
                            loading={store.requestLoading}
                            textColor="text-ct-blue-600"

                          >
                            Submit
                          </LoadingButton>
                        </div>
                    </div>

                    <span className='mx-auto text-center text-md sm:text-lg'>
                      
                      Didn't get a code? {" "}
                    
                      <button onClick={() => resendVerificationCode() }>
                      <a className='hover:underline text-blue-600'>
                        Resend Verification Code
                      </a>
                      </button> 
                    </span>
                      
                  </form>
                </FormProvider>          
            </div>

            <div className="hidden lg:block lg:col-span-1">
              <img className="w-full h-full bg-contain" src="/reg.png" alt="" />
            </div>
          </div>
        </div>

        <div className="px-4">
          <Footer2 />
        </div>
      </div>
    </section>
  );
};
