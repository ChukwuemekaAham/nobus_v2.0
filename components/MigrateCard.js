import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/solid";

const products = [
  {
    id: 1,
    name: "Compute",
    href: "/compute",
    imageSrc: "/compute.png",
    imageAlt: "Front of men's Basic Tee in black.",
    desc: "Nobus offers standard compute services that allows you to develop, deploy, run, and scale your applications and...",
    learn: "Learn more",
  },
  {
    id: 2,
    name: "Storage",
    href: "/storage",
    imageSrc: "/storage.png",
    imageAlt: "Front of men's Basic Tee in black.",
    desc: "Cloud storage plays an important role in cloud computing since it is more reliable, scalable and secure than traditional...",
    learn: "Learn more",
  },

  {
    id: 3,
    name: "Networking",
    href: "/networking",
    imageSrc: "network.png",
    imageAlt: "Front of men's Basic Tee in black.",
    desc: "Nobus understands the vital role played by networks in supporting various kind of workloads thus, we are keen to deliver the...",
    learn: "Learn more",
  },
  // {
  //   id: 4,
  //   name: 'Data Center',
  //   href: '/blog/data-center',
  //   imageSrc: 'storage.png',
  //   imageAlt: "Front of men's Basic Tee in black.",
  //   desc: 'Nobus understands the integral part played by Data centers. The security and reliability of our data center and its information...',
  //   learn: 'Learn more'

  // },
];

export default function MigrateCard() {
  return (
    <div className="bg-blue-50 text-center px-20 py-20 mt-10">
      <div className="mx-auto max-w-2xl md:max-w-4xl lg:max-w-7xl">
        <h2 className="text-3xl md:text-4xl text-center font-semibold tracking-wider text-gray-900">
          Migrate
        </h2>
        <h2 className="text-base lg:text-xl mt-4 text-center font-small tracking-wider text-gray-900 pb-5">
          Migrate securely and easily to the nobus platform. Eliminate guessing
          on your infrastructure capacity needs, scale up or down as the need
          arises.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border rounded-xl shadow hover:scale-102 hover:shadow-xl"
            >
              <div className="min-h-36 h-36 aspect-w-1 aspect-h-1 w-full rounded-t-xl overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center lg:h-full lg:w-full"
                  aria-hidden="true"
                />
              </div>
              <div className="py-5 px-4">
                <h3 className="text-xl text-gray-900 font-semibold lg:text-2xl">
                  {product.name}
                </h3>
                <p className="text-[15px] tracking-wide leading-relaxed py-5 text-gray-800">
                  {product.desc}
                </p>
              </div>

              <div className="flex justify-between border-t px-4 py-2 group-hover:bg-gray-100 rounded-b-xl">
                <div>
                  <h3>
                    <a
                      href={product.href}
                      className="font-semibold text-sm text-gray-700 hover:text-gray-500"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.learn}
                    </a>
                  </h3>
                </div>

                <ArrowRightIcon className="h-5 text-sm font-medium bg-gray-200 group-hover:bg-gray-600 group-hover:text-white rounded-full p-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
