import { Fragment, useState } from "react";
import Script from "next/script";
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
  PlayIcon,
  PhoneIcon,
  SearchIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";

const navigation = {
  productcategories: [
    {
      id: "men",
      name: "Product",
      featured: [
        {
          name: "Cloud operating model",
          href: "/product",
          imageSrc: "/prdcard.png",
          imageAlt: "Cloud operating model",
        },
      ],
    },
  ],
  solutioncategories: [
    {
      id: "women",
      name: "Solution",
      featured: [
        {
          name: "Customers utilizing our solutions",
          href: "/solutions",
          imageSrc: "/solcard.png",
          imageAlt: "Customers utilizing our solutions",
        },
      ],

      sections: [
        {
          id: "compute",
          name: "Compute Services",
          items: [
            { name: "Flexible Clompute Service", href: "#" },
            { name: "Server Groups", href: "#" },
            { name: "Autoscaling Groups", href: "#" },
          ],
        },
        {
          id: "storage",
          name: "Storage Services",
          items: [
            { name: "Flexible Block Storage", href: "#" },
            { name: "Flexible Object Storage", href: "#" },
          ],
        },
        {
          id: "backup",
          name: "Cloud Backups",
          items: [
            { name: "Flexible Object Storage", href: "#" },
            { name: "Acronis Cloud Backup", href: "#" },
          ],
        },
        {
          id: "networking",
          name: "Networking Services",
          items: [
            { name: "Virtual Private Cloud", href: "#" },
            { name: "FastTransit", href: "#" },
            { name: "Floating IPs", href: "#" },
            { name: "Network Address Translation", href: "#" },
            { name: "Virtual Private Gateway", href: "#" },
          ],
        },
        {
          id: "image",
          name: "Image Services",
          items: [
            { name: "Linux", href: "#" },
            { name: "Windows", href: "#" },
          ],
        },
        {
          id: "security",
          name: "Cloud Security",
          items: [
            { name: "Security Groups", href: "#" },
            { name: "XG Firewall", href: "#" },
            { name: "Sophos Cyber Security", href: "#" },
            { name: "Acronis Cyber Protect", href: "#" },
            { name: "PFSense", href: "#" },
            { name: "Virtual Private Network", href: "#" },
          ],
        },
      ],
    },
  ],
  pricingcategories: [
    {
      id: "men",
      name: "Pricing",
      featured: [
        {
          name: "Calculate your total savings",
          text: "Calculate your total savings",
          desc: "Visit SMC",
          href: "/simple-monthly-calculator",
          imageSrc: "/smccard.png",
          imageAlt: "Calculate your total savings",
        },

        {
          name: "Pricing FAQs",
          text: "Pricing FAQs",
          desc: "See answers to your pricing questions",
          href: "/service-faq",
          imageSrc: "pfaq.png",
          imageAlt: "Pricing FAQs",
        },
        {
          name: "Tee",
          href: "#",
          imageSrc: "Frame3.png",
          imageAlt: "",
        },
        {
          name: "Tes",
          href: "#",
          imageSrc: "Frame5.png",
          imageAlt: "",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc: "Frame2.png",
          imageAlt: "",
        },
        {
          name: "Artwork",
          href: "#",
          imageSrc: "Frame1.png",
          imageAlt: "",
        },
        {
          name: "Tees",
          href: "#",
          imageSrc: "Frame8.png",
          imageAlt: "",
        },
        {
          name: "ees",
          href: "#",
          imageSrc: "Frame7.png",
          imageAlt: "",
        },
      ],
    },
  ],
  docscategories: [
    {
      id: "men",
      name: "Documentation",
      featured: [
        {
          name: "Visit news blog",
          href: "/blog/",
          imageSrc: "/blogcard.png",
          imageAlt: "",
        },
        {
          name: "Service FAQs",
          href: "/service-faq",
          imageSrc: "faqcard.png",
          imageAlt: "",
        },
      ],
    },
  ],
  categories: [
    {
      id: "women",
      name: "Solution",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: "/Frame1.png",
          imageAlt: "",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc: "Frame4.png",
          imageAlt: "",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Pricing",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: "/Frame8.png",
          imageAlt: "",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc: "/Frame3.png",
          imageAlt: "",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "News Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
    { name: "Watch Demo", href: "/demo" },
    { name: "FAQs", href: "/service-faq" },
  ],
};

const resources = [
  {
    name: "Help Center",
    description: "Get all of your questions answered or contact us.",
    href: "/service-faq",
    icon: UserIcon,
  },
  {
    name: "Contact",
    description: "Speak with our sales team",
    href: "/contact/",
    icon: PhoneIcon,
  },

  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/documentation/",
    icon: LightBulbIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Migrate to the cloud with no doubt", href: "/blog" },
  {
    id: 4,
    name: "Cloud Adoption in Nigeria",
    href: "/blog",
  },
  {
    id: 6,
    name: "Introducing Nobus Flexible Compute Services (FCS)",
    href: "/blog",
  },
];

const callsToAction = [
  { name: "Watch Demo", href: "/demo", icon: PlayIcon },
  { name: "Contact Sales", href: "/contact/", icon: PhoneIcon },
];

const pricefilters = [
  {
    id: "compute",
    name: "Compute",
    options: [
      { value: "Flexible Compute Services", href: "#" },
      { value: "Server Groups", href: "#" },
      { value: "Autoscaling Groups", href: "#" },
    ],
  },
  {
    id: "storage",
    name: "Storage",
    options: [
      { value: "Flexible Block Storage", href: "#" },
      { value: "Flexible Object Storage", href: "#" },
    ],
  },
  {
    id: "backup",
    name: "Cloud Backup",
    options: [
      { value: "Acronis Cloud Backup", href: "#" },
      { value: "Object Storage", href: "#" },
    ],
  },
  {
    id: "networking",
    name: "Networking",
    options: [
      { value: "Bandwidth", href: "#" },
      { value: "FastTransit", href: "#" },
      { value: "Floating IPs", href: "#" },
      { value: "Virtual Private Network", href: "#" },
    ],
  },
  {
    id: "security",
    name: "Security",
    options: [
      { value: "PfSense", href: "#" },
      { value: "Sophos XG Security Services", href: "#" },
      { value: "Acronis cyber sercurity", href: "#" },
      { value: "Security Groups", href: "#" },
      { value: "Virtual Private Gateway", href: "#" },
    ],
  },
];

const mobilefilters = [
  {
    id: "product",
    name: "Product",
    options: [
      { value: "Flexible Block Storage", href: "#" },
      { value: "Flexible Object Storage", href: "#" },
    ],
  },
  {
    id: "solution",
    name: "Solution",
    options: [
      { value: "Acronis Cloud Backup", href: "#" },
      { value: "Object Storage", href: "#" },
    ],
  },
  {
    id: "pricing",
    name: "Pricing",
    options: [
      { value: "Bandwidth", href: "#" },
      { value: "FastTransit", href: "#" },
      { value: "Floating IPs", href: "#" },
      { value: "Virtual Private Network", href: "#" },
    ],
  },
  {
    id: "documentation",
    name: "Documentation",
    options: [
      { value: "PfSense", href: "#" },
      { value: "Sophos XG Security Services", href: "#" },
      { value: "Acronis cyber sercurity", href: "#" },
      { value: "Security Groups", href: "#" },
      { value: "Virtual Private Gateway", href: "#" },
    ],
  },
];

const docsfilters = [
  {
    id: "color",
    name: "Service Docs",
    options: [
      { value: "Flexible Compute Service", href: "#" },
      { value: "Flexible Block Storage", href: "#" },
      { value: "FastTransit", href: "#" },
      { value: "Flexible Object Storage", href: "#" },
      { value: "Acronis Cloud Backup", href: "#" },
      { value: "Sophos XG Firewall", href: "#" },
      { value: "Nobus DNS", href: "#" },
      { value: "Server Group", href: "#" },
      { value: "Autoscaling Group", href: "#" },
      { value: "Virtual Private Network", href: "#" },
      { value: "Networking", href: "#" },
      { value: "Security Groups", href: "#" },
      { value: "Floating IPs", href: "#" },
      { value: "Flexible Load Balancing", href: "#" },
      { value: "Data Migration", href: "#" },
      { value: "Wowza", href: "#" },
      { value: "Data Center as a Service", href: "#" },
    ],
  },
  {
    id: "category",
    name: "Quick Guide",
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
    id: "tutorials",
    name: "Tutorials",
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

const docsproducts = [
  {
    id: 1,
    name: "Service Terms",
    href: "/service-terms",
    color: "See how terms govern your use of our services.",
    quantity: "",
    imageSrc: "/sla.png",
    imageAlt: "",
  },
  {
    id: 2,
    name: "Explore our Use Cases",
    href: "/documentation",
    color: "Learn about how our active customers use Nobus",
    quantity: "",
    imageSrc: "/cases.png",
    imageAlt: "",
  },
  {
    id: 3,
    name: "Knowledge Center",
    href: "/helpcenter",
    color:
      "Get answers to the most frequent questions from customers across every Nobus service.",
    quantity: "",
    imageSrc: "/kncent.png",
    imageAlt: "",
  },
];

const prodproducts = [
  {
    id: 1,
    name: "Cloud Operating Model",
    href: "/product",
    color:
      "Understand how to adopt cloud technology while maximizing cloud benefits",
    imageSrc: "/model.png",
    imageAlt: "See principles for building a successful Cloud Operating Model",
  },
  {
    id: 2,
    name: "Technical Support",
    href: "/contact/support",
    color: "Get expert coaching, technical support and guidance",
    imageSrc: "/techsup.png",
    imageAlt: "Get expert coaching, technical support and guidance",
  },
  {
    id: 3,
    name: "About Service Level Agreements (SLAs)",
    href: "/service-terms",
    color: 'See policy governing the use of the "Included Services" separately',
    imageSrc: "/sla.png",
    imageAlt:
      'See policy governing the use of the "Included Services" separately',
  },

  {
    id: 4,
    name: "Privacy Policy",
    href: "/policy",
    color:
      "See how Nobus Cloud Services (NCS) collect and use your personal information",
    imageSrc: "/policy.png",
    imageAlt:
      "See how Nobus Cloud Services (NCS) collect and use your personal information",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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

                <div className="mx-auto py-4 flex lg:ml-0">
                  <a href="/">
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto" src="/logo.png" alt="" />
                  </a>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  {/* Filters */}
                  <div className="block space-y-2 px-4 pt-10 pb-8">
                    {mobilefilters.map((section) => (
                      <div className="">
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-b border-gray-200 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-my-3 flow-root ">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-base text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-8">
                                  <span className="font-medium ">
                                    {section.name}
                                  </span>
                                  <span className="flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                  {section.options.map((option) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center group"
                                    >
                                      <a
                                        href={option.href}
                                        className="font-medium text-gray-900 group-hover:bg-gray-100"
                                      >
                                        <span aria-hidden="true" />
                                        {option.value}
                                      </a>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    ))}
                  </div>
                </Tab.Group>

                <div className="space-y-6 py-6 px-4">
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

                <div className="space-y-6 border-t border-gray-200 py-6 px-4 text-center">
                  <div className="flow-root py-2">
                    <a
                      href="https://dashboard.nobus.io"
                      className="-m-2 block  button-outline p-2 font-medium"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root py-2">
                    <a
                      href="/registration"
                      className="-m-2 block button p-2 font-medium"
                    >
                      Create account <span aria-hidden="true"> &rarr;</span>
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
        <div
          id="discount"
          style={{ display: visible ? "block lg:hidden" : "none" }}
          className="bg-blue-700 block lg:hidden"
        >
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg bg-blue-500 p-2">
                  <SpeakerphoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span>30% off on migration</span>
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="#"
                  className="flex items-center justify-center border border-transparent bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-indigo-50"
                >
                  Learn more
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  onClick={() => setVisible(!visible)}
                  className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
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

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.productcategories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600 focus:scale-110"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "group relative z-10 -mb-px flex items-center border-b-4 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-none"
                              )}
                            >
                              <span>{category.name}</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open
                                    ? "text-gray-600 rotate-180 tracking-widest transition duration-100 transform hover:scale-125"
                                    : "text-gray-400 tracking-widest transition duration-100 transform hover:scale-125",
                                  "ml-2 h-4 w-4 group-hover:text-gray-500"
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="ml-auto max-w-7xl pl-2">
                                  <div className="flex">
                                    <div className="flex-col w-2/3 pr-10 pt-5">
                                      <div className="hidden md:block">
                                        <div className="border-b border-gray-200 pb-6">
                                          <h3 className="text-lg font-medium text-gray-400 pb-4">
                                            {" "}
                                            OVERVIEW
                                          </h3>
                                          <h3 className="text-2xl font-medium text-gray-600 pb-4">
                                            {" "}
                                            Nobus Platform
                                          </h3>
                                          <p className="text-sm text-gray-500 pr-60 text-gray-700 text-justify tracking-wide leading-relaxed">
                                            Nobus Cloud Services offers global
                                            cloud-based products that help
                                            organizations to minimize the time
                                            and amount used to plan, procure,
                                            and manage their infrastructure in a
                                            scalable and secure way, over a
                                            private WAN or the internet. You pay
                                            only for resources actually consumed
                                            and save more.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="space-x-5 py-3">
                                        <div className="flex-col mt-5">
                                          <div className="flow-root ">
                                            <ul
                                              role="grid"
                                              className="-my-6 grid grid-cols-2 gap-y-6 gap-x-8 "
                                            >
                                              {prodproducts.map((product) => (
                                                <li
                                                  key={product.id}
                                                  className="flex py-6 hover:bg-gray-100"
                                                >
                                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img
                                                      src={product.imageSrc}
                                                      alt={product.imageAlt}
                                                      className="h-full w-full object-cover object-center"
                                                    />
                                                  </div>

                                                  <div className="ml-4 flex flex-1 flex-col">
                                                    <a href={product.href}>
                                                      <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                          <h3>
                                                            {product.name}
                                                          </h3>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                          {product.color}
                                                        </p>
                                                      </div>
                                                      <div className="flex flex-1 items-end justify-between text-sm">
                                                        <p className="text-gray-500">
                                                          {product.quantity}
                                                        </p>
                                                      </div>
                                                    </a>
                                                  </div>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="w-1/3 bg-gray-200 p-3">
                                      <div className="flex-col">
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative text-base sm:text-sm"
                                          >
                                            <a href={item.href}>
                                              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-900 group-hover:opacity-75">
                                                <img
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt}
                                                  className="object-cover object-center"
                                                />
                                              </div>
                                            </a>
                                          </div>
                                        ))}
                                      </div>

                                      <div className="border border-gray-900 bg-white mt-2 p-2 text-center text-gray-900">
                                        <div className="space-y-6 sm:flex sm:space-y-0 space-x-2">
                                          {callsToAction.map((item) => (
                                            <div
                                              key={item.name}
                                              className="flow-root group"
                                            >
                                              <a
                                                href={item.href}
                                                className="flex items-center text-gray-700 rounded-lg shadow-lg border bg-gray-50 lg:p-3 text-base font-medium group-hover:bg-gray-200 group-hover:text-blue-600 group-hover:scale-105"
                                              >
                                                <item.icon
                                                  className="h-6 w-6 flex-shrink-0"
                                                  aria-hidden="true"
                                                />
                                                <span className="ml-3">
                                                  {item.name}
                                                </span>
                                              </a>
                                            </div>
                                          ))}
                                        </div>

                                        <p className="mt-2 text-md text-left px-4">
                                          For general enquiry about the services
                                          that we offer, you can contact our
                                          sales team.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.solutioncategories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600 focus:scale-110"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "group relative z-10 -mb-px flex items-center outline-none border-b-4 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              <span>{category.name}</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open
                                    ? "text-gray-600 rotate-180 tracking-widest transition duration-100 transform hover:scale-125"
                                    : "text-gray-400 tracking-widest transition duration-100 transform hover:scale-125",
                                  "ml-2 h-4 w-4 group-hover:text-gray-500"
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="ml-auto max-w-7xl pl-2">
                                  <div className="flex">
                                    <div className="flex-col w-2/3 pt-10">
                                      <div className="grid grid-cols-3 gap-y-10 gap-x-8 pr-4 flex text-sm">
                                        {category.sections.map((section) => (
                                          <div
                                            key={section.name}
                                            className="hover:bg-gray-100 p-2 group"
                                          >
                                            <p
                                              id={`${section.name}-heading`}
                                              className="text-xl font-medium text-gray-900 group-hover:text-blue-600"
                                            >
                                              {section.name}
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {section.items.map((item) => (
                                                <li
                                                  key={item.name}
                                                  className="flex"
                                                >
                                                  <a
                                                    href={item.href}
                                                    className="text-gray-800 hover:underline group-hover:scale-110 text-base"
                                                  >
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="w-1/3 bg-gray-200 p-3">
                                      <div className="flex-col">
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative text-base sm:text-sm"
                                          >
                                            <a href={item.href}>
                                              <div className="aspect-w-1 aspect-h-1 overflow-hidden bg-gray-900 group-hover:opacity-75">
                                                <img
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt}
                                                  className="object-cover object-center"
                                                />
                                              </div>
                                            </a>
                                          </div>
                                        ))}
                                      </div>

                                      <div className="border border-gray-900 bg-white mt-2 p-2 text-center text-gray-900">
                                        <div className="space-y-6 sm:flex sm:space-y-0 space-x-2">
                                          {callsToAction.map((item) => (
                                            <div
                                              key={item.name}
                                              className="flow-root group"
                                            >
                                              <a
                                                href={item.href}
                                                className="flex items-center text-gray-700 rounded-lg shadow-lg border bg-gray-50 lg:p-3 text-base font-medium group-hover:bg-gray-200 group-hover:text-blue-600 group-hover:scale-105"
                                              >
                                                <item.icon
                                                  className="h-6 w-6 flex-shrink-0"
                                                  aria-hidden="true"
                                                />
                                                <span className="ml-3">
                                                  {item.name}
                                                </span>
                                              </a>
                                            </div>
                                          ))}
                                        </div>

                                        <p className="mt-2 text-md text-left px-4">
                                          For general enquiry about the services
                                          that we offer, you can contact our
                                          sales team.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pricingcategories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600 focus:scale-110"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "group relative z-10 -mb-px flex outline-none items-center border-b-4 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              <span>{category.name}</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open
                                    ? "text-gray-600 rotate-180 tracking-widest transition duration-100 transform hover:scale-125"
                                    : "text-gray-400 tracking-widest transition duration-100 transform hover:scale-125",
                                  "ml-2 h-4 w-4 group-hover:text-gray-500"
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8 py-10">
                                  <div className="pb-10 flex">
                                    <div className="flex w-1/3 pr-10">
                                      {/* Filters */}
                                      <div className="hidden md:block">
                                        <div className="border-b border-gray-200 pb-6">
                                          <h3 className="text-2xl font-medium text-gray-600 justify pb-4">
                                            {" "}
                                            Nobus Pricing
                                          </h3>
                                          <p className="text-base text-gray-500 justify">
                                            Low ongoing cost; pay-as-you-use
                                            pricing with flexible expenses, of
                                            short or long term commitments,
                                            without requiring complex licensing.
                                          </p>
                                        </div>

                                        {pricefilters.map((section) => (
                                          <div className="overflow-y-scroll scrollbar-hide px-3">
                                            <Disclosure
                                              as="div"
                                              key={section.id}
                                              className="border-b border-gray-200 py-6"
                                            >
                                              {({ open }) => (
                                                <>
                                                  <h3 className="-my-3 flow-root ">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-base text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-8">
                                                      <span className="font-medium ">
                                                        {section.name}
                                                      </span>
                                                      <span className="flex items-center">
                                                        {open ? (
                                                          <MinusIcon
                                                            className="h-4 w-4"
                                                            aria-hidden="true"
                                                          />
                                                        ) : (
                                                          <PlusIcon
                                                            className="h-4 w-4"
                                                            aria-hidden="true"
                                                          />
                                                        )}
                                                      </span>
                                                    </Disclosure.Button>
                                                  </h3>
                                                  <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4 pt-4">
                                                      {section.options.map(
                                                        (option) => (
                                                          <div
                                                            key={option.value}
                                                            className="flex items-center group"
                                                          >
                                                            <a
                                                              href={option.href}
                                                              className="font-medium text-md text-gray-700 group-hover:bg-gray-200 group-hover:scale-105"
                                                            >
                                                              <span aria-hidden="true" />
                                                              {option.value}
                                                            </a>
                                                          </div>
                                                        )
                                                      )}
                                                    </div>
                                                  </Disclosure.Panel>
                                                </>
                                              )}
                                            </Disclosure>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="flex w-2/3">
                                      <div className="grid grid-cols-1 gap-y-10">
                                        <div className="flex -ml-2 space-x-5 overflow-x-scroll overflow-y-hidden scroll-smooth p-3">
                                          {category.featured.map((item) => (
                                            <div
                                              key={item.name}
                                              className="group relative text-base sm:text-sm"
                                            >
                                              <div className="aspect-w-1 aspect-h-1 h-60 w-60 rounded-lg bg-gray-100 group-hover:opacity-75">
                                                <img
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt}
                                                  className="object-fill object-center"
                                                />
                                              </div>
                                              <a
                                                href={item.href}
                                                className="mt-6 block font-medium text-gray-900"
                                              >
                                                <span
                                                  className="absolute inset-0 z-10"
                                                  aria-hidden="true"
                                                />
                                                {item.text}
                                              </a>
                                              <p
                                                aria-hidden="true"
                                                className="mt-1"
                                              >
                                                {item.desc}
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                        <div className="flex text-center justify-between">
                                          <a></a>

                                          <a
                                            href="/pricing"
                                            className="font-medium mr-4 text-base text-gray-600 hover:text-gray-400 "
                                          >
                                            View all pricing
                                            <span aria-hidden="true">
                                              {" "}
                                              &rarr;
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.docscategories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600 focus:scale-110"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "group relative z-10 -mb-px flex outline-none items-center border-b-4 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              <span>{category.name}</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open
                                    ? "text-gray-600 rotate-180 tracking-widest transition duration-100 transform hover:scale-125"
                                    : "text-gray-400 tracking-widest transition duration-100 transform hover:scale-125",
                                  "ml-2 h-4 w-4 group-hover:text-gray-500"
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8 py-10">
                                  <div className="pb-10 flex">
                                    <div className="flex w-1/3 pr-10">
                                      <div className="hidden md:block">
                                        <div className="border-b border-gray-200 pb-6">
                                          <h3 className="text-2xl font-medium text-gray-600 justify pb-4">
                                            {" "}
                                            Nobus Documentation
                                          </h3>
                                          <p className="text-base text-gray-500 justify">
                                            Comprehensive documentation for
                                            Nobus services, use cases,
                                            scenarios, and tasks. Browse user
                                            guides, developer guides and
                                            tutorials.
                                          </p>
                                        </div>

                                        {docsfilters.map((section) => (
                                          <Disclosure
                                            as="div"
                                            key={section.id}
                                            className="border-b border-gray-200 py-6"
                                          >
                                            {({ open }) => (
                                              <>
                                                <h3 className="-my-3 flow-root">
                                                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-base text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-8">
                                                    <span className="font-medium">
                                                      {section.name}
                                                    </span>
                                                    <span className="ml-10 flex items-center">
                                                      {open ? (
                                                        <MinusIcon
                                                          className="h-4 w-4"
                                                          aria-hidden="true"
                                                        />
                                                      ) : (
                                                        <PlusIcon
                                                          className="h-4 w-4"
                                                          aria-hidden="true"
                                                        />
                                                      )}
                                                    </span>
                                                  </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                  <div className="space-y-4 pt-4">
                                                    {section.options.map(
                                                      (option) => (
                                                        <div
                                                          key={option.value}
                                                          className="flex items-center group"
                                                        >
                                                          <a
                                                            href={option.href}
                                                            className="font-medium text-md text-gray-700 group-hover:bg-gray-200 group-hover:scale-105"
                                                          >
                                                            <span aria-hidden="true" />
                                                            {option.value}
                                                          </a>
                                                        </div>
                                                      )
                                                    )}
                                                  </div>
                                                </Disclosure.Panel>
                                              </>
                                            )}
                                          </Disclosure>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="flex w-1/3 space-x-5 px-4">
                                      <div className="">
                                        <div className="flow-root ">
                                          <ul
                                            role="list"
                                            className="-my-6 divide-y divide-gray-200"
                                          >
                                            {docsproducts.map((product) => (
                                              <li
                                                key={product.id}
                                                className="flex py-6 hover:bg-gray-100"
                                              >
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                  <img
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    className="h-full w-full object-cover object-center"
                                                  />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                  <a href={product.href}>
                                                    <div>
                                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>{product.name}</h3>
                                                      </div>
                                                      <p className="mt-1 text-sm text-gray-500">
                                                        {product.color}
                                                      </p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                      <p className="text-gray-500">
                                                        {product.quantity}
                                                      </p>
                                                    </div>
                                                  </a>
                                                </div>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex w-1/3 -ml-2 space-x-5 overflow-x-scroll overflow-y-hidden scroll-smooth p-3">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 h-60 w-60 rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-fill object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="flex text-sm text-center justify-between">
                                    <a>
                                      <h2></h2>
                                    </a>

                                    <a
                                      href="/documentation"
                                      className="font-medium mr-4 text-base text-gray-600 hover:text-gray-400 "
                                    >
                                      View all documentation
                                      <span aria-hidden="true"> &rarr;</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  <Popover className="flex">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open
                              ? "border-indigo-600 text-indigo-600 focus:scale-110"
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
                          <Popover.Panel className="absolute left-1/2 z-10 mt-20 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
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
                              <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                                <div>
                                  <h3 className="text-base font-medium text-gray-500">
                                    Recent Posts
                                  </h3>
                                  <ul role="list" className="mt-4 space-y-4">
                                    {recentPosts.map((post) => (
                                      <li
                                        key={post.id}
                                        className="truncate text-base"
                                      >
                                        <a
                                          href={post.href}
                                          className="font-medium text-gray-900 hover:text-gray-500"
                                        >
                                          {post.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-5 text-sm">
                                  <a
                                    href="/blog"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    View all blog posts
                                    <span aria-hidden="true"> &rarr;</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="https://dashboard.nobus.io"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="/registration"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="/ngn.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">NGN</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
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
