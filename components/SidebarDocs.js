import { React, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dialog, Disclosure, Tab, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

const docsfilters = [
  {
    name: "Flexible Compute Service",
    href: "/documentation/fcs",
    options: [
      { value: "", href: "/documentation/fcs" },
      { value: "Overview", href: "/documentation/fcs#overview" },
      {
        value: "Access & Security Configurations",
        href: "/documentation/fcs#access-security-configurations",
      },
      { value: "Quickstart", href: "/documentation/fcs#quickstart" },
      { value: "Best Practices", href: "/documentation/fcs#best-practices" },
      { value: "Instance", href: "/documentation/fcs#instance" },
      {
        value: "Connect to Instance",
        href: "/documentation/fcs#connecting-to-instance",
      },
      { value: "Autoscaling", href: "/documentation/fcs#autoscaling" },
      {
        value: "Dedicated Hosting",
        href: "/documentation/fcs#dedicated-hosting",
      },
    ],
  },
  {
    name: "Flexible Block Storage",
    href: "/documentation/fbs",
    options: [
      { value: "", href: "/documentation/fbs" },
      { value: "Overview", href: "/documentation/fbs#overview" },
      { value: "Quickstart", href: "/documentation/fbs#quickstart" },
      {
        value: "Volume Snapshots",
        href: "/documentation/fbs#volume-snapshots",
      },
      { value: "Data Services", href: "/documentation/fbs#data-services" },
    ],
  },
  {
    name: "Flexible Object Storage",
    href: "/documentation/fos",
    options: [
      { value: "", href: "/documentation/fos" },
      { value: "Overview", href: "/documentation/fos#overview" },
      { value: "Quickstart", href: "/documentation/fos#quickstart" },
    ],
  },
  {
    name: "Networking",
    href: "/documentation/networking",
    options: [
      { value: "", href: "/documentation/networking" },
      {
        value: "Data Center as a Service",
        href: "/documentation/networking#data-center-as-a-service",
      },
      { value: "Quickstart", href: "/documentation/networking#quickstart" },
      {
        value: "FastTransit Network",
        href: "/documentation/networking#fasttransit",
      },
      {
        value: "Virtual Private Network",
        href: "/documentation/networking#cloud-vpn",
      },
      { value: "Cloud Router", href: "/documentation/networking#cloud-router" },
      {
        value: "Cloud Load Balancer",
        href: "/documentation/networking#cloud-loadbalancer",
      },
    ],
  },
  {
    name: "Domains and DNS",
    href: "/documentation/dns",
    options: [
      { value: "", href: "/documentation/dns" },
      { value: "Overview", href: "/documentation/dns#overview" },
      { value: "Quickstart", href: "/documentation/dns#quickstart" },
    ],
  },
  {
    name: "Cloud Backup",
    href: "/documentation/cloud-backup",
    options: [
      { value: "", href: "/documentation/cloud-backup" },
      {
        value: "Nobus Cloud Backup",
        href: "/documentation/cloud-backup#overview",
      },
      { value: "FOS Backup Solution", href: "/documentation/fos" },
    ],
  },
  {
    name: "Cloud Security",
    href: "#",
    options: [
      { value: "", href: "#" },
      { value: "Overview", href: "#" },
      { value: "Network firewall", href: "#" },
      { value: "Security Groups", href: "#" },
      { value: "Network ACL", href: "#" },
      { value: "Sophos XG Firewall", href: "#" },
      { value: "Acronis Cyber Protect", href: "#" },
      { value: "Fortigate", href: "#" },
    ],
  },
  {
    name: "Database Services",
    href: "#",
    options: [
      { value: "", href: "#" },
      { value: "Overview", href: "#" },
      {
        value: "Microsoft SQL Server",
        href: "#",
      },
      {
        value: "MySQL Database",
        href: "#",
      },
      {
        value: "PostgreSQL Database",
        href: "#",
      },
      { value: "MongoDB", href: "#" },
    ],
  },

  {
    name: "Container Services",
    href: "#",
    options: [
      { value: "", href: "#" },
      { value: "Overview", href: "#" },
      { value: "Nobus Cloud Container", href: "#" },
      { value: "Nobus Kubernetes Engine", href: "#" },
    ],
  },

  {
    name: "Tutorials",
    href: "#",
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
  const router = useRouter();

  const setopen = () => {
    setOpen(true);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog onClose={setopen}>
        <div
          className="absolute top-[132px] lg:top-[131px] flex flex-col bg-white"
          aria-hidden="true"
        >
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
                <div className="h-[500px] overflow-y-scroll scrollbar scrollbar-hide hover:scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent mx-6">
                  {docsfilters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.name}
                      className="border-b border-gray-300 shadow-md py-4"
                    >
                      {({ open }) => (
                        <>
                          <Link
                            href={section.href}
                            className={`hover:no-underline ${
                              router.pathname == section.href ? `group` : ""
                            }`}
                          >
                            <h3 className="-my-5 flow-root">
                              <Disclosure.Button
                                className={`flex w-full items-center justify-between bg-white 
                                        py-3 text-base text-gray-600 hover:text-blue-600 active:text-blue-600 active:outline-none active:bg-gray-100 
                                        active:border-l-2 active:border-l-blue-600 focus:outline-none focus:bg-gray-100 focus:border-l-2
                                       focus:border-l-blue-600 group-focus:outline-none group-focus:bg-gray-100 group-active:text-blue-600 group-active:outline-none group-active:bg-gray-100 
                                       group-visited:text-blue-600 group-visited:outline-none group-visited:bg-gray-100 
                                    `}
                              >
                                <span className="px-2 text-md font-medium">
                                  {section.name}
                                </span>
                                <span className="ml-[55px] flex items-center">
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
                            <div className="space-y-2 pt-4 h-[200px] overflow-y-scroll scrollbar scrollbar-hide hover:scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent ">
                              {section.options.map((option) => (
                                <div
                                  key={option.value}
                                  className="flex items-center group pl-4"
                                >
                                  <Link
                                    href={option.href}
                                    className={`font-medium text-sm active:text-blue-400 group-hover:bg-gray-200 group-hover:scale-105 ${
                                      router.pathname == option.href
                                        ? "active:text-blue-500 focus:text-blue-500 visited:text-blue-400"
                                        : "text-gray-700 focus:text-blue-400 "
                                    }`}
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
  );
}

export default SidebarDocs;
