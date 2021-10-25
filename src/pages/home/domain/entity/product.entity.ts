import { Meta, Product } from "@home/infrastructure/entity";
import { EntityState } from "@reduxjs/toolkit";

export interface ProductEntityState
  extends EntityState<Product>,
    Pick<Meta, "total"> {
  error: string;
  loading: boolean;
  refresh: boolean;
}
