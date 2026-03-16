"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  Avatar: () => Avatar,
  AvatarGroup: () => AvatarGroup,
  AvatarIcon: () => AvatarIcon,
  Backdrop: () => Backdrop,
  Badge: () => Badge,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  Chip: () => Chip,
  Divider: () => Divider,
  Drawer: () => Drawer,
  Dropdown: () => Dropdown,
  DropdownItem: () => DropdownItem,
  DropdownMenu: () => DropdownMenu,
  DropdownSection: () => DropdownSection,
  DropdownTrigger: () => DropdownTrigger,
  Modal: () => Modal,
  OKS_COLOR_SHADES: () => OKS_COLOR_SHADES,
  PageTitle: () => PageTitle,
  Portal: () => Portal,
  Slot: () => Slot,
  Tab: () => Tab,
  TabList: () => TabList,
  TabPanel: () => TabPanel,
  TabTrigger: () => TabTrigger,
  Tabs: () => Tabs,
  TabsLegacy: () => TabsLegacy,
  TabsRoot: () => TabsRoot,
  ToastProvider: () => ToastProvider,
  Tooltip: () => Tooltip,
  TooltipDefaultIcon: () => TooltipDefaultIcon,
  addToast: () => addToast,
  clamp: () => clamp,
  composeEventHandlers: () => composeEventHandlers,
  composeRefs: () => composeRefs,
  oksColorVarName: () => oksColorVarName,
  oksPaletteVarName: () => oksPaletteVarName,
  oksRadiusVarName: () => oksRadiusVarName,
  oksSpaceVarName: () => oksSpaceVarName,
  oksVar: () => oksVar,
  showToast: () => showToast,
  toast: () => toast,
  useReducedMotion: () => useReducedMotion,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.tsx
var import_react = require("react");

// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/components/Button/Button.module.css
styleInject("@layer components {\n  :where(.oksButton) {\n    --oks-button-height: 40px;\n    --oks-button-padding-x: var(--oks-space-4, 16px);\n    --oks-button-padding-y: var(--oks-space-2, 8px);\n    --oks-button-gap: var(--oks-space-2, 8px);\n    --oks-button-font-size: 14px;\n    --oks-button-icon-size: 18px;\n    --oks-button-radius: var(--oks-radius-md, 0.375rem);\n    --oks-button-border-width: 1px;\n    --oks-button-ripple-color: color-mix(in srgb, currentColor 35%, transparent);\n    --oks-button-bg: transparent;\n    --oks-button-fg: currentColor;\n    --oks-button-border: transparent;\n    --oks-button-shadow: none;\n    appearance: none;\n    border: var(--oks-button-border-width) solid var(--oks-button-border);\n    border-radius: var(--oks-button-radius);\n    background-color: var(--oks-button-bg);\n    color: var(--oks-button-fg);\n    box-shadow: var(--oks-button-shadow);\n    font: inherit;\n    font-size: var(--oks-button-font-size);\n    font-weight: 400;\n    line-height: 1.1;\n    height: var(--oks-button-height);\n    padding: var(--oks-button-padding-y) var(--oks-button-padding-x);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--oks-button-gap);\n    cursor: pointer;\n    user-select: none;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    isolation: isolate;\n    transition:\n      background-color 140ms ease,\n      border-color 140ms ease,\n      box-shadow 140ms ease,\n      color 140ms ease,\n      opacity 140ms ease,\n      transform 140ms ease;\n  }\n  :where(.oksButton[data-motion=reduced]) {\n    transition: none;\n    transform: none;\n  }\n  :where(.oksButton[data-full-width=true]) {\n    width: 100%;\n    flex: 1 1 0%;\n    min-width: 0;\n  }\n  :where(.oksButton[data-disabled=true]),\n  :where(.oksButton:disabled) {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n  :where(.oksButton[data-radius=none]) {\n    --oks-button-radius: 0;\n  }\n  :where(.oksButton[data-radius=sm]) {\n    --oks-button-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksButton[data-radius=md]) {\n    --oks-button-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksButton[data-radius=lg]) {\n    --oks-button-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksButton[data-radius=full]) {\n    --oks-button-radius: 9999px;\n  }\n  :where(.oksButton[data-focus-visible=true]),\n  :where(.oksButton:focus-visible) {\n    outline: 2px solid var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n    outline-offset: 2px;\n  }\n  :where(.oksButton[data-size=sm]) {\n    --oks-button-height: 36px;\n    --oks-button-padding-x: var(--oks-space-3, 12px);\n    --oks-button-padding-y: var(--oks-space-2, 8px);\n    --oks-button-font-size: 13px;\n    --oks-button-icon-size: 18px;\n  }\n  :where(.oksButton[data-size=md]) {\n    --oks-button-height: 40px;\n    --oks-button-padding-x: var(--oks-space-4, 16px);\n    --oks-button-padding-y: var(--oks-space-2, 8px);\n    --oks-button-font-size: 14px;\n    --oks-button-icon-size: 20px;\n  }\n  :where(.oksButton[data-size=lg]) {\n    --oks-button-height: 44px;\n    --oks-button-padding-x: var(--oks-space-5, 20px);\n    --oks-button-padding-y: var(--oks-space-3, 12px);\n    --oks-button-font-size: 15px;\n    --oks-button-icon-size: 22px;\n  }\n  :where(.oksButton[data-icon-only=true]) {\n    width: var(--oks-button-height);\n    padding: 0;\n    flex: none;\n  }\n  :where(.oksButtonStartContent),\n  :where(.oksButtonEndContent),\n  :where(.oksButtonIconOnly) {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n    font-size: var(--oks-button-icon-size);\n    line-height: 0;\n  }\n  :where(.oksButtonStartContent) :where(svg),\n  :where(.oksButtonEndContent) :where(svg),\n  :where(.oksButtonIconOnly) :where(svg) {\n    width: 1em;\n    height: 1em;\n    display: block;\n  }\n  :where(.oksButtonLabel) {\n    display: inline-block;\n    min-width: 0;\n  }\n  :where(.oksButtonSpinnerSlot) {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n  }\n  :where(.oksButtonSpinner) {\n    width: 1em;\n    height: 1em;\n    border-radius: 9999px;\n    border: 2px solid color-mix(in srgb, currentColor 25%, transparent);\n    border-top-color: currentColor;\n    animation: oksButtonSpinner 700ms linear infinite;\n  }\n  @keyframes oksButtonSpinner {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  :where(.oksButton[data-loading=true]) {\n    cursor: progress;\n  }\n  :where(.oksButton[data-variant=solid]) {\n    --oks-button-bg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-button-fg: #fff;\n    --oks-button-border: transparent;\n    --oks-button-ripple-color: color-mix(in srgb, white 55%, transparent);\n  }\n  :where(.oksButton[data-variant=solid][data-hover=true]:not([data-disabled=true])) {\n    --oks-button-bg: var(--oks-button-tone-hover, var(--oks-color-primary-600, #2563eb));\n  }\n  :where(.oksButton[data-variant=solid][data-pressed=true]:not([data-disabled=true])) {\n    --oks-button-bg: var(--oks-button-tone-active, var(--oks-color-primary-700, #1d4ed8));\n  }\n  :where(.oksButton[data-variant=shadow]) {\n    --oks-button-bg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-button-fg: #fff;\n    --oks-button-shadow: 0 10px 25px rgba(0, 0, 0, 0.22);\n    --oks-button-ripple-color: color-mix(in srgb, white 55%, transparent);\n  }\n  :where(.oksButton[data-variant=shadow][data-hover=true]:not([data-disabled=true])) {\n    --oks-button-bg: var(--oks-button-tone-hover, var(--oks-color-primary-600, #2563eb));\n    --oks-button-shadow: 0 12px 28px rgba(0, 0, 0, 0.26);\n  }\n  :where(.oksButton[data-variant=bordered]) {\n    --oks-button-bg: transparent;\n    --oks-button-fg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-button-border: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksButton[data-variant=bordered][data-hover=true]:not([data-disabled=true])) {\n    --oks-button-bg: var(--oks-button-tone-50, var(--oks-color-primary-50, #eff6ff));\n  }\n  :where(.oksButton[data-variant=bordered][data-pressed=true]:not([data-disabled=true])) {\n    --oks-button-bg: var(--oks-button-tone-100, var(--oks-color-primary-100, #dbeafe));\n  }\n  :where(.oksButton[data-variant=flat]) {\n    --oks-button-bg: var(--oks-button-tone-50, var(--oks-color-primary-50, #eff6ff));\n    --oks-button-fg: var(--oks-button-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  :where(.oksButton[data-variant=flat][data-hover=true]:not([data-disabled=true])) {\n    --oks-button-bg: var(--oks-button-tone-100, var(--oks-color-primary-100, #dbeafe));\n  }\n  :where(.oksButton[data-variant=flat][data-pressed=true]:not([data-disabled=true])) {\n    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 20%, transparent );\n  }\n  :where(.oksButton[data-variant=light]) {\n    --oks-button-bg: transparent;\n    --oks-button-fg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksButton[data-variant=light][data-hover=true]:not([data-disabled=true])) {\n    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 12%, transparent );\n  }\n  :where(.oksButton[data-variant=light][data-pressed=true]:not([data-disabled=true])) {\n    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 18%, transparent );\n  }\n  :where(.oksButton[data-variant=faded]) {\n    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 10%, transparent );\n    --oks-button-fg: var(--oks-button-tone-700, var(--oks-color-primary-700, #1d4ed8));\n    --oks-button-border: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 22%, transparent );\n  }\n  :where(.oksButton[data-variant=ghost]) {\n    --oks-button-bg: transparent;\n    --oks-button-fg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-button-border: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 35%, transparent );\n  }\n  :where(.oksButton[data-variant=ghost][data-hover=true]:not([data-disabled=true])) {\n    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 10%, transparent );\n  }\n  :where(.oksButton[data-variant=ghost][data-pressed=true]:not([data-disabled=true])) {\n    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 16%, transparent );\n  }\n  :where(.oksButtonRipple) {\n    position: absolute;\n    border-radius: 9999px;\n    background:\n      radial-gradient(\n        circle,\n        var(--oks-button-ripple-color, rgba(255, 255, 255, 0.35)) 0%,\n        color-mix(in srgb, var(--oks-button-ripple-color, rgba(255, 255, 255, 0.35)) 65%, transparent) 60%,\n        transparent 75%);\n    transform: translate(-50%, -50%) scale(0);\n    opacity: 0;\n    pointer-events: none;\n    z-index: 0;\n    will-change: transform, opacity;\n    animation: oksButtonRipple 600ms ease-out;\n  }\n  :where(.oksButton) :where(.oksButtonStartContent),\n  :where(.oksButton) :where(.oksButtonEndContent),\n  :where(.oksButton) :where(.oksButtonIconOnly),\n  :where(.oksButton) :where(.oksButtonSpinnerSlot),\n  :where(.oksButton) :where(.oksButtonLabel) {\n    position: relative;\n    z-index: 1;\n  }\n}\n@keyframes oksButtonRipple {\n  0% {\n    transform: translate(-50%, -50%) scale(0);\n    opacity: 0.45;\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  :where(.oksButton) {\n    transition: none;\n    transform: none;\n  }\n  :where(.oksButtonRipple) {\n    display: none;\n  }\n  :where(.oksButtonSpinner) {\n    animation: none;\n  }\n}\n");

// src/components/Button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function mergeClassName(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function getColorVar(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
var Button = (0, import_react.forwardRef)(
  (props, ref) => {
    const {
      children,
      variant = "solid",
      size = "md",
      color = "default",
      radius = "md",
      startContent,
      endContent,
      spinner,
      spinnerPlacement = "start",
      fullWidth = false,
      isIconOnly = false,
      isDisabled = false,
      isLoading = false,
      disableRipple = false,
      disableAnimation = false,
      className,
      type = "button",
      style,
      disabled: nativeDisabled,
      onMouseDown,
      onPointerDown,
      onPointerEnter,
      onPointerLeave,
      onPointerUp,
      onPointerCancel,
      onClick,
      onKeyDown,
      onKeyUp: onKeyUpProp,
      onPress,
      onPressStart,
      onPressEnd,
      onPressChange,
      onPressUp,
      onFocus,
      onBlur,
      ...rest
    } = props;
    const disabled = nativeDisabled || isDisabled;
    const [ripples, setRipples] = (0, import_react.useState)([]);
    const skipMouseRippleRef = (0, import_react.useRef)(false);
    const ariaLabel = rest["aria-label"];
    const ariaLabelledBy = rest["aria-labelledby"];
    const computedAriaLabel = typeof ariaLabel === "string" ? ariaLabel : void 0;
    const nodeEnv = globalThis?.process?.env?.NODE_ENV;
    if (nodeEnv !== "production") {
      if (isIconOnly && !computedAriaLabel && typeof ariaLabelledBy !== "string") {
        throw new Error(
          "oks-ui Button: `aria-label` is required when `isIconOnly` is true."
        );
      }
    }
    const toneVars = {
      "--oks-button-tone": getColorVar(color, 500),
      "--oks-button-tone-hover": getColorVar(color, 600),
      "--oks-button-tone-active": getColorVar(color, 700),
      "--oks-button-tone-50": getColorVar(color, 50),
      "--oks-button-tone-100": getColorVar(color, 100),
      "--oks-button-tone-700": getColorVar(color, 700)
    };
    const getRippleId = () => {
      const uuid = globalThis?.crypto?.randomUUID?.();
      return typeof uuid === "string" ? uuid : `${Date.now()}-${Math.random()}`;
    };
    const isReducedMotion = typeof globalThis.matchMedia === "function" && globalThis.matchMedia("(prefers-reduced-motion: reduce)")?.matches;
    const [isHovered, setIsHovered] = (0, import_react.useState)(false);
    const [isFocused, setIsFocused] = (0, import_react.useState)(false);
    const [isFocusVisible, setIsFocusVisible] = (0, import_react.useState)(false);
    const [isPressed, setIsPressed] = (0, import_react.useState)(false);
    const startPress = (e) => {
      if (disabled || isLoading) return;
      if (!isPressed) {
        onPressStart?.(e);
        onPressChange?.(true);
      }
      setIsPressed(true);
    };
    const endPress = (e) => {
      if (isPressed) {
        onPressEnd?.(e);
        onPressChange?.(false);
      }
      setIsPressed(false);
    };
    const createRipple = (0, import_react.useCallback)(
      (button, x, y) => {
        if (disableAnimation || isReducedMotion) return;
        const rect = button.getBoundingClientRect();
        const maxX = Math.max(x, rect.width - x);
        const maxY = Math.max(y, rect.height - y);
        const size2 = Math.ceil(Math.sqrt(maxX * maxX + maxY * maxY) * 2);
        const id = getRippleId();
        setRipples((prev) => {
          const next = [...prev, { id, x, y, size: size2 }];
          if (next.length > 10) next.splice(0, next.length - 10);
          return next;
        });
      },
      [disableAnimation, isReducedMotion]
    );
    const removeRipple = (0, import_react.useCallback)((id) => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, []);
    const handlePointerDown = (e) => {
      startPress(e);
      if (!disabled && !isLoading && !disableRipple) {
        skipMouseRippleRef.current = true;
        globalThis.setTimeout(() => {
          skipMouseRippleRef.current = false;
        }, 0);
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        if (typeof e.clientX === "number" && typeof e.clientY === "number") {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          createRipple(button, x, y);
        }
      }
      onPointerDown?.(e);
    };
    const handleMouseDown = (e) => {
      if (!disabled && !isLoading && !disableRipple) {
        if (skipMouseRippleRef.current) {
          onMouseDown?.(e);
          return;
        }
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        createRipple(button, x, y);
      }
      onMouseDown?.(e);
    };
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") startPress(e);
      if (!disabled && !isLoading && !disableRipple) {
        if (e.key === "Enter" || e.key === " ") {
          const button = e.currentTarget;
          const rect = button.getBoundingClientRect();
          createRipple(button, rect.width / 2, rect.height / 2);
        }
      }
      onKeyDown?.(e);
    };
    const handleKeyUp = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        if (!disabled && !isLoading) onPressUp?.(e);
        endPress(e);
      }
      onKeyUpProp?.(e);
    };
    const handleClick = (e) => {
      if (disabled || isLoading) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onPress?.(e);
      onClick?.(e);
    };
    const handlePointerEnter = (e) => {
      setIsHovered(true);
      onPointerEnter?.(e);
    };
    const handlePointerLeave = (e) => {
      setIsHovered(false);
      endPress(e);
      onPointerLeave?.(e);
    };
    const handlePointerUp = (e) => {
      if (!disabled && !isLoading) onPressUp?.(e);
      endPress(e);
      onPointerUp?.(e);
    };
    const handlePointerCancel = (e) => {
      endPress(e);
      onPointerCancel?.(e);
    };
    const handleBlur = (e) => {
      setIsFocused(false);
      setIsFocusVisible(false);
      endPress(e);
      onBlur?.(e);
    };
    const handleFocus = (e) => {
      setIsFocused(true);
      const node = e?.currentTarget;
      const focusVisible = typeof node?.matches === "function" ? node.matches(":focus-visible") : false;
      setIsFocusVisible(focusVisible);
      onFocus?.(e);
    };
    const defaultSpinner = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "oksButtonSpinner", "aria-hidden": "true" });
    const resolvedSpinner = spinner ?? defaultSpinner;
    const iconOnlyLoading = isIconOnly && isLoading;
    const buttonElement = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        ...rest,
        "aria-label": computedAriaLabel,
        ref,
        type,
        disabled,
        onClick: handleClick,
        onMouseDown: handleMouseDown,
        onPointerDown: handlePointerDown,
        onPointerEnter: handlePointerEnter,
        onPointerLeave: handlePointerLeave,
        onPointerUp: handlePointerUp,
        onPointerCancel: handlePointerCancel,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        onFocus: handleFocus,
        onBlur: handleBlur,
        "data-hover": isHovered ? "true" : "false",
        "data-focus": isFocused ? "true" : "false",
        "data-focus-visible": isFocusVisible ? "true" : "false",
        "data-disabled": disabled ? "true" : "false",
        "data-pressed": isPressed ? "true" : "false",
        "data-loading": isLoading ? "true" : "false",
        "data-motion": disableAnimation || isReducedMotion ? "reduced" : "default",
        "data-variant": variant,
        "data-color": color,
        "data-size": size,
        "data-radius": radius,
        "data-icon-only": isIconOnly ? "true" : "false",
        "data-full-width": fullWidth ? "true" : "false",
        className: mergeClassName("oksButton", className),
        style: { ...toneVars, ...style },
        children: [
          ripples.map((ripple) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "span",
            {
              className: "oksButtonRipple",
              "aria-hidden": "true",
              style: {
                left: `${ripple.x}px`,
                top: `${ripple.y}px`,
                width: `${ripple.size}px`,
                height: `${ripple.size}px`
              },
              onAnimationEnd: () => removeRipple(ripple.id)
            },
            ripple.id
          )),
          isLoading && spinnerPlacement === "start" && !iconOnlyLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "oksButtonSpinnerSlot", "data-placement": "start", children: resolvedSpinner }) : null,
          startContent !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "oksButtonStartContent", children: startContent }) : null,
          iconOnlyLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "oksButtonIconOnly", "aria-hidden": "true", children: resolvedSpinner }) : isIconOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "oksButtonIconOnly", children }) : children !== void 0 && children !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "oksButtonLabel", children }) : null,
          endContent !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "oksButtonEndContent", children: endContent }) : null,
          isLoading && spinnerPlacement === "end" && !iconOnlyLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "oksButtonSpinnerSlot", "data-placement": "end", children: resolvedSpinner }) : null
        ]
      }
    );
    return buttonElement;
  }
);
Button.displayName = "Button";

// src/components/Button/ButtonGroup.tsx
var import_react2 = require("react");

// src/components/Button/ButtonGroup.module.css
styleInject("@layer components {\n  :where(.oksButtonGroup) {\n    display: inline-flex;\n    align-items: stretch;\n  }\n  :where(.oksButtonGroup[data-full-width=true]) {\n    width: 100%;\n  }\n  :where(.oksButtonGroup) > :where(.oksButton) {\n    border-radius: 0;\n  }\n  :where(.oksButtonGroup) > :where(.oksButton:not(:first-child)) {\n    margin-left: calc(var(--oks-button-border-width, 1px) * -1);\n  }\n  :where(.oksButtonGroup) > :where(.oksButton:only-child) {\n    border-radius: var(--oks-button-radius);\n  }\n  :where(.oksButtonGroup) > :where(.oksButton:first-child) {\n    border-top-left-radius: var(--oks-button-radius);\n    border-bottom-left-radius: var(--oks-button-radius);\n  }\n  :where(.oksButtonGroup) > :where(.oksButton:last-child) {\n    border-top-right-radius: var(--oks-button-radius);\n    border-bottom-right-radius: var(--oks-button-radius);\n  }\n  :where(.oksButtonGroup[data-full-width=true]) > :where(.oksButton) {\n    flex: 1 1 0%;\n    min-width: 0;\n  }\n  :where(.oksButtonGroup) > :where(.oksButton[data-hover=true]),\n  :where(.oksButtonGroup) > :where(.oksButton[data-focus-visible=true]) {\n    z-index: 1;\n  }\n}\n");

// src/components/Button/ButtonGroup.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function mergeClassName2(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
var ButtonGroup = (0, import_react2.forwardRef)(
  (props, ref) => {
    const {
      children,
      variant = "solid",
      color = "default",
      size = "md",
      radius = "md",
      fullWidth = false,
      isDisabled = false,
      className,
      role = "group",
      style,
      ...rest
    } = props;
    const enhancedChildren = import_react2.Children.map(children, (child) => {
      if (!(0, import_react2.isValidElement)(child) || child.type !== Button) return child;
      const nextProps = {};
      if (child.props.variant === void 0) nextProps.variant = variant;
      if (child.props.color === void 0) nextProps.color = color;
      if (child.props.size === void 0) nextProps.size = size;
      if (child.props.radius === void 0) nextProps.radius = radius;
      if (child.props.fullWidth === void 0) nextProps.fullWidth = fullWidth;
      if (child.props.isDisabled === void 0) nextProps.isDisabled = isDisabled;
      return (0, import_react2.cloneElement)(child, nextProps);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        ...rest,
        ref,
        role,
        "data-variant": variant,
        "data-color": color,
        "data-size": size,
        "data-radius": radius,
        "data-full-width": fullWidth ? "true" : "false",
        "data-disabled": isDisabled ? "true" : "false",
        className: mergeClassName2("oksButtonGroup", className),
        style,
        children: enhancedChildren
      }
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";

// src/components/Toast/Toast.tsx
var import_react6 = require("react");

// src/motion/useReducedMotion.ts
var import_react3 = require("react");
function useReducedMotion() {
  const [reduced, setReduced] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(Boolean(mq.matches));
    update();
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);
  return reduced;
}

// src/primitives/Portal.tsx
var import_react_dom = require("react-dom");
function Portal({ children, container }) {
  if (typeof document === "undefined") return null;
  const target = container ?? document.body;
  if (!target) return null;
  return (0, import_react_dom.createPortal)(children, target);
}

// src/primitives/Slot.tsx
var import_react4 = require("react");
function mergeProps(slotProps, childProps) {
  const merged = { ...slotProps, ...childProps };
  const slotClassName = slotProps.className;
  const childClassName = childProps.className;
  if (typeof slotClassName === "string" || typeof childClassName === "string") {
    merged.className = [slotClassName, childClassName].filter(Boolean).join(" ");
  }
  const slotStyle = slotProps.style;
  const childStyle = childProps.style;
  if (slotStyle || childStyle) {
    merged.style = { ...slotStyle, ...childStyle };
  }
  for (const key of Object.keys(slotProps)) {
    if (!key.startsWith("on")) continue;
    const a = slotProps[key];
    const b = childProps[key];
    if (typeof a === "function" && typeof b === "function") {
      merged[key] = (...args) => {
        a(...args);
        b(...args);
      };
    }
  }
  return merged;
}
function Slot({ children, ...slotProps }) {
  if (!(0, import_react4.isValidElement)(children)) return null;
  const mergedProps = mergeProps(slotProps, children.props);
  return (0, import_react4.cloneElement)(children, mergedProps);
}

// src/internal/CloseButton/CloseButton.tsx
var import_react5 = require("react");

// src/internal/icons/StatusIcons.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function StatusIcon({ type, size = 18, ...rest }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    focusable: false,
    ...rest
  };
  if (type === "default") {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...common, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
          stroke: "currentColor",
          strokeWidth: "1.6"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M10 10h.01",
          stroke: "currentColor",
          strokeWidth: "2.8",
          strokeLinecap: "round"
        }
      )
    ] });
  }
  if (type === "success") {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...common, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
          stroke: "currentColor",
          strokeWidth: "1.6"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "m6.1 10.3 2.2 2.2 5.6-5.6",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] });
  }
  if (type === "warning") {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...common, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M10 2.2 18 17.8H2L10 2.2Z",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M10 7v4.6",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M10 14.2h.01",
          stroke: "currentColor",
          strokeWidth: "2.6",
          strokeLinecap: "round"
        }
      )
    ] });
  }
  if (type === "error") {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...common, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
          stroke: "currentColor",
          strokeWidth: "1.6"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M7.2 7.2 12.8 12.8",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M12.8 7.2 7.2 12.8",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      )
    ] });
  }
  if (type === "loading") {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...common, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "path",
      {
        d: "M10 3.2a6.8 6.8 0 1 0 6.8 6.8",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }
    ) });
  }
  if (type === "info") {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...common, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
          stroke: "currentColor",
          strokeWidth: "1.6"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M10 8.2V14",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M10 6h.01",
          stroke: "currentColor",
          strokeWidth: "2.6",
          strokeLinecap: "round"
        }
      )
    ] });
  }
  return null;
}
function CloseIcon({ size = 16, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "path",
          {
            d: "M6.2 6.2 13.8 13.8",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "path",
          {
            d: "M13.8 6.2 6.2 13.8",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}

// src/internal/CloseButton/CloseButton.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function mergeClassName3(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
var CloseButton = (0, import_react5.forwardRef)(
  ({ ariaLabel, iconSize = 16, icon, iconClassName, ...rest }, ref) => {
    const resolvedIcon = (() => {
      if (icon === void 0) return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CloseIcon, { size: iconSize, className: iconClassName });
      if (!iconClassName) return icon;
      if ((0, import_react5.isValidElement)(icon))
        return (0, import_react5.cloneElement)(icon, {
          className: mergeClassName3(icon.props.className, iconClassName)
        });
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: iconClassName, children: icon });
    })();
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { ref, type: "button", "aria-label": ariaLabel, ...rest, children: resolvedIcon });
  }
);
CloseButton.displayName = "CloseButton";

