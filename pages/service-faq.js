import Head from "next/head";
import { Disclosure } from "@headlessui/react";
import {
  MinusIcon,
  PlusIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import Header from "../components/Header";
import Footer from "../components/Footer1";
import Image from "next/image";

const cardData = [
  {
    id: "1",
    title: "Pay-as-you-use",
    description:
      "Pay-as-you-use allows you to easily adapt to changing business needs without over committing budgets and improving your responsiveness to changes. With a pay-as-you-use model, you can adapt your business depending on need and not on forecasts, reducing the risk of over provisioning or missing capacity.",
  },
  {
    id: "2",
    title: "Pay less by using more",
    description:
      "With Nobus, you can get volume based discounts and realize important savings as your usage increases. Nobus also gives you options to acquire services that help you address your business needs.",
  },
];
const sections = [
  {
    id: "compute",
    name: "Compute",
    items: [
      {
        name: "Nobus Flexible Compute Service (FCS)",
        href: "#",
      },
      {
        name: "Nobus Flexible Compute Service Autoscaling (FCSA)",
        href: "#",
        desc: "Resizable compute capacity in the cloud",
      },
    ],
  },
  {
    id: "storage",
    name: "Storage",
    items: [
      {
        name: "Nobus Flexible Block Storage (FBS)",
        href: "#",
        desc: "Block level storage volumes (1 GB to 1 TB ) for use with Nobus FC Instances",
      },
      {
        name: "Flexible Object Storage (FOS)",
        href: "#",
        desc: "Extensive and Unlimited Storage in the cloud",
      },
    ],
  },
  {
    id: "network",
    name: "Networking and Content Delivery",
    items: [
      {
        name: "Nobus Fast Transit (NFT)",
        href: "#",
        desc: "Exclusive allocated network connection",
      },
      {
        name: "Nobus Flexible Load Balancing (FLB)",
        href: "#",
        desc: "Maximum performance scale load balancing",
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

function faqs() {
  return (
    <section>
      <Head>
        <title> Nobus | Service FAQs </title>
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
            <h1 className="hero-h">Nobus Service FAQs</h1>
            <p className="hero-p">Get all the answers to your questions</p>
          </div>
        </div>

        <div className="px-10 md:px-20 py-10">
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2">
            <div className="px-5 md:py-5 lg:py-20 justify-self-center flex-col space-x-4">
              <div>
                <p className="pb-2 text-3xl md:text-4xl font-bold text-blue-500">
                  Free Tier
                </p>
                <p className="text-xl lg:text-2xl font-semibold">
                  Can I try Nobus before I buy?
                </p>
                <p className="text-base">
                  No. Nobus does not offer a free tier user account.
                </p>
              </div>
            </div>
            <div className="px-5 flex-col space-x-4 group">
              <div className="p-5">
                <img src="/faq.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 md:px-20 py-5 md:py-10">
          <p className="pb-10 text-blue-500 text-center text-3xl font-bold ">
            Account and Billing
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="px-5 bg-gray-100 flex flex-col space-x-4">
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
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.value}
                                  </p>
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
            <div className="px-5 bg-gray-100 flex flex-col space-x-4 group">
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
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <p className="pb-10 text-blue-500 text-center text-3xl font-bold ">
            Nobus FCS Instances
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="px-5 bg-gray-100 flex flex-col space-x-4">
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
            <div className="px-5 bg-gray-100 flex flex-col space-x-4 group">
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
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <p className="pb-10 text-blue-500 text-center text-3xl font-bold ">
            Nobus Cloud Storage
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="px-5 bg-gray-100 flex flex-col space-x-4">
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
            <div className="px-5 bg-gray-100 flex flex-col space-x-4 group">
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
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <p className="pb-10 text-blue-500 text-center text-3xl font-bold ">
            Nobus Networking
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="px-5 bg-gray-100 flex flex-col space-x-4">
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
            <div className="px-5 bg-gray-100 flex flex-col space-x-4 group">
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
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <p className="pb-10 text-blue-500 text-center text-3xl font-bold ">
            Nobus API
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="px-5 bg-gray-100 flex flex-col space-x-4">
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
            <div className="px-5 bg-gray-100 flex flex-col space-x-4 group">
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
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <p className="pb-10 text-blue-500 text-center text-3xl font-bold ">
            GDPR
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="px-5 bg-gray-100 flex flex-col space-x-4">
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
            <div className="px-5 bg-gray-100 flex flex-col space-x-4 group">
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
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <p className="pb-10 text-blue-500 text-center text-3xl font-bold ">
            Nobus Support
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="px-5 bg-gray-100 flex flex-col space-x-4">
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
            <div className="px-5 bg-gray-100 flex flex-col space-x-4 group">
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
          </div>
        </div>
        <div className="flex-col px-10 md:px-20 py-8 lg:px-0 lg:mx-40">
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2">
            <div className="p-5 flex flex-col space-x-4">
              <div className="py-2">
                <h1 className="pb-3 text-2xl tracking-wide leading-relaxed font-semibold text-gray-800">
                  Get in touch with us
                </h1>
                <p className="pt-4 text-base tracking-wide leading-relaxed text-gray-800">
                  Ready to start your next project with us? Send us an email and
                  we will get back to you as soon as possible!
                </p>
                <p className="text-base pt-2 tracking-wide leading-relaxed text-gray-800">
                  If you want more information about our services or if you have
                  experienced problems in using them, please contact us via the
                  following channels.
                </p>
              </div>
            </div>
            <div className="p-5 flex flex-col space-x-4">
              <div className="py-2">
                <div className="pt-4 text-xl font-semibold tracking-wide leading-relaxed text-gray-800">
                  <h6>
                    <b>Support: </b> support@nobus.io
                  </h6>
                  <h6>
                    <b>Sales: </b> sales@nobus.io
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default faqs;
