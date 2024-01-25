"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  content: [];
};

const Slide = ({ content }: Props) => {
  return (
    <Swiper
      modules={[Navigation]}
      speed={400}
      spaceBetween={16}
      loop={true}
      breakpoints={{
        380: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {content.map((item: any, index: number) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex bg-[#F9F9F9] px-2 py-4 rounded-[8px] gap-4 hover:shadow-md">
              <div className="w-[80px] h-[80px] bg-[#FFF856] rounded-md flex items-center justify-center border">
                <img src={item?.icon.src} alt="" />
              </div>

              <div className="w-[80%]">
                <h3 className="text-[#16205F] text-[28px] font-semibold">
                  {item.title}
                </h3>
                <p className="text-[#16205F] text-[18px] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slide;
