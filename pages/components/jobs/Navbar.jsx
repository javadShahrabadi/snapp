import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto h-20 flex items-center justify-between">
        <div className=" flex-row space-x-4 items-center hidden lg:flex">
          {/* social links */}
          {/* instagram */}
          <span className="cursor-pointer me-4 ">
            <BsInstagram className="hover:fill-[#00AF4B] transition-colors ease-in-out duration-200 fill-[#00E06F]" />
          </span>
          {/* twitter */}
          <span className="cursor-pointer">
            <BsTwitter className="hover:fill-[#00AF4B] transition-colors ease-in-out duration-200 fill-[#00E06F]" />
          </span>
          {/* linkedin */}

          <span className="cursor-pointer">
            <BsLinkedin className="hover:fill-[#00AF4B] transition-colors ease-in-out duration-200 fill-[#00E06F]" />
          </span>
          {/* end-social-links */}
          {/* company button */}
          <Link href="/">
            <button
              type="button"
              className="flex flex-row bg-[#00E06F] px-5 py-2 text-white text-sm rounded-md hover:bg-[#00AF4B] transition-colors ease-in-out duration-200"
            >
              {/* arrow icon */}
              <span className="me-2 mt-0.5">
                <BsFillArrowRightCircleFill className="text-white" />
              </span>
              company website
            </button>
          </Link>
        </div>
        {/* logo section */}
        <div className="lg:-mr-10 xl:-mr-16 mx-auto lg:mx-0">
          <Link href="/">
            <a className="cursor-pointer">
              <Image
                src="https://career.snapp.ir/img/snapp_logo.png"
                width={150}
                height={50}
              />
            </a>
          </Link>
        </div>
        {/* end-logo section */}
        {/* right link section */}
        <div className="hidden lg:flex items-center space-x-4 text-sm ">
          <a
            href=""
            className="me-4 text-[#00E06F] hover:text-[#00AF4B] transition-colors ease-in-out duration-200"
          >
            Jobs
          </a>
          <a
            href=""
            className="text-[#00E06F] hover:text-[#00AF4B] transition-colors ease-in-out duration-200"
          >
            Photos
          </a>
          <a
            href=""
            className="text-[#00E06F] hover:text-[#00AF4B] transition-colors ease-in-out duration-200"
          >
            Home
          </a>
        </div>
        {/* end-right link section */}
      </div>
    </div>
  );
};

export default Navbar;
