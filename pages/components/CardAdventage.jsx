import React from "react";
import Image from "next/image";
const CardAdventage = ({ title, subtitle, icon_src }) => {
  return (
    <div className="bg-white w-4/5 flex pe-5 py-6 rounded-md shadow-sm items-center justify-center">
      <img src={icon_src} alt={title} className="w-36 h-14 lg:w-44 lg:h-20" />
      {/* content */}
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold text-[#404040] lg:text-lg">{title}</h3>
        <p className="text-sm text-[#575757] text-4/5 lg:text-md">{subtitle}</p>
      </div>
    </div>
  );
};

export default CardAdventage;
