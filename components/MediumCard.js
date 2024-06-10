import Image from "next/image";

function MediumCard({ img, title, description }) {
  return (
    <div className="my-10 px-6 flex flex-col sm:space-x-4 rounded-xl">
      <div className="relative mx-auto h-20 w-20 text-center">
        <Image src={img} layout="fill" />
      </div>
      <div className="">
        <h1 className="py-2 text-xl font-semibold text-gray-800 text-center">
          {title}
        </h1>
        <p className="text-base text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}

export default MediumCard;
