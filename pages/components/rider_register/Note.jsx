import React from "react";
import Image from "next/image";
const Note = () => {
  return (
    <div className="bg-white mt-20">
      <div className="max-w-6xl mx-auto border border-gray-300 rounded-2xl flex flex-col px-4 py-5">
        {/* title */}
        <h2 className="text-center font-semibold text-2xl text-[#404040] pb-5">
          نکات مهمی که قبل از ثبت‌نام در ناوگان اسنپ خودرو باید بدانید:
        </h2>
        {/* note items */}
        <ul className="flex flex-col space-y-2 list-disc text-[#404040] ps-10">
          <li>این پنل ویژه ثبت‌نام رانندگان جدید است.</li>
          <li>تمامی مدارک مورد نیاز متعلق به یک نفر باشد.</li>
          <li>تصویر مدرک خوانا و واضح باشد.</li>
          <li>
            در صورت خروج از پنل ثبت‌نام اینترنتی، با وارد کردن شماره موبایل خود
            می‌توانید از همان مرحله،‌ ثبت‌نام را ادامه دهید.
          </li>
          <li>
            پس از ثبت‌نام و بررسی اطلاعات شما «کد فعال‌سازی حساب کاربری» از طریق
            پیامک برای‌تان ارسال می‌شود. ارسال این کد به منزله‌ی ثبت‌نام قطعی و
            فعال‌شدن حساب کاربری شماست.
          </li>
          <li>
            پس از ثبت‌نام و بررسی اطلاعات شما «کد فعال‌سازی حساب کاربری» از طریق
            پیامک برای‌تان ارسال می‌شود. ارسال این کد به منزله‌ی ثبت‌نام قطعی و
            فعال‌شدن حساب کاربری شماست.
          </li>
        </ul>
      </div>
      {/* bottom of border section */}
      <div className="max-w-6xl mx-auto flex flex-row mt-10 items-center h-[400px]">
        <div className="w-1/3">
          <Image
            src="https://digitalsignup.snapp.ir/static/media/club.dddc41f0.svg"
            width={220}
            height={130}
          />
        </div>
        {/* content section */}
        <div className="w-2/3 flex flex-col space-y-3 items-start">
          <h3 className="font-semibold text-2xl text-[#404040]">
            از باشگاه رانندگان اسنپ! بیشتر بدانید
          </h3>
          <p className="text-[#404040]">
            باشگاه رانندگان خدمتی برای کاربران راننده عضو خانواده اسنپ است.
            کاربران راننده با پیوستن به مجموعه اسنپ، علاوه بر کسب درآمد بالا،
            می‌توانند از خدمات باشگاه رانندگان نیز بهره‌مند شوند. امکان استفاده
            از تخفیف‌های خدمات خودرویی، رفاهی، درمانی و طرح‌های تشویقی بخشی از
            خدمات این باشگاه است.
          </p>
          <button className="border border-[#00d170] text-[#00d170] px-8 py-2 font-semibold rounded-md hover:bg-[#00d170] hover:bg-opacity-10 transition-colors ease-in duration-200">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
