import React from "react";
import Image from "next/image";
const DSection = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-md">
        <div className="grid grid-cols-3 gap-y-4 px-3 py-16">
          {/* start */}
          <div>
            <div className="relative">
              <Image
                src="https://club.snapp.ir/wp-content/uploads/2022/01/20220123-hefze_khunsardi-cab-h.jpg"
                width={400}
                height={200}
                className="rounded-sm"
              />
              <small className="text-white text-sm font-semibold bg-[#00e261] px-8 py-1 text-center rounded-md absolute bottom-2 right-36">
                آموزش
              </small>
            </div>
            <h2 className="text-lg w-4/5 mt-4 text-[#222] hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer font-semibold ">
              چگونه هنگام رانندگی و در ترافیک خونسردی خود را حفظ کنیم؟
            </h2>
          </div>
          {/* end */}
          {/* start */}
          <div>
            <div className="relative">
              <Image
                src="https://club.snapp.ir/wp-content/uploads/2021/11/20211127-iOS-01-.jpg"
                width={400}
                height={200}
                className="rounded-sm"
              />
              <small className="text-white text-sm font-semibold bg-[#00e261] px-8 py-1 text-center rounded-md absolute bottom-2 right-36">
                آموزش
              </small>
            </div>
            <h2 className="text-lg w-4/5 mt-4 text-[#222] hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer font-semibold ">
              دانلود اپلیکیشن رانندگان اسنپ ویژه کاربران آیفون
            </h2>
          </div>
          {/* end */}
          {/* start */}
          <div>
            <div className="relative">
              <Image
                src="https://club.snapp.ir/wp-content/uploads/2021/11/RideLevel-BOX-00.jpg"
                width={400}
                height={200}
                className="rounded-sm"
              />
              <small className="text-white text-sm font-semibold bg-[#00e261] px-8 py-1 text-center rounded-md absolute bottom-2 right-36">
                آموزش
              </small>
            </div>
            <h2 className="text-lg w-4/5 mt-4 text-[#222] hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer font-semibold ">
              راهنمای ثبت به موقع و درست مراحل سفر در اپلیکیشن اسنپ‌باکس
            </h2>
          </div>
          {/* end */}
          {/* start */}
          <div>
            <div className="relative">
              <Image
                src="https://club.snapp.ir/wp-content/uploads/2021/09/20210922-Truck-H.jpg"
                width={400}
                height={200}
                className="rounded-sm"
              />
              <small className="text-white text-sm font-semibold bg-[#00e261] px-8 py-1 text-center rounded-md absolute bottom-2 right-36">
                آموزش
              </small>
            </div>
            <h2 className="text-lg w-4/5 mt-4 text-[#222] hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer font-semibold ">
              قوانینی برای افزایش کیفیت سفرهای کاربران راننده کامیونت اسنپ‌باکس
            </h2>
          </div>
          {/* end */}
          {/* start */}
          <div>
            <div className="relative">
              <Image
                src="https://club.snapp.ir/wp-content/uploads/2021/09/20210907-truck-box-H.jpg"
                width={400}
                height={200}
                className="rounded-sm"
              />
              <small className="text-white text-sm font-semibold bg-[#00e261] px-8 py-1 text-center rounded-md absolute bottom-2 right-36">
                آموزش
              </small>
            </div>
            <h2 className="text-lg w-4/5 mt-4 text-[#222] hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer font-semibold ">
              راهنمای ثبت نام رانندگان کامیونت
            </h2>
          </div>
          {/* end */}
          {/* start */}
          <div>
            <div className="relative">
              <Image
                src="https://club.snapp.ir/wp-content/uploads/2021/09/20210911-cancelation-box-H-1.jpg"
                width={400}
                height={200}
                className="rounded-sm"
              />
              <small className="text-white text-sm font-semibold bg-[#00e261] px-8 py-1 text-center rounded-md absolute bottom-2 right-36">
                آموزش
              </small>
            </div>
            <h2 className="text-lg w-4/5 mt-4 text-[#222] hover:text-[#00e261] transition-colors ease-in-out duration-200 cursor-pointer font-semibold ">
              نحوه لغو سفر بدون تماس با پشتیبانی ویژه اسنپ‌باکس
            </h2>
          </div>
          {/* end */}
        </div>
        {/* banners */}
        <div className="cursor-pointer flex justify-center px-5 lg:px-0">
          <Image
            src="https://club.snapp.ir/wp-content/uploads/2019/11/signup-banner.jpg"
            width={1200}
            height={240}
            className="rounded-md hover:scale-95 transition-all ease-in-out duration-200"
          />
        </div>
        <div className="cursor-pointer pt-10 flex justify-center px-5 lg:px-0 pb-16">
          <Image
            src="https://club.snapp.ir/wp-content/uploads/2019/11/cooperation.jpg"
            width={1200}
            height={240}
            className="rounded-md hover:scale-95 transition-all ease-in-out duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default DSection;
