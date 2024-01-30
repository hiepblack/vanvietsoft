"use client";
import React, { useRef, useState } from "react";
import connectImg from "../../public/Rectangle 34.png";
import emailjs from "@emailjs/browser";

const Connect = () => {
  const [check, setCheck] = useState(0);
  const [form, setForm] = useState<any>({
    company_name: "",
    user_name: "",
    phone_number: null,
    email: "",
    project_detail: "",
  });
  const handleSendMail = (e: any) => {
    e.preventDefault();
    if (!check) {
      return alert(
        "Bạn chưa xác nhận rằng tôi đã đọc và chấp nhận Chính sách bảo mật"
      );
    }
    emailjs
      .send("service_u2gsnya", "template_978uew1", form, "jN_Xe5BR9kIqgaFDT")
      .then(
        (result) => {
          alert("Gửi email thành công");
          setForm({
            company_name: "",
            user_name: "",
            phone_number: null,
            email: "",
            project_detail: "",
          });
          setCheck(0);
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <div className="relative min-h-[1200px] md:min-h-screen">
      <div className="md:w-[1000px]  w-full min-h-screen">
        <img src={connectImg.src} alt="" />
      </div>
      <div className="md:w-[730px] w-[330px] md:h-[879px] absolute md:top-10 top-60 md:right-0 right-6 bg-white md:rounded-tl-[100px] md:py-[86px] md:pl-[86px] ">
        <h2 className="md:text-[46px] text-[28px] p-2 text-[#16205F] font-semibold">
          Kết Nối Với Chúng Tôi Ngay Hôm Nay!
        </h2>
        <form onSubmit={handleSendMail}>
          <div className="md:grid md:grid-cols-2">
            <div className="flex flex-col p-2">
              <label
                htmlFor="cty"
                className="text-[16px] text-[#16205F] font-semibold my-1"
              >
                Công ty
              </label>
              <input
                onChange={(e: any) =>
                  setForm({ ...form, company_name: e.target.value })
                }
                value={form.company_name}
                name="company_name"
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
                value={form.user_name}
                onChange={(e: any) =>
                  setForm({ ...form, user_name: e.target.value })
                }
                name="username"
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
                value={form.phone_number}
                onChange={(e: any) =>
                  setForm({ ...form, phone_number: e.target.value })
                }
                id="phone_number"
                name="phone_number"
                type="number"
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
                value={form.email}
                onChange={(e: any) =>
                  setForm({ ...form, email: e.target.value })
                }
                name="email"
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
              value={form.project_detail}
              onChange={(e: any) =>
                setForm({ ...form, project_detail: e.target.value })
              }
              name="project_detail"
              id="project_detail"
              cols={10}
              rows={10}
              className="p-2 border rounded-md outline-none"
              placeholder="Nhập vào đây"
            ></textarea>
          </div>
          <div className="p-2 flex items-start gap-2 w-[90%]">
            <input
              type="checkbox"
              className="my-1"
              name="check"
              value={check}
              onChange={() => {
                if (check == 0) setCheck(1);
                if (check == 1) setCheck(0);
              }}
            />
            <p className="text-[16px] text-[#16205F] font-normal">
              Bằng cách gửi biểu mẫu này, tôi xác nhận rằng tôi đã đọc và chấp
              nhận
              <b> Chính sách bảo mật</b>
            </p>
          </div>
          <div className="p-2">
            <button
              type="submit"
              className="px-4 py-4 border rounded-md bg-[#F2CB00] text-white text-[16px] font-semibold w-full md:w-[40%]"
            >
              Kết nối với chúng tôi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connect;
