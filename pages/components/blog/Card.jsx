import React from "react";
import Image from "next/image";
const Card = ({ thumb_src, title, tag, context }) => {
  return (
    <div className="cursor-pointer">
      <div className="relative w-[450px] h-[250px]">
        <Image
          src={thumb_src}
          width={450}
          height={250}
          className="rounded-br-[75px]"
        />
        <div className="bg-black w-full h-[250px] absolute top-0 opacity-40 hover:opacity-50 transition-all ease-in-out duration-200 rounded-br-[75px]" />
        {/* content */}
        <small className="bg-[#09DD71] text-white font-semibold px-1 py-1 text-xs rounded-sm absolute bottom-20 right-6">
          {tag}
        </small>
        <h3 className="text-white font-semibold text-xl absolute bottom-10 right-6">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
