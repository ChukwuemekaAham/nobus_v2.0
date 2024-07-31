import React from "react";

const cards = [
  {
    title: "Compute",
    description:
      "Nobus offers standard compute services that allows you to develop, deploy, run, and scale your applications and...",
    icon: "/icon_09.png",
    link: "/compute",
  },
  {
    title: "Storage",
    description:
      "Cloud storage plays an important role in cloud computing since it is more reliable, scalable and secure than traditional...",
    icon: "/icon_07.png",
    link: "/storage",
  },
  {
    title: "Networking",
    description:
      "Nobus understands the vital role played by networks in supporting various kind of workloads thus, we are keen to deliver the...",
    icon: "/icon_14.png",
    link: "/networking",
  },
];

const WorkloadMigration = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#030410] mb-4">
          Workload Migration
        </h2>
        <p className="text-base lg:text-l text-gray-600 mb-12">
          Migrate securely and easily to the Nobus platform. Eliminate guessing
          on your infrastructure capacity needs, scale up or down as the need
          arises.
        </p>
        <div className="mx-auto max-w-2xl lg:mx-auto lg:flex lg:max-w-none lg:justify-center lg:px-28">
          <div className="grid gap-8 md:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#F9FAFE] p-6 rounded-2xl border border-[#CADCF5] shadow-custom"
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="h-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <a
                  href={card.link}
                  className="text-blue-600 hover:text-blue-800 flex items-center justify-center"
                >
                  Learn more{" "}
                  <svg
                    className="h-4 w-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkloadMigration;
