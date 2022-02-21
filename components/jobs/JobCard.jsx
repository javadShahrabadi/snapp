import React from "react";

const JobCard = ({ title, place, tag }) => {
  return (
    <div>
      <div className="lg:w-[550px] lg:h-[110] border border-gray-200 px-4 py-5 rounded-md cursor-pointer hover:scale-95 transition-all ease-in-out duration-200">
        {/* job name */}
        <h3 className="text-[#404B58] font-semibold text-left">{title}</h3>
        {/* ------ */}
        <div className="flex flex-row justify-between items-end">
          <div className="bg-gray-100 text-[#00e261] px-2 py-1 text-sm rounded-md flex items-center font-semibold cursor-pointer">
            {tag}
          </div>
          <small className="text-[#00e261] font-semibold">{place}</small>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
