import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import { ChatAltIcon, ChartSquareBarIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Chat() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name,
      email,
      subject,
      message,
    };
    setIsPending(true);
    const BASE = process.env.NEXT_PUBLIC_BASE;
    fetch(`${BASE}/contact`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status !== 250) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((res) => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setSuccess("Message Sent");
        setError(false);
        setIsPending(false);
      })
      .catch((err) => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setSuccess(false);
        setIsPending(false);
        setError("Unable to send message at this time.");
      });
  };

  return (
    <div>
      <Popover.Group className="block self-stretch">
        <div className="flex h-full space-x-8">
          <Popover className="flex">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "focus:scale-125 outline-0" : "outline-0",

                    "group fixed right-6 md:right-10 bottom-5 sm:bottom-10 w-10 my-1 outline-none scale-125 shadow-xl rounded-full bg-[#03A731]  cursor-pointer p-2 text-white"
                  )}
                >
                  {!open && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                      <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                    </svg>
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
                    className="fixed p-4 bottom-[95px] right-4 bg-white rounded-xl shadow-lg w-full max-w-sm z-50 "
                    style={{
                      backgroundImage: "url('/cont6.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="flex items-center justify-between text-white">
                      <div className="w-full max-w-md text-center">
                        <div className="flex justify-between">
                          <div className="flex-col">
                            <p className="text-xl italic ">Support</p>
                          </div>

                          <div className="flex-col">
                            <button className="">
                              <DotsVerticalIcon
                                aria-hidden="true"
                                className="h-6 w-6 text-white font-bold"
                              />
                            </button>
                          </div>
                        </div>

                        <h4 className="text-white mt-4">
                          Chat unavailable right now
                        </h4>
                        <p className="text-white">
                          please tell us about your project
                        </p>

                        <form
                          onSubmit={handleSubmit}
                          className="mt-8 space-y-4"
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
                                value={name}
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                                autoComplete="name"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 text-[14px] md:text-sm px-1 py-1 md:px-3 md:py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
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
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded-none border border-gray-300 text-[14px] md:text-sm px-1 py-1 md:px-3 md:py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                placeholder="Email address"
                              />
                            </div>
                            <div>
                              <label htmlFor="subject" className="sr-only">
                                Subject
                              </label>
                              <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={subject}
                                onChange={(e) => {
                                  setSubject(e.target.value);
                                }}
                                autoComplete="subject"
                                required
                                className="relative block w-full appearance-none rounded-none border border-gray-300 text-[14px] md:text-sm px-1 py-1 md:px-3 md:py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                placeholder="Subject"
                              />
                            </div>

                            <div>
                              <label htmlFor="message" className="sr-only">
                                Message
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => {
                                  setMessage(e.target.value);
                                }}
                                rows={4}
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 text-[14px] md:text-sm px-1 py-1 md:px-3 md:py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>

                          <div>
                            {!isPending && (
                              <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              >
                                Send message
                              </button>
                            )}
                            {isPending && (
                              <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              >
                                Sending...
                              </button>
                            )}
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
      <div
        style={{ display: visible ? "block" : "none" }}
        className="fixed inset-x-0 bottom-10 ml-10 mr-10 sm:mr-[300px] md:mr-[500px] lg:mr-[700px] xl:mr-[900px]"
      >
        {success && (
          <div className="flex flex-wrap bg-gray-800 shadow-lg w-50 px-3 py-2 text-md text-white font-semibold justify-between rounded-md">
            <div className="flex w-0 flex-1 p-2">{success}</div>{" "}
            <div className="order-2 flex-shrink-0 sm:order-3 bg-gray-800">
              <button
                type="button"
                onClick={() => setVisible(!visible)}
                className="-mr-1 p-2 bg-gray-800 hover:bg-gray-600 rounded-full focus:outline-none sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon
                  className="h-6 w-6 text-white hover:scale-95"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        )}
        {error && (
          <div className="flex flex-wrap bg-red-600 w-50 px-3 py-2 shadow-lg text-md text-white font-semibold justify-between rounded-md">
            <div className="flex w-0 flex-1 p-2">{error}</div>{" "}
            <div className="order-2 flex-shrink-0 sm:order-3 bg-red-600">
              <button
                type="button"
                onClick={() => setVisible(!visible)}
                className="-mr-1 p-2 bg-red-600 hover:bg-red-500 rounded-full focus:outline-none sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon
                  className="h-6 w-6 text-white hover:scale-95"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
