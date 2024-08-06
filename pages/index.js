import Head from "next/head";
import Footer from "../components/Footer1";
import Header from "../components/Header";
import Chat from "../components/Chat";
import Workflow from "../components/Workflow";
import MigrateCard2 from "../components/MigrateCard2";
import SimpleMonthlyCalculator from "../components/SimpleMonthlyCalculator";
import Banner2 from "../components/Banner2";
import CloudBackupSection from "../components/CloudBackupSection";
import Testimonials2 from "../components/Testimonials2";
import SubscribeSection from "../components/SubscribeSection";
import Secure from "../components/Secure";
import RecentUpdates from "../components/recentUpdate";
import WhyCardSection from "../components/WhyCardSection";

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
  {
    id: "8",
    title: "World-Class Solutions",
    description:
      "Leverage our world-class solutions to improve performance and delivery for applications",
    image: "/world.png",
  },
];

const posts = [
  {
    id: 1,
    title: "Nobus Flexible Object Storage (FOS)",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Jan 16, 2024",
    datetime: "2020-03-16",
    category: { title: "Cloud Economics", href: "#" },
    author: {
      name: "Graham",
      role: "Sales",
      href: "#",
      imageUrl: "/blog1.png",
    },
  },
  {
    id: 2,
    title: "Cloud Adoption in Nigeria",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Dec 05, 2023",
    datetime: "2020-03-16",
    category: { title: "Migration", href: "#" },
    author: {
      name: "Adei",
      role: "Admin",
      href: "#",
      imageUrl: "/blog1.png",
    },
  },
  {
    id: 3,
    title: "Optimally utilizing the Nobus DNS service",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Nov 28, 2023",
    datetime: "2020-03-16",
    category: { title: "Networking", href: "#" },
    author: {
      name: "Doyin",
      role: "Technical writer",
      href: "#",
      imageUrl: "/blog1.png",
    },
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
        <Banner2 />

        <Chat />
        <Workflow />
        <Secure />
        <section className="text-center p-6 py-8 text-gray-900 mx-auto md:max-w-3xl lg:max-w-7xl -mt-24">
          <h2 className="text-3xl md:text-4xl text-center sm:text-center font-extrabold tracking-tight">
            Why <span className="text-[#0169FD]">Nobus Cloud?</span>
          </h2>
          <p className="mt-4 lg:text-lg sm:text-base mx-auto max-w-2xl text-center tracking-wide">
            See why existing and emerging businesses choose Nobus Cloud Services
          </p>
          <WhyCardSection />
        </section>

        <CloudBackupSection />
        <MigrateCard2 />
        <SimpleMonthlyCalculator />
        <Testimonials2 />
        <SubscribeSection />
        <RecentUpdates />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
