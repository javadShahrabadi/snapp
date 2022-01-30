import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <div className="h-[420px] w-full relative">
        <img
          src="/jobs-header.jpg"
          alt="jobs-header-img"
          className="w-full h-full object-cover sticky"
        />
        <div className="w-full h-full absolute top-0 bg-slate-500 bg-opacity-60" />
      </div>
    </div>
  );
};

export default Header;
