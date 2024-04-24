import { TypeOf } from "zod";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../../components/FormInput";
import { LoadingButton } from "../../../../components/LoadingButton";
import { toast } from "react-toastify";
import Link from "next/link";
import useStore from "../../../../store";
import { ILoginTokenResponse } from "../../../../types";

import { loginSchema } from "../../../../schema";

export type LoginInput = TypeOf<typeof loginSchema>;

const index = () => {
  const store = useStore();
  const router = useRouter();

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
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

  const API_URL = process.env.NEXT_PUBLIC_BASE
  const loginUser = async (data: LoginInput) => {
    try {
      store.setRequestLoading(true);   
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const responseData: ILoginTokenResponse = await response.json();
      console.log(responseData);
      if (response.status !== 200) {
        toast.error( response.statusText, {
          position: toast.POSITION.TOP_RIGHT,
        });
        store.setRequestLoading(false);
      }
      if (response.status === 200) {
        toast.success( "Login Sucessful", {
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

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    loginUser(values);
  };

  return (
    <section className="min-h-screen grid place-items-center">
      <div className="w-full">
       
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-dark-200 rounded-2xl p-8 space-y-5"
          >
            <div className="mx-auto justify-center pt-5 flex">
              <a href="/">
                <img className="h-12 w-auto" src="/logo.png" alt="" />
              </a>
            </div>
            <div className="py-5 text-center">
              <h3 className="text-3xl font-semiboldm leading-relax text-gray-500 pt-4">
                Forgot Password?
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Verify your email to reset password.
              </p>
            </div>
            <FormInput label="" placeholder="Enter email address" name="email" type="email" />

            <LoadingButton
              loading={store.requestLoading}
              textColor="text-ct-blue-600"
            >
              Reset Password
            </LoadingButton>
            <span className="block">
              Remember password?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login Here
              </Link>
            </span>
            
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default index;
