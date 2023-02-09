import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowRightIcon, UserIcon, ClockIcon } from "@heroicons/react/outline";

const blogCard = [
  {
    id: 1,
    tagname: "CLOUD ADOPTION",
    name: "Cloud Adoption in Nigeria",
    date: "January 13, 2021",
    href: "/blog/data-center",
    img: "storage.png",
    imgalt: "Front of men's Basic Tee in black.",
    desc: "Nobus understands the integral part played by Data centers. The security and reliability of our data center and its information...",
    learn: "Continue to page",
  },
  {
    id: 2,
    tagname: "CLOUD MIGRATION",
    name: "Migrate to the cloud with no doubts",
    date: "December 27, 2021",
    href: "/blog/networking",
    img: "network.png",
    imgalt: "Front of men's Basic Tee in black.",
    desc: "Nobus understands the vital role played by networks in supporting various kind of workloads thus, we are keen to deliver the...",
    learn: "Continue to page",
  },

  {
    id: 3,
    tagname: "FCS",
    name: "Introducing Nobus Flexible Compute Services",
    date: "September 17, 2020",
    href: "/blog/compute/introducing_nobus_flexible_compute_services",
    img: "/compute.png",
    imgalt: "Front of men's Basic Tee in black.",
    desc: "Nobus offers standard compute services that allows you to develop, deploy, run, and scale your applications and...",
    learn: "Continue to page",
  },
  {
    id: 4,
    tagname: "INSTANCE TYPES",
    name: "Standard Instance types (Linux and Windows)",
    date: "September 17, 2020",
    href: "/blog/data-center",
    img: "storage.png",
    imgalt: "Front of men's Basic Tee in black.",
    desc: "Nobus understands the integral part played by Data centers. The security and reliability of our data center and its information...",
    learn: "Continue to page",
  },
  {
    id: 5,
    tagname: "FBS",
    name: "Introducing Nobus Flexible Block Storage",
    date: "September 17, 2020",
    href: "/blog/storage",
    img: "/storage.png",
    imgalt: "Front of men's Basic Tee in black.",
    desc: "Cloud storage plays an important role in cloud computing since it is more reliable, scalable and secure than traditional...",
    learn: "Continue to page",
  },
  {
    id: 6,
    tagname: "SECURITY",
    name: "Data Center Security",
    date: "September 13, 2020",
    href: "/blog/data-center",
    img: "storage.png",
    imgalt: "Front of men's Basic Tee in black.",
    desc: "Nobus understands the integral part played by Data centers. The security and reliability of our data center and its information...",
    learn: "Continue to page",
  },
  {
    id: 7,
    tagname: "FOS",
    name: "Introducing Nobus Flexible Object Storage",
    date: "September 13, 2020",
    href: "/blog/data-center",
    img: "storage.png",
    imgalt: "Front of men's Basic Tee in black.",
    desc: "Nobus understands the integral part played by Data centers. The security and reliability of our data center and its information...",
    learn: "Continue to page",
  },
];

const features = [
  {
    id: 1,
    tagname: "CLOUD ADOPTION",
    name: "Cloud Adoption in Nigeria",
    date: "January 13, 2021",
    href: "/blog/data-center",
    img: "blog2.png",
    imgalt: "Front of men's Basic Tee in black.",
    desc: "Nobus understands the integral part played by Data centers. The security and reliability of our data center and its information...",
    learn: "Continue to page",
  },
  {
    id: 2,
    tagname: "CLOUD MIGRATION",
    name: "Migrate to the cloud with no doubts",
    date: "December 27, 2021",
    href: "/blog/networking",
    img: "blog1.png",
    imgalt: "Front of men's Basic Tee in black.",
    desc: "Nobus understands the vital role played by networks in supporting various kind of workloads thus, we are keen to deliver the...",
    learn: "Continue to page",
  },
];

const Tags = [
  {
    name: "Cloud",
    href: "#",
  },
  {
    name: "Compute",
    href: "#",
  },
  {
    name: "Storage",
    href: "#",
  },
  {
    name: "Networking",
    href: "#",
  },
  {
    name: "Security",
    href: "#",
  },
  {
    name: "VMs",
    href: "#",
  },
];

