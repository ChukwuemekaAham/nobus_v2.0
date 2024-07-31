import Head from "next/head";
import { React, useState } from "react";
import classNames from "classnames";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer1";
import { PhoneIcon } from "@heroicons/react/outline";
import Spinner from "../../../components/Spinner";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

function index() {
  const router = useRouter();

  const categories = ["overview", "features", "price", "instance-types"];

  return (
    <section>
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
            <Tab.Group defaultIndex={3}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <Tab.List className="flex flex-col col-span-1 my-16 overflow-y-scroll">
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
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                  <Tab.Panel data-headlessui-state="selected">
                    <section
                      id="storage-types"
                      className="mx-auto text-justify"
                    >
                      <h6 className="py-5 text-3xl font-semibold text-[#232f3e]">
                        Nobus FBS Volume Types
                      </h6>

                      <p>
                        The following table shows use cases and performance
                        characteristics of current generation FBS volumes:
                      </p>

                      <div className="overflow-x-auto my-5">
                        <table className="table-auto w-full text-left border-collapse">
                          <thead>
                            <tr>
                              <th className="px-4 py-2 bg-gray-200"></th>
                              <th colspan="2" className="px-4 py-2 bg-gray-200">
                                Solid State Drives (SSD)
                              </th>
                              <th colspan="2" className="px-4 py-2 bg-gray-200">
                                Hard Disk Drives (HDD)
                              </th>
                            </tr>
                            <tr>
                              <th className="px-4 py-2 bg-gray-100">
                                Volume Type
                              </th>
                              <th className="px-4 py-2 bg-gray-100">
                                FBS Provisioned IOPS SSD (io1)
                              </th>
                              <th className="px-4 py-2 bg-gray-100">
                                FBS General Purpose SSD (gp2)*
                              </th>
                              <th className="px-4 py-2 bg-gray-100">
                                Throughput Optimized HDD (st1)
                              </th>
                              <th className="px-4 py-2 bg-gray-100">
                                Cold HDD (sc1)
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-4 py-2 border-b">
                                <p>Short Description</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>
                                  Highest performance SSD volume designed for
                                  latency-sensitive transactional workloads
                                </p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>
                                  General Purpose SSD volume that balances price
                                  performance for a wide variety of
                                  transactional workloads
                                </p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                Low cost HDD volume designed for frequently
                                accessed, throughput intensive workloads
                              </td>
                              <td className="px-4 py-2 border-b">
                                Lowest cost HDD volume designed for less
                                frequently accessed workloads
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 border-b">
                                <p>Use Cases</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>
                                  I/O-intensive NoSQL and relational databases
                                </p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>
                                  Boot volumes, low-latency interactive apps,
                                  dev &amp; test
                                </p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                Big data, data warehouses, log processing
                              </td>
                              <td className="px-4 py-2 border-b">
                                Colder data requiring fewer scans per day
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 border-b">
                                <p>API Name</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>io1</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>gp2</p>
                              </td>
                              <td className="px-4 py-2 border-b">st1</td>
                              <td className="px-4 py-2 border-b">sc1</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 border-b">
                                <p>Volume Size</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>4 GB - 16 TB</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>1 GB - 16 TB</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                500 GB - 16 TB
                              </td>
                              <td className="px-4 py-2 border-b">
                                500 GB - 16 TB
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 border-b">
                                <p>Max IOPS**/Volume</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>64,000</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>16,000</p>
                              </td>
                              <td className="px-4 py-2 border-b">500</td>
                              <td className="px-4 py-2 border-b">250</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 border-b">
                                <p>Max Throughput**/Volume</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>1,000 MB/s</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>250 MB/s</p>
                              </td>
                              <td className="px-4 py-2 border-b">500 MB/s</td>
                              <td className="px-4 py-2 border-b">250 MB/s</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 border-b">
                                <p>Max IOPS/Instance</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>80,000</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>80,000</p>
                              </td>
                              <td className="px-4 py-2 border-b">80,000</td>
                              <td className="px-4 py-2 border-b">80,000</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 border-b">
                                <p>Max Throughput/Instance</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>1,750 MB/s</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>1,750 MB/s</p>
                              </td>
                              <td className="px-4 py-2 border-b">1,750 MB/s</td>
                              <td className="px-4 py-2 border-b">1,750 MB/s</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 border-b">
                                <p>Price</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>$0.125/GB-month</p>
                                <p>$0.065/provisioned IOPS</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                <p>$0.10/GB-month</p>
                              </td>
                              <td className="px-4 py-2 border-b">
                                $0.045/GB-month
                              </td>
                              <td className="px-4 py-2 border-b">
                                $0.025/GB-month
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">
                                <p>Dominant Performance Attribute</p>
                              </td>
                              <td className="px-4 py-2">
                                <p>IOPS</p>
                              </td>
                              <td className="px-4 py-2">
                                <p>IOPS</p>
                              </td>
                              <td className="px-4 py-2">MB/s</td>
                              <td className="px-4 py-2">MB/s</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="space-y-2">
                        <h6 className="py-5 text-2xl font-semibold text-[#232f3e]">
                          SSD-backed volumes (IOPS-intensive)
                        </h6>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Provisioned IOPS SSD (io1) volumes
                          </h6>
                          <p>
                            IO1 is backed by solid-state drives (SSDs) and is
                            the highest performance FBS storage option designed
                            for critical, I/O intensive database and application
                            workloads, as well as throughput-intensive database
                            and data warehouse workloads, such as HBase and
                            Cassandra. These volumes are ideal for both
                            IOPS-intensive and throughput-intensive workloads
                            that require extremely low latency.
                          </p>
                          <p className="pt-2">
                            IO1 is designed to deliver a consistent baseline
                            performance of up to 50 IOPS/GB to a maximum of
                            64,000 IOPS and provide up to 1,000 MB/s of
                            throughput per volume1.
                          </p>
                        </div>
                        <div>
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Standard SSD (gp2) volumes
                          </h6>
                          <p>
                            GP2 is the default FBS volume type for Nobus FCS
                            instances. These volumes are backed by solid-state
                            drives (SSDs) and are suitable for a broad range of
                            transactional workloads, including dev/test
                            environments, low-latency interactive applications,
                            and boot volumes. GP2 is designed to offer
                            single-digit millisecond latencies, deliver a
                            consistent baseline performance of 3 IOPS/GB
                            (minimum 100 IOPS) to a maximum of 16,000 IOPS, and
                            provide up to 250 MB/s of throughput per volume
                          </p>
                          <p className="pt-2">
                            GP2 volumes smaller than 1 TB can also burst up to
                            3,000 IOPS. I/O is included in the price of gp2, so
                            you pay only for each GB of storage you provision.
                            GP2 is designed to deliver the provisioned
                            performance 99% of the time. If you need a greater
                            number of IOPS than gp2 can provide, or if you have
                            a workload where low latency is critical or you need
                            better performance consistency, we recommend that
                            you use io1.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h6 className="py-5 text-2xl font-semibold text-[#232f3e]">
                          HDD-backed volumes (MB/s-intensive)
                        </h6>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Throughput optimized HDD (st1) volumes
                          </h6>
                          <p>
                            ST1 is backed by hard disk drives (HDDs) and is
                            ideal for frequently accessed, throughput intensive
                            workloads with large datasets and large I/O sizes,
                            such as MapReduce, Kafka, log processing, data
                            warehouse, and ETL workloads. These volumes deliver
                            performance in terms of throughput, measured in
                            MB/s, and include the ability to burst up to 250
                            MB/s per TB, with a baseline throughput of 40 MB/s
                            per TB and a maximum throughput of 500 MB/s per
                            volume. ST1 is designed to deliver the expected
                            throughput performance 99% of the time and has
                            enough I/O credits to support a full-volume scan at
                            the burst rate.
                          </p>
                        </div>
                        <div className="">
                          <h6 className="pb-2 text-lg font-semibold text-[#232f3e]">
                            Cold HDD (sc1) volumes
                          </h6>
                          <p>
                            SC1 is backed by hard disk drives (HDDs) and
                            provides the lowest cost per GB of all FBS volume
                            types. It is ideal for less frequently accessed
                            workloads with large, cold datasets. Similar to st1,
                            sc1 provides a burst model: these volumes can burst
                            up to 80 MB/s per TB, with a baseline throughput of
                            12 MB/s per TB and a maximum throughput of 250 MB/s
                            per volume. For infrequently accessed data, sc1
                            provides extremely inexpensive storage. SC1 is
                            designed to deliver the expected throughput
                            performance 99% of the time and has enough I/O
                            credits to support a full-volume scan at the burst
                            rate.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h6 className="py-5 text-2xl font-semibold text-[#232f3e]">
                          Nobus FBS Flexible Volumes
                        </h6>

                        <p>
                          Flexible Volumes is a feature that allows you to
                          easily adapt your volumes as the needs of your
                          applications change. Flexible Volumes allows you to
                          dynamically increase capacity, tune performance, and
                          change the type of any new or existing current
                          generation volume with no downtime or performance
                          impact. Easily right-size your deployment and adapt to
                          performance changes.
                        </p>
                        <p>
                          Simply create a volume with the capacity and
                          performance needed today knowing you have the ability
                          to modify your volume configuration in the future,
                          saving hours of planning cycles. The Flexible Volumes
                          feature makes it easier to adapt your resources to
                          changing application demands, giving you confidence
                          that you can make modifications in the future as your
                          business needs change.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h6 className="py-5 text-2xl font-semibold text-[#232f3e]">
                          Nobus FBS Snapshots
                        </h6>
                        <p>
                          Nobus FBS provides the ability to save point-in-time
                          snapshots of your volumes to Nobus FOS. Nobus FBS
                          Snapshots are stored incrementally: only the blocks
                          that have changed after your last snapshot are saved,
                          and you are billed only for the changed blocks. If you
                          have a device with 100 GB of data but only 5 GB has
                          changed after your last snapshot, a subsequent
                          snapshot consumes only 5 additional GB and you are
                          billed only for the additional 5 GB of snapshot
                          storage, even though both the earlier and later
                          snapshots appear complete.
                        </p>
                        <p className="">
                          When you delete a snapshot, you remove only the data
                          not needed by any other snapshot. All active snapshots
                          contain all the information needed to restore the
                          volume to the instant at which that snapshot was
                          taken. The time to restore changed data to the working
                          volume is the same for all snapshots.
                        </p>
                        <p>
                          Snapshots can be used to instantiate multiple new
                          volumes, expand the size of a volume, or move volumes
                          across Availability Zones. When a new volume is
                          created, you may choose to create it based on an
                          existing Nobus FBS snapshot. In that scenario, the new
                          volume begins as an exact replica of the snapshot.
                        </p>

                        <p>
                          The following are key features of Nobus FBS Snapshots:
                        </p>

                        <ul className="space-y-4 list-disc pl-5">
                          <li>
                            <p>
                              <span className="font-semibold">
                                Immediate access to Nobus FBS volume data -
                              </span>{" "}
                              After a volume is created from a snapshot, there
                              is no need to wait for all of the data to transfer
                              from Nobus S3 to your Nobus FBS volume before your
                              attached instance can start accessing the volume.
                              Nobus FBS Snapshots implement lazy loading, so
                              that you can begin using them right away.
                            </p>
                          </li>
                          <li>
                            <p>
                              <span className="font-semibold">
                                Resizing Nobus FBS volumes -
                              </span>{" "}
                              There are two methods that can be used to resize
                              an Nobus FBS volume. If you create a new volume
                              based on a snapshot, you can specify a larger size
                              for the new volume. With the{" "}
                              <a href="#" class="text-blue-500 hover:underline">
                                Flexible Volume
                              </a>{" "}
                              feature you can dynamically grow live volumes
                              without the use of snapshots. Make certain that
                              your file system and application supports resizing
                              a device.
                            </p>
                          </li>
                          <li>
                            <p>
                              <span className="font-semibold">
                                Sharing Nobus FBS Snapshots -
                              </span>{" "}
                              Nobus FBS Snapshots' shareability makes it easy
                              for you to share data with your co-workers or
                              others in the NCS community. Authorized users can
                              create their own Nobus FBS volumes based on your
                              Nobus FBS shared snapshots; your original snapshot
                              remains intact. If you choose, you can also make
                              your data available publicly to all NCS users. For
                              more information about how to share snapshots, see{" "}
                              <a href="#" class="text-blue-500 hover:underline">
                                {" "}
                                Modifying Snapshot Permissions
                              </a>
                              .
                            </p>
                          </li>
                          <li>
                            <p>
                              <span className="font-semibold">
                                Copying Nobus FBS Snapshots across NCS regions -
                              </span>{" "}
                              Nobus FBS's ability to copy snapshots across NCS
                              regions makes it easier to leverage multiple NCS
                              regions for geographical expansion, data center
                              migration and disaster recovery. You can copy any
                              snapshot accessible to you: snapshots you created;
                              snapshots shared with you; and snapshots from the
                              NCS Marketplace, VM Import/Export, and NCS Storage
                              Gateway. For more information, see{" "}
                              <a href="#" class="text-blue-500 hover:underline">
                                Copying an Nobus FBS Snapshot
                              </a>
                              .
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="py-5 text-2xl font-semibold text-[#232f3e]">
                          Nobus FBS availability and durability
                        </h6>
                        <div className="space-y-2">
                          <p>
                            Nobus FBS volumes are designed to be highly
                            available and reliable. At no additional charge to
                            you, Nobus FBS volume data is replica ted across
                            multiple servers in an Availability Zone to prevent
                            the loss of data from the failure of any single
                            component.
                          </p>
                          <p>
                            Nobus FBS volumes are designed for an annual failure
                            rate (AFR) of between 0.1% - 0.2%, where failure
                            refers to a complete or partial loss of the volume,
                            depending on the size and performance of the volume.
                            This makes FBS volumes 20 times more reliable than
                            typical commodity disk drives, which fail with an
                            AFR of around 4%. For example, if you have 1,000 FBS
                            volumes running for 1 year, you should expect 1 to 2
                            will have a failure. FBS also supports a snapshot
                            feature, which is a good way to take point-in-time
                            backups of your data.
                          </p>
                        </div>
                      </div>
                    </section>
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
