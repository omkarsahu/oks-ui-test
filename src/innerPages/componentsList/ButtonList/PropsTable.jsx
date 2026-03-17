import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "children",
      type: "ReactNode",
      default: "—",
      description: "Button content.",
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
      description: "Button size.",
    },
    {
      prop: "radius",
      type: '"none" | "sm" | "md" | "lg" | "full"',
      default: '"md"',
      description: "Border radius.",
    },
    {
      prop: "startContent",
      type: "ReactNode",
      default: "—",
      description: "Content placed before the children.",
    },
    {
      prop: "endContent",
      type: "ReactNode",
      default: "—",
      description: "Content placed after the children.",
    },
    {
      prop: "spinner",
      type: "ReactNode",
      default: "—",
      description: "Custom spinner shown when isLoading is true.",
    },
    {
      prop: "spinnerPlacement",
      type: '"start" | "end"',
      default: '"start"',
      description: "Where the spinner appears when loading.",
    },
    {
      prop: "fullWidth",
      type: "boolean",
      default: "false",
      description: "Makes the button take full container width.",
    },
    {
      prop: "isIconOnly",
      type: "boolean",
      default: "false",
      description: "Optimizes padding/shape for icon-only buttons.",
    },
    {
      prop: "isDisabled",
      type: "boolean",
      default: "false",
      description: "Disables interactions.",
    },
    {
      prop: "isLoading",
      type: "boolean",
      default: "false",
      description: "Shows a spinner and prevents press actions.",
    },
    {
      prop: "onPress",
      type: "(e: PressEvent) => void",
      default: "—",
      description: "Called for pointer/mouse/keyboard press.",
    },
    {
      prop: "onPressStart",
      type: "(e: PressEvent) => void",
      default: "—",
      description: "Called when a press starts.",
    },
    {
      prop: "onPressEnd",
      type: "(e: PressEvent) => void",
      default: "—",
      description: "Called when a press ends.",
    },
    {
      prop: "onPressChange",
      type: "(isPressed: boolean) => void",
      default: "—",
      description: "Called when pressed state changes.",
    },
    {
      prop: "onPressUp",
      type: "(e: PressEvent) => void",
      default: "—",
      description: "Called when press is released.",
    },
    {
      prop: "disableRipple",
      type: "boolean",
      default: "false",
      description: "Disables the ripple effect.",
    },
    {
      prop: "disableAnimation",
      type: "boolean",
      default: "false",
      description: "Disables transition animations.",
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
      title="Button Props"
      rows={rows}
      footnote='Button also supports standard button props such as type, onClick, disabled, aria-*, and data-*. (type defaults to "button".)'
    />
  );
};

export default PropsTable;

