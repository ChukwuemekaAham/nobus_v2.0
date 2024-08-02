import Head from "next/head";
import { React, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer1";
import { PhoneIcon } from "@heroicons/react/outline";
import SidebarDocs from "../../../components/SidebarDocs";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
import Quickstart from "../../../components/fosdoc/Quickstart";

function index() {
  const [open, setOpen] = useState(true);

  return (
    <section>
      <Head>
        <title> Documentation - Nobus Flexible Object Storage </title>
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
                  <ChevronDoubleRightIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className="rounded-full bg-gray-100 p-2 text-gray-400 shadow-md"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <ChevronDoubleLeftIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              )}
              <h1 className="pl-2 pt-2 text-lg font-medium text-gray-500 ">
                FOS Documentation
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

          <div
            className={`lg:col-span-3 bg-gray-200 h-[600px] overflow-y-scroll scrollbar-hide ${
              !open && "lg:col-span-4"
            }`}
          >
            <div className="p-5">
              <div className={`bg-white shadow-lg border border-gray-300`}>
                <div id="overview" className="flex-col p-5 lg:p-10">
                  <h1 className="pb-10 text-center">
                    Nobus Flexible Object Storage
                  </h1>
                  <section className="mx-auto text-justify">
                    <div className="space-y-5">
                      <p>
                        Nobus Flexible Object Storage (Nobus FOS) is an
                        extensive storage system for large amounts of data which
                        can be retrieved and updated. Nobus Flexible Object
                        Storage provides a distributed storage platform that can
                        be used to store any type or amount of file, including
                        backups, archives, or media files. In the Nobus console,
                        you can only manage containers and objects.
                      </p>
                      <p>
                        In Nobus Flexible Object Storage, containers provide
                        storage for objects like a directory, though not nested
                        and you can have multiple containers. To store an object
                        in Nobus FOS, you have to upload the file you want to
                        store to a container. When you upload a file, you can
                        create restrictions on the object and any metadata. For
                        each container, you can determine who can create,
                        delete, and list objects in the container, view access
                        logs for it and its objects, and select zone where the
                        the container and its contents will be stored.
                      </p>
                      <p>
                        An object in Nobus Flexible consists of the file to be
                        stored in the container and associated metadata. Nobus
                        Flexible Object Storage (Nobus FOS) is suited for the
                        internet. Storage of data in FOS can be accomplish using
                        the Nobus FOS Console.
                      </p>
                      <h4>Setting up Nobus FOS</h4>
                      <p>
                        When you sign up for Nobus, your Nobus account is
                        automatically signed up for all services in Nobus,
                        including Nobus FOS. You are charged only for the
                        services that you use. With Nobus FOS, you pay only for
                        what you use. For more information about Nobus FOS
                        features and pricing, see{" "}
                        <a href="/pricing/fos/price">Nobus FOS Pricing</a>
                      </p>
                      <p>
                        To get started with Nobus FOS, see{" "}
                        <a href="/documentation/fos#quickstart">
                          FOS Quickstart Guide
                        </a>
                      </p>
                    </div>
                  </section>
                  <Quickstart />
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
