import Banner from "@/components/Banner";
import Connect from "@/components/Connect";
import Header from "@/components/Header";
import React from "react";

type Props = {};

const ServicePage = (props: Props) => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <Header bgColor="bg-white" color="[#16205F]" />
      </div>
      <div className="w-full min-h-min">
        <Banner
          title="Dịch vụ"
          description="Công ty TNHH phát triển phần mềm Văn Việt"
        />
      </div>
      <div className="container mx-auto px-2 py-4 my-4">
        <Connect />
      </div>
    </section>
  );
};

export default ServicePage;
