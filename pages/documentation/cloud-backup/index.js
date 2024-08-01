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
import Quickstart from "../../../components/fosdoc/Quickstart";

function index() {
  const [open, setOpen] = useState(true);

  return (
    <section>
      <Head>
        <title> Documentation - Nobus Cloud Backup </title>
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
              <h1 className="pl-2 pt-2 text-lg font-medium text-gray-500 ">
                Cloud Backup Documentation
              </h1>
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
                  <h5 className="pb-5">Nobus Cloud Backup</h5>
                  <section className="mx-auto text-justify">
                    <h2 className="pb-5">
                      {" "}
                      Cyber Security Protection, Data Recovery
                    </h2>

                    <div className="">
                      <p className="">
                        Protect your mission critical Systems from Servers to
                        desktops/Laptops with Nobus Cloud Backup (NCB). With
                        NCS, Our cloud customers can now provide an extra layer
                        of backup &amp; Cyber security for their applications at
                        a fractional monthly cost. On-Premise customers, and
                        customers hosting their applications with other 3rd
                        party cloud providers such as AWS, Azure, GCP or
                        VMWare-Based hypervisors can now backup and protect
                        their applications and critical user data on Nobus
                        platform
                      </p>
                      <p className="font-semibold py-4">
                        Some of Nobus Cloud Backup (NCB) features include:
                      </p>
                      <div className="pb-4 space-y-2">
                        <p>
                          <b>1.</b> Advanced Backup &amp; Recovery for various
                          workloads (Cloud &amp; On-premise, Nobus cloud or 3rd
                          party cloud)
                        </p>

                        <p>
                          <b>2.</b> Ransomeware Protection for all systems
                        </p>

                        <p>
                          <b>3.</b> Forensic Backup
                        </p>

                        <p>
                          <b>4.</b> Vulnerability scan across your system
                        </p>

                        <p>
                          <b>5.</b> Antivirus Protection
                        </p>

                        <p>
                          <b>6.</b> Single view for management of all Protected
                          workloads
                        </p>

                        <p>
                          <b>7.</b> NDPS cuts your Cyber protection costs by up
                          to 50%, boosts your monthly recurring revenue, while
                          delivering best in className Cyber protection for your
                          applications and data.
                        </p>
                      </div>
                      <p className="">
                        To protect business-critical data, backup is not enough
                        – clients need the integrated approach of cyber
                        protection. Paired with Nobus Cloud Backup, the Advanced
                        Backup pack enables you to extend the cloud backup
                        capabilities your clients require to proactively protect
                        their data. Available in consumption-based or
                        per-workload licensing models, you can easily minimize
                        data loss across your clients’ infrastructure and
                        workloads with the best-in-breed backup and recovery
                        technology that is enhanced with cyber protection. See
                        the{" "}
                        <a
                          className="hover:underline"
                          href=" https://www.acronis.com/en-us/support/documentation/"
                        >
                          Customer support documentation{" "}
                        </a>{" "}
                        or download the
                        <a
                          className="hover:underline"
                          href="https://dl.acronis.com/u/pdf/BackupCloud_adminguide_en-US.pdf"
                        >
                          {" "}
                          User guide{" "}
                        </a>
                        and
                        <a
                          className="hover:underline"
                          href="https://dl.acronis.com/u/pdf/AcronisBackupCloud_userguide_en-US.pdf"
                        >
                          {" "}
                          Admin guide.
                        </a>
                      </p>
                    </div>
                    <div className="p-4 border border-green-400 bg-green-100 rounded-md">
                      <p className="text-md textgray-800">
                        Nobus offers free backup of your entire infrastructure
                        for now. This is subject to the terms and conditions of
                        Nobus agreement with customers and can be reviewed in
                        the future.
                      </p>
                    </div>
                  </section>
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
