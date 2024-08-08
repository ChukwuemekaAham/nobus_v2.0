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
import Quickstart from "../../../components/networkingdoc/Quickstart";
import FastTransit from "../../../components/networkingdoc/FastTransit";
import CloudRouter from "../../../components/networkingdoc/CloudRouter";
import CloudLoadBalancer from "../../../components/networkingdoc/CloudLoadBalancer";
import CloudVpn from "../../../components/networkingdoc/CloudVpn";

import { Tab } from "@headlessui/react";
import Footer2 from "../../../components/Footer2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function index() {
  const [open, setOpen] = useState(true);
  const categories = [
    "Instance IP Addressing",
    "Flexible Network Interface",
    "Floating IPs",
    "Network Firewall",
    "Network ACLs",
  ];

  return (
    <section className="overflow-hidden bg-gray-300">
      <Head>
        <title> Documentation - Nobus Networking Services </title>
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
              <h4 className="pl-2 pt-3">Networking Documentation</h4>
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
              <div className={`bg-white shadow-lg border border-gray-300`}>
                <div
                  id="data-center-as-a-service"
                  className="flex-col p-5 lg:p-10"
                >
                  <h1 className="pb-10 text-center">
                    Nobus Data Center as a Service (DaaS)
                  </h1>

                  <section className="mx-auto text-justify">
                    <div className="pt-5 space-y-5">
                      <p>
                        Nobus understand the integral part played by Data
                        centers. The security and reliability of our data center
                        and it information is our top priority. DaaS allows
                        connection to public or private network infrastructure
                        with an encrypted VPN (MPLS or Internet) connection.
                        Take advantage of the our platform that supports
                        applications and workloads across pools of physical
                        infrastructure and multi-cloud environments. Data
                        centers often host an organization's business-critical
                        data and applications.
                      </p>
                      <p>
                        Nobus ensures that both facility and equipment are
                        secured against intruders, while providing
                        round-the-clock access to information thus, securely
                        sustaining the highest availability possible. Services
                        such as Security Groups, Firewall as a Service (Faas),
                        Network ACLs, Loadbalancer, Auto-Scaling of resources
                        and workloads, Software defined Network infrastructure
                        such as switches and routers, are available for
                        provisioning.
                      </p>
                      <p>
                        You have complete control over your virtual networking
                        environment, including; selection of your own IP address
                        range, creation of subnets, and configuration of route
                        tables and network gateways.
                      </p>
                    </div>

                    <div className="w-full px-2 py-16 sm:px-0">
                      <Tab.Group vertical>
                        <div className="grid grid-cols-1">
                          <Tab.List className="flex-col max-w-sm rounded-xl bg-gray-100">
                            <h4 className="py-2 pl-2">TOPICS</h4>
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
                          <Tab.Panels className="flex-col py-10">
                            <Tab.Panel>
                              <h3></h3>
                              <p></p>
                              <div className="space-y-5">
                                <h6> </h6>
                              </div>
                            </Tab.Panel>
                          </Tab.Panels>
                        </div>
                      </Tab.Group>
                    </div>
                  </section>
                  <Quickstart />
                  <FastTransit />
                  <CloudVpn />
                  <CloudRouter />
                  <CloudLoadBalancer />
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
