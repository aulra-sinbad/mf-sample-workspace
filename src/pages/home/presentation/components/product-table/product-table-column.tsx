import { Product } from "@home/infrastructure/entity";
import { useFormatter } from "@sinbad/mf-utility";
import { useCallback, useMemo } from "react";

export const useProductTableColumn = () => {
  const { currencyFormat } = useFormatter();

  const priceView = useCallback((value: number) => {
    return typeof value === "number" && !isNaN(Number(value))
      ? currencyFormat(value)
      : "-";
  }, []);

  const columns = useMemo<TableColumn<Product>[]>(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Sinbad Product ID", accessor: "sinbadCode" },
      {
        Header: "Supplier Product ID",
        accessor: (row) => (row.supplierCode ? row.supplierCode : "-"),
      },
      {
        Header: "Price",
        accessor: "originalPrice",
        Cell: (row) => priceView(row.value),
      },
      { Header: "Type", accessor: "type" },
      { Header: "Exclusive", accessor: "exclusive" },
    ],
    []
  );

  return { columns };
};
