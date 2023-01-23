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
              Nobus Simple Monthly Calculator
            </h1>
            <p className="text-sm sm:text-md lg:text-lg font-semibold text-white tracking-wide leading-relaxed pb-4">
              Calculate your savings
            </p>
          </div>
        </div>
        <div className="px-10 lg:px-20 py-5">
          <div className="flex-col">
            <div className="py-5 text-left">
              <p class="pb-3">
                {" "}
                Nobus Flexible Compute Service (Nobus FCS) is a web service that
                provides resizable compute capacity in the cloud. It is designed
                to make web-scale computing easier for developers. Nobus
                Flexible Block Store (FBS) provides persistent storage to Nobus
                FCS instances.
              </p>
            </div>
          </div>
        </div>
        <section className="p-20 bg-gray-100">
          <div className="grid grid-cols-1 gap-y-20 sm:gap-x-4 lg:gap-x-20 md:grid-cols-2 ">
            <div className="flex-col py-10 px-10 bg-white text-gray-700 shadow-lg rounded-xl border">
              <p class="pb-3 ">
                <b>Please Note :</b> <br /> For each Running Licensed Windows
                Instance, you incur an additional charge of{" "}
                <b>Seventeen Thousand Naira ( +17000 naira)</b>
                to the initial calculated cost of selected Windows Instance
                Types (Flavor).{" "}
              </p>

              <p>
                Ensure to select the appropriate flavor for each images (linux
                or windows)
              </p>
            </div>
            <div className="flex-col py-10 px-10">
              <p class="pb-3 font-semibold">
                keys
                <br />
              </p>
              <p class="text-red-600">
                nomenclature; si...l -- linux only <br />
                si...w -- windows only <br />
              </p>
            </div>
          </div>
        </section>

        <div className="flex-col py-10 px-10 lg:px-20 bg-white">
          <CalPrice />
        </div>
        <div className="p-10 lg:px-20 bg-gray-100 text-center">
          <p className="font-semibold text-gray-700">
            Charges displayed by this calculator are as a result of the
            infomation you provided and may differ from Nobus original billing.
            You will be billed based on how you use Nobus services.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default smc;
