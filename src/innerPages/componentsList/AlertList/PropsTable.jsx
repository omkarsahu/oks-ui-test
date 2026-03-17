import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "title",
      type: "ReactNode",
      default: "—",
      description: "Alert title content.",
    },
    {
      prop: "description",
      type: "ReactNode",
      default: "—",
      description: "Alert description content.",
    },
    {
      prop: "color",
      type: '"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',
      default: '"default"',
      description: "Semantic color. Also drives the default icon.",
    },
    {
      prop: "variant",
      type: '"solid" | "bordered" | "flat" | "faded"',
      default: '"flat"',
      description: "Visual style variant.",
    },
    {
      prop: "radius",
      type: '"none" | "sm" | "md" | "lg" | "full"',
      default: '"md"',
      description: "Border radius.",
    },
    {
      prop: "icon",
      type: "ReactNode",
      default: "—",
      description:
        "Custom icon. When omitted, a default status icon is shown based on color.",
    },
    {
      prop: "hideIcon",
      type: "boolean",
      default: "false",
      description: "Hides the icon.",
    },
    {
      prop: "hideIconWrapper",
      type: "boolean",
      default: "false",
      description: "Renders the icon without its wrapper.",
    },
    {
      prop: "startContent",
      type: "ReactNode",
      default: "—",
      description:
        "Additional content rendered after the icon (before the title/description).",
    },
    {
      prop: "endContent",
      type: "ReactNode",
      default: "—",
      description:
        "Additional content rendered after the title/description (before the close button).",
    },
    {
      prop: "isClosable",
      type: "boolean",
      default: "false",
      description: "Shows a close button.",
    },
    {
      prop: "isVisible",
      type: "boolean",
      default: "—",
      description:
        "Controlled visibility. When false, alert is removed from the DOM. When omitted, the alert is visible by default.",
    },
    {
      prop: "onVisibleChange",
      type: "(isVisible: boolean) => void",
      default: "—",
      description:
        "Called when visibility should change (e.g. close button click).",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "—",
      description: "Called when the close button is used.",
    },
    {
      prop: "closeButtonProps",
      type: 'Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">',
      default: "—",
      description:
        'Props passed to the close button (type="button" is always used).',
    },
    {
      prop: "classNames",
      type: "Partial<Record<AlertSlot, string>>",
      default: "—",
      description: "Slot class overrides.",
    },
    {
      prop: "style",
      type: "CSSProperties",
      default: "—",
      description:
        "Inline styles for the root element. Merged with internal CSS variables.",
    },
  ];

  return (
    <PropsTableBase
      title="Alert Props"
      rows={rows}
      footnote="Alert also supports standard div props such as className, id, style, and aria-*."
    />
  );
};

export default PropsTable;
