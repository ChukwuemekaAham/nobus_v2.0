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
    <section className="overflow-hidden">
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
            <Tab.Group defaultIndex={0}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <Tab.List className="flex flex-col col-span-1 my-4 md:my-16 overflow-y-scroll">
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
                  <Tab.Panel>
                    <section id="overview" className="mx-auto text-justify">
                      <h2 className="pb-5">
                        {" "}
                        Extensive and Unlimited Storage in the cloud
                      </h2>
                      <p>
                        Nobus Flexible Object Storage (Nobus FOS) is a long-term
                        storage system for large amounts of static data which
                        can be retrieved and updated. It ensures data
                        availability, scalability, security, and performance. It
                        stores and secures customer data containing multiple
                        applications ranging from websites, mobile applications,
                        enterprise applications, backup and restore, and
                        archive. Nobus Flexible Object Storage is cost
                        effective.
                      </p>
                      <h3 className="py-5">Benefits:</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                        <div className="">
                          <h6 className="pb-2">
                            High performance, scalability and availability
                          </h6>
                          <p>
                            Nobus FOS automatically creates and stores copies of
                            all FOS objects across several systems. Your data is
                            available when needed and secured against failures
                            and intruders. Storage resources can be scaled up
                            and down to meet workload demands.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2">Cost-effective</h6>
                          <p>
                            Nobus FOS automatically ensure cost savings. You
                            save costs by storing data in FOS storage.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2">Security</h6>
                          <p>
                            By Storing your data in Nobus FOS, you can prevent
                            unauthorized public access.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2">Easy data management</h6>
                          <p>
                            FOS enable users to manage access, cost and
                            replication. Users can also manage the security of
                            their data. large scale changes across multiple
                            objects can be manage by FOS.
                          </p>
                        </div>
                      </div>
                      <h3 className="py-5">Use Cases:</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                        <div className="">
                          <h6 className="pb-2">Backup</h6>
                          <p>
                            Create scalable and secure backup and restore
                            solutions with Nobus FOS and other Nobus web
                            services services like Nobus FBS to augment or
                            replace existing on-premises capabilities. With
                            Nobus web services, you can back up data already in
                            the Nobus web services Cloud.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2">
                            Cloud-native application data
                          </h6>
                          <p>
                            With Nobus FOS you can store production data, you
                            can upload any amount of data and access it where
                            ever ensuring the deployment of applications in
                            quick time and available to more end users.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2">Static Web Hosting</h6>
                          <p>
                            You can host your staic website and files using fos,
                            and access it through the public internet
                          </p>
                        </div>
                      </div>
                    </section>
                  </Tab.Panel>
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
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
