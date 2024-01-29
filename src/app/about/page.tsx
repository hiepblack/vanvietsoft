import Banner from "@/components/Banner";
import type { Metadata } from "next";
import Connect from "@/components/Connect";
import Header from "@/components/Header";
import gioithieu1 from "../../../public/gioithieu1.jpg";
import gioithieu3 from "../../../public/gioithieu3.jpg";
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
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={gioithieu1.src}
            className="xl:w-1/3 w-full rounded-lg object-cover h-[300px] xl:h-full"
          />
          <div>
            <h1 className="xl:text-5xl text-2xl font-bold">
              Giới thiệu về chúng tôi!
            </h1>
            <div className="xl:p-2 my-4">
              <p className="xl:text-[22px] text-[18px] font-normal text-[#16205F] w-full text-justify">
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
      <div className=" min-h-screen bg-white relative">
        <div className="absolute px-5 h-1/2 z-50 xl:top-1/3  w-full top-10">
          <div className="container mx-auto bg-transparent shadow-xl p-8 rounded-lg">
            <h1 className="xl:text-5xl text-2xl font-bold">Sứ mệnh phục vụ!</h1>
            <div className="p-2">
              <p className="xl:text-[22px] text-[18px] font-normal text-[#16205F] w-full text-justify">
                Nhiệm vụ của <b>Văn Việt</b> là tăng cường hiệu công việc của
                khách hàng bằng cách phát triển và chuyển giao các sản phẩm và
                dịch vụ CNTT chuyên nghiệp.
              </p>
              <p className="xl:text-[22px] text-[18px] font-normal text-[#16205F] w-full text-justify my-2">
                Trong đó bao gồm:
              </p>
              <ul className=" xl:text-[22px] text-[18px] font-normal text-[#16205F] grid xl:grid-cols-2 grid-cols-1 gap-4">
                <li className="p-4 border rounded-lg text-md">
                  Đảm bảo cung cấp dịch vụ hỗ trợ nhanh chóng và hiệu quả
                </li>
                <li className="p-4 border rounded-md text-md">
                  Đảm bảo cung cấp dịch vụ hỗ trợ nhanh chóng và hiệu quả
                </li>
                <li className="p-4 border rounded-md text-md">
                  Đảm bảo cung cấp dịch vụ hỗ trợ nhanh chóng và hiệu quả
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
          src={gioithieu3.src}
          className="h-[100%] w-full absolute object-cover z-0 inset-0"
        />
      </div>
      {/* tầm nhìn */}
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={gioithieu6.src}
            className="xl:w-1/3 w-full rounded-lg object-cover"
          />
          <div>
            <h1 className="xl:text-5xl text-2xl font-bold">
              Tầm nhìn chiến lược!
            </h1>
            <div className="xl:p-2">
              <p className="xl:text-[22px] text-md font-normal text-[#16205F] w-full text-justify my-4 md:w-[90%]">
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
