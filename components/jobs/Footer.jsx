import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
const Footer = () => {
  return (
    <div className="w-full h-[500px] lg:h-[400px] pt-10 bg-white relative">
      <img
        src="/jobs-header.jpg"
        alt="Footer-img-bg"
        className="h-[500px] lg:h-[400px] w-full object-cover"
      />
      <div className="bg-[#32BC71] bg-opacity-90 absolute top-10 w-full h-full">
        <div className="flex flex-col items-center pt-20 space-y-2">
          <h3 className="text-white font-semibold text-3xl">
            PERKS & BENEFITS
          </h3>
          <h5 className="text-[#14171C] text-sm font-semibold">
            A SELECTION OF WHAT WE HAVE TO OFFER
          </h5>
        </div>
        {/* ------ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-4 justify-items-center mt-10">
          <div className="text-white flex flex-row item-center">
            <h4 className="font-semibold text-lg">Remote Working</h4>
            <span className="">
              <CheckIcon className="text-white w-8 h-8 -mt-1 ms-1" />
            </span>
          </div>
          {/*  */}
          <div className="text-white flex flex-row item-center">
            <h4 className="font-semibold text-lg">Remote Working</h4>
            <span className="">
              <CheckIcon className="text-white w-8 h-8 -mt-1 ms-1" />
            </span>
          </div>
          {/*  */}
          <div className="text-white flex flex-row item-center">
            <h4 className="font-semibold text-lg">Remote Working</h4>
            <span className="">
              <CheckIcon className="text-white w-8 h-8 -mt-1 ms-1" />
            </span>
          </div>
          {/*  */}
          {/*  */}
          <div className="text-white flex flex-row item-center">
            <h4 className="font-semibold text-lg">Remote Working</h4>
            <span className="">
              <CheckIcon className="text-white w-8 h-8 -mt-1 ms-1" />
            </span>
          </div>
          {/*  */}
          {/*  */}
          <div className="text-white flex flex-row item-center">
            <h4 className="font-semibold text-lg">Remote Working</h4>
            <span className="">
              <CheckIcon className="text-white w-8 h-8 -mt-1 ms-1" />
            </span>
          </div>
          {/*  */}
          {/*  */}
          <div className="text-white flex flex-row item-center">
            <h4 className="font-semibold text-lg">Remote Working</h4>
            <span className="">
              <CheckIcon className="text-white w-8 h-8 -mt-1 ms-1" />
            </span>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
