import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
const Footer = () => {
  return (
    <div className="mt-10 ">
      {/* top section Footer */}
      <div className="bg-[#01EF74] p-10 hidden lg:flex w-full h-40">
        <div className="flex flex-row max-w-6xl mx-auto items-center justify-between">
          <ChevronRightIcon className="w-6 h-6 text-gray-200 shrink-0" />
          <div className="flex flex-row px-5 items-center space-x-8 overflow-hidden">
            <div className="bg-[#212529] text-white font-semibold px-16 py-3 me-8">
              تبریز
            </div>
            <div className="bg-[#212529] text-white font-semibold px-16 py-3">
              اصفهان
            </div>
            <div className="bg-[#212529] text-white font-semibold px-16 py-3">
              مشهد
            </div>
            <div className="bg-[#212529] text-white font-semibold px-16 py-3">
              تهران
            </div>
            <div className="bg-[#212529] text-white font-semibold px-16 py-3">
              شیراز
            </div>
          </div>
          <ChevronLeftIcon className="w-6 h-6 text-white shrink-0" />
        </div>
      </div>
      {/* end-top section Footer */}
      {/* --------- */}
      <div className="w-full h-20 bg-[#1c2023] flex items-center justify-center">
        <p className="text-xs text-[#555] px-10 lg:px-0">
          ©کپی رایت تمامی حقوق مادی و معنوی این سرویس (وب سایت و اپلیکیشن های
          موبایل) متعلق به ایده گزین ارتباطات روماک (اسنپ) است.
        </p>
      </div>
    </div>
  );
};

export default Footer;
