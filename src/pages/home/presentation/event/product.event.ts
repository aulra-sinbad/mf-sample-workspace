import { useHomeDispatch } from "@home/application";
import { ProductMeta } from "@home/infrastructure/entity";
import { fetchProductList } from "@home/infrastructure/thunk";
import { useToast } from "@sinbad/mf-react-component";
import { useCallback } from "react";

export const useProductEvent = () => {
  const dispatch = useHomeDispatch();

  const fetchProductsHandler = useCallback((params: ProductMeta) => {
    return dispatch(fetchProductList(params))
      .unwrap()
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return { fetchProductsHandler };
};
