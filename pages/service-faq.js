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

const accountFilters = {
  item1: [
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
  ],
  item2: [
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
  ],
};

const computeFilters = {
  item1: [
    {
      id: "1",
      name: "How can I connect to my instances?",
      options: [
        {
          value:
            "We recommend using SSH for Linux servers and Remote Desktop for Windows.",
        },
        {
          value: "See connecting to your fcs instance for more information.",
          href: "/documentation/fcs/#connecting-to-instance",
        },
      ],
    },
    {
      id: "2",
      name: "Will I have access to a console on my server?",
      options: [
        {
          value:
            "Yes, within seconds of deploying a server! You can use SSH, VNC, RDC for Windows, as well as the convenient web Console at your Nobus control panel.",
        },
        {
          value: "See connecting to your fcs instance for more information.",
          href: "/documentation/fcs/#connecting-to-instance",
        },
      ],
    },
    {
      id: "3",
      name: "What SLAs are available for Nobus VMs?",
      options: [
        {
          value:
            "For all Virtual Machines that have two or more instances deployed in the same Availability Zone, we guarantee you will have Virtual Machine Connectivity to at least one instance at least 99.982% of the time.",
        },
        {
          value:
            "For any Single Instance Virtual Machine using Standard SSD Managed Disks for Operating System Disk and Data Disks, we guarantee you will have Virtual Machine Connectivity of at least 99.982%.",
        },
        {
          value:
            "See nobus Service Level Agreements (SLAs) for more information",
          href: "/sla",
        },
      ],
    },
    {
      id: "4",
      name: "Create VMs in Nobus through the nobus cloud console",
      options: [
        {
          value:
            "To create new VMs, visit the Nobus console at https://cloud.nobus.io/project/",
          href: "https://cloud.nobus.io/project/",
        },
        {
          value:
            "You must have an account with nobus to be able to create an instance",
        },
      ],
    },
    {
      id: "5",
      name: "Can I use any other image? ",
      options: [
        {
          value:
            "Yes. If you can’t find your favourite flavour of Linux or Windows, you can always upload your custom images",
        },
      ],
    },
    {
      id: "6",
      name: "What operating system do you support?",
      options: [
        {
          value:
            "We offer a suite of popular Linux distributions and Windows templates for fast server deployment.These include Debian, OpenSUSE, CentOS, Ubuntu, Fedora and Windows Server with different versions of each. You can upload other operating systems or your custom images, but charges applies.",
        },
      ],
    },
  ],
  item2: [
    {
      id: "7",
      name: "Can I use my own Windows licence?",
      options: [
        {
          value:
            "As a licensed Microsoft partner, we offer cloud servers running the latest Windows Server products. However, this means that Microsoft Windows licences you want to use on Nobus must be purchased from us. By signing the Microsoft License Mobility Agreement (MLMA), you may use your existing Microsoft licences such as Microsoft SQL Server database software, Microsoft Exchange Server, Microsoft SharePoint Server and many others.",
        },
        {
          value: "Contact support learn more",
          href: "/contact/support",
        },
      ],
    },
    {
      id: "8",
      name: "How do I connect using Remote Desktop?",
      options: [
        {
          value:
            "You’ll need to enter the IP address of your cloud server and then authenticate using the username “Administrator” and your server password.",
        },
        {
          value:
            "See connecting to your windows server using RDP to learn more",
          href: "/documentation/fcs/#connecting-to-instance",
        },
      ],
    },
    {
      id: "9",
      name: "Do you offer Microsoft SQL licences?",
      options: [
        {
          value:
            "We currently offer MS SQL licences. By signing the Microsoft License Mobility Agreement you can use many of your existing Microsoft licenses such as Microsoft SQL Server database software, Microsoft Exchange Server, Microsoft SharePoint Server, and more.",
        },
      ],
    },
    {
      id: "10",
      name: " Do you offer managed hosting? ",
      options: [
        {
          value:
            "Not at this time. Nobus is an infrastructure-as-a-service provider and we focus on offering the best ‘tabula rasa’ in the cloud for developers and businesses to freely build upon. However, we have an extensive network of partners offering world-class managed hosting services. ",
        },
      ],
    },
    {
      id: "11",
      name: "What standards are your data centres certified for?",
      options: [
        {
          value:
            "Our data centres are certified for different requirements such as ISO9001, ISO27001, ISO14001, ISO14644-8, OHSAS 18001, PCI DSS, PAS 99, VAHTI T3 and KATAKRI.",
        },
        {
          value: "Contact us for an up-to-date list of all certificates.",
          href: "/contact",
        },
      ],
    },
  ],
};

