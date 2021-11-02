import { useProductState } from "@home/state";
import { FC } from "react";
import { ProductTable } from "../product-table";

export const ProductListPage: FC = () => {
  const { loadingProduct, products, totalProduct } = useProductState();

  return (
    <ProductTable
      tabIdx={0}
      dataSource={products}
      totalRow={totalProduct}
      loading={loadingProduct}
    />
  );
};
