import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  UserIcon,
  ArrowRightIcon,
  ServerIcon,
  BadgeCheckIcon,
  LockClosedIcon,
  DatabaseIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  CloudIcon,
  BookmarkIcon,
  ArchiveIcon,
  WifiIcon,
  BanIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  ExternalLinkIcon,
  ShieldExclamationIcon,
  ShieldCheckIcon,
  FolderOpenIcon,
  ChipIcon,
  LinkIcon,
  MenuAlt3Icon,
  KeyIcon,
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

function product() {
  return (
    <section>
      <Head>
        <title> Nobus | Product </title>
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
              Nobus Cloud Products
            </h1>
            <p className="text-sm sm:text-md font-semibold text-white tracking-wide leading-relaxed pb-4">
              Nobus Cloud Services offers infrastructure as a services
              cloud-based products that help organizations minimize the time and
              amount used to plan, procure, and manage their infrastructure in a
              scalable and secure way, over a private WAN or the internet
            </p>
          </div>
        </div>
        <div className="flex-col px-10 py-10 md:px-20">
          <div className="">
            <div>
              <h1 className="pb-5 text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Explore Product Categories
              </h1>
              <hr className="border-b-2 border-blue-400 max-w-[96px]" />
            </div>
            <div className="grid gap-y-8 gap-x-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
              {cardData?.map((item) => (
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
          <div className="pt-20">
            <div>
              <h1 className="pb-5 text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Top Products
              </h1>
              <hr className="border-b-2 border-blue-400 max-w-[76px]" />
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-4 mt-8">
              <div className="md:col-span-1">
                <div className="pb-20 md:pb-0 md:mr-10 ">
                  <a href="#building-cloud-operating-model">
                    <div className="p-2 text-center text-gray-600 bg-blue-50 hover:scale-95 font-semibold cursor-pointer border border-b-black shadow-md rounded ">
                      What is the cloud operating model?
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

                    <a href="https://dashboard.nobus.io/">
                      <div className="p-3 text-center text-gray-600 bg-blue-50 hover:scale-95 font-semibold cursor-pointer border border-b-black shadow-md rounded-50 ">
                        Sign in to the Dashboard
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="grid gap-y-8 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                  {cardSample?.map((item) => (
                    <div className="p-5 bg-white flex flex-col space-x-4 shadow rounded border border-gray-400 group">
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
            </div>
          </div>
          <div className="overflow-hidden bg-white pt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

        <div className="p-10 md:py-20 max-w-7xl mx-auto bg-indigo-50">
          <div id="building-cloud-operating-model" className="pt-10">
            <h1 className="pb-5 text-2xl text-center md:text-3xl xl:text-4xl font-semibold tracking-tight text-gray-900">
              What is the Cloud Operating Model?
            </h1>

            <p className="pb-10">
              Today, many IT leaders want to understand how to adopt cloud
              technology while maximizing cloud benefits, such as business
              agility, risk reduction, staff efficiency, and cost reduction.
              This paper outlines the principles for building a successful Cloud
              Operating Model that delivers innovative, cost effective,
              reliable, and secure solutions for the consumption and
              acceleration of business outcomes by the organizational business
              units.
            </p>
            <hr className="border-b border-blue-300 mx-20" />

            <div className="pt-10 space-y-4">
              <h1 className="text-2xl font-semibold">Introduction</h1>
              <p>
                The cloud operating model is a new approach for IT operations
                that enables organizations to be successful with cloud adoption
                and thrive in an era of multi-cloud architecture. Individuals
                and businesses all over the world use cloud computing on a daily
                basis. Cloud computing is a key driver of any data-driven
                economy, with cloud-based platforms, infrastructure and services
                supporting global businesses across every industry and sector.
              </p>

              <div className="py-1">
                {/* <img
                  src="/cop1.png"
                  alt="Product screenshot"
                  className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
                  width={2432}
                  height={1442}
                /> */}
              </div>
              <p>
                Your organization can unlock the fastest path to value in a
                modern multi-cloud datacenter. When your organization adopts
                this common operating model; it enables people, process, and
                tool to work most efficiently. companies to deliver tailored
                cloud-based solutions to improve IT efficiency,
                cost-effectiveness, security and accessibility within that
                business' IT framework.
              </p>

              <p>
                Here we review each component of the Cloud Operating Model
                approach to business and the path to optimizing and
                standardizing application delivery across every layer necessary
                to support a cloud-based architecture.
              </p>
            </div>

            <div className="pt-10 space-y-4">
              <h1 className="text-2xl font-semibold">
                Multi-datacenter transition
              </h1>
              <p>
                To begin, your organization must negotiate the initial
                challenge; the shift from largely dedicated servers in a private
                datacenter to a pool of compute capacity available on-demand,
                with many cloud providers.
              </p>

              <div className="py-1">
                {/* <img
                  src="/cop2.png"
                  alt="Product screenshot"
                  className="rounded-xl shadow-xl ring-1 ring-gray-400/10 "
                  width={2432}
                  height={1442}
                /> */}
              </div>
              <p>
                This approach allows your organization to optimize your
                infrastructure for consistent and reusable workflows across
                multiple clouds while addressing the common enterprise
                challenges of:
              </p>
              <ul className="space-y-4 list-disc list-inside ">
                <li>
                  core business databases and internal applications that must
                  stay private.
                </li>
                <li>
                  application delivery that's dependent on multiple teams.
                </li>
                <li>
                  technology changes from contained VM environments to cloud
                  'resources'.
                </li>
              </ul>
            </div>

            <div className="pt-10 space-y-4">
              <h1 className="text-2xl font-semibold">
                Cloud operating model foundations
              </h1>
              <p>
                Your IT organization can deliver on-demand resources when
                infrastructure is consistently provisioned, secured, connected,
                and run. For most enterprises, delivering on-demand resources
                will require a transition in each of those areas.
              </p>

              <div className="py-1">
                {/* <img
                  src="/cop3.png"
                  alt="Product screenshot"
                  className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
                  width={2432}
                  height={1442}
                /> */}
              </div>
              <ul className="space-y-4 list-disc list-inside ">
                <li className="">
                  <strong>Provision</strong>. The infrastructure layer
                  transitions from dedicated servers at limited scale to a
                  dynamic environment where organizations can adjust to
                  increased demand by spinning up thousands of servers and
                  scaling them down when not in use.
                </li>
                <li className="">
                  <strong>Secure</strong>. The security layer transitions from a
                  fundamentally “high-trust” world with a strong perimeter and
                  firewall to a “low-trust” or “zero-trust” environment with no
                  clear or static perimeter.
                </li>
                <li className="">
                  <strong>Connect</strong>. The networking layer transitions
                  from heavily dependent on the physical location and IP address
                  of services and applications to using a dynamic registry of
                  services for discovery, segmentation, and composition.
                </li>
                <li className="">
                  <strong>Run</strong>. The runtime layer shifts from deploying
                  artifacts to a static application server to deploying
                  applications with a scheduler atop a pool of infrastructure
                  which is provisioned on-demand. In addition, new applications
                  have become collections of services that are dynamically
                  provisioned, and packaged in multiple ways: from virtual
                  machines to containers.
                </li>
              </ul>
              <p>
                Establishing an appropriate cloud operating model is critical to
                forming your organization’s successful adoption of cloud and
                delivering greater business agility. The impact of the cloud
                will be felt across your entire organization (not just
                Information technology) and will significantly affect, and be
                affected by, your organizational culture and Information
                technology delivery structures. Understanding these implications
                and your company's desire to change are important elements of
                building a successful cloud operating model.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default product;
