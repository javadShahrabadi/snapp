import React from "react";
import Image from "next/image";
const CardHeader = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-row items-center justify-between -mt-12">
      <div className="w-[500px] h-[250px] bg-white flex-col space-y-4 px-5 py-5 rounded-2xl shadow-xl">
        <Image
          src="https://digitalsignup.snapp.ir/static/media/walletVector.c90d7c23.svg"
          width={140}
          height={85}
        />
        <h2 className="font-semibold text-2xl text-[#404040]">
          مزایای ثبت‌نام شما در اسنپ
        </h2>
        <p className="text-sm">- درآمد تضمینی + ساعت کاری دلخواه</p>
      </div>

      <div className="w-[500px] h-[250px] bg-white flex-col space-y-4 px-5 py-5 rounded-2xl shadow-xl broder border-gray-300">
        <Image
          src="https://digitalsignup.snapp.ir/static/media/paperVector.89915881.svg"
          width={140}
          height={85}
        />
        <h2 className="font-semibold text-2xl text-[#404040]">
          شرایط پیوستن به ناوگان اسنپ!
        </h2>
        <p className="text-sm">- یک گوشی هوشمند در اختیار داشته باشید.</p>
        <p className="text-sm">- سه ماه از تاریخ صدور گواهینامه گذشته باشد.</p>
      </div>
    </div>
  );
};

export default CardHeader;
