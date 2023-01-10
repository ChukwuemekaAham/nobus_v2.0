import React from "react";

function HeaderItem({ Icon, title }) {
  return (
    <div
      className=" flex items-center cursor-pointer w-12 
     sm:w-20 hover:text-black group"
    >
      <p className=" opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
      <Icon className="h-8 group-hover:animate-bounce " />
    </div>
  );
}

export default HeaderItem;
