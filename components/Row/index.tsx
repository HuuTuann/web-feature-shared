import { Row as RowCore, RowProps } from "antd";

export const Row = ({ ...props }: RowProps) => {
  return <RowCore gutter={[8, 8]} {...props} />;
};
