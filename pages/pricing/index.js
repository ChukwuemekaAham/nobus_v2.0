import Head from "next/head";
import { Disclosure } from "@headlessui/react";
import {
  MinusIcon,
  PlusIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PhoneIcon,
  VideoCameraIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import Header from "../../components/Header";
import Footer from "../../components/Footer1";
import Image from "next/image";
import SimpleMonthlyCalculator from "../../components/Smc";

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
        href: "/pricing/fcs/price",
        desc: "A web service that provides resizable compute capacity in the cloud",
      },
      {
        name: "Dedicated Hosting",
        href: "/pricing/fcs/price",
        desc: "Worldwide hosting; instant ready with highest level of resource allocation, privacy, and control",
      },
    ],
  },
  {
    id: "storage",
    name: "Storage",
    items: [
      {
        name: "Nobus Flexible Block Storage (FBS)",
        href: "/pricing/fbs/price",
        desc: "Block level storage volumes (1 GB to 1 TB ) for use with Nobus FC Instances",
      },
      {
        name: "Flexible Object Storage (FOS)",
        href: "/pricing/fos/price",
        desc: "Extensive and Unlimited Storage in the cloud",
      },
      {
        name: "Acronis Cloud Backup",
        href: "/pricing/acronis/price",
        desc: "Cloud Backup and Disaster recovery for your entire workload",
      },
    ],
  },
  {
    id: "network",
    name: "Networking",
    items: [
      {
        name: "Bandwidth",
        href: "/pricing/networking/price",
        desc: "Exclusive allocated network connection",
      },
      {
        name: "Nobus Fast Transit (NFT)",
        href: "/pricing/networking/price",
        desc: "Exclusive allocated network connection",
      },
      {
        name: "Floating IPs",
        href: "/pricing/networking/price",
        desc: "Take advantage of our reserved virtual ips to achieve high availability and fault tolerance",
      },
      {
        name: "Cloud Router",
        href: "/pricing/networking/price",
        desc: "Exclusive allocated network connection",
      },
      {
        name: "Virtual Private Network",
        href: "/pricing/networking/price",
        desc: "Exclusive allocated network connection",
      },
    ],
  },
  {
    id: "dns",
    name: "Domains and DNS",
    items: [
      {
        name: "Nobus DNS",
        href: "/pricing/dns/price",
        desc: "Block level storage volumes (1 GB to 1 TB ) for use with Nobus FC Instances",
      },
    ],
  },
  {
    id: "database",
    name: "Database",
    items: [
      {
        name: "Cloud Database Services",
        href: "/pricing/database-services/price",
        desc: "Block level storage volumes (1 GB to 1 TB ) for use with Nobus FC Instances",
      },
    ],
  },
  {
    id: "image",
    name: "Image",
    items: [
      {
        name: "Windows Distribution",
        href: "/pricing/image-service/price",
        desc: "Managed licensing services. As well as bring your own license (BYOL)",
      },
      {
        name: "Opensource Linux Distribution",
        href: "/pricing/image-service/price",
        desc: "Get started quickly with opensource linux image distros",
      },
      {
        name: "Nobus Machine Images (NMI)",
        href: "/pricing/image-service/price",
        desc: "Preconfigured templates for your instance",
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
        <div className="lg:[500px] xl:[600px] relative h-[300px] sm:h-[400px] 2xl:h-[700px]">
          <Image
            src="/herobg.png"
            layout="fill"
            objectFit="container"
            objectPosition="left"
            className="animate-fadeIn"
          />
          <div className="absolute top-1/2 w-full text-center transform -translate-y-1/2">
            <h1 className="hero-h">Nobus Pricing</h1>
            <p className="hero-p">
              Low Ongoing Cost; pay-as-you-use pricing with flexible expenses,
              of short or long term commitments, without requiring complex
              licensing.
            </p>
          </div>
        </div>
        <div className="flex-col px-10 md:px-20 py-5">
          <div className="py-5 text-center">
            <h1 className="pb-3 text-3xl tracking-tight leading-relaxed font-semibold text-gray-800">
              Service Payment Options
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2">
            {cardData?.map((item) => (
              <div className="p-5 bg-gray-100 flex flex-col space-x-4 rounded text-left shadow border border-gray-300 group">
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
        <div className="flex-col px-10 md:px-20 py-5">
          <div className="py-5 text-center">
            <h1 className="pb-3 text-3xl tracking-tight leading-relaxed font-semibold text-gray-800">
              Service Pricing
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div className="p-5 bg-white flex flex-col space-x-4 rounded text-left shadow border border-gray-300 hover:scale-95">
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
                    className="mt-6 space-y-6 list-none pl-0 sm:mt-4 sm:space-y-4"
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
        <SimpleMonthlyCalculator />

        <div className="bg-white pb-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
                  Project Focused
                </h3>
                <p className="mt-6 text-justify text-md text-gray-600 tracking-tight">
                  Enhanced workflows with guided digital solutions for global
                  optimization; implement new processes faster, simplify data
                  storage and improve productivity. Easy and Secure Onboarding.
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>

                <div className="flex mt-5 py-5 justify-between border-t border-gray-300">
                  <div className="flex">
                    <a href="#">
                      <div className="flex justify-center px-2 py-2 sm:w-40 hover:bg-blue-100 hover:shadow-md active:scale-90 rounded cursor-pointer border font-semibold text-md bg-white text-gray-500 border-gray-400">
                        <PlayIcon className="h-6" />
                        <span className="inline-flex ml-2">Request Demo</span>
                      </div>
                    </a>
                  </div>
                  <div className="flex">
                    <a href="/contact">
                      <div className="flex justify-center px-2 py-2 sm:w-40 hover:bg-blue-500 hover:shadow-md active:scale-90 rounded cursor-pointer border font-semibold text-md bg-blue-600 text-white border-blue-600">
                        <PhoneIcon className="h-6" />
                        <span className="inline-flex ml-2">Contact Sales</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-indigo-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold tracking-wide text-gray-600">
                      {" "}
                      Flexible Capacity As Low As
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-semibold tracking-tight text-gray-900">
                        #3.00
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        NGN
                      </span>
                    </p>
                    <a
                      href="https://cloud.nobus.io/"
                      className="mt-10 cursor-pointer block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Visit Cloud Console
                    </a>
                    <p className="mt-6 text-xs leading-5 tracking-wide text-gray-600">
                      Start building your future
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
