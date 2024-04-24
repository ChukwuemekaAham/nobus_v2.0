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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Headerregister() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="mx-auto py-4 flex">
                  <a href="/">
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto" src="/logo.png" alt="" />
                  </a>
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root group">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900 group-hover:underline group-hover:bg-gray-100 "
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root group">
                    <a
                      href="https://dashboard.nobus.io"
                      className="-m-2 text-center block button-outline p-2 font-medium text-gray-900 group-hover:underline group-hover:bg-gray-100 "
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="/ngn.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      NGN
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4">
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuAlt3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto" src="/logo.png" alt="" />
                </a>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {/* Flyout menus */}
                  <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                    <div className="flex h-full space-x-8">
                      <Popover className="flex">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-blue-600 rounded-md text-blue-600 focus:scale-110"
                                  : "border-transparent text-gray-700 hover:text-gray-800",

                                "group inline-flex relative z-10 -mb-px flex outline-none items-center border-b-4 pt-px text-sm font-medium transition-colors duration-200 ease-out"
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
                              <Popover.Panel className="absolute right-5 z-10 mt-20 w-screen max-w-md transform px-2 sm:px-0">
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

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a className="group -m-2 flex items-center p-2">
                    <GlobeAltIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 "
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
