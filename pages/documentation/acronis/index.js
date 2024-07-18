import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowRightIcon, UserIcon } from "@heroicons/react/outline";

function index() {
  return (
    <section>
      <title> Nobus | Acronis Cloud Backup </title>
      <link rel="icon" href="/favicon.ico" />

      <Header />

      <div className="top-0 grid gap-y-10">
        <div
          className="flex-col justify-center text-center"
          style={{
            backgroundImage: "url('/backup.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="py-20 px-8 lg:pt-40 sm:px-20">
            <h1 className="pb-4 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed font-bold text-white">
              Nobus Cloud Backup
            </h1>
            <p className="text-sm sm:text-md font-semibold text-white tracking-wide leading-relaxed pb-4">
              Cyber Security Protection, Data Recovery
            </p>
          </div>
        </div>
        <div className="flex-col px-10 py-10 lg:px-20">
          <p className="">
            Protect your mission critical Systems from Servers to
            desktops/Laptops with Nobus Cloud Backup (NCB). With NCS, Our cloud
            customers can now provide an extra layer of backup &amp; Cyber
            security for their applications at a fractional monthly cost.
            On-Premise customers, and customers hosting their applications with
            other 3rd party cloud providers such as AWS, Azure, GCP or
            VMWare-Based hypervisors can now backup and protect their
            applications and critical user data on Nobus platform
          </p>
          <p className="font-semibold">
            Some of Nobus Cloud Backup (NCB) features include:
          </p>
          <div className="py-4">
            <p>
              1. Advanced Backup &amp; Recovery for various workloads (Cloud
              &amp; On-premise, Nobus cloud or 3rd party cloud)
            </p>

            <p>2. Ransomeware Protection for all systems</p>

            <p>3. Forensic Backup</p>

            <p>4. Vulnerability scan across your system</p>

            <p>5. Antivirus Protection</p>

            <p>6. Single view for management of all Protected workloads</p>

            <p>
              7. NDPS cuts your Cyber protection costs by up to 50%, boosts your
              monthly recurring revenue, while delivering best in className
              Cyber protection for your applications and data.
            </p>
          </div>
          <p className="">
            To protect business-critical data, backup is not enough – clients
            need the integrated approach of cyber protection. Paired with Nobus
            Cloud Backup, the Advanced Backup pack enables you to extend the
            cloud backup capabilities your clients require to proactively
            protect their data. Available in consumption-based or per-workload
            licensing models, you can easily minimize data loss across your
            clients’ infrastructure and workloads with the best-in-breed backup
            and recovery technology that is enhanced with cyber protection. See
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
      </div>
      <Footer />
    </section>
  );
}

export default index;
