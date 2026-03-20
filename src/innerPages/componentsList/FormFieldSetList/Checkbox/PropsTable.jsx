import React from "react";
import PropsTableBase from "../../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "type",
      type: '"checkbox"',
      default: "—",
      description: "Renders a checkbox group field.",
    },
    {
      prop: "options",
      type: "Array<{ label: ReactNode; value: string; disabled?: boolean }>",
      default: "[]",
      description: "Checkbox options.",
    },
    {
      prop: "value / defaultValue",
      type: "string[]",
      default: "[]",
      description: "Selected values.",
    },
    {
      prop: "onChange",
      type: "(next: string[]) => void",
      default: "—",
      description: "Called with the next selected values.",
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
      title="FormFieldSet (checkbox) Props"
      rows={rows}
      footnote="Also supports required, description, and aria-*."
    />
  );
};

export default PropsTable;

