import React from "react";
import Image from "next/image";
import { useState } from "react";
// icon
import { SearchIcon } from "@heroicons/react/outline";
import { Sling as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white h-28">
      <div className="max-w-7xl mx-auto flex flex-row items-center pt-8 pb-8 px-5 shadow-sm border-b border-gray-200 lg:border-none lg:shadow-none">
        <div className="flex flex-row items-center">
          {/* logo */}
          <span
            className="lg:hidden bg-[#07df70] rounded-md me-2"
            onClick={(e) => {
              e.preventDefault();
              console.log(open);
              setOpen(!open);
            }}
          >
            <Hamburger size={24} color="#fff" />
          </span>
          <Image
            src="https://snapp.ir/blog/wp-content/uploads/2020/09/logo-1.png"
            width={90}
            height={30}
          />
        </div>
        {/* navbar items */}
        <div className="-mt-2 hidden lg:flex">
          <ul className="flex flex-row space-x-6 font-semibold">
            <li className="ms-6 me-6">اخبار</li>
            <li>آموزش</li>
            <li>امنیت</li>
            <li>مسئولیت اجتماعی</li>
            <li>خدمات اسنپ</li>
            <li>پیوستن به ناوگان اسنپ</li>
            <li>درباره ما</li>
          </ul>
        </div>
        {/* search box */}
        <div className="-mt-2 ms-auto relative border-b border-gray-300">
          <input
            type="text"
            id="search-box"
            className="py-2 px-4 text-sm focus:outline-none w-full text-gray-500"
            placeholder="جستجو..."
          />
          <SearchIcon className="w-5 h-5 absolute top-2 left-1 text-gray-400" />
        </div>
      </div>
      {/* responsive navbar */}
      <div
        className={`${
          open ? "flex relative z-[9999]" : "hidden"
        } w-full bg-white navbar_animation_2 lg:hidden`}
      >
        <ul className="flex flex-col text-[#07df70] text-sm font-semibold space-y-3 py-4 px-8 w-full">
          <li className="border-b border-gray-300 pb-2">اخبار</li>
          <li className="border-b border-gray-300 pb-2">آموزش</li>
          <li className="border-b border-gray-300 pb-2">امنیت</li>
          <li className="border-b border-gray-300 pb-2">مسئولیت اجتماعی</li>
          <li className="border-b border-gray-300 pb-2">خدمات اسنپ</li>
          <li className="border-b border-gray-300 pb-2">
            پیوستن به ناوگان اسنپ
          </li>
          <li>درباره ما</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
