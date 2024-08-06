import Head from "next/head";
import { React, useState } from "react";
import classNames from "classnames";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer1";
import { PhoneIcon } from "@heroicons/react/outline";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Spinner from "../../../components/Spinner";

function index() {
  const router = useRouter();

  const categories = ["overview", "features", "price", "storage-types"];

  return (
    <section className="overflow-hidden">
      <Head>
        <title> Pricing - Nobus Flexible Block Storage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex px-5 md:px-10 py-3 justify-between shadow-md border-y border-gray-300">
          <div className="flex">
            <h1 className="pl-2 pt-2 text-lg font-medium text-gray-500 ">
              Flexible Block Storage
            </h1>
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
        <div className="mx-10 md:mx-20">
          <div className="w-full px-2  sm:px-0">
            <Tab.Group defaultIndex={1}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <Tab.List className="flex flex-col col-span-1 my-4 md:my-16 overflow-y-scroll">
                  <h2 className="pb-5 text-2xl font-semibold text-[#232f3e]">
                    PRICING
                  </h2>
                  {categories.map((category, index) => (
                    <Tab
                      key={category}
                      as={Link}
                      href={`/pricing/fbs/${category}`}
                      className={({ selected }) =>
                        classNames(
                          "w-full py-2.5 pl-4 text-md text-left font-medium leading-5",
                          "focus:outline-none",
                          selected
                            ? "category-active text-blue-500 border-l-2 border-l-blue-500"
                            : "text-gray-800 border-l-2 border-l-gray-200 hover:text-gray-500"
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>

                <Tab.Panels className="flex flex-col col-span-1 md:col-span-2 lg:col-span-3 py-10 md:py-20 md:pl-20 h-[600px] overflow-y-scroll scrollbar-hide">
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                  <Tab.Panel data-headlessui-state="selected">
                    <section id="features" className="mx-auto text-justify">
                      <h2>FBS Features</h2>
                      <p>
                        Nobus FBS provides you the ability to create storage
                        volumes and add them to Nobus FCS instances. Once added,
                        you can create an archive system on top of these
                        volumes, run a database, or use them in any other way
                        you would use block storage. Nobus FBS volumes are
                        placed in a specific Availability Zone where they are
                        automatically replicated to protect you from the failure
                        of a single component. All FBS volume types gives
                        durable snapshot capabilities and are designed for
                        99.999% availability.
                      </p>
                      <p className="py-2">
                        Nobus FBS gives a range of options that allow you to
                        optimize storage performance and cost for your workload.
                        These options has two major categories: SSD-backed
                        storage for transactional workloads, such as databases
                        and boot volumes (performance depends primarily on
                        IOPS), and HDD-backed storage for throughput intensive
                        workloads, like log processing (performance depends
                        primarily on MB/s).
                      </p>
                      <p>
                        SSD-backed volumes include the highest performance
                        Provisioned IOPS SSD (io1) for latency-sensitive
                        transactional workloads and Standard SSD (gp2) that
                        balance price and performance for a wide variety of
                        transactional data. HDD-backed volumes include
                        Throughput Optimized HDD (st1) for frequently accessed,
                        throughput intensive workloads and the lowest cost Cold
                        HDD (sc1) for less frequently accessed data.
                      </p>
                      <p>
                        Flexible Volumes is a feature of Nobus FBS that allows
                        you to dynamically increase capacity, tune performance,
                        and change the type of live volumes with no downtime or
                        performance impact. This allows you to easily right-size
                        your deployment and adapt to performance changes. See{" "}
                        <a href="#" className="hover:underline">
                          {" "}
                          storage types
                        </a>{" "}
                        for more information.
                      </p>
                    </section>
                  </Tab.Panel>
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default index;
