import React from 'react';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeOf } from "zod";
import { LoadingButton } from "../../components/LoadingButton";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStore from "../../store";
import { validate2faSchema  } from "../../schema";
import { ILoginTokenResponse } from '../../types';
import OTPInput from '../../components/OTPInput';
import getBasePath from '../../lib/getBasePath';


export type Validate2faInput = TypeOf<typeof validate2faSchema>;

const Validate2faPage = () => {

  const store = useStore();
  const requestEmail = store.requestEmail;
  console.log(requestEmail);

  const [timer, setTimer] = useState<number>(3600); // 1 hour in seconds
  const [isTimerActive, setIsTimerActive] = useState(false); // new state to track timer active

  const router = useRouter();

  const methods = useForm<Validate2faInput>({
    resolver: zodResolver(validate2faSchema),
  });

  const {
    reset,
    handleSubmit,
    setValue,
    setFocus,
    register,
    formState: { isSubmitSuccessful, errors },
    control
  } = useForm<Validate2faInput>({
    resolver: zodResolver(validate2faSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const UserID = `${requestEmail}`

  const resendVerificationCode = async () => {
    try {
      const verifyData = {
        email: UserID
      }
      await fetch(`${getBasePath()}/api/auth/email/verify/initiate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verifyData),
      }).then((response) => {
        if (response.status === 200) {
          toast.success("Verification code has been resent. Please check your email", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setIsTimerActive(true); // set timer active
          setTimer(3600); // reset timer to 1 hour
          router.push("/login/validateOTP");
        } else {
          toast.error( response.statusText, {
            position: toast.POSITION.TOP_RIGHT,
          });
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

  const validate2fa = async (data: Validate2faInput) => {
    
    try {
      const verifyData = {
        ...data,
        email: UserID
      }
      store.setRequestLoading(true);
      const response = await fetch(`${getBasePath()}/api/auth/login/complete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verifyData),
      
      })

      if (response.status === 200) {
        const responseData: ILoginTokenResponse = await response.json();
        console.log(responseData);
        toast.success("Login successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // Store the user data in the client-side state or session
        store.setAuthUser(responseData);
        store.setRequestLoading(false);

        // login user to their dashboard 
        router.push("/dashboard");
      } else {
        toast.error( response.statusText, {
          position: toast.POSITION.TOP_RIGHT,
        });
        store.setRequestLoading(false);
        router.push("/login");
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

  const onSubmitHandler: SubmitHandler<Validate2faInput> = (values) => {
    validate2fa(values);
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
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!store.requestEmail) {
      router.push("/login");
    }
  }, []);

  return (
    <section className="min-h-screen grid place-items-center bg-gray-200">
      <div className="mx-auto justify-center py-5 flex">
          <a href="/">
            <img className="h-10 w-auto" src="/logo.png" alt="" />
          </a>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="max-w-md w-full mx-auto my-5 overflow-hidden shadow-md bg-white rounded-2xl p-8 space-y-5"
        >
          <div className="w-full">
            <div className="mx-auto justify-center flex">
              <a href="/">
                <img className="h-16 w-auto" src="/2fa.png" alt="" />
              </a>
            </div>
            <div className="py-5 text-center">
              <h3 className="text-3xl font-semibold tracking-tight text-gray-500 pt-4">
                Two-Factor Authentication
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Verify the Authentication Code sent to your email
              </p>
            </div>
          </div>
            <div className="overflow-hidden">
              
              <label
                htmlFor="code"
                className="block text-md text-gray-700 my-5 mx-auto text-center">
              </label>
              
              <div>  
              <Controller
              name="code"
              control={control}
              render={({ field: { onChange } }) => (     
              <OTPInput length={6} onComplete={onChange}/>
              )}
              />
              {errors.code && (
                <span className='text-red-500 text-xs pt-1 block text-center'>
                  {errors.code?.message as string}
                </span>
              )}

              <p className='text-center py-2 text-md'>Time remaining: <span className='text-blue-600 font-semibold'>{formatTime(timer)}</span></p>

              </div>
                <div className='mt-5 p-2 max-w-7xl mx-auto justify-center'>
                <LoadingButton
                  loading={store.requestLoading}
                  textColor="text-ct-blue-600"

                >
                  Authenticate
                </LoadingButton>
                
              </div>
          </div>
          
          <span className='flex mx-auto text-center justify-center text-md'>
            
            Didn't get a code? {" "}
                              
            <button className='pl-2' onClick={() => resendVerificationCode() }>
            <a className='hover:underline text-blue-600'>
              Resend Verification Code
            </a>
            </button> 
          </span>
            
        </form>
      </FormProvider> 
    </section>
  );
};

export default Validate2faPage;
