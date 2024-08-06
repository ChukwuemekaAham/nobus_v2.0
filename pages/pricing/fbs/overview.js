import Head from "next/head";
import { React, useState } from "react";
import classNames from "classnames";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer1";
import { PhoneIcon } from "@heroicons/react/outline";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Spinner from "../../../components/Spinner";

function index() {
  const router = useRouter();

  const categories = ["overview", "features", "price", "storage-types"];

  return (
    <section className="overflow-hidden">
      <Head>
        <title> Pricing - Nobus Flexible Block Storage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex px-5 md:px-10 py-3 justify-between shadow-md border-y border-gray-300">
          <div className="flex">
            <h1 className="pl-2 pt-2 text-lg font-medium text-gray-500 ">
              Flexible Block Storage
            </h1>
          </div>
          <div className="flex">
            <a href="/contact/support">
              <div className="flex justify-center px-2 py-2 sm:mt-0 sm:ml-4 sm:w-40 hover:bg-blue-50 hover:shadow-lg active:scale-90 rounded cursor-pointer border font-semibold text-md bg-white text-gray-500 border-gray-400">
                <PhoneIcon className="h-6" />
                <span className="inline-flex ml-2">Support</span>
              </div>
            </a>
          </div>
        </div>
        <div className="mx-10 md:mx-20">
          <div className="w-full px-2  sm:px-0">
            <Tab.Group defaultIndex={0}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <Tab.List className="flex flex-col col-span-1 my-4 md:my-16 overflow-y-scroll">
                  <h2 className="pb-5 text-2xl font-semibold text-[#232f3e]">
                    PRICING
                  </h2>
                  {categories.map((category, index) => (
                    <Tab
                      key={category}
                      as={Link}
                      href={`/pricing/fbs/${category}`}
                      className={({ selected }) =>
                        classNames(
                          "w-full py-2.5 pl-4 text-md text-left font-medium leading-5",
                          "focus:outline-none",
                          selected
                            ? "category-active text-blue-500 border-l-2 border-l-blue-500"
                            : "text-gray-800 border-l-2 border-l-gray-200 hover:text-gray-500"
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>

                <Tab.Panels className="flex flex-col col-span-1 md:col-span-2 lg:col-span-3 py-10 md:py-20 md:pl-20 h-[600px] overflow-y-scroll scrollbar-hide">
                  <Tab.Panel>
                    <section id="overview" className="mx-auto text-justify">
                      <h2 className="pb-5">
                        Block level storage volumes (1 GB to 1 TB ) for use with
                        Nobus FC instances
                      </h2>
                      <p>
                        Nobus Flexible Block Store (FBS) is user-friendly,
                        supercharged block storage service designed for use with
                        Nobus Flexible Compute Cloud (FCS) for the duo
                        productive capacity and transactional workloads at any
                        scale. Designed for expendable systems, FBS volumes are
                        repulsed within an Availability Zone (AZ) and can easily
                        scale to petabytes of data. You can choose from
                        different volume types to balance optimal price and
                        performance.
                      </p>
                      <p>
                        Storage volumes behave like raw, unformatted block
                        devices, enabling users to create a file system on top
                        of FBS volumes, or use them in any other way you would
                        use a block device (like a hard drive). Multiple volumes
                        can be added to the same instance. FBS volumes are
                        network-attached, and persist only from the life of an
                        instance.
                      </p>
                      <h6 className="py-5 text-2xl font-semibold text-[#232f3e]">
                        Benefits:
                      </h6>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Take on for any Workload
                          </h6>
                          <p>
                            FBS volumes are up and coming for your most
                            demanding workloads. SSD-backed options include a
                            volume designed for high spectacle applications and
                            a general purpose volume that offers strong
                            price/depiction for most workloads. HDD-backed
                            volumes are designed for large, sequential workloads
                            such as big data analytics engines, log processing,
                            and data keeping in reserve. For even bigger storage
                            performance per instance, use multiple volumes
                            together.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Easy to Use
                          </h6>
                          <p>
                            Nobus FBS volumes are easy to create, use, encrypt
                            and protect. Flexible Volumes capability allows you
                            to request for bigger storage, tune performance up
                            and down, and change volume types without any
                            off-base to your workloads. FBS Snapshots allow you
                            to easily take backups of your volumes for
                            geographic protection of your data.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Highly Available
                          </h6>
                          <p>
                            Nobus FBS architecture offers reliability for
                            business-critical applications. Each volume is
                            designed to protect against failures by replicating
                            within the Availability Zone (AZ), offering 99.999%
                            availability and an annual failure rate (AFR) of
                            between 0.1%-0.2%. For simple and robust backup, use
                            FBS Snapshots.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Virtualization
                          </h6>
                          <p>
                            Nobus FBS gives you to increase storage without any
                            interference to your critical workloads. Build
                            applications that needs as little as a single GB of
                            storage, or scale up to petabytes of data. Snapshots
                            can be used to restore new volumes across a region's
                            Availability Zones, provides rapid scale.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Secure
                          </h6>
                          <p>
                            FBS is created to secure for data compliance. Newly
                            created FBS volumes can be encrypted by default with
                            a single setting in your account. FBS volumes
                            support encryption of data at-transit, data in-rest,
                            and all volume backups. FBS encryption is supported
                            by all volume types, includes built-in key
                            management infrastructure, and has zero impact on
                            performance.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Cost Effectiveness
                          </h6>
                          <p>
                            FBS provides four different volume types at a given
                            price points and performance benchmarks, allowed you
                            to optimize costs and invest in a precise level of
                            storage for your application needs. Backups using
                            FBS Snapshots are incremental and save on storage
                            costs by not duplicating data.{" "}
                            <a href="#" className="hover:underline">
                              {" "}
                              Learn more{" "}
                            </a>
                          </p>
                        </div>
                      </div>

                      <h6 className="mt-10 py-5 text-2xl font-semibold text-[#232f3e]">
                        Use cases:
                      </h6>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Enterprise Applications
                          </h6>
                          <p>
                            Nobus FBS provides supercharged availability and
                            supercharged durability block storage to reliably
                            run stacked applications such as Oracle, Microsoft
                            SharePoint and SAP on NOBUS
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Relational Databases
                          </h6>
                          <p>
                            Nobus FBS scales with your capacity needs, whether
                            you backed millions of gaming customers or billions
                            of e-commerce transactions. Databases such as
                            Microsoft SQL Server, MySQL, Oracle, PostgreSQL and
                            SAP HANA are widely deployed on Nobus FBS.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Business Continuity
                          </h6>
                          <p>
                            Nobus FBS provides you to the lowest data loss and
                            recovery time and also enable regularly back up your
                            data, log files across different geographic regions.
                            Fast restore new volumes to start applications in
                            all new regions.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            NoSQL Databases
                          </h6>
                          <p>
                            Nobus FBS volumes allow consistent and low-latency
                            performance for running NoSQL databases such as
                            Cassandra, MongoDB, and CouchDB.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Big Data Analytics Engine
                          </h6>
                          <p>
                            Nobus FBS offers on-the-go data, excellent
                            performance adjustments, and the ability to remove
                            and add volumes, allowing you to adjust clusters for
                            giant data analytics engines such as Hadoop and
                            Spark.
                          </p>
                        </div>
                      </div>
                    </section>
                  </Tab.Panel>
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default index;
