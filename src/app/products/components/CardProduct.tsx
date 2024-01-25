"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  data: any[];
};

const CardProduct = ({ data }: Props) => {
  const router = useRouter();
  const handleDetailProduct = (slug: string) => {
    router.push(`/products/${slug}`);
  };
  return (
    <>
      {data.map((product: any, index: number) => {
        return (
          <div
            className="card card-compact w-full bg-base-100 shadow-xl md:h-[350px] object-cover p-2 xl:p-0"
            key={index}
          >
            <figure>
              <img src={product?.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product?.title}</h2>
              <p className="text-[14px] font-normal">{product?.sort_content}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary text-white"
                  onClick={() => handleDetailProduct(product?.slug)}
                >
                  Xem Ngay
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardProduct;
