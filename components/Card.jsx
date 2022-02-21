import React from "react";
import Image from "next/image";
const Card = ({ title, subtitle, thumbnail_src }) => {
  return (
    <div className="cursor-pointer bg-white flex flex-col md:flex-row items-center px-4 py-4 rounded-xl shadow-sm w-2/3 h-[130px] md:w-[310px] md:h-[90px] ">
      <Image src={thumbnail_src} width={62} height={62} />
      <div className="ms-2">
        <h3 className="font-semibold text-sm md:text-md mt-2 -mr-1">{title}</h3>
        <h5 className="text-[#A3B7D3] text-sm hidden md:inline-block">
          {subtitle}
        </h5>
      </div>
    </div>
  );
};

export default Card;
