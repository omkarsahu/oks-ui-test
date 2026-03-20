import React from "react";
import PropsTableBase from "../../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "type",
      type: '"password"',
      default: '"text"',
      description: "Renders a password input with optional reveal toggle.",
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
      prop: "revealToggle",
      type: "boolean",
      default: "true",
      description: "Shows/hides the eye icon to reveal the password.",
    },
    {
      prop: "validation.rules.strongPassword",
      type: "{ minLength?; minUpper?; minLower?; minNumber?; minSpecial? }",
      default: "—",
      description:
        "When provided, shows password requirements UI on focus and validates strength.",
    },
    {
      prop: "autoComplete",
      type: '"current-password" | "new-password" | string',
      default: "derived",
      description: "Use current-password for login, new-password for signup.",
    },
    {
      prop: "size / variant / labelPlacement / colorDepth",
      type: "various",
      default: "md / outline / top / 500",
      description: "Shared visual options for FormFieldSet.",
    },
  ];

  return (
    <PropsTableBase
      title="FormFieldSet (password) Props"
      rows={rows}
      footnote='Also supports standard input props (e.g. placeholder, disabled, required, aria-*, data-*).'
    />
  );
};

export default PropsTable;
