import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const listOfData = [
  "https://career.snapp.ir/img/slider/meeting.jpg",
  "https://career.snapp.ir/img/slider/working.jpg",
  "https://career.snapp.ir/img/slider/new_cube.jpg",
];

const Photos = () => {
  return (
    <div className="bg-white">
      <div className="pt-20 pb-10">
        <h2 className="text-4xl text-center text-[#404B58] font-semibold">
          PHOTOS
        </h2>
      </div>
      {/* images slider */}
      <Swiper spaceBetween={5} slidesPerView={2} effect="fade">
        <SwiperSlide>
          <img
            src="https://career.snapp.ir/img/slider/meeting.jpg"
            className="h-[500px] w-[1000px] rounded-md cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://career.snapp.ir/img/slider/working.jpg"
            className="h-[500px] w-[880px] rounded-md cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://career.snapp.ir/img/slider/new_cube.jpg"
            className="h-[500px] w-[850px] rounded-md cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://career.snapp.ir/img/slider/cube.jpg"
            className="h-[500px] w-[850px] rounded-md cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://career.snapp.ir/img/slider/workshop.png"
            className="h-[500px] w-[850px] rounded-md cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://career.snapp.ir/img/slider/slider1.jpg"
            className="h-[500px] w-[850px] rounded-md cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://career.snapp.ir/img/slider/car.jpg"
            className="h-[500px] w-[850px] rounded-md cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
      {/* divider */}
      <div className="border-b border-gray-200 pt-20" />
    </div>
  );
};

export default Photos;
