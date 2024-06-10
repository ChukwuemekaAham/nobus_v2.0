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

const API_URL = process.env.NEXT_PUBLIC_API_URL
const PUBLIC_KEY = process.env.NEXT_PUBLIC_LIVE_PAYSTACK_PUBLIC_KEY


const index = () => {
  
  const store = useStore();
  const authUser = store.authUser;
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
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUser?.token}`,
          },
          body: JSON.stringify(paymentData),         
        })
        if (response.status !== 200 || 400) {
          toast.error( response.statusText, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        if (response.status === 400) {
          
          toast.success( "Card already added", {
            position: toast.POSITION.TOP_RIGHT,
          });    
          router.push("/");
        }
        if (response.status === 200) {
          toast.success( "Payment successful", {
            position: toast.POSITION.TOP_RIGHT,
          });
          router.push("/payments/success");
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
    console.log(store.authUser);
    if (!store.authUser) {
      router.push("/registration/continue");
    } else {
      setIsClient(true)
    }
  }, []);

  return (
    <section className="min-h-screen">
      <Head>
        <title>Nobus | Payment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="">
        <div className="mt-10 sm:mt-0">
          <div className="lg:grid lg:grid-cols-3">
            <div className="mt-5 lg:col-span-2 md:mt-0 ">
              <Headerregister />
              <hr className="border-t " />

              {isClient &&
                <div className="space-y-2 text-left justify-center px-10 py-20">
                  <p className="text-lg font-semibold">PROFILE</p>
                  <p>ProjectID: {authUser?.project[0].id}</p>
                  <p>Email: {authUser?.user.email}</p>               

                  <h3 className="text-xl text-center pt-20 font-medium leading-relax tracking-wider text-gray-500">
                     VERIFY YOUR DEBIT CARD INFORMATION
                  </h3>
                  
                  <p className="mt-1 pt-2 text-sm text-gray-600 mx-auto md:mx-20">
                    We make a temporary deduction of N100 Naira (or an equivalent amount in local currency)
                    as a pending transaction for 3-5 days to verify your identity.
                  </p>
                </div>
               
              }
             
                  
              <div className="bg-gray-50 px-4 pb-5 text-right sm:px-6">
                <PaystackButton className="bg-blue-600 w-full inline-flex justify-center tracking-wide leading-relax rounded-full border border-transparent py-2 px-4 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
                {...componentProps} onSuccess={onSuccess} onClose={onClose} />
              </div>
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