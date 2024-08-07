import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer1";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PhoneIcon,
  PlayIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

const cardData = [
  {
    id: "1",
    title: "Getting Started",
    href: "#",
    description:
      "Find tutorials, starter projects, and more to get you started on NCS.",
  },
  {
    id: "2",
    title: "Nobus Solutions",
    href: "#",
    description:
      "Find technical reference implementations to help you solve common problems.",
  },
  {
    id: "3",
    title: "Case Studies",
    href: "#",
    description: "Learn about how our active customers use NCS.",
  },
];

const resources = [
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
  {
    id: "4",
    title: "Contact Support",
    href: "#",
    description: "Let's help you resolve all the technical issues",
    image: "/secure.png",
    href: "/contact/support",
    icon: UserIcon,
  },
];

const sections = [
  {
    id: "compute",
    name: "Compute",
    items: [
      {
        name: "Nobus Flexible Compute Service (FCS)",
        href: "/documentation/fcs",
        desc: "A web service that provides resizable compute capacity in the cloud",
      },
      {
        name: "Dedicated Hosting",
        href: "/documentation/fcs",
        desc: "Worldwide hosting; instant ready with highest level of resource allocation, privacy, and control",
      },

      {
        name: "Nobus FCS AutoScaling",
        href: "/documentation/fcs#autoscaling",
        desc: "Automatically add or remove FCS instances according to conditions you define.",
      },
    ],
  },
  {
    id: "storage",
    name: "Storage/Backup",
    items: [
      {
        name: "Nobus Flexible Block Storage (FBS)",
        href: "/documentation/fbs",
        desc: "Provides block level storage volumes (1 GB to 1 TB ) for use with Nobus FC instances",
      },
      {
        name: "Flexible Object Storage (FOS)",
        href: "/documentation/fos",
        desc: "Extensive and unlimited storage in the cloud",
      },
      {
        name: "Nobus Cloud Backup",
        href: "/documentation/cloud-backup#cloud",
        desc: "Reliable backup solution for the cloud",
      },
      {
        name: "FOS Backup Solution",
        href: "/documentation/cloud-backup#fos",
        desc: "Extensive and unlimited storage in the cloud",
      },
    ],
  },
  {
    id: "network",
    name: "Networking",
    items: [
      {
        name: "Nobus Datacenter as a Service (DaaS)",
        href: "/documentation/networking",
        desc: "Network suited for various workloads",
      },
      {
        name: "Nobus Fast Transit (NFT)",
        href: "/documentation/networking#fasttransit",
        desc: "Exclusive allocated network connection",
      },
      {
        name: "Virtual Private Network (VPN)",
        href: "/documentation/networking#cloud-vpn",
      },
      {
        name: "Nobus Cloud Router",
        href: "/documentation/networking#cloud-router",
      },
      {
        name: "Nobus Domains and DNS",
        href: "/documentation/dns",
      },
      {
        name: "Floating IPs",
        href: "/documentation/networking#floating-ips",
      },
    ],
  },
  {
    id: "security",
    name: "Security Services",
    items: [
      {
        name: "Sophos XG Firewall",
        href: "#",
      },
      {
        name: "Acronis Cyber Protect",
        href: "#",
      },
      {
        name: "Fortigates",
        href: "#",
      },
      {
        name: "Security Groups",
        href: "#",
      },
    ],
  },
  {
    id: "container",
    name: "Container & Orchestration",
    items: [
      {
        name: "Cloud Containers",
        href: "#",
      },
      {
        name: "Cloud Kubernetes Engine",
        href: "#",
      },
    ],
  },
  {
    id: "database",
    name: "Database Service",
    items: [
      {
        name: "Microsoft SQL Server",
        href: "#",
      },
      {
        name: "MySQL",
        href: "#",
      },
      {
        name: "PostgreSQL",
        href: "#",
      },
      {
        name: "MongoDB",
        href: "#",
      },
    ],
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

const includedFeatures = [
  "Virtual Hosting",
  "Storage Services",
  "Cloud Backup/Disaster Recovery",
  "Networking Services",
  "Cloud Security",
  "Advanced Cyber Sercurity Service",
  "Image Services",
];

function index() {
  return (
    <section className="overflow-hidden">
      <Head>
        <title> Nobus | Documentation </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="top-0 grid gap-y-10">
        <div className="lg:[300px] xl:[300px] relative h-[300px] sm:h-[300px] 2xl:h-[400px]">
          <Image
            src="/herobg.png"
            layout="fill"
            objectFit="container"
            objectPosition="left"
            className="animate-fadeIn"
          />
          <div className="absolute top-1/2 w-full text-center transform -translate-y-1/2">
            <h1 className="hero-h">Nobus Documentation</h1>
            <p className="hero-p">
              Find user guides, developer guides, API references, tutorials, and
              more.
            </p>
          </div>
        </div>

        <div className="flex-col py-5 px-10 md:px-20">
          <div className="py-5 text-center">
            <h1 className="pb-3 text-3xl tracking-tight leading-relaxed font-semibold text-gray-800">
              Guides & API References
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div className="p-5 bg-white flex flex-col space-x-4 shadow rounded-lg border border-gray-300 text-left hover:scale-95">
                <div key={section.name} className="p-2 ">
                  <h4
                    id={`${section.name}-heading`}
                    className="text-xl font-medium text-gray-900"
                  >
                    {section.name}
                  </h4>
                  <ul
                    role="list"
                    aria-labelledby={`${section.name}-heading`}
                    className="mt-6  space-y-2 sm:mt-4 sm:space-y-4 list-none pl-0"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flex-col">
                        <p className="flex">
                          <img className="flex w-2 h-2" src="/arr-doc.png" />
                          <a
                            href={item.href}
                            className="hover:underline pl-2 -my-2 group-hover:scale-110 text-base"
                          >
                            {item.name}
                          </a>
                        </p>

                        <p className="text-base text-gray-700 text-justify tracking-tight leading-relaxed">
                          {item.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-col px-10 pt-10 md:px-20">
          <div className="py-5 text-center">
            <h1 className="pb-3 text-3xl tracking-tight leading-relaxed font-semibold text-gray-800">
              General Resources
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-y-8 gap-x-4 md:grid-cols-3 mx-auto lg:max-w-4xl">
            {cardData?.map((item) => (
              <div className="p-5 bg-white flex flex-col space-x-4 text-left shadow rounded border border-gray-300 group">
                <a href={item.href}>
                  <div className="py-5 cursor-pointer text-center">
                    <h1 className="pb-3 text-2xl tracking-wide leading-relaxed font-semibold text-gray-800 group-hover:underline group-hover:scale-105">
                      {item.title}
                    </h1>
                    <p className="text-base text-gray-700 tracking-wide leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-col p-5 sm:p-10 md:p-20 bg-gray-100">
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="block lg:hidden px-5 pb-5 lg:p-5">
              <img src="/faq.png" />
            </div>

            <div className="px-2 lg:px-5 bg-gray-100 flex flex-col lg:space-x-4">
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
            <div className="px-2 lg:px-5 bg-gray-100 flex flex-col space-x-4 group">
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

      <Footer />
    </section>
  );
}

export default index;
