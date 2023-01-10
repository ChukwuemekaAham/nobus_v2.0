import React from 'react'

function Footer2() {
  return (
    <div class="">
         <div class="flex flex-col md:flex-row items-center justify-between py-4 w-full border-t border-gray-300">
          <div class="flex flex-col md:flex-row text-center text-gray-600">
            <div class="flex mt-4 md:mt-0 ml-2 text-sm font-semibold pt-2">
              <a href='/service-terms' >Terms of Services </a>  {''} <span class="px-4"> | </span>  {''} <a href='/policy' > Privacy Policy</a>
              

            </div>
          </div>
          <div class="flex flex-col md:flex-row text-center text-gray-600">
            <div class="flex flex:inline mx-auto">
              <img class="" src="/favicon.ico" width={35} height={10} />
              <p class="mt-4 md:mt-0 ml-2 text-sm md:pt-2 ">
                Native public cloud service.
              </p>
            </div>

           
            <p class="mt-4 md:mt-0 ml-2 text-sm font-semibold pt-2">
              © 2022 Nkponani Ltd. All rights reserved.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Footer2