import { Product } from "@home/infrastructure/entity";
import { createEntityAdapter } from "@reduxjs/toolkit";

export const productAdapter = createEntityAdapter<Product>({
  selectId: (row) => row.id,
});
