import { MailIcon } from '@heroicons/react/outline';

const SubscribeSection = () => {
  return (
    <section className=" items-center justify-center bg-[#0A0A23] pt-16  overflow-hidden z-0">
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <MailIcon className="h-12 w-12 text-white mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-4">Subscribe to our newsletter</h2>
        <p className="text-lg text-gray-300 mb-8">
          Sign up to our newsletter to receive our latest news and products. Stay updated on the latest developments and special offers!
        </p>
        <div className="flex justify-center">
          <a
            href="https://mailchi.mp/f64c53b780c8/nobus-newsletter"
            className="flex items-center justify-center border border-white text-white rounded-md py-3 mb-12 px-6 hover:bg-white hover:text-blue-600 transition-colors duration-200"
          >
            <span className="mr-2">Subscribe</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-gray-400 mt-5 text-center mb-3">
        *Interesting news headlines and educating contents to boost your cloud initiative.
      </p>
    </section>
  );
};

export default SubscribeSection;
