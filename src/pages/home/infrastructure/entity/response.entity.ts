import { Meta } from "./meta.entity";

export interface PaginateResponse<T> {
  data: T[];
  meta: Meta;
}

export interface Response<T> {
  data: T;
}
