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
  const categories = ["overview","price"]

  return (
    <section>
      <Head>
        <title> Pricing - Acronis Cloud Backup  </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
      <div className="flex px-5 md:px-10 py-3 justify-between shadow-md border-y border-gray-300">
          <div className="flex">
            <h1 className="pl-2 pt-2 text-lg font-medium text-gray-500 ">
            Acronis Cloud Backup 
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
                    href={`/pricing/acronis/${category}`}
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
               <section id="overview" className="mx-auto text-justify">
                  <h2 className="pb-5 text-3xl font-semibold text-[#232f3e]"> Cyber Security Protection, Data Recovery</h2>
              
                  <div className="">
                    <p className="">
                      Protect your mission critical Systems from Servers to
                      desktops/Laptops with Nobus Cloud Backup (NCB). With NCS, Our cloud
                      customers can now provide an extra layer of backup &amp; Cyber
                      security for their applications at a fractional monthly cost.
                      On-Premise customers, and customers hosting their applications with
                      other 3rd party cloud providers such as AWS, Azure, GCP or
                      VMWare-Based hypervisors can now backup and protect their
                      applications and critical user data on Nobus platform
                    </p>
                    <p className="font-semibold py-4">
                      Some of Nobus Cloud Backup (NCB) features include:
                    </p>
                    <div className="pb-4 space-y-2">
                      <p>
                        <b>1.</b> Advanced Backup &amp; Recovery for various workloads (Cloud
                        &amp; On-premise, Nobus cloud or 3rd party cloud)
                      </p>

                      <p><b>2.</b> Ransomeware Protection for all systems</p>

                      <p><b>3.</b> Forensic Backup</p>

                      <p><b>4.</b> Vulnerability scan across your system</p>

                      <p><b>5.</b> Antivirus Protection</p>

                      <p><b>6.</b> Single view for management of all Protected workloads</p>

                      <p><b>7.</b> NDPS cuts your Cyber protection costs by up to 50%, boosts your
                        monthly recurring revenue, while delivering best in className
                        Cyber protection for your applications and data.
                      </p>
                    </div>
                    <p className="">
                      To protect business-critical data, backup is not enough – clients
                      need the integrated approach of cyber protection. Paired with Nobus
                      Cloud Backup, the Advanced Backup pack enables you to extend the
                      cloud backup capabilities your clients require to proactively
                      protect their data. Available in consumption-based or per-workload
                      licensing models, you can easily minimize data loss across your
                      clients’ infrastructure and workloads with the best-in-breed backup
                      and recovery technology that is enhanced with cyber protection. See
                      the{" "}
                      <a
                        className="hover:underline"
                        href=" https://www.acronis.com/en-us/support/documentation/"
                      >
                        Customer support documentation{" "}
                      </a>{" "}
                      or download the
                      <a
                        className="hover:underline"
                        href="https://dl.acronis.com/u/pdf/BackupCloud_adminguide_en-US.pdf"
                      >
                        {" "}
                        User guide{" "}
                      </a>
                      and
                      <a
                        className="hover:underline"
                        href="https://dl.acronis.com/u/pdf/AcronisBackupCloud_userguide_en-US.pdf"
                      >
                        {" "}
                        Admin guide.
                      </a>
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
