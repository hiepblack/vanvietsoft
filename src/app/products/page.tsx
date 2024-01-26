import Banner from "@/components/Banner";
import Connect from "@/components/Connect";
import CardProduct from "./components/CardProduct";
import Header from "@/components/Header";

//fetching data

const ProductPage = async () => {
  const response = await fetch(`${process.env.API_URL}/api/products`, {
    method: "GET",
  });
  const data = (await response.json()) || [];
  console.log(data);

  return (
    <section className="min-h-screen ">
      <div className="container mx-auto">
        <Header bgColor="bg-white" color="[#16205F]" />
      </div>
      <div className="w-full min-h-min">
        <Banner
          title="Sản phẩm"
          description="Công ty TNHH phát triển phần mềm Văn Việt"
        />
      </div>
      <div className="container mx-auto my-8">
        <h1 className="md:text-[40px] text-[28px] text-[#16205F] font-semibold text-center md:text-left ">
          Danh sách sản phẩm
        </h1>
      </div>
      <div className="container mx-auto my-8 grid md:grid-cols-3 grid-cols-1 gap-8 ">
        <CardProduct data={data.posts} />
      </div>
      <div className="container mx-auto px-2 py-4 my-4">
        <Connect />
      </div>
    </section>
  );
};

export default ProductPage;
