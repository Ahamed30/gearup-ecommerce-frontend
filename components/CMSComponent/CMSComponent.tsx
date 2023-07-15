import { HomePageType } from "@/types";
import { ProductGrid } from "../ProductGrid";
import { getCMSData } from "@/utils/getCMSData";
import { getProductGridQuery } from "@/query";

interface CMSComponentProps {
  data?: HomePageType;
}

export const CMSComponent = async ({ data }: CMSComponentProps) => {
  return data?.components?.map(async ({ id, __typename }) => {
    switch (__typename) {
      case "ProductGrid":
        const productGridData = await getCMSData(getProductGridQuery(id));
        return (
          <ProductGrid key={id} productGrid={productGridData?.productGrid} />
        );
    }
  });
};
