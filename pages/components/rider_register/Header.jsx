import React from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
const Header = () => {
  return (
    <div className="w-full flex flex-col md:flex-row h-[400px] md:h-[600px]">
      {/* right section */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center space-y-7 ps-7 py-7 pe-4 xl:ps-16">
        <h3 className="font-semibold text-[#404040] text-2xl">
          همین حالا ثبت نام کنید!
        </h3>
        <p className="text-sm text-[#404040]">
          لطفا شماره موبایل خود را وارد کنید تا کد تأیید برایتان ارسال شود.
        </p>
        {/* input */}
        <div className="w-full relative">
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            className="w-4/5 lg:w-4/5 py-4 px-2 placeholder-gray-400 text-sm border border-gray-300 rounded-md bg-transparent"
            placeholder="شماره همراه"
          />
          <span className="absolute top-3 left-28">
            <BsDot className="w-8 h-8 text-gray-300" />
          </span>
        </div>
        <p className="w-full pe-3 lg:px-0 text-sm text-[#404040]">
          با پرکردن فرم ثبت‌نام،استفاده از سرویس اسنپ! را مطالعه کرده و با تمامی
          آن موافقم.
        </p>
        {/* buttons */}
        <div className="flex flex-row items-start w-4/5">
          <button className="w-[170px] text-sm lg:text-md bg-[#a3a3a3] font-semibold text-white me-4 rounded-md py-3 hover:scale-105 transition-all ease-in-out duration-500 px-1">
            ثبت نام راننده سواری
          </button>
          <button className="w-[220px] text-sm lg:text-md bg-[#a3a3a3] font-semibold text-white rounded-md py-3 hover:scale-105 transition-all ease-in-out duration-500 px-1">
            ثبت نام راننده وانت و موتور
          </button>
        </div>
      </div>
      {/* left section */}
      <div className="w-full md:w-1/2 lg:w-3/5 bg-[#061C3F]">
        <div className="flex flex-col items-start my-20 mx-8 space-y-7 py-10">
          <Image
            src="https://digitalsignup.snapp.ir/static/media/carVector.0389a719.svg"
            width={230}
            height={100}
          />
          <h2 className="text-white font-semibold text-3xl">
            کمتر از ده دقیقه ثبت نام کنید و به ناوگان
            <span className="text-[#00D170]"> اسنپ! </span>
            بپیوندید.
          </h2>
          <p className="text-white text-sm pb-7">
            بدون نیاز به مراجعه حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را
            اینترنتی انجام دهید. شرایط و مدارک لازم را از همینجا بخوانید.
          </p>
          <Image
            src="https://digitalsignup.snapp.ir/static/media/medianSalary.32da2d7a.jpg"
            width={800}
            height={150}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
