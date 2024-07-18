import { React, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Dialog,
  Disclosure,
  Tab,
  Transition,
} from "@headlessui/react";
import {
 
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";


const docsfilters = [
    {
      name: "Flexible Compute Service",
      href: "/documentation/fcs",
      options: [
        { value: "Overview", href: "/documentation/fcs" },
        { value: "Access & Security Configurations", href: "/documentation/fcs#access-security-configurations" },
        { value: "Quickstart", href: "/documentation/fcs#quickstart" },
        { value: "Best Practices", href: "/documentation/fcs#best-practices" },
        { value: "Instance", href: "/documentation/fcs#instance" },
        { value: "Autoscaling", href: "/documentation/fcs#autoscaling" },
      ],
    },
    
    {
      name: "Image Service",
      href: "/documentation/images",
      options: [
        { value: "Public Images", href: "/documentation/images" },
        { value: "Custom Images", href: "/documentation/images" },
      ],
    },
    {
    name: "Flexible Block Storage",
    href: "/documentation/fbs",
    options: [
        { value: "Overview", href: "/documentation/fbs" },
        { value: "Create your Nobus account", href: "#" },
        { value: "How to provision a Linux instance", href: "#" },
        { value: "How to provision a Windows instance", href: "#" },
        { value: "SSH into your nobus instance", href: "#" },
        {
        value: "Access your windows instance in Nobus Cloud via Remote Desktop",
        href: "#",
        },
        { value: "Set up Site-to-Site VPN in Nobus Cloud", href: "#" },
        { value: "PfSense", href: "#" },
        { value: "Set up a firewall using Sophos", href: "#" },
        { value: "Configure your virtual private gateway", href: "#" },
        { value: "Configure Security Groups and Rules", href: "#" },
        { value: "Create a cloud backup", href: "#" },
        { value: "Configure replication with Microsoft SQL", href: "#" },
        {
        value: "Configure identity and access management in Nobus Cloud",
        href: "#",
        },
    ],
    },
    {
    name: "Cloud Security",
    href: "/documentation/cloud-security",
    options: [
        { value: "Create your Nobus account", href: "#" },
        { value: "How to provision a Linux instance", href: "#" },
        { value: "How to provision a Windows instance", href: "#" },
        { value: "SSH into your nobus instance", href: "#" },
        {
        value: "Access your windows instance in Nobus Cloud via Remote Desktop",
        href: "#",
        },
        { value: "Set up Site-to-Site VPN in Nobus Cloud", href: "#" },
        { value: "PfSense", href: "#" },
        { value: "Set up a firewall using Sophos", href: "#" },
        { value: "Configure your virtual private gateway", href: "#" },
        { value: "Configure Security Groups and Rules", href: "#" },
        { value: "Create a cloud backup", href: "#" },
        { value: "Configure replication with Microsoft SQL", href: "#" },
        {
        value: "Configure identity and access management in Nobus Cloud",
        href: "#",
        },
    ],
    },
    {
    name: "Cloud Backup",
    href: "/documentation/acronis",
    options: [
        { value: "Create your Nobus account", href: "#" },
        { value: "How to provision a Linux instance", href: "#" },
        { value: "How to provision a Windows instance", href: "#" },
        { value: "SSH into your nobus instance", href: "#" },
        {
        value: "Access your windows instance in Nobus Cloud via Remote Desktop",
        href: "#",
        },
        { value: "Set up Site-to-Site VPN in Nobus Cloud", href: "#" },
        { value: "PfSense", href: "#" },
        { value: "Set up a firewall using Sophos", href: "#" },
        { value: "Configure your virtual private gateway", href: "#" },
        { value: "Configure Security Groups and Rules", href: "#" },
        { value: "Create a cloud backup", href: "#" },
        { value: "Configure replication with Microsoft SQL", href: "#" },
        {
        value: "Configure identity and access management in Nobus Cloud",
        href: "#",
        },
    ],
    },
    {
    name: "Networking",
    href: "/documentation/networking",
    options: [
        { value: "Create your Nobus account", href: "#" },
        { value: "How to provision a Linux instance", href: "#" },
        { value: "How to provision a Windows instance", href: "#" },
        { value: "SSH into your nobus instance", href: "#" },
        {
        value: "Access your windows instance in Nobus Cloud via Remote Desktop",
        href: "#",
        },
        { value: "Set up Site-to-Site VPN in Nobus Cloud", href: "#" },
        { value: "PfSense", href: "#" },
        { value: "Set up a firewall using Sophos", href: "#" },
        { value: "Configure your virtual private gateway", href: "#" },
        { value: "Configure Security Groups and Rules", href: "#" },
        { value: "Create a cloud backup", href: "#" },
        { value: "Configure replication with Microsoft SQL", href: "#" },
        {
        value: "Configure identity and access management in Nobus Cloud",
        href: "#",
        },
    ],
    },
    {
    name: "Domains and DNS",
    href: "/documentation/dns",
    options: [
        { value: "Create your Nobus account", href: "#" },
        { value: "How to provision a Linux instance", href: "#" },
        { value: "How to provision a Windows instance", href: "#" },
        { value: "SSH into your nobus instance", href: "#" },
        {
        value: "Access your windows instance in Nobus Cloud via Remote Desktop",
        href: "#",
        },
        { value: "Set up Site-to-Site VPN in Nobus Cloud", href: "#" },
        { value: "PfSense", href: "#" },
        { value: "Set up a firewall using Sophos", href: "#" },
        { value: "Configure your virtual private gateway", href: "#" },
        { value: "Configure Security Groups and Rules", href: "#" },
        { value: "Create a cloud backup", href: "#" },
        { value: "Configure replication with Microsoft SQL", href: "#" },
        {
        value: "Configure identity and access management in Nobus Cloud",
        href: "#",
        },
    ],
    },
    {
      name: "Quick Guide",
      href: "/documentation/user-guide",
      options: [
        { value: "Create your Nobus account", href: "#" },
        { value: "How to provision a Linux instance", href: "#" },
        { value: "How to provision a Windows instance", href: "#" },
        { value: "SSH into your nobus instance", href: "#" },
        {
          value: "Access your windows instance in Nobus Cloud via Remote Desktop",
          href: "#",
        },
        { value: "Set up Site-to-Site VPN in Nobus Cloud", href: "#" },
        { value: "PfSense", href: "#" },
        { value: "Set up a firewall using Sophos", href: "#" },
        { value: "Configure your virtual private gateway", href: "#" },
        { value: "Configure Security Groups and Rules", href: "#" },
        { value: "Create a cloud backup", href: "#" },
        { value: "Configure replication with Microsoft SQL", href: "#" },
        {
          value: "Configure identity and access management in Nobus Cloud",
          href: "#",
        },
      ],
    },
    {
      name: "Tutorials",
      href: "/documentation/tutorials",
      options: [
        { value: "Cloud", href: "#" },
        { value: "Web-services", href: "#" },
        { value: "Operating Systems", href: "#" },
        { value: "Configuration Management", href: "#" },
        { value: "Infrastructure as Code", href: "#" },
        { value: "System Administration", href: "#" },
        { value: "Networking", href: "#" },
        { value: "IT Security", href: "#" },
        { value: "Backup/Disaster Recovery", href: "#" },
        { value: "Database", href: "#" },
        { value: "Monitoring", href: "#" },
        { value: "DevOps and Agile", href: "#" },
      ],
    },
  
  ];

 
  function SidebarDocs({ open, setOpen }) {
    const router = useRouter()
    
  return (
   
    <Transition.Root show={open} as={Fragment} >
        <Dialog onClose={setOpen}>

        <div className="absolute top-[132px] lg:top-[131px] flex flex-col bg-white">
            <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                    >
                <Dialog.Panel className="flex w-full max-w-sm overflow-y-auto pb-12 shadow-md">
                    
                    <Tab.Group as="div" className="mt-2">
                        <div className="h-[500px] overflow-y-scroll scrollbar-hide mx-6">
                            {docsfilters.map((section) => (
                            <Disclosure
                                as="div"
                                key={section.name}
                                className="border-b border-gray-300 shadow-md py-4"
                            >
                                {({ open }) => (
                                <>
                                  <Link href={section.href} className={`${router.pathname == section.href ? `group` : ""}`}>
                                    <h3 className="-my-3 flow-root">
                                    <Disclosure.Button className={`flex w-full items-center justify-between bg-white 
                                        py-3 text-base text-gray-600 hover:text-blue-600 active:text-blue-600 active:outline-none active:bg-gray-200 
                                        active:border-l-2 active:border-l-blue-600 focus:outline-none focus:bg-gray-200 focus:border-l-2
                                       focus:border-l-blue-600 group-focus:outline-none group-focus:bg-gray-200 group-active:text-blue-600 group-active:outline-none group-active:bg-gray-200 
                                       group-visited:text-blue-600 group-visited:outline-none group-visited:bg-gray-200 
                                    `}>
                                        
                                        <span className="px-2 text-md font-medium">
                                        {section.name}
                                        </span>
                                        <span className="ml-20 flex items-center">
                                        {open ? (
                                            <ChevronUpIcon
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                            />
                                        ) : (
                                            <ChevronDownIcon
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                            />
                                        )}
                                        </span>
                                    </Disclosure.Button>
                                    </h3>
                                    </Link>
                                    <Disclosure.Panel className="pt-2">
                                    <div className="space-y-2 pt-4 h-[200px] overflow-visible overflow-y-scroll">
                                        {section.options.map((option) => (
                                        <div
                                            key={option.value}
                                            className="flex items-center group pl-4"
                                        >
                                            <Link
                                            href={option.href}
                                            className={`font-medium text-sm active:text-blue-400 group-hover:bg-gray-200 group-hover:scale-105 ${router.pathname == option.href ? "active:text-blue-500 focus:text-blue-500 visited:text-blue-400" : "text-gray-700 focus:text-blue-400 "}`}
                                            >
                                            <span aria-hidden="true" />
                                            {option.value}
                                            </Link>
                                        </div>
                                        ))}
                                    </div>
                                    </Disclosure.Panel>
                                </>
                                )}
                            </Disclosure>
                            ))}
                        </div>
                    </Tab.Group>
                </Dialog.Panel>
            </Transition.Child>
        </div>
        </Dialog>
    </Transition.Root>
  
  )
}

export default SidebarDocs