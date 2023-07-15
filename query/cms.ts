import { Key } from "react";

export const getProductGridQuery = (id: Key) => {
  return `{
        productGrid(where: {id: "${id}"}) {
          name
          products {
            id
            productName
            price
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
