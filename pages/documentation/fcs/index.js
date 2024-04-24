import Head from "next/head";
import { React, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  PhoneIcon,
} from "@heroicons/react/outline";
import SidebarDocs from "../../../components/SidebarDocs";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/solid";
import Access from "../../../components/fcsdoc/Access";
import Quickstart from "../../../components/fcsdoc/Quickstart";
import BestPractices from "../../../components/fcsdoc/BestPractices";
import Nmi from "../../../components/fcsdoc/Nmi";
import Instance from "../../../components/fcsdoc/Instance";
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function index() {
  const [open, setOpen] = useState(true);

  const categories = ["Instance","Nobus Machine Images (NMIs)","Location ( Availability Zones )","Root Device Volume"]

  return (
    <section>
      <Head>
        <title> Documentation - Nobus Flexible Compute Service  </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex px-5 py-3 justify-between shadow-2xl border-y border-gray-300">
          <div className="flex">
          <div className="flex">
          {!open ? (
              <button
                type="button"
                className="rounded-full bg-gray-100 p-2 text-gray-400 shadow-md"
                onClick={() => setOpen(true)}
                >
                <span className="sr-only">Open menu</span>
                <ChevronDoubleRightIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            ) : ( <button
              type="button"
              className="rounded-full bg-gray-100 p-2 text-gray-400 shadow-md"
              onClick={() => setOpen(false)}
              >
              <span className="sr-only">Close menu</span>
              <ChevronDoubleLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button> 
            )
          }
             <h1 className="pl-2 pt-2 text-lg font-medium text-gray-500 ">
             FCS Documentation
            </h1>
          </div>
            
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
        <div className={`grid grid-cols-1 lg:grid-cols-4`}>
          <div className={`${!open && "hidden"}`}> 
            <SidebarDocs open={open} setOpen={setOpen} />
          </div>
        
          <div className={`lg:col-span-3 bg-gray-200 h-[600px] overflow-y-scroll scrollbar-hide ${!open && "lg:col-span-4"}`}>
            <div className="py-4 pl-6 pr-4">
              <div className={`bg-white shadow-lg border border-gray-300`}>
                <div className="flex-col p-5 lg:p-10">
                  <h1 className="pb-10 text-3xl md:text-4xl font-bold text-center">Nobus Flexible Compute Service</h1>
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
                          <a class="hover:underline font-semibold" href="/contact/"> contact Support</a>.
                        </p>
                    
                        <h2 className="py-2 text-2xl font-semibold text-[#232f3e]">Payment Card Industry (PCI) Data Security Standard (DSS) Compliance</h2>
                        <p>Nobus FCS supports the processing, storage, and transmission 
                            of credit card data by a merchant or service provider.                                                
                        </p>

                    </div>
                    <div className="px-10 my-10 border shadow-sm rounded-md"> 
                      <div className="w-full px-2 py-16 sm:px-0">
                        <Tab.Group vertical>
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            
                                             
                            <Tab.List className="flex flex-col col-span-1 rounded-xl bg-gray-100">
                            <h2 className="py-2 pl-2 text-2xl font-semibold text-[#232f3e]">TOPICS</h2>
                              {categories.map((category) => (
                                <Tab
                                  key={category}
                                  className={({ selected }) =>
                                    classNames(
                                      'w-full py-2.5 pl-2 text-md text-left font-medium leading-5',
                                      'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                                      selected
                                        ? 'bg-white text-blue-500 shadow'
                                        : 'text-gray-800 hover:bg-white/[0.12] hover:text-gray-400'
                                    )
                                  }
                                >
                                  {category}
                                </Tab>
                              ))}
                            </Tab.List>
                  
                            <Tab.Panels className="flex flex-col col-span-1 md:col-span-2 p-5">
                            <Tab.Panel>
                               
                                  <h3 class="py-2 text-2xl font-semibold text-[#232f3e]">Instances</h3>
                                  
                                  <p >An instance is a virtual server in the cloud.    
                                      Several types of instances can be launched from a single Nobus Machine Image (NMI).
                                      The hardware of the host computer which your instance use is determined by the instance types.
                                      Each instance type offers different compute and memory
                                      capabilities. {" "} 
                                      <b>Important:</b>{" "} Select a Flavor based on the workload to be attached to your instance.
                                      
                                      See <a className="font-semibold hover:underline" href="#">Nobus FCS Instance Types</a> for more information.  
                                          
                                  </p>
                                            
                                  <p className="py-2">You can interact with your instance same as any computer after launch. 
                                  You have total control over your instances and can use <b>sudo</b> to run commands that require root privileges.
                                              
                                  </p>
  
                                  <p>Your Nobus account has a limit on the number of instances that you can have running.
                                    
                                  </p>
                                
                                  <p className="pt-2">To prevent accidental termination, you can disable instance termination. Your instance also shut off running when they fail.
                                  </p>
                                  
                                  <h5 className="py-2 text-xl font-semibold text-[#232f3e]" >Security Best Practices</h5>
                                  <ul>
                                    <li>
                                                    
                                      <p>
                                        Different security groups can be created to deal with 
                                        instances that have different security requirements.
                                        Always revisit the rules in your security groups and 
                                        Only open up permissions that are needed by you.
                                      
                                      </p>
                                                  
                                    </li>
                                    <li>
                                                    
                                        <p className="pt-2">Control access by permitting only trusted networks or hosts to gain entry to 
                                          ports on your instance.</p>
                                                  
                                    </li>
                                    
                                  </ul>

                                  <p className="font-semibold py-2">Note</p>
                                  <p>Some Nobus resources, such as Nobus
                                    FBS volumes and IP addresses, incur charges not minding the state of your instance.
                                  </p>
                             
                            </Tab.Panel>
                            <Tab.Panel>
                              
                                <h3 className="py-2 text-2xl font-semibold text-[#232f3e]">Nobus Machine Images (NMIs)</h3>

                                <p>A Nobus Machine Image (NMI) is a template that is usually a 
                                    configuration of software like having an operating system, an application server, and application(s).
                                    Several instances of a NMI can be set running. You can launch a new instance from the NMI if it fails.
                                </p>
                                <p className="py-2"> 
                                Custom NMI or NMIs can be made by you, to enable the launch of a new instance containing everything you need.        
                                </p>
                                <p className="py-2">All NMIs are <b>NobusFBS backed </b> basically, meaning that
                                  the root device for an instance launched from the NMI is a NobusFBS volume,   
                                </p>
                              
                            </Tab.Panel>
                            <Tab.Panel>
                            
                                <h3 className="py-2 text-2xl font-semibold text-[#232f3e]">Location ( Availability Zone )</h3>
                                <p> <em>Availability Zones</em> is the location where Nobus FCS is hosted. 
                                    this location is usually isolated. 
                                    Resource like instance, can reside in this zone with through Nobus FCS.
                                    This achieves the greatest possible fault tolerance and stability.
                                </p>
        
                                <p className="py-2">
                                Your instance, and NMI must be in the same availability zone. 
                                </p>

                                <h5 class="py-2 text-xl font-semibold text-[#232f3e]">Launching Instances in an Availability Zone</h5>
                              
                              
                                <p>
                                    When you launch your instances, accept the default
                                    Availability Zone, this is based on Nobus FCS available capacity.
                                          
                                </p>
                             
                            </Tab.Panel>
                            <Tab.Panel>
                            
                              <h3 className="py-2 text-2xl font-semibold text-[#232f3e]">Root Device Volume</h3>
                              <p>Root device volume contains the image used to boot the instance at launch time.
                                  if your Nobus Machine Image (NMIs) are backed by NobusFBS,
                                  then the root device for every instance launched from
                                  the NMI is a NobusFBS volume made from a NobusFBS snapshot. 
                              </p>

                              <p className="py-2">You have the option to use a NobusFBS supported NMI or Nobus FCS instance store supported NMI.
                                  We recommend that you use NMIs supported by NobusFBS,
                                  since they use persistent storage and launch faster.
                              </p>

                              <p className="py-2"><b>NobusFBS-backed Instances</b></p>
                              
                              <p>Instances that use NobusFBS for the root device automatically have a NobusFBS
                                volume attached. When a NobusFBS-backed instance is launched, a NobusFBS volume for
                                individual NobusFBS snapshot with reference to the NMI adopted by you is created.
                              </p>

                              <p className="py-2"> No data are affected when your NobusFBS-backed instance is shut down and restarted. 
                                There are various instance and volume-related tasks you can
                                do when a NobusFBS-backed instance is in a shut down state. For example, you can modify the
                                properties of the instance, change its size, or update the kernel it is using, or you can attach your
                                root volume to a different running instance for debugging or any other purpose. 
                              </p>

                              <p className="py-2">Try either of the following processes below, on failure of your NobusFBS-backed instance. 
                              </p>

                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  <p>shut off and restart</p>  
                                </li>
                                <li> 
                                  <p>Make a volume snapshot automatically and create a new NMI.
                                  </p>
                                </li>
                                <li>
                                  <p className="py-2">Attach the volume to the new instance by following these steps:</p>                          
                                  <ol className="list-decimal space-y-2">
                                    <li>
                                        <p>Create a snapshot of the root volume.</p>
                                        
                                    </li>
                                    <li>
                                        
                                        <p>Register a new NMI using the snapshot.</p>
                                        
                                    </li>
                                    <li>
                                        
                                        <p>From the new NMI, launch a new instance .</p>
                                        
                                    </li>
                                    <li>
                                        
                                        <p>Detach the remaining NobusFBS volumes from the previous instance.</p>
                                        
                                    </li>
                                    <li>
                                        
                                        <p>Reattach the NobusFBS volumes to the new instance.</p>
                                        
                                    </li>
                                  </ol>
                                
                                  
                                </li>
                              </ul>

                              <p className="py-2"><b>Instance Store-backed Instances</b></p>
                              
                              <p>If your instances use instance stores for the root device, then one or more 
                                  instance store volumes will be attached automatically, one being the root device volume.
                                  A duplicate of the image that is used to boot an instance is created in the root volume at the instance launch.
                                
                              </p> 

                              <p className="py-2">There is persistence of data on the instance store volumes as long as the instance is active,
                                although, the data is erased and cannot be restored on termination or failure of the instance.    
                              </p>
                            
                              <p>
                                
                                Ensure to back up vital data from your instance store volumes to a persistent storage frequently,
                                if you decide to use Nobus FCS instance store-backed instances.
   
                              </p>
                        
                              <h5 className="py-2 font-semibold text-[#232f3e]">Choosing a NMI by Root Device Type</h5>
                              <p>The NMI that you select at launch your instance decides the type of root
                                device volume that is associated to your instance.  
                              </p>
                        
                              <p className="py-2"><b>To choose a NobusFBS-backed NMI using the console</b></p>
                              <ol className="py-2 pl-5 space-y-2 list-decimal">
                                  <li>
                                    
                                    <p>Open the Nobus FCS console.</p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>In the navigation pane, select <b>NMIs</b>.
                                    </p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>From the list, select the images.
                                        choose the Name; operating system (for example
                                        <b>Nobus Linux</b>), with a <b>Root Device Type</b> 
                                      to make your <b>FBS images</b> choice.
                                        
                                    </p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>Click the <b>Show/Hide</b> icon, to get information that might help through your selection.  
                                    </p>
                                    
                                  </li>
                                  <li>
                                    <p>Select a NMI and note NMI ID.</p>
                                  </li>
                              </ol>
                              
                              <p className="py-2"><b>To choose an instance store-backed NMI using the console</b></p>
                              <ol className="py-2 pl-5 space-y-2 list-decimal">
                                  <li>
                                    
                                    <p>Open the Nobus FCS console.</p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>In the navigation pane, choose <b>NMIs</b>.
                                    </p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>From the list, select the images.
                                        choose the Name; operating system (for example
                                        <b>Nobus Linux</b>), with a <b>Root Device Type</b> 
                                      to make your <b>instance store</b> choice.
                                        
                                    </p>
                                    
                                  </li>
                                  <li>
                                    
                                  <p>Click the <b>Show/Hide</b> icon, to get information that might help through your selection.
                                    
                                    </p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>Select a NMI and note its NMI ID.</p>
                                    
                                  </li>
                              </ol>
                              
                              <h5 className="font-semibold text-xl py-2 text-[#232f3e]">Determining the Root Device Type of Your Instance</h5>
                              <p ><b>To determine the root device type of an instance using the console</b></p>
                              <ol className="py-2 pl-5 space-y-2 list-decimal">
                                  <li>
                                    
                                    <p>Open the Nobus FCS console.</p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>In the navigation pane, select <b>Instances</b>, and choose the
                                        instance.
                                    </p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>Check the value of <b>Root device type</b> in the
                                        <b>Description</b> tab as follows:
                                    </p>
                                    
                                    <div className="pl-4">
                                        <ul className="pl-4 space-y-2 list-disc">
                                          <li>
                                              <p>If the value is <code className="text-red-400">fbs</code>, this is a NobusFBS-backed instance.
                                              </p>
                                              
                                          </li>
                                          <li>
                                              
                                              <p>If the value is <code className="text-red-400">instance store</code>, this is an instance store-backed
                                                instance.
                                              </p>
                                              
                                          </li>
                                        </ul>
                                    </div>
                                    
                                  </li>
                              </ol>

                              <h5 className="font-semibold py-2 text-lg text-[#232f3e]">Changing the Root Device Volume to Persist</h5>

                              <p>By default, the root device volume for a NMI backed by NobusFBS is not deleted when
                                  the instance terminates.
                                  
                              </p>
                        
                              <h6 className="py-2 text-lg font-semibold text-[#232f3e]">Changing the Root Volume to not Persist Using the Console</h6>
                            
                        
                              <p><b>To change the root device volume of an instance to not persist at launch using the
                                    console</b></p>
                              <ol className="py-2 pl-5 space-y-2 list-decimal">
                                  <li>
                                    
                                    <p>Open the Nobus FCS console.</p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>From the Nobus FCS console, choose <b>Launch Instance</b>.
                                    </p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>On the <b>Choose a Nobus Machine Image (NMI)</b> section, select the NMI to
                                        use.
                                    </p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>Follow the wizard to complete the <b>Choose a Flavor</b> and
                                        <b>Configure Instance Details</b> pages.
                                    </p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>
                                    On the <b>Volume Size</b> section, select Yes <b>Delete Volume on Instance Delete</b> for the root volume.
                                    </p>
                                    
                                  </li>
                                  <li>
                                    
                                    <p>Complete the remaining wizard pages, and then choose <b>Launch</b>.
                                    </p>
                                    
                                  </li>
                              </ol>                     
                            
                            </Tab.Panel>
                            </Tab.Panels>
                          </div>
                        </Tab.Group>
                      </div>
                    </div>
                  </section>
                  <Access />
                  <Quickstart />
                  <BestPractices />
                  <Instance />
                  <Nmi />
                </div>
                
              </div>
              <div className="p-5 text-sm tracking-wide leading-relaxed">
                <p>Except otherwise...</p>
              </div>
            </div>
            <div className="overflow-hidden">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default index;
