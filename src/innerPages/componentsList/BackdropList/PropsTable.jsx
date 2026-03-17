import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "isOpen",
      type: "boolean",
      default: "—",
      description: "Controls whether the backdrop is shown.",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "—",
      description:
        "Called when the backdrop requests to close (escape/outside click).",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "—",
      description: "Content rendered centered on top of the backdrop.",
    },
    {
      prop: "zIndex",
      type: "number",
      default: "40",
      description: "CSS z-index for the backdrop layer.",
    },
    {
      prop: "closeOnOutsideClick",
      type: "boolean",
      default: "true",
      description: "Closes when clicking outside the content.",
    },
    {
      prop: "closeOnEscape",
      type: "boolean",
      default: "true",
      description: "Closes when pressing Escape.",
    },
    {
      prop: "lockScroll",
      type: "boolean",
      default: "true",
      description: "Locks document scrolling while open.",
    },
    {
      prop: "blur",
      type: "boolean",
      default: "true",
      description: "Applies a blur effect to the backdrop.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"var(--oks-palette-neutral-950, #000)"',
      description: "Backdrop background color.",
    },
    {
      prop: "backgroundOpacity",
      type: "number",
      default: "80",
      description: "Backdrop opacity (0–100).",
    },
    {
      prop: "animationDuration",
      type: "number",
      default: "0.3",
      description: "Animation duration in seconds.",
    },
    {
      prop: "animationType",
      type: '"fade" | "zoom" | "slideUp" | "slideDown" | "slideLeft" | "slideRight"',
      default: '"fade"',
      description: "Backdrop/content animation type.",
    },
    {
      prop: "easing",
      type: '"ease" | "easeIn" | "easeOut" | "easeInOut"',
      default: '"ease"',
      description: "Animation easing.",
    },
    {
      prop: "portal",
      type: "boolean",
      default: "true",
      description: "Renders via a portal when true.",
    },
    {
      prop: "container",
      type: "Element | DocumentFragment | null",
      default: "—",
      description: "Portal container when portal is enabled.",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Class name for the backdrop root.",
    },
    {
      prop: "style",
      type: "CSSProperties",
      default: "—",
      description: "Inline styles for the backdrop root.",
    },
    {
      prop: "contentFullSize",
      type: "boolean",
      default: "false",
      description: "Makes the content container full-size.",
    },
    {
      prop: "contentClassName",
      type: "string",
      default: "—",
      description: "Class name for the content container.",
    },
    {
      prop: "contentStyle",
      type: "CSSProperties",
      default: "—",
      description: "Inline styles for the content container.",
    },
  ];

  return (
    <PropsTableBase
      title="Backdrop Props"
      rows={rows}
      footnote="Backdrop is a controlled component: provide isOpen and onClose."
    />
  );
};

export default PropsTable;

