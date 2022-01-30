import React from "react";
import Card from "./Card";
const Services = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* header title */}
      <h2 className="text-center py-12 font-bold text-xl md:text-2xl lg:text-4xl text-[#404040]">
        یک اپلیکیشن، برای تمام نیازها
      </h2>
      {/* cards sections */}
      <div className="mt-8 grid grid-cols-2  lg:grid-cols-3 justify-items-center gap-y-4 -z-50 relative">
        <Card
          title="تاکسی اینترنتی"
          subtitle="امکان درخواست آنلاین خودرو با اسنپ"
          thumbnail_src="https://snapp.ir/assets/images/snapp-services/cab.svg"
        />
        <Card
          title="پیک موتوری"
          subtitle="حمل و نقل با اسنپ"
          thumbnail_src="https://snapp.ir/assets/images/snapp-services/bike.svg"
        />
        <Card
          title="درخواست وانت"
          subtitle="حمل و نقل با اسنپ"
          thumbnail_src="https://jek.snapp.ir/Redesign-Icons/Pickup-new.png"
        />
        {/* -------- */}
        <Card
          title="سفارش آنلاین غذا"
          subtitle="سفارش غذا، نان وشیرینی با اسنپ"
          thumbnail_src="https://snapp.ir/assets/images/snapp-services/food.svg"
        />
        <Card
          title="سوپرمارکت آنلاین"
          subtitle="تهیه اقلام روزانه با اسنپ"
          thumbnail_src="https://snapp.ir/assets/images/snapp-services/market.svg"
        />
        <Card
          title="بلیط پرواز داخلی"
          subtitle="گردشگری با اسنپ"
          thumbnail_src="https://jek.snapp.ir/Redesign-Icons/New%20padding/Domestic%20Trip.png"
        />
        {/* -------- */}
        <Card
          title="بلیط پرواز خارجی"
          subtitle="گردشگری با اسنپ"
          thumbnail_src="https://jek.snapp.ir/Redesign-Icons/New%20padding/Domestic%20Trip.png"
        />
        <Card
          title="دکتر"
          subtitle="درمان با اسنپ"
          thumbnail_src="https://snapp.ir/assets/images/snapp-services/doctor.svg"
        />
        <Card
          title="رزرو هتل"
          subtitle="گردشگری با اسنپ"
          thumbnail_src="https://jek.snapp.ir/Redesign-Icons/hotel.png"
        />
        {/* -------- */}
        <Card
          title="رزرو اقامتگاه"
          subtitle="گردشگری با اسنپ"
          thumbnail_src="https://snapp.ir/assets/images/snapp-services/trip.svg"
        />
        <Card
          title="فروشگاه"
          subtitle="خرید از فروشگاه های معتبر شهر"
          thumbnail_src="https://jek.snapp.ir/Redesign-Icons/new%20Shop.png "
        />
        <Card
          title="بلیط اتوبوس"
          subtitle="گردشگری با اسنپ"
          thumbnail_src="https://jek.snapp.ir/Redesign-Icons/bus.png"
        />
        {/* ------ */}
        <Card
          title="بلیط قطار"
          subtitle="گردشگری با اسنپ"
          thumbnail_src="https://jek.snapp.ir/Redesign-Icons/train.png"
        />
        <Card
          title="اسنپ! کلاب"
          subtitle="باشگاه مشتریان اسنپ"
          thumbnail_src="https://snapp.ir/assets/images/snapp-services/club.svg"
        />
        <Card
          title="سرمایه گذاری"
          subtitle="خدمات غیر خصوری بورس و سرمایه گذاری"
          thumbnail_src="https://jek.snapp.ir/Redesign-Icons/Service%20Icon.png"
        />
        {/* --------- */}
        <Card
          title="اسباب کشی منزل"
          subtitle="حمل و نثل با اسنپ"
          thumbnail_src="https://jek.snapp.ir/Redesign-Icons/Moving.png"
        />
        <Card
          title="سرویس اعتباری"
          subtitle="پرداخت اسنپ"
          thumbnail_src="https://snapp.ir/assets/images/snapp-services/pay.svg"
        />
      </div>
      {/* end-cards sections */}
    </div>
  );
};

export default Services;
