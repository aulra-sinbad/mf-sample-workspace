import { ProductListResponse } from "@home/infrastructure/entity";
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ProductEntityState } from "../entity";
import { productAdapter } from "../selector";

export const fetchProductsRequest: CaseReducer<ProductEntityState> = (
  state
) => {
  if (!state.loading) {
    state.loading = false;
  }
};

export const fetchProductsSuccess: CaseReducer<
  ProductEntityState,
  PayloadAction<ProductListResponse>
> = (state, { payload }) => {
  if (state.loading === true) {
    productAdapter.setAll(state, payload.data);
    state.loading = false;
    state.total = payload.meta.total;

    if (state.error) {
      state.error = null;
    }
  }
};

export const fetchProductsFailure: CaseReducer<
  ProductEntityState,
  PayloadAction<string>
> = (state, { payload }) => {
  if (state.loading === true) {
    state.loading = false;
    state.error = payload;
  }
};
