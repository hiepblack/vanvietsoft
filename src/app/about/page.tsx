import Banner from "@/components/Banner";
import type { Metadata } from "next";
import Connect from "@/components/Connect";
import Header from "@/components/Header";
import gioithieu1 from "../../../public/gioithieu1.jpg";
import gioithieu2 from "../../../public/gioithieu2.jpg";
import gioithieu3 from "../../../public/gioithieu3.jpg";
import gioithieu4 from "../../../public/gioithieu4.jpg";
import gioithieu5 from "../../../public/gioithieu5.jpg";
import gioithieu6 from "../../../public/gioithieu6.jpg";

export const metadata: Metadata = {
  title: "Giới thiệu - Công ty TNHH phát triển phần mềm Văn Việt",
};

const AboutPage = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <Header bgColor="bg-white" color="[#16205F]" />
      </div>
      <div className="w-full min-h-min">
        <Banner
          title="Giới thiệu"
          description="Công ty TNHH phát triển phần mềm Văn Việt"
        />
      </div>
      {/* giới thiệu */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <img
            src={gioithieu1.src}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Giới thiệu về chúng tôi!</h1>
            <div className="p-1 my-4">
              <p className="text-[22px] font-normal text-[#16205F] w-full text-justify">
                <b>Công ty TNHH phát triển phần mềm Văn Việt</b> gọi tắt là{" "}
                <b>Công ty phần mềm Văn Việt</b> - là một trong số ít các công
                ty cung cấp các giải pháp, dịch vụ CNTT chuyên nghiệp và phát
                triển phần mềm trong lĩnh vực quản lý nhà nước, quản lý giáo
                dục. Ngoài ra chúng tôi cũng cung cấp dịch vụ tư vấn, thiết kế
                và phát triển phần mềm cũng như các giải pháp phần cứng, triển
                khai và bảo trì cho các hệ thống CNTT trong các doanh nghiệp...
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* sứ mệnh */}
      <div className="hero min-h-screen bg-white">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div>
            <h1 className="text-5xl font-bold">Sứ mệnh phục vụ!</h1>
            <div className="p-2">
              <p className="text-[22px] font-normal text-[#16205F] w-full text-justify">
                Nhiệm vụ của <b>Văn Việt</b> là tăng cường hiệu công việc của
                khách hàng bằng cách phát triển và chuyển giao các sản phẩm và
                dịch vụ CNTT chuyên nghiệp.
              </p>
              <p className="text-[22px] font-normal text-[#16205F] w-full text-justify my-2">
                Trong đó bao gồm:
              </p>
              <ul className="list-disc md:px-8 pl-8 text-[22px] font-normal text-[#16205F]">
                <li>
                  Cung cấp các dịch vụ phát triển phần mềm chất lượng cao, tư
                  vấn chuyên nghiệp, liên tục cải tiến để cải thiện hoạt động
                  của khách hàng;
                </li>
                <li>
                  Giúp khách hàng tiếp cận thông tin dữ liệu dễ dàng, nhanh
                  chóng, đảm bảo dữ liệu an toàn và bảo mật hơn
                </li>
                <li>Cải thiện sự trao đổi thông tin và trao đổi dữ liệu</li>
                <li>Giá dịch vụ linh động so với quy mô của từng khách hàng</li>
                <li>Đảm bảo cung cấp dịch vụ hỗ trợ nhanh chóng và hiệu quả</li>
              </ul>
            </div>
          </div>
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gioithieu1.src}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gioithieu2.src}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gioithieu3.src}
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gioithieu4.src}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gioithieu2.src}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gioithieu5.src}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tầm nhìn */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={gioithieu6.src}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Tầm nhìn chiến lược!</h1>
            <div className="p-2">
              <p className="text-[22px] font-normal text-[#16205F] w-full text-justify my-4 md:w-[90%]">
                <b>Văn Việt</b> là một công ty CNTT hàng đầu trong cung cấp dịch
                vụ tư vấn và triển khai các hệ thống, giải pháp CNTT hoàn chỉnh
                và tối ưu nhất cho các đơn vị hành chính nhà nước cũng như các
                doanh nghiệp trong cả nước
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto  px-2 py-4">
        <Connect />
      </div>
    </section>
  );
};
export default AboutPage;
