import data from "../../../../data/data.json";

export async function GET(request, { params }) {
  const slug = params.id;
  const data_product = data.posts.find((item) => item.slug == slug);
  return Response.json(data_product);
}
