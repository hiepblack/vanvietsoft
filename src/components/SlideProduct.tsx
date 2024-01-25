"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CardProduct from "./CardProduct";

type Props = {
  content: [];
};

const SlideProduct = ({ content }: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
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
      pagination={true}
    >
      {content.map((item: any, index: number) => {
        return (
          <SwiperSlide key={index} className="p-2 md:p-0">
            <CardProduct index={index} item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SlideProduct;
