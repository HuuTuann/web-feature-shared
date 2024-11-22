import { Button } from "@/modules/web-feature-shared/components/Button";
import { FileImageOutlined } from "@ant-design/icons";
import { Image } from "antd";
import React, { useState } from "react";
import "./styles.scss";
type Props = {
  url: string;
};

export const PreviewImage: React.FC<Props> = ({ url }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        type="default"
        size="small"
        icon={<FileImageOutlined />}
        onClick={() => setVisible(true)}
      />
      <Image
        style={{ display: "none" }}
        src={url}
        alt="Preview Image"
        preview={{
          visible,
          onVisibleChange: setVisible,
        }}
      />
    </>
  );
};
