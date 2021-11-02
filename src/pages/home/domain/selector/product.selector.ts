import { RootState } from "@home/application";
import { Product } from "@home/infrastructure/entity";
import { createDraftSafeSelector, createEntityAdapter } from "@reduxjs/toolkit";

export const productAdapter = createEntityAdapter<Product>({
  selectId: (row) => row.id,
});

/** NOTE
 * createSelector
 * https://redux-toolkit.js.org/api/createSelector#createdraftsafeselector
 */
const productState = (state: RootState) => state.product;

export const { selectAll: selectAllProduct } =
  productAdapter.getSelectors(productState);

export const selectProductErrorState = createDraftSafeSelector(
  productState,
  (state) => state.error
);

export const selectProductLoadingState = createDraftSafeSelector(
  productState,
  (state) => state.loading
);

export const selectProductRefreshState = createDraftSafeSelector(
  productState,
  (state) => state.refresh
);

export const selectProductTotalState = createDraftSafeSelector(
  productState,
  (state) => state.total
);
