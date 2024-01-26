import Banner from "@/components/Banner";
import Connect from "@/components/Connect";
import Header from "@/components/Header";
import Link from "next/link";
import data from "../../../data/data.json";

const getOneProduct = (slug: string) => {
  const product = data.posts.find((p) => p.slug === slug);
  return product;
};

export default function ProductDetailPage({ params }: any) {
  const data = getOneProduct(params.slug);
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <Header bgColor="bg-white" color="[#16205F]" />
      </div>
      <div className="w-full min-h-min">
        <Banner title={data?.title as string} description={""} />
      </div>

      <div className="container mx-auto my-4">
        <div className="md:text-lg text-sm breadcrumbs font-semibold p-2">
          <ul>
            <li>
              <Link href={"/"}>Trang chủ</Link>
            </li>
            <li>
              <Link href={"/products"}>Sản phẩm</Link>
            </li>
            <li>
              <Link href={`/products/${data?.id}`}>{data?.title}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 my-8  border-b bg-gray-100 rounded-md overflow-hidden">
        <div className="col-span-1">
          <div
            dangerouslySetInnerHTML={{ __html: data?.content as string }}
          ></div>

          <div className="p-4">
            <p className="text-[18px] font-semibold">
              Người viết:{" "}
              <span className="font-normal"> {data?.author.name}</span>
            </p>
            <p className="text-[18px] font-semibold">
              Ngày đăng:{" "}
              <span className="font-normal">{data?.published_at}</span>
            </p>
          </div>
        </div>
        <div className="p-4 ">
          <img src={data?.image} alt="" className="rounded-md" />
          <p className="text-center p-1">
            <i>Hình ảnh : {data?.title}</i>{" "}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-2 py-4 my-4">
        <Connect />
      </div>
    </section>
  );
}
