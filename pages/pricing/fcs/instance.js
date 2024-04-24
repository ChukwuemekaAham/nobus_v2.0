import Head from "next/head";
import { React, useState } from "react";
import classNames from "classnames";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  PhoneIcon,
} from "@heroicons/react/outline";
import SidebarPrice from "../../../components/SidebarPrice";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

function index() {
  const router = useRouter()

  const categories = ["overview","server-group","instance","autoscaling-group"]

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
          
              <Tab.Panel>
               <section id="overview" className="mx-auto text-justify">
                    <p>Nobus Flexible Compute Service is a web service that provides 
                    {" "}<b>resizable compute capacity</b>{" "} in the cloud.
                        FCS allows {" "}<b>creating Virtual Machines (VM) on-demand</b>, {" "} 
                        configure security and networking, and manage storage.
                        Provide tools to{" "} <b>build failure resilient applications</b> {" "}
                        by launching application instances inseparate Availability Zone.
                        {" "}<b>Auto Scaling</b> {" "}allows automatical scaling of the capacity up 
                        during demand spikes to maintain performance, and scales 
                        down during demand lulls to minimize costs.
                        {" "} <b>Flexible Load Balancing</b>{" "} automatically distributes incoming 
                        application traffic across multiple FCS instances.
                        Pay only for resources actually consumed, in{" "} <b>instance-hours</b>.
                    </p>

                    <div className="py-4">
                      <h2 className="py-2 text-2xl font-semibold text-[#232f3e]">Features of Nobus FCS</h2>
                      <h5 className="text-md">Nobus FCS provides the following features:</h5>
                      <ul className="py-2 pl-5 list-disc space-y-2">
                        <li>
                                  
                          <p>Virtual computing environments, known as <u>instances</u></p>
                                
                        </li>
                      
                        <li>
                                  
                          <p>Several configurations of CPU, memory, storage, and networking capacity for
                            your instances, known as <u>Instance type</u></p>
                                
                        </li>
                        <li>
                                  
                          <p>Preconfigured templates for your instances, known as <u>Nobus Machine
                            Images (NMIs)</u>.
                          </p>
                                
                        </li>
                        <li>
                                  
                          <p>Secure login details for your instances using <u>key
                            pairs</u>  
                          </p>
                                
                        </li>
                        <li>
                                  
                          <p>Storage volumes which behave like raw, unformatted block devices, 
                            allowing users to create a file system on top of FBS volumes,
                          or use them in any other way you would use a block device (like a hard drive).
                          </p>
                                
                        </li>
                        <li>
                                  
                          <p>Storage volumes for your data, 
                            refered to as <u>Nobus FBS volumes</u>.

                            Nobus FBS volumes ( derived from Nobus block store ) are network-attached, and persist independently from the life of an instance.

                            Provides block level storage volumes (1 GB to 1 TB ) for use with Nobus FCS instances. 
                          </p>
                                
                        </li>
                        <li>
                                  
                          <p>Physical location for your resources, such as instances and NobusFBS volumes,
                              refered to as <u>Availability Zones</u>
                          </p>
                                      
                                
                        </li>
                        <li>
                                  
                          <p>Firewall which aide the specifying of ports, protocols, and source IP
                            ranges that can get to your instances using <u>security
                            groups</u>
                          </p>
                                
                        </li>
                        <li>
                                  
                          <p>Static IPv4 addresses for dynamic cloud computing, refered to as <u>Flexible
                            IP addresses</u></p>
                                
                        </li>
                        <li>
                                  
                          <p>Metadata that can be created and assigned
                            to Nobus FCS resources refered to as <u>tags</u>
                          </p>
                                
                        </li>
                        <li>
                                  
                          <p>Nobus cloud Logically isolated virtual networks
                            which can be optionally connected to your own network refered to
                              as <u>Data center</u> 
                                        
                          </p>
                                
                        </li>
                      </ul>
                      <a className="hover:underline font-semibold" href="#">Visit to get started with Nobus FCS</a>
                      
                    </div>

                    <div>
                      <h2 class="py-2 text-2xl font-semibold text-[#232f3e]">Helpful services</h2>
                      
                      <p>Nobus FCS resources, such as instances and volumes, can be provisioned directly using
                          Nobus FCS. See <a className="hover:underline font-semibold" href="#">Nobus FCS Auto Scaling User Guide</a> for more.</p>

                      <p>Spread incoming application traffic across several instances automatically 
                        using Nobus Flexible Load Balancing. See <a class="hover:underline font-semibold" href="#">Flexible Load Balancing User Guide</a>, for more information.</p>
                        
                      <p>To import virtual machine (VM) images from your local environment into Nobus cloud and convert
                        them into ready-to-use NMIs or instances, use VM Import/Export.</p> 

                      <h2 className="py-2 text-2xl font-semibold text-[#232f3e]">Nobus FCS Console (Nobus FCS web-based user interface)</h2>
                      
                      <p>If you've signed up for a Nobus account, you can access the Nobus FCS console by signing into the Nobus Management
                        Console homepage and then select {" "}<b>Compute</b>{" "} from Projects.
                      </p>

                      <h2 className="py-2 text-2xl font-semibold text-[#232f3e]">Nobus FCS Pricing</h2>
                        <p>See <a class="hover:underline font-semibold" href="#">Nobus FCS Pricing</a>{" "} 
                        for a comprehensive list of charges for Nobus FCS, 
                        </p>

                        <p>Visit the <b>Billing and Cost Management Dashboard</b> to see your bill 
                          in the <a class="hover:underline font-semibold" href="http://dashboard.nobus.io/">
                            Nobus Billing and Cost Management console</a>.
                        </p>
                        <p>If you have questions concerning Nobus billing and account 
                          <a class="hover:underline font-semibold" href="/contact/">contact Support</a>.
                        </p>
                    
                        <h2 className="py-2 text-2xl font-semibold text-[#232f3e]">Payment Card Industry (PCI) Data Security Standard (DSS) Compliance</h2>
                        <p>Nobus FCS supports the processing, storage, and transmission 
                            of credit card data by a merchant or service provider.                                                
                        </p>

                    </div>
                </section>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel data-headlessui-state="selected">Content 3</Tab.Panel>
              <Tab.Panel>Content 4</Tab.Panel>
            
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
