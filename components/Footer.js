import React from "react";
import Image from "next/image";
import CookieAccept from "./CookieConsent";

function Footer() {
  return (
    <>
    <CookieAccept />
     <footer className="flex justify-center w-full bg-gray-900 px-16">
      <div className="w-full mt-12 max-w-7xl">
        <div className="flex flex-col flex-grow md:flex-row text-center md:text-left">
          <div className="flex flex-col items-center md:items-start w-full md:w-2/6 border-b border-gray-700 pb-5 md:pb-0 md:border-none">
            <a href="/">
              <Image
                className="mx-auto my-10 w-26 md:mb-4 md:mt-0"
                src="/logo.png"
                width={105}
                height={40}
              />
            </a>
            <div className="hidden flex-col md:flex mt-10">
              <p className="text-sm font-semibold text-gray-100">
                Call us: +2347057721442
              </p>
              <p className="text-sm font-semibold text-gray-100">
                media.marketing@nobus.io
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10 text-left justify-center mx-auto pb-10 ">
          <div className="flex flex-col w-full">
            <p className="mt-6 md:mt-0 text-md text-white font-semibold">
              Features
            </p>
            <a
              href="/blog/"
              className="mt-4 text-sm font-semibold text-gray-400 hover:text-gray-300"
            >
              Blog
            </a>
            <a
              href="/pricing/"
              className="mt-2 text-sm font-semibold text-gray-400 hover:text-gray-300"
            >
              Pricing
            </a>
            <a
              href="/documentation/"
              className="mt-2 text-sm font-semibold text-gray-400 hover:text-gray-300"
            >
              Documentation
            </a>

            <a
              href="/solutions"
              className="mt-2 text-sm font-semibold text-gray-400 hover:text-gray-300"
            >
              Solutions
            </a>

          </div>

          <div className="flex flex-col w-full">
            <p className="mt-6 md:mt-0 text-md text-white font-semibold">Legal</p>
            <a
              href="/agreement"
              className="mt-4 text-sm font-semibold text-gray-400 hover:text-gray-300"
            >
              Customer Agreement
            </a>
            <a
              href="/policy"
              className="mt-2 text-sm font-semibold text-gray-400 hover:text-gray-300"
            >
              Privacy Statement
            </a>

            <a
              href="/service-terms"
              className="mt-2 text-sm font-semibold text-gray-400 hover:text-gray-300"
            >
              Terms of Service
            </a>

            <a
              href="/sla"
              className="mt-2 text-sm font-semibold text-gray-400 hover:text-gray-300"
            >
              SLAs
            </a>
          </div>
          <div className="flex flex-col w-full">
            <p className="mt-6 md:mt-0 text-md text-white font-semibold">
              Get Help
            </p>

            <a
              href="#"
              className="mt-4 text-sm font-semibold text-gray-400 hover:text-gray-300"
            >
              Help Desk{" "}
            </a>

            <a
              href="/contact"
              className="mt-2 text-sm font-semibold text-gray-400 hover:text-gray-300"
            >
              Contact
            </a>
            <a className="mt-2 text-sm font-semibold text-gray-400 hover:text-gray-300">
              Up-Time
              <span className="ml-1 px-1 font-semibold text-gray-900 text-xs bg-gray-300 rounded">
                99.98%
              </span>
            </a>
          </div>

          </div>
          

          <div className="flex flex-col items-center md:items-start w-full md:w-2/6 pb-0 pt-4 md:pl-4 md:pt-0">
            <p className="mt-2 md:mt-0 text-md md:text-lg lg:text-xl font-semibold text-gray-100">
              We accept the following payment systems
            </p>
            <div className="flex justify-center space-x-2">
              <img
                className="md:block my-10 w-16 p-1 shadow-lg"
                src="/mastercard.png"
              />
              <img className="md:block my-10 w-16 p-1 shadow-lg" src="/visa.png" />
            </div>
          </div>
        </div>
        <div className="py-10 mt-0 md:mt-6 flex flex-col md:flex-row items-center justify-between md:py-4 w-full border-t border-gray-700">
          <div className="flex text-gray-400">
            <a className="text-gray-400" href="#">
              <svg
                className="h-6 w-6 fill-current"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="-285.9 385.7 26.5 22"
                xml="preserve"
                role="img"
              >
                <path
                  fill="#8d98a1"
                  d="M-269.3,386c-2.4,0.9-3.9,3.1-3.7,5.6l0.1,0.9l-1-0.1c-3.5-0.4-6.5-2-9.1-4.5l-1.3-1.3l-0.3,0.9c-0.7,2.1-0.2,4.3,1.2,5.7 c0.8,0.8,0.6,0.9-0.7,0.4c-0.5-0.2-0.9-0.3-0.9-0.2c-0.1,0.1,0.3,1.9,0.7,2.6c0.5,1,1.5,1.9,2.6,2.5l0.9,0.4l-1.1,0 c-1.1,0-1.1,0-1,0.4c0.4,1.3,1.9,2.6,3.6,3.2l1.2,0.4l-1,0.6c-1.5,0.9-3.3,1.4-5.1,1.4c-0.9,0-1.6,0.1-1.6,0.2 c0,0.2,2.3,1.3,3.7,1.7c4.1,1.3,8.9,0.7,12.6-1.4c2.6-1.5,5.2-4.6,6.4-7.5c0.7-1.6,1.3-4.4,1.3-5.8c0-0.9,0.1-1,1.1-2.1 c0.6-0.6,1.2-1.3,1.3-1.5c0.2-0.4,0.2-0.4-0.8,0c-1.6,0.6-1.9,0.5-1.1-0.4c0.6-0.6,1.3-1.7,1.3-2.1c0-0.1-0.3,0-0.6,0.2 c-0.3,0.2-1.1,0.5-1.7,0.7l-1,0.3l-0.9-0.6c-0.5-0.3-1.2-0.7-1.6-0.9C-266.9,385.6-268.4,385.7-269.3,386z"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                className="ml-4 h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g fill="#8d98a1">
                    <path d="M20,3.33355556 C20,1.582 18.4186667,0 16.6666667,0 L3.33333333,0 C1.58133333,0 0,1.582 0,3.33355556 L0,16.6664444 C0,18.418 1.58133333,20 3.33355556,20 L10,20 L10,12.4444444 L7.55555556,12.4444444 L7.55555556,9.11111111 L10,9.11111111 L10,7.81244444 C10,5.57266667 11.6817778,3.55555556 13.75,3.55555556 L16.4444444,3.55555556 L16.4444444,6.88888889 L13.75,6.88888889 C13.4551111,6.88888889 13.1111111,7.24688889 13.1111111,7.78311111 L13.1111111,9.11111111 L16.4444444,9.11111111 L16.4444444,12.4444444 L13.1111111,12.4444444 L13.1111111,20 L16.6666667,20 C18.4186667,20 20,18.418 20,16.6664444 L20,3.33355556 Z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a href="#">
              <svg
                className="ml-4 h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g fill="#8d98a1">
                    <path d="M10.7358299,9.05316505 C10.74693,9.03496505 10.7625302,9.01306505 10.7778304,8.99176505 L10.7778304,9.05316505 L10.7358299,9.05316505 Z M16.9563347,16.7413593 L13.9355007,16.7413593 L13.9355007,11.9100805 C13.9355007,10.696181 13.4977552,9.86785022 12.4052981,9.86785022 C11.5695643,9.86785022 11.0734621,10.4266736 10.8556124,10.9662 C10.7748894,11.1588913 10.7548946,11.4283987 10.7548946,11.6975342 L10.7548946,16.7411734 L7.73457208,16.7411734 C7.73457208,16.7411734 7.77409657,8.5583491 7.73457208,7.71146523 L10.7553596,7.71146523 L10.7553596,8.99162555 C11.1563705,8.37649203 11.8729729,7.4990119 13.477156,7.4990119 C15.4654707,7.4990119 16.9563347,8.78884399 16.9563347,11.5636639 L16.9563347,16.7413593 Z M4.55280357,6.47798976 L4.53248332,6.47798976 C3.51912172,6.47798976 2.86222458,5.78497064 2.86222458,4.91734826 C2.86222458,4.03224231 3.53841897,3.35800873 4.57186832,3.35800873 C5.60541067,3.35800873 6.24115058,4.03205632 6.26123833,4.91734826 C6.26123833,5.78515663 5.60564317,6.47798976 4.55280357,6.47798976 Z M3.0415728,16.7413593 L6.06342984,16.7413593 L6.06342984,7.71160472 L3.0415728,7.71160472 L3.0415728,16.7413593 Z M18.5232253,0 L1.4777512,0 C0.661547082,0 0,0.641358883 0,1.43295561 L0,18.5664399 C0,19.3580366 0.661779579,20 1.4777512,20 L18.5232253,20 C19.3391969,20 20,19.3576181 20,18.5664399 L20,1.43295561 C20,0.641591377 19.3391969,0 18.5232253,0 Z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="flex flex-col md:flex-row text-center text-gray-400">
            <div className="flex flex:inline mx-auto mt-4 md:mt-0">
              <img className="h-8 w-8" src="/favicon.ico" />
              <p className="mt-2 md:mt-0 sm:ml-2 ml-1 text-sm md:pt-2 text-gray-300">
                Native public cloud service.
              </p>
            </div>

            <div className="md:hidden mt-10">
              <p className="text-md font-semibold text-gray-100">
                Call us: +2347057721442
              </p>
              <p className="text-md font-semibold text-gray-100">
                media.marketing@nobus.io
              </p>
            </div>
            <p className="mt-4 md:mt-0 ml-2 text-sm font-semibold pt-2 text-gray-100">
              © 2024 Nkponani Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
   
  );
}

export default Footer;
