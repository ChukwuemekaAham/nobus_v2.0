import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    description: "Nobus provides a high network availability.",
  },
  {
    id: "3",
    title: "Wide coverage",
    description:
      "Nobus network ensures extensive coverage over a private or public network for any application or workload several storage options including Instance Storage, Flexible Block Store (FBS), and Flexible Object storage (FOS) are available.",
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
        <div
          className="flex-col justify-center text-center"
          style={{
            backgroundImage: "url('/networking.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="py-20 px-8 lg:pt-40 sm:px-20">
            <h1 className="pb-4 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed font-bold">
              Nobus Cloud Networking
            </h1>
            <p className="text-sm sm:text-md font-semibold tracking-wide leading-relaxed pb-4">
              Network suited for various workloads
            </p>
          </div>
        </div>

        <div className="p-20">
          <p className="pb-5">
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
                    <h1 className="pb-3 text-2xl tracking-wide leading-relaxed font-semibold text-gray-800">
                      {item.title}
                    </h1>
                    <p className="text-base text-gray-700 text-justify tracking-tight leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="contain">
            <div class="py-4">
              <h3 class="font-semibold text-2xl pb-4 text-blue-600">
                Outlooks:
              </h3>

              <h5 class="font-semibold pt-2 text-xl text-blue-600">
                Nobus Data Center as a Service (DaaS)
              </h5>

              <p class="">
                Nobus Daas is an on-demand configurable pool of shared computing
                resources allocated within the nobus cloud allowing you to
                provision a logically isolated section of the Nobus Cloud.
              </p>
              <p class="">
                You have complete control over your virtual networking
                environment, including:
              </p>

              <ol class="pl-4">
                <li>
                  <p class="mt-2">selection of your own IP address range,</p>
                </li>
                <li>
                  <p class="mt-2">creation of subnets, and</p>
                </li>
                <li>
                  <p class="mt-2">
                    configuration of route tables and network gateways.
                  </p>
                </li>
              </ol>
            </div>
            <div class="py-4">
              <h5 class="font-semibold pt-2 text-xl text-blue-600">
                Nobus Virtual Private Network (VPN)
              </h5>

              <p class="">
                Securely gain entry to your networks and onsite IT
                infrastructure from any place. DaaS allows connection to public
                or private network infrastructure with an encrypted VPN (MPLS or
                Internet) connection. See{" "}
                <a class="font-semibold" href="/vpn/">
                  Nobus Cloud VPN
                </a>{" "}
                for more information.
              </p>
            </div>
            <div class="py-4">
              <h5 class="font-semibold pt-2 text-xl text-blue-600">
                Domains and DNS
              </h5>

              <p class="">
                Manage DNS for FCS Instance, Nobus Load Balancers, and non-Nobus
                resources all in the same place. See{" "}
                <a class="font-semibold" href="/documentation/dns/">
                  Domains and DNS docs
                </a>{" "}
                for more information.
              </p>
            </div>
            <div class="py-4">
              <h5 class="font-semibold pt-2 text-xl text-blue-600">
                Flexible Load Balancer (FLB)
              </h5>

              <p class="">
                Load balance between applications by ensuring scalability,
                performance, and security. See{" "}
                <a class="font-semibold" href="/flexible-load-balancing/">
                  Nobus FLB
                </a>{" "}
                for more information.
              </p>
            </div>
            <div class="py-4">
              <h5 class="font-semibold pt-2 text-xl text-blue-600">
                Floating IPs
              </h5>

              <p class="">
                Nobus Floating IPs are publicly-accessible static IP address
                that you can assign to FCS Instance and instantly remap to other
                FCS Instance in the same datacenter. See{" "}
                <a class="font-semibold" href="/documentation/floating_ips/">
                  Nobus Floating IPs
                </a>{" "}
                for more information.
              </p>
            </div>
            <div class="py-4">
              <h5 class="font-semibold pt-2 text-xl text-blue-600">
                Security Groups
              </h5>

              <p class="">
                Security groups are sets of IP filter rules that are applied to
                an instance's networking. They are project specific and project
                members can edit the default rules for their group as well as
                add new rule sets. See{" "}
                <a
                  class="font-semibold"
                  href="/documentation/fcs/userguide/security-groups/"
                >
                  Security Groups Rule and Reference
                </a>{" "}
                for more information.
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
