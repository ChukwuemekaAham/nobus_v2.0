import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HeaderRegister from "../../components/HeaderRegister";
import Footer2 from "../../components/Footer2";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler, Controller } from "react-hook-form";
import FormInput from "../../components/FormInput";
import { LoadingButton } from "../../components/LoadingButton";
import { toast } from "react-toastify";
import useStore from "../../store";
import { registerSchema } from "../../schema";
import { ILoginTokenResponse } from "../../types";

export type RegisterInput = TypeOf<typeof registerSchema>;

const index = () => {
  const [pass, setPass] = useState({
    password: "",
    showPassword: false,
  });
  const [confirm, setConfirm] = useState({
    confirm_password: "",
    showConfirm_Password: false,
  });
 
  const [agree, setAgree] = useState(false);
  const store = useStore();
  const router = useRouter();
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const checkboxHandler = () => {
    setAgree(!agree);
  }

  const handleClickShowPassword = () => {
    setPass({ ...pass, showPassword: !pass.showPassword });
  };

  const {
    reset,
    register,
    handleSubmit,
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
  const registerUser = async (data: RegisterInput) => {
    try {
      store.setRequestLoading(true);
      const response = await fetch(`${API_URL}/auth/user/create`, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          
        })

        const responseData: ILoginTokenResponse = await response.json();
        console.log(responseData);
        if (response.status !== 201 || 400) {
          toast.error( response.statusText, {
            position: toast.POSITION.TOP_RIGHT,
          });
          store.setRequestLoading(false);
        }
        if (response.status === 400) {
          
          toast.success( "Email already exists", {
            position: toast.POSITION.TOP_RIGHT,
          });
          store.setRequestLoading(false);
          store.setAuthUser(responseData);
    
          router.push("/registration/continue");
        }
        if (response.status === 201) {
          
          toast.success( "An email with verification code has been sent to your mail box", {
            position: toast.POSITION.TOP_RIGHT,
          });
          store.setRequestLoading(false);
          store.setAuthUser(responseData);
    
          router.push("/verifyemail");
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

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    console.log(values);
    registerUser(values);
  };

  

  return (
    <section>
      <Head>
        <title>Nobus | Registration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="">
        <div className="mt-10 sm:mt-0">
          <div className="lg:grid lg:grid-cols-3">
            <div className="mt-5 lg:col-span-2 md:mt-0 ">
              <HeaderRegister />
              <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmitHandler)} className="px-4">
                <div className="overflow-hidden sm:rounded-md border-t ">
                  <div className="py-5 text-center">
                    <h3 className="text-xl font-medium leading-relax tracking-wider text-gray-500 pt-4">
                      SIGN UP TO NOBUS CLOUD SERVICES
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Please fill the form below.
                    </p>
                  </div>
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-4 gap-x-2 gap-y-5">
                      <div className="col-span-6 sm:col-span-2 ">
                      <FormInput label="First Name" placeholder="" name="first_name" />       
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                      <FormInput label="Last Name" placeholder="" name="last_name" /> 
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <div className={`flex mt-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 
                          focus:ring-indigo-500 sm:text-sm ${
                            errors.password && "border-red-500"
                          }
                          `}>
                        <input
                          type={pass.showPassword ? "text" : "password"}
                          id="password"
                          required
                          className="border-none rounded-l-md w-96"
                          {...register("password")}
                        ></input>
                        
                        <div
                          className="cursor-pointer inline-flex flex-1 min-w-md pt-2 px-1"
                          onClick={handleClickShowPassword}
                        >
                          {pass.showPassword ? (
                            <EyeIcon className="h-6 font-extralight" />
                          ) : (
                            <EyeOffIcon className="h-6 font-extralight" />
                          )}
                        </div>
                        </div>
                        {errors.password && (
                          <span className='text-red-500 text-xs pt-1 block'>
                            {errors.password?.message as string}
                          </span>
                        )}
                        
                      </div>
                      <div className="col-span-6 sm:col-span-3 ">
                        <label
                          htmlFor="confirm_password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Confirm Password
                        </label>
                        <div className={`flex mt-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 
                          focus:ring-indigo-500 sm:text-sm ${
                            errors.confirm_password && "border-red-500"
                          }
                          `}>

                        <input
                          type={confirm.showConfirm_Password ? "text" : "password"}
                          id="confirm_password"
                          required
                          className="border-none rounded-l-md w-96"
                          {...register("confirm_password")}
                        >
                        </input>
                        
                        <div
                          className="cursor-pointer inline-flex flex-1 min-w-md pt-2 px-1"
                          onClick={() => setConfirm({ ...confirm, showConfirm_Password: !confirm.showConfirm_Password })}
                        >
                          {confirm.showConfirm_Password ? (
                            <EyeIcon className="h-6 font-extralight" />
                          ) : (
                            <EyeOffIcon className="h-6 font-extralight" />
                          )}
                        </div>
                          </div>
                          {errors.confirm_password && (
                          <span className='text-red-500 text-xs pt-1 block'>
                            {errors.confirm_password?.message as string}
                          </span>
                        )}
                       
                        
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                      <FormInput label="Email" placeholder="" name="email" type="email" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                      <label
                          htmlFor="company.name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Company Name
                        </label>
                      <input 
                        type="text"
                        placeholder=""
                        required
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 
                        focus:ring-indigo-500 sm:text-sm ${
                          errors.company?.name && "border-red-500"
                        }
                        `}
                        {...register('company.name')} 
                      />
                      {errors.company?.name && <span className='text-red-500 text-xs pt-1 block'>{errors.company.name.message}</span>}
                      
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                      <label
                          htmlFor="project.name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Project Name
                        </label>
                      <input 
                        type="text"
                        placeholder=""
                        required
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 
                        focus:ring-indigo-500 sm:text-sm ${
                          errors.project?.name && "border-red-500"
                        }
                        `}
                        {...register('project.name')} 
                      />
                      {errors.project?.name && <span className='text-red-500 text-xs pt-1 block'>{errors.project.name.message}</span>}
                      
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                     
                      <label
                          htmlFor="company.country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country
                        </label>
                      <input 
                        type="text"
                        placeholder=""
                        required
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 
                        focus:ring-indigo-500 sm:text-sm ${
                          errors.company?.country && "border-red-500"
                        }
                        `}
                        {...register('company.country')} 
                      />
                      {errors.company?.country && <span className='text-red-500 text-xs pt-1 block'>{errors.company.country.message}</span>}
                      
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                      <label
                          htmlFor="company.state"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State
                      </label>
                      <input 
                        type="text"
                        placeholder=""
                        required
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 
                        focus:ring-indigo-500 sm:text-sm ${
                          errors.company?.state && "border-red-500"
                        }
                        `}
                        {...register('company.state')} 
                      />
                      {errors.company?.state && <span className='text-red-500 text-xs pt-1 block'>{errors.company.state.message}</span>}
                      
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                      
                      <label
                          htmlFor="company.address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Street Address
                      </label>
                      <input 
                        type="text"
                        placeholder=""
                        required
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 
                        focus:ring-indigo-500 sm:text-sm ${
                          errors.company?.address && "border-red-500"
                        }
                        `}
                        {...register('company.address')} 
                      />
                      {errors.company?.address && <span className='text-red-500 text-xs pt-1 block'>{errors.company.address.message}</span>}
                      
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="company.phone_number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Dial Up
                        </label>
                        <div >  
                        <Controller
                        name="company.phone_number"
                        control={control}
                        render={({ field: { onChange, value } }) => (                       
                        <PhoneInput
                          defaultCountry="ng"
                          name="company.phone_number"
                          value={value}
                          onChange={onChange} 
                          className={`sm:text-sm focus:outline-indigo-500 
                          focus:ring-indigo-500 ${
                            errors.company?.phone_number && "PhoneInput:outline-red-500"
                          }
                          `}
                                                     
                        />
                        )}
                        />
                        {errors.company?.phone_number && (
                          <span className='text-red-500 text-xs pt-1 block'>
                            {errors.company.phone_number.message as string}
                          </span>
                        )}
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                      
                      <label
                          htmlFor="company.billing"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Billing
                      </label>
                      <select 
                       className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 
                       focus:ring-indigo-500 sm:text-sm ${
                         errors.company?.billing && "border-red-500"
                       }
                       `}
                      {...register('company.billing')}
                      > 
                        <option value="Monthly Billing">Monthly</option>
                        <option value="Quarterly Billing">Quarterly (every 3 month)</option>
                      </select>
                      
                    </div>
                    {errors.company?.billing && <span className='text-red-500 text-xs pt-1 block'>{errors.company.billing.message}</span>}
                      
                  </div>
                </div>

                <div className="flex justify-center pb-5">
                      <div className="flex h-5">
                        <input 
                          id="agree" 
                          aria-describedby="agree" 
                          type="checkbox" 
                          onChange={checkboxHandler}
                          className="w-5 h-5 border border-gray-400 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                          required 
                          />
                      </div>
                      <div className="ml-3 text-sm">
                        <label 
                        htmlFor="agree" 
                        className="font-medium text-gray-500 dark:text-gray-300">I accept the 
                        <Link className='text-blue-500 font-medium hover:underline pl-2' target="_blank" rel="noopener noreferrer" href="/agreement.pdf">
                        Terms and Conditions
                        </Link>
                        </label>
                      </div>
                  </div>
                  
                <div className="bg-gray-50 px-4 pb-5 text-right sm:px-6">
                 
                <LoadingButton
                  loading={store.requestLoading}
                  disabled={!agree}
                  textColor="text-ct-blue-600"
                >
                  Register Account
                </LoadingButton>

                </div>

                  <p className="flex justify-center pb-5 text-sm font-medium text-gray-500">
                      <span>Filled this form already?</span><a href="/registration/continue" className="font-medium pl-2 text-blue-500 hover:underline">Continue registration</a>
                  </p>

                  <p className="flex justify-center pb-5 text-sm font-medium text-gray-500">
                      <span>Already have an account?</span><a href="https://dashboard.nobus.io" className="font-medium pl-2 text-blue-500 hover:underline">Login here</a>
                  </p>
                </div>

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

export default index;
