import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  ArrowCircleUpIcon,
  ServerIcon,
  LockClosedIcon,
  DatabaseIcon,
  ArchiveIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  FolderOpenIcon,
  ChipIcon,
  LinkIcon,
  MenuAlt3Icon,
} from "@heroicons/react/outline";

const cardData = [
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
];

const features = [
  {
    name: "Migrate your Workloads",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ArrowCircleUpIcon,
  },
  {
    name: "Deploy in Seconds.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ServerIcon,
  },
  {
    name: "Multiple Instance-Flavors.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: MenuAlt3Icon,
  },
  {
    name: "Firewall.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: DatabaseIcon,
  },
  {
    name: "Backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ArchiveIcon,
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

function demo() {
  return (
    <section>
      <Head>
        <title> Nobus | Demo </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="top-0 grid gap-y-10">
        <div
          className="flex-col justify-center text-center"
          style={{
            backgroundImage: "url('/iaas.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="py-20 px-8 lg:pt-40 sm:px-20 ">
            <h1 className="pb-4 text-3xl md:text-4xl lg:text-5xl tracking-wide leading-relaxed font-bold text-white">
              Nobus Cloud Platform Demo
            </h1>
          </div>
        </div>
        <div className="flex-col px-10 py-10 md:px-20">
          <p className="text-base pb-10">
            Nobus Cloud Services offers infrastructure as a services cloud-based
            products that help organizations minimize the time and amount used
            to plan, procure, and manage their infrastructure in a scalable and
            secure way, over a private WAN or the internet
          </p>
          <div className="overflow-hidden bg-white">
            <div className="sm:mx-auto sm:max-w-7xl sm:px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-lg sm:text-xl font-bold leading-8 tracking-tight text-blue-500">
                      Deploy faster
                    </h2>
                    <p className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                      Experience workflow boost
                    </p>
                    <p className="mt-6 text-md leading-8 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon
                              className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            {feature.name}
                          </dt>{" "}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <img
                  src="/nd32.png"
                  alt="Product screenshot"
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default demo;
