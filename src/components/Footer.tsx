import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import data from "../data/data.json";

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full border border-bottom border-top shadow-sm bg-white">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 container mx-auto p-4">
          <ul>
            <li className="p-2">
              <Link href="/">
                <img src={logo.src} alt="" className="w-[180px] h-[90px] " />
              </Link>
            </li>
            <li className="p-2">
              <p className="text-xl font-normal text-[#16205f]">
                Công ty TNHH phát triển phần mềm Văn Việt
              </p>
            </li>
            <li className="flex p-2 gap-2">
              <span className="text-xl font-normal text-[#16205f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_610)">
                    <path
                      d="M17.38 10.7901L15.18 8.59012C14.9 8.31012 14.82 7.92012 14.93 7.57012C15.3 6.45012 15.5 5.25012 15.5 4.00012C15.5 3.45012 15.95 3.00012 16.5 3.00012H20C20.55 3.00012 21 3.45012 21 4.00012C21 13.3901 13.39 21.0001 4 21.0001C3.45 21.0001 3 20.5501 3 20.0001V16.5101C3 15.9601 3.45 15.5101 4 15.5101C5.24 15.5101 6.45 15.3101 7.57 14.9401C7.92 14.8201 8.32 14.9101 8.59 15.1801L10.79 17.3801C13.62 15.9301 15.94 13.6201 17.38 10.7901Z"
                      fill="#16205F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_610">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-xl font-normal text-[#16205f]">
                (024) 35.191.290
              </span>
            </li>
            <li className="flex p-2 gap-2">
              <span className="text-xl font-normal text-[#16205f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_613)">
                    <path
                      d="M22 6.00024C22 4.90024 21.1 4.00024 20 4.00024H4C2.9 4.00024 2 4.90024 2 6.00024V18.0002C2 19.1002 2.9 20.0002 4 20.0002H20C21.1 20.0002 22 19.1002 22 18.0002V6.00024ZM20 6.00024L12 11.0002L4 6.00024H20ZM20 18.0002H4V8.00024L12 13.0002L20 8.00024V18.0002Z"
                      fill="#16205F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_613">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.000244141)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-xl font-normal text-[#16205f]">
                vanvietcompany@gmail.com
              </span>
            </li>
            <li className="flex p-2 gap-2">
              <span className="text-xl font-normal text-[#16205f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_616)">
                    <path
                      d="M12 2.00024C8.13 2.00024 5 5.13024 5 9.00024C5 14.2502 12 22.0002 12 22.0002C12 22.0002 19 14.2502 19 9.00024C19 5.13024 15.87 2.00024 12 2.00024ZM7 9.00024C7 6.24024 9.24 4.00024 12 4.00024C14.76 4.00024 17 6.24024 17 9.00024C17 11.8802 14.12 16.1902 12 18.8802C9.92 16.2102 7 11.8502 7 9.00024Z"
                      fill="#16205F"
                    />
                    <path
                      d="M12 11.5002C13.3807 11.5002 14.5 10.381 14.5 9.00024C14.5 7.61953 13.3807 6.50024 12 6.50024C10.6193 6.50024 9.5 7.61953 9.5 9.00024C9.5 10.381 10.6193 11.5002 12 11.5002Z"
                      fill="#16205F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_616">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.000244141)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-xl font-normal text-[#16205f]">
                Thôn 2, Vạn Phúc, Thanh Trì, Hà Nội
              </span>
            </li>
          </ul>
          <ul className="px-2 py-4">
            <li className="py-2">
              <p className="text-[22px] font-semibold text-[#16205f] ">
                Về chúng tôi
              </p>
            </li>
            <li className="py-2">
              <Link
                href="/about"
                className="text-[18px] font-normal text-[#16205f] hover:text-yellow-500"
              >
                Giới thiệu
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/contact"
                className="text-[18px] font-normal text-[#16205f] hover:text-yellow-500"
              >
                Liên hệ
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/products"
                className="text-[18px] font-normal text-[#16205f] hover:text-yellow-500"
              >
                Sản phẩm
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/services"
                className="text-[18px] font-normal text-[#16205f] hover:text-yellow-500"
              >
                Dịch vụ
              </Link>
            </li>
          </ul>

          <ul className="px-2 py-4">
            <li className="py-2">
              <p className="text-[22px] font-semibold text-[#16205f] ">
                Xem nhiều
              </p>
            </li>

            <li className="py-2">
              <Link
                href="/"
                className="text-[18px] font-normal text-[#16205f] hover:text-yellow-500"
              >
                Phần mềm Quản lý văn bản điều hành
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/"
                className="text-[18px] font-normal text-[#16205f] hover:text-yellow-500"
              >
                Phần mềm Quản lý thư viện
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/"
                className="text-[18px] font-normal text-[#16205f] hover:text-yellow-500"
              >
                Phần mềm Quản lý trường học
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/"
                className="text-[18px] font-normal text-[#16205f] hover:text-yellow-500"
              >
                Phần mềm Quản lý cai nghiện
              </Link>
            </li>
          </ul>
          <ul className="px-2 py-4">
            <li className="py-2">
              <p className="text-[22px] font-semibold text-[#16205f] ">
                Thống kê
              </p>
            </li>
            <li className="py-2">
              <p className="text-[18px] font-normal text-[#16205f] hover:text-yellow-500">
                Lượt xem : {Math.floor(Math.random() * 1000) > 900}
              </p>
            </li>
            <li className="py-2">
              <p className="text-[18px] font-normal text-[#16205f] hover:text-yellow-500">
                Các bài viết : {data.posts.length} bài viết
              </p>
            </li>
            <li className="py-2">
              <p className="text-[18px] font-normal text-[#16205f] hover:text-yellow-500">
                Số lần xem các bài viết
              </p>
            </li>
          </ul>
        </div>
        <div className="container mx-auto p-4">
          <p className="text-[18px] font-semibold text-[#16205f] ">
            Theo dõi chúng tôi
          </p>
          <div className="flex gap-2 py-2">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M6.25 3.75024C4.86875 3.75024 3.75 4.86899 3.75 6.25024V23.7502C3.75 25.1315 4.86875 26.2502 6.25 26.2502H23.75C25.1313 26.2502 26.25 25.1315 26.25 23.7502V6.25024C26.25 4.86899 25.1313 3.75024 23.75 3.75024H6.25ZM6.25 6.25024H23.75V23.7502H6.25V6.25024ZM9.72412 7.89575C8.65287 7.89575 8.01025 8.53972 8.01025 9.39722C8.01025 10.2547 8.65295 10.8962 9.6167 10.8962C10.6879 10.8962 11.3306 10.2547 11.3306 9.39722C11.3306 8.53972 10.6879 7.89575 9.72412 7.89575ZM8.0957 12.5002V21.2502H11.25V12.5002H8.0957ZM13.8525 12.5002V21.2502H17.0068V16.4675C17.0068 15.0438 18.0226 14.8391 18.3276 14.8391C18.6326 14.8391 19.4482 15.145 19.4482 16.4675V21.2502H22.5V16.4675C22.5 13.7213 21.2797 12.5002 19.7534 12.5002C18.2272 12.5002 17.4131 13.0084 17.0068 13.7209V12.5002H13.8525Z"
                  fill="#16205F"
                />
              </svg>
            </Link>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M15 2.50024C8.11125 2.50024 2.5 8.11149 2.5 15.0002C2.5 21.889 8.11125 27.5002 15 27.5002C21.8888 27.5002 27.5 21.889 27.5 15.0002C27.5 8.11149 21.8888 2.50024 15 2.50024ZM15 5.00024C20.5377 5.00024 25 9.46259 25 15.0002C25 20.0183 21.3317 24.1415 16.5234 24.8733V17.9812H19.4336L19.8901 15.0247H16.5234V13.4084C16.5234 12.1797 16.9237 11.0891 18.0737 11.0891H19.9194V8.50854C19.5944 8.4648 18.9086 8.36938 17.6123 8.36938C14.9048 8.36938 13.3179 9.79938 13.3179 13.0569V15.0247H10.5347V17.9812H13.3179V24.8489C8.58786 24.0513 5 19.963 5 15.0002C5 9.46259 9.46235 5.00024 15 5.00024Z"
                  fill="#16205F"
                />
              </svg>
            </Link>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M10 3.75024C6.55375 3.75024 3.75 6.55399 3.75 10.0002V20.0002C3.75 23.4465 6.55375 26.2502 10 26.2502H20C23.4463 26.2502 26.25 23.4465 26.25 20.0002V10.0002C26.25 6.55399 23.4463 3.75024 20 3.75024H10ZM10 6.25024H20C22.0675 6.25024 23.75 7.93274 23.75 10.0002V20.0002C23.75 22.0677 22.0675 23.7502 20 23.7502H10C7.9325 23.7502 6.25 22.0677 6.25 20.0002V10.0002C6.25 7.93274 7.9325 6.25024 10 6.25024ZM21.25 7.50024C20.9185 7.50024 20.6005 7.63194 20.3661 7.86636C20.1317 8.10078 20 8.41872 20 8.75024C20 9.08176 20.1317 9.39971 20.3661 9.63413C20.6005 9.86855 20.9185 10.0002 21.25 10.0002C21.5815 10.0002 21.8995 9.86855 22.1339 9.63413C22.3683 9.39971 22.5 9.08176 22.5 8.75024C22.5 8.41872 22.3683 8.10078 22.1339 7.86636C21.8995 7.63194 21.5815 7.50024 21.25 7.50024ZM15 8.75024C11.5538 8.75024 8.75 11.554 8.75 15.0002C8.75 18.4465 11.5538 21.2502 15 21.2502C18.4462 21.2502 21.25 18.4465 21.25 15.0002C21.25 11.554 18.4462 8.75024 15 8.75024ZM15 11.2502C17.0675 11.2502 18.75 12.9327 18.75 15.0002C18.75 17.0677 17.0675 18.7502 15 18.7502C12.9325 18.7502 11.25 17.0677 11.25 15.0002C11.25 12.9327 12.9325 11.2502 15 11.2502Z"
                  fill="#16205F"
                />
              </svg>
            </Link>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M6.25 3.75024C4.87125 3.75024 3.75 4.87149 3.75 6.25024V23.7502C3.75 25.129 4.87125 26.2502 6.25 26.2502H23.75C25.1287 26.2502 26.25 25.129 26.25 23.7502V6.25024C26.25 4.87149 25.1287 3.75024 23.75 3.75024H6.25ZM6.25 6.25024H23.75L23.7524 23.7502H6.25V6.25024ZM18.208 8.89185C16.493 8.89185 15.1001 10.286 15.1001 11.9998C15.1001 12.321 15.2075 12.5355 15.2075 12.7493C12.6363 12.643 10.3867 11.3576 8.88672 9.53638C8.56547 9.96513 8.45703 10.4992 8.45703 11.0354C8.45703 12.1067 8.99357 12.9661 9.85107 13.7161C9.31607 13.6086 8.88578 13.5001 8.45703 13.2864C8.45703 14.7864 9.52791 15.9656 10.9204 16.2869C10.5992 16.3944 10.3847 16.3943 10.0635 16.3943C9.95598 16.3943 9.74012 16.2869 9.52637 16.2869C9.95512 17.4656 11.0269 18.428 12.4194 18.428C11.3482 19.178 9.95451 19.7146 8.56201 19.7146H7.8125C9.205 20.5709 10.8131 21.1086 12.5269 21.1086C18.2056 21.1086 21.3135 16.3933 21.3135 12.322V11.8923C21.8497 11.4636 22.3837 10.9284 22.8149 10.2834C22.1724 10.6059 21.6362 10.7131 20.9937 10.8206C21.6362 10.3931 22.1715 9.85669 22.3853 9.10669C21.849 9.42794 21.2065 9.7487 20.4565 9.8562C19.9203 9.2137 19.0655 8.89185 18.208 8.89185Z"
                  fill="#16205F"
                />
              </svg>
            </Link>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M15 5.00024C15 5.00024 7.18193 5.0002 5.23193 5.52271C4.15568 5.81021 3.30996 6.65718 3.02246 7.73218C2.49996 9.68218 2.5 15.0002 2.5 15.0002C2.5 15.0002 2.49996 20.3183 3.02246 22.2683C3.30996 23.3446 4.15693 24.1903 5.23193 24.4778C7.18193 25.0003 15 25.0002 15 25.0002C15 25.0002 22.8181 25.0003 24.7681 24.4778C25.8431 24.1903 26.69 23.3433 26.9775 22.2683C27.5 20.3183 27.5 15.0002 27.5 15.0002C27.5 15.0002 27.5 9.68218 26.9775 7.73218C26.69 6.65718 25.8431 5.81021 24.7681 5.52271C22.8181 5.0002 15 5.00024 15 5.00024ZM15 7.50024C18.6025 7.50024 23.1136 7.66726 24.1211 7.93726C24.3323 7.99351 24.5055 8.16665 24.563 8.37915C24.8642 9.50165 25 12.9277 25 15.0002C25 17.0727 24.8642 20.4976 24.563 21.6213C24.5067 21.8326 24.3336 22.0057 24.1211 22.0632C23.1148 22.3332 18.6025 22.5002 15 22.5002C11.3988 22.5002 6.88766 22.3332 5.87891 22.0632C5.66766 22.007 5.49451 21.8338 5.43701 21.6213C5.13576 20.4988 5 17.0727 5 15.0002C5 12.9277 5.13576 9.50171 5.43701 8.37671C5.49326 8.16671 5.66641 7.99351 5.87891 7.93726C6.88516 7.66726 11.3975 7.50024 15 7.50024ZM12.5 10.6692V19.3313L20 15.0002L12.5 10.6692Z"
                  fill="#16205F"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <span className="text-[18px] font-normal text-[#16205f]">
          © 2017 CÔNG TY TNHH PHÁT TRIỂN PHẦN MỀM VĂN VIỆT
        </span>
      </div>
    </div>
  );
};

export default Footer;
