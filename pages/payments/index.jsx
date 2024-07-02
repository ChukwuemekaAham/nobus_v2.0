import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LoadingButton } from "../../components/LoadingButton";
import { toast } from "react-toastify";
import Link from "next/link";
import useStore from "../../store";
import Head from "next/head";
import Headerregister from "../../components/HeaderRegister";
import Footer2 from "../../components/Footer2";
import PaystackButton from '../../components/PaystackButton';
import { Buffer } from 'buffer';

const API_URL = process.env.NEXT_PUBLIC_API_URL
const PUBLIC_KEY = process.env.NEXT_PUBLIC_LIVE_PAYSTACK_PUBLIC_KEY

const index = () => {
  
  const store = useStore();
  const authUser = store.authUser;

  console.log({"unencrypted token": authUser?.token});
  
  const encryptedToken = Buffer.from(`${authUser?.token}`, 'utf-8').toString('base64');

  console.log({"encrypted token": encryptedToken});

  const router = useRouter();
  const [isClient, setIsClient] = useState(false)

  const onSuccess = (reference) => {
   
    // Upon successful payment, retrieve the payment reference data
    const trans_ref = reference;
  
    const transaction_reference = trans_ref.reference

    const paymentData = { 
      transaction_reference
    }

    console.log('Payment reference stored:', paymentData);

    // Make API request to store payment reference in MongoDB  
    try {
      const response = fetch(`${API_URL}/user/card`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authUser?.token}`,
        },
        body: JSON.stringify(paymentData),         
      })
      if (response.status !== 200) {
        toast.error( response.statusText, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } 
      if (response.status === 200) {
        toast.success( "Card added successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        router.push(`/login/loginWithToken/?token=${encryptedToken}`);
      }
    } catch (error) {
      console.error('Error storing payment reference:', error);
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

  const onClose = () => {
    // Handle payment closure
    console.log('Payment modal closed without completing payment');
    // Perform additional actions or trigger the webhook here

    // // Send a POST request to your webhook endpoint
    // fetch(`${API_URL}/paystack/webhook`, {
    //   method: 'POST',
    //   body: JSON.stringify({ event: 'payment_closed' }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log('Webhook request sent successfully');
    //     } else {
    //       console.error('Failed to send webhook request');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error sending webhook request:', error);
    //   });
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: `${authUser?.user.email}`,
    amount: 10000, // Amount in kobo (100 naira)
    publicKey: `${PUBLIC_KEY}`, // Replace with your Paystack public key
  };

  const componentProps = {
    ...config,
};

  useEffect(() => {
    if (!store.authUser) {
      toast.error( "Login required", {
        position: toast.POSITION.TOP_RIGHT,
      });  
      router.push("/registration/continue");
    } else if (store.authUser?.company.added_payment_details == true) {
        toast.success( "Card already added", {
          position: toast.POSITION.TOP_RIGHT,
        });    
        router.push(`/login/loginWithToken/?token=${encryptedToken}`);
    } else {
      setIsClient(true)
    }
  }, [authUser, router, encryptedToken]);

  return (
    <section className="min-h-screen">
      <Head>
        <title>Nobus | Payment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="">
        <div className="mt-0">
          <div className="lg:grid lg:grid-cols-3">
            <div className="mt-5 lg:col-span-2 md:mt-0 ">
              <Headerregister />
              <hr className="border-t " />
              {isClient &&
                <div className="mx-auto text-center space-y-2 justify-center px-10 pt-20 pb-5">
                  <div className="flex flex-col">
                    <a href="/">
                      <img className="h-16 w-auto mx-auto mb-5" src="/2fa.png" alt="" />
                    </a>
                    <p className="text-xl font-semibold">Hello 👋 {authUser?.user.first_name}</p>
                    <p><span className="font-semibold">Date Registered:</span> {authUser?.project[0].date_created}</p>      
                  
                  </div>
                 
                  <h3 className="text-xl text-center pt-10 font-medium tracking-wider text-gray-500">
                     VERIFY YOUR DEBIT CARD INFORMATION
                  </h3>
                  
                  <p className="mt-1 pt-2 text-sm text-gray-600 mx-auto md:mx-20">
                    We make a temporary deduction of N100 Naira (or an equivalent amount in local currency)
                    as a pending transaction for 3-5 days to verify your identity.
                  </p>
                </div>
               
              }
              <div className="bg-gray-50 max-w-sm mx-auto px-4 pb-20 text-right sm:px-6">
                <PaystackButton className="bg-blue-600 w-full inline-flex justify-center tracking-wide leading-relax rounded-full border border-transparent py-2 px-4 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
                {...componentProps} onSuccess={onSuccess} onClose={onClose} />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-1">
                <img className="w-full h-full bg-contain" src="/k8s-ad.png" alt="" />
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
