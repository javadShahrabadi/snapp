import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      {/* up section */}
      <div className="h-[300px] bg-[#1C1C1C] py-16 px-10">
        <div className="flex items-center">
          <Image
            src="https://club.snapp.ir/wp-content/uploads/2020/07/Asset-1-300x125.png"
            width={300}
            height={125}
          />
          {/* footer links */}
          <div className="flex space-y-2 text-white flex-col ms-8">
            <a
              href=""
              className="hover:text-[#00e261] transition-colors ease-in-out duration-200"
            >
              صفحه اصلی
            </a>
            <a
              href=""
              className="hover:text-[#00e261] transition-colors ease-in-out duration-200"
            >
              درباره ما
            </a>
            <a
              href=""
              className="hover:text-[#00e261] transition-colors ease-in-out duration-200"
            >
              سوالات رایج
            </a>
            <a
              href=""
              className="hover:text-[#00e261] transition-colors ease-in-out duration-200"
            >
              دانلود اپلیکیشن
            </a>
            <a
              href=""
              className="hover:text-[#00e261] transition-colors ease-in-out duration-200"
            >
              باکس کلاب
            </a>
            <a
              href=""
              className="hover:text-[#00e261] transition-colors ease-in-out duration-200"
            >
              همکاری با ما
            </a>
          </div>
        </div>
      </div>
      {/* down Footer */}
      <div className="h-[60px] bg-[#1A1A1A]">
        <p className="text-[#3b4542] text-sm flex justify-center pt-5">
          کپی رایت © | تمامی حقوق مادی و معنوی این سایت متعلق به ایده گزین
          ارتباطات روماک (اسنپ) است.
        </p>
      </div>
    </div>
  );
};

export default Footer;
