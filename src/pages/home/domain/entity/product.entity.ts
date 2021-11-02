import { Meta, Product } from "@home/infrastructure/entity";
import { EntityState } from "@reduxjs/toolkit";

export interface ProductTableProps extends Loading {
  dataSource: Product[];
  tabIdx: number;
  totalRow: number;
}

export interface ProductEntityState
  extends EntityState<Product>,
    Pick<Meta, "total"> {
  error: string;
  loading: boolean;
  refresh: boolean;
}
