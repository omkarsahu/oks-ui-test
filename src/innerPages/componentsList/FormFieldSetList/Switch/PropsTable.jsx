import React from "react";
import PropsTableBase from "../../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "type",
      type: '"switch"',
      default: "—",
      description: "Renders a switch (checkbox role=switch).",
    },
    {
      prop: "checked / defaultChecked",
      type: "boolean",
      default: "false",
      description: "Controlled/uncontrolled checked state.",
    },
    {
      prop: "onChange",
      type: "(next: boolean) => void",
      default: "—",
      description: "Called with the next checked value.",
    },
    {
      prop: "showStateText",
      type: "boolean",
      default: "false",
      description: "Shows On/Off text next to the switch.",
    },
    {
      prop: "checkedText / uncheckedText",
      type: "ReactNode",
      default: '"On" / "Off"',
      description: "Custom state labels.",
    },
    {
      prop: "stateTextPlacement",
      type: '"before" | "after" | "both"',
      default: '"after"',
      description: "Where state text is shown.",
    },
  ];

  return (
    <PropsTableBase
      title="FormFieldSet (switch) Props"
      rows={rows}
      footnote="Also supports disabled, required, aria-*, data-*."
    />
  );
};

export default PropsTable;

