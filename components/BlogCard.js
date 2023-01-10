import Image from "next/image";

function BlogCard({ img, title, time }) {
  return (
    <div
      className="text-left m-10 flex flex-col cursor-pointer space-x-4 rounded-xl 
    transition duration-200 ease-out hover:scale-105 hover:bg-gray-50 "
    >
      <div className="relative h-20 w-20">
        <Image
          src={img}
          layout="fill"
          objectPosition="left"
          objectFit="contain"
        />
      </div>
      <div className="">
        <h1 className="py-2 text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-sm">{time}</p>
      </div>
    </div>
  );
}

export default BlogCard;
