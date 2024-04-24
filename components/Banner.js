import { PlayIcon } from "@heroicons/react/solid";

function Banner() {
  return (
    <div
      className="flex flex-col pt-5 md:py-0 lg:flex-row bg-hero overflow-hidden"
      style={{
        backgroundImage: "url('/ellipse.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        objectPosition: "left",
      }}
    >
      <main class="mx-auto my-4 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-18 lg:pr-0 lg:mt-36 lg:ml-10 lg:inset-y-0 lg:right-0 lg:w-1/2 xl:mt-38">
        <div className="text-left sm:text-center lg:text-left">
          <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-[60px]">
            <span className="block xl:inline">Explore Your Native </span>
            <span className="block text-blue-600 xl:inline ">
              Public Cloud Platform
            </span>
          </h1>
          <p className="pl-1 mt-3 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg  md:text-xl md:mt-5 lg:text-xl lg:pr-40 lg:mx-0 lg:tracking-wider lg:leading-relaxed text-base text-gray-900 ">
            Start Deploying Your Workload on the Nobus Platform.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <a href="/registration">
              <button className="w-full sm:w-40 px-4 py-3 md:py-4 rounded hover:shadow-lg active:scale-90 cursor-pointer font-semibold text-md bg-blue-600 text-white border-2 border-blue-600">
                Get Started
              </button>
            </a>
            <a href="/demo">
              <div className="flex justify-center mt-4 py-3 md:py-4 sm:mt-0 sm:ml-4 sm:w-40 hover:bg-blue-50 hover:shadow-lg active:scale-90 rounded cursor-pointer border font-semibold text-md bg-white text-blue-600 border-blue-500">
                <PlayIcon className="h-6" />
                <span className="inline-flex ml-2"> Watch Demo</span>
              </div>
            </a>
          </div>
        </div>
      </main>
      <div className="flex lg:inset-y-0 lg:right-0 lg:w-3/5 mt-2 md:mt-10 lg:mt-0">
        <img
          priority
          src="/banner.png"
          className="w-full h-[175px] sm:h-[300px] md:h-96 lg:h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Banner;
