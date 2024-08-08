import Head from "next/head";
import { React, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer1";
import { PhoneIcon } from "@heroicons/react/outline";
import SidebarDocs from "../../../components/SidebarDocs";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
import Access from "../../../components/fcsdoc/Access";
import Quickstart from "../../../components/fcsdoc/Quickstart";
import BestPractices from "../../../components/fcsdoc/BestPractices";
import Instance from "../../../components/fcsdoc/Instance";
import Autoscaling from "../../../components/fcsdoc/Autoscaling";
import { Tab } from "@headlessui/react";
import DedicatedHosting from "../../../components/fcsdoc/DedicatedHosting";
import Connect from "../../../components/fcsdoc/Connect";
import Footer2 from "../../../components/Footer2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function index() {
  const [open, setOpen] = useState(true);

  const categories = [
    "Instance",
    "Nobus Machine Images (NMIs)",
    "Location ( Availability Zones )",
    "Root Device Volume",
  ];

  return (
    <section className="overflow-hidden bg-gray-300">
      <Head>
        <title> Documentation - Nobus Flexible Compute Service </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex px-5 py-3 justify-between shadow border-y border-gray-300 bg-white">
          <div className="flex">
            <div className="flex">
              {!open ? (
                <button
                  type="button"
                  className="rounded-full bg-gray-100 p-2 text-gray-400 shadow-md"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <ChevronDoubleRightIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className="rounded-full bg-gray-100 p-2 text-gray-400 shadow-md"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <ChevronDoubleLeftIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              )}
              <h4 className="pl-2 pt-3">FCS Documentation</h4>
            </div>
          </div>
          <div className="flex">
            <a href="/contact/support">
              <div className="flex justify-center px-2 py-2 sm:mt-0 sm:ml-4 sm:w-40 hover:bg-blue-50 hover:shadow-lg active:scale-90 rounded cursor-pointer border font-semibold text-md bg-white text-gray-500 border-gray-400">
                <PhoneIcon className="h-6" />
                <span className="inline-flex ml-2">Support</span>
              </div>
            </a>
          </div>
        </div>
        <div className={`grid`}>
          <div className={`${!open && "hidden"}`} aria-hidden="true">
            <SidebarDocs open={open} setOpen={setOpen} />
          </div>

          <div
            className={`ml-0 lg:ml-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl h-[580px] overflow-y-scroll scrollbar scrollbar-hide ${
              !open && "ml-0 lg:ml-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl"
            }`}
          >
            <div className="p-5">
              <div className={`bg-white shadow rounded border border-gray-300`}>
                <div id="overview" className="flex-col p-5 lg:p-10">
                  <h1 className="pb-10 text-center">
                    Nobus Flexible Compute Service
                  </h1>
                  <section className="mx-auto text-justify">
                    <p>
                      Nobus Flexible Compute Service is a web service that
                      provides{" "}
                      <span className="font-semibold">
                        resizable compute capacity
                      </span>{" "}
                      in the cloud. FCS allows{" "}
                      <span className="font-semibold">
                        creating Virtual Machines (VM) on-demand
                      </span>
                      , configure security and networking, and manage storage.
                      Provide tools to{" "}
                      <span className="font-semibold">
                        build failure resilient applications
                      </span>{" "}
                      by launching application instances inseparate Availability
                      Zone. <span className="font-semibold">Auto Scaling</span>{" "}
                      allows automatical scaling of the capacity up during
                      demand spikes to maintain performance, and scales down
                      during demand lulls to minimize costs.{" "}
                      <span className="font-semibold">
                        Flexible Load Balancing
                      </span>{" "}
                      automatically distributes incoming application traffic
                      across multiple FCS instances. Pay only for resources
                      actually consumed, in{" "}
                      <span className="font-semibold">instance-hours</span>.
                    </p>

                    <div className="py-4">
                      <h2>Features of Nobus FCS</h2>
                      <h5>Nobus FCS provides the following features:</h5>
                      <ul>
                        <li>
                          <p>
                            Virtual computing environments, known as{" "}
                            <u>instances</u>
                          </p>
                        </li>
                        <li>
                          <p>
                            Several configurations of CPU, memory, storage, and
                            networking capacity for your instances, known as{" "}
                            <u>Instance type</u>
                          </p>
                        </li>
                        <li>
                          <p>
                            Preconfigured templates for your instances, known as{" "}
                            <u>Nobus Machine Images (NMIs)</u>.
                          </p>
                        </li>
                        <li>
                          <p>
                            Secure login details for your instances using{" "}
                            <u>key pairs</u>
                          </p>
                        </li>
                        <li>
                          <p>
                            Storage volumes which behave like raw, unformatted
                            block devices, allowing users to create a file
                            system on top of FBS volumes, or use them in any
                            other way you would use a block device (like a hard
                            drive).
                          </p>
                        </li>
                        <li>
                          <p>
                            Storage volumes for your data, refered to as{" "}
                            <u>Nobus FBS volumes</u>. Nobus FBS volumes (
                            derived from Nobus block store ) are
                            network-attached, and persist independently from the
                            life of an instance. Provides block level storage
                            volumes (1 GB to 1 TB ) for use with Nobus FCS
                            instances.
                          </p>
                        </li>
                        <li>
                          <p>
                            Physical location for your resources, such as
                            instances and NobusFBS volumes, refered to as{" "}
                            <u>Availability Zones</u>
                          </p>
                        </li>
                        <li>
                          <p>
                            Firewall which aide the specifying of ports,
                            protocols, and source IP ranges that can get to your
                            instances using <u>security groups</u>
                          </p>
                        </li>
                        <li>
                          <p>
                            Static IPv4 addresses for dynamic cloud computing,
                            refered to as <u>Flexible IP addresses</u>
                          </p>
                        </li>
                        <li>
                          <p>
                            Metadata that can be created and assigned to Nobus
                            FCS resources refered to as <u>tags</u>
                          </p>
                        </li>
                        <li>
                          <p>
                            Nobus cloud Logically isolated virtual networks
                            which can be optionally connected to your own
                            network refered to as <u>Data center</u>
                          </p>
                        </li>
                      </ul>
                      <a
                        className="px-5 py-2"
                        href="https://dashboard.nobus.io"
                      >
                        Visit to get started with Nobus FCS
                      </a>
                    </div>

                    <div className="space-y-2">
                      <h4>Helpful services</h4>

                      <p>
                        Nobus FCS resources, such as instances and volumes, can
                        be provisioned directly using Nobus FCS. See{" "}
                        <a href="#">Nobus FCS Auto Scaling User Guide</a> for
                        more.
                      </p>

                      <p>
                        Spread incoming application traffic across several
                        instances automatically using Nobus Flexible Load
                        Balancing. See{" "}
                        <a href="#">Flexible Load Balancing User Guide</a>, for
                        more information.
                      </p>

                      <p>
                        To import virtual machine (VM) images from your local
                        environment into Nobus cloud and convert them into
                        ready-to-use NMIs or instances, use VM Import/Export.
                      </p>

                      <h4>
                        Nobus FCS Console (Nobus FCS web-based user interface)
                      </h4>

                      <p>
                        If you've signed up for a Nobus account, you can access
                        the Nobus FCS console by signing into the Nobus
                        Management Console homepage and then select{" "}
                        <span className="step-item">Compute</span> from
                        Projects.
                      </p>

                      <h4>Nobus FCS Pricing</h4>
                      <p>
                        See <a href="/pricing/fcs/price">Nobus FCS Pricing</a>{" "}
                        for a comprehensive list of charges for Nobus FCS,
                      </p>

                      <p>
                        Visit the{" "}
                        <a href="http://dashboard.nobus.io/">
                          Nobus Management Dashboard{" "}
                        </a>{" "}
                        to see your bill.
                      </p>
                      <p>
                        If you have questions concerning Nobus billing and
                        account
                        <a href="/contact/"> contact Support</a>.
                      </p>

                      <h4>
                        Payment Card Industry (PCI) Data Security Standard (DSS)
                        Compliance
                      </h4>
                      <p>
                        Nobus FCS supports the processing, storage, and
                        transmission of credit card data by a merchant or
                        service provider.
                      </p>
                    </div>
                    <div className="px-2 lg:px-10  my-10 border shadow-sm rounded-md">
                      <div className="w-full px-2 py-4 md:py-16 sm:px-0">
                        <Tab.Group vertical>
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            <Tab.List className="flex flex-col col-span-1 rounded-xl bg-gray-100">
                              <h2 className="py-2 pl-2">TOPICS</h2>
                              {categories.map((category) => (
                                <Tab
                                  key={category}
                                  className={({ selected }) =>
                                    classNames(
                                      "w-full py-2.5 pl-2 text-md text-left font-medium leading-5",
                                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none",
                                      selected
                                        ? "bg-white text-blue-500 shadow"
                                        : "text-gray-800 hover:bg-white/[0.12] hover:text-gray-400"
                                    )
                                  }
                                >
                                  {category}
                                </Tab>
                              ))}
                            </Tab.List>

                            <Tab.Panels className="flex flex-col col-span-1 md:col-span-2 p-5">
                              <Tab.Panel>
                                <h3>Instances</h3>
                                <div className="space-y-5">
                                  <p>
                                    An instance is a virtual server in the
                                    cloud. Several types of instances can be
                                    launched from a single Image or Nobus
                                    Machine Image (NMI). The hardware of the
                                    host computer which your instance use is
                                    determined by the instance types. Each
                                    instance type offers different compute and
                                    memory capabilities.{" "}
                                    <span className="flex mt-2">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-6 w-6 text-blue-400"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                      <span className="font-mono font-semibold text-blue-400 pl-2">
                                        Important:{" "}
                                      </span>{" "}
                                    </span>{" "}
                                    Select a Flavor based on the workload to be
                                    attached to your instance. See{" "}
                                    <a href="#">Nobus FCS Instance Types</a> for
                                    more information.
                                  </p>

                                  <p>
                                    You can interact with your instance same as
                                    any computer after launch. You have total
                                    control over your instances and can use{" "}
                                    <code className="code">sudo</code> to run
                                    commands that require root privileges.
                                  </p>

                                  <p>
                                    Your Nobus account has a limit on the number
                                    of instances that you can have running.
                                  </p>

                                  <p>
                                    To prevent accidental termination, you can
                                    disable instance termination. Your instance
                                    also shut off running when they fail.
                                  </p>

                                  <p>
                                    See <a href="#">Instance Documentation</a>{" "}
                                    for more information
                                  </p>
                                </div>

                                <h5>Security Best Practices</h5>
                                <ul className="list-disc">
                                  <li>
                                    <p>
                                      Different security groups can be created
                                      to deal with instances that have different
                                      security requirements. Always revisit the
                                      rules in your security groups and Only
                                      open up permissions that are needed by
                                      you.
                                    </p>
                                  </li>
                                  <li>
                                    <p className="pt-2">
                                      Control access by permitting only trusted
                                      networks or hosts to gain entry to ports
                                      on your instance.
                                    </p>
                                  </li>
                                </ul>

                                <div className="my-5 border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md mr-auto max-w-md text-justify">
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

                                  <p className="text-sm pt-2 px-2">
                                    Some Nobus resources, such as Nobus FBS
                                    volumes and IP addresses, incur charges not
                                    minding the state of your instance.
                                  </p>
                                </div>
                              </Tab.Panel>
                              <Tab.Panel>
                                <h3>Nobus Machine Images (NMIs)</h3>

                                <div className="space-y-2">
                                  <p>
                                    A Nobus Machine Image (NMI) is a template
                                    that is usually a configuration of software
                                    like having an operating system, an
                                    application server, and application(s).
                                    Several instances of a NMI can be set
                                    running. You can launch a new instance from
                                    the NMI if it fails.
                                  </p>
                                  <p>
                                    Custom NMI or NMIs can be made by you, to
                                    enable the launch of a new instance
                                    containing everything you need.
                                  </p>
                                  <p>
                                    All NMIs are{" "}
                                    <span className="step-item">
                                      {" "}
                                      NobusFBS backed{" "}
                                    </span>{" "}
                                    basically, meaning that the root device for
                                    an instance launched from the NMI is a
                                    NobusFBS volume,
                                  </p>
                                </div>
                              </Tab.Panel>
                              <Tab.Panel>
                                <h3>Location ( Availability Zone )</h3>
                                <p>
                                  {" "}
                                  <span className="step-item">
                                    Availability Zones
                                  </span>{" "}
                                  are the location where Nobus FCS is hosted.
                                  this location is usually isolated. Resource
                                  like instance, can reside in this zone with
                                  through Nobus FCS. This achieves the greatest
                                  possible fault tolerance and stability.
                                </p>

                                <p>
                                  Your instance, and NMI must be in the same
                                  availability zone.
                                </p>

                                <h5>
                                  Launching Instances in an Availability Zone
                                </h5>
                                <p>
                                  When you launch your instances, accept the
                                  default Availability Zone, this is based on
                                  Nobus FCS available capacity.
                                </p>
                              </Tab.Panel>
                              <Tab.Panel>
                                <h3>Root Device Volume</h3>
                                <div className="space-y-5">
                                  <p>
                                    Root device volume contains the image used
                                    to boot the instance at launch time. if your
                                    Nobus Machine Image (NMIs) are backed by
                                    NobusFBS, then the root device for every
                                    instance launched from the NMI is a NobusFBS
                                    volume made from a NobusFBS snapshot.
                                  </p>

                                  <p>
                                    You have the option to use a NobusFBS
                                    supported NMI or Nobus FCS instance store
                                    supported NMI. We recommend that you use
                                    NMIs supported by NobusFBS, since they use
                                    persistent storage and launch faster.
                                  </p>
                                  <p>
                                    See <a href="#">Best Practices</a> for root
                                    device volume
                                  </p>
                                </div>
                              </Tab.Panel>
                            </Tab.Panels>
                          </div>
                        </Tab.Group>
                      </div>
                    </div>
                  </section>
                  <Access />
                  <Quickstart />
                  <BestPractices />
                  <Instance />
                  <Connect />
                  <Autoscaling />
                  <DedicatedHosting />
                </div>
              </div>
              <div className="p-5 text-sm tracking-wide leading-relaxed">
                <p>Except otherwise...</p>
              </div>
              <div>
                <Footer2 />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default index;
