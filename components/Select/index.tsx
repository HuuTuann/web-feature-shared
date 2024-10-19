import { Select as SelectCore, SelectProps } from "antd";
import "./styles.scss";

export const Select = ({ placeholder, options, ...props }: SelectProps) => {
  return <SelectCore placeholder={placeholder} options={options} {...props} />;
};
