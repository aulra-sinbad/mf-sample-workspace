import { ProductType } from "./product-type.type";
import { Sort } from "./sort.type";
import { Status } from "./status.type";

export interface Meta {
  limit: number;
  skip: number;
  total: number;
}

export interface FilterMeta {
  keyword?: string;
  sort?: Sort;
  sortBy?: string;
}

export type FilterProductType = Lowercase<ProductType> | "exclusive";

export interface ProductMeta extends FilterMeta, Omit<Meta, "total"> {
  status?: Status;
  type?: FilterProductType;
}