// src/components/Toast/Toast.module.css
styleInject('@layer components {\n  :where(.oksToastViewport) {\n    position: fixed;\n    inset: 0;\n    z-index: 50;\n    display: flex;\n    padding: calc(var(--oks-space-2, 8px) + var(--oks-toast-offset, 0px));\n    pointer-events: none;\n  }\n  :where(.oksToastViewport[data-position^=top]) {\n    align-items: flex-start;\n  }\n  :where(.oksToastViewport[data-position^=bottom]) {\n    align-items: flex-end;\n  }\n  :where(.oksToastViewport[data-position$=left]) {\n    justify-content: flex-start;\n  }\n  :where(.oksToastViewport[data-position$=right]) {\n    justify-content: flex-end;\n  }\n  :where(.oksToastViewport[data-position$=center]) {\n    justify-content: center;\n  }\n  :where(.oksToastStack) {\n    --oks-toast-stack-dir: -1;\n    --oks-toast-stack-collapsed: 10px;\n    --oks-toast-stack-expanded: 64px;\n    --oks-toast-stack-overlap: var(--oks-toast-stack-collapsed);\n    --oks-toast-stack-scale-step: 0.03;\n    --oks-toast-ease: cubic-bezier(0.16, 1, 0.3, 1);\n    --oks-toast-stack-duration: 320ms;\n    --oks-toast-enter-duration: 280ms;\n    --oks-toast-exit-duration: 260ms;\n    width: min(300px, calc(100vw - 24px));\n    pointer-events: auto;\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  :where(.oksToastStack[data-position^=top]) {\n    --oks-toast-stack-dir: 1;\n  }\n  :where(.oksToastStack[data-position^=bottom] .oksToast) {\n    align-self: end;\n  }\n  :where(.oksToastStack[data-position^=top] .oksToast) {\n    align-self: start;\n  }\n  :where(.oksToast) {\n    --oks-toast-gap: var(--oks-space-3, 12px);\n    --oks-toast-padding-y: var(--oks-space-3, 12px);\n    --oks-toast-padding-x: var(--oks-space-3, 12px);\n    --oks-toast-title-font-size: 14px;\n    --oks-toast-message-font-size: 13px;\n    --oks-toast-message-margin-top: var(--oks-space-1, 4px);\n    --oks-toast-icon-box: 28px;\n    --oks-toast-icon-glyph: 18px;\n    --oks-toast-enter-x: 0px;\n    --oks-toast-enter-y: 12px;\n    grid-area: 1 / 1;\n    width: 100%;\n    z-index: calc(100 - var(--oks-toast-stack-index, 0));\n    transition: transform var(--oks-toast-stack-duration) var(--oks-toast-ease);\n    transform: translateY(calc(var(--oks-toast-stack-dir) * (var(--oks-toast-stack-index, 0) * var(--oks-toast-stack-overlap)))) scale(calc(1 - (var(--oks-toast-stack-index, 0) * var(--oks-toast-stack-scale-step))));\n    will-change: transform;\n  }\n  :where(.oksToastSurface) {\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    gap: var(--oks-toast-gap);\n    padding: var(--oks-toast-padding-y) var(--oks-toast-padding-x);\n    border-radius: var(--oks-toast-radius, var(--oks-radius-md, 0.375rem));\n    background-color: var(--oks-toast-bg, rgba(15, 23, 42, 0.92));\n    color: var(--oks-toast-fg, white);\n    border: 1px solid var(--oks-toast-border, rgba(255, 255, 255, 0.12));\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);\n    opacity: 1;\n    transform: translate3d(0, 0, 0) scale(1);\n    will-change: transform, opacity;\n  }\n  :where(.oksToast[data-placement^=top]) {\n    --oks-toast-enter-y: -12px;\n  }\n  :where(.oksToast[data-placement$=right]) {\n    --oks-toast-enter-x: 12px;\n    --oks-toast-enter-y: 0px;\n  }\n  :where(.oksToast[data-placement$=left]) {\n    --oks-toast-enter-x: -12px;\n    --oks-toast-enter-y: 0px;\n  }\n  :where(.oksToastStack:is(:hover, :focus-within)) {\n    --oks-toast-stack-overlap: var(--oks-toast-stack-expanded);\n    --oks-toast-stack-scale-step: 0;\n  }\n  :where(.oksToast[data-motion=default][data-animation=entering] .oksToastSurface) {\n    animation: oksToastIn var(--oks-toast-enter-duration) var(--oks-toast-ease) both;\n  }\n  :where(.oksToast[data-motion=default][data-animation=exiting] .oksToastSurface) {\n    animation: oksToastOut var(--oks-toast-exit-duration) var(--oks-toast-ease) forwards;\n  }\n  @keyframes oksToastIn {\n    from {\n      opacity: 0;\n      transform: translate3d(var(--oks-toast-enter-x), var(--oks-toast-enter-y), 0) scale(0.98);\n    }\n    to {\n      opacity: 1;\n      transform: translate3d(0, 0, 0) scale(1);\n    }\n  }\n  @keyframes oksToastOut {\n    from {\n      opacity: 1;\n      transform: translate3d(0, 0, 0) scale(1);\n    }\n    to {\n      opacity: 0;\n      transform: translate3d(var(--oks-toast-enter-x), var(--oks-toast-enter-y), 0) scale(0.98);\n    }\n  }\n  :where(.oksToast[data-radius=none]) {\n    --oks-toast-radius: 0px;\n  }\n  :where(.oksToast[data-radius=sm]) {\n    --oks-toast-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksToast[data-radius=md]) {\n    --oks-toast-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksToast[data-radius=lg]) {\n    --oks-toast-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksToast[data-radius=full]) {\n    --oks-toast-radius: var(--oks-radius-full, 9999px);\n  }\n  :where(.oksToast[data-state=closing]) {\n    pointer-events: none;\n  }\n  :where(.oksToast[data-motion=reduced]) {\n    transition: none;\n  }\n  :where(.oksToast[data-stack-index]:not([data-stack-index="0"])) {\n    pointer-events: none;\n  }\n  :where(.oksToast[data-motion=reduced] .oksToastSurface) {\n    animation: none;\n    transition: none;\n    transform: none;\n  }\n  :where(.oksToastStack:is(:hover, :focus-within) .oksToast[data-stack-index]) {\n    pointer-events: auto;\n  }\n  :where(.oksToast[data-size=xs]) {\n    --oks-toast-gap: var(--oks-space-1, 4px);\n    --oks-toast-padding-y: var(--oks-space-2, 8px);\n    --oks-toast-padding-x: var(--oks-space-2, 8px);\n    --oks-toast-message-font-size: 12px;\n    --oks-toast-icon-box: 22px;\n    --oks-toast-icon-glyph: 14px;\n  }\n  :where(.oksToast[data-size=xs-sm]) {\n    --oks-toast-gap: var(--oks-space-2, 8px);\n    --oks-toast-padding-y: var(--oks-space-2, 8px);\n    --oks-toast-padding-x: var(--oks-space-2, 8px);\n    --oks-toast-message-font-size: 12px;\n    --oks-toast-icon-box: 24px;\n    --oks-toast-icon-glyph: 16px;\n  }\n  :where(.oksToast[data-size=sm]) {\n    --oks-toast-gap: var(--oks-space-3, 12px);\n    --oks-toast-padding-y: var(--oks-space-2, 8px);\n    --oks-toast-padding-x: var(--oks-space-3, 12px);\n    --oks-toast-message-font-size: 13px;\n    --oks-toast-icon-box: 26px;\n    --oks-toast-icon-glyph: 18px;\n  }\n  :where(.oksToast[data-size=lg]) {\n    --oks-toast-gap: var(--oks-space-4, 16px);\n    --oks-toast-padding-y: var(--oks-space-4, 16px);\n    --oks-toast-padding-x: var(--oks-space-4, 16px);\n    --oks-toast-title-font-size: 15px;\n    --oks-toast-message-font-size: 14px;\n    --oks-toast-icon-box: 32px;\n    --oks-toast-icon-glyph: 20px;\n  }\n  :where(.oksToast[data-size=xl]) {\n    --oks-toast-gap: var(--oks-space-4, 16px);\n    --oks-toast-padding-y: var(--oks-space-5, 20px);\n    --oks-toast-padding-x: var(--oks-space-5, 20px);\n    --oks-toast-title-font-size: 16px;\n    --oks-toast-message-font-size: 15px;\n    --oks-toast-icon-box: 36px;\n    --oks-toast-icon-glyph: 22px;\n  }\n  :where(.oksToastIcon) {\n    color: var(--oks-toast-icon-fg, var(--oks-toast-accent, currentColor));\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--oks-toast-icon-box);\n    height: var(--oks-toast-icon-box);\n    border-radius: var(--oks-radius-sm, 0.25rem);\n    background-color: var( --oks-toast-icon-bg, color-mix(in srgb, var(--oks-toast-accent, #2563eb) 12%, transparent) );\n    flex: none;\n  }\n  :where(.oksToastIcon svg) {\n    width: var(--oks-toast-icon-glyph);\n    height: var(--oks-toast-icon-glyph);\n  }\n  :where(.oksToastLoading) {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n  }\n  :where(.oksToastProgressTrack) {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 2px;\n    background-color: color-mix(in srgb, var(--oks-toast-fg, currentColor) 20%, transparent);\n    pointer-events: none;\n  }\n  :where(.oksToastProgressIndicator) {\n    height: 100%;\n    width: 100%;\n    background-color: var(--oks-toast-fg, currentColor);\n    opacity: 0.6;\n    transform-origin: left;\n    transform: scaleX(1);\n    pointer-events: none;\n  }\n  :where(.oksToast[data-motion=reduced] .oksToastProgressIndicator) {\n    transition: none !important;\n  }\n  :where(.oksToastBody) {\n    flex: 1;\n    min-width: 0;\n  }\n  :where(.oksToastTitle) {\n    font-weight: 600;\n    font-size: var(--oks-toast-title-font-size);\n    line-height: 1.2;\n  }\n  :where(.oksToastMessage) {\n    font-size: var(--oks-toast-message-font-size);\n    line-height: 1.35;\n    opacity: 0.95;\n    word-wrap: break-word;\n  }\n  :where(.oksToastControls) {\n    margin-left: auto;\n    display: inline-flex;\n    align-items: center;\n    gap: var(--oks-space-2, 8px);\n    flex: none;\n  }\n  :where(.oksToastAction) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    color: inherit;\n    padding: 0;\n    margin: 0;\n    font-size: 13px;\n    font-weight: 600;\n    cursor: pointer;\n    text-decoration: underline;\n    text-underline-offset: 3px;\n  }\n  :where(.oksToastClose) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    color: inherit;\n    width: 28px;\n    height: 28px;\n    border-radius: var(--oks-radius-sm, 0.25rem);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n  }\n  :where(.oksToastClose:hover) {\n    background-color: rgba(0, 0, 0, 0.06);\n  }\n  :where(.oksToastClose:focus-visible),\n  :where(.oksToastAction:focus-visible) {\n    outline: 2px solid var(--oks-color-primary-500, #3b82f6);\n    outline-offset: 2px;\n  }\n}\n');

// src/components/Toast/Toast.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var ToastContext = (0, import_react6.createContext)(null);
function mergeClassName4(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function isToastOptions(value) {
  if (!value || typeof value !== "object") return false;
  if ((0, import_react6.isValidElement)(value)) return false;
  const v = value;
  return "type" in v || "tone" in v || "color" in v || "severity" in v || "variant" in v || "radius" in v || "size" in v || "position" in v || "placement" in v || "duration" in v || "timeout" in v || "persistent" in v || "dismissible" in v || "hideCloseButton" in v || "action" in v || "title" in v || "message" in v || "description" in v || "icon" in v || "showIcon" in v || "hideIcon" in v || "endContent" in v || "closeIcon" in v || "loadingComponent" in v || "promise" in v || "classNames" in v || "id" in v || "className" in v || "style" in v;
}
function omitUndefined(obj) {
  const out = {};
  for (const k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k) && obj[k] !== void 0) {
      out[k] = obj[k];
    }
  }
  return out;
}
function normalizeShowArgs(messageOrOptions, options) {
  if (isToastOptions(messageOrOptions))
    return { ...messageOrOptions, ...options ?? {} };
  return { message: messageOrOptions, ...options ?? {} };
}
function defaultToneForType(type) {
  if (type === "success") return "success";
  if (type === "warning") return "warning";
  if (type === "error") return "danger";
  if (type === "info") return "info";
  if (type === "loading") return "primary";
  return "primary";
}
function defaultShowIcon(type) {
  return true;
}
function toastRole(_type) {
  return "alert";
}
function resolveVariant(variant) {
  if (variant === "flat") return "soft";
  if (variant === "bordered") return "outline";
  return variant;
}
function resolveTypeFromColor(color) {
  if (color === "success") return "success";
  if (color === "warning") return "warning";
  if (color === "danger") return "error";
  return "default";
}
function resolveToneFromColor(color) {
  if (!color || color === "default") return void 0;
  return color;
}
function getVariantVars(variant, tone) {
  const v = resolveVariant(variant);
  const accent = `var(--oks-color-${tone}-600, var(--oks-color-primary-600, #2563eb))`;
  const softBg = `var(--oks-color-${tone}-50, var(--oks-color-primary-50, #eff6ff))`;
  const softFg = `var(--oks-color-${tone}-900, var(--oks-color-primary-900, #0b1220))`;
  if (v === "solid") {
    return { accent, bg: accent, fg: "white", border: accent };
  }
  if (v === "outline") {
    return { accent, bg: "transparent", fg: softFg, border: accent };
  }
  return { accent, bg: softBg, fg: softFg, border: accent };
}
function toastReducer(state, action) {
  if (action.type === "UPSERT") {
    const next = [action.item, ...state.filter((t) => t.id !== action.item.id)];
    return next.slice(0, Math.max(1, action.maxToasts));
  }
  if (action.type === "PATCH") {
    return state.map((t) => {
      if (t.id !== action.id) return t;
      const patch = omitUndefined(
        action.patch
      );
      const patchColor = patch.severity ?? patch.color;
      const nextType = patch.type ?? (patchColor !== void 0 ? resolveTypeFromColor(patchColor) : t.type);
      const nextTone = patch.tone ?? (patchColor !== void 0 ? resolveToneFromColor(patchColor) ?? t.tone : t.tone);
      const nextVariant = patch.variant ?? t.variant;
      const nextSize = patch.size ?? t.size;
      const nextPosition = patch.placement ?? patch.position ?? t.position;
      const nextDuration = patch.persistent === true ? null : patch.timeout !== void 0 ? patch.timeout : patch.duration !== void 0 ? patch.duration : t.duration;
      const nextShowIcon = patch.hideIcon !== void 0 ? !patch.hideIcon : patch.showIcon !== void 0 ? patch.showIcon : patch.type !== void 0 || patchColor !== void 0 ? defaultShowIcon(nextType) : t.showIcon;
      const nextShowDurationBarWanted = patch.shouldShowTimeoutProgress ?? patch.showDurationBar;
      return {
        ...t,
        ...patch,
        type: nextType,
        tone: nextTone,
        variant: nextVariant,
        size: nextSize,
        position: nextPosition,
        duration: nextDuration,
        message: patch.message !== void 0 ? patch.message : t.message,
        description: patch.description !== void 0 ? patch.description : t.description,
        showDurationBar: Boolean(nextShowDurationBarWanted) && nextDuration != null,
        dismissible: patch.dismissible ?? (patch.hideCloseButton !== void 0 ? !patch.hideCloseButton : t.dismissible),
        showIcon: nextShowIcon,
        state: t.state
      };
    });
  }
  if (action.type === "MARK_CLOSING") {
    return state.map(
      (t) => t.id === action.id ? { ...t, state: "closing", duration: null } : t
    );
  }
  if (action.type === "MARK_ALL_CLOSING") {
    return state.map((t) => ({ ...t, state: "closing", duration: null }));
  }
  if (action.type === "REMOVE") {
    return state.filter((t) => t.id !== action.id);
  }
  return state;
}
function useToast() {
  const ctx = (0, import_react6.useContext)(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}
var globalToastApi = null;
var toastShow = ((messageOrOptions, options) => {
  if (!globalToastApi) {
    console.warn("Toast provider not configured");
    return -1;
  }
  return globalToastApi.show(messageOrOptions, options);
});
var toastFn = ((messageOrOptions, options) => toastShow(messageOrOptions, options));
var toast = Object.assign(toastFn, {
  show: toastShow,
  info: (message, options) => toastShow(message, { ...options ?? {}, type: "info" }),
  success: (message, options) => toastShow(message, { ...options ?? {}, type: "success" }),
  warning: (message, options) => toastShow(message, { ...options ?? {}, type: "warning" }),
  error: (message, options) => toastShow(message, { ...options ?? {}, type: "error" }),
  update: (id, patch) => {
    if (!globalToastApi) {
      console.warn("Toast provider not configured");
      return;
    }
    globalToastApi.update(id, patch);
  },
  dismiss: (id) => {
    if (!globalToastApi) {
      console.warn("Toast provider not configured");
      return;
    }
    globalToastApi.dismiss(id);
  },
  dismissAll: () => {
    if (!globalToastApi) {
      console.warn("Toast provider not configured");
      return;
    }
    globalToastApi.dismissAll();
  },
  promise: (promiseOrFn, options) => {
    if (!globalToastApi) {
      console.warn("Toast provider not configured");
      return -1;
    }
    return globalToastApi.promise(promiseOrFn, options);
  }
});
function showToast(messageOrOptions, options) {
  return toastShow(messageOrOptions, options);
}
function addToast(options) {
  return toastShow(options);
}
function ToastRow({
  item,
  dataMotion,
  onDismiss,
  stackIndex = 0
}) {
  const duration = item.duration;
  const timerId = (0, import_react6.useRef)(null);
  const startedAt = (0, import_react6.useRef)(0);
  const remainingMs = (0, import_react6.useRef)(duration ?? 0);
  const progressRef = (0, import_react6.useRef)(null);
  const canShowDurationBar = stackIndex === 0 && item.showDurationBar && duration != null;
  const setDurationBar = (0, import_react6.useCallback)(
    (ratio, transitionMs) => {
      const el = progressRef.current;
      if (!el) return;
      el.style.transform = `scaleX(${Math.max(0, Math.min(1, ratio))})`;
      if (dataMotion === "reduced" || transitionMs == null) {
        el.style.transition = "none";
        return;
      }
      el.style.transition = `transform ${transitionMs}ms linear`;
    },
    [dataMotion]
  );
  const startDurationBar = (0, import_react6.useCallback)(
    (ms) => {
      if (!canShowDurationBar) return;
      setDurationBar(1, null);
      if (dataMotion === "reduced") return;
      requestAnimationFrame(() => setDurationBar(0, ms));
    },
    [canShowDurationBar, dataMotion, setDurationBar]
  );
  const clear = (0, import_react6.useCallback)(() => {
    if (timerId.current != null) clearTimeout(timerId.current);
    timerId.current = null;
  }, []);
  const arm = (0, import_react6.useCallback)(
    (ms) => {
      clear();
      if (ms <= 0) return;
      startedAt.current = Date.now();
      timerId.current = setTimeout(() => onDismiss(item.id), ms);
    },
    [clear, item.id, onDismiss]
  );
  const pause = (0, import_react6.useCallback)(() => {
    if (duration == null) return;
    if (timerId.current == null) return;
    const elapsed = Date.now() - startedAt.current;
    remainingMs.current = Math.max(0, remainingMs.current - elapsed);
    clear();
    if (canShowDurationBar) {
      const ratio = duration > 0 ? remainingMs.current / duration : 0;
      setDurationBar(ratio, null);
    }
  }, [canShowDurationBar, clear, duration, setDurationBar]);
  const resume = (0, import_react6.useCallback)(() => {
    if (duration == null) return;
    if (item.state !== "open") return;
    arm(remainingMs.current);
    if (canShowDurationBar) setDurationBar(0, remainingMs.current);
  }, [arm, canShowDurationBar, duration, item.state, setDurationBar]);
  (0, import_react6.useEffect)(() => {
    clear();
    if (duration == null) return;
    remainingMs.current = duration;
    if (stackIndex === 0 && item.state === "open") {
      arm(duration);
      startDurationBar(duration);
    }
    return () => clear();
  }, [arm, clear, duration, item.state, stackIndex, startDurationBar]);
  (0, import_react6.useEffect)(() => {
    if (item.state !== "open") clear();
  }, [clear, item.state]);
  const role = toastRole(item.type);
  const vars = getVariantVars(item.variant, item.tone);
  const resolvedVariant = resolveVariant(item.variant);
  const iconFg = resolvedVariant === "solid" ? vars.fg : vars.accent;
  const iconBg = resolvedVariant === "solid" ? `color-mix(in srgb, ${vars.fg} 14%, transparent)` : `color-mix(in srgb, ${vars.accent} 12%, transparent)`;
  const hasTitle = (item.title ?? null) !== null && item.title !== void 0;
  const description = item.description ?? item.message;
  const hasDescription = (description ?? null) !== null && description !== void 0;
  const dataAnimation = item.state === "closing" ? "exiting" : "entering";
  const classNames = item.classNames;
  const styleVars = {
    ["--oks-toast-accent"]: vars.accent,
    ["--oks-toast-bg"]: vars.bg,
    ["--oks-toast-fg"]: vars.fg,
    ["--oks-toast-border"]: vars.border,
    ["--oks-toast-icon-fg"]: iconFg,
    ["--oks-toast-icon-bg"]: iconBg,
    ["--oks-toast-stack-index"]: String(stackIndex),
    ...item.style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      role,
      "aria-atomic": "true",
      "data-has-title": hasTitle ? "true" : "false",
      "data-has-description": hasDescription ? "true" : "false",
      "data-animation": dataAnimation,
      "data-placement": item.position,
      "data-drag-value": "0",
      "data-motion": dataMotion,
      "data-state": item.state,
      "data-size": item.size,
      "data-radius": item.radius ?? "md",
      "data-stack-index": String(stackIndex),
      className: mergeClassName4(
        mergeClassName4(
          mergeClassName4("oksToast", stackIndex > 0 ? "oksToastStacked" : ""),
          classNames?.base
        ),
        item.className
      ),
      style: styleVars,
      ...stackIndex === 0 ? {
        onMouseEnter: pause,
        onMouseLeave: resume,
        onFocusCapture: pause,
        onBlurCapture: resume
      } : {},
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "div",
        {
          className: mergeClassName4(
            mergeClassName4("oksToastSurface", classNames?.motionDiv),
            mergeClassName4(classNames?.base, item.className)
          ),
          children: [
            item.type === "loading" && item.loadingComponent ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "div",
              {
                className: mergeClassName4("oksToastLoading", classNames?.loadingComponent),
                "aria-hidden": "true",
                children: item.loadingComponent
              }
            ) : item.showIcon ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "div",
              {
                className: mergeClassName4("oksToastIcon", classNames?.icon),
                "aria-hidden": "true",
                children: item.icon ?? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(StatusIcon, { type: item.type })
              }
            ) : null,
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: mergeClassName4("oksToastBody", classNames?.content), children: [
              hasTitle && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: mergeClassName4("oksToastTitle", classNames?.title), children: item.title }),
              hasDescription && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "div",
                {
                  className: mergeClassName4("oksToastMessage", classNames?.description),
                  children: description
                }
              )
            ] }),
            stackIndex === 0 && (item.action || item.endContent || item.dismissible) && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: mergeClassName4("oksToastControls", classNames?.wrapper), children: [
              item.action && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "button",
                {
                  type: "button",
                  className: "oksToastAction",
                  onClick: () => item.action?.onClick?.(),
                  children: item.action.label
                }
              ),
              item.endContent,
              item.dismissible && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                CloseButton,
                {
                  ariaLabel: "Close",
                  className: mergeClassName4("oksToastClose", classNames?.closeButton),
                  ...item.closeIcon !== void 0 ? { icon: item.closeIcon } : {},
                  ...classNames?.closeIcon !== void 0 ? { iconClassName: classNames.closeIcon } : {},
                  onClick: () => onDismiss(item.id)
                }
              )
            ] }),
            canShowDurationBar && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "div",
              {
                className: mergeClassName4(
                  "oksToastProgressTrack",
                  classNames?.progressTrack
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  "div",
                  {
                    ref: progressRef,
                    className: mergeClassName4(
                      "oksToastProgressIndicator",
                      classNames?.progressIndicator
                    )
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
}
function ToastProvider({
  children,
  position,
  placement,
  maxToasts,
  maxVisibleToasts,
  defaultDuration = 6e3,
  container,
  motion = "auto",
  disableAnimation,
  toastOffset = 0,
  toastProps,
  regionProps,
  className,
  style
}) {
  const reducedMotion = useReducedMotion();
  const resolvedPlacement = placement ?? position ?? "bottom-right";
  const resolvedMaxVisible = maxVisibleToasts ?? maxToasts ?? 3;
  const resolvedQueueLimit = maxToasts !== void 0 ? maxToasts : Math.max(resolvedMaxVisible, 12);
  const dataMotion = disableAnimation === true || motion === "reduced" || motion === "auto" && reducedMotion ? "reduced" : "default";
  const closeDelayMs = dataMotion === "reduced" ? 0 : 260;
  const idCounter = (0, import_react6.useRef)(0);
  const removalTimers = (0, import_react6.useRef)(/* @__PURE__ */ new Map());
  const [items, dispatch] = (0, import_react6.useReducer)(toastReducer, []);
  const itemsRef = (0, import_react6.useRef)([]);
  itemsRef.current = items;
  const scheduleRemoval = (0, import_react6.useCallback)(
    (id) => {
      const existing = removalTimers.current.get(id);
      if (existing != null) clearTimeout(existing);
      if (closeDelayMs <= 0) {
        dispatch({ type: "REMOVE", id });
        return;
      }
      const t = setTimeout(() => {
        removalTimers.current.delete(id);
        dispatch({ type: "REMOVE", id });
      }, closeDelayMs);
      removalTimers.current.set(id, t);
    },
    [closeDelayMs]
  );
  const dismiss = (0, import_react6.useCallback)(
    (id) => {
      const current = itemsRef.current.find((t) => t.id === id);
      if (current && current.state !== "closing") current.onDismiss?.(id);
      dispatch({ type: "MARK_CLOSING", id });
      scheduleRemoval(id);
    },
    [scheduleRemoval]
  );
  const dismissAll = (0, import_react6.useCallback)(() => {
    const current = itemsRef.current;
    for (const t of current) {
      if (t.state !== "closing") t.onDismiss?.(t.id);
    }
    dispatch({ type: "MARK_ALL_CLOSING" });
    for (const t of current) scheduleRemoval(t.id);
  }, [scheduleRemoval]);
  const update = (0, import_react6.useCallback)((id, patch) => {
    dispatch({ type: "PATCH", id, patch });
  }, []);
  const show = (0, import_react6.useCallback)(
    ((messageOrOptions, options) => {
      const incomingRaw = normalizeShowArgs(messageOrOptions, options);
      const incoming = { ...toastProps ?? {}, ...incomingRaw };
      const resolvedColor = incoming.severity ?? incoming.color;
      const type = incoming.type ?? (resolvedColor ? resolveTypeFromColor(resolvedColor) : "default");
      const tone = incoming.tone ?? (resolvedColor ? resolveToneFromColor(resolvedColor) : void 0) ?? defaultToneForType(type);
      const variant = incoming.variant ?? "flat";
      const size = incoming.size ?? "md";
      const pos = incoming.placement ?? incoming.position ?? resolvedPlacement;
      const dismissible = incoming.hideCloseButton !== void 0 ? !incoming.hideCloseButton : incoming.dismissible ?? true;
      const persistent = Boolean(incoming.persistent);
      const timeout = incoming.timeout ?? incoming.duration;
      const duration = persistent ? null : timeout !== void 0 ? timeout : defaultDuration;
      const showDurationBar = Boolean(incoming.shouldShowTimeoutProgress ?? incoming.showDurationBar) && duration != null;
      const showIcon = incoming.hideIcon !== void 0 ? !incoming.hideIcon : incoming.showIcon ?? defaultShowIcon(type);
      const id = incoming.id ?? ++idCounter.current;
      const base = {
        id,
        createdAt: Date.now(),
        state: "open",
        type,
        tone,
        variant,
        radius: incoming.radius ?? "md",
        size,
        position: pos,
        duration,
        showDurationBar,
        dismissible,
        showIcon
      };
      const item = {
        ...base,
        ...incoming.title !== void 0 ? { title: incoming.title } : {},
        ...incoming.message !== void 0 ? { message: incoming.message } : {},
        ...incoming.description !== void 0 ? { description: incoming.description } : {},
        ...incoming.action !== void 0 ? { action: incoming.action } : {},
        ...incoming.icon !== void 0 ? { icon: incoming.icon } : {},
        ...incoming.endContent !== void 0 ? { endContent: incoming.endContent } : {},
        ...incoming.closeIcon !== void 0 ? { closeIcon: incoming.closeIcon } : {},
        ...incoming.loadingComponent !== void 0 ? { loadingComponent: incoming.loadingComponent } : {},
        ...incoming.classNames !== void 0 ? { classNames: incoming.classNames } : {},
        ...incoming.onDismiss !== void 0 ? { onDismiss: incoming.onDismiss } : {},
        ...incoming.className !== void 0 ? { className: incoming.className } : {},
        ...incoming.style !== void 0 ? { style: incoming.style } : {}
      };
      if (incoming.promise) {
        const p = incoming.promise;
        const resolvedTimeout = timeout !== void 0 ? timeout : defaultDuration;
        const resolvedTimeoutProgress = incoming.shouldShowTimeoutProgress ?? incoming.showDurationBar;
        dispatch({
          type: "UPSERT",
          item: {
            ...item,
            type: "loading",
            duration: null,
            showDurationBar: false,
            dismissible
          },
          maxToasts: resolvedQueueLimit
        });
        p.then(
          () => update(id, {
            type: "success",
            timeout: resolvedTimeout,
            ...resolvedTimeoutProgress !== void 0 ? { shouldShowTimeoutProgress: resolvedTimeoutProgress } : {},
            dismissible
          }),
          () => update(id, {
            type: "error",
            timeout: resolvedTimeout,
            ...resolvedTimeoutProgress !== void 0 ? { shouldShowTimeoutProgress: resolvedTimeoutProgress } : {},
            dismissible
          })
        );
        return id;
      }
      dispatch({ type: "UPSERT", item, maxToasts: resolvedQueueLimit });
      return id;
    }),
    [defaultDuration, resolvedPlacement, resolvedQueueLimit, toastProps, update]
  );
  const promise = (0, import_react6.useCallback)(
    (promiseOrFn, options) => {
      const p = typeof promiseOrFn === "function" ? promiseOrFn() : promiseOrFn;
      const id = show({
        ...options.loading ?? {},
        type: options.loading?.type ?? "loading",
        persistent: true,
        dismissible: options.loading?.dismissible ?? false
      });
      p.then(
        (value) => {
          const resolved = options.success?.(value) ?? {};
          update(id, {
            ...resolved,
            type: resolved.type ?? "success",
            persistent: false
          });
        },
        (error) => {
          const resolved = options.error?.(error) ?? {};
          update(id, {
            ...resolved,
            type: resolved.type ?? "error",
            persistent: false
          });
        }
      );
      return id;
    },
    [show, update]
  );
  const api = (0, import_react6.useMemo)(
    () => ({
      show,
      info: (message, options) => show(message, { ...options ?? {}, type: "info" }),
      success: (message, options) => show(message, { ...options ?? {}, type: "success" }),
      warning: (message, options) => show(message, { ...options ?? {}, type: "warning" }),
      error: (message, options) => show(message, { ...options ?? {}, type: "error" }),
      update,
      dismiss,
      dismissAll,
      promise
    }),
    [dismiss, dismissAll, promise, show, update]
  );
  (0, import_react6.useEffect)(() => {
    globalToastApi = api;
    return () => {
      if (globalToastApi === api) globalToastApi = null;
    };
  }, [api]);
  (0, import_react6.useEffect)(() => {
    if (typeof window === "undefined") return;
    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;
      const first = items[0];
      if (!first) return;
      dismiss(first.id);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [dismiss, items]);
  (0, import_react6.useEffect)(() => {
    return () => {
      for (const t of removalTimers.current.values()) clearTimeout(t);
      removalTimers.current.clear();
    };
  }, []);
  const grouped = (0, import_react6.useMemo)(() => {
    const map = {};
    for (const t of items) {
      const pos = t.position;
      const list = map[pos] ?? [];
      list.push(t);
      map[pos] = list;
    }
    return map;
  }, [items]);
  const {
    classNames: regionClassNames,
    style: regionStyle,
    ...regionDomProps
  } = regionProps ?? {};
  const viewportStyle = {
    ["--oks-toast-offset"]: `${toastOffset}px`,
    ...style ?? {},
    ...regionStyle ?? {}
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(ToastContext.Provider, { value: api, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Portal, { container, children: Object.entries(grouped).map(([posKey, list]) => {
      const pos = posKey;
      const visibleCount = Math.max(1, resolvedMaxVisible);
      const visible = list.slice(0, visibleCount);
      const visual = visible;
      const overflowCount = Math.max(0, list.length - visibleCount);
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "div",
        {
          "data-position": pos,
          className: mergeClassName4(
            mergeClassName4("oksToastViewport", regionClassNames?.base),
            className
          ),
          style: viewportStyle,
          "aria-live": "polite",
          ...regionDomProps,
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "div",
            {
              className: "oksToastStack",
              "data-position": pos,
              "data-has-overflow": overflowCount > 0 ? "true" : "false",
              "data-overflow-count": String(overflowCount),
              children: visual.map((t, visualIndex) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                ToastRow,
                {
                  item: t,
                  dataMotion,
                  onDismiss: dismiss,
                  stackIndex: visualIndex
                },
                t.id
              ))
            }
          )
        },
        posKey
      );
    }) })
  ] });
}

