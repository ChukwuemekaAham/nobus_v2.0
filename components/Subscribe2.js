/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from "react";

import { CalendarIcon, HandIcon } from "@heroicons/react/outline";

function Subscribe2() {
  return (
    <div
      className="relative isolate overflow-hidden py-24 sm:py-32 bg-gray-900"
      style={{
        backgroundImage: "url('/subscribe.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:gap-y-16 lg:gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl text-center lg:text-left font-semibold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-md mx-auto max-w-lg lg:mx-0 text-justfy lg:text-left tracking-wide text-gray-300">
              Sign up to our newsletter to receive our latest news and products.
              Stay updated on the latest developments and special offers!
            </p>
            <div className="mt-6 flex gap-x-4">
            
            <a
              href="https://mailchi.mp/f64c53b780c8/nobus-newsletter"
            className="mt-10 mx-auto lg:mx-0 max-w-xs cursor-pointer block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Subscribe
          </a>
            </div>
          </div>
          <dl className="hidden lg:block grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Monthly articles</dt>
              <dd className="mt-2 leading-7 text-gray-300 max-w-md">
                interesting news headlines and educating contents to boost your
                cloud initiative.
              </dd>
            </div>
            
          </dl>
        </div>
      </div>
    </div>
  );
}
export default Subscribe2;
