import { useProductEvent } from "@home/event";
import {
  FilterProductType,
  Product,
  ProductMeta,
  Status,
} from "@home/infrastructure/entity";
import { useQuery } from "@sinbad/mf-utility";
import { useCallback, useMemo } from "react";

export const useProductTableUtil = () => {
  const { set, get } = useQuery();
  const { fetchProductsHandler } = useProductEvent();

  const initTable = useMemo<TableProps<Product>>(
    () => ({
      data: [],
      columns: [],
      title: "Product",
      mutateAction: "add",
      canSearch: true,
      searchTrigger: "type",
    }),
    []
  );

  initTable.fetchData = useCallback(({ skip, limit, search, sortBy }) => {
    if (skip >= 0 || limit >= 1) {
      set("skip", skip);
      set("limit", String(limit));
    }

    set("keyword", search || 0);

    const params: ProductMeta = {
      skip,
      limit,
      keyword: search,
      status: <Status>get("status"),
      type: <FilterProductType>get("type"),
    };

    if (sortBy?.length > 0) {
      params.sort = sortBy[0].desc ? "desc" : "asc";
      params.sortBy = sortBy[0].id;
    }

    fetchProductsHandler(params);
  }, []);

  initTable.onMutateActionClick = useCallback(() => {
    console.log("ON_CLICK_ADD");
  }, []);

  return { initTable };
};
