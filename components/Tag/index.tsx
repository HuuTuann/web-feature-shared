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
        marginRight: 0,
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
    backgroundColor: "var(--color-bg-primary)",
    color: "var(--color-primary)",
  },
  success: {
    backgroundColor: "var(--color-bg-success)",
    color: "var(--color-success)",
  },
  danger: {
    backgroundColor: "var(--color-bg-danger)",
    color: "var(--color-danger)",
  },
  transfer: {
    backgroundColor: "var(--color-bg-warning)",
    color: "var(--color-warning)",
  },
};