// src/components/Tooltip/Tooltip.tsx
var import_react7 = require("react");

// src/utils/clamp.ts
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

// src/utils/composeEventHandlers.ts
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler?.(event);
    ourHandler(event);
  };
}

// src/utils/composeRefs.ts
function composeRefs(...refs) {
  return (node) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === "function") {
        ref(node);
      } else {
        ref.current = node;
      }
    }
  };
}

// src/components/Tooltip/tooltipPositioning.ts
function getViewportSize() {
  if (typeof window === "undefined") {
    return { width: 0, height: 0, scrollX: 0, scrollY: 0 };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    scrollX: window.scrollX ?? window.pageXOffset ?? 0,
    scrollY: window.scrollY ?? window.pageYOffset ?? 0
  };
}
function computeTooltipPosition(options) {
  const {
    triggerRect,
    tooltipRect,
    side,
    align,
    offset,
    collisionPadding,
    crossOffset = 0,
    shouldFlip = true,
    arrowSize = 10,
    arrowPaddingX = 12,
    arrowPaddingY = 8,
    arrowCornerInset = 0,
    strategy
  } = options;
  const viewport = getViewportSize();
  const spaceTop = triggerRect.top - collisionPadding;
  const spaceBottom = viewport.height - collisionPadding - triggerRect.bottom;
  const spaceLeft = triggerRect.left - collisionPadding;
  const spaceRight = viewport.width - collisionPadding - triggerRect.right;
  const requiredSpace = {
    top: tooltipRect.height + offset,
    bottom: tooltipRect.height + offset,
    left: tooltipRect.width + offset,
    right: tooltipRect.width + offset
  };
  const availableSpace = {
    top: spaceTop,
    bottom: spaceBottom,
    left: spaceLeft,
    right: spaceRight
  };
  const fits = {
    top: availableSpace.top >= requiredSpace.top,
    bottom: availableSpace.bottom >= requiredSpace.bottom,
    left: availableSpace.left >= requiredSpace.left,
    right: availableSpace.right >= requiredSpace.right
  };
  const oppositeSide = (s) => {
    if (s === "top") return "bottom";
    if (s === "bottom") return "top";
    if (s === "left") return "right";
    return "left";
  };
  const chooseSide = () => {
    if (!shouldFlip) return side;
    if (fits[side]) return side;
    const opposite = oppositeSide(side);
    if (fits[opposite]) return opposite;
    const candidates = ["top", "bottom", "left", "right"];
    let best = "top";
    let bestScore = availableSpace[best] - requiredSpace[best];
    for (const s of candidates) {
      const score = availableSpace[s] - requiredSpace[s];
      if (score > bestScore) {
        best = s;
        bestScore = score;
      }
    }
    return best;
  };
  const placedSide = chooseSide();
  let top = 0;
  let left = 0;
  const alignX = align === "start" ? triggerRect.left : align === "end" ? triggerRect.right - tooltipRect.width : triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
  const alignY = align === "start" ? triggerRect.top : align === "end" ? triggerRect.bottom - tooltipRect.height : triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
  if (placedSide === "top") {
    top = triggerRect.top - tooltipRect.height - offset;
    left = alignX;
  } else if (placedSide === "bottom") {
    top = triggerRect.bottom + offset;
    left = alignX;
  } else if (placedSide === "left") {
    top = alignY;
    left = triggerRect.left - tooltipRect.width - offset;
  } else {
    top = alignY;
    left = triggerRect.right + offset;
  }
  if (placedSide === "top" || placedSide === "bottom") {
    left += crossOffset;
  } else {
    top += crossOffset;
  }
  const minLeft = collisionPadding;
  const maxLeft = viewport.width - collisionPadding - tooltipRect.width;
  const minTop = collisionPadding;
  const maxTop = viewport.height - collisionPadding - tooltipRect.height;
  const canFitInViewportWidth = tooltipRect.width <= viewport.width - collisionPadding * 2;
  const canFitInViewportHeight = tooltipRect.height <= viewport.height - collisionPadding * 2;
  if (!fits[placedSide]) {
    left = clamp(left, minLeft, maxLeft);
    top = clamp(top, minTop, maxTop);
  } else if (placedSide === "top" || placedSide === "bottom") {
    left = clamp(left, minLeft, maxLeft);
    if (!canFitInViewportHeight) top = clamp(top, minTop, maxTop);
  } else {
    top = clamp(top, minTop, maxTop);
    if (!canFitInViewportWidth) left = clamp(left, minLeft, maxLeft);
  }
  if (strategy === "absolute") {
    left += viewport.scrollX;
    top += viewport.scrollY;
  }
  const halfArrow = arrowSize / 2;
  const triggerCenterX = triggerRect.left + triggerRect.width / 2 + (strategy === "absolute" ? viewport.scrollX : 0);
  const triggerCenterY = triggerRect.top + triggerRect.height / 2 + (strategy === "absolute" ? viewport.scrollY : 0);
  let arrowX;
  let arrowY;
  if (placedSide === "top" || placedSide === "bottom") {
    const raw = triggerCenterX - left;
    const safeInset = Math.max(arrowPaddingX, arrowCornerInset);
    const min = safeInset + halfArrow;
    const max = tooltipRect.width - safeInset - halfArrow;
    arrowX = max >= min ? clamp(raw, min, max) : tooltipRect.width / 2;
  } else {
    const raw = triggerCenterY - top;
    const safeInset = Math.max(arrowPaddingY, arrowCornerInset);
    const min = safeInset + halfArrow;
    const max = tooltipRect.height - safeInset - halfArrow;
    arrowY = max >= min ? clamp(raw, min, max) : tooltipRect.height / 2;
  }
  const result = { top, left, placedSide };
  if (arrowX !== void 0) result.arrowX = arrowX;
  if (arrowY !== void 0) result.arrowY = arrowY;
  return result;
}

// src/components/Tooltip/Tooltip.module.css
styleInject("@layer components {\n  :where(.oksTooltipTrigger) {\n    display: inline-flex;\n    transform-origin: center;\n  }\n  :where(.oksTooltipTrigger[data-trigger-scale=true]) {\n    transition: transform 120ms ease;\n  }\n  :where(.oksTooltipTrigger[data-open=true][data-trigger-scale=true]) {\n    transform: scale(0.97);\n  }\n  :where(.oksTooltipTrigger[data-motion=reduced]) {\n    transition: none;\n    transform: none;\n  }\n  :where(.oksTooltipBase) {\n    --oks-tooltip-bg: var(--oks-color-default-100, rgba(238, 238, 240, 1));\n    --oks-tooltip-fg: var(--oks-color-default-900, #42424a);\n    --oks-tooltip-radius: var(--oks-radius-md, 0.375rem);\n    --oks-tooltip-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);\n    --oks-tooltip-font-size: 12px;\n    --oks-tooltip-padding-y: var(--oks-space-2, 8px);\n    --oks-tooltip-padding-x: var(--oks-space-3, 12px);\n    z-index: 50;\n    max-width: 320px;\n    opacity: 0;\n    pointer-events: none;\n    transform: translateY(-2px);\n    transition: opacity 120ms ease, transform 120ms ease;\n  }\n  :where(.oksTooltipBase[data-open=true]) {\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0);\n  }\n  :where(.oksTooltipBase[data-motion=reduced]) {\n    transition: none;\n    transform: none;\n  }\n  :where(.oksTooltipBase[data-color=primary]) {\n    --oks-tooltip-bg: var(--oks-color-primary-100, #ffd0b0);\n  }\n  :where(.oksTooltipBase[data-color=secondary]) {\n    --oks-tooltip-bg: var(--oks-color-secondary-100, #e7e7e7);\n  }\n  :where(.oksTooltipBase[data-color=info]) {\n    --oks-tooltip-bg: var(--oks-color-info-100, #b0d1f6);\n  }\n  :where(.oksTooltipBase[data-color=success]) {\n    --oks-tooltip-bg: var(--oks-color-success-100, #b7e3b2);\n  }\n  :where(.oksTooltipBase[data-color=warning]) {\n    --oks-tooltip-bg: var(--oks-color-warning-100, #f6d3b1);\n  }\n  :where(.oksTooltipBase[data-color=danger]) {\n    --oks-tooltip-bg: var(--oks-color-danger-100, #f6b1b1);\n  }\n  :where(.oksTooltipBase[data-radius=none]) {\n    --oks-tooltip-radius: 0;\n  }\n  :where(.oksTooltipBase[data-radius=sm]) {\n    --oks-tooltip-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksTooltipBase[data-radius=md]) {\n    --oks-tooltip-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksTooltipBase[data-radius=lg]) {\n    --oks-tooltip-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksTooltipBase[data-radius=full]) {\n    --oks-tooltip-radius: var(--oks-radius-full, 9999px);\n  }\n  :where(.oksTooltipBase[data-shadow=none]) {\n    --oks-tooltip-shadow: none;\n  }\n  :where(.oksTooltipBase[data-shadow=sm]) {\n    --oks-tooltip-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);\n  }\n  :where(.oksTooltipBase[data-shadow=md]) {\n    --oks-tooltip-shadow: 0 14px 40px rgba(0, 0, 0, 0.28);\n  }\n  :where(.oksTooltipBase[data-shadow=lg]) {\n    --oks-tooltip-shadow: 0 18px 56px rgba(0, 0, 0, 0.32);\n  }\n  :where(.oksTooltipContent) {\n    background: var(--oks-tooltip-bg);\n    background-color: var(--oks-tooltip-bg);\n    color: var(--oks-tooltip-fg);\n    border-radius: var(--oks-tooltip-radius);\n    box-shadow: var(--oks-tooltip-shadow);\n    font-size: var(--oks-tooltip-font-size);\n    line-height: 1.2;\n    padding: var(--oks-tooltip-padding-y) var(--oks-tooltip-padding-x);\n  }\n  :where(.oksTooltipBase[data-size=sm]) {\n    --oks-tooltip-font-size: 11px;\n    --oks-tooltip-padding-y: var(--oks-space-1, 4px);\n    --oks-tooltip-padding-x: var(--oks-space-2, 8px);\n  }\n  :where(.oksTooltipBase[data-size=lg]) {\n    --oks-tooltip-font-size: 13px;\n    --oks-tooltip-padding-y: var(--oks-space-3, 12px);\n    --oks-tooltip-padding-x: var(--oks-space-4, 16px);\n  }\n  :where(.oksTooltipBase[data-radius=full]) {\n    --oks-tooltip-padding-x: var(--oks-space-5, 20px);\n  }\n  :where(.oksTooltipBase[data-radius=full][data-size=sm]) {\n    --oks-tooltip-padding-x: var(--oks-space-5, 20px);\n  }\n  :where(.oksTooltipBase[data-radius=full][data-size=lg]) {\n    --oks-tooltip-padding-x: var(--oks-space-5, 20px);\n  }\n  :where(.oksTooltipArrow) {\n    --oks-tooltip-arrow-size: 10px;\n    position: absolute;\n    width: var(--oks-tooltip-arrow-size);\n    height: var(--oks-tooltip-arrow-size);\n    background-color: var(--oks-tooltip-bg);\n  }\n  :where(.oksTooltipBase[data-placement^=top]) :where(.oksTooltipArrow) {\n    left: var(--oks-tooltip-arrow-x, 50%);\n    bottom: 0;\n    transform: translate(-50%, 50%) rotate(45deg);\n  }\n  :where(.oksTooltipBase[data-placement^=bottom]) :where(.oksTooltipArrow) {\n    left: var(--oks-tooltip-arrow-x, 50%);\n    top: 0;\n    transform: translate(-50%, -50%) rotate(45deg);\n  }\n  :where(.oksTooltipBase[data-placement^=left]) :where(.oksTooltipArrow) {\n    top: var(--oks-tooltip-arrow-y, 50%);\n    right: 0;\n    transform: translate(50%, -50%) rotate(45deg);\n  }\n  :where(.oksTooltipBase[data-placement^=right]) :where(.oksTooltipArrow) {\n    top: var(--oks-tooltip-arrow-y, 50%);\n    left: 0;\n    transform: translate(-50%, -50%) rotate(45deg);\n  }\n}\n");

// src/components/Tooltip/Tooltip.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function mergeClassName5(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
var ALLOWED_DEPTHS = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  950
];
function snapDepth(input) {
  const clamped = clamp(input, 50, 950);
  const first = ALLOWED_DEPTHS[0] ?? 100;
  let best = first;
  let bestDiff = Math.abs(best - clamped);
  for (const d of ALLOWED_DEPTHS) {
    const diff = Math.abs(d - clamped);
    if (diff < bestDiff) {
      best = d;
      bestDiff = diff;
    }
  }
  return best;
}
function getColorVar2(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
function TooltipDefaultIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "svg",
    {
      width: "20",
      height: "20",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            d: "M7 12.25C4.1005 12.25 1.75 9.8995 1.75 7C1.75 4.1005 4.1005 1.75 7 1.75C9.8995 1.75 12.25 4.1005 12.25 7C12.25 9.8995 9.8995 12.25 7 12.25Z",
            stroke: "currentColor",
            strokeWidth: "1.2"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            d: "M7 6.125V10",
            stroke: "currentColor",
            strokeWidth: "1.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            d: "M7 4.375H7.005",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function Tooltip(props) {
  const {
    children,
    content,
    size = "md",
    color = "default",
    colorDepth = 100,
    radius = "md",
    shadow = "sm",
    placement = "top",
    delay = 0,
    closeDelay = 500,
    isOpen,
    defaultOpen = false,
    onOpenChange,
    onClose,
    offset = 7,
    containerPadding = 12,
    crossOffset = 0,
    showArrow = false,
    shouldFlip = true,
    triggerScaleOnOpen = false,
    isKeyboardDismissDisabled = false,
    isDismissable = false,
    shouldCloseOnBlur = true,
    portalContainer,
    updatePositionDeps,
    isDisabled = false,
    disableAnimation = false,
    className,
    classNames,
    shouldCloseOnInteractOutside
  } = props;
  const reactId = (0, import_react7.useId)();
  const tooltipId = `oks-tooltip-${reactId.replace(/[:]/g, "")}`;
  const isControlled = isOpen !== void 0;
  const [uncontrolledOpen, setUncontrolledOpen] = (0, import_react7.useState)(defaultOpen);
  const actualOpen = !isDisabled && (isControlled ? isOpen : uncontrolledOpen);
  const [mounted, setMounted] = (0, import_react7.useState)(false);
  const reducedMotion = useReducedMotion();
  const triggerRef = (0, import_react7.useRef)(null);
  const contentRef = (0, import_react7.useRef)(null);
  const openTimerRef = (0, import_react7.useRef)(null);
  const closeTimerRef = (0, import_react7.useRef)(null);
  const [position, setPosition] = (0, import_react7.useState)(null);
  const setOpen = (next) => {
    onOpenChange?.(next);
    if (!isControlled) setUncontrolledOpen(next);
    if (!next) onClose?.();
  };
  const clearOpenTimer = () => {
    if (openTimerRef.current !== null) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
  };
  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleOpen = (e) => {
    if (isDisabled) return;
    const currentTarget = e?.currentTarget;
    if (currentTarget instanceof HTMLElement) {
      triggerRef.current = currentTarget;
    }
    clearCloseTimer();
    clearOpenTimer();
    updatePosition();
    openTimerRef.current = window.setTimeout(() => setOpen(true), delay);
  };
  const scheduleClose = () => {
    clearOpenTimer();
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => setOpen(false), closeDelay);
  };
  const closeNow = () => {
    clearOpenTimer();
    clearCloseTimer();
    setOpen(false);
  };
  const { side, align } = (0, import_react7.useMemo)(() => {
    const [rawSide, rawAlign] = placement.split("-");
    const parsedSide = rawSide === "top" || rawSide === "bottom" || rawSide === "left" || rawSide === "right" ? rawSide : "top";
    const parsedAlign = rawAlign === "start" || rawAlign === "end" ? rawAlign : "center";
    return { side: parsedSide, align: parsedAlign };
  }, [placement]);
  const updatePosition = () => {
    const triggerEl = triggerRef.current;
    const contentEl = contentRef.current;
    if (!triggerEl || !contentEl) return;
    const triggerRect = triggerEl.getBoundingClientRect();
    const tooltipRect = contentEl.getBoundingClientRect();
    const arrowEl = showArrow ? contentEl.querySelector(".oksTooltipArrow") : null;
    const contentWrapperEl = contentEl.querySelector(
      ".oksTooltipContent"
    );
    const parsedArrowSize = arrowEl ? Number.parseFloat(window.getComputedStyle(arrowEl).width) : Number.NaN;
    const arrowSize = Number.isFinite(parsedArrowSize) && parsedArrowSize > 0 ? parsedArrowSize : 10;
    const parsedPaddingX = contentWrapperEl ? Number.parseFloat(window.getComputedStyle(contentWrapperEl).paddingLeft) : Number.NaN;
    const arrowPaddingX = Number.isFinite(parsedPaddingX) && parsedPaddingX > 0 ? parsedPaddingX : 12;
    const parsedPaddingY = contentWrapperEl ? Number.parseFloat(window.getComputedStyle(contentWrapperEl).paddingTop) : Number.NaN;
    const arrowPaddingY = Number.isFinite(parsedPaddingY) && parsedPaddingY > 0 ? parsedPaddingY : 8;
    const arrowCornerInset = radius === "full" ? Math.min(tooltipRect.width, tooltipRect.height) / 2 : 0;
    setPosition(
      computeTooltipPosition({
        triggerRect,
        tooltipRect,
        side,
        align,
        offset,
        collisionPadding: containerPadding,
        crossOffset,
        shouldFlip,
        arrowSize,
        arrowPaddingX,
        arrowPaddingY,
        arrowCornerInset,
        strategy: "fixed"
      })
    );
  };
  (0, import_react7.useEffect)(() => {
    setMounted(true);
    return () => {
      if (typeof window === "undefined") return;
      clearOpenTimer();
      clearCloseTimer();
    };
  }, []);
  (0, import_react7.useEffect)(() => {
    if (!mounted) return;
    if (!actualOpen) return;
    updatePosition();
    if (typeof window === "undefined") return;
    const rafId = window.requestAnimationFrame(() => updatePosition());
    const onScrollOrResize = () => updatePosition();
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(onScrollOrResize);
      if (triggerRef.current) ro.observe(triggerRef.current);
      if (contentRef.current) ro.observe(contentRef.current);
    }
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
      ro?.disconnect();
    };
  }, [
    mounted,
    actualOpen,
    side,
    align,
    offset,
    containerPadding,
    crossOffset,
    shouldFlip,
    updatePositionDeps
  ]);
  (0, import_react7.useEffect)(() => {
    if (!mounted) return;
    if (!actualOpen) return;
    if (typeof document === "undefined") return;
    const onKeyDown = (e) => {
      if (isKeyboardDismissDisabled) return;
      if (e.key === "Escape") closeNow();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mounted, actualOpen, isKeyboardDismissDisabled]);
  (0, import_react7.useEffect)(() => {
    if (!mounted) return;
    if (!actualOpen) return;
    if (!isDismissable) return;
    if (typeof document === "undefined") return;
    const onPointerDown = (e) => {
      const target = e.target;
      if (!(target instanceof Node)) return;
      if (triggerRef.current?.contains(target)) return;
      if (contentRef.current?.contains(target)) return;
      const element = target instanceof HTMLElement ? target : null;
      if (element && shouldCloseOnInteractOutside) {
        const shouldClose = shouldCloseOnInteractOutside(element);
        if (!shouldClose) return;
      }
      closeNow();
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [mounted, actualOpen, isDismissable, shouldCloseOnInteractOutside]);
  const getTriggerProps = (existingProps) => ({
    "aria-describedby": actualOpen ? tooltipId : void 0,
    onPointerEnter: composeEventHandlers(
      existingProps?.onPointerEnter,
      (e) => scheduleOpen(e)
    ),
    onPointerLeave: composeEventHandlers(
      existingProps?.onPointerLeave,
      () => scheduleClose()
    ),
    onFocus: composeEventHandlers(
      existingProps?.onFocus,
      (e) => scheduleOpen(e)
    ),
    onBlur: composeEventHandlers(existingProps?.onBlur, () => {
      if (!shouldCloseOnBlur) return;
      scheduleClose();
    }),
    onKeyDown: composeEventHandlers(existingProps?.onKeyDown, (e) => {
      if (isKeyboardDismissDisabled) return;
      if (e?.key === "Escape") closeNow();
    })
  });
  const isPositionPending = actualOpen && position === null;
  const contentStyle = {
    position: "fixed",
    top: position?.top ?? 0,
    left: position?.left ?? 0,
    visibility: isPositionPending ? "hidden" : void 0,
    ...position?.arrowX !== void 0 ? { ["--oks-tooltip-arrow-x"]: `${position.arrowX}px` } : null,
    ...position?.arrowY !== void 0 ? { ["--oks-tooltip-arrow-y"]: `${position.arrowY}px` } : null
  };
  const resolvedDepth = typeof colorDepth === "number" ? snapDepth(colorDepth) : 100;
  const resolvedFg = resolvedDepth <= 400 ? "#000" : "#fff";
  const tooltipVars = {
    ["--oks-tooltip-bg"]: getColorVar2(color, resolvedDepth),
    ["--oks-tooltip-fg"]: resolvedFg
  };
  const triggerNode = (0, import_react7.isValidElement)(children) ? (() => {
    const child = children;
    const triggerRefProp = child.ref;
    return (0, import_react7.cloneElement)(child, {
      ref: composeRefs(triggerRefProp, (node) => {
        triggerRef.current = node;
      }),
      ...getTriggerProps(child.props)
    });
  })() : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "span",
    {
      ref: (node) => {
        triggerRef.current = node;
      },
      ...getTriggerProps(),
      children
    }
  );
  const motionState = disableAnimation || reducedMotion ? "reduced" : actualOpen ? "open" : "closed";
  const actualPlacement = (0, import_react7.useMemo)(() => {
    const placedSide = position?.placedSide ?? side;
    const suffix = align === "center" ? "" : `-${align}`;
    return `${placedSide}${suffix}`;
  }, [position?.placedSide, side, align]);
  const tooltipNode = mounted && !isDisabled ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "div",
    {
      ref: (node) => {
        contentRef.current = node;
      },
      id: tooltipId,
      role: "tooltip",
      "aria-hidden": !actualOpen,
      "data-open": actualOpen ? "true" : "false",
      "data-placement": actualPlacement,
      "data-disabled": isDisabled ? "true" : "false",
      "data-size": size,
      "data-color": color,
      "data-radius": radius,
      "data-shadow": shadow,
      "data-motion": motionState,
      className: mergeClassName5(
        mergeClassName5("oksTooltipBase", classNames?.base),
        className
      ),
      style: { ...tooltipVars, ...contentStyle },
      children: [
        showArrow ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "span",
          {
            className: mergeClassName5("oksTooltipArrow", classNames?.arrow)
          }
        ) : null,
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            className: mergeClassName5("oksTooltipContent", classNames?.content),
            children: content
          }
        )
      ]
    }
  ) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "span",
      {
        className: "oksTooltipTrigger",
        "data-open": actualOpen ? "true" : "false",
        "data-trigger-scale": triggerScaleOnOpen ? "true" : "false",
        "data-motion": disableAnimation || reducedMotion ? "reduced" : "default",
        children: triggerNode
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Portal, { container: portalContainer, children: tooltipNode })
  ] });
}

// src/components/Avatar/Avatar.tsx
var import_react8 = __toESM(require("react"), 1);

