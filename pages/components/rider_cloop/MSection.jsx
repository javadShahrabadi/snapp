import React from "react";
import Image from "next/image";
const MSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-4">
        {/* right section*/}
        <div className="col-span-3  py-5 pe-4">
          <div>
            {/* image banner */}
            <Image
              src="https://club.snapp.ir/wp-content/uploads/2021/05/carfix-simple.jpg"
              width={930}
              height={200}
              layout="responsive"
              className="rounded-md"
            />
          </div>
          <div className="mt-8">
            {/* service image banner */}
            <Image
              src="https://club.snapp.ir/wp-content/uploads/2021/10/Untitled-1-01.jpg"
              width={800}
              height={400}
              layout="responsive"
              className="rounded-md"
            />
          </div>
          <h2 className="text-3xl font-semibold text-[#222] text-center mt-4">
            سرویس درخواست پشتیبانی اسنپ
          </h2>
          {/* two column part */}
          <div className="grid grid-cols-2 mt-8 gap-y-8">
            <div>
              <div className="relative">
                <Image
                  src="https://club.snapp.ir/wp-content/uploads/2022/01/20220123-hefze_khunsardi-cab-h.jpg"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                {/* tag on thumbnail */}
                <h4 className="text-white text-sm font-semibold bg-[#00e261] w-1/5 py-1 text-center rounded-sm absolute bottom-2 right-36">
                  آموزش
                </h4>
              </div>

              <h2 className="mt-3 text-[#222] font-semibold text-md w-4/5">
                چگونه هنگام رانندگی و در ترافیک خونسردی خود را حفظ کنیم؟
              </h2>
              <p className="mt-2 text-sm text-justify w-4/5">
                رانندگی اصولی و اخلاق حرفه‌ای دو عامل مهمی هستند که کاربران
                راننده حرفه‌ای اسنپ با رعایت آنها آرامش و تجربه خوشایندی را برای
                مسافران ایجاد می‌کنند. اما گاهی اوقات رانندگی
              </p>
            </div>
            {/* ------ */}
            <div>
              <div className="relative">
                <Image
                  src="https://club.snapp.ir/wp-content/uploads/2021/12/20211213-Deawoo.jpg"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                {/* tag on thumbnail */}
                <h4 className="text-white text-sm font-semibold bg-[#00e261] w-1/5 py-1 text-center rounded-sm absolute bottom-2 right-36">
                  اسنپ باکس
                </h4>
              </div>

              <h2 className="mt-3 text-[#222] font-semibold text-md w-4/5">
                تسهیلات خرید نقد و اقساطی لوازم خانگی و جهیزیه دوو، ویژه کاربران
                راننده و موتورسوار کرج
              </h2>
              <p className="mt-2 text-sm text-justify w-4/5 ">
                خیرد انواع لوازم خانگی و صوتی-تصویری.
              </p>
            </div>
            {/* ------ */}
            <div>
              <div className="relative">
                <Image
                  src="https://club.snapp.ir/wp-content/uploads/2022/01/20220122-8talayi-Cab_H.jpg"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                {/* tag on thumbnail */}
                <h4 className="text-white text-sm font-semibold bg-[#00e261] w-1/5 py-1 text-center rounded-sm absolute bottom-2 right-36">
                  اسنپ باکس
                </h4>
              </div>

              <h2 className="mt-3 text-[#222] font-semibold text-md w-4/5">
                شرایط ویژه خرید اقساطی انواع گوشی موبایل، ویژه کاربران راننده و
                موتورسوار تهران
              </h2>
              <p className="mt-2 text-sm text-justify w-4/5 ">
                بدون پیش‌پرداخت، با کارمزد 1.8 درصد.
              </p>
            </div>
            {/* ------ */}
            <div>
              <div className="relative">
                <Image
                  src="https://club.snapp.ir/wp-content/uploads/2022/01/20220122-8talayi-Box-H.jpg"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                {/* tag on thumbnail */}
                <h4 className="text-white text-sm font-semibold bg-[#00e261] w-2/5 py-1 text-center rounded-sm absolute bottom-2 right-24">
                  خدمات رفاهی و آموزشی
                </h4>
              </div>

              <h2 className="mt-3 text-[#222] font-semibold text-md w-4/5">
                شرایط ویژه خرید اقساطی انواع گوشی موبایل، فروشگاه هشت طلایی
              </h2>
              <p className="mt-2 text-sm text-justify w-4/5 ">
                بدون پیش‌پرداخت، با کارمزد 1.8 درصد.
              </p>
            </div>
            {/* ------ */}
            <div>
              <div className="relative">
                <Image
                  src="https://club.snapp.ir/wp-content/uploads/2022/01/20220123-danayi_H.jpg"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                {/* tag on thumbnail */}
                <h4 className="text-white text-sm font-semibold bg-[#00e261] w-1/5 py-1 text-center rounded-sm absolute bottom-2 right-36 ">
                  خدمات خودرویی
                </h4>
              </div>

              <h2 className="mt-3 text-[#222] font-semibold text-md w-4/5">
                تسهیلات مرکز معاینه فنی دانایی، ویژه کاربران راننده کرمان
              </h2>
              <p className="mt-2 text-sm text-justify w-4/5 ">20 درصد تخفیف</p>
            </div>
            {/* ------ */}
            <div>
              <div className="relative">
                <Image
                  src="https://club.snapp.ir/wp-content/uploads/2022/01/RS_E102_blog.jpg"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                {/* tag on thumbnail */}
                <h4 className="text-white text-sm font-semibold bg-[#00e261] w-1/5 py-1 text-center rounded-sm absolute bottom-2 right-36">
                  رادیو اسنپ
                </h4>
              </div>

              <h2 className="mt-3 text-[#222] font-semibold text-md w-4/5">
                رادیو اسنپ؛ قسمت 102
              </h2>
              <p className="mt-2 text-sm text-justify w-4/5 ">
                این هفته در رادیو اسنپ با آقای سفری و ماجرای به خانه برگشتنش
                همراه میشویم. در ادامه نیز به سوالات پرتکرار شما عزیزان در
                شبکه‌های اجتماعی پاسخ می‌دهیم. همچنین فراموش
              </p>
            </div>
            {/* ------ */}
            <div>
              <div className="relative">
                <Image
                  src="https://club.snapp.ir/wp-content/uploads/2022/01/RS-E101_blog.jpg"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                {/* tag on thumbnail */}
                <h4 className="text-white text-sm font-semibold bg-[#00e261] w-1/5 py-1 text-center rounded-sm absolute bottom-2 right-36">
                  اسنپ باکس
                </h4>
              </div>

              <h2 className="mt-3 text-[#222] font-semibold text-md w-4/5">
                رادیو اسنپ؛ قسمت 101
              </h2>
              <p className="mt-2 text-sm text-justify w-4/5 ">
                در این قسمت به سوال‌های پرتکرار شما در شبکه‌های اجتماعی
                میپردازیم و در ادامه با آقای سفری و ماجراهایش هم‌مسیر می‌شویم.
                در آخر نیز به گزینه‌های نظرسنجی پایان سفر اشاره
              </p>
            </div>
            {/* ------ */}
            <div>
              <div className="relative">
                <Image
                  src="https://club.snapp.ir/wp-content/uploads/2022/01/20220115-Sport-mehdi.jpg"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                {/* tag on thumbnail */}
                <h4 className="text-white text-sm font-semibold bg-[#00e261] w-1/5 py-1 text-center rounded-sm absolute bottom-2 right-36">
                  اسنپ باکس
                </h4>
              </div>

              <h2 className="mt-3 text-[#222] font-semibold text-md w-4/5">
                تسهیلات خرید انواع لوازم جانبی و تزئینات خودرو، ویژه کاربران
                راننده کرج
              </h2>
              <p className="mt-2 text-sm text-justify w-4/5 ">
                تا 20 درصد تخفیف
              </p>
            </div>
          </div>
          {/* paginations */}
          <div className="flex flex-row item-center space-x-6 text-[#222] mt-16 items-center justify-center">
            <button className="me-6 hover:bg-[#00e261] hover:text-white hover:px-6 hover:py-1 rounded-md transition-all ease-in-out duration-200 font-semibold text-sm">
              بعدی
            </button>
            <ul className="flex flex-row items-center space-x-6 ">
              <li className="me-6 ms-6 text-white bg-[#00e261] w-[25px] h-[25px] rounded-full cursor-pointer flex items-center justify-center">
                1
              </li>
              <li className="cursor-pointer transition-colors ease-in-out duration-200 hover:text-[#00e261]">
                2
              </li>
              <li className="cursor-pointer transition-colors ease-in-out duration-200 hover:text-[#00e261]">
                3
              </li>
              <li className="cursor-pointer transition-colors ease-in-out duration-200 hover:text-[#00e261]">
                4
              </li>
            </ul>
            <button className="hover:bg-[#00e261] hover:text-white hover:px-6 hover:py-1 rounded-md transition-all ease-in-out duration-200 font-semibold text-sm">
              قبلی
            </button>
          </div>
          {/* end-two column part */}
        </div>
        {/* left section */}
        <div className="col-span-1  py-5 flex flex-col space-y-10">
          <div>
            <Image
              src="https://club.snapp.ir/wp-content/uploads/2021/05/carfix-sidebanner.jpg"
              width={310}
              height={170}
              className="rounded-md"
            />
          </div>
          {/* ------ */}
          <div>
            <Image
              src="https://club.snapp.ir/wp-content/uploads/2020/02/app-sidebar-300x150.jpg"
              width={310}
              height={170}
              className="rounded-md"
            />
          </div>
          {/* ------ */}
          <div>
            <Image
              src="https://club.snapp.ir/wp-content/uploads/2020/02/boxclub-sidebar-300x150.jpg"
              width={310}
              height={170}
              className="rounded-md"
            />
          </div>
          {/* ------ */}
          <div>
            <Image
              src="https://club.snapp.ir/wp-content/uploads/2022/01/RS_E102_blog-300x150.jpg"
              width={310}
              height={170}
              className="rounded-md"
            />
          </div>
          {/* ------ */}
          <div>
            <Image
              src="https://club.snapp.ir/wp-content/uploads/2020/02/video-sidebar-300x150.jpg"
              width={310}
              height={170}
              className="rounded-md"
            />
          </div>
          {/* ------ */}
          <div>
            <Image
              src="https://club.snapp.ir/wp-content/uploads/2020/02/offices-sidebar-300x150.jpg"
              width={310}
              height={170}
              className="rounded-md"
            />
          </div>
          {/* ------ */}
          <div>
            <Image
              src="https://club.snapp.ir/wp-content/uploads/2020/02/telegram-sidebar-300x150.jpg"
              width={310}
              height={170}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSection;
