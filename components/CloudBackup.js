import React from "react";

function CloudBackup() {
  return (
    <section
      className="px-6 py-24 sm:py-32"
      style={{
        backgroundImage: "url('/backup.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex w-full lg:w-1/2 justify-center">
          <img src="/backup2.png" />
        </div>
        <div className="mt-20 lg:mt-0 w-full lg:w-1/2 text-white lg:p-5">
          <h2 className="text-3xl text-center md:text-4xl lg:text-left tracking-tight leading-8 font-semibold">
            Nobus Cloud Backup
          </h2>
          <h4 className="mt-4 text-xl text-center lg:text-left leading-tight">
            Cyber Security Protection, Data Recovery
          </h4>
          <h6 className="mt-6 md:mt-10 text-base text-justify mx-auto lg:mx-0 md:max-w-md lg:max-w-xl lg:text-left font-light tracking-wide">
            Protect your mission critical Systems from Servers to desktops or
            Laptops with Nobus Cloud Backup (NCB). With NCB, customers
            can now provide an extra layer of backup & Cyber security for their
            applications at a fractional monthly cost.
          </h6>
          <div className="mt-10 pb-5 flex flex-col lg:flex-row lg:justify-start">
          <a
              href="/documentation/acronis"
            className="mt-10 mx-auto lg:mx-0 max-w-xs cursor-pointer block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Learn more
          </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudBackup;