// src/components/Avatar/AvatarIcon.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function AvatarIcon({ size = 18, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "path",
          {
            d: "M10 10.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z",
            stroke: "currentColor",
            strokeWidth: "1.6"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "path",
          {
            d: "M3.6 17.2c1.6-3.1 4-4.4 6.4-4.4s4.8 1.3 6.4 4.4",
            stroke: "currentColor",
            strokeWidth: "1.6",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}

// src/components/Avatar/Avatar.module.css
styleInject("@layer components {\n  :where(.oksAvatar) {\n    --oks-avatar-size: 40px;\n    --oks-avatar-font-size: 14px;\n    --oks-avatar-radius: 9999px;\n    --oks-avatar-border: var(--oks-color-default-300, #d1d5db);\n    --oks-avatar-border-gap: var(--oks-palette-neutral-0, #fff);\n    --oks-avatar-border-gap-width: 2px;\n    --oks-avatar-border-width: 2px;\n    --oks-avatar-bg: var(--oks-color-default-500, var(--oks-color-primary-500, #3b82f6));\n    --oks-avatar-fg: #fff;\n    width: var(--oks-avatar-size);\n    height: var(--oks-avatar-size);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    border-radius: var(--oks-avatar-radius);\n    box-sizing: border-box;\n    font-size: var(--oks-avatar-font-size);\n    line-height: 1;\n    font-weight: 600;\n    user-select: none;\n    flex-shrink: 0;\n    background-color: var(--oks-avatar-bg);\n    color: var(--oks-avatar-fg);\n  }\n  :where(.oksAvatar[data-radius=none]) {\n    --oks-avatar-radius: 0;\n  }\n  :where(.oksAvatar[data-radius=sm]) {\n    --oks-avatar-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksAvatar[data-radius=md]) {\n    --oks-avatar-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksAvatar[data-radius=lg]) {\n    --oks-avatar-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksAvatar[data-radius=full]) {\n    --oks-avatar-radius: 9999px;\n  }\n  :where(.oksAvatar[data-size=sm]) {\n    --oks-avatar-size: 32px;\n    --oks-avatar-font-size: 12px;\n  }\n  :where(.oksAvatar[data-size=md]) {\n    --oks-avatar-size: 40px;\n    --oks-avatar-font-size: 14px;\n  }\n  :where(.oksAvatar[data-size=lg]) {\n    --oks-avatar-size: 48px;\n    --oks-avatar-font-size: 16px;\n  }\n  :where(.oksAvatar[data-disabled=true]) {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n  :where(.oksAvatar[data-bordered=true]) {\n    box-shadow: 0 0 0 var(--oks-avatar-border-gap-width) var(--oks-avatar-border-gap), 0 0 0 calc(var(--oks-avatar-border-gap-width) + var(--oks-avatar-border-width)) var(--oks-avatar-border);\n  }\n  :where(.oksAvatar[data-focusable=true]:focus-visible) {\n    box-shadow:\n      0 0 0 3px color-mix(in srgb, var(--oks-avatar-bg, var(--oks-color-primary-500, #3b82f6)) 28%, transparent),\n      0 0 0 calc(3px + var(--oks-avatar-border-gap-width)) var(--oks-avatar-border-gap),\n      0 0 0 calc(3px + var(--oks-avatar-border-gap-width) + var(--oks-avatar-border-width)) var(--oks-avatar-border);\n  }\n  :where(.oksAvatarImage) {\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: cover;\n  }\n  :where(.oksAvatarFallback) {\n    width: 100%;\n    height: 100%;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n  }\n  :where(.oksAvatarInitials) {\n    width: 100%;\n    height: 100%;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n  :where(.oksAvatarFallbackIcon) {\n    width: 100%;\n    height: 100%;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n  }\n  :where(.oksAvatarFallbackIcon > svg) {\n    width: 60%;\n    height: 60%;\n  }\n  :where(.oksAvatarTooltipWrapper) {\n    display: inline-flex;\n  }\n}\n");

// src/components/Avatar/AvatarGroup.module.css
styleInject("@layer components {\n  :where(.oksAvatarGroup) {\n    --oks-avatar-group-item-radius: 9999px;\n    --oks-avatar-group-border-color: var(--oks-palette-neutral-0, #fff);\n    display: inline-flex;\n    align-items: center;\n    gap: 4px;\n  }\n  :where(.oksAvatarGroup[data-radius=none]) {\n    --oks-avatar-group-item-radius: 0;\n  }\n  :where(.oksAvatarGroup[data-radius=sm]) {\n    --oks-avatar-group-item-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksAvatarGroup[data-radius=md]) {\n    --oks-avatar-group-item-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksAvatarGroup[data-radius=lg]) {\n    --oks-avatar-group-item-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksAvatarGroup[data-radius=full]) {\n    --oks-avatar-group-item-radius: 9999px;\n  }\n  :where(.oksAvatarGroup[data-disabled=true]) {\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  :where(.oksAvatarGroupStack) {\n    display: inline-flex;\n    align-items: center;\n    --oks-avatar-group-overlap: 14px;\n  }\n  :where(.oksAvatarGroupStack[data-grid=true]) {\n    display: inline-flex;\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  :where(.oksAvatarGroupItem),\n  :where(.oksAvatarGroupItem) {\n    border-radius: var(--oks-avatar-group-item-radius);\n    box-sizing: border-box;\n  }\n  :where(.oksAvatarGroup[data-bordered=true] .oksAvatarGroupItem) {\n    box-shadow: 0 0 0 2px var(--oks-avatar-group-border-color);\n  }\n  :where(.oksAvatarGroupItem:not(:first-child)) {\n    margin-left: calc(var(--oks-avatar-group-overlap, 14px) * -1);\n  }\n  :where(.oksAvatarGroupStack[data-grid=true] .oksAvatarGroupItem:not(:first-child)) {\n    margin-left: 0;\n  }\n  :where(.oksAvatarGroupOverflowText) {\n    font-size: 0.875rem;\n    font-weight: 500;\n    color: var(--oks-avatar-group-count-color, var(--oks-color-primary-600, #4f46e5));\n  }\n}\n");

// src/components/Avatar/Avatar.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function mergeClassName6(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
var ALLOWED_DEPTHS2 = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  950
];
function snapDepth2(input) {
  const clamped = clamp(input, 50, 950);
  const first = ALLOWED_DEPTHS2[0] ?? 500;
  let best = first;
  let bestDiff = Math.abs(best - clamped);
  for (const d of ALLOWED_DEPTHS2) {
    const diff = Math.abs(d - clamped);
    if (diff < bestDiff) {
      best = d;
      bestDiff = diff;
    }
  }
  return best;
}
function getColorVar3(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
function getBorderVar(color, depth) {
  return getColorVar3(color, depth);
}
function getInitials(name) {
  const value = typeof name === "string" ? name.trim() : "";
  if (!value) return "";
  const parts = value.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  const a = parts[0]?.[0] ?? "";
  const b = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (a + b).toUpperCase();
}
function formatOverflowCount(num) {
  const n = Math.floor(Math.abs(num));
  if (n < 1e3) return `+${n}`;
  if (n < 1e6) return `+${Math.floor(n / 1e3)}K`;
  if (n < 1e9) return `+${Math.floor(n / 1e6)}M`;
  return `+${Math.floor(n / 1e9)}B`;
}
var Avatar = (0, import_react8.forwardRef)((props, ref) => {
  const {
    name,
    src,
    size = "md",
    color = "default",
    radius = "full",
    colorDepth = 500,
    isBordered = false,
    isDisabled = false,
    isFocusable = false,
    showFallback = false,
    icon,
    fallback,
    tooltip = false,
    ImgComponent = "img",
    imgProps,
    classNames,
    className,
    style,
    ...rest
  } = props;
  const resolvedName = typeof name === "string" ? name : "";
  const resolvedDisabled = isDisabled;
  const resolvedColor = color;
  const resolvedDepth = typeof colorDepth === "number" ? snapDepth2(colorDepth) : 500;
  const solidFg = resolvedDepth <= 400 ? "#000" : "#fff";
  const [imgFailed, setImgFailed] = (0, import_react8.useState)(false);
  (0, import_react8.useEffect)(() => setImgFailed(false), [src]);
  const shouldShowFallback = (() => {
    if (!src) return true;
    if (!imgFailed) return false;
    return showFallback === true;
  })();
  const avatarVars = {
    ["--oks-avatar-bg"]: getColorVar3(resolvedColor, resolvedDepth),
    ["--oks-avatar-bg-50"]: getColorVar3(resolvedColor, 50),
    ["--oks-avatar-fg"]: solidFg,
    ["--oks-avatar-border"]: getBorderVar(resolvedColor, resolvedDepth)
  };
  const rootStyle = {
    ...avatarVars,
    ...style ?? {}
  };
  const userAriaLabel = rest["aria-label"];
  const resolvedAriaLabel = typeof userAriaLabel === "string" ? userAriaLabel : resolvedName || void 0;
  const resolvedTabIndex = isFocusable === true && rest.tabIndex === void 0 ? 0 : rest.tabIndex;
  const baseClassName = mergeClassName6(
    mergeClassName6("oksAvatar", classNames?.base),
    className
  );
  const fallbackContent = fallback !== void 0 && fallback !== null ? fallback : resolvedName.trim().length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "span",
    {
      className: mergeClassName6("oksAvatarInitials", classNames?.name),
      "aria-hidden": "true",
      children: getInitials(resolvedName)
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "span",
    {
      className: mergeClassName6("oksAvatarFallbackIcon", classNames?.icon),
      "aria-hidden": "true",
      children: icon ?? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AvatarIcon, {})
    }
  );
  const avatarElement = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "div",
    {
      ...rest,
      ref,
      className: baseClassName,
      "data-size": size,
      "data-color": resolvedColor,
      "data-radius": radius,
      "data-bordered": isBordered ? "true" : void 0,
      "data-focusable": isFocusable ? "true" : void 0,
      "data-disabled": resolvedDisabled ? "true" : void 0,
      role: shouldShowFallback ? "img" : rest.role,
      "aria-label": shouldShowFallback ? resolvedAriaLabel : rest["aria-label"],
      tabIndex: resolvedDisabled ? rest.tabIndex : resolvedTabIndex,
      style: rootStyle,
      children: shouldShowFallback ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "span",
        {
          className: mergeClassName6("oksAvatarFallback", classNames?.fallback),
          children: fallbackContent
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        ImgComponent,
        {
          ...imgProps,
          className: mergeClassName6(
            mergeClassName6("oksAvatarImage", classNames?.img),
            imgProps?.className
          ),
          src,
          alt: imgProps?.alt ?? resolvedName,
          draggable: false,
          onError: (event) => {
            setImgFailed(true);
            imgProps?.onError?.(event);
          }
        }
      )
    }
  );
  const tooltipContent = tooltip === true ? resolvedName : typeof tooltip === "object" && tooltip !== null ? "content" in tooltip ? tooltip.content ?? resolvedName : resolvedName : null;
  const tooltipProps = typeof tooltip === "object" && tooltip !== null ? "props" in tooltip ? tooltip.props : tooltip : void 0;
  const hasTooltip = (tooltip === true || typeof tooltip === "object" && tooltip !== null) && typeof tooltipContent === "string" ? tooltipContent.trim().length > 0 : tooltipContent !== null && tooltipContent !== void 0;
  if (!hasTooltip) return avatarElement;
  const tooltipNode = resolvedDisabled ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "oksAvatarTooltipWrapper", children: avatarElement }) : avatarElement;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Tooltip, { ...tooltipProps, content: tooltipContent, children: tooltipNode });
});
Avatar.displayName = "Avatar";
var AvatarGroup = (0, import_react8.forwardRef)(
  (props, ref) => {
    const {
      children,
      max = 5,
      total,
      size = "md",
      color = "default",
      radius = "full",
      isGrid = false,
      isDisabled,
      isBordered = false,
      renderCount,
      classNames,
      className,
      style,
      ...rest
    } = props;
    const childrenArray = import_react8.default.Children.toArray(children);
    const resolvedMax = Math.max(0, Math.floor(max));
    const overflowCount = typeof total === "number" ? total - resolvedMax : childrenArray.length - resolvedMax;
    const resolvedOverflow = overflowCount > 0 ? overflowCount : 0;
    const rootStyle = {
      ...style ?? {}
    };
    const rootClassName = mergeClassName6(
      mergeClassName6("oksAvatarGroup", classNames?.base),
      className
    );
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "div",
      {
        ...rest,
        ref,
        className: rootClassName,
        "data-grid": isGrid ? "true" : void 0,
        "data-color": color,
        "data-radius": radius,
        "data-bordered": isBordered ? "true" : void 0,
        "data-disabled": isDisabled ? "true" : void 0,
        style: rootStyle,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "div",
            {
              className: "oksAvatarGroupStack",
              "data-grid": isGrid ? "true" : void 0,
              children: childrenArray.slice(0, resolvedMax).map((child, index) => {
                if (import_react8.default.isValidElement(child)) {
                  const childAny = child;
                  const childProps = {
                    size
                  };
                  if (childAny.props?.radius === void 0)
                    childProps.radius = radius;
                  if (childAny.props?.isBordered === void 0)
                    childProps.isBordered = isBordered;
                  if (childAny.props?.isDisabled === void 0) {
                    childProps.isDisabled = isDisabled;
                  }
                  if (childAny.props?.color === void 0) childProps.color = color;
                  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "oksAvatarGroupItem", children: import_react8.default.cloneElement(child, childProps) }, index);
                }
                return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "oksAvatarGroupItem", children: child }, index);
              })
            }
          ),
          resolvedOverflow > 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "span",
            {
              className: mergeClassName6(
                "oksAvatarGroupOverflowText",
                classNames?.count
              ),
              style: {
                ["--oks-avatar-group-count-color"]: getColorVar3(
                  color,
                  600
                )
              },
              children: renderCount ? renderCount(resolvedOverflow) : formatOverflowCount(resolvedOverflow)
            }
          ) : null
        ]
      }
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

// src/components/Badge/Badge.tsx
var import_react9 = require("react");

// src/components/Badge/Badge.module.css
styleInject("@layer components {\n  :where(.oksBadge) {\n    --oks-badge-min-size: 20px;\n    --oks-badge-padding-x: 7px;\n    --oks-badge-font-size: 12px;\n    --oks-badge-font-weight: 600;\n    --oks-badge-border-radius: var(--oks-radius-md, 0.375rem);\n    --oks-badge-outline-width: 2px;\n    --oks-badge-offset: 0px;\n    --oks-badge-bg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-badge-fg: var(--oks-badge-solid-fg, #fff);\n    --oks-badge-shadow: none;\n    --oks-badge-outline: var(--oks-color-surface, #fff);\n    --oks-badge-border-width: 0px;\n    --oks-badge-border-color: transparent;\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    vertical-align: middle;\n  }\n  :where(.oksBadgeBadge) {\n    min-width: var(--oks-badge-min-size);\n    height: var(--oks-badge-min-size);\n    padding: 0 var(--oks-badge-padding-x);\n    border-radius: var(--oks-badge-border-radius);\n    border: var(--oks-badge-border-width) solid var(--oks-badge-border-color);\n    background-color: var(--oks-badge-bg);\n    color: var(--oks-badge-fg);\n    box-shadow: var(--oks-badge-shadow);\n    font: inherit;\n    font-size: var(--oks-badge-font-size);\n    font-weight: var(--oks-badge-font-weight);\n    line-height: 1;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    user-select: none;\n    white-space: nowrap;\n    box-sizing: border-box;\n    position: absolute;\n    z-index: 1;\n  }\n  :where(.oksBadge[data-outline=true]) :where(.oksBadgeBadge) {\n    box-shadow: 0 0 0 var(--oks-badge-outline-width) var(--oks-badge-outline), var(--oks-badge-shadow);\n  }\n  :where(.oksBadge[data-shape=circle]) :where(.oksBadgeBadge) {\n    --oks-badge-border-radius: 9999px;\n  }\n  :where(.oksBadge[data-one-char=true]) :where(.oksBadgeBadge) {\n    --oks-badge-padding-x: 0px;\n    width: var(--oks-badge-min-size);\n  }\n  :where(.oksBadge[data-dot=true]) :where(.oksBadgeBadge) {\n    --oks-badge-min-size: 10px;\n    --oks-badge-padding-x: 0px;\n    width: var(--oks-badge-min-size);\n  }\n  :where(.oksBadge[data-size=sm]) {\n    --oks-badge-min-size: 18px;\n    --oks-badge-padding-x: 6px;\n    --oks-badge-font-size: 11px;\n  }\n  :where(.oksBadge[data-size=md]) {\n    --oks-badge-min-size: 20px;\n    --oks-badge-padding-x: 7px;\n    --oks-badge-font-size: 12px;\n  }\n  :where(.oksBadge[data-size=lg]) {\n    --oks-badge-min-size: 24px;\n    --oks-badge-padding-x: 8px;\n    --oks-badge-font-size: 13px;\n  }\n  :where(.oksBadge[data-placement=top-right]) :where(.oksBadgeBadge) {\n    top: var(--oks-badge-offset);\n    right: var(--oks-badge-offset);\n    transform: translate(50%, -50%);\n  }\n  :where(.oksBadge[data-placement=top-left]) :where(.oksBadgeBadge) {\n    top: var(--oks-badge-offset);\n    left: var(--oks-badge-offset);\n    transform: translate(-50%, -50%);\n  }\n  :where(.oksBadge[data-placement=bottom-right]) :where(.oksBadgeBadge) {\n    bottom: var(--oks-badge-offset);\n    right: var(--oks-badge-offset);\n    transform: translate(50%, 50%);\n  }\n  :where(.oksBadge[data-placement=bottom-left]) :where(.oksBadgeBadge) {\n    bottom: var(--oks-badge-offset);\n    left: var(--oks-badge-offset);\n    transform: translate(-50%, 50%);\n  }\n  :where(.oksBadge[data-variant=solid]) {\n    --oks-badge-bg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-badge-fg: var(--oks-badge-solid-fg, #fff);\n  }\n  :where(.oksBadge[data-variant=bordered]) {\n    --oks-badge-bg: var(--oks-badge-outline, var(--oks-color-surface, #fff));\n    --oks-badge-fg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-badge-border-width: 1px;\n    --oks-badge-border-color: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksBadge[data-variant=light]) {\n    --oks-badge-bg: var(--oks-badge-tone-50, var(--oks-color-primary-50, #eff6ff));\n    --oks-badge-fg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksBadge[data-variant=flat]) {\n    --oks-badge-bg: var(--oks-badge-tone-100, var(--oks-color-primary-100, #dbeafe));\n    --oks-badge-fg: var(--oks-badge-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  :where(.oksBadge[data-variant=faded]) {\n    --oks-badge-bg: var(--oks-badge-tone-50, var(--oks-color-primary-50, #eff6ff));\n    --oks-badge-fg: var(--oks-badge-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  :where(.oksBadge[data-variant=shadow]) {\n    --oks-badge-bg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-badge-fg: var(--oks-badge-solid-fg, #fff);\n    --oks-badge-shadow: 0 10px 18px color-mix(in srgb, #000 18%, transparent);\n  }\n  :where(.oksBadge[data-variant=ghost]) {\n    --oks-badge-bg: var(--oks-badge-outline, var(--oks-color-surface, #fff));\n    --oks-badge-fg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-badge-border-width: 1px;\n    --oks-badge-border-color: var(--oks-badge-tone-100, var(--oks-color-primary-100, #dbeafe));\n  }\n  :where(.oksBadge[data-disable-animation=false]) :where(.oksBadgeBadge) {\n    transition:\n      transform 140ms ease,\n      opacity 140ms ease,\n      background-color 140ms ease,\n      color 140ms ease,\n      box-shadow 140ms ease;\n  }\n  :where(.oksBadge[data-disable-animation=true]) :where(.oksBadgeBadge) {\n    transition: none;\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :where(.oksBadgeBadge) {\n      transition: none;\n    }\n  }\n}\n");

// src/components/Badge/Badge.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function mergeClassName7(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function getColorVar4(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
var Badge = (0, import_react9.forwardRef)((props, ref) => {
  const {
    children,
    content,
    max,
    variant = "solid",
    color = "default",
    size = "md",
    shape = "rectangle",
    placement = "top-right",
    showOutline = true,
    disableOutline = false,
    disableAnimation = false,
    isInvisible = false,
    isOneChar = false,
    isDot = false,
    classNames,
    className,
    style,
    ...rest
  } = props;
  const resolvedOutline = disableOutline ? false : showOutline;
  const hasContent = content !== void 0 && content !== null;
  const shouldRenderBadge = !isInvisible && (isDot || hasContent);
  const resolvedMax = typeof max === "number" && Number.isFinite(max) && max > 0 ? Math.floor(max) : void 0;
  const displayContent = !isDot && typeof content === "number" && resolvedMax !== void 0 && content > resolvedMax ? `${resolvedMax}+` : content;
  const toneVars = {
    "--oks-badge-tone": getColorVar4(color, 500),
    "--oks-badge-tone-50": getColorVar4(color, 50),
    "--oks-badge-tone-100": getColorVar4(color, 100),
    "--oks-badge-tone-700": getColorVar4(color, 700),
    "--oks-badge-solid-fg": "#fff"
  };
  const badgeEl = shouldRenderBadge ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: mergeClassName7("oksBadgeBadge", classNames?.badge), children: isDot ? null : displayContent }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "span",
    {
      ...rest,
      ref,
      "data-variant": variant,
      "data-color": color,
      "data-size": size,
      "data-shape": shape,
      "data-placement": placement,
      "data-outline": resolvedOutline ? "true" : "false",
      "data-dot": isDot ? "true" : "false",
      "data-one-char": isOneChar ? "true" : "false",
      "data-invisible": isInvisible ? "true" : "false",
      "data-disable-animation": disableAnimation ? "true" : "false",
      className: mergeClassName7(
        mergeClassName7("oksBadge", classNames?.base),
        className
      ),
      style: { ...toneVars, ...style },
      children: [
        children,
        badgeEl
      ]
    }
  );
});
Badge.displayName = "Badge";

// src/components/Tabs/Tabs.tsx
var import_react10 = require("react");

// src/components/Tabs/Tab.tsx
function Tab(_props) {
  return null;
}
Tab.displayName = "Tab";

// src/components/Tabs/Tabs.module.css
styleInject('@layer components {\n  .oksTabsRoot {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-width: 0;\n  }\n  .oksTabsRoot[data-radius=none] {\n    --oks-tabs-radius: 0px;\n  }\n  .oksTabsRoot[data-radius=sm] {\n    --oks-tabs-radius: 0.25rem;\n  }\n  .oksTabsRoot[data-radius=md] {\n    --oks-tabs-radius: 0.5rem;\n  }\n  .oksTabsRoot[data-radius=lg] {\n    --oks-tabs-radius: 0.75rem;\n  }\n  .oksTabsRoot[data-radius=full] {\n    --oks-tabs-radius: 9999px;\n  }\n  .oksTabsRoot[data-placement=bottom][data-vertical=false] {\n    flex-direction: column-reverse;\n  }\n  .oksTabsRoot[data-vertical=true] {\n    flex-direction: row;\n  }\n  .oksTabsRoot[data-vertical=true][data-placement=end] {\n    flex-direction: row-reverse;\n  }\n  .oksTablist {\n    display: flex;\n    gap: var(--oks-space-1, 0.25rem);\n    border-bottom: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    overflow: auto;\n    position: relative;\n  }\n  .oksTabsRoot[data-vertical=true] > .oksTablist {\n    flex-direction: column;\n    border-bottom: 0;\n    border-inline-end: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n  }\n  .oksTabsRoot[data-vertical=true][data-placement=end] > .oksTablist {\n    border-inline-end: 0;\n    border-inline-start: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n  }\n  .oksTabsRoot[data-vertical=true] > .oksTabsPanels {\n    flex: 1 1 auto;\n    padding-inline-start: var(--oks-space-3, 0.75rem);\n  }\n  .oksTabsRoot[data-vertical=true][data-placement=end] > .oksTabsPanels {\n    padding-inline-start: 0;\n    padding-inline-end: var(--oks-space-3, 0.75rem);\n  }\n  .oksTabsRoot[data-full-width=true] > .oksTablist {\n    width: 100%;\n  }\n  .oksTabsTabWrapper {\n    display: inline-flex;\n  }\n  .oksTabsRoot[data-full-width=true] > .oksTablist .oksTabsTabWrapper {\n    flex: 1 1 0;\n  }\n  .oksTabsTab {\n    appearance: none;\n    border: 0;\n    background-color: transparent;\n    color: inherit;\n    padding: var(--oks-space-2, 0.5rem) var(--oks-space-3, 0.75rem);\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 0;\n  }\n  .oksTabsRoot[data-full-width=true] > .oksTablist .oksTabsTab {\n    width: 100%;\n  }\n  .oksTabsRoot[data-size=sm] > .oksTablist .oksTabsTab {\n    padding: var(--oks-space-1_5, 0.375rem) var(--oks-space-2, 0.5rem);\n    font-size: 0.875rem;\n  }\n  .oksTabsRoot[data-size=md] > .oksTablist .oksTabsTab {\n    padding: var(--oks-space-2, 0.5rem) var(--oks-space-3, 0.75rem);\n    font-size: 0.95rem;\n  }\n  .oksTabsRoot[data-size=lg] > .oksTablist .oksTabsTab {\n    padding: var(--oks-space-2_5, 0.625rem) var(--oks-space-4, 1rem);\n    font-size: 1rem;\n  }\n  .oksTabsTab[aria-disabled=true],\n  .oksTabsTab:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n  .oksTabsTabContent {\n    display: inline-flex;\n    min-width: 0;\n  }\n  .oksTabsCursor {\n    position: absolute;\n    left: 0;\n    right: auto;\n    bottom: 0;\n    height: 2px;\n    width: var(--oks-tabs-cursor-w, 0px);\n    transform: translateX(var(--oks-tabs-cursor-x, 0px));\n    background-color: var(--oks-tabs-tone, var(--oks-color-primary-500, #3b82f6));\n    border-radius: 9999px;\n  }\n  .oksTabsRoot[data-vertical=true] > .oksTablist .oksTabsCursor {\n    top: 0;\n    bottom: auto;\n    left: 0;\n    width: 2px;\n    height: var(--oks-tabs-cursor-h, 0px);\n    transform: translateY(var(--oks-tabs-cursor-y, 0px));\n  }\n  @media (prefers-reduced-motion: no-preference) {\n    .oksTabsRoot[data-motion=default]:not([data-disable-cursor-animation=true]) > .oksTablist .oksTabsCursor {\n      transition:\n        transform 120ms ease,\n        width 120ms ease,\n        height 120ms ease;\n    }\n  }\n  .oksTabsRoot[data-variant=solid] > .oksTablist {\n    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    background-color: var(--oks-color-neutral-50, #f9fafb);\n    padding: var(--oks-space-1_5, 0.375rem);\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n    gap: var(--oks-space-1, 0.25rem);\n    border-bottom: 0;\n  }\n  .oksTabsRoot[data-variant=solid][data-size=sm] > .oksTablist {\n    padding: var(--oks-space-1, 0.25rem);\n    gap: var(--oks-space-0_5, 0.125rem);\n  }\n  .oksTabsRoot[data-variant=solid] > .oksTablist .oksTabsTab[data-selected=true] {\n    background-color: var(--oks-tabs-tone, var(--oks-color-primary-500, #3b82f6));\n    color: #fff;\n  }\n  .oksTabsRoot[data-variant=solid] > .oksTablist .oksTabsTab[data-selected=false] {\n    background-color: var(--oks-tabs-tone-50, var(--oks-color-primary-50, #eff6ff));\n    color: var(--oks-tabs-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  .oksTabsRoot[data-variant=bordered] > .oksTablist {\n    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    border-bottom: 0;\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n    padding: var(--oks-space-1_5, 0.375rem);\n    gap: var(--oks-space-1, 0.25rem);\n  }\n  .oksTabsRoot[data-variant=bordered][data-size=sm] > .oksTablist {\n    padding: var(--oks-space-1, 0.25rem);\n    gap: var(--oks-space-0_5, 0.125rem);\n  }\n  .oksTabsRoot[data-variant=bordered] > .oksTablist .oksTabsTab[data-selected=false] {\n    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    background-color: var(--oks-color-neutral-50, #f9fafb);\n  }\n  .oksTabsRoot[data-variant=bordered] > .oksTablist .oksTabsTab[data-selected=true] {\n    border: 1px solid var(--oks-tabs-tone, var(--oks-color-primary-500, #3b82f6));\n    background-color: var(--oks-tabs-tone-50, var(--oks-color-primary-50, #eff6ff));\n    color: var(--oks-tabs-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  .oksTabsRoot[data-variant=light] > .oksTablist {\n    border-bottom: 0;\n  }\n  .oksTabsRoot[data-variant=light] > .oksTablist .oksTabsTab[data-selected=true] {\n    background-color: var(--oks-tabs-tone-50, var(--oks-color-primary-50, #eff6ff));\n    color: var(--oks-tabs-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  .oksTabsRoot[data-variant=light] > .oksTablist .oksTabsTab[data-selected=false] {\n    background-color: transparent;\n  }\n  .oksTabsRoot[data-variant=underlined] > .oksTablist {\n    border-bottom: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n  }\n  .oksTabsRoot[data-variant=underlined] > .oksTablist .oksTabsTab {\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n  }\n  .oksTablist[data-appearance=segmented] {\n    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    background-color: var(--oks-color-neutral-50, #f9fafb);\n    padding: var(--oks-space-1_5, 0.375rem);\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n    gap: var(--oks-space-1, 0.25rem);\n    border-bottom: 0;\n  }\n  .oksTablist[data-appearance=segmented] > * {\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n  }\n  .oksTabsRoot[data-density=compact] > .oksTablist[data-appearance=segmented] {\n    padding: var(--oks-space-1, 0.25rem);\n    gap: var(--oks-space-0_5, 0.125rem);\n  }\n  .oksTabsRoot[data-orientation=vertical] .oksTablist[data-appearance=segmented] {\n    flex-direction: column;\n  }\n  .oksTablist[data-appearance=pill] {\n    border-bottom: 0;\n  }\n  .oksTablist[data-appearance=pill] > * {\n    border-radius: var(--oks-tabs-radius, 9999px);\n  }\n  .oksTablist[data-appearance=pill] .oksTabTrigger {\n    padding: var(--oks-space-2, 0.5rem) var(--oks-space-4, 1rem);\n  }\n  .oksTablist[data-appearance=outline] {\n    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    border-bottom: 0;\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n    padding: var(--oks-space-1_5, 0.375rem);\n    gap: var(--oks-space-1, 0.25rem);\n  }\n  .oksTabsRoot[data-density=compact] > .oksTablist[data-appearance=outline] {\n    padding: var(--oks-space-1, 0.25rem);\n    gap: var(--oks-space-0_5, 0.125rem);\n  }\n  .oksTablist[data-appearance=dot] {\n    border-bottom: 0;\n  }\n  .oksTablist[data-appearance=dot] > .oksButton[data-active=true]::before {\n    content: "";\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    border-radius: 9999px;\n    background-color: var(--oks-color-primary-500, #3b82f6);\n    margin-inline-end: 6px;\n    transform: translateY(-1px);\n  }\n  .oksTabsIndicator {\n    position: absolute;\n    left: 0;\n    right: auto;\n    bottom: 0;\n    height: var(--oks-tabs-indicator-h, 2px);\n    width: var(--oks-tabs-indicator-w, 0px);\n    transform: translateX(var(--oks-tabs-indicator-x, 0px)) translateY(var(--oks-tabs-indicator-offset-y, 0px));\n    background-color: var( --oks-tabs-indicator-color, var(--oks-color-primary-500, #3b82f6) );\n    border-radius: var(--oks-tabs-indicator-radius, 0px);\n  }\n  @media (prefers-reduced-motion: no-preference) {\n    .oksTabsIndicator {\n      transition: transform 120ms ease, width 120ms ease;\n    }\n  }\n  .oksTabsRoot[data-orientation=vertical] .oksTabsIndicator {\n    top: 0;\n    bottom: auto;\n    left: 0;\n    width: var(--oks-tabs-indicator-w, 2px);\n    height: var(--oks-tabs-indicator-h, 0px);\n    transform: translateY(var(--oks-tabs-indicator-y, 0px)) translateX(var(--oks-tabs-indicator-offset-x, 0px));\n  }\n  .oksTablist[data-underline-position=top] .oksTabsIndicator {\n    top: 0;\n    bottom: auto;\n  }\n  .oksTablist[data-appearance=pill] .oksTabTrigger[data-active=true][data-elevated=true] {\n    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12), 0 0 0 4px rgba(147, 197, 253, 0.45);\n  }\n  .oksTablist[data-appearance=outline][data-outline-active=stroke] .oksTabTrigger[data-active=true] {\n    border: 2px solid var(--oks-color-primary-500, #3b82f6);\n    background-color: transparent;\n    color: var(--oks-color-primary-700, #1d4ed8);\n  }\n  .oksTabsPanels {\n    display: block;\n    width: 100%;\n    min-width: 0;\n  }\n  .oksTabsPanel {\n    padding: var(--oks-space-3, 0.75rem) 0 0 0;\n    width: 100%;\n    min-width: 0;\n  }\n  .oksTabTrigger {\n    appearance: none;\n    border: 0;\n    background-color: transparent;\n    color: inherit;\n    padding: var(--oks-space-2, 0.5rem) var(--oks-space-3, 0.75rem);\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n    cursor: pointer;\n  }\n  .oksTabTrigger[data-size=sm] {\n    padding: var(--oks-space-1_5, 0.375rem) var(--oks-space-2, 0.5rem);\n    font-size: 0.875rem;\n  }\n  .oksTabTrigger[data-size=md] {\n    padding: var(--oks-space-2, 0.5rem) var(--oks-space-3, 0.75rem);\n    font-size: 0.95rem;\n  }\n  .oksTablist[data-appearance=segmented] .oksTabTrigger[data-active=true],\n  .oksTablist[data-appearance=pill] .oksTabTrigger[data-active=true] {\n    background-color: var(--oks-color-primary-500, #3b82f6);\n    color: #fff;\n  }\n  .oksTablist[data-appearance=segmented] .oksTabTrigger[data-active=false],\n  .oksTablist[data-appearance=pill] .oksTabTrigger[data-active=false] {\n    background-color: var(--oks-color-primary-50, #eff6ff);\n    color: var(--oks-color-primary-700, #1d4ed8);\n  }\n  .oksTablist[data-appearance=outline] .oksTabTrigger[data-active=false] {\n    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    background-color: var(--oks-color-neutral-50, #f9fafb);\n  }\n  .oksTablist[data-appearance=outline] .oksTabTrigger[data-active=true] {\n    border: 1px solid var(--oks-color-primary-500, #3b82f6);\n    background-color: var(--oks-color-primary-50, #eff6ff);\n    color: var(--oks-color-primary-700, #1d4ed8);\n  }\n  .oksTablist[data-appearance=dot] .oksTabTrigger[data-active=true]::before {\n    content: "";\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    border-radius: 9999px;\n    background-color: var(--oks-color-primary-500, #3b82f6);\n    margin-inline-end: 6px;\n    transform: translateY(-1px);\n  }\n  .oksTabsRoot[data-orientation=vertical] {\n    flex-direction: row;\n  }\n  .oksTabsRoot[data-orientation=vertical] > .oksTablist {\n    flex-direction: column;\n    gap: var(--oks-space-1, 0.25rem);\n    border-bottom: 0;\n    border-inline-end: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n  }\n  .oksTabsRoot[data-orientation=vertical][data-tablist-position=end] {\n    flex-direction: row-reverse;\n  }\n  .oksTabsRoot[data-orientation=vertical] > .oksTabsPanels {\n    flex: 1 1 auto;\n    padding-inline-start: var(--oks-space-3, 0.75rem);\n  }\n}\n');

