import { productStateKey } from "@home/domain/constant";
import {
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
} from "@home/domain/repository";
import { productAdapter } from "@home/domain/selector";
import { fetchProductList } from "@home/infrastructure/thunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState = productAdapter.getInitialState();

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
