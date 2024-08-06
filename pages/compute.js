import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer1";
import Image from "next/image";

const cardData = [
  {
    id: "1",
    title: "Adaptive Compute Service",
    description:
      "Nobus provides an adaptive infrastructure for running workloads requiring high availability. We offer options for public, private and hybrid cloud on Nobus to our clients depending on the use case.",
  },
  {
    id: "2",
    title: "Broad Platform",
    description:
      "Nobus provides a wide selection of functioning services. There are options of Linux and Windows operating systems, with a broad choice of instances for different workloads with dedicated servers, attached storage, and improved networking functions.",
  },
  {
    id: "3",
    title: "Utmost security",
    description:
      "Nobus offers security on our services. We offer encryption across several Nobus services to ensure security of the platform and customer instances. Our system provides enhanced security by continuous hardware, firmware protection and monitoring, with up to date software patches.",
  },
  {
    id: "4",
    title: "Cost management tools",
    description:
      "As your usage grows, you can use Nobus dashboard to monitor utilization on critical resources to help increase performance of instances and workloads on Nobus platform. Users can leverage our high performance compute services to deploy applications and scale them when needed while keeping an eye on cost efficiency.",
  },
  {
    id: "5",
    title: "Improved network and storage",
    description:
      "Nobus network deliver customer applications and content over a private or public network anytime depending on use case, with compute instances that deliver up to 10 Gbps of networking throughput. Nobus provide customers with a great deal of storage options including Instance Storage, Flexible Block Storage (FBS), and Flexible Object storage (FOS).",
  },
];

function compute() {
  return (
    <section className="overflow-hidden">
      <Head>
        <title> Nobus | Compute </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="top-0 grid gap-y-10">
        <div className="lg:[500px] xl:[600px] relative h-[300px] sm:h-[400px] 2xl:h-[700px]">
          <Image
            src="/herobg.png"
            layout="fill"
            objectFit="container"
            objectPosition="left"
            className="animate-fadeIn"
          />
          <div className="absolute top-1/2 w-full text-center transform -translate-y-1/2">
            <h1 className="hero-h">Nobus Cloud Compute</h1>
            <p className="hero-p">
              Virtual Machine Hosting and Compute Resources.
            </p>
            <div className="flex flex-col sm:flex-row justify-center place-items-center mt-4">
              <a href="/solutions">
                <button className="my-3 rounded-md px-10 py-4 font-bold border border-white text-white shadow-md transition duration-10 hover:bg-blue-800 hover:text-white hover:shadow-xl active:scale-90 animate-pulse">
                  Get Started with Compute Solutions{" "}
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="p-10 md:px-20 space-y-5">
          <p>
            Nobus offers standard compute services that allows you to develop,
            deploy, run, and scale your applications and workloads in a secure,
            powerful, and progressive compute cloud.
          </p>

          <h3>Nobus Compute as a Choice</h3>

          <p>
            You are safe with Nobus, as we continue to facilitate speed and
            efficiency on our platform. We progressively try to make our
            plarform support any workload and business need.
          </p>
          <div className="pt-10">
            <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
              {cardData?.map((item) => (
                <div className="p-5 bg-gray-100 flex flex-col space-x-4 text-left shadow-3xl border group">
                  <div className="py-5">
                    <h4>{item.title}</h4>
                    <p className="text-base text-gray-700 text-justify tracking-tight leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="px-20 py-10"
                 style={{
                    backgroundImage: "url('/backup.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                 
                  }}
            >
            
            <div className="flex flex-col lg:flex-row mx-auto ">

                <div className="text-left lg:w-1/2 md:pr-20 pt-0 md:py-5 text-white">
                
                <h1 className="text-3xl sm:text-4xl font-semibold">
                Nobus Simple monthly calculator
                </h1>
              
                <p className="my-2 text-lg tracking-wide leading-relaxed max-w-7xl lg:mx-auto lg:pt-5 lg:pb-10">
                You can estimate your monthly bill (individual and multiple prices) using NCS Simple Monthly Calculator.
                </p>
               
                <div className="mt-10 pb-5 flex flex-col sm:flex-row md:justify-start">
                    <a href="/simple_monthly_calculator">
                    <button className="w-full mt-2 sm:mt-0 sm:ml-2 sm:w-40 px-4 py-3 font-semibold text-md text-white rounded hover:shadow active:scale-90 cursor-pointer border border-white">
                    Calculate Cost
                    </button>

                    </a>
                    
                </div>
                
                </div>
                
                <div className="lg:w-1/2 mt-10 lg:mt-0">
                <div className="flex-col">
                
                    <img src="/analytics.png" />
        
                </div>
                    
                </div>
            </div>
        </div> */}
      </div>
      <Footer />
    </section>
  );
}

export default compute;
