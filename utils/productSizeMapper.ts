export interface inventoryDataProps {
  size: { [key: string]: number };
  inStock: boolean;
}
export const productSizeMapper = (
  sizes: string[],
  inventoryData: inventoryDataProps
) => {
  const sizesFromCMS = sizes?.sort((a: string, b: string) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a.localeCompare(b);
  });
  const sizeArray = sizesFromCMS?.map((sizeValue: string) => ({
    size: sizeValue,
    inventoryCount: inventoryData?.size[parseInt(sizeValue)] ?? 0,
  }));

  return sizeArray;
};
