import { CloudIcon, PhoneIcon } from "@heroicons/react/outline";
import { CheckIcon, GlobeAltIcon } from "@heroicons/react/solid";

const includedFeatures = [
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
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl sm:mt-0 lg:mt-16 lg:mx-auto lg:flex lg:max-w-none lg:justify-center lg:px-28">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-wide text-gray-900">
            Experience Workflow Boost
          </h3>
          <p className="mt-6 text-base text-gray-600 tracking-wide max-w-lg">
            Enhanced workflows with guided digital solutions for global
            optimization; implement new processes faster, simplify data{" "}
            <br className="hidden md:block" /> storage and improve productivity.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-md font-semibold leading-6 text-blue-600">
              What’s available
            </h4>
            {/* <div className="h-px flex-auto bg-gray-100" /> */}
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-base leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CloudIcon
                  className="h-6 w-5 flex-none text-[#030612]"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
            <li className="text-[#0568FD] flex items-center">
              See all solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-5 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="bg-indigo-50 py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16 rounded-xl border">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold tracking-wide text-gray-600">
                Flexible Capacity As Low As
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-4xl font-extrabold tracking-tight text-gray-900">
                  ₦ 293.00
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  NGN
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  / daily
                </span>
              </p>
              <a
                href="https://cloud.nobus.io/"
                className="mt-20 cursor-pointer block w-full rounded-md bg-[#03A731] px-3 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#03A731] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Visit Cloud Console
              </a>
              <div className="mt-12 flex items-center space-x-2 px-3 rounded-lg border border-gray-200 py-2 bg-[#3F3F461A]">
                <img src="/naria.png" alt="Naira" className="h-6 w-6" />
                <p className="text-xs leading-5 tracking-wide text-gray-600">
                  Make all your payments in naira!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl sm:text-center mt-16">
        <div className="inline-flex items-center justify-center sm:justify-center sm:mx-auto bg-blue-100 px-4 py-1.5 rounded-md mx-auto">
          <GlobeAltIcon className="h-5 w-5 text-blue-600" />
          <span className="ml-2 text-blue-600 font-semibold">
            GLOBAL OFFERING
          </span>
        </div>
        <h2 className="text-3xl md:text-6xl text-center font-extrabold tracking-tight text-gray-900">
          Global Cloud-Based Offerings
        </h2>
        <p className="mt-6 text-justify sm:text-center text-md font-small tracking-wide text-gray-900">
          Helping organizations to minimize the time and amount used to plan,
          procure, and manage their infrastructure in a scalable and secure way,
          over a private WAN or the internet.
        </p>
        <div className="flex justify-center mx-auto mt-10 px-8">
          <a href="/contact">
            <div className="flex items-center justify-center px-12 py-5 hover:bg-blue-500 hover:text-white hover:shadow-md active:scale-90 rounded-lg cursor-pointer border-2 border-blue-600 font-semibold text-md text-blue-600">
              <PhoneIcon className="h-6 w-6 mr-4" />
              <span className="text-lg">Contact Sales</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
}
