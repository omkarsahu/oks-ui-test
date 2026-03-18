import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "isOpen",
      type: "boolean",
      default: "—",
      description: "Controls whether the drawer is open.",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "—",
      description: "Called when the drawer requests to close.",
    },
    {
      prop: "position",
      type: '"left" | "right" | "top" | "bottom"',
      default: '"right"',
      description: "Which side the drawer slides from.",
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
      description: "Drawer body content.",
    },
    {
      prop: "actions",
      type: "ReactNode",
      default: "—",
      description: "Footer actions area.",
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
      default: '"Close drawer"',
      description: "Accessible label for the close button.",
    },
    {
      prop: "ariaLabel",
      type: "string",
      default: '"Drawer"',
      description: "Accessible label for the drawer dialog region.",
    },
    {
      prop: "width",
      type: '"sm" | "md" | "lg" | string | number',
      default: '"md" (420px)',
      description: "Drawer width for left/right positions.",
    },
    {
      prop: "height",
      type: '"sm" | "md" | "lg" | string | number',
      default: '"md" (360px)',
      description: "Drawer height for top/bottom positions.",
    },
    {
      prop: "closeOnOutsideClick",
      type: "boolean",
      default: "true",
      description: "Closes when clicking outside the drawer panel.",
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
      prop: "easing",
      type: 'BackdropProps["easing"]',
      default: "—",
      description: "Overrides Backdrop easing.",
    },
    {
      prop: "initialFocusRef",
      type: "RefObject<HTMLElement | null>",
      default: "—",
      description: "Element to focus when the drawer opens.",
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
      prop: "className",
      type: "string",
      default: "—",
      description: "Class name for the drawer panel.",
    },
    {
      prop: "style",
      type: "CSSProperties",
      default: "—",
      description: "Inline styles for the drawer panel.",
    },
  ];

  return (
    <PropsTableBase
      title="Drawer Props"
      rows={rows}
      footnote="Drawer is controlled (isOpen/onClose). Advanced overlay behavior can be customized via the backdrop prop."
    />
  );
};

export default PropsTable;
