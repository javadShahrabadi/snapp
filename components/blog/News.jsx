import Image from "next/image";
const News = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10 gap-x-30 gap-y-10 py-10 px-16">
        <div>
          <h2 className="font-semibold">اخبار</h2>
          {/* rows */}
          <div className="flex flex-row items-center mt-6 border-b pb-2 lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/12/1050x445-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۲۷ آذر, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                ثبت رکورد ۳ میلیون و ۹۹ هزار و ۲۵۳ سفر اسنپی در یک روز
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center mt-6 border-b pb-2  lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/12/اسنپ-ونچرز-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۱۶ آذر, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                اسنپ‌ونچرز با هدف سرمایه‌گذاری جسورانه کار خود را آغاز کرد
              </p>
            </div>
          </div>
          {/* ----- */}
          <div className="flex flex-row items-center mt-6 border-b pb-2  lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/11/Blog-2-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۶ آذر, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                آغاز فعالیت اسنپ در بناب و مهاباد
              </p>
            </div>
          </div>
          {/* ------- */}
          <div className="flex flex-row items-center mt-6 border-b lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/11/Route-Deviation-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۲۴ آبان, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                شناسایی و پیگیری «انحراف از مسیر»، قابلیت امنیتی جدید
              </p>
            </div>
          </div>
          {/* --------- */}
          <div className="flex flex-row items-center mt-6 border-b pb-2  lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/11/Blog-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۱۹ آبان, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                آغاز فعالیت اسنپ در دماوند و فیروزکوه
              </p>
            </div>
          </div>

          {/* end-rows */}
        </div>
        <div>
          <h2 className="font-semibold">آموزش</h2>
          {/* rows */}
          <div className="flex flex-row items-center mt-6 border-b pb-2 lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/12/1050x445-1-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۴ دی, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                در برابر کاربر راننده چه مسئولیتی داریم؟
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center mt-6 border-b pb-2 lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/11/Header-Blog-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۹ آذر, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                مهلت استفاده از امتیازهای اسنپ‌کلاب
              </p>
            </div>
          </div>
          {/* ----- */}
          <div className="flex flex-row items-center mt-6 border-b pb-2 lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/10/email-confiramtion-1140x445-1-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۱۲ مهر, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                نحوه اضافه کردن ایمیل به حساب کاربری
              </p>
            </div>
          </div>
          {/* ------- */}
          <div className="flex flex-row items-center mt-6 border-b pb-2 lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/05/اسنپ‌باکس-1050x445--85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۴ خرداد, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                نکاتی که برای ارسال بسته با اسنپ‌باکس باید بدانیم
              </p>
            </div>
          </div>
          {/* --------- */}
          <div className="flex flex-row items-center mt-6 border-b pb-2 lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/02/Ride-in-hurry-1-1-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۲۶ اسفند, ۱۳۹۹</small>
              <p className="text-sm font-semibold">
                گزینه «عجله دارم» در اپلیکیشن اسنپ
              </p>
            </div>
          </div>

          {/* end-rows */}
        </div>
        <div>
          <h2 className="font-semibold">مسئولیت اجتماعی</h2>
          {/* rows */}
          <div className="flex flex-row items-center mt-6 border-b pb-2 lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2022/01/blog-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۱۲ دی, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                کمک به اشتغال مادران کم‌برخوردار
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center mt-6 border-b pb-2 lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/12/Header-disability-day-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۱۰ آذر, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                اقدامات اسنپ برای حمایت از افراد دارای معلولیت
              </p>
            </div>
          </div>
          {/* ----- */}
          <div className="flex flex-row items-center mt-6 border-b pb-2 lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/11/blog-1-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۱ آذر, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                تخفیف ویژه برای موسسات خیریه
              </p>
            </div>
          </div>
          {/* ------- */}
          <div className="flex flex-row items-center mt-6 border-b pb-2 lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/10/هزینه-درمان-کودکان-اسنپ-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۱۰ مهر, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                تامین هزینه‌های درمان کودکان بستری با اسنپ‌کلاب
              </p>
            </div>
          </div>
          {/* --------- */}
          <div className="flex flex-row items-center mt-6 border-b pb-2 lg:w-4/5 w-full">
            {/* image */}
            <div>
              <Image
                src="https://snapp.ir/blog/wp-content/uploads/2021/09/1050X445-Blog-85x85.jpg"
                width={50}
                height={50}
                className="rounded-br-[20px]"
              />
            </div>
            {/* content */}
            <div className="flex flex-col ms-4 space-y-1">
              <small className="text-xs text-[#777]">۳۱ شهریور, ۱۴۰۰</small>
              <p className="text-sm font-semibold">
                حمایت از تحصیل دانش‌آموزان کم‌برخوردار
              </p>
            </div>
          </div>

          {/* end-rows */}
        </div>
      </div>
    </div>
  );
};

export default News;
