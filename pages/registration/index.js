import Head from "next/head";
// import Script from "next/script";
// import axios from "axios";
// import { apiEndpoint } from "../config";
import React, { useState, useEffect } from "react";
import HeaderRegister from "../../components/HeaderRegister";
import Footer2 from "../../components/Footer2";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { XIcon } from "@heroicons/react/outline";

const recentPosts = [
  { id: 1, name: "Migrate to the cloud with no doubt", href: "/blog" },
  {
    id: 4,
    name: "Cloud Adoption in Nigeria",
    href: "/blog",
  },
  {
    id: 6,
    name: "Introducing Nobus Flexible Compute Services (FCS)",
    href: "/blog",
  },
];
// const client = axios.create({
//   baseURL: "https://",
// });

const index = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [project, setProject] = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postal, setPostal] = useState("");
  const [dialup, setDialup] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password must be the same.");
      return false;
    }

    if (password.length !== confirmPassword.length) {
      alert("Password must be at least 8 digits long.");
      return false;
    }
    const data = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      confirmPassword: confirmPassword,
      email: email,
      company: company,
      project: project,
      country: country,
      street: street,
      city: city,
      region: region,
      postal: postal,
      dialup: dialup,
    };

    setIsPending(true);

    const JSONdata = JSON.stringify(data);

    const endpoint = "http://localhost:8000/users";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    await fetch(endpoint, options)
      .then((res) => {
        if (res.status !== 201) {
          throw new Error(res.statusText);
        }

        return res.json();
      })
      .then((res) => {
        console.log(res);
        console.log("post successfull");
        setSuccess("Successful...please check your confirmation email.");
        setError(false);
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("post unsuccessfull");
        setSuccess(false);
        setError(err.toString());
      });
  };

  return (
    <section>
      <Head>
        <title>Nobus | Registration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:col-span-2 md:mt-0 ">
              <HeaderRegister />
              <form onSubmit={handleSubmit} className="px-4">
                <div className="overflow-hidden  sm:rounded-md border-t ">
                  <div className="py-5 text-center">
                    <h3 className="text-xl font-medium leading-relax tracking-wider text-gray-500 pt-4">
                      SIGN UP TO NOBUS CLOUD SERVICES
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Please fill the form below.
                    </p>
                  </div>
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-4 gap-x-2 gap-y-5">
                      <div className="col-span-6 sm:col-span-2 ">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          name="firstName"
                          id="firstName"
                          placeholder="Enter first name"
                          required
                          autocomplete="firstName"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          name="lastName"
                          id="lastName"
                          autocomplete="lastName"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          autocomplete="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          pattern="[a-z0-9]{8,}"
                          title="Password should be digits (0 to 9) or alphabets (a to z)."
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>
                      <div className="col-span-6 sm:col-span-3 ">
                        <label
                          htmlFor="confirmPassword"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Confirm password
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          autocomplete="confirmPassword"
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          pattern="[a-z0-9]{8,}"
                          title="Password should be digits (0 to 9) or alphabets (a to z)."
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          autocomplete="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Company name
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          autocomplete="company"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                        <label
                          htmlFor="project"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Project name
                        </label>
                        <input
                          type="text"
                          name="project"
                          id="project"
                          autocomplete="project"
                          required
                          value={project}
                          onChange={(e) => setProject(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          autocomplete="country"
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="street"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Street address
                        </label>
                        <input
                          type="text"
                          name="street"
                          id="street"
                          required
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                          autocomplete="street-address"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autocomplete="city"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autocomplete="region"
                          required
                          value={region}
                          onChange={(e) => setRegion(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name="postal"
                          id="postal"
                          autocomplete="postal"
                          required
                          value={postal}
                          onChange={(e) => setPostal(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Dial Up
                        </label>
                        <PhoneInput
                          type="text"
                          name="phone"
                          id="phone"
                          autocomplete="phone"
                          required
                          placeholder="Enter phone number"
                          value={dialup}
                          onChange={setDialup}
                          // pattern="^\+?1?\d{9,15}$"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 pb-20 md:pb-5 text-right sm:px-6">
                  {!isPending && (
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center tracking-wide leading-relax rounded-md border border-transparent bg-blue-600 py-2 px-4 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  )}
                  {isPending && (
                    <button
                      type="submit"
                      disabled
                      className="w-full inline-flex justify-center tracking-wide leading-relax rounded-md border border-transparent bg-blue-600 py-2 px-4 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Registration in progress...
                    </button>
                  )}
                </div>
              </form>
              <div
                style={{ display: visible ? "block" : "none" }}
                className="fixed inset-x-0 top-20 mx-80"
              >
                {success && (
                  <div className="flex flex-wrap bg-blue-600 w-50 px-3 py-2 text-md text-white font-semibold justify-between">
                    <div className="flex w-0 flex-1 p-2">{success}</div>{" "}
                    <div className="order-2 flex-shrink-0 sm:order-3 bg-blue-600">
                      <button
                        type="button"
                        onClick={() => setVisible(!visible)}
                        className="-mr-1 p-2 bg-blue-600 hover:bg-blue-400 rounded-full focus:outline-none sm:-mr-2"
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
                  <div className="flex flex-wrap bg-red-600 w-50 px-3 py-2 text-md text-white font-semibold justify-between">
                    <div className="flex w-0 flex-1 p-2">{error}</div>{" "}
                    <div className="order-2 flex-shrink-0 sm:order-3 bg-red-600">
                      <button
                        type="button"
                        onClick={() => setVisible(!visible)}
                        className="-mr-1 p-2 bg-red-600 hover:bg-red-400 rounded-full focus:outline-none sm:-mr-2"
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
            <div className="md:col-span-1 bg-gray-900 ">
              <div className="px-0">
                <img className="w-full" src="/das.png" alt="" />
              </div>
              <div className="px-5 py-5 sm:px-8 sm:py-8">
                <div>
                  <h3 className="text-base font-medium text-white">
                    Recent Blog Posts
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {recentPosts.map((post) => (
                      <li key={post.id} className="truncate text-base">
                        <a
                          href={post.href}
                          className="font-medium text-gray-400 hover:text-gray-500"
                        >
                          {post.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 text-base">
                  <a
                    href="/blog"
                    className="font-medium text-blue-500 hover:text-blue-400"
                  >
                    View all blog posts
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4">
          <Footer2 />
        </div>
      </div>
    </section>
  );
};

export default index;
