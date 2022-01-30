import React from "react";
import Image from "next/image";
const SectionM = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <div className="flex flex-row items-center">
        <div className="w-1/2 flex flex-col space-y-4">
          <h2 className="font-semibold text-2xl text-[#404040]">
            تصاویر مدارک لازم برای ثبت‌نام :
          </h2>
          <ul className="flex flex-col space-y-2 list-disc text-[#575757] text-md ps-5">
            <li>گواهینامه</li>
            <li>بیمه‌نامه</li>
            <li>عکس راننده</li>
            <li>
              معاینه فنی (برای خودروهایی که بیش از ۴ سال از تاریخ تولید آن گذشته
              باشد)
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <Image
            src="https://digitalsignup.snapp.ir/static/media/requirementsVector.34199f07.svg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionM;
