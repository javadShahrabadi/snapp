import React from "react";
import Footer from "../components/Footer";
import { BsDot } from "react-icons/bs";
const AboutHeader = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col-reverse lg:flex-row ">
        {/* content bg-green */}
        <div className="w-full lg:w-1/2 h-72 lg:h-96 bg-[#22AA58] flex flex-col items-center justify-center">
          <div className="flex flex-col text-center lg:text-right items-center lg:justify-center space-y-8">
            <h2 className="text-white text-2xl lg:text-4xl font-semibold w-2/3 leading-snug">
              تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
            </h2>
            <p className="text-white text-md lg:text-lg w-2/3 leading-snug">
              از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیت
              سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با
              سوپراپلیکیشن اسنپ انجام دهید.
            </p>
          </div>
        </div>
        {/* image part */}
        <div className="w-full lg:w-1/2 h-72 lg:h-96">
          <img
            src="https://web-cdn.snapp.ir/snapp-website/images/about/about-intro--mobile.jpg"
            alt="about-header"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      {/* detail of our job */}
      <div className="flex flex-col max-w-7xl mx-auto mt-14 space-y-6 px-6 lg:px-0">
        <h3 className="text-lg lg:text-xl font-semibold text-[#404040]">
          درباره ی ما
        </h3>
        <p className="text-[#575757]">
          شرکت ایده گزین ارتباطات روماک، با نام تجاری اسنپ، در سال ۱۳۹۳
          راه‌اندازی شد. اسنپ شرکتی پویا و مبتنی بر داده است که از ذهن پویا و
          خلاق جوانان ایران قدرت می‌گیرد. این شرکت به عنوان راهکاری اثربخش برای
          انجام سفرهای درون شهری، فعالیت خود را با یک تیم کوچک آغاز کرد و در
          کمتر از چند سال به بزرگ‌ترین سامانه هوشمند حمل‌ونقل در ایران تبدیل شد.
          دکتر ایاد الکسار و دکتر محمود فوز هم‌بنیان‌گذاران این شرکت هستند.
          اپلیکیشن اسنپ بعد از گذشت چهار سال از شروع فعالیتش به سوپراپ تبدیل شد
          و اکنون خدمات گروه اسنپ در آن ارائه می‌شود. امکان درخواست خودرو،
          موتور، وانت، سفارش غذا، رزرو هتل و اقامت‌گاه‌های ارزان، خرید بلیط
          هواپیما، اتوبوس و … در این اپلیکیشن جامع به صورت یک‌جا فراهم است.
        </p>

        {/* map image */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-[#4FD170] text-md lg:text-lg text-center pt-6 mb-6">
            اسنپ در چه شهرهایی فعال است؟
          </h2>
          <img
            src="https://web-cdn.snapp.ir/snapp-website/images/about/active-cities.jpg"
            alt="map-img"
            className="w-full h-full lg:w-3/5 lg:h-3/5 "
          />
        </div>
      </div>
      {/* make it simple */}
      <div className=" max-w-7xl mx-auto mt-5 hidden xl:flex flex-row justify-between">
        <h2>زندگی خودتو با اسنپ ساده‌تر کن!</h2>
        <div className="flex items-baseline justify-center ">
          <div className="relative">
            <input
              type="text"
              className="border-b border-gray-300 h-8 focus:outline-none text-sm"
            />
            <span className="absolute -left-2 ">
              <BsDot className="w-8 h-8 text-gray-300" />
            </span>
          </div>
          <button className="bg-[#00D170] text-white font-semibold w-24 h-10 rounded-md ms-4 focus:outline-hidden focus:border-none hover:scale-105 transition-all ease-in-out duration-200 ">
            ارسال لینک
          </button>
        </div>
      </div>
      {/* responsive make it simple */}
      <div className="max-w-7xl mx-auto mt-5 flex-row justify-between text-center lg:hidden">
        <h2 className="text-[#404040] font-semibold text-lg">
          زندگی خودتو با اسنپ ساده‌تر کن!
        </h2>
        <button className="bg-[#00D170] text-white font-semibold w-2/3 h-10 rounded-md   hover:scale-105 transition-all ease-in duration-250 mt-5">
          ارسال لینک
        </button>
      </div>
      <div className="border-t border-[#ebebeb] mt-8" />
      <Footer />
    </div>
  );
};

export default AboutHeader;
