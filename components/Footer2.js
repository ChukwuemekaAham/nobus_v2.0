import React from "react";
import CookieAccept from "./CookieConsent";

function Footer2() {
  return (
    <div className="">
      <CookieAccept />
      <div className="flex flex-col md:flex-row items-center justify-between py-4 w-full border-t border-gray-300">
        <div className="flex flex-col md:flex-row text-center text-gray-600">
          <div className="flex mt-4 md:mt-0 ml-2 text-sm font-semibold">
            <a href="/service-terms">Terms of Services </a> {""}{" "}
            <span className="px-4"> | </span> {""}{" "}
            <a href="/policy"> Privacy Policy</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-center text-gray-600">
          <p className="mt-4 md:mt-0 ml-2 text-sm font-semibold pt-2">
            © 2024 Nkponani Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