// src/components/Tabs/Tabs.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function mergeClassName8(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function getColorVar5(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
function keyToIdPart(key) {
  const str = String(key);
  return str.trim().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9\-_:.]/g, "");
}
function isTabElement(node) {
  return (0, import_react10.isValidElement)(node) && node.type === Tab;
}
function normalizeElementKey(key) {
  return key.startsWith(".$") ? key.slice(2) : key;
}
function pickInitialKey(keys, disabled) {
  for (const k of keys) {
    if (!disabled.has(k)) return k;
  }
  return void 0;
}
var Tabs = (0, import_react10.forwardRef)(function Tabs2(props, ref) {
  const {
    children,
    variant = "solid",
    color = "default",
    size = "md",
    radius = "full",
    fullWidth = false,
    items,
    disabledKeys,
    selectedKey,
    defaultSelectedKey,
    shouldSelectOnPressUp = true,
    keyboardActivation = "automatic",
    disableCursorAnimation = false,
    isDisabled = false,
    disableAnimation = false,
    classNames,
    className,
    placement = "top",
    isVertical = false,
    destroyInactiveTabPanel = true,
    onSelectionChange,
    ...rest
  } = props;
  const disabledSet = (0, import_react10.useMemo)(() => {
    const set = /* @__PURE__ */ new Set();
    for (const k of disabledKeys ?? []) set.add(k);
    return set;
  }, [disabledKeys]);
  const renderedTabs = (0, import_react10.useMemo)(() => {
    if (items !== void 0) {
      const render = children;
      if (typeof render !== "function") return [];
      const out2 = [];
      for (const item of items) {
        const el = render(item);
        if (!isTabElement(el)) continue;
        const k = el.key;
        if (k === null || k === void 0) continue;
        out2.push({
          key: typeof k === "string" ? normalizeElementKey(k) : k,
          props: el.props
        });
      }
      return out2;
    }
    const out = [];
    for (const node of import_react10.Children.toArray(children)) {
      if (!isTabElement(node)) continue;
      const k = node.key;
      if (k === null || k === void 0) continue;
      out.push({
        key: typeof k === "string" ? normalizeElementKey(k) : k,
        props: node.props
      });
    }
    return out;
  }, [children, items]);
  const keys = (0, import_react10.useMemo)(() => renderedTabs.map((t) => t.key), [renderedTabs]);
  const nodeEnv = globalThis?.process?.env?.NODE_ENV;
  if (nodeEnv !== "production") {
    for (const t of items !== void 0 ? [] : import_react10.Children.toArray(children)) {
      if (isTabElement(t) && t.key == null) {
        throw new Error("oks-ui Tabs: each <Tab /> must have a React `key`.");
      }
    }
  }
  const controlled = selectedKey !== void 0;
  const [internalKey, setInternalKey] = (0, import_react10.useState)(() => {
    if (defaultSelectedKey !== void 0) return defaultSelectedKey;
    return pickInitialKey(keys, disabledSet);
  });
  const effectiveVertical = (0, import_react10.useMemo)(() => {
    if (isVertical) return true;
    return placement === "start" || placement === "end";
  }, [isVertical, placement]);
  const resolvedPlacement = (0, import_react10.useMemo)(() => {
    if (isVertical) return "start";
    return placement;
  }, [isVertical, placement]);
  const resolvedSelectedKey = (0, import_react10.useMemo)(() => {
    const current = controlled ? selectedKey : internalKey;
    if (current !== void 0 && current !== null) {
      if (keys.includes(current) && !disabledSet.has(current)) return current;
    }
    return pickInitialKey(keys, disabledSet);
  }, [controlled, disabledSet, internalKey, keys, selectedKey]);
  const selectKey = (0, import_react10.useCallback)(
    (k) => {
      if (isDisabled) return;
      if (disabledSet.has(k)) return;
      if (!keys.includes(k)) return;
      if (!controlled) setInternalKey(k);
      onSelectionChange?.(k);
    },
    [controlled, disabledSet, isDisabled, keys, onSelectionChange]
  );
  const triggerRefs = (0, import_react10.useRef)(/* @__PURE__ */ new Map());
  const setTriggerRef = (0, import_react10.useCallback)((k, node) => {
    triggerRefs.current.set(k, node);
  }, []);
  const autoId = (0, import_react10.useId)();
  const tabsId = (0, import_react10.useMemo)(() => {
    const base = rest.id ? keyToIdPart(rest.id) : keyToIdPart(`tabs-${autoId}`);
    return `oks-${base}`;
  }, [autoId, rest.id]);
  const getIds = (0, import_react10.useCallback)(
    (k) => {
      const part = keyToIdPart(k);
      return { tab: `${tabsId}-tab-${part}`, panel: `${tabsId}-panel-${part}` };
    },
    [tabsId]
  );
  const tabListRef = (0, import_react10.useRef)(null);
  const cursorRef = (0, import_react10.useRef)(null);
  const positionCursor = (0, import_react10.useCallback)(() => {
    if (variant !== "underlined") return;
    const list = tabListRef.current;
    const cursor = cursorRef.current;
    if (!list || !cursor) return;
    const activeKey = resolvedSelectedKey;
    if (activeKey === void 0) return;
    const el = triggerRefs.current.get(activeKey);
    if (!el) return;
    const listRect = list.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    if (!effectiveVertical) {
      const x = Math.max(0, elRect.left - listRect.left);
      const w = elRect.width;
      cursor.style.setProperty("--oks-tabs-cursor-x", `${x}px`);
      cursor.style.setProperty("--oks-tabs-cursor-w", `${w}px`);
    } else {
      const y = Math.max(0, elRect.top - listRect.top);
      const h = elRect.height;
      cursor.style.setProperty("--oks-tabs-cursor-y", `${y}px`);
      cursor.style.setProperty("--oks-tabs-cursor-h", `${h}px`);
    }
  }, [effectiveVertical, resolvedSelectedKey, variant]);
  (0, import_react10.useEffect)(() => {
    positionCursor();
  }, [positionCursor]);
  (0, import_react10.useEffect)(() => {
    if (variant !== "underlined") return;
    const onResize = () => positionCursor();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [positionCursor, variant]);
  const onListKeyDown = (e) => {
    if (isDisabled) return;
    const list = tabListRef.current;
    if (!list) return;
    const keysInOrder = keys;
    if (keysInOrder.length === 0) return;
    const activeEl = globalThis.document?.activeElement;
    const focusedKey = (() => {
      for (const k of keysInOrder) {
        const node = triggerRefs.current.get(k);
        if (node && activeEl && node === activeEl) return k;
      }
      return resolvedSelectedKey;
    })();
    const focusedIndex = focusedKey !== void 0 ? keysInOrder.indexOf(focusedKey) : -1;
    const move = (direction) => {
      if (keysInOrder.length === 0) return;
      let idx = focusedIndex >= 0 ? focusedIndex : 0;
      for (let i = 0; i < keysInOrder.length; i++) {
        idx = (idx + direction + keysInOrder.length) % keysInOrder.length;
        const nextKey = keysInOrder[idx];
        if (disabledSet.has(nextKey)) continue;
        const node = triggerRefs.current.get(nextKey);
        node?.focus();
        if (keyboardActivation === "automatic") selectKey(nextKey);
        return;
      }
    };
    const focusEdge = (edge) => {
      const ordered = edge === "start" ? keysInOrder : [...keysInOrder].reverse();
      for (const k of ordered) {
        if (disabledSet.has(k)) continue;
        const node = triggerRefs.current.get(k);
        node?.focus();
        if (keyboardActivation === "automatic") selectKey(k);
        return;
      }
    };
    const horiz = !effectiveVertical;
    const key = e.key;
    if (key === "Home") {
      e.preventDefault();
      focusEdge("start");
      return;
    }
    if (key === "End") {
      e.preventDefault();
      focusEdge("end");
      return;
    }
    if (horiz && key === "ArrowRight" || !horiz && key === "ArrowDown") {
      e.preventDefault();
      move(1);
      return;
    }
    if (horiz && key === "ArrowLeft" || !horiz && key === "ArrowUp") {
      e.preventDefault();
      move(-1);
      return;
    }
    if (keyboardActivation === "manual" && (key === "Enter" || key === " ")) {
      if (!activeEl) return;
      for (const k of keysInOrder) {
        const node = triggerRefs.current.get(k);
        if (node && node === activeEl) {
          e.preventDefault();
          selectKey(k);
          return;
        }
      }
    }
  };
  const baseClassName = mergeClassName8(
    mergeClassName8("oksTabsRoot", classNames?.base),
    className
  );
  const tabListClassName = mergeClassName8("oksTablist", classNames?.tabList);
  const cursorClassName = mergeClassName8("oksTabsCursor", classNames?.cursor);
  const panelsClassName = "oksTabsPanels";
  const panelClassName = mergeClassName8("oksTabsPanel", classNames?.panel);
  const toneVars = {
    ["--oks-tabs-tone"]: getColorVar5(color, 500),
    ["--oks-tabs-tone-50"]: getColorVar5(color, 50),
    ["--oks-tabs-tone-700"]: getColorVar5(color, 700)
  };
  const baseStyle = {
    ...toneVars,
    ...rest.style ?? {}
  };
  const activeTab = (0, import_react10.useMemo)(() => {
    if (resolvedSelectedKey === void 0) return void 0;
    return renderedTabs.find((t) => t.key === resolvedSelectedKey);
  }, [renderedTabs, resolvedSelectedKey]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      ...rest,
      ref,
      className: baseClassName,
      style: baseStyle,
      "data-variant": variant,
      "data-color": color,
      "data-size": size,
      "data-radius": radius,
      "data-full-width": fullWidth ? "true" : "false",
      "data-placement": resolvedPlacement,
      "data-vertical": effectiveVertical ? "true" : "false",
      "data-disabled": isDisabled ? "true" : "false",
      "data-motion": disableAnimation ? "reduced" : "default",
      "data-disable-cursor-animation": disableCursorAnimation ? "true" : "false",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          "div",
          {
            className: tabListClassName,
            role: "tablist",
            "aria-orientation": effectiveVertical ? "vertical" : "horizontal",
            ref: tabListRef,
            onKeyDown: onListKeyDown,
            children: [
              variant === "underlined" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "div",
                {
                  className: cursorClassName,
                  ref: cursorRef,
                  "aria-hidden": "true"
                }
              ) : null,
              renderedTabs.map((t) => {
                const selected = t.key === resolvedSelectedKey;
                const disabled = isDisabled || disabledSet.has(t.key);
                const ids = getIds(t.key);
                const tabWrapperClassName = mergeClassName8(
                  "oksTabsTabWrapper",
                  classNames?.tabWrapper
                );
                const tabClassName = mergeClassName8("oksTabsTab", classNames?.tab);
                const tabContentClassName = mergeClassName8(
                  "oksTabsTabContent",
                  classNames?.tabContent
                );
                const effectivePressUp = t.props.shouldSelectOnPressUp ?? shouldSelectOnPressUp;
                const onSelect = () => selectKey(t.key);
                const setExternalRef = (node) => {
                  setTriggerRef(t.key, node);
                  if (t.props.tabRef) t.props.tabRef.current = node;
                };
                const commonProps = {
                  role: "tab",
                  id: ids.tab,
                  "aria-selected": selected,
                  "aria-controls": ids.panel,
                  tabIndex: selected ? 0 : -1,
                  "data-selected": selected ? "true" : void 0,
                  "data-disabled": disabled ? "true" : void 0
                };
                const content = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: tabContentClassName, children: t.props.title });
                return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: tabWrapperClassName, children: t.props.href ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "a",
                  {
                    ...commonProps,
                    className: tabClassName,
                    href: t.props.href,
                    target: t.props.target,
                    rel: t.props.rel,
                    download: t.props.download,
                    ping: t.props.ping,
                    referrerPolicy: t.props.referrerPolicy,
                    "aria-disabled": disabled ? "true" : void 0,
                    onClick: disabled ? (e) => {
                      e.preventDefault();
                    } : effectivePressUp ? () => onSelect() : void 0,
                    onMouseDown: disabled ? void 0 : effectivePressUp ? void 0 : (e) => {
                      e.preventDefault();
                      onSelect();
                    },
                    ref: setExternalRef,
                    children: content
                  }
                ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "button",
                  {
                    ...commonProps,
                    type: "button",
                    className: tabClassName,
                    disabled,
                    onClick: effectivePressUp ? onSelect : void 0,
                    onMouseDown: effectivePressUp ? void 0 : (e) => {
                      e.preventDefault();
                      onSelect();
                    },
                    ref: setExternalRef,
                    children: content
                  }
                ) }, String(t.key));
              })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: panelsClassName, children: destroyInactiveTabPanel ? activeTab ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "div",
          {
            className: panelClassName,
            role: "tabpanel",
            id: getIds(activeTab.key).panel,
            "aria-labelledby": getIds(activeTab.key).tab,
            children: activeTab.props.children
          }
        ) : null : renderedTabs.map((t) => {
          const selected = t.key === resolvedSelectedKey;
          const ids = getIds(t.key);
          return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "div",
            {
              className: panelClassName,
              role: "tabpanel",
              id: ids.panel,
              "aria-labelledby": ids.tab,
              hidden: !selected,
              children: t.props.children
            },
            String(t.key)
          );
        }) })
      ]
    }
  );
});
Tabs.displayName = "Tabs";

// src/components/Tabs/TabsLegacy.tsx
var import_react11 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function slugify(input) {
  return input.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
}
function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function useURLParam(key) {
  const get = (0, import_react11.useCallback)(() => {
    if (!isBrowser() || !key) return null;
    const url = new URL(window.location.href);
    return url.searchParams.get(key);
  }, [key]);
  const set = (0, import_react11.useCallback)(
    (value) => {
      if (!isBrowser() || !key) return;
      const url = new URL(window.location.href);
      const params = url.searchParams;
      if (value === void 0 || value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      const next = `${url.pathname}?${params.toString()}${url.hash ?? ""}`;
      window.history.pushState({}, "", next);
      const evt = new PopStateEvent("popstate");
      window.dispatchEvent(evt);
    },
    [key]
  );
  const subscribe = (0, import_react11.useCallback)(
    (cb) => {
      if (!isBrowser() || !key) return () => {
      };
      const handler = () => cb(get());
      window.addEventListener("popstate", handler);
      return () => window.removeEventListener("popstate", handler);
    },
    [get, key]
  );
  return { get, set, subscribe };
}
function mergeButtonProps(base, overrides) {
  return { ...base ?? {}, ...overrides ?? {} };
}
var TabsLegacy = (0, import_react11.forwardRef)(function TabsLegacy2(props, ref) {
  const {
    data,
    defaultTab = 0,
    value,
    onChange,
    className,
    orientation = "horizontal",
    tablistPosition = "start",
    mode = "basic",
    tabId = "tab",
    variant,
    size,
    radius,
    triggerProps,
    activeTriggerProps,
    allowKeyboardNavigation = true,
    renderLazy = true,
    idStrategy
  } = props;
  const items = (0, import_react11.useMemo)(
    () => data.map((it) => ({
      ...it,
      id: it.id ?? (idStrategy ? idStrategy(it.title) : slugify(it.title))
    })),
    [data, idStrategy]
  );
  const url = useURLParam(mode === "url" ? tabId : void 0);
  const findDefault = (0, import_react11.useCallback)(
    (idx) => {
      if (idx >= 0 && idx < items.length) return idx;
      return 0;
    },
    [items.length]
  );
  const indexFromParam = (0, import_react11.useCallback)(() => {
    if (mode !== "url") return null;
    const val = url.get();
    if (!val) return null;
    const idx = items.findIndex((it) => it.id === val);
    return idx >= 0 ? idx : null;
  }, [items, mode, url]);
  const initialIndex = (0, import_react11.useMemo)(() => {
    const fromUrl = indexFromParam();
    if (fromUrl !== null) return fromUrl;
    return findDefault(defaultTab);
  }, [defaultTab, findDefault, indexFromParam]);
  const isControlled = typeof value === "number";
  const [internalIndex, setInternalIndex] = (0, import_react11.useState)(initialIndex);
  const activeIndex = isControlled ? value : internalIndex;
  (0, import_react11.useEffect)(() => {
    if (mode !== "url") return;
    const unsub = url.subscribe((val) => {
      const idx = val ? items.findIndex((it) => it.id === val) : -1;
      if (idx >= 0) {
        if (!isControlled) setInternalIndex(idx);
        onChange?.(idx);
      } else {
        const fallback = findDefault(defaultTab);
        if (!isControlled) setInternalIndex(fallback);
        onChange?.(fallback);
      }
    });
    return unsub;
  }, [defaultTab, findDefault, isControlled, items, mode, onChange, url]);
  const rootClass = ["oksTabsRoot", className].filter(Boolean).join(" ");
  const triggerRefs = (0, import_react11.useRef)([]);
  triggerRefs.current = [];
  const focusTab = (idx) => {
    const btn = triggerRefs.current[idx];
    btn?.focus();
  };
  const activate = (idx) => {
    if (!isControlled) setInternalIndex(idx);
    onChange?.(idx);
    if (mode === "url") {
      const id = items[idx]?.id;
      if (id) url.set(id);
    }
  };
  const onTriggerClick = (idx) => (e) => {
    e.preventDefault();
    activate(idx);
  };
  const onTriggerKeyDown = (idx) => (e) => {
    if (!allowKeyboardNavigation) return;
    const horiz = orientation === "horizontal";
    const key = e.key;
    if (key === "Home") {
      e.preventDefault();
      focusTab(0);
      return;
    }
    if (key === "End") {
      e.preventDefault();
      focusTab(items.length - 1);
      return;
    }
    if (horiz && key === "ArrowRight" || !horiz && key === "ArrowDown") {
      e.preventDefault();
      const next = (idx + 1) % items.length;
      focusTab(next);
      return;
    }
    if (horiz && key === "ArrowLeft" || !horiz && key === "ArrowUp") {
      e.preventDefault();
      const prev = (idx - 1 + items.length) % items.length;
      focusTab(prev);
      return;
    }
    if (key === "Enter" || key === " ") {
      e.preventDefault();
      activate(idx);
    }
  };
  const resolvedSize = size ?? "comfortable";
  const sizeAttr = resolvedSize === "compact" ? "sm" : "md";
  let effAppearance = "underline";
  let effIndicator = {
    height: 4
  };
  let effOptions = { underline: { widthStrategy: "tab" } };
  const v = variant;
  if (v) {
    if (v === "underlineThick") effAppearance = "underline";
    if (v === "segmented") effAppearance = "segmented";
    if (v === "pill") effAppearance = "pill";
    if (v === "dot") effAppearance = "dot";
    if (v === "outline") effAppearance = "outline";
    if (v === "underlineThick") {
      effIndicator = { height: 4, ...effIndicator };
      effOptions = { underline: { widthStrategy: "tab" } };
    } else if (v === "outline") {
      effOptions = { outline: { activeEmphasis: "stroke" } };
    }
  }
  const mergedFor = (isActive) => isActive ? mergeButtonProps(triggerProps, activeTriggerProps) : triggerProps ?? {};
  const tablistRef = (0, import_react11.useRef)(null);
  const indicatorRef = (0, import_react11.useRef)(null);
  (0, import_react11.useEffect)(() => {
    if (effAppearance !== "underline") return;
    const list = tablistRef.current;
    const ind = indicatorRef.current;
    const trg = triggerRefs.current[activeIndex];
    if (!list || !ind || !trg) return;
    const listRect = list.getBoundingClientRect();
    const trgRect = trg.getBoundingClientRect();
    if (orientation === "horizontal") {
      const x = Math.max(0, trgRect.left - listRect.left);
      const w = trgRect.width;
      const hVal = typeof effIndicator?.height === "number" ? `${effIndicator?.height}px` : effIndicator?.height ?? "2px";
      ind.style.setProperty("--oks-tabs-indicator-x", `${x}px`);
      ind.style.setProperty("--oks-tabs-indicator-w", `${w}px`);
      ind.style.setProperty("--oks-tabs-indicator-h", hVal);
      if (effIndicator?.color) {
        ind.style.setProperty("--oks-tabs-indicator-color", effIndicator.color);
      }
    } else {
      const y = Math.max(0, trgRect.top - listRect.top);
      const h = trgRect.height;
      const wVal = typeof effIndicator?.height === "number" ? `${effIndicator?.height}px` : effIndicator?.height ?? "2px";
      ind.style.setProperty("--oks-tabs-indicator-y", `${y}px`);
      ind.style.setProperty("--oks-tabs-indicator-h", `${h}px`);
      ind.style.setProperty("--oks-tabs-indicator-w", wVal);
      if (effIndicator?.color) {
        ind.style.setProperty("--oks-tabs-indicator-color", effIndicator.color);
      }
    }
  }, [activeIndex, effAppearance, effIndicator, orientation]);
  (0, import_react11.useEffect)(() => {
    if (effAppearance !== "underline") return;
    const onResize = () => {
      const ind = indicatorRef.current;
      if (!ind) return;
      const idx = activeIndex;
      const btn = triggerRefs.current[idx];
      const list = tablistRef.current;
      if (!btn || !list) return;
      const listRect = list.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      if (orientation === "horizontal") {
        const x = Math.max(0, btnRect.left - listRect.left);
        const w = btnRect.width;
        ind.style.setProperty("--oks-tabs-indicator-x", `${x}px`);
        ind.style.setProperty("--oks-tabs-indicator-w", `${w}px`);
      } else {
        const y = Math.max(0, btnRect.top - listRect.top);
        const h = btnRect.height;
        ind.style.setProperty("--oks-tabs-indicator-y", `${y}px`);
        ind.style.setProperty("--oks-tabs-indicator-h", `${h}px`);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex, effAppearance, orientation]);
  const renderPanelContent = (node) => {
    return typeof node === "function" ? node() : node;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      className: rootClass,
      "data-orientation": orientation,
      "data-tablist-position": tablistPosition,
      "data-density": resolvedSize,
      style: {
        ...radius !== void 0 ? {
          ["--oks-tabs-radius"]: typeof radius === "number" ? `${radius}px` : radius === "none" ? "0px" : radius === "sm" ? "0.25rem" : radius === "md" ? "0.5rem" : radius === "lg" ? "0.75rem" : radius === "full" ? "9999px" : void 0
        } : void 0
      },
      ref,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          "div",
          {
            className: "oksTablist",
            role: "tablist",
            "aria-orientation": orientation,
            "data-appearance": effAppearance,
            "data-underline-position": effOptions?.underline?.position,
            "data-outline-active": effOptions?.outline?.activeEmphasis,
            ref: tablistRef,
            children: [
              effAppearance === "underline" ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "oksTabsIndicator", ref: indicatorRef, "aria-hidden": "true" }) : null,
              items.map((it, i) => {
                const active = i === activeIndex;
                const btnProps = mergedFor(active);
                const triggerId = `oks-tab-${it.id}`;
                const panelId = `oks-panel-${it.id}`;
                return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  "button",
                  {
                    ...btnProps,
                    ref: (node) => {
                      triggerRefs.current[i] = node;
                    },
                    role: "tab",
                    "aria-selected": active,
                    "aria-controls": panelId,
                    id: triggerId,
                    tabIndex: active ? 0 : -1,
                    title: it.title,
                    onClick: onTriggerClick(i),
                    onKeyDown: onTriggerKeyDown(i),
                    "data-active": active ? "true" : "false",
                    "data-size": sizeAttr,
                    "data-elevated": effAppearance === "pill" && effOptions?.pill?.elevated && active ? "true" : void 0,
                    className: ["oksTabTrigger", btnProps?.className].filter(Boolean).join(" "),
                    children: it.title
                  },
                  it.id
                );
              })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "oksTabsPanels", children: renderLazy ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "div",
          {
            className: "oksTabsPanel",
            role: "tabpanel",
            id: `oks-panel-${items[activeIndex]?.id}`,
            "aria-labelledby": `oks-tab-${items[activeIndex]?.id}`,
            children: renderPanelContent(items[activeIndex]?.content)
          }
        ) : items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "div",
          {
            className: "oksTabsPanel",
            role: "tabpanel",
            id: `oks-panel-${it.id}`,
            "aria-labelledby": `oks-tab-${it.id}`,
            hidden: i !== activeIndex,
            children: renderPanelContent(it.content)
          },
          it.id
        )) })
      ]
    }
  );
});
TabsLegacy.displayName = "TabsLegacy";

// src/components/Tabs/TabsRoot.tsx
var import_react13 = require("react");

// src/components/Tabs/context.ts
var import_react12 = require("react");
var TabsContext = (0, import_react12.createContext)(null);
function useTabsContext() {
  const ctx = (0, import_react12.useContext)(TabsContext);
  if (!ctx) throw new Error("oks-ui Tabs: TabsRoot is required");
  return ctx;
}

// src/components/Tabs/TabsRoot.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function toIdPart(value) {
  const str = String(value);
  return str.trim().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9\-_:.]/g, "");
}
function isBrowser2() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function useURLParam2(key) {
  const get = (0, import_react13.useCallback)(() => {
    if (!isBrowser2() || !key) return null;
    const url = new URL(window.location.href);
    return url.searchParams.get(key);
  }, [key]);
  const set = (0, import_react13.useCallback)(
    (value) => {
      if (!isBrowser2() || !key) return;
      const url = new URL(window.location.href);
      const params = url.searchParams;
      if (value === void 0 || value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      const next = `${url.pathname}?${params.toString()}${url.hash ?? ""}`;
      window.history.pushState({}, "", next);
      const evt = new PopStateEvent("popstate");
      window.dispatchEvent(evt);
    },
    [key]
  );
  const subscribe = (0, import_react13.useCallback)(
    (cb) => {
      if (!isBrowser2() || !key) return () => {
      };
      const handler = () => cb(get());
      window.addEventListener("popstate", handler);
      return () => window.removeEventListener("popstate", handler);
    },
    [get, key]
  );
  return { get, set, subscribe };
}
var TabsRoot = (0, import_react13.forwardRef)(
  function TabsRoot2(props, ref) {
    const {
      id,
      value,
      defaultValue,
      onChange,
      mode = "basic",
      tabId = "tab",
      orientation = "horizontal",
      tablistPosition = "start",
      variant,
      size = "comfortable",
      radius,
      renderLazy = true,
      className,
      children
    } = props;
    const url = useURLParam2(mode === "url" ? tabId : void 0);
    const initial = (0, import_react13.useMemo)(() => {
      if (mode === "url") {
        const u = url.get();
        if (u !== null) return u;
      }
      return defaultValue;
    }, [defaultValue, mode, url]);
    const controlled = value !== void 0;
    const [internal, setInternal] = (0, import_react13.useState)(initial);
    const current = controlled ? value : internal;
    (0, import_react13.useEffect)(() => {
      if (mode !== "url") return;
      const unsub = url.subscribe((val) => {
        if (val !== null) {
          if (!controlled) setInternal(val);
          onChange?.(val);
        }
      });
      return unsub;
    }, [controlled, mode, onChange, url]);
    const setValue = (0, import_react13.useCallback)(
      (v) => {
        if (!controlled) setInternal(v);
        onChange?.(v);
        if (mode === "url") url.set(String(v));
      },
      [controlled, mode, onChange, url]
    );
    const autoId = (0, import_react13.useId)();
    const idsBase = (0, import_react13.useMemo)(() => {
      const base = id ? toIdPart(id) : toIdPart(`tabs-${autoId}`);
      return `oks-${base}`;
    }, [autoId, id]);
    const getIds = (0, import_react13.useCallback)(
      (v) => {
        const part = toIdPart(v);
        return { tab: `${idsBase}-tab-${part}`, panel: `${idsBase}-panel-${part}` };
      },
      [idsBase]
    );
    const ctx = (0, import_react13.useMemo)(() => {
      let resolvedAppearance = "underline";
      let resolvedIndicator = { height: 4 };
      let resolvedOptions = { underline: { widthStrategy: "tab" } };
      const v = variant;
      if (v) {
        if (v === "underlineThick") resolvedAppearance = "underline";
        if (v === "segmented") resolvedAppearance = "segmented";
        if (v === "pill") resolvedAppearance = "pill";
        if (v === "dot") resolvedAppearance = "dot";
        if (v === "outline") resolvedAppearance = "outline";
        if (v === "underlineThick") {
          resolvedIndicator = { height: 4 };
          resolvedOptions = { underline: { widthStrategy: "tab" } };
        } else if (v === "outline") {
          resolvedOptions = { outline: { activeEmphasis: "stroke" } };
        }
      }
      return {
        value: current,
        setValue,
        orientation,
        appearance: resolvedAppearance,
        density: size,
        radius,
        indicator: resolvedIndicator,
        appearanceOptions: resolvedOptions,
        renderLazy,
        getIds,
        isActive: (v2) => v2 === current
      };
    }, [
      variant,
      size,
      current,
      getIds,
      orientation,
      radius,
      renderLazy,
      setValue
    ]);
    const rootClass = ["oksTabsRoot", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TabsContext.Provider, { value: ctx, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        ref,
        id,
        className: rootClass,
        "data-orientation": orientation,
        "data-tablist-position": tablistPosition,
        "data-density": size,
        "data-underline-position": ctx.appearanceOptions?.underline?.position === "top" ? "top" : void 0,
        style: {
          ...radius !== void 0 ? {
            ["--oks-tabs-radius"]: typeof radius === "number" ? `${radius}px` : radius === "none" ? "0px" : radius === "sm" ? "0.25rem" : radius === "md" ? "0.5rem" : radius === "lg" ? "0.75rem" : radius === "full" ? "9999px" : void 0
          } : void 0
        },
        children
      }
    ) });
  }
);
TabsRoot.displayName = "TabsRoot";

