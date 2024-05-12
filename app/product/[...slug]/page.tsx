import { ProductDescription } from "@/components/ProductDescription";
import { getProductQuery } from "@/query";
import { ProductType } from "@/types";
import { getCMSData } from "@/utils/getCMSData";
import { handlefetchOperation } from "@/utils/handlefetchOperation";
import { productSizeMapper } from "@/utils/productSizeMapper";

interface PageProps {
  params?: { slug: string[] };
}
export default async function ProductPage({ params }: PageProps) {
  const slug = params?.slug || [];

  const [id] = slug;

  const productDataFromCMS = await getCMSData(getProductQuery(id));

  const inventoryData = await handlefetchOperation(
    `/product/inventory?productId=${id}`,
    "GET"
  );

  const productData: ProductType = {
    ...productDataFromCMS?.product,
    allSizes: productSizeMapper(
      productDataFromCMS?.product?.size,
      inventoryData
    ),
    inStock: inventoryData?.inStock,
  };

  return <ProductDescription productData={productData} />;
}
