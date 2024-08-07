import Head from "next/head";
import { React, Fragment, useState } from "react";
import classNames from "classnames";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer1";
import { PhoneIcon } from "@heroicons/react/outline";
import Spinner from "../../../components/Spinner";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

function index() {
  const router = useRouter();

  const categories = ["overview", "features", "price", "instance-types"];
  const flavors = [
    "Standard Flavors",
    "Compute Optimized",
    "Storage Optimized Flavors",
    "Memory Optimized Flavors",
  ];

  return (
    <section className="overflow-hidden">
      <Head>
        <title> Pricing - Nobus Flexible Compute Service </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex px-5 md:px-10 py-3 justify-between shadow-md border-y border-gray-300">
          <div className="flex">
            <h1 className="pl-2 pt-2 text-lg font-medium text-gray-500 ">
              Flexible Compute Service
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
            <Tab.Group defaultIndex={3}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <Tab.List className="flex flex-col col-span-1 my-4 md:my-16 overflow-y-scroll">
                  <h2 className="pb-5 text-2xl font-semibold text-[#232f3e]">
                    PRICING
                  </h2>
                  {categories.map((category, index) => (
                    <Tab
                      key={category}
                      as={Link}
                      href={`/pricing/fcs/${category}`}
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
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                  <Tab.Panel data-headlessui-state="selected">
                    <section
                      id="instance-types"
                      className="mx-auto text-justify"
                    >
                      <h2 className="pb-5 text-2xl font-semibold text-[#232f3e]">
                        {" "}
                        FCS Instance Flavors
                      </h2>
                      <p>
                        Nobus FCS gives you a variety of instance flavors (
                        including different combinations of CPU, storage, memory
                        and networking capacity ) organized and optimized for
                        several use cases and scheduled workload.
                      </p>
                      <div className="py-10">
                        <Tab.Group>
                          <Tab.List className="flex space-x-4">
                            {flavors.map((flavor, index) => (
                              <Tab as={Fragment}>
                                {({ selected }) => (
                                  <button
                                    className={`font-semibold outline-none border-none hover:bg-gray-600 hover:text-white focus:bg-gray-600 focus:text-white px-4 py-2 rounded-full shadow-inner shadow-emerald-100 ${
                                      selected
                                        ? "bg-gray-600 text-white"
                                        : "bg-white text-gray-600"
                                    }`}
                                  >
                                    {flavor}
                                  </button>
                                )}
                              </Tab>
                            ))}
                          </Tab.List>
                          <Tab.Panels className="flex my-5 bg-white/5 transition p-10 w-full border rounded-3xl h-[500px] overflow-y-scroll scrollbar-hide">
                            <Tab.Panel>
                              <div className="text-left justify-left">
                                <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                                  Features:
                                </h6>
                                <ul className="pl-5 list-disc">
                                  <li>
                                    Support for Extensive and Valuable
                                    Networking{" "}
                                  </li>
                                  <li>FBS-optimized by default</li>
                                </ul>

                                <div className="flex flex-col mt-5">
                                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                          <thead className="bg-gray-50">
                                            <tr>
                                              <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                              >
                                                Model
                                              </th>
                                              <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                              >
                                                vCPU
                                              </th>
                                              <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                              >
                                                Mem (GiB)
                                              </th>
                                              <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                              >
                                                Storage
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.2.2.30.l
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  2
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  2
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  30
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.2.4.30.l
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  2
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  4
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  30
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.2.8.30.l
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  2
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  8
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  30
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.4.4.30.l
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  4
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  4
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  30
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.4.8.30.l
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  4
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  8
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  30
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.4.16.30.l
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  4
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  16
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  30
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.8.16.30.l
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  8
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  16
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  30
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.2.4.50.w
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  2
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  4
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  50
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.2.8.50.w
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  2
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  8
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  50
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.4.8.50.w
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  4
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  8
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  50
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.4.16.50.w
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  4
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  16
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  50
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.4.32.50.w
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  4
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  32
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  50
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.8.16.50.w
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  8
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  16
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  50
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.8.32.50.w
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  8
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  32
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  50
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  si.8.64.50.w
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  8
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  64
                                                </div>
                                              </td>
                                              <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                  50
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab.Panel>
                            <Tab.Panel className="mx-auto text-center font-semibold text-2xl justify-center max-w-7xl my-20">
                              <div>FLAVOR COMING SOON</div>
                            </Tab.Panel>
                            <Tab.Panel className="mx-auto text-center font-semibold text-2xl justify-center max-w-7xl my-20">
                              <div>FLAVOR COMING SOON</div>
                            </Tab.Panel>
                            <Tab.Panel className="mx-auto text-center font-semibold text-2xl justify-center max-w-7xl my-20">
                              <div>FLAVOR COMING SOON</div>
                            </Tab.Panel>
                          </Tab.Panels>
                        </Tab.Group>
                      </div>
                    </section>
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
