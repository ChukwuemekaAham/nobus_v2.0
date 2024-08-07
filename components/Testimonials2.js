import { useState } from "react";

const testimonials = [
  {
    title: "Bento Africa",
    quote:
      "I am beating myself as to why we didn't switch to Nobus Cloud Services 3 years ago. The service has been seamless. They have the infrastructure and they are building more capacity.",
    name: "Ebun O.",
    position: "CEO, Bento Africa",
    company: "Bento Africa",
    logo: "/bento.png",
  },
  {
    title: "Vendease",
    quote:
      "We are satisfied with the service so far from the Nobus Cloud team. Good to have a local cloud provider.",
    logo: "/vendease.png",
  },
  {
    title: "Paay.ng",
    quote:
      "As a startup, moving to a local cloud provider like Nobus Cloud has allowed us to access premium service at very affordable cost. we are truly happy with the service so far.",
    name: "Nonso Ohakwe",
    company: "Paay.ng",
    logo: "/paay.png",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What our customers are saying about us
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Don't just take our words, hear from our users
        </p>
        <div className="relative bg-[#F9FAFE] p-6 sm:p-6 lg:px-28 rounded-2xl border border-[#CADCF5] shadow-custom mx-auto max-w-2xl lg:max-w-4xl">
          <svg
            className="absolute -top-4 left-0 ml-4 text-blue-600"
            width="65"
            height="44"
            viewBox="0 0 65 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.1877 16.947V0H25.0119C9.10927 0 0 9.32862 0 24.7208V44H21.4608V27.053C21.4608 20.8339 23.7767 16.947 28.563 16.947H31.1877ZM65 16.947V0H58.8242C42.9216 0 33.8124 9.32862 33.8124 24.7208V44H55.2732V27.053C55.2732 20.8339 57.5891 16.947 62.3753 16.947H65Z"
              fill="#0568FD"
            />
          </svg>

          <svg
            className="absolute -bottom-8 right-0 mb-4 mr-4 text-blue-600"
            width="65"
            height="45"
            viewBox="0 0 65 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.8123 27.8421V44.7891H39.9881C55.8907 44.7891 65 35.4604 65 20.0683V0.789062H43.5392V17.7361C43.5392 23.9552 41.2233 27.8421 36.437 27.8421H33.8123ZM0 27.8421V44.7891H6.1758C22.0784 44.7891 31.1876 35.4604 31.1876 20.0683V0.789062H9.7268V17.7361C9.7268 23.9552 7.4109 27.8421 2.6247 27.8421H0Z"
              fill="#0568FD"
            />
          </svg>

          <div className="flex justify-between items-center absolute top-1/2 transform -translate-y-1/2 w-full px-4">
            <button onClick={handlePrev}>
              <svg
                className="absolute right-[61rem] -top-[2.5rem] bg-white pb-2 px-3 rounded-full"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-0.5"
                  y="0.5"
                  width="63"
                  height="63"
                  rx="31.5"
                  transform="matrix(-1 0 0 1 78 15)"
                  stroke="#6884C2"
                  stroke-opacity="0.96"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.3544 36.832L31.3283 46.9903L41.3565 57.1486L43.1192 55.4086L36.0292 48.2287H62.9961V45.7519H36.0292L43.1192 38.572L41.3544 36.832Z"
                  fill="#0664F7"
                />
              </svg>
            </button>
            <button onClick={handleNext}>
              <svg
                className="absolute left-[46rem] -top-[2.5rem] bg-white pb-2 px-2 rounded-full"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="47.5" cy="47.5" r="47.5" fill="white" />
                <rect
                  x="16.5"
                  y="15.5"
                  width="63"
                  height="63"
                  rx="31.5"
                  stroke="#6884C2"
                  stroke-opacity="0.96"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M53.6456 36.832L63.6717 46.9903L53.6435 57.1486L51.8808 55.4086L58.9708 48.2287H32.0039V45.7519H58.9708L51.8808 38.572L53.6456 36.832Z"
                  fill="#0664F7"
                />
              </svg>
            </button>
          </div>
          <div className="sm:px-0 lg:px-4 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {testimonials[currentIndex].title}
            </h3>
            <p className="text-gray-700 mb-4">
              {testimonials[currentIndex].quote}
            </p>
            <div className="flex items-center justify-center mt-4">
              <img
                src={testimonials[currentIndex].logo}
                alt={testimonials[currentIndex].company}
                className="h-12 w-50 mr-4"
              />
              <div>
                <p className="text-gray-900 font-semibold">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].position}{" "}
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
