import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function storage() {
  return (
    <section>
      <Head>
        <title> Nobus | Storage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="top-0 grid gap-y-10">
        <div
          className="flex-col justify-center text-center"
          style={{
            backgroundImage: "url('/stg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="py-20 px-8 lg:pt-40 sm:px-20">
            <h1 className="pb-4 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed font-bold">
              Nobus Cloud Storage
            </h1>
            <p className="text-sm sm:text-md font-semibold tracking-wide leading-relaxed pb-4">
              Scalable, Dependable, and Secure.
            </p>
          </div>
        </div>

        <div className="p-20">
          <p className="pb-5">
            Cloud storage plays an important role in cloud computing since it is
            more reliable, scalable, secure than traditional storage systems.
            Cloud storage services is enabled to serve the needs of application
            workload and archiving.
          </p>

          <h4 className="font-semibold text-2xl">
            Cloud Storage Service Details
          </h4>

          <p className="py-2">
            You are safe with Nobus, as we continue to facilitate speed and
            efficiency on our platform. We progressively try to make our
            plarform support any workload and business need.
          </p>
          <div className="py-5">
            <div className="py-2">
              <h1 className="pb-3 text-2xl tracking-wide leading-relaxed font-semibold text-gray-800">
                Nobus Flexible Object Storage (FOS)
              </h1>
              <p className="text-base text-gray-700 text-justify tracking-tight leading-relaxed">
                The Nobus flexible Object Storage offers cloud storage, so that
                you can store and retrieve lots of data easily.
              </p>
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
                  Nobus FOS page.{" "}
                </a>
              </p>
            </div>
            <div className="py-2">
              <h1 className="pb-3 text-2xl tracking-wide leading-relaxed font-semibold text-gray-800">
                Nobus Flexible Block Store (FBS)
              </h1>
              <p className="text-base text-gray-700 text-justify tracking-tight leading-relaxed">
                Store and process block data on persistent volumes for Nobus FCS
                instances
              </p>
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
                  Nobus FBS page.
                </a>
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
