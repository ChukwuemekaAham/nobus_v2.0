import { ArrowRightIcon } from "@heroicons/react/solid";
import Image from "next/image";

const SimpleMonthlyCalculator = () => {
  return (
    <section
      className=" flex items-center justify-center h-3/4 lg:h-auto pt-8 lg:pt-0"
      style={{ background: "linear-gradient(90deg, #0664F7 0%, #180D77 100%)" }}
    >
      <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-between">
        <div className="text-white lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl text-white lg:text-4xl font-bold ">
            Simple Monthly Calculator
          </h1>
          <h2 className="text-base text-white lg:text-2xl mb-10">
            Get an insight into how our billing works
          </h2>
          <p className="text-base text-white lg:text-lg mb-8 text-center lg:text-justify px-6 md:px-0 md:max-w-xl lg:max-w-lg">
            Calculate your average cost per month with our simple monthly
            calculator. Low Ongoing Cost; pay as you use pricing with flexible
            expenses, of short or long term commitments, without requiring
            complex licensing
          </p>
          <a
            href="/simple-monthly-calculator"
            className="inline-flex items-center cursor-pointer justify-center border border-white text-white rounded-md py-3 px-12 hover:text-white"
          >
            Calculate
            <span className="pl-2" aria-hidden="true">
              {" "}
              &rarr;
            </span>
          </a>
        </div>
        <div className="relative lg:w-1/2 flex items-center mt-20 lg:mt-0 justify-center lg:justify-end">
          <div className="relative w-full h-80 lg:h-auto lg:max-w-md pt-8 lg:pt-0 -mt-24 lg:mt-0">
            <img
              src="/calculator-illusration.png"
              alt="Cloud Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleMonthlyCalculator;
