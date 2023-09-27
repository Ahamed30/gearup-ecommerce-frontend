import { ProductDescription } from "@/components/ProductDescription";
import { getProductQuery } from "@/query";
import { getCMSData } from "@/utils/getCMSData";

interface PageProps {
  params?: { slug: string[] };
}
export default async function ProductPage({ params }: PageProps) {
  const slug = params?.slug || [];

  const [id] = slug;

  const productData = await getCMSData(getProductQuery(id));

  return <ProductDescription productData={productData.product} />;
}
