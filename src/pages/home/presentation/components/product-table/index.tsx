import { ProductTableProps } from "@home/domain/entity";
import { Table } from "@sinbad/mf-react-component";
import { FC, memo } from "react";
import { useProductTableColumn as useTableColumn } from "./product-table-column";
import { useProductTableUtil as useTableSetup } from "./product-table.util";

const ProductTableMemo: FC<ProductTableProps> = (props) => {
  const { dataSource, totalRow, loading } = props;

  // NOTE Table setup
  const { initTable } = useTableSetup();
  const { columns } = useTableColumn();

  return (
    <Table
      {...initTable}
      columns={columns}
      data={dataSource}
      totalRows={totalRow}
      loading={loading}
    />
  );
};

export const ProductTable = memo(ProductTableMemo);
