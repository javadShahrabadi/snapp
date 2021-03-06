import React from "react";
import Card from "./Card";
const CardContainer = () => {
  return (
    <div className="bg-[#F4F4F4] mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-5">
        <Card
          thumb_src="https://snapp.ir/blog/wp-content/uploads/2022/01/blog-450x250.jpg"
          tag="مسئولیت اجتماعی"
          title="کمک به اشتغال مادران کم‌برخوردار"
          context="طرح «کمک به اشتغال مادران کم‌برخوردار»، به عنوان چهارمین طرح نیکوکاری باشگاه مشتریان انتخاب شد. توانمندسازی و ایجاد اشتغال برای مادران کم‌برخوردار ساکن در روستاهای اطراف تهران (خاورشهر، محمودآباد و غنی‌آباد) هدف اصلی این طرح است که با همکاری موسسه خیریه «حمایت از کودکان بی‌پناه کمک» اجرایی می‌شود. از فروردین ماه سال جاری بخش نیکوکاری..."
        />
        <Card
          thumb_src="https://snapp.ir/blog/wp-content/uploads/2021/02/Safety-450x250.jpeg"
          tag="خبر"
          title="اسنپ چگونه امنیت سفر را تامین می‌کند"
          context="به مناسبت روز خبرنگار و به یاد تمام خبرنگارانی که بین ما نیستند دنیای این روزهای ما آنقدر پُر است از اخبار و اتفاقات مختلف که سخت فرصت می‌کنیم یکی را هضم کنیم و برویم سراغ دیگری. خبرها سرعت گرفته‌اند و یک‌باره هجوم آورده‌اند به زندگی‌مان؛ یکی پس از دیگری می‌آیند و فراموش می‌شوند. اما..."
        />
        <Card
          thumb_src="https://snapp.ir/blog/wp-content/uploads/2020/02/super_app_2-450x250.jpg"
          tag="آموزشی"
          title="سوپر اپ اسنپ؛ اپلیکیشنی برای تمام نیازها"
          context=" اسنپ، اولین تاکسی اینترنتی ایران، طی پنج سال فعالیتش، از یک اپلیکیشن حمل و نقل به یک سوپر اپ با خدمات متنوع تبدیل شد. سوپر اپ اسنپ، پلت‌فرمی است برای سبک زندگی مدرن که راه‌حل‌های جدید و ساده‌ را جایگزین مدل‌های سنتی کرده است. سادگی، سرعت و مقرون به صرفه بودن شعار اصلی و..."
        />
        <Card
          thumb_src="https://snapp.ir/blog/wp-content/uploads/2021/10/هزینه-درمان-کودکان-اسنپ-450x250.jpg"
          tag="مسئولیت اجتماعی"
          title="تامین هزینه‌های درمان کودکان بستری با اسنپ‌کلاب"
          context=" سومین طرح نیکوکاری اسنپ‌کلاب با تمرکز بر تامین کمک‌هزینه‌ی درمان کودکان بستری در بیمارستان از ابتدای این هفته با همکاری خیریه‌‌ی «حس مهر» آغاز شد. کاربران اسنپ می‌توانند بدون پرداخت وجه نقد و با استفاده از امتیازهای اسنپ‌کلاب در این کار خیر مشارکت کنند. اسنپ به واسطه‌ی مسئولیت اجتماعی خود از ابتدای امسال امکان مشارکت..."
        />
        <Card
          thumb_src="https://snapp.ir/blog/wp-content/uploads/2020/01/call-center-1-450x250.jpg"
          tag="آموزشی"
          title="گزارش مسافران را جدی می‌گیریم"
          context=" در کنار تمام ویژگی‌های مهم اسنپ، سیستم امتیازدهی و دریافت گزارش مسافران بیش از ویژگی‌های دیگر خودنمایی می‌کند. سیستم امتیازدهی به راننده و کیفیت سفر امکانی است که پیش از این هیچ سیستم حمل و نقل شهری در اختیار شهروندان قرار نداده است. این سیستم راهی است برای رساندن حرف‌های مسافر به پلت‌فرم واسط،..."
        />
        <Card
          thumb_src="https://snapp.ir/blog/wp-content/uploads/2021/02/Safety-450x250.jpeg"
          tag="آموزشی"
          title="اسنپ چگونه امنیت سفر را تامین می‌کند"
          context=" امنیت سفر اولویت و دغدغه‌ی اصلی ما در اسنپ است. با ثبت اطلاعات کاربران مسافر و راننده و مشخصات سفرها،‌ پشتیبانی ۲۴ ساعته و احراز هویت و تایید صلاحیت کاربران راننده پشتوانه‌ای برای سفرهای امن ساخته‌ایم و همچنان خود را متعهد به یافتن راه‌حل‌های موثرتری برای تامین امنیت هر دو گروه از کاربرانمان می‌دانیم. تمامی رانندگان..."
        />
      </div>
    </div>
  );
};

export default CardContainer;
