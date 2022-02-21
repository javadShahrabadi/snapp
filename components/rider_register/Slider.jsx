import React from "react";
import Card from "../rider_register/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="bg-[#F4F8FB] py-10 h-[600px] w-full">
      {/* title */}
      <h2 className="text-center font-semibold text-2xl text-[#404040] mb-10">
        رانندگان از تجربه ثبت‌نام اینترنتی چه می‌گویند؟
      </h2>
      <div className="w-full">
        <Carousel responsive={responsive}>
          <Card
            thumb_src="https://digitalsignup.snapp.ir/static/media/300X300-10.499d8ccc.png"
            name="مهرداد محمدی"
            context="بخاطر ساعت کاری طولانی محل کارم، اصلا وقت نمیشد که به‌صورت حضوری ثبت‌نام کنم. و حتی نمیدونستم چطور باید شروع کنم و مدارکم رو کجا باید بفرستم. وقتی فهمیدم امکان ثبت‌نام آنلاین هستش، سریع مدارکم رو فرستادم و الان منم عضوی از اسنپم."
          />
          <Card
            thumb_src="https://digitalsignup.snapp.ir/static/media/300X300-01.b4f3eb56.png"
            name="مهدی بابایی"
            context="بخاطر ساعت کاری طولانی محل کارم، اصلا وقت نمیشد که به‌صورت حضوری ثبت‌نام کنم. و حتی نمیدونستم چطور باید شروع کنم و مدارکم رو کجا باید بفرستم. وقتی فهمیدم امکان ثبت‌نام آنلاین هستش، سریع مدارکم رو فرستادم و الان منم عضوی از اسنپم."
          />
          <Card
            thumb_src="https://digitalsignup.snapp.ir/static/media/300X300-02.96b46c91.png"
            name="محمد عزیزی"
            context="بنده از کودکی دچار نوعی معلولیت بودم و چون خجالت می‌کشیدم که مشکلم رو‌ با بقیه به‌ صورت حضوری بیان کنم، تا به امروز نمی تونستم به صورت حظوری ثبت‌نام کنم. با ثبت‌نام آنلاین خیلی راحت کارها رو انجام و الان عضوی از خانواده اسنپم."
          />
          <Card
            thumb_src="https://digitalsignup.snapp.ir/static/media/300X300-03.11108cd3.png"
            name="امیرعلی قربانی "
            context="تصورم این بود که ثبت‌نام حضوری اسنپ خیلی وقت‌گیر و خسته‌کننده است، و درست فکر می کردم، و وقتی فهمیدم که امکان ثبت‌نام آنلاین وجود داره، مدارکمو فرستادم و بالاخره به سادگی هر چه تمام تر و با سرعت خیلی زیادی عضو ناوگان اسنپ شدم."
          />
          <Card
            thumb_src="https://digitalsignup.snapp.ir/static/media/300X300-04.10c02e1a.png"
            name="داوود افتخاری"
            context="بخاطر ساعت کاری طولانی محل کارم، اصلا وقت نمیشد که به‌صورت حضوری ثبت‌نام کنم. و حتی نمیدونستم چطور باید شروع کنم و مدارکم رو کجا باید بفرستم. وقتی فهمیدم امکان ثبت‌نام آنلاین هستش، سریع مدارکم رو فرستادم و الان منم عضوی از اسنپم."
          />
          <Card
            thumb_src="https://digitalsignup.snapp.ir/static/media/300X300-05.7b103134.png"
            name="احسان عزیزی"
            context="وقتی فهمیدم اسنپ به راننده‌هاش لاستیک با قیمت دولتی میده، راغب شدم که ثبت‌نام کنم ولی اصلا فرصت نمی‌کردم و همیشه یادم می‌رفت. الان با ثبت‌نام آنلاین خیلی راحت و سریع مدارکمو ارسال کردمو کارامو انجام دادم و بلاخره اسنپی شدم."
          />
          <Card
            thumb_src="https://digitalsignup.snapp.ir/static/media/300X300-06.499babb3.png"
            name="علیرضا افتخاری"
            context="من کارمندم و چون هر روز تا عصر سرکارم، فرصت نمی‌کردم که اسنپ ثبت‌نام کنم. الان که فهمیدم میشه آنلاین هم ثبت‌نام کرد، خیلی خوشحال شدم و کاراش رو انجام دادم. الان میتونم بعد تموم شدن ساعت کار، چندتا سفر انجام بدم و بعد برم خونه."
          />
          <Card
            thumb_src="https://digitalsignup.snapp.ir/static/media/300X300-07.40517509.png"
            name="عباس نادری"
            context="قبلا یک بار برای ثبت‌نام حضوری اسنپ مراجعه کرده بودم، اما مدارکم ناقص بود و نتونستم ثبت نام کنم و بعدش یه مدت گذشت و من دیگه یادم رفت دوباره اقدام کنم. با ثبت‌نام آنلاین از مدارکم عکس گرفتم و خیلی راحت کار ثبت‌نام را انجام دادم."
          />
          <Card
            thumb_src="https://digitalsignup.snapp.ir/static/media/300X300-08.dea1d654.png"
            name="نیما اسلامی"
            context="همیشه فکر می‌کردم، ثبت‌نام تو اسنپ خیلی سخته و اصلا نمی‌دونستم چیکار کنم. با آنلاین شدن ثبت‌نام تو کمتر از نیم ساعت تمام مدارکم رو فرستادم و اسنپم خیلی سریع کارامو انجام داد الان می تونم سفر انجام بدم و درآمد خوبی داشته باشم."
          />

          <Card
            thumb_src="https://digitalsignup.snapp.ir/static/media/300X300-09.94cdd170.png"
            name="ایمان سعیدی"
            context="من دانشجو هستم و چون باید هر روز سر کلاس حاضر می شدم، هیچوقت فرصت نداشتم حضوری ثبت‌نام و پیگیری کنم. ولی الان که این فرایند آنلاین شد، تمام مدارکم رو فرستادم و الان منم می‌تونم در کنار دانشگاه یک درآمد ثابت و مطمئن داشته باشم."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
