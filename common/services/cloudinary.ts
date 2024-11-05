import { UploadProps } from "antd";

type onChangeUrlFile = (url: string) => void;

export const uploadProps = (onChangeUrlFile: onChangeUrlFile): UploadProps => {
  return {
    name: "file",
    multiple: true,
    action: `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
    data: {
      upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    },
    onChange(info) {
      if (info.file.status === "done") {
        onChangeUrlFile(info?.file?.response?.url);
      }
    },
  };
};
