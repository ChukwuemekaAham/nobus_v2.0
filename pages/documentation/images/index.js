import Head from "next/head";
import { React, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  PhoneIcon,
} from "@heroicons/react/outline";
import SidebarDocs from "../../../components/SidebarDocs";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/solid";

function index() {
  const [open, setOpen] = useState(true);

  return (
    <section>
      <Head>
        <title> Documentation - Nobus Image Services  </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex px-5 py-3 justify-between shadow-2xl border-y border-gray-300">
          <div className="flex">
          <div className="flex">
          {!open ? (
              <button
                type="button"
                className="rounded-full bg-gray-100 p-2 text-gray-400 shadow-md"
                onClick={() => setOpen(true)}
                >
                <span className="sr-only">Open menu</span>
                <ChevronDoubleRightIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            ) : ( <button
              type="button"
              className="rounded-full bg-gray-100 p-2 text-gray-400 shadow-md"
              onClick={() => setOpen(false)}
              >
              <span className="sr-only">Close menu</span>
              <ChevronDoubleLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button> 
            )
          }
             <h1 className="pl-2 pt-2 text-lg font-medium text-gray-500 ">
             Image Service Documentation
            </h1>
            </div>
            
          </div>
          <div className="flex">
            <a href="/contact/support">
              <div className="flex justify-center px-2 py-2 sm:mt-0 sm:ml-4 sm:w-40 hover:bg-blue-50 hover:shadow-lg active:scale-90 rounded cursor-pointer border font-semibold text-md bg-white text-gray-500 border-gray-400">
                <PhoneIcon className="h-6" />
                <span className="inline-flex ml-2">Support</span>
              </div>
            </a>
          </div>
        </div>
        <div className={`grid grid-cols-1 lg:grid-cols-4`}>
          <div className={`${!open && "hidden"}`}> 
            <SidebarDocs open={open} setOpen={setOpen} />
          </div>
        
          <div className={`lg:col-span-3 bg-gray-200 h-[600px] overflow-y-scroll scrollbar-hide ${!open && "lg:col-span-4"}`}>
            <div className="p-5">
              <div className={`bg-white shadow-lg border border-gray-300`}>
                <div className="flex-col p-5 lg:p-10">
                  <h1 className="text-3xl">Nobus Image Service</h1>

                </div>
                
              </div>
              <div className="p-5 text-sm tracking-wide leading-relaxed">
                <p>Except otherwise...</p>
              </div>
            </div>
            <div className="overflow-hidden">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default index;
