import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      {/* logo image */}
      <div>
        <div className="max-w-7xl mx-auto px-4 xl:px-0 flex items-center justify-between py-4 flex-row-reverse lg:flex-row">
          <Image
            src="https://club.snapp.ir/wp-content/uploads/2020/07/dc-logo-w150.png"
            width={220}
            height={90}
          />
          {/* toggle btn */}
          <span
            className="lg:hidden"
            onClick={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
          >
            <Hamburger color="#575757" />
          </span>
        </div>
      </div>
      <div className="hidden lg:flex flex-row items-center justify-between max-w-7xl mx-auto pb-4 pt-2 px-4 xl:px-0">
        {/* navbar */}
        <div>
          <ul className="flex flex-row space-x-4  font-semibold">
            <li className="me-4 hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
              اخبار اسنپ
            </li>
            <li className="hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
              خدمات باشگاه رانندگان
            </li>
            <li className="hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
              رادیو اسنپ
            </li>
            <li className="hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
              مرکز آموزش
            </li>
            <li className="hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
              اسنپ باکس
            </li>
            <li className="hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
              ثبت‌نام آنلاین راننده
            </li>
            <li className="hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
              پروموکلاب
            </li>
          </ul>
        </div>
        {/* search  */}
        <div className="relative items-center hidden lg:flex">
          <SearchIcon className="w-5 h-5 absolute left-0 top-3 text-gray-300 hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer" />
          <input
            type="text"
            name="search"
            id="search"
            className="px-4 py-3 focus:outline-none text-gray-300 text-sm focus:border-b border-gray-300"
          />
        </div>
      </div>
      {/* reponsive navbar */}
      <div className={`${open ? "block" : "hidden"} lg:hidden`}>
        <ul className="px-6 flex flex-col space-y-4">
          <li className="border-b border-gray-300 pb-2 hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
            اخبار اسنپ
          </li>
          <li className="border-b border-gray-300 pb-2 hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
            خدمات باشگاه رانندگان
          </li>
          <li className="border-b border-gray-300 pb-2 hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
            رادیو اسنپ
          </li>
          <li className="border-b border-gray-300 pb-2 hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
            مرکز آموزش
          </li>
          <li className="border-b border-gray-300 pb-2 hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
            اسنپ باکس
          </li>
          <li className="border-b border-gray-300 pb-2 hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
            ثبت‌نام آنلاین راننده
          </li>
          <li className=" pb-2 hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer">
            پروموکلاب
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