// src/components/Tabs/TabList.tsx
var import_react14 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var TabList = (0, import_react14.forwardRef)(function TabList2(props, ref) {
  const { className, ...rest } = props;
  const ctx = useTabsContext();
  const localRef = (0, import_react14.useRef)(null);
  const listClass = ["oksTablist", className].filter(Boolean).join(" ");
  const indicatorRef = (0, import_react14.useRef)(null);
  const onKeyDown = (e) => {
    const list = localRef.current;
    if (!list) return;
    const tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    if (tabs.length === 0) return;
    const horiz = ctx.orientation === "horizontal";
    const active = tabs.findIndex((el) => el.getAttribute("aria-selected") === "true");
    const key = e.key;
    if (key === "Home") {
      e.preventDefault();
      tabs[0]?.focus();
      return;
    }
    if (key === "End") {
      e.preventDefault();
      tabs[tabs.length - 1]?.focus();
      return;
    }
    if (horiz && key === "ArrowRight" || !horiz && key === "ArrowDown") {
      e.preventDefault();
      const next = (active + 1) % tabs.length;
      tabs[next]?.focus();
      return;
    }
    if (horiz && key === "ArrowLeft" || !horiz && key === "ArrowUp") {
      e.preventDefault();
      const prev = (active - 1 + tabs.length) % tabs.length;
      tabs[prev]?.focus();
      return;
    }
  };
  (0, import_react14.useEffect)(() => {
    if (ctx.appearance !== "underline") return;
    const list = localRef.current;
    const ind = indicatorRef.current;
    if (!list || !ind) return;
    const active = list.querySelector('[role="tab"][aria-selected="true"]');
    if (!active) return;
    const listRect = list.getBoundingClientRect();
    const trgRect = active.getBoundingClientRect();
    const label = active.querySelector(".oksTabLabel");
    const widthStrategy = ctx.appearanceOptions?.underline?.widthStrategy ?? "tab";
    const width = widthStrategy === "label" && label ? label.getBoundingClientRect().width : trgRect.width;
    const offset = ctx.appearanceOptions?.underline?.offset ?? 0;
    const cap = ctx.appearanceOptions?.underline?.cap ?? "square";
    if (ctx.orientation === "horizontal") {
      const x = Math.max(0, trgRect.left - listRect.left);
      const w = width;
      const h = typeof ctx.indicator?.height === "number" ? `${ctx.indicator.height}px` : ctx.indicator?.height ?? "2px";
      ind.style.setProperty("--oks-tabs-indicator-x", `${x}px`);
      ind.style.setProperty("--oks-tabs-indicator-w", `${w}px`);
      ind.style.setProperty("--oks-tabs-indicator-h", h);
      if (ctx.indicator?.color)
        ind.style.setProperty("--oks-tabs-indicator-color", ctx.indicator.color);
      ind.style.setProperty("--oks-tabs-indicator-offset-y", `${offset}px`);
      ind.style.setProperty("--oks-tabs-indicator-radius", cap === "round" ? "9999px" : "0px");
    } else {
      const y = Math.max(0, trgRect.top - listRect.top);
      const h = trgRect.height;
      const wVal = typeof ctx.indicator?.height === "number" ? `${ctx.indicator.height}px` : ctx.indicator?.height ?? "2px";
      ind.style.setProperty("--oks-tabs-indicator-y", `${y}px`);
      ind.style.setProperty("--oks-tabs-indicator-h", `${h}px`);
      ind.style.setProperty("--oks-tabs-indicator-w", wVal);
      if (ctx.indicator?.color)
        ind.style.setProperty("--oks-tabs-indicator-color", ctx.indicator.color);
      ind.style.setProperty("--oks-tabs-indicator-offset-x", `${offset}px`);
      ind.style.setProperty("--oks-tabs-indicator-radius", cap === "round" ? "9999px" : "0px");
    }
  }, [ctx.value, ctx.appearance, ctx.indicator, ctx.orientation]);
  (0, import_react14.useEffect)(() => {
    if (ctx.appearance !== "underline") return;
    const onResize = () => {
      const list = localRef.current;
      const ind = indicatorRef.current;
      if (!list || !ind) return;
      const active = list.querySelector('[role="tab"][aria-selected="true"]');
      if (!active) return;
      const listRect = list.getBoundingClientRect();
      const trgRect = active.getBoundingClientRect();
      if (ctx.orientation === "horizontal") {
        const x = Math.max(0, trgRect.left - listRect.left);
        const w = trgRect.width;
        ind.style.setProperty("--oks-tabs-indicator-x", `${x}px`);
        ind.style.setProperty("--oks-tabs-indicator-w", `${w}px`);
      } else {
        const y = Math.max(0, trgRect.top - listRect.top);
        const h = trgRect.height;
        ind.style.setProperty("--oks-tabs-indicator-y", `${y}px`);
        ind.style.setProperty("--oks-tabs-indicator-h", `${h}px`);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ctx.appearance, ctx.orientation, ctx.value]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "div",
    {
      ...rest,
      className: listClass,
      role: "tablist",
      "aria-orientation": ctx.orientation,
      "data-appearance": ctx.appearance,
      "data-outline-active": ctx.appearanceOptions?.outline?.activeEmphasis,
      "data-underline-position": ctx.appearanceOptions?.underline?.position,
      ref: (node) => {
        localRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref && "current" in ref) ref.current = node;
      },
      onKeyDown,
      children: [
        ctx.appearance === "underline" ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "oksTabsIndicator", ref: indicatorRef, "aria-hidden": "true" }) : null,
        props.children
      ]
    }
  );
});
TabList.displayName = "TabList";

// src/components/Tabs/TabTrigger.tsx
var import_react15 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var TabTrigger = (0, import_react15.forwardRef)(
  function TabTrigger2(props, ref) {
    const { value, disabled, className, children } = props;
    const ctx = useTabsContext();
    const active = ctx.isActive(value);
    const ids = ctx.getIds(value);
    const sizeAttr = ctx.density === "compact" ? "sm" : "md";
    const cls = ["oksTabTrigger", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "button",
      {
        ref,
        className: cls,
        role: "tab",
        id: ids.tab,
        "aria-selected": active,
        "aria-controls": ids.panel,
        tabIndex: active ? 0 : -1,
        disabled,
        "data-active": active ? "true" : "false",
        "data-size": sizeAttr,
        "data-elevated": ctx.appearance === "pill" && ctx.appearanceOptions?.pill?.elevated && active ? "true" : void 0,
        onClick: () => ctx.setValue(value),
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "oksTabLabel", children })
      }
    );
  }
);
TabTrigger.displayName = "TabTrigger";

// src/components/Tabs/TabPanel.tsx
var import_react16 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var TabPanel = (0, import_react16.forwardRef)(function TabPanel2(props, ref) {
  const { value, keepMounted, className, children } = props;
  const ctx = useTabsContext();
  const ids = ctx.getIds(value);
  const active = ctx.isActive(value);
  const cls = ["oksTabsPanel", className].filter(Boolean).join(" ");
  if (!active && keepMounted === void 0 && ctx.renderLazy) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    {
      ref,
      role: "tabpanel",
      id: ids.panel,
      "aria-labelledby": ids.tab,
      hidden: !active,
      className: cls,
      children
    }
  );
});
TabPanel.displayName = "TabPanel";

// src/components/Chip/Chip.tsx
var import_react17 = require("react");

// src/components/Chip/Chip.module.css
styleInject("@layer components {\n  :where(.oksChip) {\n    --oks-chip-height: 28px;\n    --oks-chip-padding-x: var(--oks-space-3, 12px);\n    --oks-chip-gap: var(--oks-space-2, 8px);\n    --oks-chip-font-size: 13px;\n    --oks-chip-radius: 9999px;\n    --oks-chip-border-width: 1px;\n    --oks-chip-bg: transparent;\n    --oks-chip-fg: currentColor;\n    --oks-chip-border: transparent;\n    --oks-chip-shadow: none;\n    display: inline-flex;\n    align-items: center;\n    gap: var(--oks-chip-gap);\n    height: var(--oks-chip-height);\n    padding: 0 var(--oks-chip-padding-x);\n    border-radius: var(--oks-chip-radius);\n    border: var(--oks-chip-border-width) solid var(--oks-chip-border);\n    background-color: var(--oks-chip-bg);\n    color: var(--oks-chip-fg);\n    box-shadow: var(--oks-chip-shadow);\n    font: inherit;\n    font-size: var(--oks-chip-font-size);\n    line-height: 1;\n    user-select: none;\n    white-space: nowrap;\n    box-sizing: border-box;\n    transition:\n      background-color 140ms ease,\n      border-color 140ms ease,\n      box-shadow 140ms ease,\n      color 140ms ease,\n      opacity 140ms ease;\n  }\n  :where(.oksChip[data-disabled=true]) {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n  :where(.oksChipContent) {\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  :where(.oksChipDot) {\n    width: 6px;\n    height: 6px;\n    border-radius: 9999px;\n    background-color: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n    flex: none;\n  }\n  :where(.oksChipAvatar) {\n    width: calc(var(--oks-chip-height) - 8px);\n    height: calc(var(--oks-chip-height) - 8px);\n    border-radius: 9999px;\n    overflow: hidden;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n  }\n  :where(.oksChipAvatar) :where(img) {\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: cover;\n  }\n  :where(.oksChipCloseButton) {\n    width: calc(var(--oks-chip-height) - 6px);\n    height: calc(var(--oks-chip-height) - 6px);\n    border-radius: 9999px;\n    border: 1px solid transparent;\n    background-color: transparent;\n    color: currentColor;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    padding: 0;\n    margin-right: calc(var(--oks-chip-padding-x) * -0.6);\n    opacity: 0.7;\n  }\n  :where(.oksChipCloseButton:hover) {\n    opacity: 1;\n    background-color: color-mix(in srgb, currentColor 12%, transparent);\n  }\n  :where(.oksChipCloseButton:active) {\n    opacity: 1;\n    background-color: color-mix(in srgb, currentColor 20%, transparent);\n  }\n  :where(.oksChipCloseButton:focus-visible) {\n    outline: 2px solid var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n    outline-offset: 2px;\n  }\n  :where(.oksChipCloseButton:disabled),\n  :where(.oksChip[data-disabled=true]) :where(.oksChipCloseButton) {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  :where(.oksChip[data-radius=none]) {\n    --oks-chip-radius: 0;\n  }\n  :where(.oksChip[data-radius=sm]) {\n    --oks-chip-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksChip[data-radius=md]) {\n    --oks-chip-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksChip[data-radius=lg]) {\n    --oks-chip-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksChip[data-radius=full]) {\n    --oks-chip-radius: 9999px;\n  }\n  :where(.oksChip[data-size=sm]) {\n    --oks-chip-height: 24px;\n    --oks-chip-padding-x: var(--oks-space-2, 8px);\n    --oks-chip-gap: var(--oks-space-1, 4px);\n    --oks-chip-font-size: 12px;\n  }\n  :where(.oksChip[data-size=md]) {\n    --oks-chip-height: 28px;\n    --oks-chip-padding-x: var(--oks-space-3, 12px);\n    --oks-chip-gap: var(--oks-space-2, 8px);\n    --oks-chip-font-size: 13px;\n  }\n  :where(.oksChip[data-size=lg]) {\n    --oks-chip-height: 32px;\n    --oks-chip-padding-x: var(--oks-space-4, 16px);\n    --oks-chip-gap: var(--oks-space-2, 8px);\n    --oks-chip-font-size: 14px;\n  }\n  :where(.oksChip[data-variant=solid]) {\n    --oks-chip-bg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-chip-fg: var(--oks-chip-solid-fg, white);\n  }\n  :where(.oksChip[data-variant=bordered]) {\n    --oks-chip-border: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-chip-fg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksChip[data-variant=light]) {\n    --oks-chip-fg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksChip[data-variant=flat]) {\n    --oks-chip-bg: color-mix( in srgb, var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6)) 16%, transparent );\n    --oks-chip-fg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksChip[data-variant=faded]) {\n    --oks-chip-bg: var(--oks-chip-tone-50, var(--oks-color-primary-50, #eff6ff));\n    --oks-chip-border: var(--oks-chip-tone-100, var(--oks-color-primary-100, #dbeafe));\n    --oks-chip-fg: var(--oks-chip-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  :where(.oksChip[data-variant=shadow]) {\n    --oks-chip-bg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-chip-fg: var(--oks-chip-solid-fg, white);\n    --oks-chip-shadow: 0 10px 18px color-mix(in srgb, #000 20%, transparent);\n  }\n  :where(.oksChip[data-variant=dot]) {\n    --oks-chip-bg: var(--oks-chip-tone-50, var(--oks-color-primary-50, #eff6ff));\n    --oks-chip-border: var(--oks-chip-tone-100, var(--oks-color-primary-100, #dbeafe));\n    --oks-chip-fg: var(--oks-chip-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :where(.oksChip) {\n      transition: none;\n    }\n  }\n}\n");

// src/components/Chip/Chip.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function mergeClassName9(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
var ALLOWED_DEPTHS3 = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  950
];
function snapDepth3(input) {
  const clamped = clamp(input, 50, 950);
  const first = ALLOWED_DEPTHS3[0] ?? 500;
  let best = first;
  let bestDiff = Math.abs(best - clamped);
  for (const d of ALLOWED_DEPTHS3) {
    const diff = Math.abs(d - clamped);
    if (diff < bestDiff) {
      best = d;
      bestDiff = diff;
    }
  }
  return best;
}
function getColorVar6(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
var Chip = (0, import_react17.forwardRef)((props, ref) => {
  const {
    children,
    variant = "solid",
    size = "md",
    color = "default",
    radius = "full",
    colorDepth = 500,
    avatar,
    startContent,
    endContent,
    isDisabled = false,
    onClose,
    classNames,
    className,
    style,
    ...rest
  } = props;
  const resolvedDisabled = isDisabled;
  const resolvedDepth = typeof colorDepth === "number" ? snapDepth3(colorDepth) : 500;
  const hoverDepth = snapDepth3(resolvedDepth + 100);
  const activeDepth = snapDepth3(resolvedDepth + 200);
  const solidFg = resolvedDepth <= 400 ? "#000" : "#fff";
  const chipToneVars = {
    "--oks-chip-tone": getColorVar6(color, resolvedDepth),
    "--oks-chip-tone-hover": getColorVar6(color, hoverDepth),
    "--oks-chip-tone-active": getColorVar6(color, activeDepth),
    "--oks-chip-tone-50": getColorVar6(color, 50),
    "--oks-chip-tone-100": getColorVar6(color, 100),
    "--oks-chip-tone-700": getColorVar6(color, 700),
    "--oks-chip-solid-fg": solidFg
  };
  const closeIcon = endContent ?? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { "aria-hidden": "true", children: "\xD7" });
  const closeButton = typeof onClose === "function" ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "button",
    {
      type: "button",
      className: mergeClassName9("oksChipCloseButton", classNames?.closeButton),
      "aria-label": "Close",
      disabled: resolvedDisabled,
      onClick: (e) => {
        e.stopPropagation();
        if (!resolvedDisabled) onClose(e);
      },
      children: closeIcon
    }
  ) : null;
  const chipElement = /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    "div",
    {
      ...rest,
      ref,
      "aria-disabled": resolvedDisabled ? "true" : void 0,
      "data-variant": variant,
      "data-size": size,
      "data-color": color,
      "data-radius": radius,
      "data-disabled": resolvedDisabled ? "true" : "false",
      className: mergeClassName9(
        mergeClassName9("oksChip", classNames?.base),
        className
      ),
      style: { ...chipToneVars, ...style },
      children: [
        variant === "dot" ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "span",
          {
            className: mergeClassName9("oksChipDot", classNames?.dot),
            "aria-hidden": "true"
          }
        ) : null,
        avatar !== void 0 && avatar !== null ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: mergeClassName9("oksChipAvatar", classNames?.avatar), children: avatar }) : null,
        startContent,
        children !== void 0 && children !== null ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: mergeClassName9("oksChipContent", classNames?.content), children }) : null,
        closeButton ?? endContent
      ]
    }
  );
  return chipElement;
});
Chip.displayName = "Chip";

// src/components/Dropdown/Dropdown.tsx
var import_react18 = require("react");

// src/components/Dropdown/Dropdown.module.css
styleInject("@layer components {\n  :where(.oksDropdown) {\n    display: inline-block;\n  }\n  :where(.oksDropdownContent) {\n    display: inline-block;\n  }\n  :where(.oksDropdownMenu) {\n    --oks-dropdown-radius: var(--oks-radius-md, 0.375rem);\n    --oks-dropdown-bg: #fff;\n    --oks-dropdown-fg: #111827;\n    --oks-dropdown-border: color-mix(in srgb, #000 10%, transparent);\n    --oks-dropdown-shadow: 0 18px 32px color-mix(in srgb, #000 18%, transparent);\n    --oks-dropdown-padding: var(--oks-space-2, 8px);\n    --oks-dropdown-gap: 4px;\n    min-width: 220px;\n    max-width: min(90vw, 420px);\n    max-height: min(70vh, 480px);\n    overflow: auto;\n    z-index: var(--oks-z-popover, 60);\n    border-radius: var(--oks-dropdown-radius);\n    border: 1px solid var(--oks-dropdown-border);\n    background-color: var(--oks-dropdown-bg);\n    color: var(--oks-dropdown-fg);\n    box-shadow: var(--oks-dropdown-shadow);\n    padding: var(--oks-dropdown-padding);\n  }\n  :where(.oksDropdownMenu[data-variant=bordered]) {\n    --oks-dropdown-shadow: none;\n    --oks-dropdown-border: color-mix(in srgb, currentColor 22%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=flat]) {\n    --oks-dropdown-shadow: none;\n    --oks-dropdown-border: color-mix(in srgb, currentColor 10%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=light]) {\n    --oks-dropdown-shadow: 0 12px 24px color-mix(in srgb, #000 12%, transparent);\n    --oks-dropdown-border: color-mix(in srgb, currentColor 10%, transparent);\n    --oks-dropdown-bg: color-mix(in srgb, currentColor 2%, #fff);\n  }\n  :where(.oksDropdownMenu[data-variant=faded]) {\n    --oks-dropdown-shadow: 0 14px 28px color-mix(in srgb, #000 14%, transparent);\n    --oks-dropdown-border: color-mix(in srgb, currentColor 12%, transparent);\n    --oks-dropdown-bg: color-mix(in srgb, currentColor 3%, #fff);\n  }\n  :where(.oksDropdownMenu[data-variant=shadow]) {\n    --oks-dropdown-shadow: 0 26px 56px color-mix(in srgb, #000 22%, transparent);\n    --oks-dropdown-border: color-mix(in srgb, #000 6%, transparent);\n  }\n  :where(.oksDropdownTopContent),\n  :where(.oksDropdownBottomContent) {\n    padding: 6px 8px;\n  }\n  :where(.oksDropdownList) {\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-dropdown-gap);\n    outline: none;\n  }\n  :where(.oksDropdownEmpty) {\n    padding: 10px 12px;\n    opacity: 0.75;\n  }\n  :where(.oksDropdownSection) {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n  }\n  :where(.oksDropdownSectionHeading) {\n    font-size: 12px;\n    font-weight: 600;\n    opacity: 0.7;\n    padding: 6px 10px 0 10px;\n  }\n  :where(.oksDropdownSectionGroup) {\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-dropdown-gap);\n  }\n  :where(.oksDropdownSectionDivider) {\n    height: 1px;\n    background-color: color-mix(in srgb, currentColor 12%, transparent);\n    margin: 6px 0;\n    opacity: 0.5;\n  }\n  :where(.oksDropdownItem) {\n    --oks-dropdown-item-radius: calc(var(--oks-dropdown-radius) - 4px);\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    width: 100%;\n    border-radius: var(--oks-dropdown-item-radius);\n    padding: 8px 10px;\n    cursor: pointer;\n    user-select: none;\n    outline: none;\n  }\n  :where(.oksDropdownItem[data-disabled=true]) {\n    opacity: 0.55;\n    cursor: not-allowed;\n  }\n  :where(.oksDropdownItemWrapper) {\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    flex: 1 1 0%;\n    gap: 2px;\n  }\n  :where(.oksDropdownItemTitle) {\n    font-size: 14px;\n    line-height: 1.1;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  :where(.oksDropdownItemDescription) {\n    font-size: 12px;\n    line-height: 1.2;\n    opacity: 0.75;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  :where(.oksDropdownItemShortcut) {\n    font-size: 12px;\n    opacity: 0.6;\n    flex: none;\n    margin-left: 10px;\n  }\n  :where(.oksDropdownItemStartContent),\n  :where(.oksDropdownItemEndContent),\n  :where(.oksDropdownItemSelectedIcon) {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n    line-height: 0;\n  }\n  :where(.oksDropdownItemSelectedIcon) {\n    opacity: 0.9;\n    font-size: 14px;\n    color: var(--oks-dropdown-tone, currentColor);\n  }\n  :where(.oksDropdownItem:focus-visible) {\n    outline: 2px solid var(--oks-dropdown-tone, var(--oks-color-primary-500, #3b82f6));\n    outline-offset: 2px;\n  }\n  :where(.oksDropdownItemDivider) {\n    height: 1px;\n    background-color: color-mix(in srgb, currentColor 12%, transparent);\n    margin: 6px 0;\n    opacity: 0.5;\n  }\n  :where(.oksDropdownMenu[data-variant=solid]) :where(.oksDropdownItem:hover),\n  :where(.oksDropdownMenu[data-variant=solid]) :where(.oksDropdownItem[data-focused=true]) {\n    background-color: color-mix(in srgb, currentColor 10%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=light]) :where(.oksDropdownItem:hover),\n  :where(.oksDropdownMenu[data-variant=light]) :where(.oksDropdownItem[data-focused=true]) {\n    background-color: color-mix(in srgb, currentColor 7%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=flat]) :where(.oksDropdownItem:hover),\n  :where(.oksDropdownMenu[data-variant=flat]) :where(.oksDropdownItem[data-focused=true]) {\n    background-color: color-mix(in srgb, currentColor 12%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=faded]) :where(.oksDropdownItem) {\n    background-color: color-mix(in srgb, currentColor 3%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=faded]) :where(.oksDropdownItem:hover),\n  :where(.oksDropdownMenu[data-variant=faded]) :where(.oksDropdownItem[data-focused=true]) {\n    background-color: color-mix(in srgb, currentColor 10%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=bordered]) :where(.oksDropdownItem:hover),\n  :where(.oksDropdownMenu[data-variant=bordered]) :where(.oksDropdownItem[data-focused=true]) {\n    background-color: transparent;\n    box-shadow: 0 0 0 1px color-mix(in srgb, currentColor 22%, transparent) inset;\n  }\n  :where(.oksDropdownMenu[data-variant=shadow]) :where(.oksDropdownItem:hover),\n  :where(.oksDropdownMenu[data-variant=shadow]) :where(.oksDropdownItem[data-focused=true]) {\n    background-color: transparent;\n    box-shadow: 0 0 0 1px color-mix(in srgb, currentColor 12%, transparent) inset, 0 10px 18px color-mix(in srgb, #000 14%, transparent);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :where(.oksDropdownMenu) {\n      scroll-behavior: auto;\n    }\n  }\n}\n");

