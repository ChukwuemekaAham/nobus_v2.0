import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Chat from "../components/Chat";
import Workflow from "../components/Workflow";
import MediumCard from "../components/MediumCard";
import MigrateCard from "../components/MigrateCard";
import Smc from "../components/Smc";
import CloudBackup from "../components/CloudBackup";
import Subscribe2 from "../components/Subscribe2";
import Testimonials from "../components/Testimonials";

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
    title: 'Nobus Flexible Object Storage (FOS)',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Jan 16, 2024',
    datetime: '2020-03-16',
    category: { title: 'Cloud Economics', href: '#' },
    author: {
      name: 'Graham',
      role: 'Sales',
      href: '#',
      imageUrl:
        '/blog1.png',
    },
  },
  {
    id: 2,
    title: 'Cloud Adoption in Nigeria',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Dec 05, 2023',
    datetime: '2020-03-16',
    category: { title: 'Migration', href: '#' },
    author: {
      name: 'Adei',
      role: 'Admin',
      href: '#',
      imageUrl:
        '/blog1.png',
    },
  },
  {
    id: 3,
    title: 'Optimally utilizing the Nobus DNS service',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Nov 28, 2023',
    datetime: '2020-03-16',
    category: { title: 'Networking', href: '#' },
    author: {
      name: 'Doyin',
      role: 'Technical writer',
      href: '#',
      imageUrl:
        '/blog1.png',
    },
  },
]

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
      
        <Chat />
        <Workflow />

        <section className="text-center p-6 py-24 text-gray-900 mx-auto md:max-w-3xl lg:max-w-7xl">
          <h2 className="text-3xl md:text-4xl text-center sm:text-center font-semibold tracking-tight">
            Why Nobus?
          </h2>
          <p className="mt-4 text-base mx-auto max-w-lg text-justify tracking-wide">
            Why existing and emerging businesses choose Nobus Cloud Services
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
        <Smc />
        <Testimonials />
        <Subscribe2 />
        
        <div className="bg-white py-24 sm:py-32" style={{
          backgroundImage: "url('/spiral.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto text-center lg:text-left max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl"> Get recent updates</h2>
              <p className="text-base text-justify mt-4 lg:max-w-lg font-small tracking-wide text-gray-900 pb-5">
              Keep up with Nobus Cloud Blogs for new ideas, the latest news,
              and discussion around cloud computing from industry experts.
              </p>
              <a
                href="/blog"
                className="mt-10 mx-auto lg:mx-0 max-w-xs cursor-pointer block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                More news blog
              </a>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    
                    <a
                      href={post.category.href}
                      className="relative z-10 shadow-sm rounded-full bg-blue-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href} className="text-gray-900">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href} className="text-gray-900">
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p>
                      <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                      </time>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;
