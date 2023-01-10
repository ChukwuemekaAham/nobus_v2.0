import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer2 from "../../components/Footer2";
import { ArrowRightIcon, UserIcon } from "@heroicons/react/outline";

const cardData = [
  {
    id: "1",
    title: "Contact Sales",
    description: "Let's talk about how we can help your business",
    image: "/secure.png",
    href: "/contact/sales",
    icon: UserIcon,
  },
  {
    id: "2",
    title: "Q&A",
    description: "Find quick answers to resolve your issues",
    image: "/secure.png",
    href: "/helpcenter",
    icon: UserIcon,
  },
  {
    id: "3",
    title: "Contact Support",
    description: "Let's help you resolve all the technical issues",
    image: "/secure.png",
    href: "/contact/support",
    icon: UserIcon,
  },
];

function support() {
  return (
    <section>
      <Head>
        <title>Nobus | Technical Support</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div
        className="top-0 grid grid-cols-1 gap-y-10 gap-x-4 lg:grid-cols-2 h-screen"
        style={{
          backgroundImage: "url('/help.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center text-left">
          <div className="py-20 lg:pt-40 px-4">
            <h1 className="pb-4 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed font-bold text-white">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl font-semibold text-white tracking-wide leading-relaxed pb-4">
              Have a general inquiry?
              {/*  */}{" "}
              <span>
                <a href="#" className="text-blue-500 hover:text-blue-400">
                  contact our team.
                </a>
              </span>{" "}
            </p>

            <p className="text-xl lg:text-2xl font-semibold text-white tracking-wide leading-relaxed pb-5">
              Call Us:
              {/*  */}{" "}
              <span>
                <a className="text-blue-500">+234 (0) 805-2995-476</a>
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex min-h-full items-center justify-center">
          <div className="w-full max-w-md space-y-8 bg-blue-100 p-8">
            <div>
              <h2 className="mt-6 text-center text-xl font-semibold tracking-wide text-gray-800">
                Make an appointment
              </h2>
              <p className="mt-2 text-center text-sm font-medium text-gray-600">
                our support team will be in touch within 24hrs.
              </p>
            </div>
            <form className="mt-8 space-y-8" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter your message"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="px-10">
        <Footer2 />
      </div>
    </section>
  );
}

export default support;
