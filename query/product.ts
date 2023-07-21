import type { Key } from "react";

export const getProductQuery = (id: Key) => {
  return `{
        product(where: {id: "${id}"}) {
            id
            productName
            price
            salePrice
            productDescription
            heroImage {
                id
                url
            }
            productImages {
                id
                url
            }
            size
            newProduct
            offerPercent
            color
        }
    }`;
};
