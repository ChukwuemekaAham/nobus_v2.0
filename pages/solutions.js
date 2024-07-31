import React from "react";
import { Disclosure } from "@headlessui/react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer1";

import {
  DatabaseIcon,
  BookmarkIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  FolderOpenIcon,
  ChipIcon,
  LinkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import SimpleMonthlyCalculator from "../components/Smc";

const card = [
  {
    id: "1",
    title: "Compute",
    href: "#",
    icon: ChipIcon,
  },
  {
    id: "2",
    title: "Storage",
    href: "#",
    icon: FolderOpenIcon,
  },
  {
    id: "3",
    title: "Networking",
    href: "#",
    icon: GlobeAltIcon,
  },
  {
    id: "4",
    title: "Security & Identity",
    href: "#",

    icon: ShieldCheckIcon,
  },
  {
    id: "5",
    title: "Database",
    href: "#",

    icon: DatabaseIcon,
  },
  {
    id: "6",
    title: "Images",
    href: "#",

    icon: BookmarkIcon,
  },
];
const cardData = [
  {
    id: "1",
    title: "Nobus Services",
    desc: "Purpose-built cloud products",
  },
  {
    id: "2",
    title: "Nobus Solutions",
    desc: "Ready-to-deploy solutions assembling Nobus Services, code, and configurations",
  },
  {
    id: "3",
    title: "Guidance",
    desc: "Prescriptive architectural diagrams, sample code, and technical content",
  },
];

const cardSample = [
  {
    id: "1",
    tag: "Compute",
    title: "Nobus FCS",
    href: "#",
    description: "Let's talk about how we can help your business",
  },
  {
    id: "2",
    tag: "Storage",
    title: "Nobus Flexible Block Storage (FBS)",
    href: "#",
    description: "Find quick answers to resolve your issues",
  },
  {
    id: "3",
    tag: "Networking",
    title: "Nobus FastTransit",
    href: "#",
    description: "Let's help you resolve all the technical issues",
  },
  {
    id: "4",
    tag: "Security & Identity",
    title: "Nobus Classic Firewall",
    href: "#",
    description: "Let's help you resolve all the technical issues",
  },
  {
    id: "5",
    tag: "Storage",
    title: "Nobus Flexible Object Storage (FOS)",
    href: "#",
    description: "Let's help you resolve all the technical issues",
  },
  {
    id: "6",
    tag: "Networking",
    title: "Nobus VPC",
    href: "#",
    description: "Let's help you resolve all the technical issues",
  },
  {
    id: "7",
    tag: "Compute",
    title: "Nobus FCS Autoscaling",
    href: "#",
    description: "Let's talk about how we can help your business",
  },
  {
    id: "8",
    tag: "Images",
    title: "Linux Distro on Nobus",
    href: "#",
    description: "Let's talk about how we can help your business",
  },
  {
    id: "8",
    tag: "Images",
    title: "Windows Server Distro on Nobus",
    href: "#",
    description: "Let's talk about how we can help your business",
  },

  {
    id: "10",
    tag: "Compute",
    title: "Nobus Server Groups",
    href: "#",
    description: "Let's talk about how we can help your business",
  },

  {
    id: "11",
    tag: "Networking",
    title: "Nobus Floating IP",
    href: "#",
    description: "Let's talk about how we can help your business",
  },
  {
    id: "12",
    tag: "Cloud Backups",
    title: "Acronis Cloud Backup",
    href: "#",
    description: "Let's talk about how we can help your business",
  },
  {
    id: "13",
    tag: "Networking",
    title: "Cloud Router",
    href: "#",
    description: "Let's help you resolve all the technical issues",
  },
  {
    id: "14",
    tag: "Networking",
    title: "Domains and DNS",
    href: "#",
    description: "Let's help you resolve all the technical issues",
  },
  {
    id: "15",
    tag: "Compute",
    title: "Dedicated Hosting",
    href: "#",
    description: "Let's talk about how we can help your business",
  },
  {
    id: "16",
    tag: "Database",
    title: "MS SQL on Windows Server",
    href: "#",
    description: "Let's talk about how we can help your business",
  },
  {
    id: "17",
    tag: "Database",
    title: "MongoDB Cluster",
    href: "#",
    description: "Let's talk about how we can help your business",
  },
  {
    id: "18",
    tag: "Database",
    title: "MySQL Cluster",
    href: "#",
    description: "Let's talk about how we can help your business",
  },
  {
    id: "19",
    tag: "Database",
    title: "PostgreSQL Cluster",
    href: "#",
    description: "Let's talk about how we can help your business",
  },
];

const resData = [
  {
    id: "1",
    title: "Sales",
    href: "#",
    icon: LinkIcon,
  },
  {
    id: "2",
    title: "Support",
    href: "#",
    icon: LinkIcon,
  },
  {
    id: "3",
    title: "Tutorial Library",
    href: "#",
    icon: LinkIcon,
  },
  {
    id: "4",
    title: "Use Cases",
    href: "#",
    icon: LinkIcon,
  },
  {
    id: "5",
    title: "Knowledge Center",
    href: "#",
    icon: LinkIcon,
  },
];

const faqFilters = [
  {
    id: "compute",
    name: "Will Nobus really save me money?",
    options: [
      {
        value:
          "Yes. Compared to private cloud, with nobus you pay only for the resources that you actually use.",
      },
    ],
  },
  {
    id: "storage",
    name: "How can I set up my Nobus account?",
    options: [
      {
        value:
          "Nobus is very easy to use. You can go through the Nobus website to create an account.",
      },
      {
        value: "See Nobus fcs documentation to get started.",
        href: "/documentation/fcs/",
      },
    ],
  },
  {
    id: "payment",
    name: "What payment methods are acceptable by Nobus?",
    options: [
      {
        value:
          "We offer several payment methods for adding balance to your Nobus account:",
      },
      { value: "Credit cards: Visa and MasterCard" },
      {
        value:
          "PayStack: PayStack balance, bank account, debit and credit cards (payment methods may vary by region).",
      },
      { value: "Bank Transfers: Wallet" },
      {
        value:
          "Contact us if you have any questions about the payment methods, please contact support",
        href: "/contact/",
      },
    ],
  },
  {
    id: "usage",
    name: "How will I be billed for resource usage?",
    options: [
      {
        value:
          "All Simple plans on your account are billed hourly up to the monthly rate cap and the hourly rate is determined by dividing the monthly rate by 672 hours (28 days). However, if your server is online for more than 672 hours in a calendar month, we will bill you on the monthly rate. The Flexible plan is billed hourly according to our pricing for the used resources. All invoices are calculated based on UTC times.",
      },
    ],
  },
  {
    id: "shutdown",
    name: "How are cloud servers billed if shutdown?",
    options: [
      {
        value:
          "Cloud servers are billed per hour regardless of whether the server is powered on or shutdown.",
      },
    ],
  },
  {
    id: "other",
    name: "How does Nobus compare to other cloud providers?",
    options: [
      {
        value:
          "Nobus is hosted on a Tier III datacenter, Fully automated, User friendly, easy to use and you pay as you use.",
      },
    ],
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
        <div className="lg:[500px] xl:[600px] relative h-[300px] sm:h-[400px] 2xl:h-[700px]">
          <Image
            src="/herobg.png"
            layout="fill"
            objectFit="container"
            objectPosition="left"
            className="animate-fadeIn"
          />
          <div className="absolute top-1/2 w-full text-center transform -translate-y-1/2">
            <h1 className="hero-h">Nobus Cloud Solution</h1>
            <p className="hero-p">
              Start utilizing our cloud solutions for your diverse workloads
              today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center place-items-center mt-4">
              <a href="/registration">
                <button className="my-3 rounded-md px-10 py-4 font-bold border border-white text-white shadow-md transition duration-10 hover:bg-blue-800 hover:text-white hover:shadow-xl active:scale-90 animate-pulse">
                  Get Started <span aria-hidden="true"> &rarr;</span>
                </button>
              </a>
              <a href="/contact/sales">
                <button className="my-3 ml-0 sm:ml-4 flex rounded-md px-10 py-4 font-bold border border-white text-white shadow-md hover:bg-blue-800 hover:text-white hover:shadow-xl active:scale-90">
                  <img src="/phone.svg" />{" "}
                  <span className="pl-2">Contact Sales</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-col">
          <div className="px-10 md:px-20">
            <div>
              <h1 className="pb-5 text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Explore Our IaaS Solutions
              </h1>
              <hr className="border-b-2 border-blue-400 max-w-[100px]" />

              <p className="pt-5 text-justify">
                Organizations today are in search of vetted solutions and
                architectural guidance to rapidly solve business challenges.
                Whether customers prefer off-the-shelf deployments, or
                customizable architectures, the Nobus Solutions Library carries
                solutions built by Nobus and Nobus Partners for a broad range of
                industry and technology use cases.
              </p>
            </div>

            <div className="grid gap-y-8 gap-x-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
              {cardData?.map((item) => (
                <div className="p-5 bg-white space-x-4 shadow rounded border border-gray-300 group">
                  <div className="py-2">
                    <h1 className="pb-3 text-xl tracking-tight leading-relaxed font-semibold text-gray-800">
                      {item.title}
                    </h1>
                    <p className="text-sm text-gray-700 tracking-wide leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-col px-10 py-10 md:px-20">
            <div className="">
              <div>
                <h1 className="pb-5 text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                  Explore Categories
                </h1>
                <hr className="border-b-2 border-blue-400 max-w-[96px]" />
              </div>
              <div className="grid gap-y-8 gap-x-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
                {card?.map((item) => (
                  <div className="p-5 bg-white space-x-4 shadow rounded border border-gray-300 group">
                    <a href={item.href}>
                      <div className="py-2 cursor-pointer ">
                        <p className="pb-3">
                          <item.icon
                            className="h-[56px] w-[56px] flex-shrink-0 text-gray-600"
                            aria-hidden="true"
                          />
                        </p>
                        <h1 className="pb-3 text-lg tracking-tight leading-relaxed font-semibold text-gray-800 group-hover:text-blue-700  group-hover:scale-105">
                          {item.title}
                        </h1>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-20 px-10 md:p-20">
            <div className="lg:grid lg:grid-cols-3 lg:gap-4 mt-8">
              <div className="lg:col-span-1 hidden lg:block">
                <div className="pb-20 md:pb-0 md:mr-10 ">
                  <a href="https://dashboard.nobus.io/">
                    <div className="p-2 text-center text-gray-600 bg-slate-300  hover:scale-95 font-semibold cursor-pointer border border-b-black shadow-md rounded ">
                      Sign In to the Dashboard
                    </div>
                  </a>
                  <div className="pt-10 ">
                    <p className="border-t pt-5 pb-2 font-semibold text-sm text-gray-700">
                      Resources
                    </p>
                    <div className="text-md text-gray-600 space-y-2">
                      {resData?.map((item) => (
                        <div>
                          <a href={item.href}>
                            <span className="flex justify-between hover:p-2 hover:bg-slate-200">
                              <p className="text-gray-600">{item.title} </p>
                              <item.icon
                                className="h-4 w-4 flex-shrink-0 text-gray-600"
                                aria-hidden="true"
                              />
                            </span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-10 ">
                    <hr className="border-t py-5" />

                    <a href="/registration">
                      <div className="px-2 py-3 mx-10 md:mx-5 lg:mx-10 xl:mx-20 text-center text-gray-600 bg-slate-300 hover:scale-95 font-semibold cursor-pointer border border-b-black shadow-md rounded-50 ">
                        Create an Account
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 pb-10 md:pb-0 h-[580px] overflow-y-scroll scrollbar scrollbar-hide hover:scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                <div className="grid gap-y-8 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                  {cardSample?.map((item) => (
                    <div className="p-5 bg-white flex flex-col shadow space-x-4 rounded border border-gray-400 group">
                      <a href={item.href}>
                        <div className="py-2 cursor-pointer">
                          <p className="pb-3 text-md text-black tracking-tight leading-relaxed font-md group-hover:scale-105">
                            {item.tag}
                          </p>
                          <h1 className="pb-3 text-lg tracking-tight leading-relaxed font-semibold text-gray-800 group-hover:text-blue-700  group-hover:scale-105">
                            {item.title}
                          </h1>
                          <p className="text-sm text-gray-700 tracking-wide leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="block pt-10 lg:hidden">
                <div className="pb-20 md:pb-0 md:mr-10 ">
                  <a href="https://dashboard.nobus.io/">
                    <div className="p-2 text-center text-gray-600 bg-blue-50 hover:scale-95 font-semibold cursor-pointer border border-b-black shadow-md rounded ">
                      Sign In to the Dashboard
                    </div>
                  </a>
                  <div className="pt-10 ">
                    <p className="border-t pt-5 pb-2 font-semibold text-sm text-gray-700">
                      Resources
                    </p>
                    <div className="text-md text-gray-600 space-y-2">
                      {resData?.map((item) => (
                        <div>
                          <a href={item.href}>
                            <span className="flex justify-between hover:p-2 hover:bg-blue-100">
                              <p className="text-gray-600">{item.title} </p>
                              <item.icon
                                className="h-4 w-4 flex-shrink-0 text-gray-600"
                                aria-hidden="true"
                              />
                            </span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-10 ">
                    <hr className="border-t py-5" />

                    <a href="/registration">
                      <div className="px-2 py-3 mx-10 md:mx-5 lg:mx-10 xl:mx-20 text-center text-gray-600 bg-blue-50 hover:scale-95 font-semibold cursor-pointer border border-b-black shadow-md rounded-50 ">
                        Create an Account
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <SimpleMonthlyCalculator />
          </div>
          <div className="flex-col px-10 py-10 md:px-20 lg:px-0 lg:mx-40">
            <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
              <div className="p-0 lg:p-5 flex flex-col space-x-4 text-left group">
                <img src="/adv.png" />
              </div>

              <div className="my-5 border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md  text-justify">
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
                <p className="text-base tracking-tight leading-relaxed pt-2 px-2">
                  Take advantage of our platform that supports applications and
                  workloads across pools of physical infrastructure and
                  multi-cloud environments. Data centers often host an
                  organization's business-critical data and applications. Nobus
                  understand the integral part played by data centers. The
                  security and reliability of our data center and it information
                  is our top priority.
                </p>
                <p className="text-base tracking-tight leading-relaxed pt-2 px-2">
                  {" "}
                  At nobus, you pay only for resources actually consumed and
                  save more.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col p-5 sm:p-10">
            <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
              <div className="block lg:hidden px-5 pb-5 lg:p-5">
                <img src="/faq.png" />
              </div>

              <div className="px-2 lg:px-5 flex flex-col lg:space-x-4">
                <div className="">
                  {faqFilters.map((section) => (
                    <div className="overflow-y-scroll scrollbar-hide px-3">
                      <Disclosure as="div" key={section.id} className="py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root ">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white border border-gray-500 p-3 text-base text-gray-600  focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-8">
                                <span className="font-medium text-left">
                                  {section.name}
                                </span>
                                <span className="flex items-center">
                                  {open ? (
                                    <ChevronUpIcon
                                      className="h-4 w-4"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ChevronDownIcon
                                      className="h-4 w-4"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4 p-3 bg-blue-100">
                                {section.options.map((option) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <a
                                      href={option.href}
                                      className="font-md text-md text-gray-700"
                                    >
                                      <span aria-hidden="true" />
                                      {option.value}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-2 lg:px-5 flex flex-col space-x-4 group">
                <div className="hidden lg:block px-0 pb-5 lg:p-5 ">
                  <img src="/faq.png" />
                </div>
                <a href="/service-faq" className="lg:pl-2">
                  <button className="border border-gray-500 py-2 px-3 text-md font-semibold text-gray-500 ">
                    View more FAQs <span aria-hidden="true"> &rarr;</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default solution;
