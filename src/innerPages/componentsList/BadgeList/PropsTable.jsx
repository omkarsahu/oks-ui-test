import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "children",
      type: "ReactNode",
      default: "—",
      description: "Element the badge is attached to.",
    },
    {
      prop: "content",
      type: "string | number | ReactNode",
      default: "—",
      description: "Badge content. Ignored when isDot is true.",
    },
    {
      prop: "max",
      type: "number",
      default: "—",
      description: 'Caps numeric content to `${max}+` when exceeded.',
    },
    {
      prop: "variant",
      type: '"solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"',
      default: '"solid"',
      description: "Visual style variant.",
    },
    {
      prop: "color",
      type: '"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',
      default: '"default"',
      description: "Semantic color.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Badge size.",
    },
    {
      prop: "shape",
      type: '"circle" | "rectangle"',
      default: '"rectangle"',
      description: "Badge shape.",
    },
    {
      prop: "placement",
      type: '"top-right" | "top-left" | "bottom-right" | "bottom-left"',
      default: '"top-right"',
      description: "Badge placement relative to children.",
    },
    {
      prop: "showOutline",
      type: "boolean",
      default: "true",
      description: "Adds an outline ring around the badge.",
    },
    {
      prop: "disableOutline",
      type: "boolean",
      default: "false",
      description: "Disables the outline ring (takes precedence).",
    },
    {
      prop: "disableAnimation",
      type: "boolean",
      default: "false",
      description: "Disables badge transitions.",
    },
    {
      prop: "isInvisible",
      type: "boolean",
      default: "false",
      description: "When true, badge is not rendered.",
    },
    {
      prop: "isOneChar",
      type: "boolean",
      default: "false",
      description: "Optimizes badge sizing for single-character content.",
    },
    {
      prop: "isDot",
      type: "boolean",
      default: "false",
      description: "Renders a dot badge and ignores content.",
    },
    {
      prop: "classNames",
      type: "Partial<Record<BadgeSlot, string>>",
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
      title="Badge Props"
      rows={rows}
      footnote="Badge also supports standard span props such as className, id, aria-*, and data-*."
    />
  );
};

export default PropsTable;

