import React from "react";
import { Link } from "@chakra-ui/next-js";

type Props = {
  index?: number;
  item?: {
    icon: any;
    title: string;
    description: string;
    slug: string;
  };
};

const CardProduct = ({ index, item }: Props) => {
  return (
    <div
      key={index}
      className="flex flex-col items-center md:px-2 px-4 py-8 md:block"
    >
      <img
        src={item?.icon.src}
        alt=""
        className="bg-[#FFF856] rounded-md w-[122px] h-[122px] md:w-[84px] md:h-[84px] object-cover"
      />
      <p className="text-[#16205F] text-[22px] font-semibold mt-4 mb-1">
        {item?.title}
      </p>
      <p className="text-[#16205F] text-[18px] font-normal">
        {item?.description}
      </p>
      <Link href={`/products/${item?.slug}`}>
        <button className="rounded-[8px] bg-[#F2CB00] flex text-white px-6 py-3 text-[16px] items-center gap-2 font-normal my-2">
          Xem ngay
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_1_397)">
                <path
                  d="M10.0002 3.33325L8.82516 4.50825L13.4752 9.16658H3.3335V10.8333H13.4752L8.82516 15.4916L10.0002 16.6666L16.6668 9.99992L10.0002 3.33325Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_397">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CardProduct;
