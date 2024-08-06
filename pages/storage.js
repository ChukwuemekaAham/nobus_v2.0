import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer1";
import Image from "next/image";

function storage() {
  return (
    <section className="overflow-hidden">
      <Head>
        <title> Nobus | Storage </title>
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
            <h1 className="hero-h">Nobus Cloud Storage</h1>
            <p className="hero-p">
              Scalable, Dependable, and Secure Storage Solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center place-items-center mt-4">
              <a href="/solutions">
                <button className="my-3 rounded-md px-10 py-4 font-bold border border-white text-white shadow-md transition duration-10 hover:bg-blue-800 hover:text-white hover:shadow-xl active:scale-90 animate-pulse">
                  Get Started with Storage Solutions{" "}
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="p-10 md:px-20">
          <p className="pb-5">
            Cloud storage plays an important role in cloud computing since it is
            more reliable, scalable, secure than traditional storage systems.
            Cloud storage services is enabled to serve the needs of application
            workload and archiving.
          </p>

          <h3>Cloud Storage Service Details</h3>

          <p className="py-2">
            You are safe with Nobus, as we continue to facilitate speed and
            efficiency on our platform. We progressively try to make our
            plarform support any workload and business need.
          </p>
          <div className="space-y-5 mt-5">
            <div>
              <h2>Nobus Flexible Object Storage (FOS)</h2>
              <h6>
                The Nobus flexible Object Storage offers cloud storage, so that
                you can store and retrieve lots of data easily.
              </h6>
              <p>
                It is optimized for durability, availability, and concurrency
                across entire data sets. Nobus flexible object storage is ideal
                for storing unstructured data that can grow without bound.
              </p>
              <p>
                Organizations can use this to store lots of data efficiently,
                safely, and cheaply.
              </p>
              <p>
                For more information visit the{" "}
                <a href="/documentation/fos/" target="_blank">
                  {" "}
                  Nobus FOS page
                </a>
                .
              </p>
            </div>
            <div className="py-2">
              <h2>Nobus Flexible Block Storage (FBS)</h2>
              <h6>
                Store and process block data on persistent volumes for Nobus FCS
                instances
              </h6>
              <p>
                Nobus FBS provides highly available, consistent, low-latency
                block storage for Nobus FCS. It helps you tune applications with
                the right storage capacity, performance and cost. FBS is
                designed for workloads that require persistent storage
                accessible by single FCS instance. Typical use cases include
                relational and NoSQL databases (like Microsoft SQL Server and
                MySQL or Cassandra and MongoDB), Big Data analytics engines, and
                data warehousing applications.
              </p>
              <p>
                For more information visit the{" "}
                <a href="/documentation/fbs/" target="_blank">
                  Nobus FBS page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default storage;
