import { getCMSData } from "@/utils/getCMSData";
import { getProductQuery } from "@/query";
import { ProductDescription } from "@/components/ProductDescription";

interface PageProps {
  params?: { slug: string[] };
}
export default async function ProductPage({ params }: PageProps) {
  const slug = params?.slug || [];

  const [id] = slug;

  const productData = await getCMSData(getProductQuery(id));

  return <ProductDescription productData={productData.product} />;
}
