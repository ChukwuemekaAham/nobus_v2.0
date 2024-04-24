import React from 'react';
import Head from 'next/head';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, SubmitHandler, Controller } from "react-hook-form";
import FormInput from "../../../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeOf } from "zod";
import { LoadingButton } from "../../../components/LoadingButton";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStore from "../../../store";
import { validate2faSchema  } from "../../../schema";
import Headerregister from '../../../components/HeaderRegister';
import Footer2 from '../../../components/Footer2';
import OtpInput from 'react-otp-input';


export type Validate2faInput = TypeOf<typeof validate2faSchema>;

const Validate2faPage = () => {

  const store = useStore();
  const authUser = store.authUser;
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
          router.push("/login/validateOTP");
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
      await fetch(`${API_URL}/auth/login/complete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verifyData),
      
      }).then((response) => {
        if (response.status !== 204) {
          toast.error( response.statusText, {
            position: toast.POSITION.TOP_RIGHT,
          });
          store.setRequestLoading(false);
          router.push("/login");
        }
        if (response.status === 204) {
          toast.success("Login successful", {
            position: toast.POSITION.TOP_RIGHT,
          });
          store.setRequestLoading(false);
          router.push("/payments");
        }
        
      })

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
    if (!store.authUser) {
      router.push("/login");
    }
  }, []);

  return (
    <section className="min-h-screen grid place-items-center">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-dark-200 rounded-2xl p-8 space-y-5"
        >
          <div className="w-full">
            <div className="mx-auto justify-center py-5 flex">
              <a href="/">
                <img className="h-12 w-auto" src="/logo.png" alt="" />
              </a>
            </div>
            <div className="py-5 text-center">
              <h3 className="text-3xl font-semiboldm leading-relax tracking-wide text-gray-500 pt-4">
                Two-Factor Authentication
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Verify the Authentication Code sent to your email
              </p>
            </div>
          </div>
            <div className="overflow-hidden">
              
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
                  Authenticate
                </LoadingButton>
                <a href="/login" className="block text-center text-blue-600 pt-5">
                  Back to basic login
                </a>
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
    </section>
  );
};

export default Validate2faPage;
