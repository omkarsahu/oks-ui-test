import React from "react";
import PropsTableBase from "../../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "type",
      type: '"datepicker"',
      default: "—",
      description: "Renders a date picker field.",
    },
    {
      prop: "value / defaultValue",
      type: "string | { start: string; end: string }",
      default: "''",
      description: "Selected date or range value.",
    },
    {
      prop: "range",
      type: "boolean",
      default: "false",
      description: "Enables range selection.",
    },
    {
      prop: "rangeTrigger",
      type: '"single" | "dual"',
      default: '"single"',
      description: "Single input or dual start/end inputs for range.",
    },
    {
      prop: "withTime",
      type: "boolean",
      default: "false",
      description: "Enables time selection.",
    },
    {
      prop: "showPresets",
      type: "boolean",
      default: "false",
      description: "Shows preset shortcuts.",
    },
    {
      prop: "minDate / maxDate / blockedDates",
      type: "Date | string",
      default: "—",
      description: "Date constraints.",
    },
    {
      prop: "clearable",
      type: "boolean",
      default: "false",
      description: "Shows a clear button when a value is selected.",
    },
  ];

  return (
    <PropsTableBase
      title="FormFieldSet (datepicker) Props"
      rows={rows}
      footnote="Also supports size, variant, tone, labelPlacement, disabled, required, aria-*."
    />
  );
};

export default PropsTable;