const storageFilters = {
  item1: [
    {
      id: "1",
      name: "What disk storage options are there when I provision a new Nobus VM?",
      options: [
        {
          value:
            "The available disk type is standard solid-state drives (SSDs).",
        },
      ],
    },
    {
      id: "2",
      name: " How much storage can I have per server?",
      options: [
        {
          value:
            " Each cloud server can have up to 8 storage devices 2TB each to the maximum of 16 TB of storage capacity. You can always add more storage capacity after deployment.",
        },
      ],
    },
    {
      id: "3",
      name: "How do I change storage size? ",
      options: [
        {
          value:
            "You can increase storage size from the dashboard under Resizing tab in the server settings. Afterwards, you also need to increase the storage in the OS of your cloud server. ",
        },
      ],
    },
    {
      id: "4",
      name: "I've increased my storage size, but it didn't change on my server.",
      options: [
        {
          value:
            "You need to tell your server operating system to use the new storage space.",
        },
      ],
    },
  ],
  item2: [
    {
      id: "5",
      name: "Do I need to pay extra for persistent storage?",
      options: [
        {
          value:
            "Not at all. Every storage device, whether SSDs or HDD, is fully persistent.",
        },
      ],
    },
    {
      id: "6",
      name: "Do you offer server backups?",
      options: [
        {
          value:
            "Of course! You can take manual snapshot backups of any storage device on your server or schedule automatic backups. The backups are a quick way to restore an earlier state of your server or a simple way to archive data. Read more about backups in our tutorial.",
        },
      ],
    },
    {
      id: "7",
      name: "Are your storage devices encrypted?",
      options: [
        {
          value:
            "Not by default. Full storage encryption can be challenging to install and maintain, so instead, we focus on making your storage devices secure without encryption. You are, of course, free to encrypt your storage if you wish.",
        },
      ],
    },
  ],
};

const networkingFilters = {
  item1: [
    {
      id: "1",
      name: "Do nobus offer IPv6 support?",
      options: [
        {
          value:
            "No. For now  IPv6 address is  disabled. We plan to implement it soon. ",
        },
      ],
    },
    {
      id: "2",
      name: "How can I test your network speed? ",
      options: [
        {
          value:
            "You can do a network speed test by manually copying files between servers. Alternatively, you can test the network latency using ping.",
        },
      ],
    },
    {
      id: "3",
      name: "Do you support multiple IP addresses per server?",
      options: [
        {
          value:
            "Yes. Each server can have up to 5 public IPv4 addresses and 1 private IPv4 address. Find out more in our guide for attaching new IP addresses.",
        },
      ],
    },
    {
      id: "4",
      name: "What ports do you block on servers?",
      options: [
        {
          value: "All ports are unlocked with the exception of the port 25.",
        },
      ],
    },
    {
      id: "5",
      name: "Do you allow outbound SMTP?",
      options: [
        {
          value:
            "Yes, but you must follow common good practices when sending any marketing emails. Spamming is strictly prohibited. As such the port 25 used by SMTP is blocked by default on all new accounts.",
        },
      ],
    },
  ],
  item2: [
    {
      id: "6",
      name: "How is data transfer outside monthly quota billed?",
      options: [
        {
          value:
            "If the included outbound traffic runs out, we bill each additional GB of transfer according to our standard pricing at N6,000 monthly. All inbound and private network traffic is free of charge.",
        },
      ],
    },
    {
      id: "7",
      name: "How can I set my domain to my cloud server?",
      options: [
        {
          value:
            " You will need to point your domain name to the public IP address of your cloud server at your domain name registrar.",
        },
        {
          value: "See nobus domains and dns documentation for more information",
          href: "/documentation/dns",
        },
      ],
    },
    {
      id: "8",
      name: "Can I bring my own IPs or IP range?",
      options: [
        {
          value: "Yes, you can do this in our Private Cloud. ",
        },
        {
          value: "Contact us for more information.",
          href: "/contact",
        },
      ],
    },
    {
      id: "9",
      name: "Do you offer private networking?",
      options: [
        {
          value:
            "Yes. Our SDN private networks and the account-wide utility network allow your servers to communicate securely. Only servers on your account can communicate via the utility network connection while with SDN private networks you get even more control over which cloud servers are connected. Your private networks are exclusively yours.",
        },
      ],
    },
  ],
};

const apiFilters = {
  item1: [
    {
      id: "1",
      name: "Do you offer an API?",
      options: [
        {
          value:
            "Yes. We have built a fully-featured API which allows you to perform all the operations available at your Nobus Cloud Config Panel. The same API is used by our backend and it always has the latest features and updates.",
        },
      ],
    },
  ],
  item2: [
    {
      id: "2",
      name: "Where can I find my API keys?",
      options: [
        {
          value: "Nobus allows you to create the API ID and API key yourself.",
        },
      ],
    },
  ],
};

