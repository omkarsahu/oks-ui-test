import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "children",
      type: "ReactNode",
      default: "required",
      description: "Trigger element/content.",
    },
    {
      prop: "content",
      type: "ReactNode",
      default: "required",
      description: "Tooltip content.",
    },
    { prop: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Tooltip size." },
    {
      prop: "color",
      type: '"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',
      default: '"default"',
      description: "Semantic color.",
    },
    {
      prop: "colorDepth",
      type: "50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950",
      default: "100",
      description: "Color intensity used to compute CSS variables.",
    },
    {
      prop: "radius",
      type: '"none" | "sm" | "md" | "lg" | "full"',
      default: '"md"',
      description: "Border radius.",
    },
    {
      prop: "shadow",
      type: '"none" | "sm" | "md" | "lg"',
      default: '"sm"',
      description: "Shadow size.",
    },
    {
      prop: "placement",
      type: "TooltipPlacement",
      default: '"top"',
      description: "Tooltip placement relative to the trigger.",
    },
    { prop: "delay", type: "number", default: "0", description: "Open delay (ms)." },
    { prop: "closeDelay", type: "number", default: "500", description: "Close delay (ms)." },
    { prop: "isOpen", type: "boolean", default: "—", description: "Controlled open state." },
    {
      prop: "defaultOpen",
      type: "boolean",
      default: "false",
      description: "Initial open state when uncontrolled.",
    },
    {
      prop: "onOpenChange",
      type: "(isOpen: boolean) => void",
      default: "—",
      description: "Called when open state changes.",
    },
    { prop: "onClose", type: "() => void", default: "—", description: "Called on close." },
    {
      prop: "offset",
      type: "number",
      default: "7",
      description: "Distance (px) between trigger and tooltip.",
    },
    {
      prop: "containerPadding",
      type: "number",
      default: "12",
      description: "Viewport padding used by positioning logic.",
    },
    {
      prop: "crossOffset",
      type: "number",
      default: "0",
      description: "Cross-axis offset (px).",
    },
    {
      prop: "showArrow",
      type: "boolean",
      default: "false",
      description: "Shows an arrow pointing to the trigger.",
    },
    {
      prop: "shouldFlip",
      type: "boolean",
      default: "true",
      description: "Flips placement to keep tooltip in viewport.",
    },
    {
      prop: "triggerScaleOnOpen",
      type: "boolean",
      default: "false",
      description: "Applies a subtle scale effect to the trigger on open.",
    },
    {
      prop: "isKeyboardDismissDisabled",
      type: "boolean",
      default: "false",
      description: "Disables closing via Escape key.",
    },
    {
      prop: "isDismissable",
      type: "boolean",
      default: "false",
      description: "Allows dismissing on outside click.",
    },
    {
      prop: "shouldCloseOnBlur",
      type: "boolean",
      default: "true",
      description: "Closes when focus leaves the trigger/content.",
    },
    {
      prop: "shouldCloseOnInteractOutside",
      type: "(element: HTMLElement) => boolean",
      default: "—",
      description: "Custom outside-interaction close predicate.",
    },
    {
      prop: "portalContainer",
      type: "Element | DocumentFragment | null",
      default: "—",
      description: "Portal container for the tooltip.",
    },
    {
      prop: "updatePositionDeps",
      type: "any[]",
      default: "—",
      description: "Dependencies that trigger repositioning.",
    },
    { prop: "isDisabled", type: "boolean", default: "false", description: "Disables tooltip." },
    {
      prop: "disableAnimation",
      type: "boolean",
      default: "false",
      description: "Disables tooltip animations.",
    },
    { prop: "className", type: "string", default: "—", description: "Root class name." },
    {
      prop: "classNames",
      type: "{ base?: string; content?: string; arrow?: string }",
      default: "—",
      description: "Slot class overrides.",
    },
    {
      prop: "motionProps",
      type: "unknown",
      default: "—",
      description: "Reserved for optional motion integration.",
    },
  ];

  return (
    <PropsTableBase
      title="Tooltip Props"
      rows={rows}
      footnote="Tooltip also supports standard div props such as id, aria-*, and data-*."
    />
  );
};

export default PropsTable;

