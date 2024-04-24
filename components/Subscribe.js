import React from "react";

function Subcribe() {
  return (
    <section
      className="px-6 py-24 sm:py-32"
      style={{
        backgroundImage: "url('/subscribe.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div class="">
        <div class="mx-auto sm:max-w-7xl py-10 lg:flex lg:items-center lg:justify-between lg:py-16">
          <div className="sm:pr-6 text-white">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              <span className="xl:inline">Subscribe to our newsletter </span>{" "}
            </h2>
            <p className="py-4 text-md tracking-wide">
              Sign up to our newsletter to receive our latest news and products.
              Stay updated on the latest developments and special offers!
            </p>
          </div>

          <a href="https://mailchi.mp/f64c53b780c8/nobus-newsletter">
            <div class="mt-8 sm:flex lg:mt-0 lg:flex-shrink-0">
              <input
                class="w-full sm:w-60 sm:inline-flex items-center font-medium justify-center rounded-md px-5 py-3 text-base border border-gray-400"
                placeholder="Enter your email address"
              />

              <button class="mt-2 w-full sm:w-40 sm:mt-0 sm:ml-3 sm:inline-flex items-center justify-center bg-blue-600 rounded-md hover:shadow active:scale-90 cursor-pointer text-white text-md font-semibold px-2 py-3">
                Subscribe
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Subcribe;
