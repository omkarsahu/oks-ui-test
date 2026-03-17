import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "isOpen",
      type: "boolean",
      default: "—",
      description: "Controls whether the modal is open.",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "—",
      description: "Called when the modal requests to close.",
    },
    {
      prop: "title",
      type: "ReactNode",
      default: "—",
      description: "Header title content.",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "—",
      description: "Modal body content.",
    },
    {
      prop: "actions",
      type: "ReactNode",
      default: "—",
      description: "Footer actions area.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg" | string | number',
      default: '"md" (640px)',
      description: "Modal width.",
    },
    {
      prop: "dismissible",
      type: "boolean",
      default: "true",
      description: "Shows a close button and allows dismiss interactions.",
    },
    {
      prop: "closeLabel",
      type: "string",
      default: '"Close modal"',
      description: "Accessible label for the close button.",
    },
    {
      prop: "closeOnOutsideClick",
      type: "boolean",
      default: "true",
      description: "Closes when clicking outside the modal panel.",
    },
    {
      prop: "closeOnEscape",
      type: "boolean",
      default: "true",
      description: "Closes when pressing Escape.",
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
      prop: "zIndex",
      type: "number",
      default: "—",
      description: "Overrides the Backdrop z-index.",
    },
    {
      prop: "blur",
      type: "boolean",
      default: "—",
      description: "Overrides Backdrop blur.",
    },
    {
      prop: "backgroundOpacity",
      type: "number",
      default: "—",
      description: "Overrides Backdrop backgroundOpacity (0–100).",
    },
    {
      prop: "animationDuration",
      type: "number",
      default: "—",
      description: "Overrides Backdrop animationDuration (seconds).",
    },
    {
      prop: "animationType",
      type: 'BackdropProps["animationType"]',
      default: "—",
      description: "Overrides Backdrop animationType.",
    },
    {
      prop: "easing",
      type: 'BackdropProps["easing"]',
      default: "—",
      description: "Overrides Backdrop easing.",
    },
    {
      prop: "initialFocusRef",
      type: "RefObject<HTMLElement | null>",
      default: "—",
      description: "Element to focus when the modal opens.",
    },
    {
      prop: "backdrop",
      type: 'Partial<BackdropProps> (without isOpen/onClose/children)',
      default: "—",
      description: "Additional Backdrop overrides.",
    },
    {
      prop: "headers",
      type: "Partial<PageTitleProps>",
      default: "—",
      description: "Header PageTitle overrides.",
    },
    {
      prop: "divider",
      type: "Partial<DividerProps>",
      default: "—",
      description: "Divider overrides (between header and body).",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Class name for the modal panel.",
    },
    {
      prop: "style",
      type: "CSSProperties",
      default: "—",
      description: "Inline styles for the modal panel.",
    },
  ];

  return (
    <PropsTableBase
      title="Modal Props"
      rows={rows}
      footnote="Modal is a controlled component: provide isOpen and onClose."
    />
  );
};

export default PropsTable;

