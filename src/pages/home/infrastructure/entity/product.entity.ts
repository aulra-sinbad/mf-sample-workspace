import { Exclusive } from "./exclusive.type";
import { ProductType } from "./product-type.type";
import { PaginateResponse } from "./response.entity";
import { Status } from "./status.type";

export interface Product {
  readonly id: NonNullable<string>;
  exclusive: NonNullable<Exclusive>;
  name: NonNullable<string>;
  originalPrice: NonNullable<number>;
  sinbadCode: NonNullable<string>;
  slug: NonNullable<string>;
  status: NonNullable<Status>;
  supplierCode: NonNullable<string>;
  thumbnail: NonNullable<string>;
  type: NonNullable<ProductType>;
}

export type ProductListResponse = PaginateResponse<Product>;
