import React from "react";
import Image from "next/image";
const FooterDark = () => {
  return (
    <div className="w-full bg-[#061C3F]">
      <div className="max-w-5xl mx-auto py-4">
        {/* up section */}
        <div className="flex items-center">
          <Image
            src="https://digitalsignup.snapp.ir/static/media/logo.61376645.png"
            width={90}
            height={30}
          />
          <ul className="flex flex-row text-white space-x-4">
            <li className="ms-4 me-4">دریافت اسنپ</li>
            <li>فرصت‌های شغلی</li>
            <li>شرایط و قوانین</li>
            <li>حریم خصوصی</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>سوالات متداول</li>
            <li>بازگشت به نسخه قبلی</li>
          </ul>
        </div>
        {/* divider*/}
        <div className="border-t border-gray-500 mt-3" />
        {/* down section */}
        <div className="flex items-center justify-between text-white mt-4">
          <p>
            کپی رایت تمامی حقوق مادی و معنوی این سرویس (وب سایت و اپلیکیشن های
            موبایل) متعلق به ایده گزین ارتباطات روماک (اسنپ) است.
          </p>
          <p>Copyright ©</p>
        </div>
      </div>
    </div>
  );
};

export default FooterDark;
