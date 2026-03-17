import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "children",
      type: "ReactNode",
      default: "—",
      description: "Chip content.",
    },
    {
      prop: "variant",
      type: '"solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "dot"',
      default: '"solid"',
      description: "Visual style variant.",
    },
    {
      prop: "color",
      type: '"default" | "primary" | "secondary" | "success" | "warning" | "danger"',
      default: '"default"',
      description: "Semantic color.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Chip size.",
    },
    {
      prop: "radius",
      type: '"none" | "sm" | "md" | "lg" | "full"',
      default: '"full"',
      description: "Border radius.",
    },
    {
      prop: "colorDepth",
      type: "50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950",
      default: "500",
      description: "Color intensity used to compute CSS variables.",
    },
    {
      prop: "avatar",
      type: "ReactNode",
      default: "—",
      description: "Avatar element rendered at the start.",
    },
    {
      prop: "startContent",
      type: "ReactNode",
      default: "—",
      description: "Content rendered before the children.",
    },
    {
      prop: "endContent",
      type: "ReactNode",
      default: "—",
      description: "Content rendered after the children.",
    },
    {
      prop: "isDisabled",
      type: "boolean",
      default: "false",
      description: "Disables interactions and reduces emphasis.",
    },
    {
      prop: "onClose",
      type: "(e: PressEvent) => void",
      default: "—",
      description: "Shows a close button and is called when it is pressed.",
    },
    {
      prop: "classNames",
      type: 'Partial<Record<"base" | "content" | "dot" | "avatar" | "closeButton", string>>',
      default: "—",
      description: "Slot class overrides.",
    },
    {
      prop: "style",
      type: "CSSProperties",
      default: "—",
      description: "Inline styles for the root element.",
    },
  ];

  return (
    <PropsTableBase
      title="Chip Props"
      rows={rows}
      footnote="Chip also supports standard div props such as className, id, aria-*, and data-*."
    />
  );
};

export default PropsTable;

