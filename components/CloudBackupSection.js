import { ArrowRightIcon } from "@heroicons/react/solid";

const CloudBackupSection = () => {
  return (
    <section
      className="flex items-center justify-center h-3/4 lg:h-auto pt-8 lg:py-0"
      style={{ background: "linear-gradient(90deg, #0664F7 0%, #180D77 100%)" }}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-white lg:w-1/2 text-center py-10 lg:text-left">
          <h1 className="text-3xl text-white lg:text-4xl font-bold">
            Nobus Cloud Backup
          </h1>
          <h2 className="text-base text-white lg:text-2xl mb-10">
            Cyber Security Protection, Data Recovery
          </h2>
          <p className="text-base text-white lg:text-lg mb-8 text-center lg:text-justify px-px md:px-0 md:max-w-xl lg:max-w-lg">
            Protect your mission critical Systems from Servers to desktops or
            Laptops with Nobus Cloud Backup (NCB). With NCB, customers can now
            provide an extra layer of backup & Cyber security for their
            applications at a fractional monthly cost.
          </p>
          <a
            href="/documentation/cloud-backup"
            className="inline-flex cursor-pointer items-center justify-center border border-white text-white rounded-md py-3 px-12 hover:text-white transition-colors duration-200"
          >
            Learn More
            <span className="pl-2" aria-hidden="true">
              {" "}
              &rarr;
            </span>
          </a>
        </div>
        <div className="relative lg:w-1/2 flex mt-20 lg:mt-0 items-center justify-center lg:justify-end">
          <div className="relative w-full h-80 lg:h-auto lg:max-w-md pt-8 lg:pt-0 -mt-24 lg:mt-0">
            <img
              src="/Illustration.png"
              alt="Cloud Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudBackupSection;
