import type { Key } from "react";

export const getProductQuery = (id: Key) => {
  return `{
        product(where: {id: "${id}"}) {
            productName
            price
            salePrice
            productDescription
            productImages {
                id
                url
            }
            size
            newProduct
            offerPercent
        }
    }`;
};
