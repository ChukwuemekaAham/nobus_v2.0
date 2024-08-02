import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer1";
import { ArrowRightIcon, UserIcon } from "@heroicons/react/outline";
import CalPrice from "../components/CalPrice";
import Image from "next/image";

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
        <div className="lg:[500px] xl:[600px] relative h-[300px] sm:h-[400px] 2xl:h-[700px]">
          <Image
            src="/herobg.png"
            layout="fill"
            objectFit="container"
            objectPosition="left"
            className="animate-fadeIn"
          />
          <div className="absolute top-1/2 w-full text-center transform -translate-y-1/2">
            <h1 className="hero-h">Simple Monthly Calculator</h1>
            <p className="hero-p">Calculate your savings</p>
          </div>
        </div>
        <section className="md:px-20 md:py-5">
          <div className="grid grid-cols-1 gap-y-5 sm:gap-x-4 lg:gap-x-20 md:grid-cols-2 mx-auto max-w-4xl justify-center">
            <div className="border-l-2 border-l-blue-500 bg-blue-100 p-2 mx-10 md:mx-auto rounded-md text-justify">
              <span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 text-blue-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span className="font-mono font-semibold text-blue-600 pl-2">
                  Note:
                </span>{" "}
              </span>
              <div className="text-sm pt-2 px-2">
                <p>
                  For each Running Licensed Windows Instance, you incur an
                  additional charge of{" "}
                  <b>Thirty Five Thousand Naira ( + N35,000 Naira )</b> to the
                  initial calculated cost of selected Windows Instance Types
                  (Flavor).{" "}
                </p>
                <p>
                  Ensure to select the appropriate flavor for each images (linux
                  or windows)
                </p>
              </div>
            </div>
            <div className="flex-col mx-auto">
              <p class="pb-3 font-bold">
                keys
                <br />
              </p>
              <p class="text-red-600">
                nomenclature; <br /> si...l -- linux only <br />
                si...w -- windows only <br />
              </p>
            </div>
          </div>
        </section>

        <div className="flex-col py-10 px-2 lg:px-20 bg-white">
          <CalPrice />

          <p className="mx-10 md:mx-auto max-w-5xl text-sm text-justify py-4">
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
