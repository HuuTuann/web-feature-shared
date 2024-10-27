import { Modal as ModalCore, ModalProps } from "antd";
import "./styles.scss";

export const Modal = ({ children, ...props }: ModalProps) => {
  return (
    <ModalCore width={768} {...props}>
      {children}
    </ModalCore>
  );
};