// src/components/Dropdown/Dropdown.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function mergeClassName10(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function getColorVar7(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
function mergeRefs(...refs) {
  return (node) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === "function") ref(node);
      else ref.current = node;
    }
  };
}
function normalizeElementKey2(key) {
  return key.startsWith(".$") ? key.slice(2) : key;
}
function parsePlacement(placement) {
  const [rawSide, rawAlign] = placement.split("-");
  const side = rawSide === "top" || rawSide === "bottom" || rawSide === "left" || rawSide === "right" ? rawSide : "bottom";
  const align = rawAlign === "start" || rawAlign === "end" ? rawAlign : "center";
  return { side, align };
}
var DropdownContext = (0, import_react18.createContext)(null);
function useDropdownContext() {
  const ctx = (0, import_react18.useContext)(DropdownContext);
  if (!ctx) throw new Error("oks-ui Dropdown: missing context.");
  return ctx;
}
var DropdownMenuContext = (0, import_react18.createContext)(null);
function useDropdownMenuContext() {
  const ctx = (0, import_react18.useContext)(DropdownMenuContext);
  if (!ctx) throw new Error("oks-ui DropdownMenu: missing context.");
  return ctx;
}
function isDropdownItemElement(node) {
  return (0, import_react18.isValidElement)(node) && node.type === DropdownItem;
}
function isDropdownSectionElement(node) {
  return (0, import_react18.isValidElement)(node) && node.type === DropdownSection;
}
function getItemTextValue(key, props) {
  if (typeof props.textValue === "string") return props.textValue;
  if (typeof props.title === "string") return props.title;
  if (typeof props.children === "string") return props.children;
  return String(key);
}
function keyFromElement(el) {
  const k = el.key;
  if (k === null || k === void 0) return null;
  if (typeof k === "string") {
    const normalized = normalizeElementKey2(k).trim();
    return normalized.length > 0 ? normalized : null;
  }
  return k;
}
function getFirstEnabled(keys, disabled) {
  for (const k of keys) {
    if (!disabled.has(k)) return k;
  }
  return null;
}
function getLastEnabled(keys, disabled) {
  for (let i = keys.length - 1; i >= 0; i--) {
    const k = keys[i];
    if (k && !disabled.has(k)) return k;
  }
  return null;
}
function getNextEnabled(keys, disabled, from, dir, wrap) {
  if (keys.length === 0) return null;
  const startIdx = from !== null ? keys.indexOf(from) : -1;
  if (!wrap) {
    for (let idx2 = startIdx + dir; idx2 >= 0 && idx2 < keys.length; idx2 += dir) {
      const k = keys[idx2];
      if (k !== null && k !== void 0 && !disabled.has(k)) return k;
    }
    return null;
  }
  let idx = startIdx;
  for (let i = 0; i < keys.length; i++) {
    idx = (idx + dir + keys.length) % keys.length;
    const k = keys[idx];
    if (k !== null && k !== void 0 && !disabled.has(k)) return k;
  }
  return null;
}
function isPrintableKey(e) {
  const key = e.key;
  if (key.length !== 1) return false;
  if (e.ctrlKey || e.metaKey || e.altKey) return false;
  return true;
}
function toKeySet(value) {
  const set = /* @__PURE__ */ new Set();
  for (const k of value ?? []) set.add(k);
  return set;
}
var Dropdown = (0, import_react18.forwardRef)((props, ref) => {
  const {
    children,
    isOpen,
    defaultOpen = false,
    onOpenChange,
    placement = "bottom-start",
    offset = 8,
    containerPadding = 8,
    shouldFlip = true,
    portalContainer,
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    shouldCloseOnInteractOutside,
    closeOnSelect = true,
    classNames,
    className,
    style
  } = props;
  const [uncontrolledOpen, setUncontrolledOpen] = (0, import_react18.useState)(defaultOpen);
  const open = isOpen !== void 0 ? isOpen : uncontrolledOpen;
  const triggerRef = (0, import_react18.useRef)(null);
  const menuRef = (0, import_react18.useRef)(null);
  const openSourceRef = (0, import_react18.useRef)("programmatic");
  const menuOnCloseRef = (0, import_react18.useRef)(void 0);
  const id = (0, import_react18.useId)();
  const triggerId = `oks-dropdown-trigger-${id}`;
  const menuId = `oks-dropdown-menu-${id}`;
  const setOpen = (0, import_react18.useCallback)(
    (next, restoreFocus = true) => {
      if (!next) menuOnCloseRef.current?.();
      if (isOpen === void 0) setUncontrolledOpen(next);
      onOpenChange?.(next);
      if (!next && restoreFocus) {
        const node = triggerRef.current;
        if (node) {
          window.requestAnimationFrame(() => {
            node.focus?.();
          });
        }
      }
    },
    [isOpen, onOpenChange]
  );
  const toggle = (0, import_react18.useCallback)(() => setOpen(!open, false), [open, setOpen]);
  (0, import_react18.useEffect)(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;
      if (isKeyboardDismissDisabled) return;
      e.preventDefault();
      setOpen(false, true);
    };
    const onPointerDown = (e) => {
      if (!isDismissable) return;
      const target = e.target;
      if (!(target instanceof Element)) return;
      const triggerEl = triggerRef.current;
      const menuEl = menuRef.current;
      if (triggerEl && triggerEl.contains(target)) return;
      if (menuEl && menuEl.contains(target)) return;
      if (shouldCloseOnInteractOutside && !shouldCloseOnInteractOutside(target))
        return;
      setOpen(false, true);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown, { capture: true });
    };
  }, [
    open,
    isDismissable,
    isKeyboardDismissDisabled,
    setOpen,
    shouldCloseOnInteractOutside
  ]);
  const ctx = {
    open,
    setOpen,
    toggle,
    openSourceRef,
    menuOnCloseRef,
    placement,
    offset,
    containerPadding,
    shouldFlip,
    portalContainer,
    isDismissable,
    isKeyboardDismissDisabled,
    ...shouldCloseOnInteractOutside ? { shouldCloseOnInteractOutside } : {},
    closeOnSelect,
    triggerRef,
    menuRef,
    triggerId,
    menuId,
    ...classNames ? { baseClassNames: classNames } : {}
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DropdownContext.Provider, { value: ctx, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "div",
    {
      ref,
      className: mergeClassName10(mergeClassName10("oksDropdown", classNames?.base), className),
      style,
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: mergeClassName10("oksDropdownContent", classNames?.content), children })
    }
  ) });
});
Dropdown.displayName = "Dropdown";
var DropdownTrigger = (0, import_react18.forwardRef)(
  (props, forwardedRef) => {
    const { children } = props;
    const ctx = useDropdownContext();
    const childAny = children;
    const childRef = childAny?.ref;
    const handleClick = (e) => {
      childAny?.props?.onClick?.(e);
      if (e?.defaultPrevented) return;
      ctx.openSourceRef.current = "pointer";
      ctx.toggle();
    };
    const handleKeyDown = (e) => {
      childAny?.props?.onKeyDown?.(e);
      if (e?.defaultPrevented) return;
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        ctx.openSourceRef.current = "keyboard";
        ctx.setOpen(true, false);
      }
    };
    return (0, import_react18.cloneElement)(children, {
      id: ctx.triggerId,
      "aria-haspopup": "menu",
      "aria-expanded": ctx.open ? "true" : "false",
      "aria-controls": ctx.menuId,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      ref: mergeRefs(childRef, forwardedRef, (node) => {
        ctx.triggerRef.current = node instanceof HTMLElement ? node : null;
      }),
      className: mergeClassName10("oksDropdownTrigger", childAny?.props?.className)
    });
  }
);
DropdownTrigger.displayName = "DropdownTrigger";
var DropdownMenu = (props) => {
  const {
    children,
    items,
    onAction,
    disabledKeys,
    onClose,
    selectionMode = "none",
    selectedKeys,
    defaultSelectedKeys,
    onSelectionChange,
    disallowEmptySelection = false,
    variant = "solid",
    color = "default",
    autoFocus = false,
    hideEmptyContent = false,
    hideSelectedIcon = false,
    shouldFocusWrap = false,
    closeOnSelect,
    disableAnimation = false,
    classNames,
    itemClasses,
    topContent,
    bottomContent,
    emptyContent = "No items."
  } = props;
  const dropdown = useDropdownContext();
  const effectiveCloseOnSelect = closeOnSelect ?? dropdown.closeOnSelect;
  const disabledSet = (0, import_react18.useMemo)(() => toKeySet(disabledKeys), [disabledKeys]);
  const toneVars = (0, import_react18.useMemo)(
    () => ({
      "--oks-dropdown-tone": getColorVar7(color, 500),
      "--oks-dropdown-tone-600": getColorVar7(color, 600)
    }),
    [color]
  );
  const [uncontrolledSelected, setUncontrolledSelected] = (0, import_react18.useState)(
    () => defaultSelectedKeys === "all" ? "all" : toKeySet(defaultSelectedKeys)
  );
  const resolvedSelected = (0, import_react18.useMemo)(() => {
    if (selectedKeys === "all") return "all";
    if (selectedKeys !== void 0) return toKeySet(selectedKeys);
    return uncontrolledSelected;
  }, [selectedKeys, uncontrolledSelected]);
  const setSelectedKeys = (0, import_react18.useCallback)(
    (next) => {
      if (selectedKeys === void 0) setUncontrolledSelected(next);
    },
    [selectedKeys]
  );
  const { side, align } = (0, import_react18.useMemo)(
    () => parsePlacement(dropdown.placement),
    [dropdown.placement]
  );
  const [position, setPosition] = (0, import_react18.useState)(null);
  const itemRefs = (0, import_react18.useRef)(/* @__PURE__ */ new Map());
  const itemInfo = (0, import_react18.useRef)(/* @__PURE__ */ new Map());
  const typeaheadRef = (0, import_react18.useRef)({
    buffer: "",
    timer: null
  });
  const listRef = (0, import_react18.useRef)(null);
  (0, import_react18.useEffect)(() => {
    if (!dropdown.open) return;
    dropdown.menuOnCloseRef.current = onClose;
    return () => {
      if (dropdown.menuOnCloseRef.current === onClose) {
        dropdown.menuOnCloseRef.current = void 0;
      }
    };
  }, [dropdown.menuOnCloseRef, dropdown.open, onClose]);
  const updatePosition = (0, import_react18.useCallback)(() => {
    const triggerEl = dropdown.triggerRef.current;
    const menuEl = dropdown.menuRef.current;
    if (!triggerEl || !menuEl) return;
    const triggerRect = triggerEl.getBoundingClientRect();
    const tooltipRect = menuEl.getBoundingClientRect();
    const result = computeTooltipPosition({
      triggerRect,
      tooltipRect,
      side,
      align,
      offset: dropdown.offset,
      collisionPadding: dropdown.containerPadding,
      shouldFlip: dropdown.shouldFlip,
      arrowSize: 0,
      arrowPaddingX: 0,
      arrowPaddingY: 0,
      strategy: "fixed"
    });
    setPosition({
      top: result.top,
      left: result.left,
      placedSide: result.placedSide,
      placedAlign: align
    });
  }, [
    align,
    dropdown.containerPadding,
    dropdown.offset,
    dropdown.shouldFlip,
    dropdown.triggerRef,
    dropdown.menuRef,
    side
  ]);
  (0, import_react18.useEffect)(() => {
    if (!dropdown.open) return;
    updatePosition();
    const onScroll = () => updatePosition();
    const onResize = () => updatePosition();
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onResize);
    };
  }, [dropdown.open, updatePosition]);
  (0, import_react18.useEffect)(() => {
    if (!dropdown.open) return;
    const menuEl = dropdown.menuRef.current;
    if (!menuEl || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => updatePosition());
    ro.observe(menuEl);
    return () => ro.disconnect();
  }, [dropdown.open, updatePosition]);
  const renderedSections = (0, import_react18.useMemo)(() => {
    if (items !== void 0) {
      const render = children;
      if (typeof render !== "function") return [];
      const outItems = [];
      for (const item of items) {
        const el = render(item);
        if (!isDropdownItemElement(el)) continue;
        const k = keyFromElement(el);
        if (!k) continue;
        outItems.push({ key: k, element: el });
      }
      return outItems.length > 0 ? [{ implicit: true, items: outItems }] : [];
    }
    const nodes = import_react18.Children.toArray(children);
    const defaultItems = [];
    const sections = [];
    for (const node of nodes) {
      if (isDropdownSectionElement(node)) {
        const sectionItems = [];
        if (node.props.items !== void 0) {
          const render = node.props.children;
          if (typeof render === "function") {
            for (const item of node.props.items) {
              const el = render(item);
              if (!isDropdownItemElement(el)) continue;
              const k = keyFromElement(el);
              if (!k) continue;
              sectionItems.push({ key: k, element: el });
            }
          }
        } else {
          for (const child of import_react18.Children.toArray(node.props.children)) {
            if (!isDropdownItemElement(child)) continue;
            const k = keyFromElement(child);
            if (!k) continue;
            sectionItems.push({ key: k, element: child });
          }
        }
        sections.push({
          ...node.props.title !== void 0 ? { title: node.props.title } : {},
          ...typeof node.props["aria-label"] === "string" ? { ariaLabel: node.props["aria-label"] } : {},
          ...node.props.hideSelectedIcon !== void 0 ? { hideSelectedIcon: node.props.hideSelectedIcon } : {},
          ...node.props.showDivider !== void 0 ? { showDivider: node.props.showDivider } : {},
          ...node.props.classNames ? { classNames: node.props.classNames } : {},
          ...node.props.itemClasses ? { itemClasses: node.props.itemClasses } : {},
          items: sectionItems
        });
        continue;
      }
      if (isDropdownItemElement(node)) {
        const k = keyFromElement(node);
        if (!k) continue;
        defaultItems.push({ key: k, element: node });
      }
    }
    const out = [];
    if (defaultItems.length > 0) out.push({ implicit: true, items: defaultItems });
    for (const s of sections) out.push(s);
    return out;
  }, [children, items]);
  const flattened = (0, import_react18.useMemo)(() => {
    const list = [];
    for (const section of renderedSections) {
      for (const item of section.items) list.push(item);
    }
    return list;
  }, [renderedSections]);
  const keys = (0, import_react18.useMemo)(() => flattened.map((it) => it.key), [flattened]);
  const itemPropsByKey = (0, import_react18.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    for (const it of flattened) map.set(it.key, it.element.props);
    return map;
  }, [flattened]);
  const computedDisabled = (0, import_react18.useMemo)(() => {
    const set = new Set(disabledSet);
    for (const it of flattened) {
      if (it.element.props.isDisabled) set.add(it.key);
    }
    return set;
  }, [disabledSet, flattened]);
  const [focusedKey, setFocusedKey] = (0, import_react18.useState)(null);
  const registerItemRef = (0, import_react18.useCallback)((key, node, info) => {
    if (node) itemRefs.current.set(key, node);
    else itemRefs.current.delete(key);
    itemInfo.current.set(key, info);
  }, []);
  const focusKey = (0, import_react18.useCallback)(
    (key) => {
      setFocusedKey(key);
      if (key === null) return;
      const node = itemRefs.current.get(key);
      if (node) node.focus();
    },
    [setFocusedKey]
  );
  (0, import_react18.useEffect)(() => {
    if (!dropdown.open) return;
    const openedFromKeyboard = dropdown.openSourceRef.current === "keyboard";
    const requested = openedFromKeyboard && autoFocus === false ? "first" : autoFocus;
    const initial = requested === true || requested === "first" ? getFirstEnabled(keys, computedDisabled) : requested === "last" ? getLastEnabled(keys, computedDisabled) : null;
    setFocusedKey(initial);
    window.requestAnimationFrame(() => {
      if (initial !== null) itemRefs.current.get(initial)?.focus();
      else listRef.current?.focus();
    });
  }, [autoFocus, computedDisabled, dropdown.open, dropdown.openSourceRef, keys]);
  const handleItemAction = (0, import_react18.useCallback)(
    (key, item) => {
      if (computedDisabled.has(key)) return;
      item.onAction?.();
      onAction?.(key);
      if (selectionMode !== "none" && item.isReadOnly !== true) {
        const enabledKeys = keys.filter((k) => !computedDisabled.has(k));
        const current = resolvedSelected === "all" ? new Set(enabledKeys) : new Set(resolvedSelected);
        let next = current;
        if (selectionMode === "single") {
          const isAlreadySelected = current.has(key);
          current.clear();
          if (!(isAlreadySelected && disallowEmptySelection === false)) {
            current.add(key);
          }
        } else {
          if (current.has(key)) {
            if (disallowEmptySelection === false || current.size > 1) current.delete(key);
          } else {
            current.add(key);
          }
        }
        next = current;
        setSelectedKeys(next);
        if (onSelectionChange) {
          const payload = next;
          payload.anchorKey = key;
          payload.currentKey = key;
          onSelectionChange(payload);
        }
      }
      const shouldClose = item.closeOnSelect ?? effectiveCloseOnSelect;
      if (shouldClose) {
        dropdown.setOpen(false, true);
        item.onClose?.();
      }
    },
    [
      effectiveCloseOnSelect,
      computedDisabled,
      disallowEmptySelection,
      dropdown,
      keys,
      onAction,
      onClose,
      onSelectionChange,
      resolvedSelected,
      selectionMode,
      setSelectedKeys
    ]
  );
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusKey(getNextEnabled(keys, computedDisabled, focusedKey, 1, shouldFocusWrap));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      focusKey(getNextEnabled(keys, computedDisabled, focusedKey, -1, shouldFocusWrap));
      return;
    }
    if (e.key === "Home") {
      e.preventDefault();
      focusKey(getFirstEnabled(keys, computedDisabled));
      return;
    }
    if (e.key === "End") {
      e.preventDefault();
      focusKey(getLastEnabled(keys, computedDisabled));
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (focusedKey !== null) {
        const itemProps = itemPropsByKey.get(focusedKey);
        if (itemProps) handleItemAction(focusedKey, itemProps);
      }
      return;
    }
    if (isPrintableKey(e)) {
      const nextBuffer = `${typeaheadRef.current.buffer}${e.key}`.toLowerCase();
      if (typeaheadRef.current.timer) window.clearTimeout(typeaheadRef.current.timer);
      typeaheadRef.current.buffer = nextBuffer;
      typeaheadRef.current.timer = window.setTimeout(() => {
        typeaheadRef.current.buffer = "";
        typeaheadRef.current.timer = null;
      }, 350);
      const startIdx = focusedKey !== null ? keys.indexOf(focusedKey) : -1;
      const len = keys.length;
      for (let i = 1; i <= len; i++) {
        const idx = (startIdx + i) % len;
        const k = keys[idx];
        if (k === null || k === void 0 || computedDisabled.has(k)) continue;
        const tv = itemInfo.current.get(k)?.textValue ?? String(k);
        if (tv.toLowerCase().startsWith(nextBuffer)) {
          focusKey(k);
          break;
        }
      }
    }
  };
  const menuCtx = {
    disabledKeys: computedDisabled,
    selectionMode,
    selectedKeys: resolvedSelected,
    setSelectedKeys,
    disallowEmptySelection,
    ...onAction ? { onAction } : {},
    ...onSelectionChange ? { onSelectionChange } : {},
    ...onClose ? { onClose } : {},
    onItemAction: handleItemAction,
    closeOnSelect: effectiveCloseOnSelect,
    hideSelectedIcon,
    setOpen: dropdown.setOpen,
    focusedKey,
    setFocusedKey,
    registerItemRef,
    ...itemClasses ? { itemClasses } : {},
    menuVariant: variant,
    menuColor: color,
    shouldFocusWrap,
    disableAnimation
  };
  if (!dropdown.open) return null;
  const hasItems = flattened.length > 0;
  const placementLabel = position === null ? dropdown.placement : `${position.placedSide}-${position.placedAlign}`;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Portal, { container: dropdown.portalContainer, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DropdownMenuContext.Provider, { value: menuCtx, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "div",
    {
      ref: (node) => {
        dropdown.menuRef.current = node;
      },
      id: dropdown.menuId,
      className: mergeClassName10("oksDropdownMenu", classNames?.base),
      "data-open": "true",
      "data-placement": placementLabel,
      "data-variant": variant,
      "data-color": color,
      style: {
        ...toneVars,
        position: "fixed",
        top: position?.top ?? -9999,
        left: position?.left ?? -9999
      },
      children: [
        topContent !== void 0 && topContent !== null ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "oksDropdownTopContent", children: topContent }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "div",
          {
            ref: listRef,
            role: "menu",
            "aria-labelledby": dropdown.triggerId,
            className: mergeClassName10("oksDropdownList", classNames?.list),
            tabIndex: -1,
            onKeyDown: handleKeyDown,
            children: hasItems ? renderedSections.map((section, idx) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DropdownSectionView, { section }, idx)) : hideEmptyContent ? null : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: mergeClassName10("oksDropdownEmpty", classNames?.emptyContent), children: emptyContent ?? null })
          }
        ),
        bottomContent !== void 0 && bottomContent !== null ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "oksDropdownBottomContent", children: bottomContent }) : null
      ]
    }
  ) }) });
};
function DropdownSectionView({ section }) {
  const needsLabel = section.implicit === true ? false : section.title === void 0 || section.title === null;
  const label = needsLabel ? section.ariaLabel : void 0;
  const nodeEnv = globalThis?.process?.env?.NODE_ENV;
  if (nodeEnv !== "production") {
    if (needsLabel && typeof label !== "string") {
      throw new Error(
        'oks-ui DropdownSection: when "title" is not provided, "aria-label" is required.'
      );
    }
  }
  const heading = section.title !== void 0 && section.title !== null ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: mergeClassName10("oksDropdownSectionHeading", section.classNames?.heading), children: section.title }) : null;
  const hasDivider = section.showDivider === true;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: mergeClassName10("oksDropdownSection", section.classNames?.base), children: [
    heading,
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "div",
      {
        role: "group",
        "aria-label": label,
        className: mergeClassName10("oksDropdownSectionGroup", section.classNames?.group),
        children: section.items.map(
          ({ key, element }) => (0, import_react18.cloneElement)(element, {
            itemKey: key,
            ...section.hideSelectedIcon !== void 0 ? { __sectionHideSelectedIcon: section.hideSelectedIcon } : {},
            ...section.itemClasses ? { __sectionItemClasses: section.itemClasses } : {}
          })
        )
      }
    ),
    hasDivider ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: mergeClassName10("oksDropdownSectionDivider", section.classNames?.divider) }) : null
  ] });
}
var DropdownItem = (0, import_react18.forwardRef)((props, ref) => {
  const {
    children,
    title,
    description,
    shortcut,
    startContent,
    endContent,
    selectedIcon,
    showDivider = false,
    href,
    target,
    rel,
    download,
    ping,
    referrerPolicy,
    isDisabled = false,
    isSelected,
    isReadOnly = false,
    hideSelectedIcon,
    closeOnSelect,
    classNames,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,
    onKeyDown,
    onKeyUp,
    onClick,
    itemKey
  } = props;
  const menu = useDropdownMenuContext();
  const key = itemKey ?? null;
  const hasKey = key !== null && key !== void 0 && String(key).trim().length > 0;
  const disabled = !hasKey || isDisabled === true || menu.disabledKeys.has(key);
  const menuSelected = menu.selectionMode === "none" ? false : menu.selectedKeys === "all" ? true : menu.selectedKeys.has(key);
  const resolvedSelected = typeof isSelected === "boolean" ? isSelected : menuSelected;
  const focused = menu.focusedKey === key;
  const role = menu.selectionMode === "multiple" ? "menuitemcheckbox" : menu.selectionMode === "single" ? "menuitemradio" : "menuitem";
  const ariaChecked = menu.selectionMode === "none" ? void 0 : resolvedSelected ? "true" : "false";
  const sectionItemClasses = props.__sectionItemClasses;
  const sectionHideSelectedIcon = props.__sectionHideSelectedIcon;
  const effectiveHideSelectedIcon = hideSelectedIcon ?? sectionHideSelectedIcon ?? menu.hideSelectedIcon;
  const label = title ?? children;
  const resolvedTextValue = getItemTextValue(key ?? "", props);
  const baseClassName = mergeClassName10(
    mergeClassName10(
      mergeClassName10("oksDropdownItem", menu.itemClasses?.base),
      sectionItemClasses?.base
    ),
    classNames?.base
  );
  const [isPressedState, setIsPressedState] = (0, import_react18.useState)(false);
  const startPress = (e) => {
    if (disabled) return;
    if (!isPressedState) {
      onPressStart?.(e);
      onPressChange?.(true);
    }
    setIsPressedState(true);
  };
  const endPress = (e) => {
    if (isPressedState) {
      onPressEnd?.(e);
      onPressChange?.(false);
    }
    setIsPressedState(false);
  };
  const activate = () => {
    if (disabled) return;
    if (!hasKey) return;
    menu.setFocusedKey(key);
    menu.onItemAction(key, props);
  };
  const Component = href ? "a" : "div";
  const itemEl = /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    Component,
    {
      ref: mergeRefs(ref, (node) => {
        if (!hasKey) return;
        menu.registerItemRef(
          key,
          node instanceof HTMLElement ? node : null,
          { key, disabled, textValue: resolvedTextValue }
        );
      }),
      role,
      "aria-checked": ariaChecked,
      "aria-disabled": disabled ? "true" : void 0,
      tabIndex: -1,
      "data-disabled": disabled ? "true" : "false",
      "data-selected": resolvedSelected ? "true" : "false",
      "data-focused": focused ? "true" : "false",
      className: baseClassName,
      href,
      target,
      rel,
      download,
      ping,
      referrerPolicy,
      onMouseMove: () => {
        if (!disabled) menu.setFocusedKey(key);
      },
      onFocus: () => {
        if (!disabled) menu.setFocusedKey(key);
      },
      onPointerDown: (e) => {
        startPress(e);
      },
      onPointerUp: (e) => {
        if (disabled) return;
        onPressUp?.(e);
        endPress(e);
      },
      onPointerLeave: (e) => {
        endPress(e);
      },
      onPointerCancel: (e) => {
        endPress(e);
      },
      onKeyDown: (e) => {
        onKeyDown?.(e);
        if (e.defaultPrevented) return;
        if (e.key === "Enter" || e.key === " ") {
          startPress(e);
        }
      },
      onKeyUp: (e) => {
        onKeyUp?.(e);
        if (e.defaultPrevented) return;
        if (e.key === "Enter" || e.key === " ") {
          if (disabled) return;
          onPressUp?.(e);
          endPress(e);
        }
      },
      onBlur: (e) => {
        endPress(e);
      },
      onClick: (e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        if (disabled) return;
        onPress?.(e);
        activate();
      },
      children: [
        startContent !== void 0 && startContent !== null ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "oksDropdownItemStartContent", "aria-hidden": "true", children: startContent }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "span",
          {
            className: mergeClassName10(
              mergeClassName10(
                mergeClassName10("oksDropdownItemWrapper", menu.itemClasses?.wrapper),
                sectionItemClasses?.wrapper
              ),
              classNames?.wrapper
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "span",
                {
                  className: mergeClassName10(
                    mergeClassName10(
                      mergeClassName10("oksDropdownItemTitle", menu.itemClasses?.title),
                      sectionItemClasses?.title
                    ),
                    classNames?.title
                  ),
                  children: label
                }
              ),
              description !== void 0 && description !== null ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "span",
                {
                  className: mergeClassName10(
                    mergeClassName10(
                      mergeClassName10("oksDropdownItemDescription", menu.itemClasses?.description),
                      sectionItemClasses?.description
                    ),
                    classNames?.description
                  ),
                  children: description
                }
              ) : null
            ]
          }
        ),
        shortcut !== void 0 && shortcut !== null ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "span",
          {
            className: mergeClassName10(
              mergeClassName10(
                mergeClassName10("oksDropdownItemShortcut", menu.itemClasses?.shortcut),
                sectionItemClasses?.shortcut
              ),
              classNames?.shortcut
            ),
            children: shortcut
          }
        ) : null,
        endContent !== void 0 && endContent !== null ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "oksDropdownItemEndContent", "aria-hidden": "true", children: endContent }) : resolvedSelected && effectiveHideSelectedIcon !== true ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "span",
          {
            className: mergeClassName10(
              mergeClassName10(
                mergeClassName10("oksDropdownItemSelectedIcon", menu.itemClasses?.selectedIcon),
                sectionItemClasses?.selectedIcon
              ),
              classNames?.selectedIcon
            ),
            "aria-hidden": "true",
            children: selectedIcon ?? "\u2713"
          }
        ) : null
      ]
    }
  );
  return showDivider ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
    itemEl,
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "oksDropdownItemDivider", "aria-hidden": "true" })
  ] }) : itemEl;
});
DropdownItem.displayName = "DropdownItem";
var DropdownSection = (props) => {
  return null;
};
DropdownSection.displayName = "DropdownSection";

// src/components/Alert/Alert.tsx
var import_react19 = require("react");

// src/components/Alert/Alert.module.css
styleInject("@layer components {\n  :where(.oksAlert) {\n    --oks-alert-accent: var(--oks-color-primary-600, #2563eb);\n    --oks-alert-bg-50: var(--oks-color-primary-50, #eff6ff);\n    --oks-alert-bg-100: var(--oks-color-primary-100, #dbeafe);\n    --oks-alert-fg-900: var(--oks-color-primary-900, #1e3a8a);\n    display: flex;\n    align-items: center;\n    gap: var(--oks-space-3, 12px);\n    padding: var(--oks-space-4, 16px);\n    border-radius: var(--oks-radius-md, 0.375rem);\n    border: 1px solid transparent;\n    background-color: var(--oks-alert-bg-50);\n    color: var(--oks-alert-fg-900);\n  }\n  :where(.oksAlert[data-variant=solid]) {\n    background-color: var(--oks-alert-accent);\n    border-color: var(--oks-alert-accent);\n    color: #fff;\n  }\n  :where(.oksAlert[data-variant=bordered]) {\n    background-color: transparent;\n    border-color: var(--oks-alert-accent);\n  }\n  :where(.oksAlert[data-variant=flat]) {\n    background-color: var(--oks-alert-bg-50);\n    border-color: transparent;\n  }\n  :where(.oksAlert[data-variant=faded]) {\n    background-color: var(--oks-alert-bg-100);\n    border-color: transparent;\n  }\n  :where(.oksAlert[data-radius=none]) {\n    border-radius: 0;\n  }\n  :where(.oksAlert[data-radius=sm]) {\n    border-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksAlert[data-radius=md]) {\n    border-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksAlert[data-radius=lg]) {\n    border-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksAlert[data-radius=full]) {\n    border-radius: var(--oks-radius-full, 9999px);\n  }\n  :where(.oksAlertMainWrapper) {\n    min-width: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-1, 4px);\n  }\n  :where(.oksAlertTitle) {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.4;\n  }\n  :where(.oksAlertDescription) {\n    font-size: 14px;\n    line-height: 1.4;\n    opacity: 0.92;\n  }\n  :where(.oksAlertIconWrapper) {\n    flex: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  :where(.oksAlertIcon) {\n    flex: none;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n  }\n  :where(.oksAlertCloseButton) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    color: inherit;\n    padding: var(--oks-space-1, 4px);\n    margin: calc(var(--oks-space-1, 4px) * -1);\n    border-radius: var(--oks-radius-sm, 0.25rem);\n    cursor: pointer;\n  }\n  :where(.oksAlertCloseButton:focus-visible) {\n    outline: 2px solid currentColor;\n    outline-offset: 2px;\n  }\n}\n");

// src/components/Alert/Alert.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function mergeClassName11(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function mapColorToStatusIconType(color) {
  if (color === "success") return "success";
  if (color === "warning") return "warning";
  if (color === "danger") return "error";
  if (color === "default") return "default";
  if (color === "info") return "info";
  return "info";
}
function getColorVar8(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
var Alert = (0, import_react19.forwardRef)((props, ref) => {
  const {
    title,
    description,
    color = "default",
    variant = "flat",
    radius = "md",
    icon,
    startContent,
    endContent,
    isVisible,
    isClosable = false,
    hideIcon = false,
    hideIconWrapper = false,
    closeButtonProps,
    onClose,
    onVisibleChange,
    classNames,
    className,
    style,
    ...rest
  } = props;
  const [uncontrolledVisible, setUncontrolledVisible] = (0, import_react19.useState)(true);
  const isControlled = typeof isVisible === "boolean";
  const resolvedVisible = isControlled ? isVisible : uncontrolledVisible;
  const hasTitle = title !== void 0 && title !== null;
  const hasDescription = description !== void 0 && description !== null;
  const toneVars = (0, import_react19.useMemo)(() => {
    const accent = getColorVar8(color, 600);
    return {
      ["--oks-alert-accent"]: accent,
      ["--oks-alert-bg-50"]: getColorVar8(color, 50),
      ["--oks-alert-bg-100"]: getColorVar8(color, 100),
      ["--oks-alert-fg-900"]: getColorVar8(color, 900)
    };
  }, [color]);
  const defaultIcon = (0, import_react19.useMemo)(
    () => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(StatusIcon, { type: mapColorToStatusIconType(color), size: 18 }),
    [color]
  );
  const handleClose = (0, import_react19.useCallback)(() => {
    onVisibleChange?.(false);
    if (!isControlled) setUncontrolledVisible(false);
    onClose?.();
  }, [isControlled, onClose, onVisibleChange]);
  if (!resolvedVisible) return null;
  const resolvedIcon = icon ?? defaultIcon;
  const shouldRenderIcon = !hideIcon && resolvedIcon !== null;
  const iconElement = shouldRenderIcon ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: mergeClassName11("oksAlertIcon", classNames?.alertIcon), children: resolvedIcon }) : null;
  const iconWrapper = shouldRenderIcon ? hideIconWrapper ? iconElement : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "span",
    {
      className: mergeClassName11(
        "oksAlertIconWrapper",
        classNames?.iconWrapper
      ),
      children: iconElement
    }
  ) : null;
  const closeButtonClassName = mergeClassName11(
    mergeClassName11("oksAlertCloseButton", classNames?.closeButton),
    closeButtonProps?.className
  );
  const closeButton = isClosable === true ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "button",
    {
      type: "button",
      "aria-label": "Close",
      ...closeButtonProps,
      className: closeButtonClassName,
      onClick: (e) => {
        closeButtonProps?.onClick?.(e);
        if (!e.defaultPrevented) handleClose();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CloseIcon, { size: 16 })
    }
  ) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "div",
    {
      ...rest,
      ref,
      role: "alert",
      "data-visible": "true",
      "data-closeable": isClosable ? "true" : "false",
      "data-has-title": hasTitle ? "true" : "false",
      "data-has-description": hasDescription ? "true" : "false",
      "data-color": color,
      "data-variant": variant,
      "data-radius": radius,
      className: mergeClassName11(
        mergeClassName11("oksAlert", classNames?.base),
        className
      ),
      style: { ...toneVars, ...style },
      children: [
        iconWrapper,
        startContent,
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
          "div",
          {
            className: mergeClassName11(
              "oksAlertMainWrapper",
              classNames?.mainWrapper
            ),
            children: [
              hasTitle ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: mergeClassName11("oksAlertTitle", classNames?.title), children: title }) : null,
              hasDescription ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                "div",
                {
                  className: mergeClassName11(
                    "oksAlertDescription",
                    classNames?.description
                  ),
                  children: description
                }
              ) : null
            ]
          }
        ),
        endContent,
        closeButton
      ]
    }
  );
});
Alert.displayName = "Alert";

// src/components/Backdrop/Backdrop.tsx
var import_react20 = require("react");

// src/components/Backdrop/Backdrop.module.css
styleInject("@layer components {\n  .oksBackdrop {\n    position: fixed;\n    inset: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .oksBackdropOverlay {\n    position: absolute;\n    inset: 0;\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: var(--oks-backdrop-duration, 300ms);\n    transition-timing-function: var(--oks-backdrop-easing, ease);\n  }\n  .oksBackdropOverlay[data-blur=true] {\n    backdrop-filter: blur(8px);\n  }\n  .oksBackdrop[data-state=open] .oksBackdropOverlay {\n    opacity: var(--oks-backdrop-opacity, 0.8);\n  }\n  .oksBackdropContent {\n    position: relative;\n    z-index: 1;\n    opacity: 0;\n    transform: translate3d(0, 0, 0);\n    transition-property: opacity, transform;\n    transition-duration: var(--oks-backdrop-duration, 300ms);\n    transition-timing-function: var(--oks-backdrop-easing, ease);\n  }\n  .oksBackdrop[data-content-size=full] .oksBackdropContent {\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n  }\n  .oksBackdrop[data-content-size=full] .oksBackdropContent > * {\n    pointer-events: auto;\n  }\n  .oksBackdrop[data-content-state=open] .oksBackdropContent {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n  .oksBackdrop[data-animation=fade][data-content-state=closed] .oksBackdropContent {\n    opacity: 0;\n    transform: translate3d(0, 0, 0);\n  }\n  .oksBackdrop[data-animation=zoom][data-content-state=closed] .oksBackdropContent {\n    opacity: 0;\n    transform: scale(0.98);\n  }\n  .oksBackdrop[data-animation=slideUp][data-content-state=closed] .oksBackdropContent {\n    opacity: 0;\n    transform: translate3d(0, 16px, 0);\n  }\n  .oksBackdrop[data-animation=slideDown][data-content-state=closed] .oksBackdropContent {\n    opacity: 0;\n    transform: translate3d(0, -16px, 0);\n  }\n  .oksBackdrop[data-animation=slideLeft][data-content-state=closed] .oksBackdropContent {\n    opacity: 0;\n    transform: translate3d(16px, 0, 0);\n  }\n  .oksBackdrop[data-animation=slideRight][data-content-state=closed] .oksBackdropContent {\n    opacity: 0;\n    transform: translate3d(-16px, 0, 0);\n  }\n  .oksBackdrop[data-motion=reduced] .oksBackdropOverlay,\n  .oksBackdrop[data-motion=reduced] .oksBackdropContent {\n    transition-duration: 0ms;\n  }\n}\n");

