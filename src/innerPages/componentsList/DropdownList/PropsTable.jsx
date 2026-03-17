import React from "react";
import PropsTableBase from "../_shared/PropsTable";

const PropsTable = () => {
  const dropdownRows = [
    {
      prop: "children",
      type: "ReactNode",
      default: "—",
      description: "DropdownTrigger + DropdownMenu composition.",
    },
    {
      prop: "isOpen",
      type: "boolean",
      default: "—",
      description: "Controlled open state.",
    },
    {
      prop: "defaultOpen",
      type: "boolean",
      default: "false",
      description: "Initial open state when uncontrolled.",
    },
    {
      prop: "onOpenChange",
      type: "(isOpen: boolean) => void",
      default: "—",
      description: "Called when open state changes.",
    },
    {
      prop: "placement",
      type: "DropdownPlacement",
      default: '"bottom-start"',
      description: "Menu placement relative to trigger.",
    },
    {
      prop: "offset",
      type: "number",
      default: "8",
      description: "Distance (px) between trigger and menu.",
    },
    {
      prop: "containerPadding",
      type: "number",
      default: "8",
      description: "Viewport padding used by positioning logic.",
    },
    {
      prop: "shouldFlip",
      type: "boolean",
      default: "true",
      description: "Flips placement to keep menu in viewport.",
    },
    {
      prop: "portalContainer",
      type: "Element | DocumentFragment | null",
      default: "—",
      description: "Portal container for the menu.",
    },
    {
      prop: "isDismissable",
      type: "boolean",
      default: "true",
      description: "Allows dismissing on outside click.",
    },
    {
      prop: "isKeyboardDismissDisabled",
      type: "boolean",
      default: "false",
      description: "Disables dismissing via Escape key.",
    },
    {
      prop: "shouldCloseOnInteractOutside",
      type: "(target: Element) => boolean",
      default: "—",
      description: "Custom outside-interaction close predicate.",
    },
    {
      prop: "closeOnSelect",
      type: "boolean",
      default: "true",
      description: "Whether selecting an item closes the menu.",
    },
    {
      prop: "classNames",
      type: 'Partial<Record<"base" | "content", string>>',
      default: "—",
      description: "Slot class overrides for root/content.",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Class name for the root element.",
    },
    {
      prop: "style",
      type: "CSSProperties",
      default: "—",
      description: "Inline styles for the root element.",
    },
  ];

  const triggerRows = [
    {
      prop: "children",
      type: "ReactElement",
      default: "—",
      description: "Trigger element that opens the dropdown.",
    },
  ];

  const menuRows = [
    {
      prop: "items",
      type: "Iterable<T>",
      default: "—",
      description: "Items for render-prop children.",
    },
    {
      prop: "children",
      type: "ReactNode | (item: T) => ReactElement",
      default: "—",
      description: "Menu items or render function.",
    },
    {
      prop: "variant",
      type: '"solid" | "bordered" | "light" | "flat" | "faded" | "shadow"',
      default: '"solid"',
      description: "Menu visual variant.",
    },
    {
      prop: "color",
      type: '"default" | "primary" | "secondary" | "success" | "warning" | "danger"',
      default: '"default"',
      description: "Menu color.",
    },
    {
      prop: "selectionMode",
      type: '"none" | "single" | "multiple"',
      default: '"none"',
      description: "Selection behavior.",
    },
    {
      prop: "selectedKeys",
      type: '"all" | Iterable<React.Key>',
      default: "—",
      description: "Controlled selected keys.",
    },
    {
      prop: "disabledKeys",
      type: "Iterable<React.Key>",
      default: "—",
      description: "Keys that are disabled.",
    },
    {
      prop: "defaultSelectedKeys",
      type: '"all" | Iterable<React.Key>',
      default: "—",
      description: "Uncontrolled initial selected keys.",
    },
    {
      prop: "disallowEmptySelection",
      type: "boolean",
      default: "false",
      description: "Prevents clearing selection.",
    },
    {
      prop: "autoFocus",
      type: 'boolean | "first" | "last"',
      default: "false",
      description: "Auto focus behavior when opening.",
    },
    {
      prop: "topContent",
      type: "ReactNode",
      default: "—",
      description: "Content rendered above the items.",
    },
    {
      prop: "bottomContent",
      type: "ReactNode",
      default: "—",
      description: "Content rendered below the items.",
    },
    {
      prop: "emptyContent",
      type: "ReactNode",
      default: '"No items."',
      description: "Content shown when there are no items.",
    },
    {
      prop: "hideEmptyContent",
      type: "boolean",
      default: "false",
      description: "Hides the empty state.",
    },
    {
      prop: "hideSelectedIcon",
      type: "boolean",
      default: "false",
      description: "Hides the selected icon indicator.",
    },
    {
      prop: "shouldFocusWrap",
      type: "boolean",
      default: "false",
      description: "Wrap focus when navigating with keyboard.",
    },
    {
      prop: "closeOnSelect",
      type: "boolean",
      default: "true",
      description: "Whether selecting an item closes the menu.",
    },
    {
      prop: "disableAnimation",
      type: "boolean",
      default: "false",
      description: "Disables menu animations.",
    },
    {
      prop: "classNames",
      type: 'Partial<Record<"base" | "list" | "emptyContent", string>>',
      default: "—",
      description: "Slot class overrides for menu.",
    },
    {
      prop: "itemClasses",
      type: "Partial<Record<DropdownItemSlot, string>>",
      default: "—",
      description: "Default slot overrides applied to items.",
    },
    {
      prop: "onAction",
      type: "(key: React.Key) => void",
      default: "—",
      description: "Called when an item is activated.",
    },
    {
      prop: "onSelectionChange",
      type: '(keys: "all" | Set<React.Key>) => void',
      default: "—",
      description: "Called when selection changes.",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "—",
      description: "Called when the menu requests to close.",
    },
  ];

  const itemRows = [
    {
      prop: "children",
      type: "ReactNode",
      default: "—",
      description: "Item content.",
    },
    {
      prop: "title",
      type: "string | ReactNode",
      default: "—",
      description: "Primary label.",
    },
    {
      prop: "textValue",
      type: "string",
      default: "—",
      description: "Text value for typeahead/selection.",
    },
    {
      prop: "description",
      type: "string | ReactNode",
      default: "—",
      description: "Secondary description.",
    },
    {
      prop: "shortcut",
      type: "string | ReactNode",
      default: "—",
      description: "Shortcut hint content.",
    },
    {
      prop: "startContent",
      type: "ReactNode",
      default: "—",
      description: "Leading content.",
    },
    {
      prop: "endContent",
      type: "ReactNode",
      default: "—",
      description: "Trailing content.",
    },
    {
      prop: "selectedIcon",
      type: "ReactNode",
      default: "—",
      description: "Custom selected icon.",
    },
    {
      prop: "showDivider",
      type: "boolean",
      default: "false",
      description: "Shows a divider line after the item.",
    },
    {
      prop: "href",
      type: "string",
      default: "—",
      description: "Renders as a link when provided.",
    },
    {
      prop: "target",
      type: "string",
      default: "—",
      description: "Link target.",
    },
    {
      prop: "rel",
      type: "string",
      default: "—",
      description: "Link rel attribute.",
    },
    {
      prop: "download",
      type: "boolean | string",
      default: "—",
      description: "Link download attribute.",
    },
    {
      prop: "ping",
      type: "string",
      default: "—",
      description: "Link ping attribute.",
    },
    {
      prop: "referrerPolicy",
      type: "string",
      default: "—",
      description: "Link referrerPolicy attribute.",
    },
    {
      prop: "isDisabled",
      type: "boolean",
      default: "false",
      description: "Disables the item.",
    },
    {
      prop: "isSelected",
      type: "boolean",
      default: "—",
      description: "Controlled selected state.",
    },
    {
      prop: "isReadOnly",
      type: "boolean",
      default: "false",
      description: "Prevents changing selection state.",
    },
    {
      prop: "hideSelectedIcon",
      type: "boolean",
      default: "false",
      description: "Hides the selected icon indicator.",
    },
    {
      prop: "closeOnSelect",
      type: "boolean",
      default: "—",
      description: "Overrides closeOnSelect for this item.",
    },
    {
      prop: "itemKey",
      type: "React.Key",
      default: "—",
      description: "Key used for selection/action when used directly.",
    },
    {
      prop: "classNames",
      type: "Partial<Record<DropdownItemSlot, string>>",
      default: "—",
      description: "Slot class overrides for this item.",
    },
    {
      prop: "onAction",
      type: "() => void",
      default: "—",
      description: "Called when item is activated.",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "—",
      description: "Called when menu should close.",
    },
    {
      prop: "onPress",
      type: "(e: DropdownPressEvent) => void",
      default: "—",
      description: "Press handler.",
    },
    {
      prop: "onPressStart",
      type: "(e: DropdownPressEvent) => void",
      default: "—",
      description: "Press start handler.",
    },
    {
      prop: "onPressEnd",
      type: "(e: DropdownPressEvent) => void",
      default: "—",
      description: "Press end handler.",
    },
    {
      prop: "onPressChange",
      type: "(isPressed: boolean) => void",
      default: "—",
      description: "Pressed state change handler.",
    },
    {
      prop: "onPressUp",
      type: "(e: DropdownPressEvent) => void",
      default: "—",
      description: "Press up handler.",
    },
    {
      prop: "onKeyDown",
      type: "(e: KeyboardEvent) => void",
      default: "—",
      description: "Key down handler.",
    },
    {
      prop: "onKeyUp",
      type: "(e: KeyboardEvent) => void",
      default: "—",
      description: "Key up handler.",
    },
    {
      prop: "onClick",
      type: "(e: MouseEvent) => void",
      default: "—",
      description: "Click handler.",
    },
  ];

  const sectionRows = [
    {
      prop: "title",
      type: "string",
      default: "—",
      description: "Section heading.",
    },
    {
      prop: "aria-label",
      type: "string",
      default: "—",
      description: "Accessible label for the section.",
    },
    {
      prop: "items",
      type: "Iterable<T>",
      default: "—",
      description: "Items for render-prop children.",
    },
    {
      prop: "children",
      type: "ReactNode | (item: T) => ReactElement",
      default: "—",
      description: "Section items or render function.",
    },
    {
      prop: "hideSelectedIcon",
      type: "boolean",
      default: "false",
      description: "Hides the selected icon indicator.",
    },
    {
      prop: "showDivider",
      type: "boolean",
      default: "false",
      description: "Shows a divider before the section.",
    },
    {
      prop: "dividerProps",
      type: "unknown",
      default: "—",
      description: "Props forwarded to the divider element.",
    },
    {
      prop: "classNames",
      type: 'Partial<Record<"base" | "heading" | "group" | "divider", string>>',
      default: "—",
      description: "Slot class overrides for the section.",
    },
    {
      prop: "itemClasses",
      type: "Partial<Record<DropdownItemSlot, string>>",
      default: "—",
      description: "Default slot overrides applied to section items.",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <PropsTableBase
        title="Dropdown Props"
        rows={dropdownRows}
        footnote="Dropdown composes DropdownTrigger and DropdownMenu."
      />
      <PropsTableBase title="DropdownTrigger Props" rows={triggerRows} />
      <PropsTableBase title="DropdownMenu Props" rows={menuRows} />
      <PropsTableBase title="DropdownItem Props" rows={itemRows} />
      <PropsTableBase title="DropdownSection Props" rows={sectionRows} />
    </div>
  );
};

export default PropsTable;

