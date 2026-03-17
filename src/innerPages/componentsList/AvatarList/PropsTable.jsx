import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const avatarRows = [
    {
      prop: "name",
      type: "string",
      default: "—",
      description: "Name used for initials fallback and default aria-label.",
    },
    {
      prop: "src",
      type: "string",
      default: "—",
      description: "Image source URL.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Avatar size.",
    },
    {
      prop: "color",
      type: '"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',
      default: '"default"',
      description: "Semantic color for background/border.",
    },
    {
      prop: "radius",
      type: '"none" | "sm" | "md" | "lg" | "full"',
      default: '"full"',
      description: "Border radius.",
    },
    {
      prop: "colorDepth",
      type: "50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950",
      default: "500",
      description: "Color intensity used to compute CSS variables.",
    },
    {
      prop: "isBordered",
      type: "boolean",
      default: "false",
      description: "Shows a border ring.",
    },
    {
      prop: "isDisabled",
      type: "boolean",
      default: "false",
      description: "Marks the avatar as disabled and prevents focus.",
    },
    {
      prop: "isFocusable",
      type: "boolean",
      default: "false",
      description: "Makes the avatar focusable (tabIndex=0 by default).",
    },
    {
      prop: "showFallback",
      type: "boolean",
      default: "false",
      description: "When true, shows fallback content if the image fails.",
    },
    {
      prop: "icon",
      type: "ReactNode",
      default: "—",
      description: "Fallback icon when there is no name and no custom fallback.",
    },
    {
      prop: "fallback",
      type: "ReactNode",
      default: "—",
      description: "Custom fallback content (replaces initials/default icon).",
    },
    {
      prop: "tooltip",
      type: 'boolean | TooltipProps (without children/content) | { props?: TooltipProps; content?: ReactNode }',
      default: "false",
      description: "Shows a tooltip with the name or custom content.",
    },
    {
      prop: "ImgComponent",
      type: "React.ElementType",
      default: '"img"',
      description: "Custom component used for the image element.",
    },
    {
      prop: "imgProps",
      type: "object",
      default: "—",
      description: "Props passed to ImgComponent (excluding src/children).",
    },
    {
      prop: "classNames",
      type: 'Partial<Record<"base" | "img" | "fallback" | "name" | "icon", string>>',
      default: "—",
      description: "Slot class overrides.",
    },
    {
      prop: "style",
      type: "CSSProperties",
      default: "—",
      description: "Inline styles for the root element.",
    },
  ];

  const groupRows = [
    {
      prop: "children",
      type: "ReactNode",
      default: "—",
      description: "Avatars to render inside the group.",
    },
    {
      prop: "max",
      type: "number",
      default: "5",
      description: "Maximum avatars to show before overflowing into a count.",
    },
    {
      prop: "total",
      type: "number",
      default: "—",
      description: "Total count used to compute the overflow count.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Avatar size for the group.",
    },
    {
      prop: "color",
      type: '"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',
      default: '"default"',
      description: "Semantic color applied to the group.",
    },
    {
      prop: "radius",
      type: '"none" | "sm" | "md" | "lg" | "full"',
      default: '"full"',
      description: "Border radius applied to group items.",
    },
    {
      prop: "isGrid",
      type: "boolean",
      default: "false",
      description: "Uses a grid layout instead of an overlapping stack.",
    },
    {
      prop: "isDisabled",
      type: "boolean",
      default: "—",
      description: "Marks the group as disabled.",
    },
    {
      prop: "isBordered",
      type: "boolean",
      default: "false",
      description: "Shows borders on items in the group.",
    },
    {
      prop: "renderCount",
      type: "(count: number) => ReactNode",
      default: "—",
      description: "Custom renderer for the overflow count badge.",
    },
    {
      prop: "classNames",
      type: 'Partial<Record<"base" | "count", string>>',
      default: "—",
      description: "Slot class overrides for group root/count.",
    },
    {
      prop: "style",
      type: "CSSProperties",
      default: "—",
      description: "Inline styles for the group root element.",
    },
  ];

  const iconRows = [
    {
      prop: "size",
      type: "number",
      default: "18",
      description: "Icon size in pixels.",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <PropsTableBase
        title="Avatar Props"
        rows={avatarRows}
        footnote="Avatar also supports standard div props such as className, id, aria-*, and data-*."
      />
      <PropsTableBase
        title="AvatarGroup Props"
        rows={groupRows}
        footnote="AvatarGroup also supports standard div props such as className, id, aria-*, and data-*."
      />
      <PropsTableBase
        title="AvatarIcon Props"
        rows={iconRows}
        footnote="AvatarIcon also supports standard svg props."
      />
    </div>
  );
};

export default PropsTable;