// src/components/Backdrop/Backdrop.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function mergeClassName12(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
var scrollLockCount = 0;
var prevDocumentOverflow = null;
function lockDocumentScroll() {
  if (typeof document === "undefined") return () => {
  };
  const el = document.documentElement;
  scrollLockCount += 1;
  if (scrollLockCount === 1) {
    prevDocumentOverflow = el.style.overflow;
    el.style.overflow = "hidden";
  }
  return () => {
    if (typeof document === "undefined") return;
    const el2 = document.documentElement;
    scrollLockCount = Math.max(0, scrollLockCount - 1);
    if (scrollLockCount === 0) {
      if (prevDocumentOverflow) {
        el2.style.overflow = prevDocumentOverflow;
      } else {
        el2.style.removeProperty("overflow");
      }
      prevDocumentOverflow = null;
    }
  };
}
function clampNumber(value, min, max) {
  const n = typeof value === "number" && Number.isFinite(value) ? value : min;
  return Math.min(max, Math.max(min, n));
}
function easingToCss(easing) {
  if (easing === "easeIn") return "ease-in";
  if (easing === "easeOut") return "ease-out";
  if (easing === "easeInOut") return "ease-in-out";
  return "ease";
}
function Backdrop(props) {
  const {
    isOpen,
    onClose,
    children,
    zIndex = 40,
    closeOnOutsideClick = true,
    closeOnEscape = true,
    lockScroll = true,
    blur = true,
    backgroundColor = "var(--oks-palette-neutral-950, #000)",
    backgroundOpacity = 80,
    animationDuration = 0.3,
    animationType = "fade",
    easing = "ease",
    portal = true,
    container,
    className,
    style,
    contentFullSize = false,
    contentClassName,
    contentStyle
  } = props;
  const reducedMotion = useReducedMotion();
  const [present, setPresent] = (0, import_react20.useState)(isOpen);
  const [backdropState, setBackdropState] = (0, import_react20.useState)(
    "closed"
  );
  const [contentState, setContentState] = (0, import_react20.useState)("closed");
  const timersRef = (0, import_react20.useRef)({});
  const durationMs = (0, import_react20.useMemo)(() => {
    if (reducedMotion) return 0;
    return Math.round(clampNumber(animationDuration, 0, 10) * 1e3);
  }, [animationDuration, reducedMotion]);
  const opacityVar = (0, import_react20.useMemo)(() => {
    const clamped = clampNumber(backgroundOpacity, 0, 100);
    return String(clamped / 100);
  }, [backgroundOpacity]);
  const rootStyle = (0, import_react20.useMemo)(() => {
    return {
      zIndex,
      ...style,
      ["--oks-backdrop-duration"]: `${durationMs}ms`,
      ["--oks-backdrop-easing"]: easingToCss(easing),
      ["--oks-backdrop-opacity"]: opacityVar
    };
  }, [durationMs, easing, opacityVar, style, zIndex]);
  (0, import_react20.useEffect)(() => {
    if (!lockScroll) return;
    if (!present) return;
    return lockDocumentScroll();
  }, [lockScroll, present]);
  (0, import_react20.useEffect)(() => {
    if (!isOpen) return;
    if (!closeOnEscape) return;
    if (typeof document === "undefined") return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeOnEscape, isOpen, onClose]);
  (0, import_react20.useEffect)(() => {
    const t = timersRef.current;
    if (typeof window !== "undefined") {
      if (t.openContent !== void 0) window.clearTimeout(t.openContent);
      if (t.closeBackdrop !== void 0) window.clearTimeout(t.closeBackdrop);
      if (t.unmount !== void 0) window.clearTimeout(t.unmount);
    }
    if (t.raf !== void 0 && typeof window !== "undefined") {
      window.cancelAnimationFrame(t.raf);
    }
    timersRef.current = {};
  }, [durationMs]);
  (0, import_react20.useEffect)(() => {
    const next = {};
    if (reducedMotion) {
      setPresent(isOpen);
      setBackdropState(isOpen ? "open" : "closed");
      setContentState(isOpen ? "open" : "closed");
      return;
    }
    if (typeof window === "undefined") {
      setPresent(isOpen);
      setBackdropState(isOpen ? "open" : "closed");
      setContentState(isOpen ? "open" : "closed");
      return;
    }
    if (isOpen) {
      setPresent(true);
      setBackdropState("closed");
      setContentState("closed");
      next.raf = window.requestAnimationFrame(() => setBackdropState("open"));
      next.openContent = window.setTimeout(
        () => setContentState("open"),
        durationMs
      );
    } else {
      setContentState("closed");
      next.closeBackdrop = window.setTimeout(
        () => setBackdropState("closed"),
        durationMs
      );
      next.unmount = window.setTimeout(() => setPresent(false), durationMs * 2);
    }
    timersRef.current = next;
    return () => {
      if (typeof window === "undefined") return;
      if (next.openContent !== void 0) window.clearTimeout(next.openContent);
      if (next.closeBackdrop !== void 0)
        window.clearTimeout(next.closeBackdrop);
      if (next.unmount !== void 0) window.clearTimeout(next.unmount);
      if (next.raf !== void 0) window.cancelAnimationFrame(next.raf);
    };
  }, [durationMs, isOpen, reducedMotion]);
  const overlay = /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "div",
    {
      className: "oksBackdropOverlay",
      "data-blur": blur ? "true" : "false",
      style: { backgroundColor },
      onPointerDown: closeOnOutsideClick ? onClose : void 0,
      "aria-hidden": "true"
    }
  );
  const content = children !== void 0 && children !== null ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "div",
    {
      className: mergeClassName12("oksBackdropContent", contentClassName),
      style: contentStyle,
      children
    }
  ) : null;
  const root = present ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "div",
    {
      className: mergeClassName12("oksBackdrop", className),
      style: rootStyle,
      "data-state": backdropState,
      "data-content-state": contentState,
      "data-animation": animationType,
      "data-motion": reducedMotion ? "reduced" : "full",
      "data-content-size": contentFullSize ? "full" : "auto",
      children: [
        overlay,
        content
      ]
    }
  ) : null;
  if (!portal) return root;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Portal, { container, children: root });
}

// src/components/Divider/Divider.tsx
var import_react21 = require("react");

// src/components/Divider/Divider.module.css
styleInject("@layer components {\n  :where(.oksDivider) {\n    --oks-divider-thickness: 1px;\n    --oks-divider-inset: 0px;\n    --oks-divider-gap: var(--oks-space-3, 12px);\n    box-sizing: border-box;\n  }\n  :where(.oksDivider[data-variant=middle]) {\n    --oks-divider-inset: 32px;\n  }\n  :where(.oksDivider[data-variant=inset]) {\n    --oks-divider-inset: 64px;\n  }\n  :where(hr.oksDivider[data-orientation=horizontal]) {\n    width: 100%;\n    height: 0;\n    margin: 0;\n    margin-inline: var(--oks-divider-inset);\n    border: 0;\n    border-top: var(--oks-divider-thickness) solid var(--oks-divider-border, rgba(0, 0, 0, 0.12));\n  }\n  :where(.oksDivider[data-orientation=vertical]) {\n    display: inline-block;\n    height: auto;\n    align-self: stretch;\n    margin-inline: var(--oks-divider-inset);\n    border-left: var(--oks-divider-thickness) solid var(--oks-divider-border, rgba(0, 0, 0, 0.12));\n  }\n  :where(.oksDividerWithText) {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    gap: var(--oks-divider-gap);\n    padding-inline: var(--oks-divider-inset);\n  }\n  :where(.oksDividerWithText .oksDividerLine) {\n    flex: 1;\n    min-width: 0;\n    border-top: var(--oks-divider-thickness) solid var(--oks-divider-border, rgba(0, 0, 0, 0.12));\n  }\n  :where(.oksDividerWithText .oksDividerLabel) {\n    font-size: 12px;\n    line-height: 1;\n    white-space: nowrap;\n    user-select: none;\n    opacity: 0.8;\n  }\n}\n");

// src/components/Divider/Divider.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function mergeClassName13(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
var ALLOWED_DEPTHS4 = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  950
];
function snapDepth4(input) {
  const clamped = clamp(input, 50, 950);
  const first = ALLOWED_DEPTHS4[0] ?? 500;
  let best = first;
  let bestDiff = Math.abs(best - clamped);
  for (const d of ALLOWED_DEPTHS4) {
    const diff = Math.abs(d - clamped);
    if (diff < bestDiff) {
      best = d;
      bestDiff = diff;
    }
  }
  return best;
}
function getToneVar(tone, depth) {
  return `var(--oks-color-${tone}-${depth}, var(--oks-color-primary-${depth}, #d1d5db))`;
}
var Divider = (0, import_react21.forwardRef)(
  (props, ref) => {
    const {
      orientation = "horizontal",
      variant = "fullWidth",
      tone,
      color,
      colorDepth = 300,
      thickness,
      children,
      className,
      style,
      ...rest
    } = props;
    const resolvedTone = tone ?? color ?? "primary";
    const resolvedDepth = typeof colorDepth === "number" ? snapDepth4(colorDepth) : 300;
    const thicknessVar = thickness !== void 0 ? {
      ["--oks-divider-thickness"]: typeof thickness === "number" ? `${thickness}px` : thickness
    } : {};
    const dividerVars = {
      ["--oks-divider-border"]: getToneVar(resolvedTone, resolvedDepth),
      ...thicknessVar
    };
    const ariaLabel = rest["aria-label"];
    const resolvedAriaLabel = typeof ariaLabel === "string" ? ariaLabel : typeof children === "string" ? children : void 0;
    const rootStyle = {
      ...dividerVars,
      ...style ?? {}
    };
    const rootClassName = mergeClassName13(
      children && orientation === "horizontal" ? "oksDivider oksDividerWithText" : "oksDivider",
      className
    );
    if (orientation === "vertical") {
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        "div",
        {
          ...rest,
          role: "separator",
          "aria-orientation": "vertical",
          "aria-label": resolvedAriaLabel,
          ref,
          className: rootClassName,
          "data-orientation": "vertical",
          "data-variant": variant,
          "data-tone": resolvedTone,
          style: rootStyle
        }
      );
    }
    if (children) {
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
        "div",
        {
          ...rest,
          role: "separator",
          "aria-orientation": "horizontal",
          "aria-label": resolvedAriaLabel,
          ref,
          className: rootClassName,
          "data-orientation": "horizontal",
          "data-variant": variant,
          "data-tone": resolvedTone,
          style: rootStyle,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "oksDividerLine", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "oksDividerLabel", children }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "oksDividerLine", "aria-hidden": "true" })
          ]
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "hr",
      {
        ...rest,
        role: "separator",
        "aria-orientation": "horizontal",
        "aria-label": resolvedAriaLabel,
        ref,
        className: rootClassName,
        "data-orientation": "horizontal",
        "data-variant": variant,
        "data-tone": resolvedTone,
        style: rootStyle
      }
    );
  }
);
Divider.displayName = "Divider";

// src/components/Drawer/Drawer.tsx
var import_react22 = require("react");

// src/components/PageTitle/PageTitle.module.css
styleInject("@layer components {\n  :where(.oksPageTitle) {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--oks-space-2, 8px);\n    color: inherit;\n  }\n  :where(.oksPageTitleIcon) {\n    display: inline-flex;\n    align-items: center;\n  }\n  :where(.oksPageTitleTitle) {\n    margin: 0;\n    padding: 0;\n    color: inherit;\n    line-height: 1.2;\n    font-weight: 600;\n  }\n  :where(h1.oksPageTitleTitle) {\n    font-size: var(--oks-page-title-h1-font-size, 32px);\n  }\n  :where(h2.oksPageTitleTitle) {\n    font-size: var(--oks-page-title-h2-font-size, 28px);\n  }\n  :where(h3.oksPageTitleTitle) {\n    font-size: var(--oks-page-title-h3-font-size, 24px);\n  }\n  :where(h4.oksPageTitleTitle) {\n    font-size: var(--oks-page-title-h4-font-size, 20px);\n  }\n  :where(h5.oksPageTitleTitle) {\n    font-size: var(--oks-page-title-h5-font-size, 18px);\n  }\n  :where(h6.oksPageTitleTitle) {\n    font-size: var(--oks-page-title-h6-font-size, 16px);\n  }\n}\n");

// src/components/PageTitle/PageTitle.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function mergeClassName14(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
var ALLOWED_DEPTHS5 = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  950
];
function snapDepth5(input) {
  const clamped = Math.min(950, Math.max(50, input));
  const first = ALLOWED_DEPTHS5[0] ?? 500;
  let best = first;
  let bestDiff = Math.abs(best - clamped);
  for (const d of ALLOWED_DEPTHS5) {
    const diff = Math.abs(d - clamped);
    if (diff < bestDiff) {
      best = d;
      bestDiff = diff;
    }
  }
  return best;
}
function normalizeIconPosition(input) {
  if (input === "end" || input === "after") return "end";
  return "start";
}
function getColorVar9(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
function getTextColor(color, depth) {
  if (color === "black" || color === "white") return color;
  return getColorVar9(color, depth);
}
function isLegacyTooltip(tooltip) {
  return typeof tooltip === "object" && tooltip !== null && "message" in tooltip && tooltip.message !== void 0;
}
function PageTitle(props) {
  const {
    title = "Title",
    as,
    tag,
    color,
    colorDepth = 500,
    icon,
    iconPosition = "start",
    tooltip,
    className,
    titleClassName,
    classNames,
    style
  } = props;
  const depth = snapDepth5(colorDepth);
  const position = normalizeIconPosition(iconPosition);
  const Tag = as ?? tag ?? "h4";
  const resolvedColor = color ?? "black";
  const tooltipInfo = (() => {
    if (tooltip === void 0 || tooltip === null) return null;
    if (tooltip === false) return null;
    if (isLegacyTooltip(tooltip)) {
      if (tooltip.message === void 0 || tooltip.message === null)
        return null;
      const placement = tooltip.side === void 0 ? void 0 : tooltip.align === "start" ? `${tooltip.side}-start` : tooltip.align === "end" ? `${tooltip.side}-end` : tooltip.side;
      const props2 = {
        ...tooltip.disabled !== void 0 ? { isDisabled: tooltip.disabled } : {},
        ...placement !== void 0 ? { placement } : {},
        ...tooltip.openDelay !== void 0 ? { delay: tooltip.openDelay } : {},
        ...tooltip.closeDelay !== void 0 ? { closeDelay: tooltip.closeDelay } : {},
        ...tooltip.className !== void 0 ? { className: tooltip.className } : {}
      };
      return { content: tooltip.message, props: props2 };
    }
    const derivedFromTitle = typeof title === "string" && title.trim().length > 0 ? title : null;
    if (tooltip === true) {
      return derivedFromTitle ? { content: derivedFromTitle, props: {} } : null;
    }
    if (typeof tooltip === "object") {
      if ("props" in tooltip || "content" in tooltip) {
        const t2 = tooltip;
        const content = t2.content !== void 0 ? t2.content : derivedFromTitle;
        return content ? { content, props: t2.props ?? {} } : null;
      }
      const t = tooltip;
      return derivedFromTitle ? { content: derivedFromTitle, props: t } : null;
    }
    return null;
  })();
  const hasTooltip = tooltipInfo !== null;
  const renderIcon = () => {
    if (icon === void 0 || icon === null) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: mergeClassName14("oksPageTitleIcon", classNames?.icon), children: icon });
  };
  const element = /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "div",
    {
      className: mergeClassName14(
        mergeClassName14("oksPageTitle", classNames?.base),
        className
      ),
      style: { color: getTextColor(resolvedColor, depth), ...style },
      "data-color": resolvedColor,
      "data-icon-position": position,
      "data-has-tooltip": hasTooltip ? "true" : "false",
      children: [
        position === "start" ? renderIcon() : null,
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Tag,
          {
            className: mergeClassName14(
              mergeClassName14("oksPageTitleTitle", classNames?.title),
              titleClassName
            ),
            children: title
          }
        ),
        position === "end" ? renderIcon() : null
      ]
    }
  );
  if (tooltipInfo) {
    const tooltipProps = {
      ...tooltipInfo.props,
      content: tooltipInfo.content
    };
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Tooltip, { ...tooltipProps, children: element });
  }
  return element;
}

// src/components/Drawer/Drawer.module.css
styleInject("@layer components {\n  :where(.oksDrawerBackdropContent) {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n  }\n  :where(.oksDrawer) {\n    --oks-drawer-width: 420px;\n    --oks-drawer-height: 360px;\n    --oks-drawer-radius: var(--oks-radius-lg, 0.5rem);\n    --oks-drawer-bg: var(--oks-palette-neutral-0, #fff);\n    --oks-drawer-shadow: 0 16px 40px rgba(0, 0, 0, 0.18), 0 8px 20px rgba(0, 0, 0, 0.12);\n    position: absolute;\n    background-color: var(--oks-drawer-bg);\n    box-shadow: var(--oks-drawer-shadow);\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  :where(.oksDrawer:focus),\n  :where(.oksDrawer:focus-visible) {\n    outline: none;\n  }\n  :where(.oksDrawer[data-position=left]) {\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: var(--oks-drawer-width);\n    max-width: calc(100vw - var(--oks-space-6, 24px));\n  }\n  :where(.oksDrawer[data-position=right]) {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: var(--oks-drawer-width);\n    max-width: calc(100vw - var(--oks-space-6, 24px));\n  }\n  :where(.oksDrawer[data-position=top]) {\n    top: 0;\n    left: 0;\n    right: 0;\n    height: var(--oks-drawer-height);\n    max-height: calc(100vh - var(--oks-space-6, 24px));\n  }\n  :where(.oksDrawer[data-position=bottom]) {\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: var(--oks-drawer-height);\n    max-height: calc(100vh - var(--oks-space-6, 24px));\n  }\n  :where(.oksDrawer[data-position=left]),\n  :where(.oksDrawer[data-position=right]) {\n    border-radius: 0;\n  }\n  :where(.oksDrawer[data-position=top]),\n  :where(.oksDrawer[data-position=bottom]) {\n    border-radius: 0;\n  }\n  :where(.oksDrawerHeader) {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--oks-space-3, 12px);\n    padding: var(--oks-space-4, 16px);\n  }\n  :where(.oksDrawerHeaderTitle) {\n    min-width: 0;\n    flex: 1;\n  }\n  :where(.oksDrawerBody) {\n    padding: var(--oks-space-4, 16px);\n    overflow: auto;\n    min-height: 0;\n    flex: 1;\n  }\n  :where(.oksDrawerFooter) {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: var(--oks-space-2, 8px);\n    padding: var(--oks-space-4, 16px);\n  }\n  :where(.oksDrawerClose) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    color: inherit;\n    padding: var(--oks-space-2, 8px);\n    margin: calc(var(--oks-space-2, 8px) * -1);\n    border-radius: var(--oks-radius-sm, 0.25rem);\n    cursor: pointer;\n    flex: 0 0 auto;\n  }\n  :where(.oksDrawerClose:focus-visible) {\n    outline: 2px solid currentColor;\n    outline-offset: 2px;\n  }\n}\n");

// src/components/Drawer/Drawer.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function mergeClassName15(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function resolveWidth(size) {
  if (typeof size === "number") return `${size}px`;
  if (size === "sm") return "360px";
  if (size === "md") return "420px";
  if (size === "lg") return "520px";
  if (typeof size === "string") return size;
  return "420px";
}
function resolveHeight(size) {
  if (typeof size === "number") return `${size}px`;
  if (size === "sm") return "280px";
  if (size === "md") return "360px";
  if (size === "lg") return "480px";
  if (typeof size === "string") return size;
  return "360px";
}
function resolveAnimationType(position) {
  if (position === "left") return "slideRight";
  if (position === "right") return "slideLeft";
  if (position === "top") return "slideDown";
  return "slideUp";
}
function Drawer(props) {
  const {
    isOpen,
    onClose,
    position = "right",
    title,
    children,
    actions,
    dismissible = true,
    closeLabel = "Close drawer",
    ariaLabel = "Drawer",
    width,
    height,
    closeOnOutsideClick = true,
    closeOnEscape = true,
    portal = true,
    container,
    zIndex,
    blur,
    backgroundOpacity,
    animationDuration,
    easing,
    initialFocusRef,
    backdrop,
    headers,
    className,
    style
  } = props;
  const reactId = (0, import_react22.useId)();
  const titleId = `oks-drawer-title-${reactId.replace(/[:]/g, "")}`;
  const panelRef = (0, import_react22.useRef)(null);
  const lastFocusedRef = (0, import_react22.useRef)(null);
  (0, import_react22.useEffect)(() => {
    if (!isOpen) return;
    if (typeof document === "undefined") return;
    lastFocusedRef.current = document.activeElement;
    let cancelled = false;
    const tryFocus = () => {
      if (cancelled) return;
      const target = initialFocusRef?.current ?? panelRef.current;
      if (target) {
        target.focus?.();
        return;
      }
      if (typeof window !== "undefined") window.requestAnimationFrame(tryFocus);
    };
    tryFocus();
    return () => {
      cancelled = true;
      const prev = lastFocusedRef.current;
      if (prev instanceof HTMLElement && document.contains(prev)) prev.focus();
    };
  }, [initialFocusRef, isOpen]);
  const resolvedWidth = (0, import_react22.useMemo)(() => resolveWidth(width), [width]);
  const resolvedHeight = (0, import_react22.useMemo)(() => resolveHeight(height), [height]);
  const cssVars = (0, import_react22.useMemo)(() => {
    return {
      ["--oks-drawer-width"]: resolvedWidth,
      ["--oks-drawer-height"]: resolvedHeight
    };
  }, [resolvedHeight, resolvedWidth]);
  const panelStyle = {
    ...cssVars,
    ...style ?? {}
  };
  const safeBackdropOverrides = (0, import_react22.useMemo)(() => {
    if (!backdrop) return {};
    const {
      isOpen: _isOpen,
      onClose: _onClose,
      children: _children,
      ...rest
    } = backdrop;
    return rest;
  }, [backdrop]);
  const mergedBackdrop = {
    closeOnOutsideClick,
    closeOnEscape,
    portal,
    ...container !== void 0 ? { container } : {},
    ...zIndex !== void 0 ? { zIndex } : {},
    ...blur !== void 0 ? { blur } : {},
    ...backgroundOpacity !== void 0 ? { backgroundOpacity } : {},
    ...animationDuration !== void 0 ? { animationDuration } : {},
    ...easing !== void 0 ? { easing } : {},
    animationType: resolveAnimationType(position),
    contentFullSize: true,
    contentClassName: "oksDrawerBackdropContent",
    ...safeBackdropOverrides
  };
  const headerTitle = headers?.title ?? title;
  const { title: _headersTitle, ...restHeaders } = headers ?? {};
  const resolvedHeaders = {
    as: "h4",
    ...restHeaders,
    ...headerTitle !== void 0 && headerTitle !== null ? { title: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { id: titleId, children: headerTitle }) } : {}
  };
  const hasHeader = dismissible || resolvedHeaders.title !== void 0;
  const ariaLabelledBy = headerTitle !== void 0 && headerTitle !== null ? titleId : void 0;
  const panelAriaProps = ariaLabelledBy !== void 0 ? { "aria-labelledby": ariaLabelledBy } : { "aria-label": ariaLabel };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Backdrop, { isOpen, onClose, ...mergedBackdrop, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    "div",
    {
      ref: panelRef,
      role: "dialog",
      "aria-modal": "true",
      tabIndex: -1,
      "data-position": position,
      className: mergeClassName15("oksDrawer", className),
      style: panelStyle,
      ...panelAriaProps,
      children: [
        hasHeader ? /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "oksDrawerHeader", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "oksDrawerHeaderTitle", children: resolvedHeaders.title !== void 0 && resolvedHeaders.title !== null ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(PageTitle, { ...resolvedHeaders }) : null }),
          dismissible ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            CloseButton,
            {
              className: "oksDrawerClose",
              ariaLabel: closeLabel,
              onClick: () => onClose?.()
            }
          ) : null
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "oksDrawerBody", children }),
        actions !== void 0 && actions !== null ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "oksDrawerFooter", children: actions }) : null
      ]
    }
  ) });
}

// src/components/Modal/Modal.tsx
var import_react23 = require("react");

// src/components/Modal/Modal.module.css
styleInject("@layer components {\n  :where(.oksModal) {\n    --oks-modal-width: 640px;\n    --oks-modal-radius: var(--oks-radius-lg, 0.5rem);\n    --oks-modal-bg: var(--oks-palette-neutral-0, #fff);\n    --oks-modal-shadow: 0 16px 40px rgba(0, 0, 0, 0.18), 0 8px 20px rgba(0, 0, 0, 0.12);\n    width: var(--oks-modal-width);\n    max-width: calc(100vw - var(--oks-space-6, 24px));\n    max-height: calc(100vh - var(--oks-space-6, 24px));\n    background-color: var(--oks-modal-bg);\n    border-radius: var(--oks-modal-radius);\n    box-shadow: var(--oks-modal-shadow);\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  :where(.oksModal:focus),\n  :where(.oksModal:focus-visible) {\n    outline: none;\n  }\n  :where(.oksModalHeader) {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--oks-space-3, 12px);\n    padding: var(--oks-space-4, 16px);\n  }\n  :where(.oksModalHeaderTitle) {\n    min-width: 0;\n    flex: 1;\n  }\n  :where(.oksModalBody) {\n    padding: var(--oks-space-4, 16px);\n    overflow: auto;\n    min-height: 0;\n    flex: 1;\n  }\n  :where(.oksModalFooter) {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: var(--oks-space-2, 8px);\n    padding: var(--oks-space-4, 16px);\n  }\n  :where(.oksModalClose) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    color: inherit;\n    padding: var(--oks-space-2, 8px);\n    margin: calc(var(--oks-space-2, 8px) * -1);\n    border-radius: var(--oks-radius-sm, 0.25rem);\n    cursor: pointer;\n    flex: 0 0 auto;\n  }\n  :where(.oksModalClose:focus-visible) {\n    outline: 2px solid currentColor;\n    outline-offset: 2px;\n  }\n}\n");

// src/components/Modal/Modal.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function mergeClassName16(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function resolveWidth2(size) {
  if (typeof size === "number") return `${size}px`;
  if (size === "sm") return "420px";
  if (size === "md") return "640px";
  if (size === "lg") return "860px";
  if (typeof size === "string") return size;
  return "640px";
}
function Modal(props) {
  const {
    isOpen,
    onClose,
    title,
    children,
    actions,
    size = "md",
    dismissible = true,
    closeLabel = "Close modal",
    closeOnOutsideClick = true,
    closeOnEscape = true,
    portal = true,
    container,
    zIndex,
    blur,
    backgroundOpacity,
    animationDuration,
    animationType,
    easing,
    initialFocusRef,
    backdrop,
    headers,
    divider,
    className,
    style
  } = props;
  const reactId = (0, import_react23.useId)();
  const titleId = `oks-modal-title-${reactId.replace(/[:]/g, "")}`;
  const panelRef = (0, import_react23.useRef)(null);
  const lastFocusedRef = (0, import_react23.useRef)(null);
  (0, import_react23.useEffect)(() => {
    if (!isOpen) return;
    if (typeof document === "undefined") return;
    lastFocusedRef.current = document.activeElement;
    let cancelled = false;
    const tryFocus = () => {
      if (cancelled) return;
      const target = initialFocusRef?.current ?? panelRef.current;
      if (target) {
        target.focus?.();
        return;
      }
      if (typeof window !== "undefined") window.requestAnimationFrame(tryFocus);
    };
    tryFocus();
    return () => {
      cancelled = true;
      const prev = lastFocusedRef.current;
      if (prev instanceof HTMLElement && document.contains(prev)) prev.focus();
    };
  }, [isOpen, initialFocusRef]);
  const resolvedWidth = (0, import_react23.useMemo)(() => resolveWidth2(size), [size]);
  const cssVars = (0, import_react23.useMemo)(() => {
    return {
      ["--oks-modal-width"]: resolvedWidth
    };
  }, [resolvedWidth]);
  const rootStyle = {
    ...cssVars,
    ...style ?? {}
  };
  const safeBackdropOverrides = (0, import_react23.useMemo)(() => {
    if (!backdrop) return {};
    const {
      isOpen: _isOpen,
      onClose: _onClose,
      children: _children,
      ...rest
    } = backdrop;
    return rest;
  }, [backdrop]);
  const mergedBackdrop = {
    closeOnOutsideClick,
    closeOnEscape,
    portal,
    ...container !== void 0 ? { container } : {},
    ...zIndex !== void 0 ? { zIndex } : {},
    ...blur !== void 0 ? { blur } : {},
    ...backgroundOpacity !== void 0 ? { backgroundOpacity } : {},
    ...animationDuration !== void 0 ? { animationDuration } : {},
    ...animationType !== void 0 ? { animationType } : {},
    ...easing !== void 0 ? { easing } : {},
    ...safeBackdropOverrides
  };
  const headerTitle = headers?.title ?? title;
  const { title: _headersTitle, ...restHeaders } = headers ?? {};
  const resolvedHeaders = {
    as: "h4",
    ...restHeaders,
    ...headerTitle !== void 0 && headerTitle !== null ? { title: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { id: titleId, children: headerTitle }) } : {}
  };
  const hasHeader = dismissible || resolvedHeaders.title !== void 0;
  const ariaLabelledBy = headerTitle !== void 0 && headerTitle !== null ? titleId : void 0;
  const mergedDivider = {
    tone: "secondary",
    colorDepth: 200,
    ...divider ?? {}
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Backdrop, { isOpen, onClose, ...mergedBackdrop, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    "div",
    {
      ref: panelRef,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": ariaLabelledBy,
      tabIndex: -1,
      className: mergeClassName16("oksModal", className),
      style: rootStyle,
      children: [
        hasHeader ? /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "oksModalHeader", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "oksModalHeaderTitle", children: resolvedHeaders.title !== void 0 && resolvedHeaders.title !== null ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(PageTitle, { ...resolvedHeaders }) : null }),
          dismissible ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            CloseButton,
            {
              className: "oksModalClose",
              ariaLabel: closeLabel,
              onClick: () => onClose?.()
            }
          ) : null
        ] }) : null,
        hasHeader ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Divider, { ...mergedDivider }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "oksModalBody", children }),
        actions !== void 0 && actions !== null ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "oksModalFooter", children: actions }) : null
      ]
    }
  ) });
}

// src/styles/cssVars.ts
function oksVar(name) {
  const normalized = name.startsWith("--") ? name : `--${name}`;
  return `var(${normalized})`;
}

// src/styles/colors.ts
var OKS_COLOR_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function oksPaletteVarName(palette, shade) {
  return `oks-palette-${palette}-${shade}`;
}
function oksColorVarName(role, shade) {
  return `oks-color-${role}-${shade}`;
}

// src/styles/radius.ts
function oksRadiusVarName(radius) {
  return `oks-radius-${radius}`;
}

// src/styles/spacing.ts
function oksSpaceVarName(space) {
  return `oks-space-${space}`;
}
//# sourceMappingURL=index.cjs.map