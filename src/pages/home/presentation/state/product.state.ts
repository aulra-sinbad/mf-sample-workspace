import { useHomeSelector } from "@home/application";
import {
  selectAllProduct,
  selectProductLoadingState,
  selectProductTotalState,
} from "@home/domain/selector";

export const useProductState = () => {
  const loadingProduct = useHomeSelector(selectProductLoadingState);
  const products = useHomeSelector(selectAllProduct);
  const totalProduct = useHomeSelector(selectProductTotalState);

  return { loadingProduct, products, totalProduct };
};
