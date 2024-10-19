import { Tag as TagCore } from "antd";

export const Tag = ({
  bordered = false,
  variant = "default",
  className,
  children,
}: TagProps) => {
  return (
    <TagCore
      bordered={bordered}
      className={className}
      style={{
        ...variantStyles[variant],
        fontWeight: 600,
        borderRadius: 16,
        padding: "1px 16px 3px",
      }}
    >
      {children}
    </TagCore>
  );
};

type VariantType = "default" | "success" | "danger" | "transfer";

type TagProps = {
  children: React.ReactNode;
  variant?: VariantType;
  bordered?: boolean;
  className?: string;
};

const variantStyles = {
  default: {
    backgroundColor: "var(--bg-primary)",
    color: "var(--primary)",
  },
  success: {
    backgroundColor: "var(--bg-success)",
    color: "var(--success)",
  },
  danger: {
    backgroundColor: "var(--bg-danger)",
    color: "var(--danger)",
  },
  transfer: {
    backgroundColor: "var(--bg-warning)",
    color: "var(--warning)",
  },
};
