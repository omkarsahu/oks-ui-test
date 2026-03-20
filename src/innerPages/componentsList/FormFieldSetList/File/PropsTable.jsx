import React from "react";
import PropsTableBase from "../../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "type",
      type: '"file"',
      default: '"text"',
      description: "Renders a file input.",
    },
    {
      prop: "accept",
      type: "string",
      default: "—",
      description: 'Native accept attribute (e.g. "image/*", ".pdf").',
    },
    {
      prop: "multiple",
      type: "boolean",
      default: "false",
      description: "Allows selecting multiple files.",
    },
    {
      prop: "validation.rules.accept / maxFiles / maxFileSize",
      type: "various",
      default: "—",
      description: "File validation rules.",
    },
  ];

  return (
    <PropsTableBase
      title="FormFieldSet (file) Props"
      rows={rows}
      footnote="Also supports standard input props such as disabled, required, aria-*, data-*."
    />
  );
};

export default PropsTable;

