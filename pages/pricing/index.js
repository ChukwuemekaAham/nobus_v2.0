import Head from "next/head";
import { Disclosure } from "@headlessui/react";
import {
  MinusIcon,
  PlusIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

function index() {
  return (
    <section>
      <Head>
        <title> Nobus | Pricing </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
              Nobus Pricing
            </h1>
            <p className="text-sm sm:text-md lg:text-lg font-semibold text-white tracking-wide leading-relaxed pb-4">
              Low Ongoing Cost; pay-as-you-use pricing with flexible expenses,
              of short or long term commitments, without requiring complex
              licensing.
            </p>
          </div>
        </div>
        <div className="flex-col px-20 py-5">
          <div className="py-5 text-center">
            <h1 className="pb-3 text-3xl tracking-tight leading-relaxed font-semibold text-gray-800">
              Service Payment Options
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2">
            {cardData?.map((item) => (
              <div className="p-5 bg-gray-100 flex flex-col space-x-4 rounded-3xl text-left shadow-xl border group">
                <div className="py-5">
                  <h1 className="pb-3 text-2xl text-center tracking-wide leading-relaxed font-semibold text-gray-800">
                    {item.title}
                  </h1>
                  <p className="text-base text-gray-700 text-justify tracking-tight leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-col px-20 py-5">
          <div className="py-5 text-center">
            <h1 className="pb-3 text-3xl tracking-tight leading-relaxed font-semibold text-gray-800">
              Service Pricing
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-3">
            {sections.map((section) => (
              <div className="p-5 bg-white flex flex-col space-x-4 rounded-3xl text-left shadow-xl border hover:scale-95">
                <div key={section.name} className="p-2">
                  <p
                    id={`${section.name}-heading`}
                    className="text-xl font-medium text-gray-900"
                  >
                    {section.name}
                  </p>
                  <ul
                    role="list"
                    aria-labelledby={`${section.name}-heading`}
                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flex-col">
                        <p>
                          <a
                            href={item.href}
                            className="hover:underline group-hover:scale-110 text-base"
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
        <div
          className="px-20 py-10"
          style={{
            backgroundImage: "url('/backup.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col lg:flex-row mx-auto ">
            <div className="text-left lg:w-1/2 md:pr-20 pt-0 md:py-5 text-white">
              <h1 className="text-3xl xl:text-4xl font-semibold">
                Nobus Simple monthly calculator
              </h1>

              <p className="my-2 text-base xl:text-lg tracking-wide leading-relaxed max-w-7xl lg:mx-auto lg:pt-5 lg:pb-10">
                You can estimate your monthly bill (individual and multiple
                prices) using NCS Simple Monthly Calculator.
              </p>

              <div className="mt-10 pb-5 flex flex-col sm:flex-row md:justify-start">
                <a href="/simple_monthly_calculator">
                  <button className="w-full mt-2 sm:mt-0 sm:ml-2 sm:w-40 px-4 py-3 font-semibold text-md text-white rounded hover:shadow active:scale-90 cursor-pointer border border-white">
                    Calculate Cost
                  </button>
                </a>
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0">
              <div className="flex-col">
                <img src="/analytics.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col px-20 py-8 lg:px-0 lg:mx-40">
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2">
            <div className="p-5 flex flex-col space-x-4 text-left group">
              <div className="py-2">
                <h1 className="pb-3 text-2xl tracking-wide leading-relaxed font-semibold text-gray-800">
                  Related links
                </h1>
                <div className="pt-4 text-base font-semibold text-white tracking-wide leading-relaxed text-gray-800">
                  <h6>
                    <a href="/sla/">Service-level agreement (SLA)</a>
                  </h6>
                  <h6>
                    <a href="/agreement/">Customer agreement (CA)</a>
                  </h6>
                  <h6>
                    <a href="/service-terms">Service terms</a>
                  </h6>
                  <h6>
                    <a href="/documentation/">Resources</a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="p-5 bg-white flex flex-col space-x-4 rounded-3xl text-left shadow border group">
              <div className="py-2">
                <h1 className="pb-3 text-2xl tracking-wide leading-relaxed font-semibold text-gray-800">
                  Please note!
                </h1>
                <p className="pt-4 text-base tracking-wide leading-relaxed text-gray-800">
                  Take advantage of our platform that supports applications and
                  workloads across pools of physical infrastructure and
                  multi-cloud environments. Data centers often host an
                  organization's business-critical data and applications. Nobus
                  understand the integral part played by data centers. The
                  security and reliability of our data center and it information
                  is our top priority.
                </p>
                <p className="text-base tracking-wide leading-relaxed text-gray-800">
                  At nobus, you pay only for resources actually consumed and
                  save more.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col p-20 bg-gray-100">
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
              <div className="p-5">
                <img src="/faq.png" />
              </div>
              <a href="/service-faq" className="pl-2">
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
