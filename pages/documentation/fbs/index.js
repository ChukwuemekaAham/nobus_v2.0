import Head from "next/head";
import { React, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer1";
import { PhoneIcon } from "@heroicons/react/outline";
import SidebarDocs from "../../../components/SidebarDocs";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
import Quickstart from "../../../components/fbsdoc/Quickstart";
import DataServices from "../../../components/fbsdoc/DataServices";
import VolumeSnapshot from "../../../components/fbsdoc/VolumeSnapshot";

function index() {
  const [open, setOpen] = useState(true);

  return (
    <section className="overflow-hidden">
      <Head>
        <title> Documentation - Nobus Flexible Block Storage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex px-5 py-3 justify-between shadow-2xl border-y border-gray-300">
          <div className="flex">
            <div className="flex">
              {!open ? (
                <button
                  type="button"
                  className="rounded-full bg-gray-100 p-2 text-gray-400 shadow-md"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <ChevronDoubleRightIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className="rounded-full bg-gray-100 p-2 text-gray-400 shadow-md"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <ChevronDoubleLeftIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              )}
              <h4 className="pl-2 pt-3"> FBS Documentation</h4>
            </div>
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
        <div className={`grid grid-cols-1 lg:grid-cols-4`}>
          <div className={`${!open && "hidden"}`}>
            <SidebarDocs open={open} setOpen={setOpen} />
          </div>

          <div
            className={`lg:col-span-3 bg-gray-200 h-[600px] overflow-y-scroll scrollbar-hide ${
              !open && "lg:col-span-4"
            }`}
          >
            <div className="p-5">
              <div className={`bg-white shadow-lg border border-gray-300`}>
                <div id="overview" className="flex-col p-5 lg:p-10">
                  <h1 className="pb-10 text-center">
                    Nobus Flexible Block Storage
                  </h1>
                  <section className="mx-auto text-justify">
                    <div className="space-y-5">
                      <p>
                        Nobus FBS volume is a durable, block-level storage
                        device that you can attach to a single FCS instance. You
                        can use FBS volumes as primary storage for data that
                        requires frequent updates, such as the system drive for
                        an instance or storage for a database application.
                      </p>

                      <p>
                        Nobus Flexible Block Store is recommended when fast data
                        accessibility is needed and comprehensive persistence is
                        required. Nobus FBS make available, block storage
                        volumes for use with FCS instances which can be
                        configured dynamically. These volumes can be positioned
                        as devices with any instances. Multiple volumes can be
                        positioned on the same instance however, each volume can
                        be attached to one instance at a time.
                      </p>
                      <p>
                        Multiple volumes can be attached to the same instance
                        within the limits specified by your account. FBS volumes
                        are particularly well-suited for use as the primary
                        storage for file systems and databases.
                      </p>
                      <p>
                        See <a href="/pricing/fbs/price">FBS pricing</a> for
                        information about pricing.
                      </p>
                    </div>
                    <div className="my-5 border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md mr-auto max-w-lg">
                      <span className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-6 w-6 text-blue-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                            clipRule="evenodd"
                          />
                        </svg>{" "}
                        <span className="font-mono font-semibold text-blue-600 pl-2">
                          Note:
                        </span>
                      </span>
                      <p className="text-sm pt-2 px-2">
                        Volume attached to an instance, can be used like any
                        other physical hard drive. FBS volumes persist
                        independently from the running life of an FCS instance.
                      </p>
                    </div>

                    <div className="space-y-5">
                      <p>
                        FBS volumes are created in a specific location (
                        Availability Zone ), and can then be attached to any
                        instances in that same Account. You can copy snapshots
                        to other Availability Zone and then restore them to new
                        volumes there making it easier for disaster recovery and
                        migration.
                      </p>
                      <p>
                        Standard FBS Volume is provided by Nobus. Starndard SAS
                        volumes are ideal for a broad range of use cases such as
                        boot volumes, small and medium-size databases, and
                        development and test environments.
                      </p>
                      <p>
                        Your FBS volumes can be encrypted to meet a wide range
                        of data-at-rest encryption requirements for
                        regulated/audited data and applications. When you create
                        an encrypted FBS volume and attach it to a supported
                        instance type, data stored at rest on the volume, disk
                        I/O, and snapshots created from the volume are all
                        encrypted. The encryption occurs on the servers that
                        host FCS instances, providing encryption of
                        data-in-transit from FCS instances to FBS storage. For
                        more information, see Nobus FBS Encryption. Snapshots
                        protect data for long-term durability, and they can be
                        used as the starting point for new FBS volumes.
                        Snapshots can be copied across several Availability Zone
                        and used to instantiate as many volumes as you wish. For
                        more information, see Nobus FBS Snapshots
                      </p>
                    </div>

                    <div className="pt-10">
                      <h3>Benefits of Using FBS Volumes</h3>

                      <div className="space-y-5">
                        <h4>Persistence of data</h4>

                        <p>
                          if you uncheck the{" "}
                          <span className="step-item">
                            Delete on Termination{" "}
                          </span>
                          checkbox when you configure FBS volumes for your
                          instance on the FCS console, When the instance is
                          terminated, the FBS volumes attached to the running
                          instance will automatically detach from the instance
                          with their data intact. Then the volume can be
                          re-attached to a new instance, allowing rapid
                          recovery. If the checkbox for{" "}
                          <span className="step-item">
                            Delete on Termination
                          </span>{" "}
                          is checked, the volume(s) will delete upon termination
                          of the FCS instance. You can stop and reboot this
                          instance without an impact on the data stored in the
                          attached volume when using a FBS-backed instance.
                        </p>

                        <p>
                          By default, the root FBS volume that is created and
                          attached to an instance at launch is deleted when that
                          instance is terminated. You can modify this behavior
                          by changing the value of the flag{" "}
                          <code class="text-red-500">DeleteOnTermination</code>{" "}
                          to <code class="text-red-500">false</code> when you
                          launch the instance. This modified value causes the
                          volume to persist even after the instance is
                          terminated, and enables you to attach the volume to
                          another instance.
                        </p>
                        <p>
                          By default, additional FBS volumes that are created
                          and attached to an instance at launch are not deleted
                          when that instance is terminated. You can modify this
                          behavior by changing the value of the flag{" "}
                          <code class="text-red-500">DeleteOnTermination</code>{" "}
                          to <code class="text-red-500">true</code> when you
                          launch the instance. This modified value causes the
                          volumes to be deleted when the instance is terminated.
                        </p>

                        <div className="my-5 border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md mr-auto max-w-lg">
                          <span className="flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="h-6 w-6 text-blue-600"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                                clipRule="evenodd"
                              />
                            </svg>{" "}
                            <span className="font-mono font-semibold text-blue-600 pl-2">
                              Note:
                            </span>
                          </span>
                          <p className="text-sm pt-2 px-2">
                            The FBS volume is off-instance storage which can be
                            retrievable and you continue to pay for volume use
                            regardless of the life of an instance.
                          </p>
                        </div>
                      </div>
                      <div className="pt-5 space-y-5">
                        <h4>Availability of data</h4>
                        <p>
                          a FBS volume and the instance to which it attaches
                          must be in the same location (account). If you build a
                          FBS volume in a specific account, it is automated to
                          prevent data loss in the account because of a hardware
                          component's failure.
                        </p>
                        <p>
                          Just one instance can be connected to a FBS volume at
                          a time, but a single instance can be connected to
                          several volumes. You can strip data across the volumes
                          for greater performance by attaching multiple volumes
                          to a named device.
                        </p>
                        <div className="my-5 border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md mr-auto max-w-lg">
                          <span className="flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="h-6 w-6 text-blue-600"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                                clipRule="evenodd"
                              />
                            </svg>{" "}
                            <span className="font-mono font-semibold text-blue-600 pl-2">
                              Note:
                            </span>
                          </span>
                          <p className="text-sm pt-2 px-2">
                            Without interruption to operation, you can switch
                            volume type and volume size.
                          </p>
                        </div>
                      </div>
                      <div className="pt-5 space-y-5">
                        <h4>Encryption of data</h4>
                        <p>
                          Nobus FBS encryption uses 256-bit Advanced Encryption
                          Standard algorithms (AES-256) and a Nobus-managed key
                          infrastructure. The encryption occurs on the server
                          that hosts the FCS instance, providing encryption of
                          data-in-transit from the FCS instance to Nobus FBS
                          storage. Encrypted FBS volumes enables you to meet a
                          wide range of data-at-rest encryption requirements for
                          regulated/audited data and applications.
                        </p>
                      </div>
                      <div className="pt-5">
                        <h4>Snapshots</h4>
                        <div className="space-y-5">
                          <p>
                            When you keep writing data in a volume, you will
                            regularly snapshot a volume that will be used as a
                            reference for new volumes. Nobus FBS can backup all
                            FBS volumes and These snapshots may be used to
                            create several new FBS volumes or to move volumes in
                            the available areas.The snapshots can be shared with
                            specific Availability Zone or made public. Snapshots
                            of FBS volumes are automatically encrypted. To take
                            a snapshot it is not necessary to add the volume to
                            a running instances.
                          </p>
                          <p>
                            Although snapshots are incrementally saved, only the
                            most recent snapshots are maintained in restoring
                            the volume.
                          </p>
                          <p>
                            When you create a new volume in a snapshot, the
                            original volume is exactly copied when you take the
                            snapshot. There is automated encryption of FBS
                            volumes restored from encrypted snapshots. You are
                            charged for creating snapshots on the basis of the
                            total volume size. You are charged only for
                            additional data outside the original volume for a
                            successive snapshot of the volume.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <Quickstart />
                  <DataServices />
                  <VolumeSnapshot />
                </div>
              </div>
              <div className="p-5 text-sm tracking-wide leading-relaxed">
                <p>Except otherwise...</p>
              </div>
            </div>
            <div className="overflow-hidden">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default index;
