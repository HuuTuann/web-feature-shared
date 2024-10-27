import { InputNumberProps } from "antd";
import { InputNumber as InputNumberCore } from "antd";
import "./styles.scss";

export const InputNumber = ({ ...props }: InputNumberProps) => {
  return (
    <InputNumberCore
      style={{
        width: "100%",
      }}
      {...props}
    />
  );
};
