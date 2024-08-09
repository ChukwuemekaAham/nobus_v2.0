import { CloudIcon, PhoneIcon } from "@heroicons/react/outline";
import { CheckIcon, GlobeAltIcon } from "@heroicons/react/solid";

const includedFeatures = [
  "",
  "Virtual Hosting",
  "Storage Services",
  "Cloud Backup",
  "Networking Services",
  "Cloud Security",
  "Advanced Sercurity Service",
  "Container Services",
];

export default function Content() {
  return (
    // <div className="bg-white py-24 sm:py-32"  style={{
    //   backgroundImage: "url('/ellipse.png')",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "contain",
    // }}>
    <div className="mx-auto max-w-7xl py-10 sm:py-auto px-10">
      <div className="mx-auto max-w-2xl sm:mt-0 lg:mt-16 lg:mx-auto lg:flex lg:max-w-none lg:justify-center lg:px-16">
        <div className="lg:flex-auto">
          <h2 className="font-extrabold text-2xl sm:text-3xl">
            Experience workflow boost
          </h2>
          <p className="mt-2 sm:mt-6 text-sm md:text-base text-gray-600 tracking-wide max-w-lg">
            Enhanced workflows with guided digital solutions for global
            optimization; implement new processes faster, simplify data{" "}
            <br className="hidden md:block" /> storage and improve productivity.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h6 className="flex-none text-base text-blue-600">
              What’s available?
            </h6>
            {/* <div className="h-px flex-auto bg-gray-100" /> */}
          </div>
          <ul
            role="list"
            className="list-none pl-0 grid grid-cols-1 text-sm space-y-5 text-[#030612] sm:grid-cols-2"
          >
            {includedFeatures.slice(0).map((feature, index) => (
              <li key={`feature-${index}`} className="flex gap-x-3">
                <span className={index === 0 ? "opacity-0" : "flex"}>
                  <img src="/cld-chk.svg" />
                  <span className="flex pl-2">{feature}</span>
                </span>
              </li>
            ))}
            <li className="text-[#0568FD] text-sm inline-flex items-center font-semibold">
              <a href="/solutions">
                See all solutions <span aria-hidden="true"> &rarr;</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-5 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="bg-indigo-50 py-5 text-center lg:flex lg:flex-col lg:justify-center lg:py-16 rounded-xl border">
            <div className="mx-auto px-2">
              <p className="text-base tracking-tight text-gray-600">
                Flexible Capacity As Low As
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                  ₦ 293.00
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  NGN
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  / Daily
                </span>
              </p>
              <div className="mx-auto max-w-[180px]">
                <a
                  href="https://cloud.nobus.io/"
                  className="mt-20 cursor-pointer block w-full rounded-md bg-[#03A731] px-2 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#03A731] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Visit Cloud Console
                </a>
              </div>
              <div className="mt-12 mx-auto max-w-[240px] flex items-center justify-center rounded-lg border border-gray-200 py-2 bg-[#3F3F461A]">
                <img src="/naria.png" alt="Naira" className="h-6 w-6" />
                <p className="text-xs leading-5 tracking-wide text-gray-900 pl-2">
                  Make All Your Payments in Naira!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center mt-16">
        <div className="inline-flex items-center justify-center mx-auto place-items-center bg-blue-100 px-3 py-1.5 rounded-md">
          <img src="/global.png" />
          <span className="ml-2 text-[#0568FD] tracking-wide text-xs font-bold">
            GLOBAL OFFERING
          </span>
        </div>
        <h2 className="text-4xl mt-5 md:text-6xl text-center font-extrabold tracking-tight text-gray-900">
          Global Cloud-Based Offerings
        </h2>
        <p className="mt-6 text-justify sm:text-center text-md tracking-tight text-gray-900">
          Helping organizations to minimize the time and amount used to plan,
          procure, and manage their infrastructure in a scalable and secure way,
          over a private WAN or the internet.
        </p>
        <div className="flex justify-center mx-auto mt-10 px-8">
          <a href="/contact">
            <div className="flex items-center justify-center px-6 py-4 sm:px-12 sm:py-5 hover:shadow-md hover:scale-95 active:scale-90 rounded-lg cursor-pointer border-2 border-blue-600 font-semibold text-md text-blue-600">
              <img src="/call-blue.svg" />
              <span className="text-lg pl-2">Contact Sales</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
}
