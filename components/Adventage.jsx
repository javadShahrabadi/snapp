import React from "react";
import Image from "next/image";
const Adventage = () => {
  return (
    <div className="bg-white lg:-mt-16">
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 bg-white max-w-6xl mx-auto justify-items-center pt-16 md:pt-8 lg:pt-0">
        <div className="flex flex-col justify-center items-center">
          <div className=" w-4/5 bg-[#f2f5f8] flex flex-col items-center justify-center rounded-xl">
            <Image
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-easy.png"
              width={210}
              height={190}
            />
          </div>
          {/* content */}
          <div className="bg-white mt-4 px-14">
            <h4 className="text-md font-semibold mb-4">آسان</h4>
            <p className="text-sm text-[#404040]">
              برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد
              اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-4/5 bg-[#f2f5f8] flex flex-col items-center justify-center rounded-xl">
            <Image
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-fast.png"
              width={210}
              height={190}
            />
          </div>
          {/* content */}
          <div className="bg-white mt-4 px-14">
            <h4 className="text-md font-semibold mb-4">سریع</h4>
            <p className="text-sm text-[#404040]">
              قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک
              می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-4/5 bg-[#f2f5f8] flex flex-col items-center justify-center rounded-xl">
            <Image
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-eco.png"
              width={210}
              height={190}
            />
          </div>
          {/* content */}
          <div className="bg-white mt-4 px-14">
            <h4 className="text-md font-semibold mb-4">به صرفه</h4>
            <p className="text-sm text-[#404040]">
              سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا
              بهترین خدمات را با قیمتی منطقی دریافت کنید.
            </p>
          </div>
        </div>
      </div>
      <div className="h-12 bg-white w-full"></div>
    </div>
  );
};

export default Adventage;