const gdprFilters = {
  item1: [
    {
      id: "1",
      name: "Are you GDPR compliant?",
      options: [
        {
          value:
            "Yes. Nobus is fully GDPR compliant and we have followed similar principles for a long time, even before GDPR was introduced.",
        },
        {
          value:
            "Read more about GDPR and how it protects your privacy at our agreement update.",
          href: "/agreement",
        },
      ],
    },
    {
      id: "2",
      name: "Do you provide Data Processing Addendum (DPA)?",
      options: [
        {
          value:
            "If GDPR applies to your organization and you need a DPA to satisfy the GDPR requirements, contact our support.",
        },
        {
          value: "contact support.",
          href: "/contact",
        },
        {
          value:
            "Read more about GDPR and how it protects your privacy at our agreement update.",
          href: "/agreement/dpa",
        },
      ],
    },
  ],
  item2: [
    {
      id: "3",
      name: "What personal data do you collect?",
      options: [
        {
          value:
            "We collect and process certain personal data (contact, billing and behavioural) in compliance with GDPR to enhance our services. This does not include any personal data stored on your cloud servers. Those are not accessible by Nobus and they are under your sole discretion.",
        },
      ],
    },
    {
      id: "4",
      name: "How can I delete or retrieve the data Nobus has about me?",
      options: [
        {
          value:
            "You may exercise your right to view, modify, or delete your personal data through your Nobus Cloud Config Panel.",
        },
        {
          value: "",
          href: "",
        },
      ],
    },
  ],
};

const supportFilters = {
  item1: [
    {
      id: "1",
      name: "Do you have a support help desk I can contact? ",
      options: [
        {
          value:
            "Yes, always! We have a friendly dedicated team of technical support specialists available 24/7. On average, we’ll respond in less than 5 minutes! We are happy to assist with any technical questions related to our infrastructure and services but are unable to manage any of our users’ cloud servers.",
        },
      ],
    },
    {
      id: "2",
      name: " How can I contact your support? ",
      options: [
        {
          value:
            "You can contact us via direct messages, email or phone lines in four different time zones.",
        },
        {
          value: "Find the contact details here.",
          href: "/contact",
        },
      ],
    },
  ],
  item2: [
    {
      id: "3",
      name: "What kind of assistance can you provide?",
      options: [
        {
          value:
            "We can help you with any technical difficulties you might experience with our services and their use. Don’t hesitate to contact us and ask for help! ",
        },
        {
          value: "Contact technical support",
          href: "/contact/support",
        },
      ],
    },
    {
      id: "4",
      name: "Can you help me get started? ",
      options: [
        {
          value:
            "We have an extensive library of support articles, tutorials, and guides to help you configure your cloud server.",
        },
        {
          value: "Check out our knowledge base to learn more.",
          href: "/documentation",
        },
      ],
    },
  ],
};

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
                {accountFilters.item1.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item1-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
                {accountFilters.item2.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item2-${section.id}-${index}`}
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
                {computeFilters.item1.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item1-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
                {computeFilters.item2.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item2-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <p className="pb-10 text-blue-500 text-center text-3xl font-bold ">
            Nobus Cloud Storage
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="px-5 bg-gray-100 flex flex-col space-x-4">
              <div className="">
                {storageFilters.item1.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item1-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
                {storageFilters.item2.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item2-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <p className="pb-10 text-blue-500 text-center text-3xl font-bold ">
            Nobus Networking
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="px-5 bg-gray-100 flex flex-col space-x-4">
              <div className="">
                {networkingFilters.item1.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item1-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
                {networkingFilters.item2.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item2-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <p className="pb-10 text-blue-500 text-center text-3xl font-bold ">
            Nobus API
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="px-5 bg-gray-100 flex flex-col space-x-4">
              <div className="">
                {apiFilters.item1.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item1-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
                {apiFilters.item2.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item2-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <p className="pb-10 text-blue-500 text-center text-3xl font-bold ">
            GDPR
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="px-5 bg-gray-100 flex flex-col space-x-4">
              <div className="">
                {gdprFilters.item1.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item1-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
                {gdprFilters.item2.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item2-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <p className="pb-10 text-blue-500 text-center text-3xl font-bold ">
            Nobus Support
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            <div className="px-5 bg-gray-100 flex flex-col space-x-4">
              <div className="">
                {supportFilters.item1.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item1-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
                {supportFilters.item2.map((section) => (
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
                              {section.options.map((option, index) => (
                                <div
                                  key={`item2-${section.id}-${index}`}
                                  className="flex items-center"
                                >
                                  <p className="font-md text-md text-gray-700">
                                    <span aria-hidden="true" />
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        className="text-blue-500 hover:underline"
                                      >
                                        {option.value}
                                      </a>
                                    ) : (
                                      <span>{option.value}</span>
                                    )}
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
