import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer2 from "../../components/Footer2";
import { XIcon } from "@heroicons/react/outline";

function support() {
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

    const BASE = process.env.NEXT_PUBLIC_BASE

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
        setIsPending(false);
        setError("Unable to send message at this time.");
      });
  };

  return (
    <div className="h-screen">
      <Head>
        <title>Nobus | Technical Support</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="grid grid-cols-1 lg:gap-y-10 gap-x-4 md:gap-x-0 lg:grid-cols-2 lg:p-20">
        <div
          className="flex-col text-left justify-center p-10"
          style={{
            backgroundImage: "url('/help.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="pb-4 text-2xl md:text-3xl lg:text-4xl tracking-wider leading-relaxed font-bold text-white">
            Technical Support
          </h1>
          <p className="text-xl lg:text-2xl font-semibold text-white tracking-wide leading-relaxed pb-4">
            Have a general inquiry?
            {/*  */}{" "}
            <span>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                contact our team.
              </a>
            </span>{" "}
          </p>

          <p className="text-xl lg:text-2xl font-semibold text-white tracking-wide leading-relaxed pb-5">
            Call Us:
            {/*  */}{" "}
            <span>
              <a className="text-blue-500">+234 (0) 805-2995-476</a>
            </span>{" "}
          </p>
        </div>
        <div className="flex-col">
          <div className="w-full lg:max-w-md space-y-8 bg-gray-200 p-8">
            <div>
              <h2 className="mt-6 text-center text-xl font-semibold tracking-wide text-gray-800">
                Make an appointment
              </h2>
              <p className="mt-2 text-center text-sm font-medium text-gray-600">
                our support team will be in touch within 24hrs.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-8 px-4 sm:px-6 lg:px-8"
            >
              <input type="hidden" name="remember" defaultValue="true" />
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
                  <label htmlFor="email-address" className="sr-only">
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
      <div className="px-10">
        <Footer2 />
      </div>
    </div>
  );
}

export default support;
