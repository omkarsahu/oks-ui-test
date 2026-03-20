import React from "react";
import PropsTableBase from "../../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "type",
      type: '"phone"',
      default: "—",
      description: "Renders a phone input with optional country code select.",
    },
    {
      prop: "value / defaultValue",
      type: "{ code: string; phone: string }",
      default: "{ code: '+1', phone: '' }",
      description: "Controlled/uncontrolled phone value shape.",
    },
    {
      prop: "defaultCountryCode",
      type: "string",
      default: '"+1"',
      description: "Default country calling code.",
    },
    {
      prop: "countryCodeMode",
      type: '"select" | "hidden"',
      default: '"select"',
      description: "Show a country code select or hide it.",
    },
    {
      prop: "numbersOnly",
      type: "boolean",
      default: "true",
      description: "If true, strips non-digits from the phone input.",
    },
    {
      prop: "phonePlaceholder",
      type: "string",
      default: '"Phone number"',
      description: "Placeholder for the phone part.",
    },
  ];

  return (
    <PropsTableBase
      title="FormFieldSet (phone) Props"
      rows={rows}
      footnote="Also supports size, variant, tone, disabled, required, aria-*."
    />
  );
};

export default PropsTable;

