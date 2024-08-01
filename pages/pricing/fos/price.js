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

  const categories = ["overview", "features", "price", "storage-category"];

  return (
    <section>
      <Head>
        <title> Pricing - Nobus Flexible Object Storage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex px-5 md:px-10 py-3 justify-between shadow-md border-y border-gray-300">
          <div className="flex">
            <h1 className="pl-2 pt-2 text-lg font-medium text-gray-500 ">
              Flexible Object Storage
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
            <Tab.Group defaultIndex={2}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <Tab.List className="flex flex-col col-span-1 my-16 overflow-y-scroll">
                  <h2 className="pb-5 text-2xl font-semibold text-[#232f3e]">
                    PRICING
                  </h2>
                  {categories.map((category, index) => (
                    <Tab
                      key={category}
                      as={Link}
                      href={`/pricing/fos/${category}`}
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
                  <Tab.Panel data-headlessui-state="selected">
                    <section id="price" className="mx-auto text-justify">
                      <h2 className="pb-10">Nobus FOS Price</h2>
                      <div className="space-y-5">
                        <p>
                          You pay for storing objects in your FOS buckets. The
                          rate you’re charged depends on your objects' size, and
                          time frame of monthly objects storage.
                        </p>
                        <div class="overflow-x-auto">
                          <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                              <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Storage price (Naira)
                                </th>
                              </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                              <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  <div class="text-sm font-medium text-gray-900">
                                    <b>FOS Standard -</b> Standard storage for
                                    any type of data, typically used for
                                    frequently accessed data
                                  </div>
                                </td>

                                <td class="px-6 py-4 whitespace-nowrap"></td>
                              </tr>
                              <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  First 50 TB / Month
                                </td>

                                <td class="px-6 py-4 whitespace-nowrap">
                                  ₦2.00 per GB
                                </td>
                              </tr>
                              <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  Next 450 TB / Month
                                </td>

                                <td class="px-6 py-4 whitespace-nowrap">
                                  ₦2.00 per GB
                                </td>
                              </tr>
                              <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  Over 500 TB / Month
                                </td>

                                <td class="px-6 py-4 whitespace-nowrap">
                                  ₦2.00 per GB
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p>
                          Except as otherwise noted, our prices are exclusive of
                          applicable taxes and duties, including VAT and
                          applicable sales tax.
                        </p>
                        <p>
                          Nobus FOS storage usage is calculated in binary
                          gigabytes (GB); in the context of digital storage and
                          memory, 1 GB is often considered to be equal to
                          1,073,741,824 bytes (2^30 bytes).
                        </p>
                        <p>
                          <span className="font-semibold">To summarize:</span>{" "}
                          <br />
                          1 GB (Gigabyte) = 1,000,000,000 bytes (based on the
                          metric system) <br />1 GiB (Gibibyte) = 1,073,741,824
                          bytes (based on the binary system)
                        </p>

                        <p>
                          You pay for all bandwidth into and out of Nobus FOS
                        </p>
                      </div>
                    </section>
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
