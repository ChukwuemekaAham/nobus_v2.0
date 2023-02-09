import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowRightIcon, UserIcon } from "@heroicons/react/outline";

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
  {
    id: "4",
    title: "Nobus FAQs",
    href: "#",
    description:
      "Get all the answers to the frequently asked questions about Nobus cloud.",
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
        href: "#",
        desc: "A web service that provides resizable compute capacity in the cloud",
      },
      {
        name: "Adding SSH Keys",
        href: "#",
      },
      {
        name: "Connect to Your Linux Instance",
        href: "#",
      },
      {
        name: "Connect to Your Windows Instance",
        href: "#",
      },
    ],
  },
  {
    id: "storage",
    name: "Storage/Backup",
    items: [
      {
        name: "Nobus Flexible Block Storage (FBS)",
        href: "#",
        desc: "Provides block level storage volumes (1 GB to 1 TB ) for use with Nobus FC instances",
      },
      {
        name: "Flexible Object Storage (FOS)",
        href: "#",
        desc: "Extensive and unlimited storage in the cloud",
      },
      {
        name: "Acronis Cloud Backup",
        href: "#",
        desc: "Disaster recovery",
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
      {
        name: "Instance IP Addressing",
        href: "#",
      },
      {
        name: "Flexible Network Interfaces",
        href: "#",
      },
      {
        name: "Domains and DNS",
        href: "#",
      },
      {
        name: "Floating IPs",
        href: "#",
      },
      {
        name: "Security Groups",
        href: "#",
      },
      {
        name: "Virtual Private Network (VPN)",
        href: "#",
      },
    ],
  },
  {
    id: "security",
    name: "Advanced Security",
    items: [
      {
        name: "Sophos Cyber Protect",
        href: "#",
      },
      {
        name: "Sophos XG Firewall",
        href: "#",
      },
      {
        name: "PFSense",
        href: "#",
      },
      {
        name: "Acronis Cyber Security Protection ",
        href: "#",
      },
    ],
  },
];

function index() {
  return (
    <section>
      <Head>
        <title> Nobus | Documentation </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="top-0 grid gap-y-10">
        <div
          className="flex-col justify-center text-center"
          style={{
            backgroundImage: "url('/doc.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="py-20 px-8 lg:pt-40 sm:px-20">
            <h1 className="pb-4 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed font-bold text-white">
              Nobus Documentation
            </h1>
            <p className="text-sm sm:text-md font-semibold text-white tracking-wide leading-relaxed pb-4">
              Find user guides, developer guides, API references, tutorials, and
              more.
            </p>
          </div>
        </div>
        <div className="flex-col py-5 px-20">
          <div className="py-5 text-center">
            <h1 className="pb-3 text-3xl tracking-tight leading-relaxed font-semibold text-gray-800">
              Guides & API References
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2">
            {sections.map((section) => (
              <div className="p-5 bg-white flex flex-col space-x-4 rounded-3xl text-left shadow-xl border border-gray-400 hover:scale-95">
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
          className="p-20"
          style={{
            backgroundImage: "url('/backup.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col lg:flex-row mx-auto">
            <div className="text-left lg:w-1/2 md:pr-20 pt-0 lg:pt-10 xl:pt-20 text-white">
              <h1 className="text-3xl xl:text-4xl font-semibold">
                We are project focused
              </h1>

              <p className="my-5 text-md tracking-wide leading-relaxed max-w-7xl lg:mx-auto lg:py-6 xl:py-5 xl:text-lg">
                Easy and Secure Onboarding. Displaying the highest level of
                Integrity in the way we conduct our business
              </p>
              <a href="/blog">
                <button className="w-full sm:w-40 px-4 py-3 rounded hover:shadow active:scale-90 cursor-pointer text-md font-semibold bg-blue-600 text-white border-2 border-blue-600">
                  Get Started
                </button>
              </a>
            </div>

            <div className="hidden lg:block lg:w-1/2 lg:mt-0">
              <div className="flex-col">
                <img src="/backup2.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col p-20">
          <div className="py-5 text-center">
            <h1 className="pb-3 text-3xl tracking-tight leading-relaxed font-semibold text-gray-800">
              General Resources
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-y-8 gap-x-4 md:grid-cols-2 lg:grid-cols-4 lg:mx-20">
            {cardData?.map((item) => (
              <div className="p-5 bg-white flex flex-col space-x-4 rounded-xl text-left shadow-lg border border-gray-300 group">
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
      </div>
      <Footer />
    </section>
  );
}

export default index;
