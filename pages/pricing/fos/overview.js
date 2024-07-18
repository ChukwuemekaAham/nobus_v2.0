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

  const categories = ["overview","features","price","storage-category"]

  return (
    <section>
      <Head>
        <title> Pricing - Nobus Flexible Object Storage  </title>
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
              
              <Tab.List className="flex flex-col col-span-1 my-16 overflow-y-scroll">
              <h2 className="pb-5 text-2xl font-semibold text-[#232f3e]">PRICING</h2>
                {categories.map((category, index) => (
                 
                  <Tab
                    key={category}
                    as={Link}
                    href={`/pricing/fos/${category}`}
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
          
              <Tab.Panel data-headlessui-state="selected">
                Content 1
                <section id="overview" className="mx-auto text-justify">
                    <p>
                      Nobus FOS allows creating Virtual Machines (VM) on-demand. Customers can get running immediately with pre-configured template Machine Image. Provide tools to build failure resilient applications by launching application instances. In separate Availability Zones (Coming Soon).
                    </p>
                    <p>
                    Nobus FOS simple web service interface provides you with complete control of your computing resources and lets you run on Nobus’s dependable computing environment thus, allowing you to obtain and configure capacity with less conflict. Nobus FOS reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change. With Nobus FCS you to pay only for capacity that you actually use.
                    </p>
                    
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
