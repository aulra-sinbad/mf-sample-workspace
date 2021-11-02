import { productStateKey } from "@home/domain/constant";
import { ProductEntityState } from "@home/domain/entity";
import {
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
} from "@home/domain/repository";
import { productAdapter } from "@home/domain/selector";
import { fetchProductList } from "@home/infrastructure/thunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductEntityState = productAdapter.getInitialState({
  error: null,
  loading: false,
  refresh: false,
  total: 0,
});

/** NOTE
 * createSlice
 * https://redux-toolkit.js.org/api/createSlice#createslice
 */
const productSlice = createSlice({
  name: productStateKey,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, fetchProductsRequest)
      .addCase(fetchProductList.fulfilled, fetchProductsSuccess)
      .addCase(fetchProductList.rejected, fetchProductsFailure);
  },
});

export const { actions: productActions, reducer: productReducer } =
  productSlice;
