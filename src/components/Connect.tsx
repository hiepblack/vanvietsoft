import React from "react";
import connectImg from "../../public/Rectangle 34.png";

const Connect = () => {
  return (
    <div className="relative min-h-[1200px] md:min-h-screen">
      <div className="md:w-[1000px]  w-full min-h-screen">
        <img src={connectImg.src} alt="" />
      </div>
      <div className="md:w-[730px] w-[330px] md:h-[879px] absolute md:top-10 top-60 md:right-0 right-6 bg-white md:rounded-tl-[100px] md:py-[86px] md:pl-[86px] ">
        <h2 className="md:text-[46px] text-[28px] p-2 text-[#16205F] font-semibold">
          Kết Nối Với Chúng Tôi Ngay Hôm Nay!
        </h2>
        <form action="">
          <div className="md:grid md:grid-cols-2">
            <div className="flex flex-col p-2">
              <label
                htmlFor="cty"
                className="text-[16px] text-[#16205F] font-semibold my-1"
              >
                Công ty
              </label>
              <input
                id="cty"
                type="text"
                placeholder="Nhập vào đây"
                className="p-2 border rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col p-2">
              <label
                htmlFor="name"
                className="text-[16px] text-[#16205F] font-semibold my-1"
              >
                Tên của bạn
              </label>
              <input
                id="name"
                type="text"
                placeholder="Nhập vào đây"
                className="p-2 border rounded-md outline-none"
              />
            </div>
          </div>
          <div className="md:grid md:grid-cols-2">
            <div className="flex flex-col p-2">
              <label
                htmlFor="phone_number"
                className="text-[16px] text-[#16205F] font-semibold my-1"
              >
                Số điện thoại
              </label>
              <input
                id="phone_number"
                type="text"
                className="p-2 border rounded-md outline-none"
                placeholder="Nhập vào đây"
              />
            </div>
            <div className="flex flex-col p-2">
              <label
                htmlFor="email"
                className="text-[16px] text-[#16205F] font-semibold my-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="p-2 border rounded-md outline-none"
                placeholder="Nhập vào đây"
              />
            </div>
          </div>
          <div className="flex flex-col p-2">
            <label
              htmlFor="project_detail"
              className="text-[16px] text-[#16205F] font-semibold my-1"
            >
              Mô tả chi tiết dự án
            </label>
            <textarea
              name=""
              id="project_detail"
              cols={10}
              rows={10}
              className="p-2 border rounded-md outline-none"
              placeholder="Nhập vào đây"
            ></textarea>
          </div>
          <div className="p-2 flex items-start gap-2 w-[90%]">
            <input type="checkbox" className="my-1" />
            <p className="text-[16px] text-[#16205F] font-normal">
              Bằng cách gửi biểu mẫu này, tôi xác nhận rằng tôi đã đọc và chấp
              nhận
              <b> Chính sách bảo mật</b>
            </p>
          </div>
          <div className="p-2">
            <button className="px-4 py-4 border rounded-md bg-[#F2CB00] text-white text-[16px] font-semibold w-full md:w-[40%]">
              Kết nối với chúng tôi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connect;
