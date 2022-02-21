import React from "react";
import Image from "next/image";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(false);
  const [manger, setManger] = useState(true);

  const user_handle = (e) => {
    e.preventDefault();
    setUser(true);
    setManger(false);
  };
  const manager_handle = (e) => {
    e.preventDefault();
    setUser(false);
    setManger(true);
  };
  return (
    <div className="bg-[url('https://corporate.snapp.taxi/b54aa830d0574adae48958efc1d3223d.jpg')] h-screen w-full">
      {/* login form */}
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center h-screen">
        {/* image above of form */}
        <div className="w-[100px] h-[100px]">
          <Image
            src="https://corporate.snapp.taxi/9eb3c2e45187eeee236bb35cef0eba52.png"
            width={100}
            height={80}
            layout="responsive"
          />
        </div>

        {/* form  */}
        <div className="w-4/5 bg-[#101115] bg-opacity-90 rounded-md xs:px-4 lg:w-full">
          <div className="w-full flex flex-row justify-around items-center">
            {/* button og mangers */}
            <button
              className={`text-white w-1/2 py-4 ${
                manger ? "active__btn_login animation_color_btn" : ""
              }`}
              onClick={(e) => manager_handle(e)}
            >
              ورود مدیریت
            </button>
            {/* button og users */}
            <button
              className={`text-white w-1/2 py-4 ${
                user ? "active__btn_login animation_color_btn" : ""
              }`}
              onClick={(e) => user_handle(e)}
            >
              ورود اپراتور
            </button>
          </div>
          {/* form section */}
          <form
            action="/login"
            className="flex flex-col space-y-8 mt-5 w-full px-10 py-10"
          >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="نام کاربری"
              className="text-center bg-transparent border-b border-[#575757] py-2 focus:outline-none text-white focus:border-[#fff] transition-colors ease-out delay-100"
            />
            <input
              type="text"
              name="password"
              id="password"
              placeholder="رمز عبور"
              className="text-center bg-transparent border-b border-[#575757] py-2 focus:outline-none text-white focus:border-[#fff] transition-colors ease-out delay-100"
            />
          </form>
        </div>
        <button
          type="button"
          className="w-4/5 lg:w-full bg-[#a3a3a3] py-4 text-white text-center rounded-b-md"
        >
          ورود
        </button>
        <div className="flex flex-col space-y-4 text-center mt-4">
          <a className="cursor-pointer text-white font-semibold hover:text-[#1AA15A] transition-colors ease-out delay-150">
            درباره پنل سازمانی
          </a>
          <a className="cursor-pointer text-white font-semibold hover:text-[#1AA15A] transition-colors ease-out delay-150">
            حساب کاربری ندارید؟ ثبت نام کنید!
          </a>
          <a className="cursor-pointer text-white font-semibold hover:text-[#1AA15A] transition-colors ease-out delay-150">
            رمز عبور خود را فراموش کرده اید؟
          </a>
        </div>
      </div>
      {/* end-form */}
    </div>
  );
};

export default Login;
