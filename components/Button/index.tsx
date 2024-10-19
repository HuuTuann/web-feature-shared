import { Button as ButtonCore, ButtonProps } from "antd";
import "./styles.scss";

export const Button = ({
  type = "primary",
  size = "large",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonCore className={className} type={type} size={size} {...props}>
      {children}
    </ButtonCore>
  );
};
