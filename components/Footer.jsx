import React from "react";
import {
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsTelegram,
} from "react-icons/bs";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-white">
      <div className="py-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* text links */}
        <div className="grid grid-cols-2 justify-items-center gap-y-2 gap-x-10 lg:flex flex-row space-x-4 ">
          <Link href="/jobs">
            <a className="pe-4 cursor-pointer">فرصت‌های شغلی</a>
          </Link>
          <Link href="/blog">
            <a className="cursor-pointer"> بلاگ </a>
          </Link>
          <Link href="/rider_cloop">
            <a className="cursor-pointer"> باشگاه رانندگان </a>
          </Link>
          <Link href="/rider_register">
            <a className="cursor-pointer"> ثبت نام راننده اسنپ </a>
          </Link>
          <Link href="/login">
            <a className="cursor-pointer"> پنل سازمانی </a>
          </Link>
          <Link href="/about">
            <a className="cursor-pointer"> درباره ما </a>
          </Link>
          <Link href="/contact">
            <a className="cursor-pointer"> تماس با ما </a>
          </Link>
        </div>
        {/* icon links */}
        <div className="flex flex-row space-x-4 justify-center mt-6 lg:mt-0">
          <a href="" className="pe-4 hover:scale-105 ease-in-out duration-150">
            <BsTwitter className="text-[#404040] w-6 h-6" />
          </a>
          <a
            href=""
            className="hover:scale-105 transition-all ease-in-out duration-150"
          >
            <BsInstagram className="text-[#404040] w-6 h-6" />
          </a>
          <a
            href=""
            className="hover:scale-105 transition-all ease-in-out duration-150"
          >
            <BsYoutube className="text-[#404040] w-6 h-6" />
          </a>
          <a
            href=""
            className="hover:scale-105 transition-all ease-in-out duration-150"
          >
            <BsTelegram className="text-[#404040] w-6 h-6" />
          </a>
          <a
            href=""
            className="hover:scale-105 transition-all ease-in-out duration-200"
          >
            <BsLinkedin className="text-[#404040] w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
