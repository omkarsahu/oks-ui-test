import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "title",
      type: "ReactNode",
      default: '"Title"',
      description: "Title content.",
    },
    {
      prop: "as",
      type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
      default: "—",
      description: "Heading element to render.",
    },
    {
      prop: "tag",
      type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
      default: "—",
      description: "Alias for as.",
    },
    {
      prop: "color",
      type: '"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger" | "black" | "white" | string',
      default: "—",
      description: "Text/icon color.",
    },
    {
      prop: "colorDepth",
      type: "number",
      default: "500",
      description: "Color intensity (snapped to 50..950).",
    },
    {
      prop: "icon",
      type: "ReactNode",
      default: "—",
      description: "Optional icon.",
    },
    {
      prop: "iconPosition",
      type: '"start" | "end" | "before" | "after"',
      default: '"start"',
      description: "Where the icon is placed relative to the title.",
    },
    {
      prop: "tooltip",
      type: "boolean | Tooltip props | { props?: Tooltip props; content?: ReactNode }",
      default: "—",
      description: "Enables a tooltip on hover/focus.",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Root class name.",
    },
    {
      prop: "titleClassName",
      type: "string",
      default: "—",
      description: "Class name applied to the title text element.",
    },
    {
      prop: "classNames",
      type: 'Partial<Record<"base" | "title" | "icon", string>>',
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
      title="PageTitle Props"
      rows={rows}
      footnote="PageTitle also supports standard div props such as id, aria-*, and data-*."
    />
  );
};

export default PropsTable;

