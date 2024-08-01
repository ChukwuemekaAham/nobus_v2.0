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
    <section>
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
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                  <Tab.Panel data-headlessui-state="selected">
                    <section id="price" className="mx-auto text-justify">
                      <h2 className="pb-5 text-3xl font-semibold text-[#232f3e]">
                        FBS Volumes Pricing
                      </h2>

                      <p>
                        FBS volumes behave like raw, unformatted block devices,
                        enabling users to create a file system on top of the
                        volumes, or use them in any other way you would use a
                        block device (like a hard drive). Multiple volumes can
                        be added to the same instance. FBS volumes are
                        network-attached, and persist only from the life of an
                        instance. With Nobus FBS, you pay only for what you use.
                      </p>

                      <div className="py-5">
                        <h6 className="py-5 text-xl font-semibold text-[#232f3e]">
                          The pricing for Nobus FBS volumes are in the table
                          below:{" "}
                        </h6>
                        <table class="w-full table-auto text-left border-collapse">
                          <tbody>
                            <tr class="bg-gray-200">
                              <td class="font-bold p-4">
                                Nobus FBS Standard Instance SAS Volumes
                              </td>
                              <td class="font-bold p-4">
                                Nobus FBS Snapshots to Nobus Flexible Object
                                Storage (FOS)
                              </td>
                            </tr>
                            <tr>
                              <td class="p-4">
                                ₦ 120 NGN per GB-month of provisioned storage
                              </td>
                              <td class="p-4">
                                ₦ 120 NGN per GB-month of data stored
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="p-4">
                                ₦ 120 NGN per provisioned IOPS-month
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p>
                          Except as otherwise noted, our prices are exclusive of
                          applicable taxes and duties, including VAT and
                          applicable sales tax.
                        </p>
                      </div>
                      <div className="">
                        <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                          FBS Standard Instance SSD Backed Volumes
                        </h6>
                        <p>
                          Volume storage for Standard Instance (Si) volumes is
                          charged by the amount you provision in GB per month
                          until you release the storage. Provisioned storage for
                          si1 volumes will be billed in per-second increments,
                          with a 60 second minimum. I/O is included in the price
                          of the volumes, so you pay only for each GB of storage
                          you provision.
                        </p>
                      </div>
                      <div className="">
                        <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                          FBS Snapshots
                        </h6>
                        <p>
                          Snapshot storage is based on the amount of space your
                          data consumes in Nobus Flexible Object Storage (FOS).
                          Because Nobus FBS does not save empty blocks, it is
                          likely that the snapshot size will be considerably
                          less than your volume size. For the first snapshot of
                          a volume, Nobus FBS saves a full copy of your data to
                          Nobus Object Storage. For each incremental snapshot,
                          only the changed part of your Nobus FBS volume is
                          saved.
                        </p>
                        <p>
                          Copying FBS snapshots is charged for the data
                          transferred across accounts. After the snapshot is
                          copied, standard FBS snapshot charges apply for
                          storage in the destination account.
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
