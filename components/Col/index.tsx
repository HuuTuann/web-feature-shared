import { Col as ColCore, ColProps } from "antd";

export const Col = ({ ...props }: ColProps) => {
  return <ColCore span={12} {...props} />;
};
