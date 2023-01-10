import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRightIcon, UserIcon } from "@heroicons/react/outline";
import CalPrice from "../components/CalPrice";

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
];

const pricingData = [
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

function smc() {
  return (
    <section>
      <title> Nobus | Simple Monthly Calculator </title>
      <link rel="icon" href="/favicon.ico" />

      <Header />

      <div className="top-0 grid gap-y-10">
        <div
          className="flex-col justify-center text-center"
          style={{
            backgroundImage: "url('/pricing.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="py-20 px-8 lg:pt-40 sm:px-20">
            <h1 className="pb-4 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed font-bold text-white">
              Calculate your savings
            </h1>
            <p className="text-sm sm:text-md lg:text-lg font-semibold text-white tracking-wide leading-relaxed pb-4">
              Nobus Flexible Compute Service (Nobus FCS) is a web service that
              provides resizable compute capacity in the cloud. It is designed
              to make web-scale computing easier for developers. Nobus Flexible
              Block Store (FBS) provides persistent storage to Nobus FCS
              instances.
            </p>
          </div>
        </div>
        <div className="px-20 py-10">
          <div className="flex-col">
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
            <div className="py-5 text-center">
              <h1 className="pb-3 text-xl tracking-wide leading-relaxed font-semibold text-gray-800">
                Ensure to select the appropriate flavor for each images (linux
                or windows)
              </h1>
            </div>
          </div>
          <div className="flex-col">
            <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2">
              <div className="">
                <CalPrice />
              </div>
              <div className="">2</div>
              <div className="">3</div>
            </div>
          </div>
          <div className="text-center py-10">
            <h1 className="pb-3 text-xl tracking-wide leading-relaxed font-semibold text-gray-800">
              Charges displayed by this calculator are as a result of the
              infomation you provided and may differ from Nobus original
              billing. You will be billed based on how you use Nobus services.
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default smc;
