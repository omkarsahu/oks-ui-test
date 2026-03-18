import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const rows = [
    {
      prop: "orientation",
      type: '"horizontal" | "vertical"',
      default: '"horizontal"',
      description: "Divider orientation.",
    },
    {
      prop: "variant",
      type: '"fullWidth" | "inset" | "middle"',
      default: '"fullWidth"',
      description: "Layout variant.",
    },
    {
      prop: "color",
      type: 'DividerColor (e.g. "primary" | "secondary" | "success" | ... | string)',
      default: '"primary"',
      description: "Semantic color for divider line.",
    },
    {
      prop: "colorDepth",
      type: "DividerColorDepth",
      default: "300",
      description: "Color intensity (snapped to 50..950).",
    },
    {
      prop: "thickness",
      type: "number | string",
      default: "—",
      description: "Line thickness (e.g. 1, 2, '2px').",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "—",
      description: "Optional content rendered within the divider.",
    },
    {
      prop: "style",
      type: "CSSProperties",
      default: "—",
      description: "Inline styles for the root element.",
    },
  ];

  return (
    <PropsTableBase
      title="Divider Props"
      rows={rows}
      footnote="Divider also supports standard element props such as className, id, aria-*, and data-*."
    />
  );
};

export default PropsTable;
