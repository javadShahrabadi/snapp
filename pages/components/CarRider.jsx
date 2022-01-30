import React from "react";
import CardAdventage from "./CardAdventage";

const CarRider = () => {
  return (
    <div className="mb-10">
      {/* header content */}
      <div className="max-w-4xl mx-auto mt-6 flex flex-col space-y-6 items-center justify-center">
        <h2 className="font-semibold text-center text-[#404040] text-lg md:text-2xl lg:text-3xl px-4">
          در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.
        </h2>
        <p className="text-[#575757] text-md px-16 text-center">
          بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را
          اینترنتی انجام دهید
        </p>
        <button
          type="button"
          className="text-white bg-[#00DB75] p-2 text-center w-32 h-10 md:w-40 md:h-12 rounded-md hover:bg-[#13e985] font-semibold transition-colors ease-in-out duration-200"
        >
          ثبت نام رانندگان
        </button>
      </div>
      <div className="max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto mt-8 px-4 lg:px-0">
        <video
          className="rounded-md"
          src="https://web-cdn.snapp.ir/snapp-website/videos/homepage/jazb-ranande.mp4"
          controls
        ></video>
      </div>
      {/* car adventage */}
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 mt-10 justify-items-center xl:px-40">
        <CardAdventage
          title=" درآمد تضمینی + پاداش‌های ماهانه و هفتگی"
          subtitle="با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید."
          icon_src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income.png"
        />
        <CardAdventage
          title="ساعت کاری دلخواه"
          subtitle="فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید."
          icon_src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-hour.png"
        />
        <CardAdventage
          title="مزایا و خدمات باشگاه رانندگان"
          subtitle="در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید."
          icon_src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-benefits.png"
        />
        <CardAdventage
          title="کار‌فیکس"
          subtitle="باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع     خدمات خودرویی راه‌اندازی کرده است."
          icon_src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-carfix.png"
        />
      </div>
    </div>
  );
};

export default CarRider;
