import Head from "next/head";
import axios from "axios";
import { apiEndpoint } from "../config";
import React, { useState, useEffect } from "react";
import HeaderRegister from "../components/HeaderRegister";
import Footer2 from "../components/Footer2";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

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
const client = axios.create({
  baseURL: "https://637e14ebcfdbfd9a63a69e8e.mockapi.io/regData",
});

const registration = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [dialup, setDialup] = useState();

  // const data = {
  //   firstName,
  //   lastName,
  // };

  // function postData() {
  //   client
  //     .post(JSON.stringify(data), {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  return (
    <section>
      <Head>
        <title>Nobus | Registration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="">
        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="mt-5 md:col-span-2 md:mt-0 ">
              <HeaderRegister />
              <form className="px-4">
                <div class="overflow-hidden  sm:rounded-md border-t ">
                  <div class="py-5 text-center">
                    <h3 class="text-xl font-medium leading-relax tracking-wider text-gray-500 pt-4">
                      SIGN UP TO NOBUS CLOUD SERVICES
                    </h3>
                    <p class="mt-1 text-sm text-gray-600">
                      Please fill the form below.
                    </p>
                  </div>
                  <div class="bg-white px-4 py-5 sm:p-6">
                    <div class="grid grid-cols-4 gap-x-2 gap-y-5">
                      <div class="col-span-6 sm:col-span-2 ">
                        <label
                          for="firstName"
                          class="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          // value={firstName}
                          // onChange={(e) => setFirstName(e.target.value)}
                          name="firstName"
                          id="firstName"
                          placeholder="Enter first name"
                          required
                          autocomplete="givenName"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="lastName"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          // value={lastName}
                          // onChange={(e) => setLastName(e.target.value)}
                          name="lastName"
                          id="lastName"
                          autocomplete="familyName"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>
                      <div class="col-span-6 sm:col-span-2">
                        <label
                          for="password"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          autocomplete="password"
                          required
                          pattern="[a-z0-9]{8,}"
                          title="Password should be digits (0 to 9) or alphabets (a to z)."
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>
                      <div class="col-span-6 sm:col-span-3 ">
                        <label
                          for="confirm-password"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Confirm password
                        </label>
                        <input
                          type="password"
                          name="confirm-password"
                          id="confirm-password"
                          autocomplete="confirm-password"
                          required
                          pattern="[a-z0-9]{8,}"
                          title="Password should be digits (0 to 9) or alphabets (a to z)."
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div class="col-span-6 sm:col-span-2">
                        <label
                          for="email-address"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autocomplete="email"
                          required
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="company-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Company name
                        </label>
                        <input
                          type="text"
                          name="company-name"
                          id="company-name"
                          autocomplete="company-name"
                          required
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div class="col-span-6 sm:col-span-2 lg:col-span-2">
                        <label
                          for="project-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Project name
                        </label>
                        <input
                          type="text"
                          name="project-name"
                          id="project-name"
                          autocomplete="project-name"
                          required
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="country"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          autocomplete="country-name"
                          required
                          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div class="col-span-6">
                        <label
                          for="street-address"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Street address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          required
                          autocomplete="street-address"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          for="city"
                          class="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autocomplete="address-level2"
                          required
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          for="region"
                          class="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autocomplete="address-level1"
                          required
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          for="postal-code"
                          class="block text-sm font-medium text-gray-700"
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autocomplete="postal-code"
                          required
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></input>
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label
                          for="phone-number"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Dial Up
                        </label>
                        <PhoneInput
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          autocomplete="address-level2"
                          required
                          placeholder="Enter phone number"
                          value={dialup}
                          onChange={setDialup}
                          pattern="^\+?1?\d{9,15}$"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 pb-20 md:pb-5 text-right sm:px-6">
                    <button
                      type="submit"
                      // onClick={postData}
                      class="w-full inline-flex justify-center tracking-wide leading-relax rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-md font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="md:col-span-1 bg-gray-900 ">
              <div class="px-0">
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
                <div className="mt-5 text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
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

export default registration;
