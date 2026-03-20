import React from "react";
import PropsTableBase from "../../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "type",
      type: '"select"',
      default: "—",
      description: "Renders a select input (custom by default).",
    },
    {
      prop: "options",
      type: "Array<{ label: ReactNode; value: string; disabled?: boolean }>",
      default: "[]",
      description: "List of selectable options.",
    },
    {
      prop: "placeholder",
      type: "ReactNode",
      default: '"Select…"',
      description: "Shown when no value is selected (single select).",
    },
    {
      prop: "native",
      type: "boolean",
      default: "false",
      description: "Use native <select> rendering.",
    },
    {
      prop: "multiple",
      type: "boolean",
      default: "false",
      description: "Enables multi-select (custom by default; native when native is true).",
    },
    {
      prop: "color",
      type: '"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger" | string',
      default: '"default"',
      description: "Controls focus/accent color (tone is an alias).",
    },
    {
      prop: "radius",
      type: '"none" | "sm" | "md" | "lg" | "full"',
      default: '"md"',
      description: "Controls corner radius (rounded is an alias).",
    },
  ];

  return (
    <PropsTableBase
      title="FormFieldSet (select) Props"
      rows={rows}
      footnote="Also supports disabled, required, size, variant, labelPlacement, and aria-*."
    />
  );
};

export default PropsTable;
