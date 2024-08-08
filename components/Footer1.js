import React from "react";
import Image from "next/image";
import CookieAccept from "./CookieConsent";

function Footer() {
  return (
    <>
      <CookieAccept />
      <footer className="flex justify-center w-full bg-[#000026]">
        <div className="w-full mt-12 mx-auto  max-w-7xl">
          <div className="flex flex-col flex-grow lg:flex-row text-left ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-[100px] mx-auto justify-center lg:text-left mt-10 lg:mt-0 pb-10">
              <div className="flex flex-col w-full">
                <p className="mt-6 md:mt-0 font-epilogue text-md text-white font-semibold">
                  Features
                </p>
                <a
                  href="#"
                  className="mt-4 text-xs font-semibold text-gray-400 hover:text-gray-300"
                >
                  Blog
                </a>
                <a
                  href="/pricing/"
                  className="mt-2 text-xs font-semibold text-gray-400 hover:text-gray-300"
                >
                  Pricing
                </a>
                <a
                  href="/documentation/"
                  className="mt-2 text-xs font-semibold text-gray-400 hover:text-gray-300"
                >
                  Documentation
                </a>

                <a
                  href="/solutions"
                  className="mt-2 text-xs font-semibold text-gray-400 hover:text-gray-300"
                >
                  Solutions
                </a>
              </div>
              <div className="flex flex-col w-full">
                <p className="mt-6 md:mt-0 font-epilogue text-md text-white font-semibold">
                  Legal
                </p>
                <a
                  href="/agreement"
                  className="mt-4 text-xs font-semibold text-gray-400 hover:text-gray-300"
                >
                  Customer Agreement
                </a>
                <a
                  href="/policy"
                  className="mt-2 text-xs font-semibold text-gray-400 hover:text-gray-300"
                >
                  Privacy Statement
                </a>

                <a
                  href="/service-terms"
                  className="mt-2 text-xs font-semibold text-gray-400 hover:text-gray-300"
                >
                  Terms of Service
                </a>

                <a
                  href="/sla"
                  className="mt-2 text-xs font-semibold text-gray-400 hover:text-gray-300"
                >
                  SLAs
                </a>
              </div>
              <div className="flex flex-col w-full">
                <p className="mt-6 md:mt-0 font-epilogue text-md text-white font-semibold">
                  Get Help
                </p>

                <a
                  href="#"
                  className="mt-4 text-xs font-semibold text-gray-400 hover:text-gray-300"
                >
                  Help Desk{" "}
                </a>

                <a
                  href="/contact"
                  className="mt-2 text-xs font-semibold text-gray-400 hover:text-gray-300"
                >
                  Contact
                </a>
                <a className="mt-2 text-xs font-semibold text-gray-400 hover:text-gray-300">
                  Up-Time
                  <span className="ml-1 px-1 font-semibold text-white text-xs bg-[#03A731] rounded">
                    99.982%
                  </span>
                </a>
              </div>
              <div className="flex flex-col w-full">
                <p className="mt-6 md:mt-0 font-epilogue text-md text-white font-semibold">
                  Contact Us
                </p>
                <p className="mt-4 text-xs font-semibold text-gray-100">
                  {" "}
                  +2347057721442{" "}
                </p>
                <p className="text-xs mt-2 font-semibold text-gray-100">
                  support@nobus.io
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-2/6 pb-0 pt-4 lg:pl-10 lg:pt-0">
              <p className="mt-2 lg:mt-0 text-lg font-epilogue mx-auto justify-center lg:mx-0 lg:text-left font-semibold text-gray-100">
                Our Certifications:
              </p>
              <div className="flex px-5 space-x-1 sm:px-0 items-center justify-center sm:space-x-2">
                <img
                  width={136}
                  height={46}
                  className="block mt-5 sm:my-10 w-29 shadow-lg"
                  src="/pcidss-logo.png"
                />
                <img
                  width={120}
                  height={42}
                  className="block mt-5 sm:my-10 w-25 shadow-lg"
                  src="/iso-logo.png"
                />

                <img
                  width={160}
                  height={46}
                  className="hidden sm:block my-10 w-46 shadow-lg"
                  src="/ndpr-logo.png"
                />
              </div>
              <div className="sm:hidden mx-auto justify-center">
                <img
                  width={160}
                  height={46}
                  className="block mt-2 mb-10 w-46 shadow-lg"
                  src="/ndpr-logo.png"
                />
              </div>
            </div>
          </div>
          <hr className="border-t-1 border-t-slate-500 hidden md:block" />
          <div className="py-10 px-2 sm:px-10 mt-0 md:mt-4 flex flex-col md:flex-row items-center justify-between md:py-4 w-full">
            <div className="flex flex-1 space-x-4">
              <a href="/">
                <Image
                  className="mx-auto w-26 -my-1"
                  src="/logo.png"
                  width={66}
                  height={26}
                />
              </a>
              <p className="ml-2 text-sm font-semibold text-gray-100">
                © 2024 Nkponani Ltd. All rights reserved.
              </p>
            </div>
            <div className="flex flex-1 space-x-4 mt-4 md:mt-0">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.566775 0.0546875L6.89644 8.51982L0.527344 15.4025H1.96119L7.53787 9.37691L12.0433 15.4025H16.9218L10.2363 6.46125L16.165 0.0546875H14.7311L9.59582 5.60416L5.44625 0.0546875H0.567726H0.566775ZM2.67473 1.1109H4.91541L14.8119 14.3463H12.5712L2.67473 1.1109Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.729882 3.12607C0.368296 2.79035 0.188477 2.37479 0.188477 1.88035C0.188477 1.38591 0.369258 0.952069 0.729882 0.615387C1.09147 0.279668 1.55692 0.111328 2.12718 0.111328C2.69745 0.111328 3.14463 0.279668 3.50525 0.615387C3.86684 0.951107 4.04666 1.3734 4.04666 1.88035C4.04666 2.3873 3.86588 2.79035 3.50525 3.12607C3.14367 3.46178 2.68495 3.63012 2.12718 3.63012C1.56942 3.63012 1.09147 3.46178 0.729882 3.12607ZM3.74278 5.05188V15.3447H0.491391V5.05188H3.74278Z"
                    fill="#FEFFFC"
                  />
                  <path
                    d="M14.5663 6.0684C15.2751 6.83796 15.629 7.89418 15.629 9.23898V15.1626H12.5411V9.65646C12.5411 8.97829 12.3651 8.45114 12.0141 8.07598C11.6631 7.70082 11.1899 7.51228 10.5975 7.51228C10.0052 7.51228 9.532 7.69986 9.181 8.07598C8.82999 8.45114 8.65401 8.97829 8.65401 9.65646V15.1626H5.54785V5.02276H8.65401V6.36756C8.96847 5.9193 9.39258 5.56531 9.92535 5.30462C10.4581 5.04393 11.0572 4.91406 11.7237 4.91406C12.9103 4.91406 13.8585 5.29884 14.5663 6.06744V6.0684Z"
                    fill="#FEFFFC"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
