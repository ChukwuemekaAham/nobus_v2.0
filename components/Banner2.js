import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/outline";

const Banner2 = () => {
  return (
    <section className="relative bg-[#000026] min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full z-0 animate-[pulse_5s_ease-in-out_infinite] overflow-hidden">
        <Image
          src="/line.png"
          alt="Line design"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 text-center text-white px-6 lg:px-8 -mt-40">
        <h1 className="text-4xl text-white sm:text-5xl md:text-6xl font-extrabold mb-4 lg:px-12">
          Explore Your Native Cloud Platform
        </h1>
        <p className="text-base max-w-sm mx-auto md:max-w-none sm:text-lg mb-4 sm:mb-8">
          Start deploying your workload on Africa’s fastest-growing cloud
          platform!
        </p>
        <div className="flex flex-col mt-10 sm:flex-row justify-center place-items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 ">
          <a
            href="/registration"
            className="bg-blue-600 hover:bg-blue-700 hover:text-white text-white font-semibold py-4 px-6 w-full max-w-xs sm:w-auto rounded-md shadow-md text-center"
          >
            Get Started for Free
          </a>
          <a
            href="/demo"
            className="flex items-center justify-center bg-transparent border-2 border-white text-white hover:text-white font-semibold py-4 px-6 w-full max-w-xs sm:w-auto rounded-md shadow-md"
          >
            <img src="/phone.svg" /> <span className="pl-2">Request Demo</span>
          </a>
        </div>

        {/* <div className="mt-8">
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
            Learn more about Nobus cloud migration deals
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Banner2;