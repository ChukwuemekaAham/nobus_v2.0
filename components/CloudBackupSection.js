import { ArrowRightIcon } from "@heroicons/react/solid";

const CloudBackupSection = () => {
  return (
    <section
      className="flex items-center justify-center h-3/4 lg:h-auto pt-8 lg:pt-0"
      style={{ background: "linear-gradient(90deg, #0664F7 0%, #180D77 100%)" }}
    >
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-white lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl text-white lg:text-4xl font-bold mb-4">
            Nobus Cloud Backup
          </h1>
          <h2 className="text-base text-white lg:text-2xl mb-4">
            Cyber Security Protection, Data Recovery
          </h2>
          <p className="text-base text-white lg:text-lg mb-8">
            Protect your mission critical Systems from Servers to desktops or
            Laptops with Nobus Cloud Backup (NCB). With NCB, customers can now
            provide an extra layer of backup & Cyber security for their
            applications at a fractional monthly cost.
          </p>
          <a
            href="/documentation/cloud-backup"
            className="inline-flex cursor-pointer items-center justify-center border border-white text-white rounded-md py-3 px-12 hover:bg-white hover:text-blue-600 transition-colors duration-200"
          >
            Learn More
            <span className="pl-2" aria-hidden="true">
              {" "}
              &rarr;
            </span>
          </a>
        </div>
        <div className="relative lg:w-1/2 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full h-80 lg:h-auto lg:max-w-md pt-8 lg:pt-0 -mt-24 lg:mt-0">
            <img
              src="/Illustration.png"
              alt="Cloud Illustration"
              className="rounded-lg object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudBackupSection;