function index() {
  return (
    <section>
      <Head>
        <title> Nobus | News Blog </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="top-0 grid gap-y-10">
        <div
          className="flex-col px-20 text-left"
          style={{
            backgroundImage: "url('/newsblog.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="py-20 lg:pt-40 text-black">
            <h1 className="pb-2 text-3xl md:text-4xl lg:text-5xl tracking-wide leading-relaxed font-bold">
              Nobus Blog
            </h1>
            <p className="text-sm sm:text-md font-semibold tracking-wide leading-relaxed pb-4">
              Get all the latest news about Nobus Cloud Services
            </p>
          </div>
        </div>

        <div class="">
          <div class="md:grid md:grid-cols-3 md:gap-6 my-10">
            <div class="mt-5 md:col-span-2 md:mt-0 ">
              <div className="grid grid-cols-1 gap-y-10 gap-x-8 mx-10 sm:mx-20">
                {blogCard.map((blog) => (
                  <div
                    key={blog.id}
                    className="group relative bg-white border shadow hover:scale-102 hover:shadow-xl"
                  >
                    <div className="min-h-36 h-96 aspect-w-1 aspect-h-1 w-full  overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                      <img
                        src={blog.img}
                        alt={blog.imgalt}
                        className="object-cover object-center lg:h-full lg:w-full"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="py-5 px-4">
                      <div className="flex text-sm py-3 font-semibold text-gray-400">
                        <hr className="w-full flex:inline my-2 mr-4" />
                        <span className="flex:inline">{blog.tagname}</span>
                      </div>
                      <h3 className="text-xl text-gray-900 font-semibold lg:text-3xl">
                        {blog.name}
                      </h3>
                      <span className="flex py-2">
                        <ClockIcon className="h-5 text-sm font-medium bg-gray-200 rounded-full p-1 mr-1" />
                        <p className="font-md text-sm">{blog.date}</p>
                      </span>
                      <p className="text-[15px] tracking-wide leading-relaxed py-5 text-gray-800">
                        {blog.desc}
                      </p>
                    </div>

                    <div className="flex justify-between border-t px-4 py-2 group-hover:bg-gray-100 rounded-b-xl">
                      <div>
                        <h3 className="font-semibold text-sm text-gray-700">
                          <a href={blog.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {blog.learn}
                          </a>
                        </h3>
                      </div>
                      <ArrowRightIcon className="h-5 text-sm font-medium bg-gray-200 group-hover:bg-gray-600 group-hover:text-white rounded-full p-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="md:col-span-1">
              <div className="mx-10 sm:mx-20 md:mx-2 pb-8">
                <div>
                  <h5 className="text-left tracking-wide font-semibold lg:mt-0">
                    Recent Posts
                  </h5>
                  <hr className="max-w-[50px] my-2 border border-red-400" />
                  <div className="flex-col mt-10 space-x-2">
                    <div className="flow-root ">
                      <ul
                        role="grid"
                        className="-my-6 grid grid-cols-1 gap-y-6 gap-x-8 "
                      >
                        {features.map((feature) => (
                          <li
                            key={feature.id}
                            className="flex py-3 hover:bg-gray-100 border-b border-gray-200"
                          >
                            <div className="h-18 w-18 flex-shrink-0 overflow-hidden rounded-md ">
                              <img
                                src={feature.img}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col group">
                              <a href={feature.href} className="cursor-pointer">
                                <div className="flex text-base font-medium text-gray-900 group-hover:underline">
                                  <h3>{feature.name}</h3>
                                </div>

                                <div className="flex flex-1 text-sm text-gray-500">
                                  <ClockIcon className="h-5 text-sm font-md bg-gray-200 rounded-full p-1 mr-1" />
                                  <p className="font-md">{feature.date}</p>
                                </div>
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-20">
                  <h5 className="text-left tracking-wide font-semibold">
                    Tags
                  </h5>
                  <hr className="max-w-[25px] my-2 border border-red-400" />
                  <div className="flex-col mt-5 space-x-3">
                    <div className="flow-root">
                      <ul
                        role="grid"
                        className="grid grid-cols-3 gap-y-2 gap-x-2"
                      >
                        {Tags.map((tag) => (
                          <li key={tag.id} className="flex">
                            <div className="flex flex-1 flex-col group">
                              <a href={tag.href} className="cursor-pointer">
                                <div className="text-sm p-2 bg-gray-300 text-white font-medium text-gray-900 group-hover:underline">
                                  <h3>{tag.name}</h3>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default index;
