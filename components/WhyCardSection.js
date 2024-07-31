import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const data = [
  {
    title: "Tier III Data Center",
    description:
      "Tier III Data center facility, built with global standards of security and operations",
    icon: "/antenna.png",
  },
  {
    title: "Low Ongoing Cost",
    description:
      "Pay-as-you-use pricing with flexible expenses, and short or long term commitments",
    icon: "/satellite.png",
  },
  {
    title: "Speed & Agility",
    description:
      "Build your instances today with our SSD backed FBS Volume. Develop and deploy applications faster",
    icon: "/satellite5.png",
  },
  {
    title: "Secure Platform",
    description:
      "Take advantage of the multiple layers of security, built into the Nobus Cloud Platform",
    icon: "/license-key5.png",
  },
  {
    title: "Project Focusedy",
    description:
      "Leverage our team of engineers to design and manage you resources, so you can focus on your core business and operation",
    icon: "/cyborg5.png",
  },
  {
    title: "Flexible Capacity",
    description:
      "Focus on projects. Shift resources away from data center investments & operations, and move the to innovative new projects",
    icon: "/blockchain.png",
  },
  {
    title: "24/7 Support",
    description:
      "Customers' success and business productivity is our priority - whether for on-site assistance, technical, or remote support",
    icon: "/walkie-talkie.png",
  },
  {
    title: "Global Standards",
    description:
      "Enjoy access to world-class tools and services at a minimal cost",
    icon: "/nodes.png",
  },
];

const Card = ({ title, description, icon }) => (
  <div className="bg-[#F9FAFE] p-6 rounded-lg flex flex-col items-center text-center border border-gray-300">
    <img src={icon} alt={title} className="h-12 w-12 mb-4" />
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PaginationDots = ({ currentPage, totalPages, setCurrentPage }) => (
  <div className="flex items-center justify-center mt-6 space-x-2">
    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        className={`h-3 w-3 rounded-full ${
          currentPage === index ? "bg-blue-600" : "bg-gray-300"
        }`}
        onClick={() => setCurrentPage(index)}
      />
    ))}
  </div>
);

const CardSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(data.length / cardsPerPage);

  return (
    <section className="py-8">
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-center">
        <button
          className="hidden md:block"
          onClick={() =>
            setCurrentPage(currentPage > 0 ? currentPage - 1 : totalPages - 1)
          }
        >
          <svg
            width="95"
            height="95"
            viewBox="0 0 95 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="47.5"
              cy="47.5"
              r="47.5"
              transform="matrix(-1 0 0 1 95 0)"
              fill="white"
            />
            <rect
              x="-0.5"
              y="0.5"
              width="63"
              height="63"
              rx="31.5"
              transform="matrix(-1 0 0 1 78 15)"
              stroke="#6884C2"
              strokeOpacity="0.4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.3544 36.832L31.3283 46.9903L41.3565 57.1486L43.1192 55.4086L36.0292 48.2287H62.9961V45.7519H36.0292L43.1192 38.572L41.3544 36.832Z"
              fill="#0664F7"
              fillOpacity="0.4"
            />
          </svg>
        </button>
        <div className="mx-auto max-w-2xl lg:mx-auto lg:flex lg:max-w-none lg:justify-center lg:px-28">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full">
            {data
              .slice(
                currentPage * cardsPerPage,
                (currentPage + 1) * cardsPerPage
              )
              .map((update, index) => (
                <Card
                  key={index}
                  title={update.title}
                  description={update.description}
                  icon={update.icon}
                />
              ))}
          </div>
        </div>
        <button
          className="hidden md:block"
          onClick={() => setCurrentPage((currentPage + 1) % totalPages)}
        >
          <svg
            width="95"
            height="95"
            viewBox="0 0 95 95"
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
              strokeOpacity="0.96"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M53.6456 36.832L63.6717 46.9903L53.6435 57.1486L51.8808 55.4086L58.9708 48.2287H32.0039V45.7519H58.9708L51.8808 38.572L53.6456 36.832Z"
              fill="#0664F7"
            />
          </svg>
        </button>
      </div>
      <PaginationDots
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <div className="flex justify-center mt-4 md:hidden">
        <button
          onClick={() => setCurrentPage((currentPage + 1) % totalPages)}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 95 95"
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
              strokeOpacity="0.96"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M53.6456 36.832L63.6717 46.9903L53.6435 57.1486L51.8808 55.4086L58.9708 48.2287H32.0039V45.7519H58.9708L51.8808 38.572L53.6456 36.832Z"
              fill="#0664F7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CardSection;
