import React from "react";
import CookieAccept from "./CookieConsent";
import Image from "next/image";

function Footer2() {
  return (
    <div className="relative">
      <CookieAccept />
      <div className="grid grid-col-1 py-5 md:px-2 md:grid-cols-3 bg-[#000026] text-center place-items-center md:justify-between">
        <div className="flex flex-1 space-x-4">
          <a href="/">
            <Image
              className="mx-auto w-full"
              src="/logo.png"
              width={66}
              height={26}
            />
          </a>
          <p className="ml-2 text-sm font-semibold text-gray-100">
            © 2024 Nkponani Ltd. All rights reserved.
          </p>
        </div>

        <div className="flex flex-1 mx-5 space-x-4 my-4 md:my-0">
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
        <div className="flex text-white text-sm font-semibold">
          <a
            href="/service-terms"
            className="text-white hover:underline hover:text-white"
          >
            Terms of Services{" "}
          </a>
          <span className="px-4"> | </span>
          <a
            href="/policy"
            className="text-white hover:underline hover:text-white"
          >
            {" "}
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
