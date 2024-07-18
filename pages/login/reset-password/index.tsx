import { TypeOf } from "zod";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/FormInput";
import { LoadingButton } from "../../../components/LoadingButton";
import { toast } from "react-toastify";
import Link from "next/link";
import useStore from "../../../store";

import { emailSchema } from "../../../schema";
import getBasePath from "../../../lib/getBasePath";

export type EmailInput = TypeOf<typeof emailSchema>;

const index = () => {
  const store = useStore();
  const router = useRouter();

  const methods = useForm<EmailInput>({
    resolver: zodResolver(emailSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const ResetPassword = async (data: EmailInput) => {
    try {
      store.setRequestLoading(true);   
      const response = await fetch(`${getBasePath()}/api/auth/password/reset/initiate`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (response.status !== 200) {
        toast.error( response.statusText, {
          position: toast.POSITION.TOP_RIGHT,
        });
        store.setRequestLoading(false);
      }
      if (response.status === 200) {
        toast.success( "OTP has been sent to your email", {
          position: toast.POSITION.TOP_RIGHT,
        });
        store.setRequestEmail(data.email);
        store.setRequestLoading(false);

        router.push("/login/reset-password/complete");
      }
    } catch (error: any) {
      store.setRequestLoading(false);
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.response.data.detail ||
        error.message ||
        error.toString();
      toast.error(resMessage, {
        position: "top-right",
      });
    }
  };

  // Clear the auth user data
  const handleLogout = () => {
    store.setAuthUser(null);
  };

  const onSubmitHandler: SubmitHandler<EmailInput> = (values) => {
    ResetPassword(values);
  };

  return (
    <section className="min-h-screen grid place-items-center" style={{
      backgroundImage: "url('/loginbg.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <div className="w-full">
       
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="max-w-sm w-full mx-auto overflow-hidden shadow-lg bg-white rounded-2xl p-8 space-y-5"
          >
            <div className="mx-auto justify-center pt-5 flex">
              <a href="/">
                <img className="h-10 w-auto" src="/logo.png" alt="" />
              </a>
            </div>
            <div className="pb-5 text-center">
            <p className="mt-4 text-lg text-gray-600 tracking-tight font-semibold">
                Forgot Password?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Verify your email to reset password.
              </p>
            </div>
            <FormInput label="" placeholder="Email Address" name="email" type="email" />

            <LoadingButton
              loading={store.requestLoading}
              textColor="text-ct-blue-600 "
            >
              Reset Password
            </LoadingButton>
            <span className="flex mx-auto text-center justify-center text-md">
              Remember password?{" "}
              <Link href="/login" className="text-blue-600 hover:underline pl-2">
                Login 
              </Link>
            </span>
            
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default index;
