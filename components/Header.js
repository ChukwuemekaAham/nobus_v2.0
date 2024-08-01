import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
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
import { Router } from "next/router";

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
          name: "Virtual Hosting",
          sub: [
            {
              name: "",
              items: [
                { name: "Flexible Clompute Service", href: "#" },
                { name: "Dedicated Hosting", href: "#" },
              ],
            },
          ],
        },
        {
          id: "storage",
          name: "Storage Services",
          sub: [
            {
              name: "",
              items: [
                { name: "Flexible Block Storage", href: "#" },
                { name: "Flexible Object Storage", href: "#" },
              ],
            },
          ],
        },
        {
          id: "container",
          name: "Container & Orchestration Services",
          sub: [
            {
              name: "",
              items: [
                { name: "Nobus Cloud Container", href: "#" },
                { name: "Nobus Kubernetes Engine", href: "#" },
              ],
            },
          ],
        },
        {
          id: "networking",
          name: "Networking Services",
          sub: [
            {
              name: "Networks",
              items: [
                { name: "Virtual Private Cloud", href: "#" },
                { name: "FastTransit", href: "#" },
                { name: "Cloud Router", href: "#" },
                { name: "Domains and DNS", href: "#" },
              ],
            },
            {
              name: "Load Balancers",
              items: [
                { name: "PFSense", href: "#" },
                // { name: "HaProxy", href: "#" },
              ],
            },
          ],
        },
        {
          id: "backup",
          name: "Cloud Backup",
          sub: [
            {
              name: "Backup Solutions",
              items: [
                { name: "Nobus Cloud Backup", href: "#" },
                { name: "Flexible Object Storage", href: "#" },
              ],
            },
            // {
            //   name: "Disaster Recovery",
            //   items: [
            //   { name: "Cloud Backup", href: "#" },
            //   { name: "Acronis", href: "#" },
            // ],
            // }
          ],
        },
        {
          id: "security",
          name: "Cloud Security",
          sub: [
            {
              name: "Security Services",
              items: [
                { name: "Security Groups", href: "#" },
                { name: "Network Firewall", href: "#" },
              ],
            },
            {
              name: "Advanced Cyber Sercurity Service",
              items: [
                { name: "Sophos XG", href: "#" },
                { name: "Acronis Cyber Protect", href: "#" },
                { name: "Fortigate", href: "#" },
              ],
            },
          ],
        },

        {
          id: "Database",
          name: "Database Services",
          sub: [
            {
              name: "",
              items: [
                { name: "Microsoft SQL", href: "#" },
                { name: "PostgreSQL", href: "#" },
                { name: "MySQL", href: "#" },
                { name: "MongoDB", href: "#" },
              ],
            },
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
          name: "fcsl1",
          href: "#",
          imageSrc: "fcsl1.png",
          imageAlt: "",
        },
        {
          name: "fcsl2",
          href: "#",
          imageSrc: "fcsl2.png",
          imageAlt: "",
        },
        {
          name: "fbs1",
          href: "#",
          imageSrc: "fbs1.png",
          imageAlt: "",
        },
        {
          name: "fip",
          href: "#",
          imageSrc: "fip.png",
          imageAlt: "",
        },
        {
          name: "fos1",
          href: "#",
          imageSrc: "fos1.png",
          imageAlt: "",
        },
        {
          name: "fbs2",
          href: "#",
          imageSrc: "fbs2.png",
          imageAlt: "",
        },
        {
          name: "bdw",
          href: "#",
          imageSrc: "bandwidth.png",
          imageAlt: "",
        },

        {
          name: "dbs",
          href: "#",
          imageSrc: "database-s.png",
          imageAlt: "",
        },
        {
          name: "Pricing FAQs",
          text: "Pricing FAQs",
          desc: "See answers to your pricing questions",
          href: "/service-faq",
          imageSrc: "pfaq.png",
          imageAlt: "Pricing FAQs",
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
    { name: "News Blog", href: "/blog" },
    { name: "Contact Support", href: "/contact" },
    { name: "Request Demo", href: "/demo" },
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
    name: "Use Cases",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: LightBulbIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Migrate to the cloud with no doubt", href: "#" },
  {
    id: 4,
    name: "Cloud Adoption in Nigeria",
    href: "#",
  },
];

const callsToAction = [
  { name: "Request Demo", href: "#", icon: PlayIcon },
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
    href: "/product#building-cloud-operating-model",
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 30000); // 2 minutes

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-clip-content bg-gradient-to-t bg-[#000026] to-blue-900">
      {/* Mobile menu */}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden " onClose={setOpen}>
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
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col pb-12 shadow-md bg-white overflow-y-scroll scrollbar scrollbar-hide hover:scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                <div className="flex justify-between bg-clip-content bg-gradient-to-t bg-[#000026] to-blue-800 ">
                  <div className="py-4 flex pl-2">
                    <a href="/">
                      <span className="sr-only">Workflow</span>
                      <img className="h-8 w-auto" src="/logo.png" alt="" />
                    </a>
                  </div>
                  <div className="flex flex-shrink px-3 bg-slate-200 scale-50 rounded-full text-gray-500">
                    <button onClick={() => setOpen(false)}>
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-10 w-10" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="flex px-4 mt-5">
                    <a
                      href="#"
                      className="flex text-base font-semibold cursor-pointer text-gray-600 hover:text-gray-500 "
                    >
                      About Us
                    </a>
                  </div>
                  {/* Filters */}
                  <div className="block space-y-2 pt-10 pb-8 px-4">
                    {mobilefilters.map((section) => (
                      <div className="">
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-slate-200 py-1"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-my-3 flow-root ">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-base text-gray-600 hover:text-blue-600 focus:outline-none focus:bg-slate-200 focus:px-1">
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
                              <Disclosure.Panel className="pt-3">
                                <div className="space-y-3 px-2 h-[220px] overflow-y-scroll scrollbar scrollbar-hide hover:scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                                  {section.options.map((option) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center group"
                                    >
                                      <a
                                        href={option.href}
                                        className="font-medium text-base tracking-tight text-gray-700 group-hover:bg-gray-200 group-hover:px-2 rounded-full group-hover:shadow-md group-hover:scale-105"
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

                <div className="space-y-6 py-2 border-y px-4">
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

                <div className="space-y-6 py-6 text-center mx-auto max-w-lg">
                  <div className="flow-root py-2 hover:scale-105">
                    <a
                      href="https://dashboard.nobus.io"
                      className="-m-2 block button-outline text-blue-600 py-3 px-4 font-medium"
                    >
                      Sign In
                    </a>
                  </div>
                  <div className="flow-root py-2 hover:scale-105">
                    <a
                      href="/registration"
                      className="-m-2 block button bg-[#03A731] hover:bg-[#03A731]  py-3 px-4 font-medium"
                    >
                      Create Account <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative inset-0 z-40">
        <div
          id="discount"
          style={{
            display: visible ? "block lg:hidden" : "none",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          className={`bg-[#00009E]  block ${
            router.pathname !== "/" ? `hidden` : "bg-[#00009E] block"
          }`}
        >
          <div className="mx-auto max-w-7xl py-[px] px-6 xl:px-0">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center animate-marquee">
                <p className="truncate font-semibold text-sm text-white">
                  <span> 📣 30% off on migration</span>
                </p>
                <a
                  href="/registration"
                  className="animate-bounce flex-none ml-3 rounded-full text-gray-900 py-[2px] px-[8px] text-xs font-semibold bg-white shadow-sm hover:scale-105 hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  Register now <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  onClick={() => setVisible(!visible)}
                  className="-mr-1 flex rounded-md p-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Top" className="mx-auto min-w-max px-4 sm:px-6">
          <div className="">
            <div className="flex h-16 items-center justify-between">
              <button
                type="button"
                className="rounded-full text-white shadow hover:scale-110 p-2 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuAlt3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto" src="/logo.png" alt="" />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:mx-auto lg:block lg:self-stretch">
                <div className="flex space-x-6 pt-6">
                  <a
                    href="#"
                    className="flex text-sm font-semibold -my-2px  cursor-pointer text-white hover:text-white hover:shadow-lg"
                  >
                    About Us
                  </a>

                  {navigation.solutioncategories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-slate-400 rounded-md text-white focus:scale-110"
                                  : "border-transparent text-white",
                                "group relative z-10 -mb-px flex items-center outline-none border-b-4 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              <span>{category.name}</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open
                                    ? "text-white rotate-180 tracking-widest transition duration-100 transform hover:scale-125"
                                    : "text-white tracking-widest transition duration-100 transform hover:scale-125",
                                  "ml-2 h-4 w-4 group-hover:text-white"
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
                                      <div className="grid grid-cols-3 gap-y-3 gap-x-8 pr-4 text-sm h-[500px] scrollbar scrollbar-hide overflow-y-scroll hover:scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent">
                                        {category.sections.map((section) => (
                                          <div
                                            key={section.name}
                                            className="hover:bg-gray-100 p-2 group h-[180px] overflow-y-scroll scrollbar scrollbar-hide hover:scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent"
                                          >
                                            <p
                                              id={`${section.name}-heading`}
                                              className="text-xl font-medium text-gray-900 group-hover:text-gray-500"
                                            >
                                              {section.name}
                                            </p>
                                            <hr className="mt-2 border-b-2 border-blue-400 rounded-md max-w-[16px]" />

                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4 list-none pl-0"
                                            >
                                              {section.sub.map((item) => (
                                                <li
                                                  key={item.name}
                                                  className="flex-col "
                                                >
                                                  <p className="font-semibold">
                                                    {item.name}
                                                  </p>

                                                  <ul
                                                    role="list"
                                                    aria-labelledby={`${section.name}-heading`}
                                                    className="flex-col mt-6 space-y-6 sm:mt-4 sm:space-y-4 pl-0"
                                                  >
                                                    {item.items.map((item) => (
                                                      <li
                                                        key={item.name}
                                                        className="flex"
                                                      >
                                                        <a
                                                          href={item.href}
                                                          className="text-gray-800 tracking-tight hover:bg-slate-300 hover:underline group-hover:scale-105 text-base"
                                                        >
                                                          {item.name}
                                                        </a>
                                                      </li>
                                                    ))}
                                                  </ul>
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
                          <div className="relative">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-slate-400 rounded-md text-white focus:scale-110"
                                  : "border-transparent text-white hover:text-white",
                                "group relative z-10 -mb-px flex outline-none items-center border-b-4 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              <span>{category.name}</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open
                                    ? "text-white rotate-180 tracking-widest transition duration-100 transform hover:scale-125"
                                    : "text-white tracking-widest transition duration-100 transform hover:scale-125",
                                  "ml-2 h-4 w-4 group-hover:text-white"
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
                                          <p className="text-base text-gray-500 tracking-tight mx-auto max-w-[340px] text-justify">
                                            Low ongoing cost; pay-as-you-use
                                            pricing with flexible expenses, of
                                            short term or long term commitments,
                                            without requiring any complex
                                            licensing.
                                          </p>
                                        </div>
                                        <div className="h-[256px] overflow-y-scroll scrollbar scrollbar-hide hover:scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent">
                                          {pricefilters.map((section) => (
                                            <Disclosure
                                              as="div"
                                              key={section.id}
                                              className="border-b border-gray-200 py-6"
                                            >
                                              {({ open }) => (
                                                <>
                                                  <h3 className="-my-4 flow-root px-4">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white text-base text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-8">
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
                                                  <Disclosure.Panel className="pt-2 pl-4 pr-2">
                                                    <div className="space-y-2 tracking-tight pt-4 h-[100px] overflow-y-scroll scrollbar scrollbar-hide hover:scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent">
                                                      {section.options.map(
                                                        (option) => (
                                                          <div
                                                            key={option.value}
                                                            className="flex items-center group pl-4"
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
                                    </div>
                                    <div className="flex w-2/3">
                                      <div className="grid grid-cols-1 gap-y-10">
                                        <div className="flex -ml-2 space-x-5 overflow-x-scroll overflow-y-hidden scrollbar scrollbar-hide hover:scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent p-3">
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
                          <div className="relative">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-slate-400 rounded-md text-white focus:scale-110"
                                  : "border-transparent text-white hover:text-white",
                                "group relative z-10 -mb-px flex outline-none items-center border-b-4 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              <span>{category.name}</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open
                                    ? "text-white rotate-180 tracking-widest transition duration-100 transform hover:scale-125"
                                    : "text-white tracking-widest transition duration-100 transform hover:scale-125",
                                  "ml-2 h-4 w-4 group-hover:text-white"
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
                                          <p className="text-base text-gray-500 tracking-tight mx-auto max-w-[360px] text-justify">
                                            Comprehensive documentation for
                                            Nobus services, use cases,
                                            scenarios, and tasks. Browse user
                                            guides, developer guides and
                                            tutorials.
                                          </p>
                                        </div>
                                        <div className="h-[220px] overflow-y-scroll scrollbar scrollbar-hide hover:scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent">
                                          {docsfilters.map((section) => (
                                            <Disclosure
                                              as="div"
                                              key={section.id}
                                              className="border-b border-gray-200 py-6"
                                            >
                                              {({ open }) => (
                                                <>
                                                  <h3 className="-my-4 flow-root px-4">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-1 text-base text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-8">
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
                                                  <Disclosure.Panel className="pt-6 pl-4 pr-2">
                                                    <div className="space-y-2 pt-2 h-[300px] overflow-y-scroll scrollbar scrollbar-hide hover:scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent">
                                                      {section.options.map(
                                                        (option) => (
                                                          <div
                                                            key={option.value}
                                                            className="flex items-center group pl-4"
                                                          >
                                                            <a
                                                              href={option.href}
                                                              className="font-medium  tracking-tight text-base text-gray-700 group-hover:bg-gray-200 group-hover:scale-105"
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
                                    </div>
                                    <div className="flex w-1/3 space-x-5 px-4">
                                      <div className="">
                                        <div className="flow-root ">
                                          <ul
                                            role="list"
                                            className="-my-4 divide-y divide-gray-200"
                                          >
                                            {docsproducts.map((product) => (
                                              <li
                                                key={product.id}
                                                className="flex py-2 hover:bg-slate-200 px-2"
                                              >
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                  <img
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    className="h-full w-full object-cover object-center"
                                                  />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                  <a
                                                    className="hover:no-underline"
                                                    href={product.href}
                                                  >
                                                    <div>
                                                      <div className="flex text-gray-900 justify-between text-base font-medium">
                                                        <h6>{product.name}</h6>
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
                                    <div className="flex w-1/3 -ml-2 space-x-5 overflow-x-scroll scrollbar scrollbar-hide hover:scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent p-3">
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

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open
                              ? "border-slate-400 rounded-md text-white focus:scale-110"
                              : "border-transparent text-white hover:text-white",

                            "group inline-flex relative z-10 -mb-px outline-none items-center border-b-4 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                          )}
                        >
                          <span>More</span>
                          <ChevronDownIcon
                            className={classNames(
                              open
                                ? "text-white rotate-180 tracking-widest transition duration-100 transform hover:scale-125"
                                : "text-white hover:scale-125 transition duration-100 transform tracking-widest",
                              "ml-2 h-4 w-4 group-hover:text-white"
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
                          <Popover.Panel className="absolute left-1/2 z-5 mt-[15px] w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {resources.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:no-underline hover:bg-slate-200"
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
                              <div className="bg-gray-50 px-5 sm:px-8 pb-8">
                                <div>
                                  <h3 className="text-base font-medium text-gray-500">
                                    Recent Posts
                                  </h3>
                                  <ul
                                    role="list"
                                    className="mt-4 space-y-4 list-none pl-0"
                                  >
                                    {recentPosts.map((post) => (
                                      <li
                                        key={post.id}
                                        className="truncate text-sm"
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
                                    href="#"
                                    className="font-medium rounded-full py-1 px-2 bg-slate-300 text-gray-800 hover:text-gray-600"
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

              <div className="flex">
                <div className="flex items-center">
                  {/* Navigation Links */}
                  <div className="hidden lg:flex lg:ml-10 lg:space-x-4">
                    {!isSearchOpen && (
                      <>
                        <a
                          href="https://dashboard.nobus.io"
                          className="text-base cursor-pointer rounded-md border border-white px-3 py-1 text-white hover:text-white hover:shadow-lg active:scale-105 hover:scale-105"
                        >
                          Sign In
                        </a>

                        <a
                          href="/registration"
                          className="relative z-10 shadow-md rounded-md bg-[#03A731] px-3 py-[7px] text-base text-white hover:text-white hover:scale-105"
                        >
                          Create Account
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* Search */}
                <div className="flex items-center lg:ml-6">
                  {isSearchOpen ? (
                    <div className="w-full">
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="w-full text-sm rounded-sm outline-none border-none focus:outline-none focus:ring-0 focus:border-0"
                        />
                        <button
                          className=" text-white hover:text-slate-300 hover:scale-105 px-1"
                          onClick={() => setIsSearchOpen(false)}
                        >
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <a
                      href="#"
                      className="p-2 text-white hover:text-gray-300"
                      onClick={() => setIsSearchOpen(true)}
                    >
                      <span className="sr-only">Search</span>
                      <SearchIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
