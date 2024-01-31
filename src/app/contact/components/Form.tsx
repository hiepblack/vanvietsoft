"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [check, setCheck] = useState(0);
  const [form, setForm] = useState<any>({
    company_name: "",
    user_name: "",
    phone_number: "",
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
    // emailjs
    //   .send("service_u2gsnya", "template_978uew1", form, "jN_Xe5BR9kIqgaFDT")
    //   .then(
    //     (result) => {
    //       alert("Gửi email thành công");
    //       setForm({
    //         company_name: "",
    //         user_name: "",
    //         phone_number: null,
    //         email: "",
    //         project_detail: "",
    //       });
    //       setCheck(0);
    //     },
    //     (error) => {
    //       alert(error.text);
    //     }
    //   );
  };
  return (
    <div className="container mx-auto grid xl:grid-cols-2  my-4 gap-4  rounded-lg">
      <div className="bg-white rounded-lg p-2">
        <h2 className="md:text-[46px] text-[28px] p-2 text-[#16205F] font-semibold">
          Kết Nối Với Chúng Tôi Ngay Hôm Nay!
        </h2>
        <form action="" onSubmit={handleSendMail}>
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
              className="px-4 py-4 border rounded-md bg-[#F2CB00] text-white text-[16px] font-semibold w-full md:w-[40%] "
              type="submit"
            >
              Kết nối với chúng tôi
            </button>
          </div>
        </form>
      </div>
      <div className="h-[700px] overflow-hidden rounded-xl ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.708728125166!2d105.84734737583928!3d20.924035091366115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad8d042afdcd%3A0x2d397dd577f8fcf7!2zQ8O0bmcgVHkgVE5ISCBQaMOhdCBUcmnhu4NuIFBo4bqnbiBN4buBbSBWxINuIFZp4buHdA!5e0!3m2!1sfr!2s!4v1706150296145!5m2!1sfr!2s"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Form;
