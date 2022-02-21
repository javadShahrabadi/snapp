import React from "react";
import Image from "next/image";
import { HamburgerCollapse as Menu } from "react-animated-burgers";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t-2 border-[#06DF6F]  shadow-md relative">
      {/* navbar */}
      <div className="max-w-7xl mx-auto h-16 flex flex-row items-center px-4 sm:px-8 xl:px-0 border-b-gray-600">
        {/* logo */}
        <div className="lg:hidden mt-1" onClick={() => setOpen(!open)}>
          <Menu buttonWidth={30} isActive={open} barColor="#575757" />
        </div>
        <Link href="/">
          <a className="cursor-pointer">
            <Image
              src="https://digitalsignup.snapp.ir/static/media/logo.61376645.png"
              width={90}
              height={30}
            />
          </a>
        </Link>
        {/* links navbar */}
        <div className="flex-row space-x-4 ms-4 text-md hidden lg:flex">
          <Link href="/blog">
            <a className="font-semibold me-4 cursor-pointer">بلاگ</a>
          </Link>
          <Link href="/jobs">
            <a href="" className="font-semibold cursor-pointer">
              فرصت شغلی
            </a>
          </Link>
          <Link href="/about">
            <a className="font-semibold cursor-pointer">درباره ما</a>
          </Link>
          <Link href="/contact">
            <a className="font-semibold cursor-pointer">تماس با ما</a>
          </Link>
          <a href="" className="font-semibold">
            پیوستن به ناوگان اسنپ
          </a>
          <Link href="/login">
            <a className="font-semibold cursor-pointer">پنل سازمانی</a>
          </Link>
          <Link href="/rider_cloop">
            <a className="font-semibold ps-4 border-r border-gray-400 cursor-pointer">
              باشگاه رانندگان
            </a>
          </Link>
        </div>
        <button className="text-[#22A958] border border-[#22A958] py-1 px-2 rounded-md font-semibold ms-auto hover:scale-105 transition-all ease-in-out duration-500">
          دریافت اسنپ رایگان
        </button>
      </div>
      {/* responsive navbar */}
      {open ? (
        <>
          <div className="max-w-7xl mx-auto px-12 pt-2 pb-8 navbar_animation lg:hidden mt-4">
            <ul className="flex flex-col space-y-4 list-disc font-semibold">
              <li className="hover:text-[#22A958] transition-colors ease-in-out duration-200">
                <a href="">بلاگ</a>
              </li>
              <li className="hover:text-[#22A958] transition-colors ease-in-out duration-200">
                <a href="">فرصت های شغلی</a>
              </li>
              <li className="hover:text-[#22A958] transition-colors ease-in-out duration-200">
                <a href="">درباره ما</a>
              </li>
              <li className="hover:text-[#22A958] transition-colors ease-in-out duration-200">
                <a href="">تماس با ما</a>
              </li>
              <li className="hover:text-[#22A958] transition-colors ease-in-out duration-200">
                <a href="">پیوستن به ناوگان اسنپ</a>
              </li>
              <li className="hover:text-[#22A958] transition-colors ease-in-out duration-200">
                <a href="">پنل سازمانی</a>
              </li>
              <li className="hover:text-[#22A958] transition-colors ease-in-out duration-200">
                <a href="">باشگاه رانندگان</a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
