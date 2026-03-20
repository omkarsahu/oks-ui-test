import React from "react";
import PropsTableBase from "../../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "type",
      type: '"text"',
      default: '"text"',
      description: "Renders a text input via FormFieldSet.",
    },
    {
      prop: "label",
      type: "ReactNode",
      default: "—",
      description: "Field label.",
    },
    {
      prop: "description",
      type: "ReactNode",
      default: "—",
      description: "Help text under the field.",
    },
    {
      prop: "labelPlacement",
      type: '"top" | "floating"',
      default: '"top"',
      description: "Label placement style.",
    },
    {
      prop: "size",
      type: '"xs" | "xs-sm" | "sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description: "Control sizing.",
    },
    {
      prop: "variant",
      type: '"outline" | "soft" | "underline"',
      default: '"outline"',
      description: "Visual variant.",
    },
    {
      prop: "color",
      type: '"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger" | string',
      default: '"default"',
      description: "Semantic color; can be a custom token name.",
    },
    {
      prop: "colorDepth",
      type: "number",
      default: "500",
      description: "Tone intensity (typically 50–950).",
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
      prop: "name",
      type: "string",
      default: "derived",
      description: "Form field key used in formData.",
    },
    {
      prop: "id",
      type: "string",
      default: "derived",
      description: "Input id used for label association.",
    },
    {
      prop: "validation",
      type: "{ rules: Record<string, unknown>; message?: Record<string, string> }",
      default: "—",
      description: "Validation rules for this field.",
    },
    {
      prop: "error",
      type: "ReactNode",
      default: "—",
      description: "Controlled error content override.",
    },
    {
      prop: "touched",
      type: "boolean",
      default: "—",
      description: "Controlled touched state override.",
    },
    {
      prop: "placeholder",
      type: "string",
      default: "—",
      description: "Input placeholder.",
    },
    {
      prop: "autoComplete",
      type: "string",
      default: "derived",
      description:
        "Autocomplete hint. When Form disables autofill, defaults to off for non-password inputs.",
    },
    {
      prop: "disabled / required / readOnly",
      type: "boolean",
      default: "false",
      description: "Standard input flags, passed through.",
    },
    {
      prop: "value / defaultValue",
      type: "string",
      default: "''",
      description: "Controlled/uncontrolled value.",
    },
    {
      prop: "onChange / onBlur",
      type: "(event) => void",
      default: "—",
      description: "Input event handlers (also updates Form context when inside Form).",
    },
  ];

  return (
    <PropsTableBase
      title="FormFieldSet (text) Props"
      rows={rows}
      footnote='Also supports standard input props (e.g. maxLength, inputMode, pattern, aria-*, data-*).'
    />
  );
};

export default PropsTable;
