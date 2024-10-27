import DraggerCore from "antd/es/upload/Dragger";
// import { DraggerProps as DraggerPropsCore } from "antd/es/upload";
import { uploadProps } from "@/modules/web-feature-shared";
import { InboxOutlined } from "@ant-design/icons";

type DraggerProps = {
  value?: [];
  onChange: (value: string) => void;
};

export const Dragger = ({ onChange, ...props }: DraggerProps) => {
  return (
    <DraggerCore {...uploadProps(onChange)} {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </DraggerCore>
  );
};
