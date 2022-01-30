import React from "react";
import Image from "next/image";

// import icon
import { PhoneIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/2 px-8 py-8 lg:px-36 md:py-20 bg-[#22aa58] flex flex-col space-y-6 lg:h-[480px] h-[300px]">
        <h2 className="text-white font-bold text-xl md:text-2xl xl:text-4xl w-full text-justify">
          تجربه ی زندگی راحت تر، سریع تر و به صرفه تر با سوپراپلیکیشن اسنپ!
        </h2>
        <p className="text-white text-sm md:text-lg lg:text-xl text-justify">
          از درخواست خودرو گرفته تا سفارش غذا، خرید سوپر مارکتی، خرید بلیط سفر،
          مشاورهی پزشکی و روانشناسی ، رزرو هتل و ... را میتوانید با سوپراپلیکیشن
          اسنپ انجام دهید.
        </p>

        {/* input section */}
        <div className="hidden xl:flex flex-row w-full items-end">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="09xxxxx6789"
              className="header__button lg:w-2/3"
            />
            <PhoneIcon className="w-4 h-4 text-[#EBEBEB] absolute sm:left-24 xl:left-32 top-4" />
          </div>
          <button className="bg-white text-[#00D170]  py-2 rounded-md -mr-16 w-1/2">
            ارسال لینک
          </button>
        </div>
        {/* end-input section */}
        <button className="flex text-white font-semibold text-lg bg-transparent border border-white sm:w-full md:w-48 py-2 text-center item-center justify-center rounded-md hover:bg-[#d8d8d8] hover:bg-opacity-20 transition-colors ease-in-out duration-200">
          ورود به وب اپلیکیشن
        </button>
      </div>
      <div className="w-full lg:block lg:w-1/2 -z-10 h-[300px] lg:h-[480px]">
        <img
          src="https://web-cdn.snapp.ir/snapp-website/images/homepage/intro_desktop.jpg"
          alt="intro_desktop"
          loading="lazy"
          className="h-[300px] md:h-[400px] lg:h-full w-full"
        />
      </div>
    </div>
  );
};

export default Header;
