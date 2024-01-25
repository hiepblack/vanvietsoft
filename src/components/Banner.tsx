import React from "react";
import banner from "../../public/Rectangle 26.png";

type Props = {
  title: string;
  description: string;
};

const Banner = ({ title, description }: Props) => {
  return (
    <div className="relative w-full">
      <img
        src={banner.src}
        alt=""
        className="w-full h-[200px] xl:h-auto object-cover"
      />
      <div className="inset-0 bg-black z-10 absolute opacity-25"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
        <h2 className="xl:text-[64px] text-[24px] font-semibold text-white ">
          {title}
        </h2>
        <p className="text-white xl:text-[16px] text-[14px]">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
