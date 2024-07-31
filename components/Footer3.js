import React from "react";
import Image from "next/image";
import CookieAccept from "./CookieConsent";

function Footer3() {
  return (
    <>
      <CookieAccept />
      <footer className="flex justify-center w-full bg-[#000026] px-16 py-10">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-10 text-center lg:text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-10">
              <div>
                <h4 className="text-white mb-4">Features</h4>
                <ul className="list-none pl-0">
                  <li>
                    <a
                      href="/blog/"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing/"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/documentation/"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="/solutions"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Solutions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-4">Legal</h4>
                <ul className="list-none pl-0">
                  <li>
                    <a
                      href="/agreement"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Customer Agreement
                    </a>
                  </li>
                  <li>
                    <a
                      href="/policy"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Privacy Statement
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service-terms"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sla"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      SLAs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-4">Get Help</h4>
                <ul className="list-none pl-0">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gray-300">
                      Help Desk
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <a className="text-gray-400 hover:text-gray-300">Up-Time</a>
                    <span className="ml-1 px-1 font-semibold text-white text-xs bg-[#03A731] rounded">
                      99.982%
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
              <div>
                <h4 className="text-white mb-4">Contact Us</h4>
                <ul className="list-none pl-0">
                  <li className="text-gray-400">+2347057721442</li>
                  <li className="text-gray-400">Support@nobus.io</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-4">Certifications:</h4>
                <div className="flex justify-center lg:justify-start space-x-2">
                  <img
                    src="/pcidss.png"
                    alt="PCIDSS Certification"
                    className="w-20 shadow-lg"
                  />
                  <img
                    src="/iso.png"
                    alt="ISO Certification"
                    className="w-20 shadow-lg"
                  />
                  <img
                    src="/npdrlogo2.png"
                    alt="NDPR Certification"
                    className="w-20 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between text-gray-400 border-t border-gray-700 mt-10 pt-6">
            <div className="flex items-center">
              <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
              <span className="ml-2 text-sm">
                Native public cloud service. &nbsp;© 2024 Nkponani Ltd. All
                rights reserved.
              </span>
            </div>
            <div className="flex flex-1 items-center justify-center mt-4 lg:mt-0 space-x-4">
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
                    d="M0.729882 3.12607C0.368296 2.79035 0.188477 2.37479 0.188477 1.88035C0.188477 1.38591 0.369258 0.952069 0.729882 0.615387C1.09147 0.279668 1.55692 0.111328 2.12718 0.111328C2.69745 0.111328 3.14463 0.279668 3.50525 0.615387C3.86684 0.951107 4.04666 1.3734 4.04666 1.88035C4.04666 2.3873 3.86588 2.79035 3.50525 3.12607C3.14367 3.46178 2.68495 3.63012 2.12718 3.63012C1.56942 3.63012 1.09147 3.46178 0.729882 3.12607ZM3.74278 5.05188V15.3447H0.491391V5.05188h4.74278Z"
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

export default Footer3;
