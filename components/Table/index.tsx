import {
  TableProps,
  Table as TableCore,
  TablePaginationConfig as TablePaginationConfigCore,
} from "antd";
// import { useStyle } from "./helpers";
import "./styles.scss";

export const Table = <Type extends object>({
  columns,
  dataSource,
  pagination,
  onChange,
  ...props
}: TableProps<Type>) => {
  // const styles = useStyle();

  return (
    <TableCore
      columns={columns}
      dataSource={dataSource}
      onChange={onChange}
      pagination={{
        position: ["bottomCenter"],
        showSizeChanger: true,
        pageSizeOptions: ["5", "10", "15", "20", "25"],
        showTotal: (total, [startItem, endItem]) =>
          `Showing ${startItem} - ${endItem} of ${total} items`,
        locale: {
          items_per_page: "",
        },
        ...pagination,
      }}
      // className={styles.customTable}
      scroll={{ x: "max-content" }}
      {...props}
    />
  );
};

export type TablePaginationConfig = TablePaginationConfigCore;
