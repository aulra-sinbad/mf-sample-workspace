import { createAsyncThunk } from "@reduxjs/toolkit";
import { useApiSC } from "@sinbad/mf-utility";
import { ProductListResponse, ProductMeta } from "../entity";

export const fetchProductList = createAsyncThunk<
  ProductListResponse,
  ProductMeta,
  { rejectValue: string }
>("[HOME] fetchProductList", async (params, { rejectWithValue }) => {
  try {
    const res = useApiSC<ProductListResponse, object, ProductMeta>({
      type: "api",
      method: "GET",
      url: "/product/api/v1/seller-center/products",
      headers: {
        "X-Seller-ID": 1,
      },
      params: {
        ...params,
        keyword: params?.keyword || null,
      },
    });

    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
