import React from "react";
import Image from "next/image";
const Marketing = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white items-center">
      {/* image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://web-cdn.snapp.ir/snapp-website/images/homepage/asghar-image.jpg"
          alt="Banner-img"
          loading="lazy"
          className="w-full h-[350px] lg:h-[450px] object-cover rounded-md"
        />
        {/* <Image
          src="https://web-cdn.snapp.ir/snapp-website/images/homepage/asghar-image.jpg"
          width={660}
          height={450}
          layout="responsive"
        /> */}
      </div>
      {/* content */}
      <div className="w-full md:w-1/2 px-4 md:mr-8">
        <h2 className="text-2xl lg:text-4xl font-semibold leading-snug text-[#404040] mt-6">
          سوپر اپ اسنپ، پاسخی به تمام نیازها
        </h2>
        <br />
        <p className="w-full md:w-2/3 text-[#575757] text-sm leading-6 ">
          اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد
          شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید
          و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر
          درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و
          مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط
          (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده
          کنید.
        </p>
      </div>
    </div>
  );
};

export default Marketing;
