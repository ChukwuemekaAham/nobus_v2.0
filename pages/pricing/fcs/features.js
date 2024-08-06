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

  const categories = ["overview", "features", "price", "instance-types"];

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
                  <Tab.Panel data-headlessui-state="selected">
                    <section id="features" className="mx-auto text-justify">
                      <h6 className="py-5 text-3xl font-semibold text-[#232f3e]">
                        FCS Features
                      </h6>
                      <p className="pb-4">
                        Nobus FCS has advance features for building failure
                        resilient, scalable, enterprise class applications. You
                        can quickly configure security and network access on
                        your FCS instance, select from a variety of flavors of
                        instance as needed, then start, monitor, and terminate
                        as required, and choose whether to utilize static IP
                        endpoints, run in multiple locations, attach persistent
                        storage to your instances, or group instances in same
                        compute host as required.
                      </p>

                      <div className="grid grid-cols-1 gap-10 ">
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Utilize the Nobus FCS Fleet to Optimize Compute Cost
                            and Performance
                          </h6>
                          <p>
                            From the dashboard, you can customize to instance
                            types you prefer and decide to scale capacity based
                            on instances, memory or cores . Gain access FCS
                            Fleet capabilities via Nobus FCS Auto Scaling to
                            supply and automatically scale compute capacity
                            accross FCS instance types, and purchase options in
                            a single Auto Scaling Group. You can also supply
                            compute capacity across FCS instance types and
                            purchase models to help optimize scale, performance
                            and cost with the aide Nobus FCS Fleet.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Pause and Continue Your Instances
                          </h6>
                          <p>
                            Your Nobus FCS instances with Nobus FBS attached can
                            be hibernated any time and resumed later on.
                          </p>
                        </div>

                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            GPU Compute Instances
                          </h6>
                          <p>
                            Benefit from the general-purpose GPU compute
                            instances from NCS if exceptionally large floating
                            point processing power are needed.
                          </p>
                        </div>

                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            GPU Graphics Instances
                          </h6>
                          <p>
                            Benefit from GPU graphics instances if you require
                            high graphics capability. The current generation GPU
                            graphics instance are ideally suited for 3D
                            visualizations, 3D rendering, video encoding,
                            application streaming, and other server-side
                            graphics workloads.
                          </p>
                        </div>

                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Dense HDD Storage Instances
                          </h6>
                          <p>
                            Customers requiring very high storage density per
                            instance and log and data processing can benefit
                            from Dense Storage instances.
                          </p>
                        </div>

                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Nobus FCS Auto Scaling
                          </h6>
                          <p>
                            Nobus FCS Auto Scaling allows you to automatically
                            scale your Nobus FCS capacity up or down according
                            to your schedule. See
                            <a
                              className="hover:underline"
                              href="https://www.nobus.io/fcs/autoscaling/"
                            >
                              {" "}
                              Nobus FCS Auto Scaling
                            </a>{" "}
                            for more details.
                          </p>
                        </div>

                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Flexible Storage Options
                          </h6>
                          <p>
                            Different Nobus FCS workloads can relatively require
                            different storage. Aside the built-in instance
                            storage, Nobus Flexible Block Store (FBS) which
                            provides highly available, consistent, persistent
                            and responsive block storage volumes for use with
                            Nobus FCS instances suite other cloud storage
                            workload need.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Only Pay for What You Use
                          </h6>
                          <p>
                            You will be charged for your FCS resources actually
                            consumed at the end of each month.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Multiple Locations
                          </h6>
                          <p>
                            Nobus FCS provides the ability to place instances in
                            multiple locations. Nobus FCS locations are composed
                            of Accounts.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Flexible IP Addresses
                          </h6>
                          <p>
                            Your account is associated with a Flexible IP
                            address instead of a specific instance, and you
                            control that address until you precisely specify to
                            let go. You can cover for instance failures by
                            reassigning your public IP addresses to any instance
                            in your account at your schedule.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Serveral Operating systems
                          </h6>
                          <p>
                            Currently nobus fcs instance supports different
                            versions of windows and linux distribustions. Also
                            Nobus Customised Machine Images (CMIs) which are
                            preconfigured templates with series of operating
                            systems are available to use with your Nobus FCS
                            instances. Customers can upload this custom images
                            to their fcs image console, as well as bring their
                            own license (BYOL) or take advantage of our manage
                            windows licenses. See{" "}
                            <a
                              className="hover:underline"
                              href="/pricing/fcs/image-service/"
                            >
                              {" "}
                              Nobus Image Service
                            </a>{" "}
                            for more details.
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
