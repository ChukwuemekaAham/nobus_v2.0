import React from "react";
import Image from "next/image";

function Flexible() {
  return <div className="flex flex-col md:flex-row px-20 pt-20 lg:p-20 lg:left-20 max-w-7xl relative">
      <div className="md:w-1/2 z-10 p-10 bg-white shadow-2xl rounded-xl border mx-auto lg:mx-0 mb-80 lg:mb-0">
        <h1 className="mb-4 text-3xl font-semibold text-gray-900">Simple Monthly Calculator</h1>
        <p className="text-[15px] tracking-wide leading-relaxed ">Calculate your average cost per month with our simple monthly calculator. 
        Low Ongoing Cost; pay as you use pricing with flexible expenses, of short or long term commitments, without requiring 
        complex licensing
        </p>
        <a href="/simple-monthly-calculator">
          <button className="mt-4 py-2 px-3 rounded hover:shadow-xl active:scale-90 cursor-pointer font-semibold text-md bg-blue-600 text-white border-2 border-blue-600">
            Calculate
          </button>
        </a>
      </div>
      <div className="">
        <Image
          src="/flexiblebg.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      
    </div>;
}

export default Flexible;
