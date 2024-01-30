import Banner from "@/components/Banner";
import type { Metadata } from "next";
import Connect from "@/components/Connect";
import Header from "@/components/Header";
import gioithieu1 from "../../../public/gioithieu1.jpg";
import gioithieu3 from "../../../public/gioithieu3.jpg";
import gioithieu6 from "../../../public/gioithieu6.jpg";
import data from "../../data/data.json";

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
              {data.about[0].title}
            </h1>
            <div className="xl:p-2 my-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.about[0].description as string,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* sứ mệnh */}
      <div className=" min-h-screen  relative">
        <div className="absolute px-5 h-1/2 z-50 xl:top-1/3  w-full top-10">
          <div className="container mx-auto bg-transparent shadow-xl p-8 rounded-lg">
            <h1 className="xl:text-5xl text-2xl font-bold">
              {data.about[1].title}
            </h1>
            <div className="p-2">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.about[1].description as string,
                }}
              ></div>
              <p className="xl:text-[22px] text-[18px] font-normal text-[#16205F] w-full text-justify my-2">
                Trong đó bao gồm:
              </p>
              <ul className=" xl:text-[22px] text-[18px] font-normal text-[#16205F] grid xl:grid-cols-2 grid-cols-1 gap-4">
                {data.about[1].detail_des?.map((item: any) => {
                  return (
                    <li
                      className="p-4 border rounded-lg text-md bg-slate-200  "
                      key={item.id}
                    >
                      {item?.title}
                    </li>
                  );
                })}
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
              {data?.about[2].title}
            </h1>
            <div className="xl:p-2">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.about[2].description as string,
                }}
              ></div>
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
