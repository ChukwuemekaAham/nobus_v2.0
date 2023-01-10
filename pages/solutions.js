import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRightIcon, UserIcon } from "@heroicons/react/outline";

const cardData = [
  {
    id: "1",
    title: "Contact Sales",
    href: "#",
    description: "Let's talk about how we can help your business",
    image: "/secure.png",
    href: "/contact/sales",
    icon: UserIcon,
  },
  {
    id: "2",
    title: "Q&A",
    href: "#",
    description: "Find quick answers to resolve your issues",
    image: "/secure.png",
    href: "/helpcenter",
    icon: UserIcon,
  },
  {
    id: "3",
    title: "Contact Support",
    href: "#",
    description: "Let's help you resolve all the technical issues",
    image: "/secure.png",
    href: "/contact/support",
    icon: UserIcon,
  },
];

function solution() {
  return (
    <section>
      <Head>
        <title> Nobus | Solution </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="top-0 grid gap-y-10">
        <div
          className="flex-col justify-center text-center"
          style={{
            backgroundImage: "url('/solutions.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="py-20 px-8 lg:pt-40 sm:px-20">
            <h1 className="pb-4 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed font-bold text-white">
              Nobus Solution
            </h1>
            <p className="text-sm sm:text-md lg:text-lg font-semibold text-white tracking-wide leading-relaxed pb-4">
              Start utilizing our cloud solutions for your diverse workloads
              today.
            </p>
          </div>
        </div>
        <div className="flex-col p-8">
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2">
            {cardData?.map((item) => (
              <div className="p-5 bg-gray-100 flex flex-col space-x-4 rounded-3xl text-left shadow-3xl border group">
                {" "}
                <img
                  src={item.image}
                  className="h-20 w-20 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {/* <div className="pl-4">
                        <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />

                        </div> */}
                <div className="py-5">
                  <h1 className="pb-3 text-2xl tracking-wide leading-relaxed font-semibold text-gray-800">
                    {item.title}
                  </h1>
                  <p className="text-base text-white tracking-wide leading-relaxed text-gray-800">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default solution;
