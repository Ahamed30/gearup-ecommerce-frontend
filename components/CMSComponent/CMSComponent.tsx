import { HomePageType } from "@/types";
import { ProductGrid } from "../ProductGrid";
import { getCMSData } from "@/utils/getCMSData";
import { getProductGridQuery } from "@/query";

interface CMSComponentProps {
  data?: HomePageType;
}

export const CMSComponent = async ({ data }: CMSComponentProps) => {
  return data?.components?.map(async ({ id, name }) => {
    switch (name) {
      case "Featured products":
        const productGridData = await getCMSData(getProductGridQuery(id));
        return (
          <ProductGrid
            key={id}
            products={productGridData?.productGrid?.products}
          />
        );
    }
  });
};
