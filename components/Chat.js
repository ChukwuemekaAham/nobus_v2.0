import React from "react";
import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  Tab,
  Transition,
} from "@headlessui/react";
import { ChatAlt2Icon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Chat() {
  return (
    <div>
      <Popover.Group className="block self-stretch">
        <div className="flex h-full space-x-8">
          <Popover className="flex">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "focus:scale-125 outline-black" : "outline-black",

                    "group fixed right-10 bottom-10 w-10 my-1 outline hover:scale-125 shadow-xl rounded-full bg-black cursor-pointer p-2 text-white"
                  )}
                >
                  {!open && (
                    <ChatAlt2Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                  {open && <XIcon className="h-6 w-6" aria-hidden="true" />}
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    className="absolute rounded-2xl sm:right-20 z-10 top-10 sm:top-20 w-screen max-w-md -translate-x-2/5 transform px-2 sm:px-0"
                    style={{
                      backgroundImage: "url('/cont6.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                      <div className="w-full max-w-md space-y-8">
                        <div>
                          <img
                            className="mx-auto h-12 w-auto"
                            src="/favicon.ico"
                            alt="Your Company"
                          />
                          <h2 className="mt-6 text-center text-xl font-semibold tracking-wide text-gray-100">
                            Chat unavailable right now
                          </h2>
                          <p className="mt-2 text-center text-sm font-medium text-gray-100">
                            please take some time to tell us about your project
                          </p>
                        </div>
                        <form
                          className="mt-8 space-y-8"
                          action="#"
                          method="POST"
                        >
                          <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                          />
                          <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                              <label htmlFor="name" className="sr-only">
                                Name
                              </label>
                              <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Full name"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email-address"
                                className="sr-only"
                              >
                                Email address
                              </label>
                              <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address"
                              />
                            </div>

                            <div>
                              <label htmlFor="message" className="sr-only">
                                Message
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Send
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </Popover.Group>
    </div>
  );
}

export default Chat;
