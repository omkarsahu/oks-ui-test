import React from "react";
import PropsTableBase from "../../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "type",
      type: '"textarea"',
      default: "—",
      description: "Renders a textarea field.",
    },
    {
      prop: "rows",
      type: "number",
      default: "4",
      description: "Textarea rows.",
    },
    {
      prop: "placeholder",
      type: "string",
      default: "—",
      description: "Textarea placeholder.",
    },
    {
      prop: "size / variant / labelPlacement / tone / colorDepth",
      type: "various",
      default: "md / outline / top / primary / 500",
      description: "Shared visual options for FormFieldSet.",
    },
  ];

  return (
    <PropsTableBase
      title="FormFieldSet (textarea) Props"
      rows={rows}
      footnote="Also supports standard textarea props (e.g. maxLength, aria-*, data-*)."
    />
  );
};

export default PropsTable;

