import React from "react";
import Image from "next/image";

function Smc() {
  return (
    <div className="flex flex-col md:flex-row px-10 py-24 sm:py-32 lg:left-20 mx-auto sm:max-w-6xl relative">
      <div className="md:w-1/2 z-10 py-10 pl-10 pr-8 bg-white shadow-lg rounded-xl border border-gray-400 mx-auto sm:max-w-3xl lg:mx-0 lg:mb-0">
        <h1 className="mb-5 text-2xl sm:text-3xl tracking-tight text-center lg:text-left font-semibold text-gray-900">
          Simple Monthly Calculator
        </h1>
        <p className="text-base tracking-wide text-justify">
          Calculate your average cost per month with our simple monthly
          calculator. Low Ongoing Cost; pay as you use pricing with flexible
          expenses, of short or long term commitments, without requiring complex
          licensing
        </p>
        <a
            href="/simple-monthly-calculator"
          className="mt-10 mx-auto max-w-xs lg:mx-0 cursor-pointer block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Calculate
        </a>
      </div>
      <div>
        <Image src="/flexiblebg2.png" className="mx-auto max-w-4xl" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}

export default Smc;
