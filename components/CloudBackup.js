import React from "react";

function CloudBackup() {
  return (
    <section
      className="p-20"
      style={{
        backgroundImage: "url('/backup.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col lg:flex-row md:px-20">
        <div className="w-full lg:w-1/2">
          <img src="/backup2.png" />
        </div>
        <div className="mt-6 lg:mt-0 w-full lg:w-1/2 text-white lg:p-5">
          <h2 className="text-3xl md:text-4xl md:text-left tracking-wider leading-8 font-semibold">
            Nobus Cloud Backup
          </h2>
          <h4 className="mt-4 text-xl md:text-left leading-tight">
            Cyber Security Protection, Data Recovery
          </h4>
          <h6 className="mt-6 md:mt-10 text-md md:text-left text-justify font-light tracking-wide leading-relaxed">
            Protect your mission critical Systems from Servers to desktops or
            Laptops with Nobus Cloud Backup (NCB). With NCB, Our cloud customers
            can now provide an extra layer of backup & Cyber security for their
            applications at a fractional monthly cost.
          </h6>
          <div className="mt-10 pb-5 flex flex-col sm:flex-row md:justify-start">
            <a href="/documentation/acronis">
              <button className="w-full mt-2 sm:mt-0 sm:ml-2 sm:w-40 px-4 py-3 font-semibold text-md text-white rounded hover:shadow active:scale-90 cursor-pointer border border-white">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudBackup;
