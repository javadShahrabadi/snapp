import React from "react";
import Image from "next/image";
const Card = ({ thumb_src, name, context }) => {
  return (
    <div>
      <div className="h-[450px] w-[290px] boredr border-gray-300 cursor-pointer">
        <div className="bg-white px-4 py-6 shadow-md rounded-xl">
          <Image
            src={thumb_src}
            width={74}
            height={74}
            className="rounded-full"
          />
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-[#404040] mt-4">{name}</h3>
            <p>{context}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
