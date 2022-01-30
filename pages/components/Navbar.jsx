import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Pulse from "react-reveal/Pulse";
import Link from "next/link";

// import icon
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const navToggle = () => {
    open = setOpen(!open);
  };
  return (
    <div className="h-24 bg-white  border-b border-gray-200 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto py-9 px-5 hidden lg:flex">
        <ul className="flex flex-row items-center xl:space-x-8 lg:space-x-6 md:space-x-4">
          <li className="me-8 -mb-1 cursor-pointer">
            <Link href="/">
              <a className="cursor-pointer">
                <Image
                  src="https://web-cdn.snapp.ir/snapp-website/icons/snappTextLogo.svg"
                  width={90}
                  height={32}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/jobs">
              <a className="cursor-pointer">فرصت های شغلی</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="cursor-pointer">بلاگ</a>
            </Link>
          </li>
          <li>
            <Link href="rider_cloop">
              <a className="cursor-pointer">باشگاه رانندگان</a>
            </Link>
          </li>
          <li>
            <Link href="/rider_register">
              <a className="cursor-pointer">ثبت نام راننده اسنپ</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a className="cursor-pointer">پنل سازمانی</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="cursor-pointer">درباره ما</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="cursor-pointer">تماس با ما</a>
            </Link>
          </li>
        </ul>
      </div>

      {/* responsve navbar */}
      <div className="max-w-7xl mx-auto lg:py-9 px-4 py-6 lg:hidden flex items-center justify-between">
        {/* menu toggle */}
        <div>
          <Hamburger
            toggled={open}
            toggle={setOpen}
            className="text-gray-400"
            color="#000"
            size={24}
          />
        </div>
        {/* logo */}
        <Link href="/">
          <a className="cursor-pointer">
            <Image
              src="https://web-cdn.snapp.ir/snapp-website/icons/snappTextLogo.svg"
              width={90}
              height={32}
            />
          </a>
        </Link>
      </div>

      {/* menu items */}

      <div
        className={`w-2/3 ${
          open ? "flex" : "hidden"
        }   lg:hidden bg-white h-screen z-100 absolute`}
      >
        {/* list of items */}
        <div className="p-8 flex flex-col space-y-6 items-start w-full">
          <Link href="/jobs">
            <a className="cursor-pointer">فرصت های شغلی</a>
          </Link>
          <Link href="/blog">
            <a className="cursor-pointer">بلاگ</a>
          </Link>
          <Link href="/rider_cloop">
            <a className="cursor-pointer">باشگاه رانندگان</a>
          </Link>
          <Link href="/rider_register">
            <a className="cursor-pointer">ثبت نام راننده اسنپ</a>
          </Link>
          <Link href="/login">
            <a className="cursor-pointer">پنل سازمانی</a>
          </Link>
          <Link href="/about">
            <a className="cursor-pointer">درباره ما</a>
          </Link>
          <Link href="/contact">
            <a className="cursor-pointer">تماس با ما</a>
          </Link>
          {/* divider line */}
          <div className="border border-gray-200 w-full" />

          <div
            className="flex items-center justify-between w-full cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <>
                <h3 className="text-[#1FD070] font-semibold">اپلیکیشن اسنپ</h3>
                <ChevronUpIcon className="h-6 w-6 text-[#1FD070]" />
              </>
            ) : (
              <>
                <h3 className="text-[#1FD070] font-semibold">اپلیکیشن اسنپ</h3>
                <ChevronDownIcon className="h-6 w-6 text-[#1FD070]" />
              </>
            )}
          </div>

          {/* Download Application Dropdown */}

          <Pulse>
            <div className={`w-full ${show ? "flex" : "hidden"}`}>
              <ul className="flex flex-col space-y-6">
                <li className="flex flex-row items-center cursor-pointer">
                  <Image
                    src="https://web-cdn.snapp.ir/snapp-website/icons/markets/googleplay.png"
                    width={24}
                    height={24}
                  />
                  <h3 className="ms-2">دانلود از گوگل پلی</h3>
                </li>
                <li className="flex flex-row items-center cursor-pointer">
                  <Image
                    src="https://web-cdn.snapp.ir/snapp-website/icons/markets/cafebazaar.png"
                    width={24}
                    height={24}
                  />
                  <h3 className="ms-2">دانلود از کافه بازار</h3>
                </li>
                <li className="flex flex-row items-center cursor-pointer">
                  <Image
                    src="https://web-cdn.snapp.ir/snapp-website/icons/markets/snapp-pwa.svg"
                    width={24}
                    height={24}
                  />
                  <h3 className="ms-2">وب اپلیکیشن اسنپ</h3>
                </li>
                <li className="flex flex-row items-center cursor-pointer">
                  <Image
                    src="https://web-cdn.snapp.ir/snapp-website/icons/markets/sibapp.png"
                    width={24}
                    height={24}
                  />
                  <h3 className="ms-2">دانلود از سیب اپ</h3>
                </li>
                <li className="flex flex-row items-center cursor-pointer">
                  <Image
                    src="https://web-cdn.snapp.ir/snapp-website/icons/markets/iapps.png"
                    width={24}
                    height={24}
                  />
                  <h3 className="ms-2">دانلود از آی اپس</h3>
                </li>
              </ul>
            </div>
          </Pulse>

          {/* end-Download Application Dropdown */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
