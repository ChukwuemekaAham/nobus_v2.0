import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useStore from "../../store";
import Head from "next/head";
import Headerregister from "../../components/HeaderRegister";

const index = () => {
  
  const store = useStore();
  const authUser = store.authUser;

  const router = useRouter();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (!authUser) {
      toast.error( "Login required", {
        position: toast.POSITION.TOP_RIGHT,
      });  
      router.push("/login");
    } else {
        setIsClient(true)
    }

  }, [authUser, router]);

  return (
    <section className="min-h-screen">
      <Head>
        <title>Nobus | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headerregister />
      <hr className="border-t " />

        <div className="mx-auto justify-center my-20">
            {isClient &&
            <div className="space-y-2 text-left justify-center px-10 py-20">
                <p className="text-2xl font-semibold">USER DASHBOARD PROFILE</p>
                <p>Project Name: {authUser?.project[0].name}</p>
                <p>ProjectID: {authUser?.project[0].id}</p>
                <p>Email: {authUser?.user.email}</p>  
                {/* <p>Availability Zone: {authUser?.az}</p>  */}
            </div>
            }
        </div>
        
    </section>
  );
};

export default index;
