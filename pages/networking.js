import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer1";
import Image from "next/image";

const cardData = [
  {
    id: "1",
    title: "Secure",
    description:
      "Nobus networking services offers great security features in the form of data encryption, resources isolation, and private connections.",
  },
  {
    id: "2",
    title: "High network availability",
    description:
      "Nobus provides a high network availability for your applications, web services, and ensures seamless migration",
  },
  {
    id: "3",
    title: "Wide coverage",
    description:
      "Nobus network ensures extensive coverage over a private or public network for any application or workload of several storage options including Instance Storage, Flexible Block Store (FBS), and Flexible Object storage (FOS) are available.",
  },
];

function networking() {
  return (
    <section>
      <Head>
        <title> Nobus | Networking </title>
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
            <h1 className="hero-h"> Nobus Cloud Networking</h1>
            <p className="hero-p">Network suited for various workloads</p>
            <div className="flex flex-col sm:flex-row justify-center place-items-center mt-4">
              <a href="/solutions">
                <button className="my-3 rounded-md px-10 py-4 font-bold border border-white text-white shadow-md transition duration-10 hover:bg-blue-800 hover:text-white hover:shadow-xl active:scale-90 animate-pulse">
                  Get Started with Our Networking Solutions{" "}
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="p-10 md:px-20 space-y-5">
          <p>
            Nobus understands the vital role played by networks in supporting
            various kind of workloads thus, we are keen to deliver the
            networking strenght required to run any workload in the cloud
            ensuring security, availability, manageability, performance, and
            wide coverage.
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
          <div className="space-y-5 mt-5">
            <div>
              <h2 className="pb-4 text-slate-500">Outlooks:</h2>

              <h3>Nobus Data Center as a Service (DaaS)</h3>

              <p>
                Nobus Daas is an on-demand configurable pool of shared computing
                resources allocated within the nobus cloud allowing you to
                provision a logically isolated section of the Nobus Cloud.
              </p>
              <p>
                You have complete control over your virtual networking
                environment, including:
              </p>

              <ol>
                <li>
                  <p>selection of your own IP address range,</p>
                </li>
                <li>
                  <p>creation of subnets, and</p>
                </li>
                <li>
                  <p>configuration of route tables and network gateways.</p>
                </li>
              </ol>
            </div>
            <div>
              <h3>Nobus Virtual Private Network (VPN)</h3>

              <p>
                Securely gain entry to your networks and onsite IT
                infrastructure from any place. DaaS allows connection to public
                or private network infrastructure with an encrypted VPN (MPLS or
                Internet) connection. See <a href="#">Nobus Cloud VPN</a> for
                more information.
              </p>
            </div>
            <div>
              <h3>Domains and DNS</h3>

              <p>
                Manage DNS for FCS Instance, Nobus Load Balancers, and non-Nobus
                resources all in the same place. See{" "}
                <a href="#">Domains and DNS docs</a> for more information.
              </p>
            </div>
            <div>
              <h3>Flexible Load Balancer (FLB)</h3>

              <p>
                Load balance between applications by ensuring scalability,
                performance, and security. See <a href="#">Nobus FLB</a> for
                more information.
              </p>
            </div>
            <div>
              <h3>Floating IPs</h3>

              <p>
                Nobus Floating IPs are publicly-accessible static IP address
                that you can assign to FCS Instance and instantly remap to other
                FCS Instance in the same datacenter. See{" "}
                <a href="#">Nobus Floating IPs</a> for more information.
              </p>
            </div>
            <div>
              <h3>Security Groups</h3>

              <p>
                Security groups are sets of IP filter rules that are applied to
                an instance's networking. They are project specific and project
                members can edit the default rules for their group as well as
                add new rule sets. See{" "}
                <a href="#">Security Groups Rule and Reference</a> for more
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default networking;
