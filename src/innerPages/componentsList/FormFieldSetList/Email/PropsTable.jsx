import React from "react";
import PropsTableBase from "../../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "type",
      type: '"email"',
      default: '"text"',
      description: "Renders an email input (HTML input type=email).",
    },
    {
      prop: "color",
      type: '"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger" | string',
      default: '"default"',
      description: "Semantic color.",
    },
    {
      prop: "radius",
      type: '"none" | "sm" | "md" | "lg" | "full"',
      default: '"md"',
      description: 'Border radius. ("rounded" is supported as an alias.)',
    },
    {
      prop: "startIcon / endIcon",
      type: "ReactNode",
      default: "—",
      description: "Start/end icon content.",
    },
    {
      prop: "prefix / suffix",
      type: "ReactNode",
      default: "—",
      description: "Start/end text content.",
    },
    {
      prop: "validation",
      type: "{ rules: Record<string, unknown> }",
      default: "—",
      description: 'Common rules: { required: true, email: true }.',
    },
    {
      prop: "autoComplete",
      type: "string",
      default: "derived",
      description:
        'Use "email" to allow autofill, or "off" to disable for this field.',
    },
    {
      prop: "size / variant / labelPlacement / colorDepth",
      type: "various",
      default: "md / outline / top / 500",
      description: "Shared visual options for FormFieldSet.",
    },
    {
      prop: "placeholder / disabled / required",
      type: "various",
      default: "— / false / false",
      description: "Standard input props, passed through.",
    },
  ];

  return (
    <PropsTableBase
      title="FormFieldSet (email) Props"
      rows={rows}
      footnote='Also supports standard input props (e.g. inputMode, maxLength, aria-*, data-*).'
    />
  );
};

export default PropsTable;
