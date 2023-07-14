import { Key } from "react";

export const getProductGridQuery = (id: Key) => {
  return `{
        productGrid(where: {id: "${id}"}) {
          products {
            id
            productName
            price
            newProduct
            productImages {
              id
              url
            }
          }
        }
      }`;
};
