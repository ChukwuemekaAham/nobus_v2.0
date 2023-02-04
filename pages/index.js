import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CookieConsent from "../components/CookieConsent";
import Chat from "../components/Chat";
import Workflow from "../components/Workflow";
import MediumCard from "../components/MediumCard";
import MigrateCard from "../components/MigrateCard";
import Flexible from "../components/Flexible";
import CloudBackup from "../components/CloudBackup";
import Subscribe from "../components/Subscribe";

const features = [
  {
    name: "Migrate to the cloud with no doubts",
    time: "June 15, 2020",
    img: "/blog1.png",
    href: "/blog",
  },
  {
    name: "Introducing Nobus Flexible Compute Services (FCS)",
    time: "July 15, 2020",
    img: "/blog1.png",
    href: "/blog",
  },

  {
    name: "Cloud Adoption in Nigeria",
    time: "August 29, 2020",
    img: "/blog1.png",
    href: "/blog",
  },
  {
    name: "Introducing Nobus Flexible Object Storage (FOS)",
    time: "September 13, 2020",
    img: "/blog1.png",
    href: "/blog",
  },
];

const cardData = [
  {
    id: "6",
    title: "Tier III Data Center",
    description: "Tier III Data center facility, built with global standards",
    image: "/tier3.png",
  },
  {
    id: "1",
    title: "Low On-going Cost",
    description:
      "Pay-as-you-use pricing with flexible expenses, and short or long term commitments",
    image: "/low.png",
  },
  {
    id: "2",
    title: "Speed & Agility",
    description:
      "Build your instances today with our SSD backed FBS Volume. Develop and deploy applications faster ",
    image: "/speed.png",
  },
  {
    id: "3",
    title: "Secure Platform",
    description:
      "Take advantage of the multiple layers of security, built into the Nobus Cloud Platform",
    image: "/secure.png",
  },
  {
    id: "4",
    title: "Project Focused",
    description:
      "Leverage our team of engineers to design and manage you resources, so you can focus on your core business and operation",
    image: "/project.png",
  },
  {
    id: "5",
    title: "Flexible Capacity",
    description:
      "Focus on projects. Shift resources away from data center investments & operations, and move the to innovative new projects",
    image: "/flexible.png",
  },
  {
    id: "7",
    title: "24/7 Support",
    description:
      "Customers' success and business productivity is our priority - whether for on-site assistance, technical, or remote support",
    image: "/support.png",
  },
];

const Home = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <Head>
        <title>Nobus | Cloud Computing Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Banner />
        <CookieConsent />

        <Chat />
        <Workflow />

        <section className="text-center p-20 text-gray-900">
          <h2 className="text-3xl md:text-4xl text-center sm:text-center font-semibold tracking-wider">
            Why Nobus?
          </h2>
          <p className="mt-4 text-base lg:text-xl font-small tracking-wider leading-relaxed">
            Why existing and emerging businesses choose Nobus
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
            {cardData?.map((item) => (
              <MediumCard
                key={item.id}
                img={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
        <MigrateCard />

        <CloudBackup />
        <Flexible />

        <Subscribe />

        <div className="bg-white p-20 lg:py-20 lg:px-10 xl:p-20">
          <div className="flex flex-col lg:flex-row mx-auto">
            <div className="text-left lg:w-1/2 md:pr-20 pt-0">
              <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Get recent updates in Cloud computing
              </h1>
              <p className="my-5 lg:mx-auto xl:pt-5 xl:pb-10 text-md text-justify tracking-wide leading-relaxed max-w-7xl text-gray-600 ">
                Keep up with Nobus Cloud Blogs for new ideas, the latest news,
                and discussion around cloud computing from industry experts.
              </p>
              <a href="/blog">
                <button className="w-full sm:w-40 px-4 py-3 rounded hover:shadow active:scale-90 cursor-pointer text-md font-semibold bg-blue-600 text-white border-2 border-blue-600">
                  Our Blog
                </button>
              </a>
            </div>

            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <div className="flex-col">
                <h5 className="text-left tracking-wide font-semibold lg:mt-0">
                  Recent Posts
                </h5>
                <hr className="max-w-[50px] my-2 border border-red-400" />
              </div>
              <div className="flex-col">
                <div className="flex-col mt-10 space-x-5">
                  <div className="flow-root ">
                    <ul
                      role="grid"
                      className="-my-6 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 "
                    >
                      {features.map((feature) => (
                        <li
                          key={feature.id}
                          className="flex py-3 hover:bg-gray-100 border-b border-gray-200"
                        >
                          <div className="h-18 w-18 lg:h-15 lg:w-15 flex-shrink-0 overflow-hidden rounded-md ">
                            <img
                              src={feature.img}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col group">
                            <a href={feature.href} className="cursor-pointer">
                              <div className="flex lg:text-sm xl:text-base font-medium text-gray-900 group-hover:underline">
                                <h3>{feature.name}</h3>
                              </div>

                              <div className="flex flex-1 items-end text-sm">
                                <p className="text-gray-500">{feature.time}</p>
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
      </main>
      <Footer />
    </div>
  );
};

export default Home;
