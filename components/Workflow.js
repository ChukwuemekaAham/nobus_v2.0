import React, { useState } from "react";
import Image from "next/image";

import { useRouter } from "next/dist/client/router";

function Content() {
  return (
    <section className="bg-blue-50 p-20 md:mt-10">
      
       <div className="flex flex-col lg:flex-row md:px-20 lg:px-0">
        <div className="w-full lg:w-1/2">
          <img src="/workflow5.png"
            className="object-contain"
          />
        </div>
        <div className="mt-6 lg:mt-0 w-full lg:w-1/2 text-gray-900 lg:px-5 lg:py-20 lg:pl-10 ">
          
          <h2 className="text-3xl md:text-4xl text-left font-semibold tracking-wider">
          Experience Workflow Boost
          </h2>
          
          <h6 className="mt-6 lg:my-10 text-md text-left text-justify tracking-wider leading-relaxed">
            Protect your mission critical Systems from Servers to desktops or 
            Laptops with Nobus Cloud Backup (NCB). With NCB, Our cloud
            customers can now provide an extra layer of backup & Cyber security for
            their applications at a fractional monthly cost.
          </h6>
          <div class="mt-8 sm:flex lg:mt-0 lg:flex-shrink-0">
            <a href="/contact/">
            <button class="w-full sm:w-40 sm:mt-0 sm:inline-flex items-center justify-center bg-blue-600 rounded-md hover:shadow active:scale-90 cursor-pointer text-white font-semibold text-md px-2 py-3">Contact Us</button>
            
            </a>
            
            {/* <button class="mt-2 w-full sm:w-40 sm:mt-0 sm:ml-3 sm:inline-flex items-center justify-center bg-white rounded-md hover:shadow hover:bg-blue-50 active:scale-90 cursor-pointer text-blue-600 font-semibold text-md outline outline-1 outline-blue-600 px-2 py-3">Learn more</button>
           */}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Content;
