import React from "react";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";
const Address = () => {
  return (
    <div className="bg-white grid grid-cols-4 max-w-6xl mx-auto relative -mt-16 rounded-md">
      {/* right section */}
      <div className="col-span-3 py-5 px-4 border border-gray-100 shadow-md rounded-md">
        {/* search box */}
        <div className="relative">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full px-10 py-2 bg-[#E8E8E8] rounded-md text-sm focus:outline-none"
            placeholder="جست و جوی نام شهر"
          />
          <SearchIcon className="w-4 h-4 text-black absolute top-2.5 right-2 cursor-pointer hover:text-[#00e261] transition-colors ease-in-out duration-200" />
          <ChevronDownIcon className="w-4 h-4 text-black absolute  left-2 top-2.5 cursor-pointer hover:text-[#00e261] transition-colors ease-in-out duration-200" />
        </div>
        {/* end-search box */}
        {/* content of addresses*/}
        <div className="flex flex-col space-y-4 mt-6">
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">دفتر مرکزی</h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: (دفتر تکمیل مدارک) خيابان گاندى جنوبى، خيابان هفدهم، پلاك ٢٧
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">ارومیه</h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: چهارراه مخابرات، خیابان برق، روبروی فروشگاه جواهر، کوچه شهید
              حسن زاده، ساختمان ۱۶، طبقه دوم، واحد یک و دو
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">اراک</h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              ساعت کاری بخش پشتیبانی: شنبه تا چهارشنبه ۸:۳۰ تا ۱۷:۳۰
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          ر{/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          ر{/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
          {/* -------- */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold cursor-pointer">
              دفتر امور کاربران راننده و مسافر در تهران
            </h3>
            <p className="cursor-pointer hover:text-[#00e261] transition-all ease-in-out duration-200">
              آدرس: خیابان آفریقا، خیابان شهید عاطفی غربی، خیابان مهرداد، پلاک
              ۱، طبقه ۴ جنوبی
            </p>
          </div>
        </div>
        {/* end-content of addresses*/}
      </div>
      {/* left section */}
      <div className="col-span-1 border border-gray-100 shadow-md rounded-md h-[500px] py-8 flex flex-col space-y-2 items-center ms-1 px-3">
        <h3 className=" font-semibold text-[#575757]">تماس با ما</h3>
        <div className="text-center">
          <p className="pt-2">
            تلفن پشتیبانی:{" "}
            <span className="hover:text-[#00e261] transition-all ease-in-out duration-200 cursor-pointer">
              ۴۱۸۴۹۰۰۰ – ۰۲۱
            </span>
            <br /> و{" "}
            <span className="hover:text-[#00e261] transition-all ease-in-out duration-200 cursor-pointer">
              ۹۱۰۳۹۰۰۰ – ۰۲۱
            </span>
          </p>
          <p className="pt-2">
            فکس: <span>۸۸ ۴۷ ۷۷ ۸۹ – ۰۲۱</span>
          </p>
          <p className="pt-2">
            پست الکترونیکی:{" "}
            <span className="hover:text-[#00e261] transition-all ease-in-out duration-200 cursor-pointer">
              info@snapp.cab
            </span>
          </p>
        </div>

        {/* -------- */}

        <div className="text-center pt-4">
          <h2 className="text-md font-bold text-[#00e261]">
            دفتر امور کاربران راننده و مسافر
          </h2>
          <p className="pt-2">
            شماره تماس:{" "}
            <span className="hover:text-[#00e261] transition-all ease-in-out duration-200 cursor-pointer">
              ۴۱۸۴۹۰۰۰ – ۰۲۱
            </span>
            <br /> و{" "}
            <span className="hover:text-[#00e261] transition-all ease-in-out duration-200 cursor-pointer">
              ۹۱۰۳۹۰۰۰ – ۰۲۱
            </span>
            <br />
            خدمات مربوط به مسافران به صورت غیر حضوری عرضه می‌شود.
          </p>
        </div>
        {/* -------- */}

        <div className="text-center pt-4">
          <h2 className="text-md font-bold text-[#00e261]">
            دفتر اسنپ‌باکس و اسنپ‌بایک در تهران
          </h2>
          <p className="pt-2">خیابان گاندی جنوبی، خیابان هفدهم ، پلاک ۲۷</p>
          تلفن پشتیبانی:{" "}
          <span className="hover:text-[#00e261] transition-all ease-in-out duration-200 cursor-pointer">
            ۴۱۸۴۹۰۰۰ – ۰۲۱
          </span>
        </div>
      </div>
      {/* -------- */}
      <div className="col-span-4 mt-6">
        <h2 className="text-[#00e261] font-semibold text-lg">
          دفتر توسعه کسب‌وکار پاسخگویی به سازمان‌ها و شرکت‌ها
        </h2>
        <p className="text-[#575757] leading-7 mt-4 text-justify">
          اگر قصد دارید از اسنپ برای امور حمل‌ونقلی کسب‌وکار کوچک یا بزرگ خود
          استفاده کنید با دفتر توسعه کسب‌وکار ما تماس بگیرید، تا راهکارهای
          سازمانی خود را به شما معرفی کنیم. در این بخش، بسته به نیازهای سازمان
          خود می‌توانید یکی از دو راهکار پنل یا کد سازمانی را جهت سهولت حمل‌ونقل
          در کسب‌وکارتان انتخاب کنید.
        </p>
        <span className="hover:text-[#00e261] transition-all ease-in-out duration-200 cursor-pointer pt-2">
          corporate@snapp.cab
        </span>
      </div>
      <div className="col-span-4 mt-4">
        <h2 className="text-[#00e261] font-semibold text-lg pb-4">
          دفتر روابط عمومی (پاسخگویی به امور رسانه‌ها)
        </h2>
        <span className="hover:text-[#00e261] transition-all ease-in-out duration-200 cursor-pointer">
          pr@snapp.cab
        </span>
        <p>
          فکس: <span>۸۸ ۴۷ ۷۷ ۸۹ – ۰۲۱</span>
        </p>
      </div>
      {/* ------------ */}
      <div className="mt-8 flex justify-between col-span-4 pb-10 items-center">
        <h3 className="text-[#404040] text-xl font-semibold">
          زندگی خودتو با اسنپ ساده‌تر کن!
        </h3>
        <div className="flex items-end">
          <div className="relative me-3">
            <input
              type="text"
              name="send-link"
              id="send-link"
              className="focus:outline-none text-sm border-b border-gray-200 px-5 py-2"
            />
            <span className="absolute -left-2 top-1 fill-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                class="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
            </span>
          </div>
          <button className="text-white font-semibold bg-[#00e261] px-4 py-1 rounded-md">
            ارسال لینک
          </button>
        </div>
      </div>
      {/* divider */}
    </div>
  );
};

export default Address;
