import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-white max-w-6xl mx-auto py-16 z-100">
      <div className="flex justify-between items-center">
        {/* content */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-[#404040] font-semibold text-xl">
            همین حالا ثبت‌نام کنید!
          </h3>
          <p className="text-sm text-[#404040]">
            لطفا شماره موبایل خود را وارد کنید تا کد تأیید برایتان ارسال شود.
          </p>
          {/* input */}
          <div className="pt-2 relative w-4/5">
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              placeholder="شماره همراه"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm"
            />
            <span className="absolute top-4 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                class="bi bi-dot"
                fill="#D1D5DB"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
            </span>
          </div>
          <p className="text-sm pt-2 text-[#404040]">
            با پرکردن فرم ثبت‌نام، قوانین و مقررات استفاده از سرویس اسنپ! را
            مطالعه کرده و با تمامی آن موافقم.
          </p>
          <div className="flex flex-row pt-5">
            <button className="bg-[#a3a3a3] text-white font-semibold px-10 py-2 me-5 rounded-md">
              ثبت نام سواری
            </button>
            <button className="bg-[#a3a3a3] text-white font-semibold px-10 py-2 rounded-md">
              ثبت نام راننده وانت و موتور
            </button>
          </div>
        </div>
        {/* image */}
        <div>
          <Image
            src="https://digitalsignup.snapp.ir/static/media/largeCarVector.23ce426e.svg"
            width={410}
            height={210}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
