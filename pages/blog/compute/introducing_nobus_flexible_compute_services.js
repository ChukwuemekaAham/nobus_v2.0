import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ClockIcon } from "@heroicons/react/outline";

const otherPost = [
  {
    id: 1,
    tagname: "CLOUD ADOPTION",
    name: "Cloud Adoption in Nigeria",
    date: "January 13, 2021",
    href: "/blog/data-center",
    img: "/blog2.png",
    imgalt: "",
    desc: "Nobus understands the integral part played by Data centers. The security and reliability of our data center and its information...",
    learn: "Continue to page",
  },
  {
    id: 2,
    tagname: "CLOUD MIGRATION",
    name: "Migrate to the cloud with no doubts",
    date: "December 27, 2021",
    href: "/blog/networking",
    img: "/blog1.png",
    imgalt: "",
    desc: "Nobus understands the vital role played by networks in supporting various kind of workloads thus, we are keen to deliver the...",
    learn: "Continue to page",
  },

  {
    id: 4,
    tagname: "INSTANCE TYPES",
    name: "Standard Instance types (Linux and Windows)",
    date: "September 17, 2020",
    href: "/blog/data-center",
    img: "/blog1.png",
    imgalt: "",
    desc: "Nobus understands the integral part played by Data centers. The security and reliability of our data center and its information...",
    learn: "Continue to page",
  },
  {
    id: 5,
    tagname: "FBS",
    name: "Introducing Nobus Flexible Block Storage",
    date: "September 17, 2020",
    href: "/blog/storage",
    img: "/blog1.png",
    imgalt: "",
    desc: "Cloud storage plays an important role in cloud computing since it is more reliable, scalable and secure than traditional...",
    learn: "Continue to page",
  },
  {
    id: 6,
    tagname: "SECURITY",
    name: "Data Center Security",
    date: "September 13, 2020",
    href: "/blog/data-center",
    img: "/blog1.png",
    imgalt: "",
    desc: "Nobus understands the integral part played by Data centers. The security and reliability of our data center and its information...",
    learn: "Continue to page",
  },
  {
    id: 7,
    tagname: "FOS",
    name: "Introducing Nobus Flexible Object Storage",
    date: "September 13, 2020",
    href: "/blog/data-center",
    img: "/blog1.png",
    imgalt: "",
    desc: "Nobus understands the integral part played by Data centers. The security and reliability of our data center and its information...",
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

function Flexible_Compute_Services() {
  return (
    <section>
      <Head>
        <title>
          {" "}
          Nobus | Compute Blog - introducing_nobus_flexible_compute_services
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div class="mt-0 lg:my-10">
        <div class="lg:grid lg:grid-cols-3 lg:gap-6 lg:mt-10">
          <div class="mb-5 md:col-span-2 md:mt-0 ">
            <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:mx-10">
              <div
                className="flex-col"
                style={{
                  backgroundImage: "url('/backup.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="py-20 px-8 lg:pt-40 sm:px-20">
                  <h1 className="pb-4 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed font-semibold text-white">
                    Introducing Nobus Flexible Compute Services
                  </h1>
                </div>
              </div>

              <p className="px-10 md:px-20 lg:px-0 text-[15px] text-justify tracking-wide leading-relaxed py-5 text-gray-800">
                Lorem ipsum dolor sit amet consectetur. Non commodo nec
                convallis amet nec sed aliquam. Commodo mi ullamcorper viverra
                est volutpat. Pellentesque pellentesque nisi est dolor tempus
                quis suspendisse. Nunc dui placerat quis et. Ac facilisis eu
                donec purus luctus. Laoreet tristique vehicula feugiat varius at
                auctor netus. A ac bibendum sit metus tempus ut mi malesuada
                eget. Varius nunc felis nunc ultricies ipsum montes suspendisse
                elementum consectetur. Magna eu adipiscing scelerisque egestas
                quisque a viverra. Tortor commodo sed tempus amet libero
                iaculis. At scelerisque vel pellentesque arcu curabitur
                sollicitudin vitae euismod. Eget ac eget ultricies at id a.
                Vulputate consequat nulla nibh habitant. Egestas integer viverra
                amet tristique. Phasellus vel egestas nisi nec velit ut urna.
                Auctor est magnis nisl risus ornare lorem ac. Vel magna massa
                interdum tellus augue non vel. Netus nunc amet gravida ut arcu
                odio sodales adipiscing viverra. Adipiscing et cursus et
                pellentesque odio. Erat accumsan pretium aliquet enim
                suspendisse vitae. Vulputate mauris suspendisse ut fermentum
                libero leo elit mi sit. Auctor vel non pretium cum. Tincidunt
                tincidunt cras semper ac suspendisse consequat faucibus. Elit
                lectus at risus vitae venenatis est nam orci mi. Sollicitudin
                phasellus sit ut tortor mauris. Convallis sit amet ut eros
                tincidunt porttitor tempus natoque. Ac curabitur suspendisse
                elit proin magna. Et nulla senectus tincidunt nibh. Ornare
                turpis elementum faucibus nunc imperdiet massa mi. Diam
                vulputate at tellus facilisi. Est nulla proin ipsum viverra
                integer tellus. Est ipsum purus viverra faucibus sed faucibus
                mauris. Massa quisque quisque sodales faucibus. Vitae hendrerit
                hendrerit viverra pretium. Duis velit venenatis nibh senectus
                imperdiet eget. Tellus mi a eu sociis elementum. Ac amet
                habitant magna sapien ut quam volutpat quam nibh. Mauris tortor
                vel ut sit feugiat netus. Donec cras tristique neque porta.
                Malesuada egestas senectus morbi neque suspendisse tristique ac
                mauris nisl. Quis vel convallis consectetur faucibus arcu.
                Ullamcorper tempus feugiat egestas pulvinar est venenatis proin
                mi. Magna egestas risus nullam mi non imperdiet sit ut id. Amet
                at sollicitudin senectus arcu nulla cursus libero elit. A
                molestie nec volutpat adipiscing condimentum vitae. Mollis in in
                elementum amet et. Pellentesque mi morbi feugiat pulvinar
                auctor. Viverra adipiscing ultricies dictumst dignissim metus
                phasellus. Neque dictum placerat faucibus sit.
              </p>
            </div>
          </div>
          <div class="md:col-span-1">
            <div className="lg:mx-10 px-10 md:px-20 lg:px-0 pb-8">
              <div>
                <h5 className="text-left tracking-wide font-semibold lg:mt-0">
                  Other Posts
                </h5>
                <hr className="max-w-[50px] my-2 border border-red-400" />
                <div className="flex-col mt-10 space-x-2">
                  <div className="flow-root ">
                    <ul
                      role="grid"
                      className="-my-6 grid grid-cols-1 gap-y-6 gap-x-8 "
                    >
                      {otherPost.map((feature) => (
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
                <h5 className="text-left tracking-wide font-semibold">Tags</h5>
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

        <div
          className="p-10 md:p-20"
          style={{
            backgroundImage: "url('/backup.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col lg:flex-row mx-auto">
            <div className="block lg:hidden pb-10">
              <div className="flex-col">
                <img src="/backup2.png" />
              </div>
            </div>
            <div className="text-left lg:w-1/2 md:pr-20 pt-0 text-white">
              <h1 className="text-3xl sm:text-4xl font-semibold">
                Start deploying your workload now
              </h1>

              <p className="my-5 text-md tracking-wide leading-relaxed max-w-7xl lg:mx-auto lg:pt-5 lg:pb-10">
                Protect your mission critical Systems from Servers to desktops
                or Laptops with Nobus Cloud Backup (NCB). With NCB, Our cloud
                customers can now provide an extra layer of backup & Cyber
                security for their applications at a fractional monthly cost.
              </p>
              <a href="/blog">
                <button className="w-full sm:w-40 px-4 py-3 rounded hover:shadow active:scale-90 cursor-pointer text-md font-semibold bg-blue-600 text-white border-2 border-blue-600">
                  Get Started
                </button>
              </a>
            </div>

            <div className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0">
              <div className="flex-col">
                <img src="/backup2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Flexible_Compute_Services;
