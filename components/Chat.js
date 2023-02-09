import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import { ChatAltIcon } from "@heroicons/react/solid";

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

    const endpoint = process.env.CONTACT_ENDPOINT;

    fetch(endpoint, {
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
        console.log(res);
        console.log("post successfull");
        setSuccess("Message Sent");
        setError(false);
        setIsPending(false);
      })
      .catch((err) => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        console.log(err);
        console.log("Message Unsuccessfull");
        setSuccess(false);
        setError(err.toString());
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
                    open ? "focus:scale-125 outline-black" : "outline-black",

                    "group fixed right-10 bottom-10 w-10 my-1 outline hover:scale-125 shadow-xl rounded-full bg-black cursor-pointer p-2 text-white"
                  )}
                >
                  {!open && (
                    <ChatAltIcon className="h-6 w-6" aria-hidden="true" />
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
                    className="absolute rounded-3xl right-10 sm:right-20 z-10 top-10 sm:top-20 w-screen max-w-sm -translate-x-2/5 transform"
                    style={{
                      backgroundImage: "url('/cont6.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="flex min-h-full items-center justify-center pb-10">
                      <div className="w-full max-w-md space-y-8">
                        <div className="flex rounded-t-2xl shadow-lg pl-4 pr-2 py-3 bg-white justify-between">
                          <div className="flex-col">
                            <span className="flex">
                              <img
                                className="h-6 w-auto"
                                src="/logo.png"
                                alt="nobus cloud"
                              />
                              {/* <p className="text-lg text-stone-700 italic font-bold tracking-tight leading-relaxed ml-4">
                                Support
                              </p> */}
                            </span>
                          </div>

                          <div className="flex-col">
                            <button className="bg-white">
                              <DotsVerticalIcon
                                aria-hidden="true"
                                className="h-6 w-6 text-gray-800 font-bold"
                              />
                            </button>
                          </div>
                        </div>
                        <div>
                          <h2 className="mt-6 text-center text-base font-bold tracking-wide leading-relaxed text-gray-100">
                            Chat unavailable right now
                          </h2>
                          <p className="mt-2 text-center text-sm tracking-wide leading-relaxed font-medium text-gray-100">
                            please take some time to tell us about your project
                          </p>
                        </div>
                        <form
                          onSubmit={handleSubmit}
                          className="mt-8 space-y-8 px-4 sm:px-6 lg:px-8"
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
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
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
                                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
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
                                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
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
                                rows={5}
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
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
