import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const providerRows = [
    {
      prop: "children",
      type: "ReactNode",
      default: "—",
      description: "Application tree to render within the provider.",
    },
    {
      prop: "placement",
      type: "ToastPlacement",
      default: '"bottom-right"',
      description: "Toast placement. Alias: position.",
    },
    {
      prop: "position",
      type: "ToastPosition",
      default: "—",
      description: "Alias for placement.",
    },
    {
      prop: "maxVisibleToasts",
      type: "number",
      default: "3",
      description: "Max toasts fully visible per region.",
    },
    {
      prop: "maxToasts",
      type: "number",
      default: "12",
      description: "Caps queued toasts (includes non-visible toasts).",
    },
    {
      prop: "defaultDuration",
      type: "number",
      default: "6000",
      description: "Default toast duration (ms).",
    },
    {
      prop: "container",
      type: "Element | DocumentFragment | null",
      default: "—",
      description: "Portal container for toast regions.",
    },
    {
      prop: "motion",
      type: '"auto" | "reduced" | "default"',
      default: '"auto"',
      description: "Controls motion mode.",
    },
    {
      prop: "disableAnimation",
      type: "boolean",
      default: "false",
      description: "Forces reduced motion.",
    },
    {
      prop: "toastOffset",
      type: "number",
      default: "0",
      description: "Extra offset (px) from viewport edges.",
    },
    {
      prop: "toastProps",
      type: "ToastOptions",
      default: "—",
      description: "Default options applied to every toast.",
    },
    {
      prop: "regionProps",
      type: "ToastRegionProps",
      default: "—",
      description: "Props applied to each toast region container.",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Class name for the provider root.",
    },
    {
      prop: "style",
      type: "CSSProperties",
      default: "—",
      description: "Inline styles for the provider root.",
    },
  ];

  const optionsRows = [
    { prop: "title", type: "ReactNode", default: "—", description: "Toast title." },
    {
      prop: "description",
      type: "ReactNode",
      default: "—",
      description: "Preferred body content.",
    },
    {
      prop: "message",
      type: "ReactNode",
      default: "—",
      description: "Body content alias (used if description is not provided).",
    },
    {
      prop: "type",
      type: "ToastType",
      default: '"default" (computed)',
      description: 'Toast type (default/success/error/loading) - can be derived from color/severity.',
    },
    {
      prop: "tone",
      type: "ToastTone",
      default: "computed",
      description: "Tone used for styling (can be derived from type/color).",
    },
    {
      prop: "color",
      type: "ToastColor",
      default: "—",
      description: "Semantic color (alias: severity).",
    },
    {
      prop: "severity",
      type: "ToastSeverity",
      default: "—",
      description: "Alias for color.",
    },
    {
      prop: "variant",
      type: "ToastVariant",
      default: '"flat"',
      description: "Visual variant.",
    },
    {
      prop: "radius",
      type: "ToastRadius",
      default: '"md"',
      description: "Border radius.",
    },
    {
      prop: "size",
      type: "ToastSize",
      default: '"md"',
      description: "Toast size.",
    },
    {
      prop: "placement",
      type: "ToastPlacement",
      default: "provider placement",
      description: "Overrides provider placement for this toast. Alias: position.",
    },
    {
      prop: "position",
      type: "ToastPosition",
      default: "—",
      description: "Alias for placement.",
    },
    {
      prop: "duration",
      type: "number | null",
      default: "provider defaultDuration",
      description: "Auto-dismiss duration in ms. null disables auto-dismiss.",
    },
    {
      prop: "timeout",
      type: "number | null",
      default: "—",
      description: "Alias for duration.",
    },
    {
      prop: "persistent",
      type: "boolean",
      default: "false",
      description: "When true, duration becomes null (no auto-dismiss).",
    },
    {
      prop: "showDurationBar",
      type: "boolean",
      default: "false",
      description: "Shows a duration progress bar. Alias: shouldShowTimeoutProgress.",
    },
    {
      prop: "shouldShowTimeoutProgress",
      type: "boolean",
      default: "false",
      description: "Alias for showDurationBar.",
    },
    {
      prop: "dismissible",
      type: "boolean",
      default: "true",
      description: "Shows a close button and allows dismissal.",
    },
    {
      prop: "hideCloseButton",
      type: "boolean",
      default: "false",
      description: "Hides the close button.",
    },
    {
      prop: "action",
      type: "{ label: string; onClick?: () => void }",
      default: "—",
      description: "Optional action button.",
    },
    {
      prop: "icon",
      type: "ReactNode",
      default: "—",
      description: "Custom icon content.",
    },
    {
      prop: "showIcon",
      type: "boolean",
      default: "computed",
      description: "Controls icon visibility (unless hideIcon is provided).",
    },
    {
      prop: "hideIcon",
      type: "boolean",
      default: "false",
      description: "Hides the icon.",
    },
    {
      prop: "endContent",
      type: "ReactNode",
      default: "—",
      description: "Extra trailing content.",
    },
    {
      prop: "closeIcon",
      type: "ReactNode",
      default: "—",
      description: "Custom close icon.",
    },
    {
      prop: "loadingComponent",
      type: "ReactNode",
      default: "—",
      description: "Custom loading indicator component.",
    },
    {
      prop: "promise",
      type: "Promise<unknown>",
      default: "—",
      description: "Turns the toast into a promise toast (loading → success/error).",
    },
    {
      prop: "classNames",
      type: "ToastClassNames",
      default: "—",
      description: "Slot class overrides.",
    },
    {
      prop: "id",
      type: "ToastId",
      default: "auto",
      description: "Custom toast id (used for updates).",
    },
    {
      prop: "onDismiss",
      type: "(id: ToastId) => void",
      default: "—",
      description: "Called when the toast is dismissed.",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Class name for the toast root.",
    },
    {
      prop: "style",
      type: "CSSProperties",
      default: "—",
      description: "Inline styles for the toast root.",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <PropsTableBase title="ToastProvider Props" rows={providerRows} />
      <PropsTableBase title="Toast Options (ToastOptions)" rows={optionsRows} />
    </div>
  );
};

export default PropsTable;

