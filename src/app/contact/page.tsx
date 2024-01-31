import Banner from "@/components/Banner";
import Header from "@/components/Header";
import React from "react";
import Form from "./components/Form";

const ContactPage = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <Header bgColor="bg-white" color="[#16205F]" />
      </div>
      <div className="w-full min-h-min">
        <Banner
          title="Liên hệ"
          description="Công ty TNHH phát triển phần mềm Văn Việt"
        />
      </div>
      <div className="min-h-screen bg-base-200 p-4">
        <div className="container mx-auto p-4">
          <div className="bg-white rounded-lg p-4">
            <div>
              <span className="text-lg text-[#16205F] font-semibold">
                Giám đốc:{" "}
              </span>
              <span className="text-md text-[#16205F] font-normal">
                Mr.Soạn
              </span>
            </div>
            <div>
              <span className="text-lg text-[#16205F] font-semibold">
                Điện thoại:{" "}
              </span>
              <span className="text-md text-[#16205F] font-normal">
                0972.391.698
              </span>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
