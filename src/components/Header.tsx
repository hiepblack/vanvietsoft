"use client";
import React, { useEffect, useState, useRef } from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import emailjs from "@emailjs/browser";

type Props = {
  bgColor: string;
  color: string;
};

const Header = ({ bgColor, color }: Props) => {
  const [check, setCheck] = useState(0);
  const pathname = usePathname();
  const form = useRef<any>(null);

  const [show, setShow] = useState(false);
  const handleShowMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  const handleSendMail = () => {
    if (!check) {
      return alert(
        "Bạn chưa xác nhận rằng tôi đã đọc và chấp nhận Chính sách bảo mật"
      );
    }
    // emailjs
    //   .send(
    //     "service_u2gsnya",
    //     "template_978uew1",
    //     form?.current,
    //     "jN_Xe5BR9kIqgaFDT"
    //   )
    //   .then(
    //     (result) => {
    //       alert("Gửi email thành công");
    //     },
    //     (error) => {
    //       alert(error.text);
    //     }
    //   );
  };

  return (
    <div className={`w-full shadow-sm mx-auto ${bgColor}`}>
      <div className="container mx-auto w-full min-h-min flex justify-between items-center p-4">
        <Link href="/">
          <img
            src={logo.src}
            alt=""
            className="object-cover md:w-[140px] md:h-[70px] h-[40px]"
          />
        </Link>
        <ul className="hidden grid-cols-5 gap-4 w-[55%] xl:grid  transition-all ml-2">
          <li
            className={`p-1 text-lg text-${color} ${
              pathname === "/" ? "font-semibold text-xl" : "font-normal"
            }  text-center hover:text-[#F2CB00] transition-all`}
          >
            <Link href="/">Trang chủ</Link>
          </li>
          <li
            className={`p-1 text-lg text-${color} ${
              pathname === "/about" ? "font-semibold text-xl" : "font-normal"
            }  text-center hover:text-[#F2CB00] transition-all`}
          >
            <Link href="/about">Giới thiệu</Link>
          </li>
          <li
            className={`p-1 text-lg text-${color} ${
              pathname === "/contact" ? "font-semibold text-xl" : "font-normal"
            }  text-center hover:text-[#F2CB00] transition-all`}
          >
            <Link href="/contact">Liên hệ</Link>
          </li>
          <li
            className={`p-1 text-lg text-${color} ${
              pathname === "/products" ? "font-semibold text-xl" : "font-normal"
            }  text-center hover:text-[#F2CB00] transition-all`}
          >
            <Link href="/products">Sản phẩm</Link>
          </li>
          <li
            className={`p-1 text-lg text-${color} ${
              pathname === "/services" ? "font-semibold text-xl" : "font-normal"
            }  text-center hover:text-[#F2CB00] transition-all`}
          >
            <Link href="/services">Dịch vụ</Link>
          </li>
        </ul>
        <button
          className="btn md:block hidden bg-[#F2CB00] text-white text-md font-semibold border-none"
          onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal_1") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          Kết nối với chúng tôi
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box max-w-3xl">
            <h3 className="font-bold text-lg">
              Kết Nối Với Chúng Tôi Ngay Hôm Nay!
            </h3>
            <div className="modal-action">
              <form method="dialog" ref={form} onSubmit={handleSendMail}>
                <div className="md:grid md:grid-cols-2">
                  <div className="flex flex-col p-2">
                    <label
                      htmlFor="cty"
                      className="text-[16px] text-[#16205F] font-semibold my-1"
                    >
                      Công ty
                    </label>
                    <input
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
                      name="phone_number"
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
                    Bằng cách gửi biểu mẫu này, tôi xác nhận rằng tôi đã đọc và
                    chấp nhận
                    <b> Chính sách bảo mật</b>
                  </p>
                </div>
                <div className="p-2 flex gap-4">
                  <button className="btn px-4 py-4 border rounded-md bg-[#F2CB00] text-white text-[16px] font-semibold w-full md:w-[40%]">
                    Kết nối với chúng tôi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
        <button className="sm:hidden block " onClick={handleShowMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <g clipPath="url(#clip0_108_842)">
              <path
                d="M4.5 27H31.5V24H4.5V27ZM4.5 19.5H31.5V16.5H4.5V19.5ZM4.5 9V12H31.5V9H4.5Z"
                fill="#16205F"
              />
            </g>
            <defs>
              <clipPath id="clip0_108_842">
                <rect width="36" height="36" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div
        className={`flex-col w-full absolute insert-0 bg-white ${
          !show ? "hidden" : "flex"
        } items-center z-50 h-screen`}
      >
        <ul className={`flex-col w-full flex p-4`}>
          <li className="p-4 text-[32px] text-[#16205F] font-normal  text-center  w-full hover:text-[#F2CB00]">
            <Link href="/">Trang chủ</Link>
          </li>
          <li className="p-4 text-[32px] text-[#16205F] font-normal  text-center  w-full hover:text-[#F2CB00]">
            <Link href="/about">Giới thiệu</Link>
          </li>
          <li className="p-4 text-[32px] text-[#16205F] font-normal text-center w-full hover:text-[#F2CB00]">
            <Link href="/contact">Liên hệ</Link>
          </li>
          <li className="p-4 text-[32px] text-[#16205F] font-normal text-center w-full hover:text-[#F2CB00]">
            <Link href="/products">Sản phẩm</Link>
          </li>
          <li className="p-4 text-[32px] text-[#16205F] font-normal text-center w-full hover:text-[#F2CB00]">
            <Link href="/services">Dịch vụ</Link>
          </li>
          <li>
            <button className="btn text-[32px] text-[#16205F] font-semibold border rounded-md border-[#16205F] shadow-[#16205F] w-full hover:text-[#F2CB00]">
              Kết nối với chúng tôi
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
