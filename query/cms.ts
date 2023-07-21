import { Key } from "react";

export const getProductGridQuery = (id: Key) => {
  return `{
        productGrid(where: {id: "${id}"}) {
          name
          products {
            id
            productName
            price
            salePrice
            newProduct
            offerPercent
            productImages {
              id
              url
            }
          }
        }
      }`;
};
