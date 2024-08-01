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
    <section>
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
                  <Tab.Panel data-headlessui-state="selected">
                    <section id="price" className="mx-auto text-justify">
                      <h2 className="pb-5 font-semibold">
                        {" "}
                        Nobus FOS Term Pricing
                      </h2>

                      <p>
                        Nobus adopts a Pre-Billing System of two major
                        components, billed as low as N293.00 Naira/ daily.
                        Recommended for:
                      </p>
                      <ul>
                        <li>
                          Users that prefer the low cost and flexibility of
                          Nobus FCS without any up-front payment or long-term
                          commitment
                        </li>
                        <li>
                          Users with urgent computing needs for large amounts of
                          additional capacity
                        </li>
                        <li>
                          Applications with short-term or unpredictable
                          workloads that cannot be interrupted
                        </li>
                        <li>
                          Applications that have flexible start and end times
                        </li>
                        <li>
                          Applications being developed or tested on Nobus FCS
                          for the first time.
                        </li>
                      </ul>

                      <div className="mt-5">
                        <h4 className="pb-5">Cycle Billing</h4>
                        <p>
                          Customers pay for all the resources in use at the
                          beginning of the cycle. You pay for compute capacity
                          by the number of days in the billing period depending
                          on which instances you run. No upfront payments or
                          commitments are needed. You can increase or decrease
                          your compute capacity depending on the needs of your
                          application
                        </p>
                      </div>
                      <div className="mt-5">
                        <h4 className="pb-5">Auto Billing</h4>
                        <p>
                          User pays for any instance running from the time/date
                          it was spun up to the next billing cycle. Daily usage
                          amount between the spin-up date and the next billing
                          date are accounted for.
                        </p>
                      </div>

                      <div className="space-y-5">
                        <p>
                          When you launch an instance, as soon as the status of
                          an instance changes to{" "}
                          <code class="code">running</code> you start incurring
                          charges for that instance.
                        </p>

                        <p>
                          When you don't need an instance you can terminate it.
                          As soon as the status of an instance changes to{" "}
                          <code class="code">shut-down</code> you stop incurring
                          charges for that instance.
                        </p>

                        <p>
                          When your instance transition from{" "}
                          <code class="code">build</code> to{" "}
                          <code class="code">running</code> state, you can
                          connect to the running instance and use it the way
                          that you'd use any physical computer. Rebooting an
                          instance will not start a new instance billing cycle
                          since the instance is still running.
                        </p>
                        <p>
                          The table below shows instance status and indicates if
                          it is billed or not.
                        </p>
                      </div>
                      <div class="overflow-x-auto my-5">
                        <table class="table-auto w-full">
                          <thead>
                            <tr class="bg-gray-200">
                              <th class="px-4 py-2">Instance state</th>
                              <th class="px-4 py-2">Description</th>
                              <th class="px-4 py-2">Usage billing</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="border-b">
                              <td class="px-4 py-2">
                                <p>
                                  <code class="code">build</code>
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>
                                  The instance is preparing to enter the{" "}
                                  <code class="code">running</code> state. An
                                  instance enters the{" "}
                                  <code class="code">build</code> state when it
                                  launches for the first time, or when it is
                                  restarted after being in the{" "}
                                  <code class="code">shut down</code> state.
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>Not billed</p>
                              </td>
                            </tr>
                            <tr class="border-b">
                              <td class="px-4 py-2">
                                <p>
                                  <code class="code">running</code>
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>
                                  The instance is running and ready for use.
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>Billed</p>
                              </td>
                            </tr>
                            <tr class="border-b">
                              <td class="px-4 py-2">
                                <p>
                                  <code class="code">paused</code>
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>
                                  The instance is paused and access denied but
                                  won't free up any other resources attached
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>Billed</p>
                              </td>
                            </tr>
                            <tr class="border-b">
                              <td class="px-4 py-2">
                                <p>
                                  <code class="code">powering off</code>
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>
                                  The instance is preparing to be shut down.
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>Not billed if preparing to shut off</p>
                                <p>Billed if preparing to be suspended</p>
                              </td>
                            </tr>
                            <tr class="border-b">
                              <td class="px-4 py-2">
                                <p>
                                  <code class="code">Shutoff</code>
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>
                                  The instance is shut down and cannot be used.
                                  The instance can be restarted at any time.
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>Not billed</p>
                              </td>
                            </tr>
                            <tr class="border-b">
                              <td class="px-4 py-2">
                                <p>
                                  <code class="code">shutting-down</code>
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>The instance is preparing to be deleted.</p>
                              </td>
                              <td class="px-4 py-2">
                                <p>Not billed</p>
                              </td>
                            </tr>
                            <tr class="border-b">
                              <td class="px-4 py-2">
                                <p>
                                  <code class="code">deleted</code>
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>
                                  The instance has been permanently deleted and
                                  cannot be restarted.
                                </p>
                              </td>
                              <td class="px-4 py-2">
                                <p>Not billed</p>{" "}
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
                                <p>
                                  Reserved Instances that applied to deleted
                                  instances are billed until the end of their
                                  term according to their payment option.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p>
                        When your instance enters the{" "}
                        <code class="code">running</code> state, your billing
                        cycle starts, even if the instance stays idle and you
                        don't connect to it.
                      </p>
                      <p>FCS VCPU Unit Price = ₦ 85.00 NGN </p>
                      <p>FCS Memory Unit Price = ₦ 88.00 NGN</p>
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
