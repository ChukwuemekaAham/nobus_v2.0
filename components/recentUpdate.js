import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import useResponsive from "../hooks/useResponsive";

const updates = [
  {
    date: "September 15, 2024",
    category: "Security & Data",
    title: "New Sophos reinforcement for...",
    link: "#",
    image: "/ISO-blog.png",
  },
  {
    date: "May 12, 2024",
    category: "New Features",
    title: "Kubernetes features now available.",
    link: "#",
    image: "/kubernetes.png",
  },
  {
    date: "June 2, 2024",
    category: "Compliance & Legal",
    title: "We are now fully certified by the international...",
    link: "#",
    image: "/Link.png",
  },
  {
    date: "August 2, 2023",
    category: "Policies & Laws",
    title: "Top 10 international payroll tax mistakes and how to avoid...",
    link: "#",
    image: "/isoImg.png",
  },
];

const RecentUpdates = () => {
  const isSmallScreen = useResponsive("(max-width: 640px)");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get recent updates
          </h2>
          <p className="text-lg text-gray-600">
            Fresh ideas, insights and opinions from our newsroom.
          </p>
        </div>
        <div
          className={`grid gap-${isSmallScreen ? "4" : "8"} ${
            isSmallScreen ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {updates
            .slice(0, isSmallScreen ? 2 : updates.length)
            .map((update, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-3 ${
                  isSmallScreen ? "h-60" : "h-auto"
                }`}
              >
                <img
                  className={`w-full ${
                    isSmallScreen ? "h-24" : "h-40"
                  } object-cover rounded-md`}
                  src={update.image}
                  alt={update.title}
                />
                <div
                  className={`pt-2 ${isSmallScreen ? "text-xs" : "text-base"}`}
                >
                  <p
                    className={`text-gray-500 ${
                      isSmallScreen ? "text-[10px]" : "text-sm"
                    }`}
                  >
                    {update.date}
                  </p>
                  <span
                    className={`inline-block bg-green-100 text-green-800 ${
                      isSmallScreen
                        ? "text-[10px] px-1 py-0.5"
                        : "text-xs px-2 py-1"
                    } rounded-full mt-2 mb-4`}
                  >
                    {update.category}
                  </span>
                  <h3
                    className={`text-gray-900 ${
                      isSmallScreen
                        ? "text-sm font-medium"
                        : "text-lg font-semibold"
                    } mb-2`}
                  >
                    {update.title}
                  </h3>
                  <a
                    href={update.link}
                    className={`flex items-center ${
                      isSmallScreen ? "text-xs" : "text-base"
                    } text-green-600 hover:text-green-800`}
                  >
                    Read more{" "}
                    <ArrowRightIcon
                      className={`ml-2 ${
                        isSmallScreen ? "h-4 w-4" : "h-5 w-5"
                      }`}
                    />
                  </a>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="bg-[#03A731] hover:bg-[#03A731] text-white hover:text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 flex items-center"
          >
            <span className="mr-2">See other articles</span>
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
    </section>
  );
};

export default RecentUpdates;
