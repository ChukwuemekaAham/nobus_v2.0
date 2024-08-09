import { TypeOf } from "zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../components/FormInput";
import { LoadingButton } from "../../components/LoadingButton";
import { toast } from "react-toastify";
import Link from "next/link";
import useStore from "../../store";
import { loginSchema } from "../../schema";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import getBasePath from "../../lib/getBasePath";

export type LoginInput = TypeOf<typeof loginSchema>;

const continueRegistration = () => {
  const store = useStore();
  const router = useRouter();

  const [pass, setPass] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setPass({ ...pass, showPassword: !pass.showPassword });
  };

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const loginUser = async (data: LoginInput) => {
    try {
      store.setRequestLoading(true);
      const response = await fetch(`${getBasePath()}/api/auth/login/initiate`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status !== 200) {
        toast.error(response.statusText, {
          position: toast.POSITION.TOP_RIGHT,
        });
        store.setRequestLoading(false);
      }
      if (response.status === 200) {
        toast.success("Continue", {
          position: toast.POSITION.TOP_RIGHT,
        });
        store.setRequestEmail(data.email);
        store.setRequestLoading(false);

        router.push("/registration/validateOTP");
      }
    } catch (error) {
      store.setRequestLoading(false);
      toast.error(`${error}`, {
        position: "top-right",
      });
    }
  };

  // Clear the auth user data
  const handleLogout = () => {
    store.setAuthUser(null);
  };

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    loginUser(values);
  };

  return (
    <section
      className="min-h-screen grid place-items-center bg-blue-500"
      style={{
        backgroundImage: "url('/loginbg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="max-w-xs sm:max-w-sm w-full mx-auto my-16 sm:my-10 overflow-hidden shadow-md bg-white rounded-lg p-4 sm:p-8 space-y-5"
          >
            <div className="mx-auto justify-center pb-2 flex">
              <a href="/">
                <img className="h-10 w-auto" src="/logo2.png" alt="" />
              </a>
            </div>

            <p className="text-sm sm:text-base text-center mb-4">
              Please fill the form below to continue
            </p>
            <FormInput
              label=""
              placeholder="Email Address"
              name="email"
              type="email"
            />
            <div
              className={`flex w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 
                focus:ring-indigo-500 sm:text-sm ${
                  errors.password && "border-red-500"
                }
                `}
            >
              <input
                type={pass.showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                required
                className="border-none rounded-l-md w-96 text-base"
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
              <span className="text-red-500 text-xs pt-1 block">
                {errors.password?.message as string}
              </span>
            )}
            <div className="text-right text-md">
              Forgot Password?{" "}
              <Link
                href="/login/reset-password"
                className="text-blue-600 hover:underline"
              >
                Reset
              </Link>
            </div>
            <LoadingButton
              loading={store.requestLoading}
              textColor="text-ct-blue-600"
            >
              Continue
            </LoadingButton>
            <span className="block text-md">
              Need another account?{" "}
              <Link
                href="/registration"
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </Link>
            </span>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default continueRegistration;
