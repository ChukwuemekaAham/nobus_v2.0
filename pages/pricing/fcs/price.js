import Head from "next/head";
import { React, useState } from "react";
import classNames from "classnames";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  PhoneIcon,
} from "@heroicons/react/outline";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Spinner from "../../../components/Spinner";

function index() {
  const router = useRouter()

  const categories = ["overview","features","price","instance-types"]

  return (
    <section>
      <Head>
        <title> Pricing - Nobus Flexible Compute Service  </title>
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
              <h2 className="pb-5 text-2xl font-semibold text-[#232f3e]">PRICING</h2>
                {categories.map((category, index) => (
                 
                  <Tab
                    key={category}
                    as={Link}
                    href={`/pricing/fcs/${category}`}
                    className={({ selected }) =>
                      classNames(
                        'w-full py-2.5 pl-4 text-md text-left font-medium leading-5',
                        'focus:outline-none',
                        selected
                          ? 'category-active text-blue-500 border-l-2 border-l-blue-500'
                          : 'text-gray-800 border-l-2 border-l-gray-200 hover:text-gray-500'
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
                  <h2 className="pb-5 text-3xl font-semibold text-[#232f3e]"> Flexible Compute Service Term Pricing</h2>
                  
                  <p className="">Nobus adopts a Pre-Billing System of two major components, billed as low as N293.00 Naira/ daily.
                  Recommended for:</p>
                  <ul className="space-y-2 py-5 list-disc pl-5">
                    <li className="">
                    Users that prefer the low cost and flexibility of Nobus FCS without any up-front payment or long-term commitment
                    </li>
                    <li className="">
                    Users with urgent computing needs for large amounts of additional capacity
                    </li>
                    <li className="">
                    Applications with short-term or unpredictable workloads that cannot be interrupted
                    </li>
                    <li className="">
                    Applications that have flexible start and end times
                    </li>
                    <li className="">
                    Applications being developed or tested on Nobus FCS for the first time.
                    </li>
                  </ul>

                  <div>
                    <h2 className="pb-5 text-2xl font-semibold text-[#232f3e]">Cycle Billing</h2>
                    <p>
                    Customers pay for all the resources in use at the beginning of the cycle. You pay for compute capacity by the number of days in the billing period depending on which instances you run. No upfront payments or commitments are needed. You can increase or decrease your compute capacity depending on the needs of your application
                    </p>
                  </div>
                  <div className="mt-5">
                    <h2 className="pb-5 text-2xl font-semibold text-[#232f3e]">Auto Billing</h2>
                    <p>
                    User pays for any instance running from the time/date it was spun up to the next billing cycle. Daily usage amount between the spin-up date and the next billing date are accounted for.
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
