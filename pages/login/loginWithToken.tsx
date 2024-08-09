import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStore from "../../store";
import { Buffer } from "buffer";
import Spinner from "../../components/Spinner";
import { ILoginTokenResponse } from "../../types";
import getBasePath from "../../lib/getBasePath";

interface LoginPageProps {}

const LoginPage: NextPage<LoginPageProps> = () => {
  const router = useRouter();
  const { token } = router.query as { token: string | undefined };
  const decryptedToken = token
    ? Buffer.from(token, "base64").toString("utf-8")
    : "";

  console.log({ "decrypted token": decryptedToken });

  const store = useStore();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const loginWithToken = async () => {
      if (token) {
        try {
          setIsLoading(true);
          const response = await fetch(`${getBasePath()}/api/user/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${decryptedToken}`,
            },
            body: JSON.stringify({}),
          });
          if (response.status !== 200) {
            const { message } = await response.json();
            toast.error(response.statusText, {
              position: toast.POSITION.TOP_RIGHT,
            });
            setError(message);
            setIsLoading(false);

            router.push("/login");
          }
          if (response.status === 200) {
            const responseData: ILoginTokenResponse = await response.json();
            toast.success("Login Successful", {
              position: toast.POSITION.TOP_RIGHT,
            });
            // Store the user data in the client-side state or session
            store.setAuthUser(responseData);
            // and redirect the user to the dashboard
            router.push("/dashboard");
          }
        } catch (error) {
          setError("An error occurred during login. Please try again later.");
          setIsLoading(false);

          toast.error(`${error}`, {
            position: "top-right",
          });
        }
      }
    };

    loginWithToken();
  }, [token, decryptedToken, router]);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="bg-white shadow-md rounded-md p-8 my-20 w-full max-w-sm text-center">
        <div className="mx-auto justify-center py-10 flex">
          <img className="h-12 w-auto" src="/favicon.ico" alt="" />
        </div>
        <h6 className="text-sm pb-5">Attempting dashboard login</h6>
        {error && (
          <div className="text-gray-400 font-semibold text-md">{error}</div>
        )}
        {isLoading && (
          <div className="mx-auto justify-center flex pt-4">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
