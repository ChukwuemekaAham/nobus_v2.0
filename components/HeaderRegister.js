import React from "react";
import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  UserIcon,
  MinusIcon,
  PlusIcon,
  SpeakerphoneIcon,
  GlobeAltIcon,
  MenuAlt3Icon,
  LightBulbIcon,
  BookOpenIcon,
  PlayIcon,
  PhoneIcon,
  ChartBarIcon,
  CogIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
  CalendarIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

const navigation = {
  pages: [
    { name: "Product", href: "/product" },
    { name: "Solution", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Documentation", href: "/documentation" },
  ],
};

const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/service-faq",
    icon: UserIcon,
  },
  {
    name: "Contact Sales",
    description: "Speak to Sales",
    href: "/contact/",
    icon: PhoneIcon,
  },

  // {
  //   name: 'Events',
  //   description: 'See what meet-ups and other events we might be planning near you.',
  //   href: '#',
  //   icon: CalendarIcon,
  // },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/documentation/",
    icon: LightBulbIcon,
  },
];

const mobilefilters = [
  {
    id: "solution",
    name: "Solution",
    options: [
      { value: "View All", href: "/solutions" },
      { value: "Flexible Compute Services", href: "#" },
      { value: "Dedicated Hosting", href: "#" },
      { value: "Flexible Block Storage", href: "#" },
      { value: "Flexible Object Storage", href: "#" },
      { value: "Networking Services", href: "#" },
      { value: "Domains & DNS", href: "#" },
      { value: "Container Services", href: "#" },
      { value: "Cloud Backup", href: "#" },
      { value: "Cloud Security", href: "#" },
      { value: "Database Services", href: "#" },
    ],
  },
  {
    id: "pricing",
    name: "Pricing",
    options: [
      { value: "View All", href: "/pricing" },
      { value: "Flexible Compute Service", href: "#" },
      { value: "Dedicated Hosting", href: "#" },
      { value: "Flexible Block Storage", href: "#" },
      { value: "Flexible Object Storage", href: "#" },
      { value: "Bandwidth", href: "#" },
      { value: "FastTransit", href: "#" },
      { value: "Floating IPs", href: "#" },
    ],
  },
  {
    id: "documentation",
    name: "Documentation",
    options: [
      { value: "View All", href: "/documentation" },
      { value: "Flexible Compute Services", href: "#" },
      { value: "FCS Autoscaling", href: "#" },
      { value: "Dedicated Hosting", href: "#" },
      { value: "Flexible Block Storage", href: "#" },
      { value: "Flexible Object Storage", href: "#" },
      { value: "Networking Services", href: "#" },
      { value: "Domains & DNS", href: "#" },
      { value: "Container Services", href: "#" },
      { value: "Cloud Backup", href: "#" },
      { value: "Cloud Security", href: "#" },
      { value: "Database Services", href: "#" },
      { value: "PfSense", href: "#" },
      { value: "Sophos XG", href: "#" },
      { value: "Acronis cyber sercurity", href: "#" },
      { value: "Security Groups", href: "#" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Headerregister() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      {/* Mobile menu */}
      <header className="relative">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4">
          <div className="">
            <div className="flex h-16 items-center">
              {/* <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuAlt3Icon className="h-6 w-6" aria-hidden="true" />
              </button> */}

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto" src="/logo2.png" alt="" />
                </a>
              </div>

              <div className="ml-auto flex items-center">
                <div className="flex flex-1 items-center ustify-end space-x-6">
                  {/* Flyout menus */}
                  <Popover.Group className="ml-8 block self-stretch">
                    <div className="flex h-full space-x-8">
                      <Popover className="flex">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-blue-600 rounded-md text-blue-600 focus:scale-110"
                                  : "border-transparent text-gray-700 hover:text-gray-800",

                                "group relative z-10 -mb-px flex outline-none items-center border-b-4 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              <span>More</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open
                                    ? "text-gray-600 rotate-180 tracking-widest transition duration-100 transform hover:scale-125"
                                    : "text-gray-400 hover:scale-125 transition duration-100 transform tracking-widest",
                                  "ml-2 h-4 w-4 group-hover:text-gray-500"
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute right-5 z-10 mt-10 w-screen max-w-md transform px-2 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    {resources.map((item) => (
                                      <a
                                        key={item.name}
                                        href={item.href}
                                        className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-100"
                                      >
                                        <item.icon
                                          className="h-6 w-6 flex-shrink-0 text-gray-400"
                                          aria-hidden="true"
                                        />
                                        <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">
                                            {item.name}
                                          </p>
                                          <p className="mt-1 text-sm text-gray-500">
                                            {item.description}
                                          </p>
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    </div>
                  </Popover.Group>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
