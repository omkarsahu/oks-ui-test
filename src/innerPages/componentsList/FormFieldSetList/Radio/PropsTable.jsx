import React from "react";
import PropsTableBase from "../../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "type",
      type: '"radio"',
      default: "—",
      description: "Renders a radio group field.",
    },
    {
      prop: "options",
      type: "Array<{ label: ReactNode; value: string; disabled?: boolean }>",
      default: "[]",
      description: "Radio options.",
    },
    {
      prop: "value / defaultValue",
      type: "string",
      default: "''",
      description: "Selected value.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the whole group.",
    },
    {
      prop: "size / tone / colorDepth",
      type: "various",
      default: "md / primary / 500",
      description: "Visual options for the group.",
    },
  ];

  return (
    <PropsTableBase
      title="FormFieldSet (radio) Props"
      rows={rows}
      footnote="Also supports required, description, and aria-*."
    />
  );
};

export default PropsTable;

