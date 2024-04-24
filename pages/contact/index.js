import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowRightIcon, UserIcon } from "@heroicons/react/outline";

const cardData = [
  {
    id: "1",
    title: "Contact Sales",
    description: "Let's talk about how we can help your business",
    image: "/sales.png",
    href: "/contact/sales",
    icon: UserIcon,
  },
  {
    id: "2",
    title: "Knowledge Center",
    description: "Find quick guide and productbase articles",
    image: "/qa.png",
    href: "/documentation",
    icon: UserIcon,
  },
  {
    id: "3",
    title: "Contact Support",
    description: "Let's help you resolve all the technical issues",
    image: "/sup.png",
    href: "/contact/support",
    icon: UserIcon,
  },
];

function index() {
  return (
    <section>
      <Head>
        <title>Nobus | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="top-0 grid grid-cols-1 gap-y-10 gap-x-4 lg:grid-cols-2">
        <div
          className="flex justify-center text-left"
          style={{
            backgroundImage: "url('/cont6.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
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
        <div className="flex p-8">
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2">
            {cardData?.map((item) => (
              <div className="p-5 bg-blue-500 flex flex-col space-x-4 rounded-3xl text-left shadow-2xl border group">
                {" "}
                <img
                  src={item.image}
                  className="h-20 w-20 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {/* <div className="pl-4">
                            <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />

                            </div> */}
                <div className="">
                  <h1 className="py-3 text-2xl tracking-wide leading-relaxed font-semibold text-white">
                    {item.title}
                  </h1>
                  <p className="text-base text-white tracking-wide leading-relaxed pb-5">
                    {item.description}
                  </p>
                </div>
                <div className="flex text-sm text-center justify-between">
                  <a></a>

                  <a href={item.href} className="font-medium mr-4 text-base">
                    <ArrowRightIcon className="h-5 md:h-6 text-sm font-medium bg-gray-200 group-hover:bg-gray-600 group-hover:text-white rounded-full p-1" />
                  </a>
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

export default index;
