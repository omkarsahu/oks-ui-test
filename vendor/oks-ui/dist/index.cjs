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
  CheckboxGroupField: () => CheckboxGroupField,
  Chip: () => Chip,
  DEFAULT_VALIDATION_MESSAGES: () => DEFAULT_VALIDATION_MESSAGES,
  DatePickerField: () => DatePickerField,
  Divider: () => Divider,
  Drawer: () => Drawer,
  Dropdown: () => Dropdown,
  DropdownItem: () => DropdownItem,
  DropdownMenu: () => DropdownMenu,
  DropdownSection: () => DropdownSection,
  DropdownTrigger: () => DropdownTrigger,
  Form: () => Form,
  FormFieldSet: () => FormFieldSet,
  LoopFields: () => LoopFields,
  Modal: () => Modal,
  OKS_COLOR_SHADES: () => OKS_COLOR_SHADES,
  PageTitle: () => PageTitle,
  PasswordField: () => PasswordField,
  PhoneField: () => PhoneField,
  Portal: () => Portal,
  RadioGroupField: () => RadioGroupField,
  SelectField: () => SelectField,
  Slot: () => Slot,
  SwitchField: () => SwitchField,
  Tab: () => Tab,
  TabList: () => TabList,
  TabPanel: () => TabPanel,
  TabTrigger: () => TabTrigger,
  Tabs: () => Tabs,
  TabsLegacy: () => TabsLegacy,
  TabsRoot: () => TabsRoot,
  TextAreaField: () => TextAreaField,
  TextField: () => TextField,
  ToastProvider: () => ToastProvider,
  Tooltip: () => Tooltip,
  TooltipDefaultIcon: () => TooltipDefaultIcon,
  VALIDATION_RULES: () => VALIDATION_RULES,
  addToast: () => addToast,
  clamp: () => clamp,
  composeEventHandlers: () => composeEventHandlers,
  composeRefs: () => composeRefs,
  evaluateStrongPassword: () => evaluateStrongPassword,
  getFirstError: () => getFirstError,
  loopGroupToArray: () => loopGroupToArray,
  oksColorVarName: () => oksColorVarName,
  oksPaletteVarName: () => oksPaletteVarName,
  oksRadiusVarName: () => oksRadiusVarName,
  oksSpaceVarName: () => oksSpaceVarName,
  oksVar: () => oksVar,
  showToast: () => showToast,
  toast: () => toast,
  useFormContext: () => useFormContext,
  useOptionalFormContext: () => useOptionalFormContext,
  useReducedMotion: () => useReducedMotion,
  useToast: () => useToast,
  validateField: () => validateField,
  validateForm: () => validateForm
});
module.exports = __toCommonJS(index_exports);

// src/components/Alert/Alert.tsx
var import_react = require("react");

// src/internal/icons/StatusIcons.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...common, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
          stroke: "currentColor",
          strokeWidth: "1.6"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...common, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
          stroke: "currentColor",
          strokeWidth: "1.6"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...common, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M10 2.2 18 17.8H2L10 2.2Z",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M10 7v4.6",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...common, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
          stroke: "currentColor",
          strokeWidth: "1.6"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M7.2 7.2 12.8 12.8",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...common, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...common, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
          stroke: "currentColor",
          strokeWidth: "1.6"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M10 8.2V14",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M6.2 6.2 13.8 13.8",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
function EyeIcon({ size = 18, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M2.2 10s2.8-5.8 7.8-5.8S17.8 10 17.8 10s-2.8 5.8-7.8 5.8S2.2 10 2.2 10Z",
            stroke: "currentColor",
            strokeWidth: "1.6",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M10 12.8a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z",
            stroke: "currentColor",
            strokeWidth: "1.6"
          }
        )
      ]
    }
  );
}
function EyeOffIcon({ size = 18, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M3.3 4.2 16.7 17.6",
            stroke: "currentColor",
            strokeWidth: "1.6",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M7.2 7.6A2.8 2.8 0 0 0 12.4 13",
            stroke: "currentColor",
            strokeWidth: "1.6",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M4.1 7.3C2.9 8.7 2.2 10 2.2 10s2.8 5.8 7.8 5.8c1.4 0 2.6-.3 3.6-.8",
            stroke: "currentColor",
            strokeWidth: "1.6",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M6 4.9C7.2 4.4 8.5 4.2 10 4.2c5 0 7.8 5.8 7.8 5.8s-.8 1.7-2.3 3.3",
            stroke: "currentColor",
            strokeWidth: "1.6",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}

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

// src/components/Alert/Alert.module.css
styleInject("@layer components {\n  :where(.oksAlert) {\n    --oks-alert-accent: var(--oks-color-primary-600, #2563eb);\n    --oks-alert-bg-50: var(--oks-color-primary-50, #eff6ff);\n    --oks-alert-bg-100: var(--oks-color-primary-100, #dbeafe);\n    --oks-alert-fg-900: var(--oks-color-primary-900, #1e3a8a);\n    display: flex;\n    align-items: center;\n    gap: var(--oks-space-3, 12px);\n    padding: var(--oks-space-4, 16px);\n    border-radius: var(--oks-radius-md, 0.375rem);\n    border: 1px solid transparent;\n    background-color: var(--oks-alert-bg-50);\n    color: var(--oks-alert-fg-900);\n  }\n  :where(.oksAlert[data-variant=solid]) {\n    background-color: var(--oks-alert-accent);\n    border-color: var(--oks-alert-accent);\n    color: #fff;\n  }\n  :where(.oksAlert[data-variant=bordered]) {\n    background-color: transparent;\n    border-color: var(--oks-alert-accent);\n  }\n  :where(.oksAlert[data-variant=flat]) {\n    background-color: var(--oks-alert-bg-50);\n    border-color: transparent;\n  }\n  :where(.oksAlert[data-variant=faded]) {\n    background-color: var(--oks-alert-bg-100);\n    border-color: transparent;\n  }\n  :where(.oksAlert[data-radius=none]) {\n    border-radius: 0;\n  }\n  :where(.oksAlert[data-radius=sm]) {\n    border-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksAlert[data-radius=md]) {\n    border-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksAlert[data-radius=lg]) {\n    border-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksAlert[data-radius=full]) {\n    border-radius: var(--oks-radius-full, 9999px);\n  }\n  :where(.oksAlertMainWrapper) {\n    min-width: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-1, 4px);\n  }\n  :where(.oksAlertTitle) {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.4;\n  }\n  :where(.oksAlertDescription) {\n    font-size: 14px;\n    line-height: 1.4;\n    opacity: 0.92;\n  }\n  :where(.oksAlertIconWrapper) {\n    flex: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  :where(.oksAlertIcon) {\n    flex: none;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n  }\n  :where(.oksAlertCloseButton) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    color: inherit;\n    padding: var(--oks-space-1, 4px);\n    margin: calc(var(--oks-space-1, 4px) * -1);\n    border-radius: var(--oks-radius-sm, 0.25rem);\n    cursor: pointer;\n  }\n  :where(.oksAlertCloseButton:focus-visible) {\n    outline: 2px solid currentColor;\n    outline-offset: 2px;\n  }\n}\n");

// src/components/Alert/Alert.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function mergeClassName(a, b) {
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
function getColorVar(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
var Alert = (0, import_react.forwardRef)((props, ref) => {
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
  const [uncontrolledVisible, setUncontrolledVisible] = (0, import_react.useState)(true);
  const isControlled = typeof isVisible === "boolean";
  const resolvedVisible = isControlled ? isVisible : uncontrolledVisible;
  const hasTitle = title !== void 0 && title !== null;
  const hasDescription = description !== void 0 && description !== null;
  const toneVars = (0, import_react.useMemo)(() => {
    const accent = getColorVar(color, 600);
    return {
      ["--oks-alert-accent"]: accent,
      ["--oks-alert-bg-50"]: getColorVar(color, 50),
      ["--oks-alert-bg-100"]: getColorVar(color, 100),
      ["--oks-alert-fg-900"]: getColorVar(color, 900)
    };
  }, [color]);
  const defaultIcon = (0, import_react.useMemo)(
    () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StatusIcon, { type: mapColorToStatusIconType(color), size: 18 }),
    [color]
  );
  const handleClose = (0, import_react.useCallback)(() => {
    onVisibleChange?.(false);
    if (!isControlled) setUncontrolledVisible(false);
    onClose?.();
  }, [isControlled, onClose, onVisibleChange]);
  if (!resolvedVisible) return null;
  const resolvedIcon = icon ?? defaultIcon;
  const shouldRenderIcon = !hideIcon && resolvedIcon !== null;
  const iconElement = shouldRenderIcon ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: mergeClassName("oksAlertIcon", classNames?.alertIcon), children: resolvedIcon }) : null;
  const iconWrapper = shouldRenderIcon ? hideIconWrapper ? iconElement : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    {
      className: mergeClassName(
        "oksAlertIconWrapper",
        classNames?.iconWrapper
      ),
      children: iconElement
    }
  ) : null;
  const closeButtonClassName = mergeClassName(
    mergeClassName("oksAlertCloseButton", classNames?.closeButton),
    closeButtonProps?.className
  );
  const closeButton = isClosable === true ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CloseIcon, { size: 16 })
    }
  ) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
      className: mergeClassName(
        mergeClassName("oksAlert", classNames?.base),
        className
      ),
      style: { ...toneVars, ...style },
      children: [
        iconWrapper,
        startContent,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "div",
          {
            className: mergeClassName(
              "oksAlertMainWrapper",
              classNames?.mainWrapper
            ),
            children: [
              hasTitle ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: mergeClassName("oksAlertTitle", classNames?.title), children: title }) : null,
              hasDescription ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "div",
                {
                  className: mergeClassName(
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

// src/components/Avatar/Avatar.tsx
var import_react5 = __toESM(require("react"), 1);

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

// src/components/Tooltip/Tooltip.tsx
var import_react4 = require("react");

// src/motion/useReducedMotion.ts
var import_react2 = require("react");
function useReducedMotion() {
  const [reduced, setReduced] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
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
var import_react3 = require("react");
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
  if (!(0, import_react3.isValidElement)(children)) return null;
  const mergedProps = mergeProps(slotProps, children.props);
  return (0, import_react3.cloneElement)(children, mergedProps);
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
var import_jsx_runtime3 = require("react/jsx-runtime");
function mergeClassName2(a, b) {
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "path",
          {
            d: "M7 12.25C4.1005 12.25 1.75 9.8995 1.75 7C1.75 4.1005 4.1005 1.75 7 1.75C9.8995 1.75 12.25 4.1005 12.25 7C12.25 9.8995 9.8995 12.25 7 12.25Z",
            stroke: "currentColor",
            strokeWidth: "1.2"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "path",
          {
            d: "M7 6.125V10",
            stroke: "currentColor",
            strokeWidth: "1.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
  const reactId = (0, import_react4.useId)();
  const tooltipId = `oks-tooltip-${reactId.replace(/[:]/g, "")}`;
  const isControlled = isOpen !== void 0;
  const [uncontrolledOpen, setUncontrolledOpen] = (0, import_react4.useState)(defaultOpen);
  const actualOpen = !isDisabled && (isControlled ? isOpen : uncontrolledOpen);
  const [mounted, setMounted] = (0, import_react4.useState)(false);
  const reducedMotion = useReducedMotion();
  const triggerRef = (0, import_react4.useRef)(null);
  const contentRef = (0, import_react4.useRef)(null);
  const openTimerRef = (0, import_react4.useRef)(null);
  const closeTimerRef = (0, import_react4.useRef)(null);
  const [position, setPosition] = (0, import_react4.useState)(null);
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
  const { side, align } = (0, import_react4.useMemo)(() => {
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
  (0, import_react4.useEffect)(() => {
    setMounted(true);
    return () => {
      if (typeof window === "undefined") return;
      clearOpenTimer();
      clearCloseTimer();
    };
  }, []);
  (0, import_react4.useEffect)(() => {
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
  (0, import_react4.useEffect)(() => {
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
  (0, import_react4.useEffect)(() => {
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
  const triggerNode = (0, import_react4.isValidElement)(children) ? (() => {
    const child = children;
    const triggerRefProp = child.ref;
    return (0, import_react4.cloneElement)(child, {
      ref: composeRefs(triggerRefProp, (node) => {
        triggerRef.current = node;
      }),
      ...getTriggerProps(child.props)
    });
  })() : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
  const actualPlacement = (0, import_react4.useMemo)(() => {
    const placedSide = position?.placedSide ?? side;
    const suffix = align === "center" ? "" : `-${align}`;
    return `${placedSide}${suffix}`;
  }, [position?.placedSide, side, align]);
  const tooltipNode = mounted && !isDisabled ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
      className: mergeClassName2(
        mergeClassName2("oksTooltipBase", classNames?.base),
        className
      ),
      style: { ...tooltipVars, ...contentStyle },
      children: [
        showArrow ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "span",
          {
            className: mergeClassName2("oksTooltipArrow", classNames?.arrow)
          }
        ) : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "div",
          {
            className: mergeClassName2("oksTooltipContent", classNames?.content),
            children: content
          }
        )
      ]
    }
  ) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "span",
      {
        className: "oksTooltipTrigger",
        "data-open": actualOpen ? "true" : "false",
        "data-trigger-scale": triggerScaleOnOpen ? "true" : "false",
        "data-motion": disableAnimation || reducedMotion ? "reduced" : "default",
        children: triggerNode
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Portal, { container: portalContainer, children: tooltipNode })
  ] });
}

// src/components/Avatar/AvatarIcon.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function AvatarIcon({ size = 18, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            d: "M10 10.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z",
            stroke: "currentColor",
            strokeWidth: "1.6"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_jsx_runtime5 = require("react/jsx-runtime");
function mergeClassName3(a, b) {
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
var Avatar = (0, import_react5.forwardRef)((props, ref) => {
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
  const [imgFailed, setImgFailed] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => setImgFailed(false), [src]);
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
  const baseClassName = mergeClassName3(
    mergeClassName3("oksAvatar", classNames?.base),
    className
  );
  const fallbackContent = fallback !== void 0 && fallback !== null ? fallback : resolvedName.trim().length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "span",
    {
      className: mergeClassName3("oksAvatarInitials", classNames?.name),
      "aria-hidden": "true",
      children: getInitials(resolvedName)
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "span",
    {
      className: mergeClassName3("oksAvatarFallbackIcon", classNames?.icon),
      "aria-hidden": "true",
      children: icon ?? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(AvatarIcon, {})
    }
  );
  const avatarElement = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
      children: shouldShowFallback ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "span",
        {
          className: mergeClassName3("oksAvatarFallback", classNames?.fallback),
          children: fallbackContent
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        ImgComponent,
        {
          ...imgProps,
          className: mergeClassName3(
            mergeClassName3("oksAvatarImage", classNames?.img),
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
  const tooltipNode = resolvedDisabled ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "oksAvatarTooltipWrapper", children: avatarElement }) : avatarElement;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Tooltip, { ...tooltipProps, content: tooltipContent, children: tooltipNode });
});
Avatar.displayName = "Avatar";
var AvatarGroup = (0, import_react5.forwardRef)(
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
    const childrenArray = import_react5.default.Children.toArray(children);
    const resolvedMax = Math.max(0, Math.floor(max));
    const overflowCount = typeof total === "number" ? total - resolvedMax : childrenArray.length - resolvedMax;
    const resolvedOverflow = overflowCount > 0 ? overflowCount : 0;
    const rootStyle = {
      ...style ?? {}
    };
    const rootClassName = mergeClassName3(
      mergeClassName3("oksAvatarGroup", classNames?.base),
      className
    );
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "div",
            {
              className: "oksAvatarGroupStack",
              "data-grid": isGrid ? "true" : void 0,
              children: childrenArray.slice(0, resolvedMax).map((child, index) => {
                if (import_react5.default.isValidElement(child)) {
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
                  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "oksAvatarGroupItem", children: import_react5.default.cloneElement(child, childProps) }, index);
                }
                return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "oksAvatarGroupItem", children: child }, index);
              })
            }
          ),
          resolvedOverflow > 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "span",
            {
              className: mergeClassName3(
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

// src/components/Backdrop/Backdrop.tsx
var import_react6 = require("react");

// src/components/Backdrop/Backdrop.module.css
styleInject("@layer components {\n  .oksBackdrop {\n    position: fixed;\n    inset: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .oksBackdropOverlay {\n    position: absolute;\n    inset: 0;\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: var(--oks-backdrop-duration, 300ms);\n    transition-timing-function: var(--oks-backdrop-easing, ease);\n  }\n  .oksBackdropOverlay[data-blur=true] {\n    backdrop-filter: blur(8px);\n  }\n  .oksBackdrop[data-state=open] .oksBackdropOverlay {\n    opacity: var(--oks-backdrop-opacity, 0.8);\n  }\n  .oksBackdropContent {\n    position: relative;\n    z-index: 1;\n    opacity: 0;\n    transform: translate3d(0, 0, 0);\n    transition-property: opacity, transform;\n    transition-duration: var(--oks-backdrop-duration, 300ms);\n    transition-timing-function: var(--oks-backdrop-easing, ease);\n  }\n  .oksBackdrop[data-content-size=full] .oksBackdropContent {\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n  }\n  .oksBackdrop[data-content-size=full] .oksBackdropContent > * {\n    pointer-events: auto;\n  }\n  .oksBackdrop[data-content-state=open] .oksBackdropContent {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n  .oksBackdrop[data-animation=fade][data-content-state=closed] .oksBackdropContent {\n    opacity: 0;\n    transform: translate3d(0, 0, 0);\n  }\n  .oksBackdrop[data-animation=zoom][data-content-state=closed] .oksBackdropContent {\n    opacity: 0;\n    transform: scale(0.98);\n  }\n  .oksBackdrop[data-animation=slideUp][data-content-state=closed] .oksBackdropContent {\n    opacity: 0;\n    transform: translate3d(0, 16px, 0);\n  }\n  .oksBackdrop[data-animation=slideDown][data-content-state=closed] .oksBackdropContent {\n    opacity: 0;\n    transform: translate3d(0, -16px, 0);\n  }\n  .oksBackdrop[data-animation=slideLeft][data-content-state=closed] .oksBackdropContent {\n    opacity: 0;\n    transform: translate3d(16px, 0, 0);\n  }\n  .oksBackdrop[data-animation=slideRight][data-content-state=closed] .oksBackdropContent {\n    opacity: 0;\n    transform: translate3d(-16px, 0, 0);\n  }\n  .oksBackdrop[data-motion=reduced] .oksBackdropOverlay,\n  .oksBackdrop[data-motion=reduced] .oksBackdropContent {\n    transition-duration: 0ms;\n  }\n}\n");

// src/components/Backdrop/Backdrop.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function mergeClassName4(a, b) {
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
  const [present, setPresent] = (0, import_react6.useState)(isOpen);
  const [backdropState, setBackdropState] = (0, import_react6.useState)(
    "closed"
  );
  const [contentState, setContentState] = (0, import_react6.useState)("closed");
  const timersRef = (0, import_react6.useRef)({});
  const durationMs = (0, import_react6.useMemo)(() => {
    if (reducedMotion) return 0;
    return Math.round(clampNumber(animationDuration, 0, 10) * 1e3);
  }, [animationDuration, reducedMotion]);
  const opacityVar = (0, import_react6.useMemo)(() => {
    const clamped = clampNumber(backgroundOpacity, 0, 100);
    return String(clamped / 100);
  }, [backgroundOpacity]);
  const rootStyle = (0, import_react6.useMemo)(() => {
    return {
      zIndex,
      ...style,
      ["--oks-backdrop-duration"]: `${durationMs}ms`,
      ["--oks-backdrop-easing"]: easingToCss(easing),
      ["--oks-backdrop-opacity"]: opacityVar
    };
  }, [durationMs, easing, opacityVar, style, zIndex]);
  (0, import_react6.useEffect)(() => {
    if (!lockScroll) return;
    if (!present) return;
    return lockDocumentScroll();
  }, [lockScroll, present]);
  (0, import_react6.useEffect)(() => {
    if (!isOpen) return;
    if (!closeOnEscape) return;
    if (typeof document === "undefined") return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeOnEscape, isOpen, onClose]);
  (0, import_react6.useEffect)(() => {
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
  (0, import_react6.useEffect)(() => {
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
  const overlay = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      className: "oksBackdropOverlay",
      "data-blur": blur ? "true" : "false",
      style: { backgroundColor },
      onPointerDown: closeOnOutsideClick ? onClose : void 0,
      "aria-hidden": "true"
    }
  );
  const content = children !== void 0 && children !== null ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      className: mergeClassName4("oksBackdropContent", contentClassName),
      style: contentStyle,
      children
    }
  ) : null;
  const root = present ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "div",
    {
      className: mergeClassName4("oksBackdrop", className),
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Portal, { container, children: root });
}

// src/components/Badge/Badge.tsx
var import_react7 = require("react");

// src/components/Badge/Badge.module.css
styleInject("@layer components {\n  :where(.oksBadge) {\n    --oks-badge-min-size: 20px;\n    --oks-badge-padding-x: 7px;\n    --oks-badge-font-size: 12px;\n    --oks-badge-font-weight: 600;\n    --oks-badge-border-radius: var(--oks-radius-md, 0.375rem);\n    --oks-badge-outline-width: 2px;\n    --oks-badge-offset: 0px;\n    --oks-badge-bg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-badge-fg: var(--oks-badge-solid-fg, #fff);\n    --oks-badge-shadow: none;\n    --oks-badge-outline: var(--oks-color-surface, #fff);\n    --oks-badge-border-width: 0px;\n    --oks-badge-border-color: transparent;\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    vertical-align: middle;\n  }\n  :where(.oksBadgeBadge) {\n    min-width: var(--oks-badge-min-size);\n    height: var(--oks-badge-min-size);\n    padding: 0 var(--oks-badge-padding-x);\n    border-radius: var(--oks-badge-border-radius);\n    border: var(--oks-badge-border-width) solid var(--oks-badge-border-color);\n    background-color: var(--oks-badge-bg);\n    color: var(--oks-badge-fg);\n    box-shadow: var(--oks-badge-shadow);\n    font: inherit;\n    font-size: var(--oks-badge-font-size);\n    font-weight: var(--oks-badge-font-weight);\n    line-height: 1;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    user-select: none;\n    white-space: nowrap;\n    box-sizing: border-box;\n    position: absolute;\n    z-index: 1;\n  }\n  :where(.oksBadge[data-outline=true]) :where(.oksBadgeBadge) {\n    box-shadow: 0 0 0 var(--oks-badge-outline-width) var(--oks-badge-outline), var(--oks-badge-shadow);\n  }\n  :where(.oksBadge[data-shape=circle]) :where(.oksBadgeBadge) {\n    --oks-badge-border-radius: 9999px;\n  }\n  :where(.oksBadge[data-one-char=true]) :where(.oksBadgeBadge) {\n    --oks-badge-padding-x: 0px;\n    width: var(--oks-badge-min-size);\n  }\n  :where(.oksBadge[data-dot=true]) :where(.oksBadgeBadge) {\n    --oks-badge-min-size: 10px;\n    --oks-badge-padding-x: 0px;\n    width: var(--oks-badge-min-size);\n  }\n  :where(.oksBadge[data-size=sm]) {\n    --oks-badge-min-size: 18px;\n    --oks-badge-padding-x: 6px;\n    --oks-badge-font-size: 11px;\n  }\n  :where(.oksBadge[data-size=md]) {\n    --oks-badge-min-size: 20px;\n    --oks-badge-padding-x: 7px;\n    --oks-badge-font-size: 12px;\n  }\n  :where(.oksBadge[data-size=lg]) {\n    --oks-badge-min-size: 24px;\n    --oks-badge-padding-x: 8px;\n    --oks-badge-font-size: 13px;\n  }\n  :where(.oksBadge[data-placement=top-right]) :where(.oksBadgeBadge) {\n    top: var(--oks-badge-offset);\n    right: var(--oks-badge-offset);\n    transform: translate(50%, -50%);\n  }\n  :where(.oksBadge[data-placement=top-left]) :where(.oksBadgeBadge) {\n    top: var(--oks-badge-offset);\n    left: var(--oks-badge-offset);\n    transform: translate(-50%, -50%);\n  }\n  :where(.oksBadge[data-placement=bottom-right]) :where(.oksBadgeBadge) {\n    bottom: var(--oks-badge-offset);\n    right: var(--oks-badge-offset);\n    transform: translate(50%, 50%);\n  }\n  :where(.oksBadge[data-placement=bottom-left]) :where(.oksBadgeBadge) {\n    bottom: var(--oks-badge-offset);\n    left: var(--oks-badge-offset);\n    transform: translate(-50%, 50%);\n  }\n  :where(.oksBadge[data-variant=solid]) {\n    --oks-badge-bg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-badge-fg: var(--oks-badge-solid-fg, #fff);\n  }\n  :where(.oksBadge[data-variant=bordered]) {\n    --oks-badge-bg: var(--oks-badge-outline, var(--oks-color-surface, #fff));\n    --oks-badge-fg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-badge-border-width: 1px;\n    --oks-badge-border-color: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksBadge[data-variant=light]) {\n    --oks-badge-bg: var(--oks-badge-tone-50, var(--oks-color-primary-50, #eff6ff));\n    --oks-badge-fg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksBadge[data-variant=flat]) {\n    --oks-badge-bg: var(--oks-badge-tone-100, var(--oks-color-primary-100, #dbeafe));\n    --oks-badge-fg: var(--oks-badge-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  :where(.oksBadge[data-variant=faded]) {\n    --oks-badge-bg: var(--oks-badge-tone-50, var(--oks-color-primary-50, #eff6ff));\n    --oks-badge-fg: var(--oks-badge-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  :where(.oksBadge[data-variant=shadow]) {\n    --oks-badge-bg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-badge-fg: var(--oks-badge-solid-fg, #fff);\n    --oks-badge-shadow: 0 10px 18px color-mix(in srgb, #000 18%, transparent);\n  }\n  :where(.oksBadge[data-variant=ghost]) {\n    --oks-badge-bg: var(--oks-badge-outline, var(--oks-color-surface, #fff));\n    --oks-badge-fg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-badge-border-width: 1px;\n    --oks-badge-border-color: var(--oks-badge-tone-100, var(--oks-color-primary-100, #dbeafe));\n  }\n  :where(.oksBadge[data-disable-animation=false]) :where(.oksBadgeBadge) {\n    transition:\n      transform 140ms ease,\n      opacity 140ms ease,\n      background-color 140ms ease,\n      color 140ms ease,\n      box-shadow 140ms ease;\n  }\n  :where(.oksBadge[data-disable-animation=true]) :where(.oksBadgeBadge) {\n    transition: none;\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :where(.oksBadgeBadge) {\n      transition: none;\n    }\n  }\n}\n");

// src/components/Badge/Badge.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function mergeClassName5(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function getColorVar4(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
var Badge = (0, import_react7.forwardRef)((props, ref) => {
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
  const badgeEl = shouldRenderBadge ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: mergeClassName5("oksBadgeBadge", classNames?.badge), children: isDot ? null : displayContent }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
      className: mergeClassName5(
        mergeClassName5("oksBadge", classNames?.base),
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

// src/components/Button/Button.tsx
var import_react8 = require("react");

// src/components/Button/Button.module.css
styleInject("@layer components {\n  :where(.oksButton) {\n    --oks-button-height: 40px;\n    --oks-button-padding-x: var(--oks-space-4, 16px);\n    --oks-button-padding-y: var(--oks-space-2, 8px);\n    --oks-button-gap: var(--oks-space-2, 8px);\n    --oks-button-font-size: 14px;\n    --oks-button-icon-size: 18px;\n    --oks-button-radius: var(--oks-radius-md, 0.375rem);\n    --oks-button-border-width: 1px;\n    --oks-button-ripple-color: color-mix(in srgb, currentColor 35%, transparent);\n    --oks-button-bg: transparent;\n    --oks-button-fg: currentColor;\n    --oks-button-border: transparent;\n    --oks-button-shadow: none;\n    appearance: none;\n    border: var(--oks-button-border-width) solid var(--oks-button-border);\n    border-radius: var(--oks-button-radius);\n    background-color: var(--oks-button-bg);\n    color: var(--oks-button-fg);\n    box-shadow: var(--oks-button-shadow);\n    font: inherit;\n    font-size: var(--oks-button-font-size);\n    font-weight: 400;\n    line-height: 1.1;\n    height: var(--oks-button-height);\n    padding: var(--oks-button-padding-y) var(--oks-button-padding-x);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--oks-button-gap);\n    cursor: pointer;\n    user-select: none;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    isolation: isolate;\n    transition:\n      background-color 140ms ease,\n      border-color 140ms ease,\n      box-shadow 140ms ease,\n      color 140ms ease,\n      opacity 140ms ease,\n      transform 140ms ease;\n  }\n  :where(.oksButton[data-motion=reduced]) {\n    transition: none;\n    transform: none;\n  }\n  :where(.oksButton[data-full-width=true]) {\n    width: 100%;\n    flex: 1 1 0%;\n    min-width: 0;\n  }\n  :where(.oksButton[data-disabled=true]),\n  :where(.oksButton:disabled) {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n  :where(.oksButton[data-radius=none]) {\n    --oks-button-radius: 0;\n  }\n  :where(.oksButton[data-radius=sm]) {\n    --oks-button-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksButton[data-radius=md]) {\n    --oks-button-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksButton[data-radius=lg]) {\n    --oks-button-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksButton[data-radius=full]) {\n    --oks-button-radius: 9999px;\n  }\n  :where(.oksButton[data-focus-visible=true]),\n  :where(.oksButton:focus-visible) {\n    outline: 2px solid var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n    outline-offset: 2px;\n  }\n  :where(.oksButton[data-size=sm]) {\n    --oks-button-height: 36px;\n    --oks-button-padding-x: var(--oks-space-3, 12px);\n    --oks-button-padding-y: var(--oks-space-2, 8px);\n    --oks-button-font-size: 13px;\n    --oks-button-icon-size: 18px;\n  }\n  :where(.oksButton[data-size=md]) {\n    --oks-button-height: 40px;\n    --oks-button-padding-x: var(--oks-space-4, 16px);\n    --oks-button-padding-y: var(--oks-space-2, 8px);\n    --oks-button-font-size: 14px;\n    --oks-button-icon-size: 20px;\n  }\n  :where(.oksButton[data-size=lg]) {\n    --oks-button-height: 44px;\n    --oks-button-padding-x: var(--oks-space-5, 20px);\n    --oks-button-padding-y: var(--oks-space-3, 12px);\n    --oks-button-font-size: 15px;\n    --oks-button-icon-size: 22px;\n  }\n  :where(.oksButton[data-icon-only=true]) {\n    width: var(--oks-button-height);\n    padding: 0;\n    flex: none;\n  }\n  :where(.oksButtonStartContent),\n  :where(.oksButtonEndContent),\n  :where(.oksButtonIconOnly) {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n    font-size: var(--oks-button-icon-size);\n    line-height: 0;\n  }\n  :where(.oksButtonStartContent) :where(svg),\n  :where(.oksButtonEndContent) :where(svg),\n  :where(.oksButtonIconOnly) :where(svg) {\n    width: 1em;\n    height: 1em;\n    display: block;\n  }\n  :where(.oksButtonLabel) {\n    display: inline-block;\n    min-width: 0;\n  }\n  :where(.oksButtonSpinnerSlot) {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n  }\n  :where(.oksButtonSpinner) {\n    width: 1em;\n    height: 1em;\n    border-radius: 9999px;\n    border: 2px solid color-mix(in srgb, currentColor 25%, transparent);\n    border-top-color: currentColor;\n    animation: oksButtonSpinner 700ms linear infinite;\n  }\n  @keyframes oksButtonSpinner {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  :where(.oksButton[data-loading=true]) {\n    cursor: progress;\n  }\n  :where(.oksButton[data-variant=solid]) {\n    --oks-button-bg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-button-fg: #fff;\n    --oks-button-border: transparent;\n    --oks-button-ripple-color: color-mix(in srgb, white 55%, transparent);\n  }\n  :where(.oksButton[data-variant=solid][data-hover=true]:not([data-disabled=true])) {\n    --oks-button-bg: var(--oks-button-tone-hover, var(--oks-color-primary-600, #2563eb));\n  }\n  :where(.oksButton[data-variant=solid][data-pressed=true]:not([data-disabled=true])) {\n    --oks-button-bg: var(--oks-button-tone-active, var(--oks-color-primary-700, #1d4ed8));\n  }\n  :where(.oksButton[data-variant=shadow]) {\n    --oks-button-bg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-button-fg: #fff;\n    --oks-button-shadow: 0 10px 25px rgba(0, 0, 0, 0.22);\n    --oks-button-ripple-color: color-mix(in srgb, white 55%, transparent);\n  }\n  :where(.oksButton[data-variant=shadow][data-hover=true]:not([data-disabled=true])) {\n    --oks-button-bg: var(--oks-button-tone-hover, var(--oks-color-primary-600, #2563eb));\n    --oks-button-shadow: 0 12px 28px rgba(0, 0, 0, 0.26);\n  }\n  :where(.oksButton[data-variant=bordered]) {\n    --oks-button-bg: transparent;\n    --oks-button-fg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-button-border: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksButton[data-variant=bordered][data-hover=true]:not([data-disabled=true])) {\n    --oks-button-bg: var(--oks-button-tone-50, var(--oks-color-primary-50, #eff6ff));\n  }\n  :where(.oksButton[data-variant=bordered][data-pressed=true]:not([data-disabled=true])) {\n    --oks-button-bg: var(--oks-button-tone-100, var(--oks-color-primary-100, #dbeafe));\n  }\n  :where(.oksButton[data-variant=flat]) {\n    --oks-button-bg: var(--oks-button-tone-50, var(--oks-color-primary-50, #eff6ff));\n    --oks-button-fg: var(--oks-button-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  :where(.oksButton[data-variant=flat][data-hover=true]:not([data-disabled=true])) {\n    --oks-button-bg: var(--oks-button-tone-100, var(--oks-color-primary-100, #dbeafe));\n  }\n  :where(.oksButton[data-variant=flat][data-pressed=true]:not([data-disabled=true])) {\n    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 20%, transparent );\n  }\n  :where(.oksButton[data-variant=light]) {\n    --oks-button-bg: transparent;\n    --oks-button-fg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksButton[data-variant=light][data-hover=true]:not([data-disabled=true])) {\n    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 12%, transparent );\n  }\n  :where(.oksButton[data-variant=light][data-pressed=true]:not([data-disabled=true])) {\n    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 18%, transparent );\n  }\n  :where(.oksButton[data-variant=faded]) {\n    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 10%, transparent );\n    --oks-button-fg: var(--oks-button-tone-700, var(--oks-color-primary-700, #1d4ed8));\n    --oks-button-border: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 22%, transparent );\n  }\n  :where(.oksButton[data-variant=ghost]) {\n    --oks-button-bg: transparent;\n    --oks-button-fg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-button-border: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 35%, transparent );\n  }\n  :where(.oksButton[data-variant=ghost][data-hover=true]:not([data-disabled=true])) {\n    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 10%, transparent );\n  }\n  :where(.oksButton[data-variant=ghost][data-pressed=true]:not([data-disabled=true])) {\n    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 16%, transparent );\n  }\n  :where(.oksButtonRipple) {\n    position: absolute;\n    border-radius: 9999px;\n    background:\n      radial-gradient(\n        circle,\n        var(--oks-button-ripple-color, rgba(255, 255, 255, 0.35)) 0%,\n        color-mix(in srgb, var(--oks-button-ripple-color, rgba(255, 255, 255, 0.35)) 65%, transparent) 60%,\n        transparent 75%);\n    transform: translate(-50%, -50%) scale(0);\n    opacity: 0;\n    pointer-events: none;\n    z-index: 0;\n    will-change: transform, opacity;\n    animation: oksButtonRipple 600ms ease-out;\n  }\n  :where(.oksButton) :where(.oksButtonStartContent),\n  :where(.oksButton) :where(.oksButtonEndContent),\n  :where(.oksButton) :where(.oksButtonIconOnly),\n  :where(.oksButton) :where(.oksButtonSpinnerSlot),\n  :where(.oksButton) :where(.oksButtonLabel) {\n    position: relative;\n    z-index: 1;\n  }\n}\n@keyframes oksButtonRipple {\n  0% {\n    transform: translate(-50%, -50%) scale(0);\n    opacity: 0.45;\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  :where(.oksButton) {\n    transition: none;\n    transform: none;\n  }\n  :where(.oksButtonRipple) {\n    display: none;\n  }\n  :where(.oksButtonSpinner) {\n    animation: none;\n  }\n}\n");

// src/components/Button/Button.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function mergeClassName6(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function getColorVar5(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
var Button = (0, import_react8.forwardRef)(
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
    const [ripples, setRipples] = (0, import_react8.useState)([]);
    const skipMouseRippleRef = (0, import_react8.useRef)(false);
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
      "--oks-button-tone": getColorVar5(color, 500),
      "--oks-button-tone-hover": getColorVar5(color, 600),
      "--oks-button-tone-active": getColorVar5(color, 700),
      "--oks-button-tone-50": getColorVar5(color, 50),
      "--oks-button-tone-100": getColorVar5(color, 100),
      "--oks-button-tone-700": getColorVar5(color, 700)
    };
    const getRippleId = () => {
      const uuid = globalThis?.crypto?.randomUUID?.();
      return typeof uuid === "string" ? uuid : `${Date.now()}-${Math.random()}`;
    };
    const isReducedMotion = typeof globalThis.matchMedia === "function" && globalThis.matchMedia("(prefers-reduced-motion: reduce)")?.matches;
    const [isHovered, setIsHovered] = (0, import_react8.useState)(false);
    const [isFocused, setIsFocused] = (0, import_react8.useState)(false);
    const [isFocusVisible, setIsFocusVisible] = (0, import_react8.useState)(false);
    const [isPressed, setIsPressed] = (0, import_react8.useState)(false);
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
    const createRipple = (0, import_react8.useCallback)(
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
    const removeRipple = (0, import_react8.useCallback)((id) => {
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
    const defaultSpinner = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "oksButtonSpinner", "aria-hidden": "true" });
    const resolvedSpinner = spinner ?? defaultSpinner;
    const iconOnlyLoading = isIconOnly && isLoading;
    const buttonElement = /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
        className: mergeClassName6("oksButton", className),
        style: { ...toneVars, ...style },
        children: [
          ripples.map((ripple) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
          isLoading && spinnerPlacement === "start" && !iconOnlyLoading ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "oksButtonSpinnerSlot", "data-placement": "start", children: resolvedSpinner }) : null,
          startContent !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "oksButtonStartContent", children: startContent }) : null,
          iconOnlyLoading ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "oksButtonIconOnly", "aria-hidden": "true", children: resolvedSpinner }) : isIconOnly ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "oksButtonIconOnly", children }) : children !== void 0 && children !== null ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "oksButtonLabel", children }) : null,
          endContent !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "oksButtonEndContent", children: endContent }) : null,
          isLoading && spinnerPlacement === "end" && !iconOnlyLoading ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "oksButtonSpinnerSlot", "data-placement": "end", children: resolvedSpinner }) : null
        ]
      }
    );
    return buttonElement;
  }
);
Button.displayName = "Button";

// src/components/Button/ButtonGroup.tsx
var import_react9 = require("react");

// src/components/Button/ButtonGroup.module.css
styleInject("@layer components {\n  :where(.oksButtonGroup) {\n    display: inline-flex;\n    align-items: stretch;\n  }\n  :where(.oksButtonGroup[data-full-width=true]) {\n    width: 100%;\n  }\n  :where(.oksButtonGroup) > :where(.oksButton) {\n    border-radius: 0;\n  }\n  :where(.oksButtonGroup) > :where(.oksButton:not(:first-child)) {\n    margin-left: calc(var(--oks-button-border-width, 1px) * -1);\n  }\n  :where(.oksButtonGroup) > :where(.oksButton:only-child) {\n    border-radius: var(--oks-button-radius);\n  }\n  :where(.oksButtonGroup) > :where(.oksButton:first-child) {\n    border-top-left-radius: var(--oks-button-radius);\n    border-bottom-left-radius: var(--oks-button-radius);\n  }\n  :where(.oksButtonGroup) > :where(.oksButton:last-child) {\n    border-top-right-radius: var(--oks-button-radius);\n    border-bottom-right-radius: var(--oks-button-radius);\n  }\n  :where(.oksButtonGroup[data-full-width=true]) > :where(.oksButton) {\n    flex: 1 1 0%;\n    min-width: 0;\n  }\n  :where(.oksButtonGroup) > :where(.oksButton[data-hover=true]),\n  :where(.oksButtonGroup) > :where(.oksButton[data-focus-visible=true]) {\n    z-index: 1;\n  }\n}\n");

// src/components/Button/ButtonGroup.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function mergeClassName7(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
var ButtonGroup = (0, import_react9.forwardRef)(
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
    const enhancedChildren = import_react9.Children.map(children, (child) => {
      if (!(0, import_react9.isValidElement)(child) || child.type !== Button) return child;
      const nextProps = {};
      if (child.props.variant === void 0) nextProps.variant = variant;
      if (child.props.color === void 0) nextProps.color = color;
      if (child.props.size === void 0) nextProps.size = size;
      if (child.props.radius === void 0) nextProps.radius = radius;
      if (child.props.fullWidth === void 0) nextProps.fullWidth = fullWidth;
      if (child.props.isDisabled === void 0) nextProps.isDisabled = isDisabled;
      return (0, import_react9.cloneElement)(child, nextProps);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
        className: mergeClassName7("oksButtonGroup", className),
        style,
        children: enhancedChildren
      }
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";

// src/components/Chip/Chip.tsx
var import_react10 = require("react");

// src/components/Chip/Chip.module.css
styleInject("@layer components {\n  :where(.oksChip) {\n    --oks-chip-height: 28px;\n    --oks-chip-padding-x: var(--oks-space-3, 12px);\n    --oks-chip-gap: var(--oks-space-2, 8px);\n    --oks-chip-font-size: 13px;\n    --oks-chip-radius: 9999px;\n    --oks-chip-border-width: 1px;\n    --oks-chip-bg: transparent;\n    --oks-chip-fg: currentColor;\n    --oks-chip-border: transparent;\n    --oks-chip-shadow: none;\n    display: inline-flex;\n    align-items: center;\n    gap: var(--oks-chip-gap);\n    height: var(--oks-chip-height);\n    padding: 0 var(--oks-chip-padding-x);\n    border-radius: var(--oks-chip-radius);\n    border: var(--oks-chip-border-width) solid var(--oks-chip-border);\n    background-color: var(--oks-chip-bg);\n    color: var(--oks-chip-fg);\n    box-shadow: var(--oks-chip-shadow);\n    font: inherit;\n    font-size: var(--oks-chip-font-size);\n    line-height: 1;\n    user-select: none;\n    white-space: nowrap;\n    box-sizing: border-box;\n    transition:\n      background-color 140ms ease,\n      border-color 140ms ease,\n      box-shadow 140ms ease,\n      color 140ms ease,\n      opacity 140ms ease;\n  }\n  :where(.oksChip[data-disabled=true]) {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n  :where(.oksChipContent) {\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  :where(.oksChipDot) {\n    width: 6px;\n    height: 6px;\n    border-radius: 9999px;\n    background-color: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n    flex: none;\n  }\n  :where(.oksChipAvatar) {\n    width: calc(var(--oks-chip-height) - 8px);\n    height: calc(var(--oks-chip-height) - 8px);\n    border-radius: 9999px;\n    overflow: hidden;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n  }\n  :where(.oksChipAvatar) :where(img) {\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: cover;\n  }\n  :where(.oksChipCloseButton) {\n    width: calc(var(--oks-chip-height) - 6px);\n    height: calc(var(--oks-chip-height) - 6px);\n    border-radius: 9999px;\n    border: 1px solid transparent;\n    background-color: transparent;\n    color: currentColor;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    padding: 0;\n    margin-right: calc(var(--oks-chip-padding-x) * -0.6);\n    opacity: 0.7;\n  }\n  :where(.oksChipCloseButton:hover) {\n    opacity: 1;\n    background-color: color-mix(in srgb, currentColor 12%, transparent);\n  }\n  :where(.oksChipCloseButton:active) {\n    opacity: 1;\n    background-color: color-mix(in srgb, currentColor 20%, transparent);\n  }\n  :where(.oksChipCloseButton:focus-visible) {\n    outline: 2px solid var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n    outline-offset: 2px;\n  }\n  :where(.oksChipCloseButton:disabled),\n  :where(.oksChip[data-disabled=true]) :where(.oksChipCloseButton) {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  :where(.oksChip[data-radius=none]) {\n    --oks-chip-radius: 0;\n  }\n  :where(.oksChip[data-radius=sm]) {\n    --oks-chip-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksChip[data-radius=md]) {\n    --oks-chip-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksChip[data-radius=lg]) {\n    --oks-chip-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksChip[data-radius=full]) {\n    --oks-chip-radius: 9999px;\n  }\n  :where(.oksChip[data-size=sm]) {\n    --oks-chip-height: 24px;\n    --oks-chip-padding-x: var(--oks-space-2, 8px);\n    --oks-chip-gap: var(--oks-space-1, 4px);\n    --oks-chip-font-size: 12px;\n  }\n  :where(.oksChip[data-size=md]) {\n    --oks-chip-height: 28px;\n    --oks-chip-padding-x: var(--oks-space-3, 12px);\n    --oks-chip-gap: var(--oks-space-2, 8px);\n    --oks-chip-font-size: 13px;\n  }\n  :where(.oksChip[data-size=lg]) {\n    --oks-chip-height: 32px;\n    --oks-chip-padding-x: var(--oks-space-4, 16px);\n    --oks-chip-gap: var(--oks-space-2, 8px);\n    --oks-chip-font-size: 14px;\n  }\n  :where(.oksChip[data-variant=solid]) {\n    --oks-chip-bg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-chip-fg: var(--oks-chip-solid-fg, white);\n  }\n  :where(.oksChip[data-variant=bordered]) {\n    --oks-chip-border: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-chip-fg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksChip[data-variant=light]) {\n    --oks-chip-fg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksChip[data-variant=flat]) {\n    --oks-chip-bg: color-mix( in srgb, var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6)) 16%, transparent );\n    --oks-chip-fg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n  }\n  :where(.oksChip[data-variant=faded]) {\n    --oks-chip-bg: var(--oks-chip-tone-50, var(--oks-color-primary-50, #eff6ff));\n    --oks-chip-border: var(--oks-chip-tone-100, var(--oks-color-primary-100, #dbeafe));\n    --oks-chip-fg: var(--oks-chip-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  :where(.oksChip[data-variant=shadow]) {\n    --oks-chip-bg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-chip-fg: var(--oks-chip-solid-fg, white);\n    --oks-chip-shadow: 0 10px 18px color-mix(in srgb, #000 20%, transparent);\n  }\n  :where(.oksChip[data-variant=dot]) {\n    --oks-chip-bg: var(--oks-chip-tone-50, var(--oks-color-primary-50, #eff6ff));\n    --oks-chip-border: var(--oks-chip-tone-100, var(--oks-color-primary-100, #dbeafe));\n    --oks-chip-fg: var(--oks-chip-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :where(.oksChip) {\n      transition: none;\n    }\n  }\n}\n");

// src/components/Chip/Chip.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function mergeClassName8(a, b) {
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
var Chip = (0, import_react10.forwardRef)((props, ref) => {
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
  const closeIcon = endContent ?? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { "aria-hidden": "true", children: "\xD7" });
  const closeButton = typeof onClose === "function" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "button",
    {
      type: "button",
      className: mergeClassName8("oksChipCloseButton", classNames?.closeButton),
      "aria-label": "Close",
      disabled: resolvedDisabled,
      onClick: (e) => {
        e.stopPropagation();
        if (!resolvedDisabled) onClose(e);
      },
      children: closeIcon
    }
  ) : null;
  const chipElement = /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
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
      className: mergeClassName8(
        mergeClassName8("oksChip", classNames?.base),
        className
      ),
      style: { ...chipToneVars, ...style },
      children: [
        variant === "dot" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "span",
          {
            className: mergeClassName8("oksChipDot", classNames?.dot),
            "aria-hidden": "true"
          }
        ) : null,
        avatar !== void 0 && avatar !== null ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: mergeClassName8("oksChipAvatar", classNames?.avatar), children: avatar }) : null,
        startContent,
        children !== void 0 && children !== null ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: mergeClassName8("oksChipContent", classNames?.content), children }) : null,
        closeButton ?? endContent
      ]
    }
  );
  return chipElement;
});
Chip.displayName = "Chip";

// src/components/Divider/Divider.tsx
var import_react11 = require("react");

// src/components/Divider/Divider.module.css
styleInject("@layer components {\n  :where(.oksDivider) {\n    --oks-divider-thickness: 1px;\n    --oks-divider-inset: 0px;\n    --oks-divider-gap: var(--oks-space-3, 12px);\n    box-sizing: border-box;\n  }\n  :where(.oksDivider[data-variant=middle]) {\n    --oks-divider-inset: 32px;\n  }\n  :where(.oksDivider[data-variant=inset]) {\n    --oks-divider-inset: 64px;\n  }\n  :where(hr.oksDivider[data-orientation=horizontal]) {\n    width: 100%;\n    height: 0;\n    margin: 0;\n    margin-inline: var(--oks-divider-inset);\n    border: 0;\n    border-top: var(--oks-divider-thickness) solid var(--oks-divider-border, rgba(0, 0, 0, 0.12));\n  }\n  :where(.oksDivider[data-orientation=vertical]) {\n    display: inline-block;\n    height: auto;\n    align-self: stretch;\n    margin-inline: var(--oks-divider-inset);\n    border-left: var(--oks-divider-thickness) solid var(--oks-divider-border, rgba(0, 0, 0, 0.12));\n  }\n  :where(.oksDividerWithText) {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    gap: var(--oks-divider-gap);\n    padding-inline: var(--oks-divider-inset);\n  }\n  :where(.oksDividerWithText .oksDividerLine) {\n    flex: 1;\n    min-width: 0;\n    border-top: var(--oks-divider-thickness) solid var(--oks-divider-border, rgba(0, 0, 0, 0.12));\n  }\n  :where(.oksDividerWithText .oksDividerLabel) {\n    font-size: 12px;\n    line-height: 1;\n    white-space: nowrap;\n    user-select: none;\n    opacity: 0.8;\n  }\n}\n");

// src/components/Divider/Divider.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function mergeClassName9(a, b) {
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
function getColorVar7(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #d1d5db))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
var Divider = (0, import_react11.forwardRef)(
  (props, ref) => {
    const {
      orientation = "horizontal",
      variant = "fullWidth",
      color,
      colorDepth = 300,
      thickness,
      children,
      className,
      style,
      ...rest
    } = props;
    const resolvedColor = color ?? "primary";
    const resolvedDepth = typeof colorDepth === "number" ? snapDepth4(colorDepth) : 300;
    const thicknessVar = thickness !== void 0 ? {
      ["--oks-divider-thickness"]: typeof thickness === "number" ? `${thickness}px` : thickness
    } : {};
    const dividerVars = {
      ["--oks-divider-border"]: getColorVar7(
        resolvedColor,
        resolvedDepth
      ),
      ...thicknessVar
    };
    const ariaLabel = rest["aria-label"];
    const resolvedAriaLabel = typeof ariaLabel === "string" ? ariaLabel : typeof children === "string" ? children : void 0;
    const rootStyle = {
      ...dividerVars,
      ...style ?? {}
    };
    const rootClassName = mergeClassName9(
      children && orientation === "horizontal" ? "oksDivider oksDividerWithText" : "oksDivider",
      className
    );
    if (orientation === "vertical") {
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
          "data-color": resolvedColor,
          style: rootStyle
        }
      );
    }
    if (children) {
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
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
          "data-color": resolvedColor,
          style: rootStyle,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "oksDividerLine", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "oksDividerLabel", children }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "oksDividerLine", "aria-hidden": "true" })
          ]
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
        "data-color": resolvedColor,
        style: rootStyle
      }
    );
  }
);
Divider.displayName = "Divider";

// src/components/Drawer/Drawer.tsx
var import_react13 = require("react");

// src/components/PageTitle/PageTitle.module.css
styleInject("@layer components {\n  :where(.oksPageTitle) {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--oks-space-2, 8px);\n    color: inherit;\n  }\n  :where(.oksPageTitleIcon) {\n    display: inline-flex;\n    align-items: center;\n  }\n  :where(.oksPageTitleTitle) {\n    margin: 0;\n    padding: 0;\n    color: inherit;\n    line-height: 1.2;\n    font-weight: 600;\n  }\n  :where(h1.oksPageTitleTitle) {\n    font-size: var(--oks-page-title-h1-font-size, 32px);\n  }\n  :where(h2.oksPageTitleTitle) {\n    font-size: var(--oks-page-title-h2-font-size, 28px);\n  }\n  :where(h3.oksPageTitleTitle) {\n    font-size: var(--oks-page-title-h3-font-size, 24px);\n  }\n  :where(h4.oksPageTitleTitle) {\n    font-size: var(--oks-page-title-h4-font-size, 20px);\n  }\n  :where(h5.oksPageTitleTitle) {\n    font-size: var(--oks-page-title-h5-font-size, 18px);\n  }\n  :where(h6.oksPageTitleTitle) {\n    font-size: var(--oks-page-title-h6-font-size, 16px);\n  }\n}\n");

// src/components/PageTitle/PageTitle.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function mergeClassName10(a, b) {
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
function getColorVar8(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
function getTextColor(color, depth) {
  if (color === "black" || color === "white") return color;
  return getColorVar8(color, depth);
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: mergeClassName10("oksPageTitleIcon", classNames?.icon), children: icon });
  };
  const element = /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "div",
    {
      className: mergeClassName10(
        mergeClassName10("oksPageTitle", classNames?.base),
        className
      ),
      style: { color: getTextColor(resolvedColor, depth), ...style },
      "data-color": resolvedColor,
      "data-icon-position": position,
      "data-has-tooltip": hasTooltip ? "true" : "false",
      children: [
        position === "start" ? renderIcon() : null,
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          Tag,
          {
            className: mergeClassName10(
              mergeClassName10("oksPageTitleTitle", classNames?.title),
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Tooltip, { ...tooltipProps, children: element });
  }
  return element;
}

// src/internal/CloseButton/CloseButton.tsx
var import_react12 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
function mergeClassName11(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
var CloseButton = (0, import_react12.forwardRef)(
  ({ ariaLabel, iconSize = 16, icon, iconClassName, ...rest }, ref) => {
    const resolvedIcon = (() => {
      if (icon === void 0) return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CloseIcon, { size: iconSize, className: iconClassName });
      if (!iconClassName) return icon;
      if ((0, import_react12.isValidElement)(icon))
        return (0, import_react12.cloneElement)(icon, {
          className: mergeClassName11(icon.props.className, iconClassName)
        });
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: iconClassName, children: icon });
    })();
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", { ref, type: "button", "aria-label": ariaLabel, ...rest, children: resolvedIcon });
  }
);
CloseButton.displayName = "CloseButton";

// src/components/Drawer/Drawer.module.css
styleInject("@layer components {\n  :where(.oksDrawerBackdropContent) {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n  }\n  :where(.oksDrawer) {\n    --oks-drawer-width: 420px;\n    --oks-drawer-height: 360px;\n    --oks-drawer-radius: var(--oks-radius-lg, 0.5rem);\n    --oks-drawer-bg: var(--oks-palette-neutral-0, #fff);\n    --oks-drawer-shadow: 0 16px 40px rgba(0, 0, 0, 0.18), 0 8px 20px rgba(0, 0, 0, 0.12);\n    position: absolute;\n    background-color: var(--oks-drawer-bg);\n    box-shadow: var(--oks-drawer-shadow);\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  :where(.oksDrawer:focus),\n  :where(.oksDrawer:focus-visible) {\n    outline: none;\n  }\n  :where(.oksDrawer[data-position=left]) {\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: var(--oks-drawer-width);\n    max-width: calc(100vw - var(--oks-space-6, 24px));\n  }\n  :where(.oksDrawer[data-position=right]) {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: var(--oks-drawer-width);\n    max-width: calc(100vw - var(--oks-space-6, 24px));\n  }\n  :where(.oksDrawer[data-position=top]) {\n    top: 0;\n    left: 0;\n    right: 0;\n    height: var(--oks-drawer-height);\n    max-height: calc(100vh - var(--oks-space-6, 24px));\n  }\n  :where(.oksDrawer[data-position=bottom]) {\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: var(--oks-drawer-height);\n    max-height: calc(100vh - var(--oks-space-6, 24px));\n  }\n  :where(.oksDrawer[data-position=left]),\n  :where(.oksDrawer[data-position=right]) {\n    border-radius: 0;\n  }\n  :where(.oksDrawer[data-position=top]),\n  :where(.oksDrawer[data-position=bottom]) {\n    border-radius: 0;\n  }\n  :where(.oksDrawerHeader) {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--oks-space-3, 12px);\n    padding: var(--oks-space-4, 16px);\n  }\n  :where(.oksDrawerHeaderTitle) {\n    min-width: 0;\n    flex: 1;\n  }\n  :where(.oksDrawerBody) {\n    padding: var(--oks-space-4, 16px);\n    overflow: auto;\n    min-height: 0;\n    flex: 1;\n  }\n  :where(.oksDrawerFooter) {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: var(--oks-space-2, 8px);\n    padding: var(--oks-space-4, 16px);\n  }\n  :where(.oksDrawerClose) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    color: inherit;\n    padding: var(--oks-space-2, 8px);\n    margin: calc(var(--oks-space-2, 8px) * -1);\n    border-radius: var(--oks-radius-sm, 0.25rem);\n    cursor: pointer;\n    flex: 0 0 auto;\n  }\n  :where(.oksDrawerClose:focus-visible) {\n    outline: 2px solid currentColor;\n    outline-offset: 2px;\n  }\n}\n");

// src/components/Drawer/Drawer.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function mergeClassName12(a, b) {
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
  const reactId = (0, import_react13.useId)();
  const titleId = `oks-drawer-title-${reactId.replace(/[:]/g, "")}`;
  const panelRef = (0, import_react13.useRef)(null);
  const lastFocusedRef = (0, import_react13.useRef)(null);
  (0, import_react13.useEffect)(() => {
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
  const resolvedWidth = (0, import_react13.useMemo)(() => resolveWidth(width), [width]);
  const resolvedHeight = (0, import_react13.useMemo)(() => resolveHeight(height), [height]);
  const cssVars = (0, import_react13.useMemo)(() => {
    return {
      ["--oks-drawer-width"]: resolvedWidth,
      ["--oks-drawer-height"]: resolvedHeight
    };
  }, [resolvedHeight, resolvedWidth]);
  const panelStyle = {
    ...cssVars,
    ...style ?? {}
  };
  const safeBackdropOverrides = (0, import_react13.useMemo)(() => {
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
    ...headerTitle !== void 0 && headerTitle !== null ? { title: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { id: titleId, children: headerTitle }) } : {}
  };
  const hasHeader = dismissible || resolvedHeaders.title !== void 0;
  const ariaLabelledBy = headerTitle !== void 0 && headerTitle !== null ? titleId : void 0;
  const panelAriaProps = ariaLabelledBy !== void 0 ? { "aria-labelledby": ariaLabelledBy } : { "aria-label": ariaLabel };
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Backdrop, { isOpen, onClose, ...mergedBackdrop, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "div",
    {
      ref: panelRef,
      role: "dialog",
      "aria-modal": "true",
      tabIndex: -1,
      "data-position": position,
      className: mergeClassName12("oksDrawer", className),
      style: panelStyle,
      ...panelAriaProps,
      children: [
        hasHeader ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "oksDrawerHeader", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "oksDrawerHeaderTitle", children: resolvedHeaders.title !== void 0 && resolvedHeaders.title !== null ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(PageTitle, { ...resolvedHeaders }) : null }),
          dismissible ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            CloseButton,
            {
              className: "oksDrawerClose",
              ariaLabel: closeLabel,
              onClick: () => onClose?.()
            }
          ) : null
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "oksDrawerBody", children }),
        actions !== void 0 && actions !== null ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "oksDrawerFooter", children: actions }) : null
      ]
    }
  ) });
}

// src/components/Dropdown/Dropdown.tsx
var import_react14 = require("react");

// src/components/Dropdown/Dropdown.module.css
styleInject("@layer components {\n  :where(.oksDropdown) {\n    display: inline-block;\n  }\n  :where(.oksDropdownContent) {\n    display: inline-block;\n  }\n  :where(.oksDropdownMenu) {\n    --oks-dropdown-radius: var(--oks-radius-md, 0.375rem);\n    --oks-dropdown-bg: #fff;\n    --oks-dropdown-fg: #111827;\n    --oks-dropdown-border: color-mix(in srgb, #000 10%, transparent);\n    --oks-dropdown-shadow: 0 18px 32px color-mix(in srgb, #000 18%, transparent);\n    --oks-dropdown-padding: var(--oks-space-2, 8px);\n    --oks-dropdown-gap: 4px;\n    min-width: 220px;\n    max-width: min(90vw, 420px);\n    max-height: min(70vh, 480px);\n    overflow: auto;\n    z-index: var(--oks-z-popover, 60);\n    border-radius: var(--oks-dropdown-radius);\n    border: 1px solid var(--oks-dropdown-border);\n    background-color: var(--oks-dropdown-bg);\n    color: var(--oks-dropdown-fg);\n    box-shadow: var(--oks-dropdown-shadow);\n    padding: var(--oks-dropdown-padding);\n  }\n  :where(.oksDropdownMenu[data-variant=bordered]) {\n    --oks-dropdown-shadow: none;\n    --oks-dropdown-border: color-mix(in srgb, currentColor 22%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=flat]) {\n    --oks-dropdown-shadow: none;\n    --oks-dropdown-border: color-mix(in srgb, currentColor 10%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=light]) {\n    --oks-dropdown-shadow: 0 12px 24px color-mix(in srgb, #000 12%, transparent);\n    --oks-dropdown-border: color-mix(in srgb, currentColor 10%, transparent);\n    --oks-dropdown-bg: color-mix(in srgb, currentColor 2%, #fff);\n  }\n  :where(.oksDropdownMenu[data-variant=faded]) {\n    --oks-dropdown-shadow: 0 14px 28px color-mix(in srgb, #000 14%, transparent);\n    --oks-dropdown-border: color-mix(in srgb, currentColor 12%, transparent);\n    --oks-dropdown-bg: color-mix(in srgb, currentColor 3%, #fff);\n  }\n  :where(.oksDropdownMenu[data-variant=shadow]) {\n    --oks-dropdown-shadow: 0 26px 56px color-mix(in srgb, #000 22%, transparent);\n    --oks-dropdown-border: color-mix(in srgb, #000 6%, transparent);\n  }\n  :where(.oksDropdownTopContent),\n  :where(.oksDropdownBottomContent) {\n    padding: 6px 8px;\n  }\n  :where(.oksDropdownList) {\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-dropdown-gap);\n    outline: none;\n  }\n  :where(.oksDropdownEmpty) {\n    padding: 10px 12px;\n    opacity: 0.75;\n  }\n  :where(.oksDropdownSection) {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n  }\n  :where(.oksDropdownSectionHeading) {\n    font-size: 12px;\n    font-weight: 600;\n    opacity: 0.7;\n    padding: 6px 10px 0 10px;\n  }\n  :where(.oksDropdownSectionGroup) {\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-dropdown-gap);\n  }\n  :where(.oksDropdownSectionDivider) {\n    height: 1px;\n    background-color: color-mix(in srgb, currentColor 12%, transparent);\n    margin: 6px 0;\n    opacity: 0.5;\n  }\n  :where(.oksDropdownItem) {\n    --oks-dropdown-item-radius: calc(var(--oks-dropdown-radius) - 4px);\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    width: 100%;\n    border-radius: var(--oks-dropdown-item-radius);\n    padding: 8px 10px;\n    cursor: pointer;\n    user-select: none;\n    outline: none;\n  }\n  :where(.oksDropdownItem[data-disabled=true]) {\n    opacity: 0.55;\n    cursor: not-allowed;\n  }\n  :where(.oksDropdownItemWrapper) {\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    flex: 1 1 0%;\n    gap: 2px;\n  }\n  :where(.oksDropdownItemTitle) {\n    font-size: 14px;\n    line-height: 1.1;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  :where(.oksDropdownItemDescription) {\n    font-size: 12px;\n    line-height: 1.2;\n    opacity: 0.75;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  :where(.oksDropdownItemShortcut) {\n    font-size: 12px;\n    opacity: 0.6;\n    flex: none;\n    margin-left: 10px;\n  }\n  :where(.oksDropdownItemStartContent),\n  :where(.oksDropdownItemEndContent),\n  :where(.oksDropdownItemSelectedIcon) {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n    line-height: 0;\n  }\n  :where(.oksDropdownItemSelectedIcon) {\n    opacity: 0.9;\n    font-size: 14px;\n    color: var(--oks-dropdown-tone, currentColor);\n  }\n  :where(.oksDropdownItem:focus-visible) {\n    outline: 2px solid var(--oks-dropdown-tone, var(--oks-color-primary-500, #3b82f6));\n    outline-offset: 2px;\n  }\n  :where(.oksDropdownItemDivider) {\n    height: 1px;\n    background-color: color-mix(in srgb, currentColor 12%, transparent);\n    margin: 6px 0;\n    opacity: 0.5;\n  }\n  :where(.oksDropdownMenu[data-variant=solid]) :where(.oksDropdownItem:hover),\n  :where(.oksDropdownMenu[data-variant=solid]) :where(.oksDropdownItem[data-focused=true]) {\n    background-color: color-mix(in srgb, currentColor 10%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=light]) :where(.oksDropdownItem:hover),\n  :where(.oksDropdownMenu[data-variant=light]) :where(.oksDropdownItem[data-focused=true]) {\n    background-color: color-mix(in srgb, currentColor 7%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=flat]) :where(.oksDropdownItem:hover),\n  :where(.oksDropdownMenu[data-variant=flat]) :where(.oksDropdownItem[data-focused=true]) {\n    background-color: color-mix(in srgb, currentColor 12%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=faded]) :where(.oksDropdownItem) {\n    background-color: color-mix(in srgb, currentColor 3%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=faded]) :where(.oksDropdownItem:hover),\n  :where(.oksDropdownMenu[data-variant=faded]) :where(.oksDropdownItem[data-focused=true]) {\n    background-color: color-mix(in srgb, currentColor 10%, transparent);\n  }\n  :where(.oksDropdownMenu[data-variant=bordered]) :where(.oksDropdownItem:hover),\n  :where(.oksDropdownMenu[data-variant=bordered]) :where(.oksDropdownItem[data-focused=true]) {\n    background-color: transparent;\n    box-shadow: 0 0 0 1px color-mix(in srgb, currentColor 22%, transparent) inset;\n  }\n  :where(.oksDropdownMenu[data-variant=shadow]) :where(.oksDropdownItem:hover),\n  :where(.oksDropdownMenu[data-variant=shadow]) :where(.oksDropdownItem[data-focused=true]) {\n    background-color: transparent;\n    box-shadow: 0 0 0 1px color-mix(in srgb, currentColor 12%, transparent) inset, 0 10px 18px color-mix(in srgb, #000 14%, transparent);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :where(.oksDropdownMenu) {\n      scroll-behavior: auto;\n    }\n  }\n}\n");

// src/components/Dropdown/Dropdown.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function mergeClassName13(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function getColorVar9(color, depth) {
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
function normalizeElementKey(key) {
  return key.startsWith(".$") ? key.slice(2) : key;
}
function parsePlacement(placement) {
  const [rawSide, rawAlign] = placement.split("-");
  const side = rawSide === "top" || rawSide === "bottom" || rawSide === "left" || rawSide === "right" ? rawSide : "bottom";
  const align = rawAlign === "start" || rawAlign === "end" ? rawAlign : "center";
  return { side, align };
}
var DropdownContext = (0, import_react14.createContext)(null);
function useDropdownContext() {
  const ctx = (0, import_react14.useContext)(DropdownContext);
  if (!ctx) throw new Error("oks-ui Dropdown: missing context.");
  return ctx;
}
var DropdownMenuContext = (0, import_react14.createContext)(null);
function useDropdownMenuContext() {
  const ctx = (0, import_react14.useContext)(DropdownMenuContext);
  if (!ctx) throw new Error("oks-ui DropdownMenu: missing context.");
  return ctx;
}
function isDropdownItemElement(node) {
  return (0, import_react14.isValidElement)(node) && node.type === DropdownItem;
}
function isDropdownSectionElement(node) {
  return (0, import_react14.isValidElement)(node) && node.type === DropdownSection;
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
    const normalized = normalizeElementKey(k).trim();
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
var Dropdown = (0, import_react14.forwardRef)((props, ref) => {
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
  const [uncontrolledOpen, setUncontrolledOpen] = (0, import_react14.useState)(defaultOpen);
  const open = isOpen !== void 0 ? isOpen : uncontrolledOpen;
  const triggerRef = (0, import_react14.useRef)(null);
  const menuRef = (0, import_react14.useRef)(null);
  const openSourceRef = (0, import_react14.useRef)("programmatic");
  const menuOnCloseRef = (0, import_react14.useRef)(void 0);
  const id = (0, import_react14.useId)();
  const triggerId = `oks-dropdown-trigger-${id}`;
  const menuId = `oks-dropdown-menu-${id}`;
  const setOpen = (0, import_react14.useCallback)(
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
  const toggle = (0, import_react14.useCallback)(() => setOpen(!open, false), [open, setOpen]);
  (0, import_react14.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownContext.Provider, { value: ctx, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    {
      ref,
      className: mergeClassName13(mergeClassName13("oksDropdown", classNames?.base), className),
      style,
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: mergeClassName13("oksDropdownContent", classNames?.content), children })
    }
  ) });
});
Dropdown.displayName = "Dropdown";
var DropdownTrigger = (0, import_react14.forwardRef)(
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
    return (0, import_react14.cloneElement)(children, {
      id: ctx.triggerId,
      "aria-haspopup": "menu",
      "aria-expanded": ctx.open ? "true" : "false",
      "aria-controls": ctx.menuId,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      ref: mergeRefs(childRef, forwardedRef, (node) => {
        ctx.triggerRef.current = node instanceof HTMLElement ? node : null;
      }),
      className: mergeClassName13("oksDropdownTrigger", childAny?.props?.className)
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
  const disabledSet = (0, import_react14.useMemo)(() => toKeySet(disabledKeys), [disabledKeys]);
  const toneVars = (0, import_react14.useMemo)(
    () => ({
      "--oks-dropdown-tone": getColorVar9(color, 500),
      "--oks-dropdown-tone-600": getColorVar9(color, 600)
    }),
    [color]
  );
  const [uncontrolledSelected, setUncontrolledSelected] = (0, import_react14.useState)(
    () => defaultSelectedKeys === "all" ? "all" : toKeySet(defaultSelectedKeys)
  );
  const resolvedSelected = (0, import_react14.useMemo)(() => {
    if (selectedKeys === "all") return "all";
    if (selectedKeys !== void 0) return toKeySet(selectedKeys);
    return uncontrolledSelected;
  }, [selectedKeys, uncontrolledSelected]);
  const setSelectedKeys = (0, import_react14.useCallback)(
    (next) => {
      if (selectedKeys === void 0) setUncontrolledSelected(next);
    },
    [selectedKeys]
  );
  const { side, align } = (0, import_react14.useMemo)(
    () => parsePlacement(dropdown.placement),
    [dropdown.placement]
  );
  const [position, setPosition] = (0, import_react14.useState)(null);
  const itemRefs = (0, import_react14.useRef)(/* @__PURE__ */ new Map());
  const itemInfo = (0, import_react14.useRef)(/* @__PURE__ */ new Map());
  const typeaheadRef = (0, import_react14.useRef)({
    buffer: "",
    timer: null
  });
  const listRef = (0, import_react14.useRef)(null);
  (0, import_react14.useEffect)(() => {
    if (!dropdown.open) return;
    dropdown.menuOnCloseRef.current = onClose;
    return () => {
      if (dropdown.menuOnCloseRef.current === onClose) {
        dropdown.menuOnCloseRef.current = void 0;
      }
    };
  }, [dropdown.menuOnCloseRef, dropdown.open, onClose]);
  const updatePosition = (0, import_react14.useCallback)(() => {
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
  (0, import_react14.useEffect)(() => {
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
  (0, import_react14.useEffect)(() => {
    if (!dropdown.open) return;
    const menuEl = dropdown.menuRef.current;
    if (!menuEl || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => updatePosition());
    ro.observe(menuEl);
    return () => ro.disconnect();
  }, [dropdown.open, updatePosition]);
  const renderedSections = (0, import_react14.useMemo)(() => {
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
    const nodes = import_react14.Children.toArray(children);
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
          for (const child of import_react14.Children.toArray(node.props.children)) {
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
  const flattened = (0, import_react14.useMemo)(() => {
    const list = [];
    for (const section of renderedSections) {
      for (const item of section.items) list.push(item);
    }
    return list;
  }, [renderedSections]);
  const keys = (0, import_react14.useMemo)(() => flattened.map((it) => it.key), [flattened]);
  const itemPropsByKey = (0, import_react14.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    for (const it of flattened) map.set(it.key, it.element.props);
    return map;
  }, [flattened]);
  const computedDisabled = (0, import_react14.useMemo)(() => {
    const set = new Set(disabledSet);
    for (const it of flattened) {
      if (it.element.props.isDisabled) set.add(it.key);
    }
    return set;
  }, [disabledSet, flattened]);
  const [focusedKey, setFocusedKey] = (0, import_react14.useState)(null);
  const registerItemRef = (0, import_react14.useCallback)((key, node, info) => {
    if (node) itemRefs.current.set(key, node);
    else itemRefs.current.delete(key);
    itemInfo.current.set(key, info);
  }, []);
  const focusKey = (0, import_react14.useCallback)(
    (key) => {
      setFocusedKey(key);
      if (key === null) return;
      const node = itemRefs.current.get(key);
      if (node) node.focus();
    },
    [setFocusedKey]
  );
  (0, import_react14.useEffect)(() => {
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
  const handleItemAction = (0, import_react14.useCallback)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Portal, { container: dropdown.portalContainer, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuContext.Provider, { value: menuCtx, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "div",
    {
      ref: (node) => {
        dropdown.menuRef.current = node;
      },
      id: dropdown.menuId,
      className: mergeClassName13("oksDropdownMenu", classNames?.base),
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
        topContent !== void 0 && topContent !== null ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "oksDropdownTopContent", children: topContent }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "div",
          {
            ref: listRef,
            role: "menu",
            "aria-labelledby": dropdown.triggerId,
            className: mergeClassName13("oksDropdownList", classNames?.list),
            tabIndex: -1,
            onKeyDown: handleKeyDown,
            children: hasItems ? renderedSections.map((section, idx) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownSectionView, { section }, idx)) : hideEmptyContent ? null : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: mergeClassName13("oksDropdownEmpty", classNames?.emptyContent), children: emptyContent ?? null })
          }
        ),
        bottomContent !== void 0 && bottomContent !== null ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "oksDropdownBottomContent", children: bottomContent }) : null
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
  const heading = section.title !== void 0 && section.title !== null ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: mergeClassName13("oksDropdownSectionHeading", section.classNames?.heading), children: section.title }) : null;
  const hasDivider = section.showDivider === true;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: mergeClassName13("oksDropdownSection", section.classNames?.base), children: [
    heading,
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        role: "group",
        "aria-label": label,
        className: mergeClassName13("oksDropdownSectionGroup", section.classNames?.group),
        children: section.items.map(
          ({ key, element }) => (0, import_react14.cloneElement)(element, {
            itemKey: key,
            ...section.hideSelectedIcon !== void 0 ? { __sectionHideSelectedIcon: section.hideSelectedIcon } : {},
            ...section.itemClasses ? { __sectionItemClasses: section.itemClasses } : {}
          })
        )
      }
    ),
    hasDivider ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: mergeClassName13("oksDropdownSectionDivider", section.classNames?.divider) }) : null
  ] });
}
var DropdownItem = (0, import_react14.forwardRef)((props, ref) => {
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
  const baseClassName = mergeClassName13(
    mergeClassName13(
      mergeClassName13("oksDropdownItem", menu.itemClasses?.base),
      sectionItemClasses?.base
    ),
    classNames?.base
  );
  const [isPressedState, setIsPressedState] = (0, import_react14.useState)(false);
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
  const itemEl = /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
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
        startContent !== void 0 && startContent !== null ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "oksDropdownItemStartContent", "aria-hidden": "true", children: startContent }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
          "span",
          {
            className: mergeClassName13(
              mergeClassName13(
                mergeClassName13("oksDropdownItemWrapper", menu.itemClasses?.wrapper),
                sectionItemClasses?.wrapper
              ),
              classNames?.wrapper
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                "span",
                {
                  className: mergeClassName13(
                    mergeClassName13(
                      mergeClassName13("oksDropdownItemTitle", menu.itemClasses?.title),
                      sectionItemClasses?.title
                    ),
                    classNames?.title
                  ),
                  children: label
                }
              ),
              description !== void 0 && description !== null ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                "span",
                {
                  className: mergeClassName13(
                    mergeClassName13(
                      mergeClassName13("oksDropdownItemDescription", menu.itemClasses?.description),
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
        shortcut !== void 0 && shortcut !== null ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "span",
          {
            className: mergeClassName13(
              mergeClassName13(
                mergeClassName13("oksDropdownItemShortcut", menu.itemClasses?.shortcut),
                sectionItemClasses?.shortcut
              ),
              classNames?.shortcut
            ),
            children: shortcut
          }
        ) : null,
        endContent !== void 0 && endContent !== null ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "oksDropdownItemEndContent", "aria-hidden": "true", children: endContent }) : resolvedSelected && effectiveHideSelectedIcon !== true ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "span",
          {
            className: mergeClassName13(
              mergeClassName13(
                mergeClassName13("oksDropdownItemSelectedIcon", menu.itemClasses?.selectedIcon),
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
  return showDivider ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
    itemEl,
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "oksDropdownItemDivider", "aria-hidden": "true" })
  ] }) : itemEl;
});
DropdownItem.displayName = "DropdownItem";
var DropdownSection = (props) => {
  return null;
};
DropdownSection.displayName = "DropdownSection";

// src/components/Modal/Modal.tsx
var import_react15 = require("react");

// src/components/Modal/Modal.module.css
styleInject("@layer components {\n  :where(.oksModal) {\n    --oks-modal-width: 640px;\n    --oks-modal-radius: var(--oks-radius-lg, 0.5rem);\n    --oks-modal-bg: var(--oks-palette-neutral-0, #fff);\n    --oks-modal-shadow: 0 16px 40px rgba(0, 0, 0, 0.18), 0 8px 20px rgba(0, 0, 0, 0.12);\n    width: var(--oks-modal-width);\n    max-width: calc(100vw - var(--oks-space-6, 24px));\n    max-height: calc(100vh - var(--oks-space-6, 24px));\n    background-color: var(--oks-modal-bg);\n    border-radius: var(--oks-modal-radius);\n    box-shadow: var(--oks-modal-shadow);\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  :where(.oksModal:focus),\n  :where(.oksModal:focus-visible) {\n    outline: none;\n  }\n  :where(.oksModalHeader) {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--oks-space-3, 12px);\n    padding: var(--oks-space-4, 16px);\n  }\n  :where(.oksModalHeaderTitle) {\n    min-width: 0;\n    flex: 1;\n  }\n  :where(.oksModalBody) {\n    padding: var(--oks-space-4, 16px);\n    overflow: auto;\n    min-height: 0;\n    flex: 1;\n  }\n  :where(.oksModalFooter) {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: var(--oks-space-2, 8px);\n    padding: var(--oks-space-4, 16px);\n  }\n  :where(.oksModalClose) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    color: inherit;\n    padding: var(--oks-space-2, 8px);\n    margin: calc(var(--oks-space-2, 8px) * -1);\n    border-radius: var(--oks-radius-sm, 0.25rem);\n    cursor: pointer;\n    flex: 0 0 auto;\n  }\n  :where(.oksModalClose:focus-visible) {\n    outline: 2px solid currentColor;\n    outline-offset: 2px;\n  }\n}\n");

// src/components/Modal/Modal.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function mergeClassName14(a, b) {
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
  const reactId = (0, import_react15.useId)();
  const titleId = `oks-modal-title-${reactId.replace(/[:]/g, "")}`;
  const panelRef = (0, import_react15.useRef)(null);
  const lastFocusedRef = (0, import_react15.useRef)(null);
  (0, import_react15.useEffect)(() => {
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
  const resolvedWidth = (0, import_react15.useMemo)(() => resolveWidth2(size), [size]);
  const cssVars = (0, import_react15.useMemo)(() => {
    return {
      ["--oks-modal-width"]: resolvedWidth
    };
  }, [resolvedWidth]);
  const rootStyle = {
    ...cssVars,
    ...style ?? {}
  };
  const safeBackdropOverrides = (0, import_react15.useMemo)(() => {
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
    ...headerTitle !== void 0 && headerTitle !== null ? { title: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { id: titleId, children: headerTitle }) } : {}
  };
  const hasHeader = dismissible || resolvedHeaders.title !== void 0;
  const ariaLabelledBy = headerTitle !== void 0 && headerTitle !== null ? titleId : void 0;
  const mergedDivider = {
    color: "secondary",
    colorDepth: 200,
    ...divider ?? {}
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Backdrop, { isOpen, onClose, ...mergedBackdrop, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    "div",
    {
      ref: panelRef,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": ariaLabelledBy,
      tabIndex: -1,
      className: mergeClassName14("oksModal", className),
      style: rootStyle,
      children: [
        hasHeader ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "oksModalHeader", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "oksModalHeaderTitle", children: resolvedHeaders.title !== void 0 && resolvedHeaders.title !== null ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PageTitle, { ...resolvedHeaders }) : null }),
          dismissible ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            CloseButton,
            {
              className: "oksModalClose",
              ariaLabel: closeLabel,
              onClick: () => onClose?.()
            }
          ) : null
        ] }) : null,
        hasHeader ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Divider, { ...mergedDivider }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "oksModalBody", children }),
        actions !== void 0 && actions !== null ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "oksModalFooter", children: actions }) : null
      ]
    }
  ) });
}

// src/components/Tabs/Tabs.tsx
var import_react16 = require("react");

// src/components/Tabs/Tab.tsx
function Tab(_props) {
  return null;
}
Tab.displayName = "Tab";

// src/components/Tabs/Tabs.module.css
styleInject('@layer components {\n  .oksTabsRoot {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-width: 0;\n  }\n  .oksTabsRoot[data-radius=none] {\n    --oks-tabs-radius: 0px;\n  }\n  .oksTabsRoot[data-radius=sm] {\n    --oks-tabs-radius: 0.25rem;\n  }\n  .oksTabsRoot[data-radius=md] {\n    --oks-tabs-radius: 0.5rem;\n  }\n  .oksTabsRoot[data-radius=lg] {\n    --oks-tabs-radius: 0.75rem;\n  }\n  .oksTabsRoot[data-radius=full] {\n    --oks-tabs-radius: 9999px;\n  }\n  .oksTabsRoot[data-placement=bottom][data-vertical=false] {\n    flex-direction: column-reverse;\n  }\n  .oksTabsRoot[data-vertical=true] {\n    flex-direction: row;\n  }\n  .oksTabsRoot[data-vertical=true][data-placement=end] {\n    flex-direction: row-reverse;\n  }\n  .oksTablist {\n    display: flex;\n    gap: var(--oks-space-1, 0.25rem);\n    border-bottom: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    overflow: auto;\n    position: relative;\n  }\n  .oksTabsRoot[data-vertical=true] > .oksTablist {\n    flex-direction: column;\n    border-bottom: 0;\n    border-inline-end: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n  }\n  .oksTabsRoot[data-vertical=true][data-placement=end] > .oksTablist {\n    border-inline-end: 0;\n    border-inline-start: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n  }\n  .oksTabsRoot[data-vertical=true] > .oksTabsPanels {\n    flex: 1 1 auto;\n    padding-inline-start: var(--oks-space-3, 0.75rem);\n  }\n  .oksTabsRoot[data-vertical=true][data-placement=end] > .oksTabsPanels {\n    padding-inline-start: 0;\n    padding-inline-end: var(--oks-space-3, 0.75rem);\n  }\n  .oksTabsRoot[data-full-width=true] > .oksTablist {\n    width: 100%;\n  }\n  .oksTabsTabWrapper {\n    display: inline-flex;\n  }\n  .oksTabsRoot[data-full-width=true] > .oksTablist .oksTabsTabWrapper {\n    flex: 1 1 0;\n  }\n  .oksTabsTab {\n    appearance: none;\n    border: 0;\n    background-color: transparent;\n    color: inherit;\n    padding: var(--oks-space-2, 0.5rem) var(--oks-space-3, 0.75rem);\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 0;\n  }\n  .oksTabsRoot[data-full-width=true] > .oksTablist .oksTabsTab {\n    width: 100%;\n  }\n  .oksTabsRoot[data-size=sm] > .oksTablist .oksTabsTab {\n    padding: var(--oks-space-1_5, 0.375rem) var(--oks-space-2, 0.5rem);\n    font-size: 0.875rem;\n  }\n  .oksTabsRoot[data-size=md] > .oksTablist .oksTabsTab {\n    padding: var(--oks-space-2, 0.5rem) var(--oks-space-3, 0.75rem);\n    font-size: 0.95rem;\n  }\n  .oksTabsRoot[data-size=lg] > .oksTablist .oksTabsTab {\n    padding: var(--oks-space-2_5, 0.625rem) var(--oks-space-4, 1rem);\n    font-size: 1rem;\n  }\n  .oksTabsTab[aria-disabled=true],\n  .oksTabsTab:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n  .oksTabsTabContent {\n    display: inline-flex;\n    min-width: 0;\n  }\n  .oksTabsCursor {\n    position: absolute;\n    left: 0;\n    right: auto;\n    bottom: 0;\n    height: 2px;\n    width: var(--oks-tabs-cursor-w, 0px);\n    transform: translateX(var(--oks-tabs-cursor-x, 0px));\n    background-color: var(--oks-tabs-tone, var(--oks-color-primary-500, #3b82f6));\n    border-radius: 9999px;\n  }\n  .oksTabsRoot[data-vertical=true] > .oksTablist .oksTabsCursor {\n    top: 0;\n    bottom: auto;\n    left: 0;\n    width: 2px;\n    height: var(--oks-tabs-cursor-h, 0px);\n    transform: translateY(var(--oks-tabs-cursor-y, 0px));\n  }\n  @media (prefers-reduced-motion: no-preference) {\n    .oksTabsRoot[data-motion=default]:not([data-disable-cursor-animation=true]) > .oksTablist .oksTabsCursor {\n      transition:\n        transform 120ms ease,\n        width 120ms ease,\n        height 120ms ease;\n    }\n  }\n  .oksTabsRoot[data-variant=solid] > .oksTablist {\n    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    background-color: var(--oks-color-neutral-50, #f9fafb);\n    padding: var(--oks-space-1_5, 0.375rem);\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n    gap: var(--oks-space-1, 0.25rem);\n    border-bottom: 0;\n  }\n  .oksTabsRoot[data-variant=solid][data-size=sm] > .oksTablist {\n    padding: var(--oks-space-1, 0.25rem);\n    gap: var(--oks-space-0_5, 0.125rem);\n  }\n  .oksTabsRoot[data-variant=solid] > .oksTablist .oksTabsTab[data-selected=true] {\n    background-color: var(--oks-tabs-tone, var(--oks-color-primary-500, #3b82f6));\n    color: #fff;\n  }\n  .oksTabsRoot[data-variant=solid] > .oksTablist .oksTabsTab[data-selected=false] {\n    background-color: var(--oks-tabs-tone-50, var(--oks-color-primary-50, #eff6ff));\n    color: var(--oks-tabs-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  .oksTabsRoot[data-variant=bordered] > .oksTablist {\n    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    border-bottom: 0;\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n    padding: var(--oks-space-1_5, 0.375rem);\n    gap: var(--oks-space-1, 0.25rem);\n  }\n  .oksTabsRoot[data-variant=bordered][data-size=sm] > .oksTablist {\n    padding: var(--oks-space-1, 0.25rem);\n    gap: var(--oks-space-0_5, 0.125rem);\n  }\n  .oksTabsRoot[data-variant=bordered] > .oksTablist .oksTabsTab[data-selected=false] {\n    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    background-color: var(--oks-color-neutral-50, #f9fafb);\n  }\n  .oksTabsRoot[data-variant=bordered] > .oksTablist .oksTabsTab[data-selected=true] {\n    border: 1px solid var(--oks-tabs-tone, var(--oks-color-primary-500, #3b82f6));\n    background-color: var(--oks-tabs-tone-50, var(--oks-color-primary-50, #eff6ff));\n    color: var(--oks-tabs-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  .oksTabsRoot[data-variant=light] > .oksTablist {\n    border-bottom: 0;\n  }\n  .oksTabsRoot[data-variant=light] > .oksTablist .oksTabsTab[data-selected=true] {\n    background-color: var(--oks-tabs-tone-50, var(--oks-color-primary-50, #eff6ff));\n    color: var(--oks-tabs-tone-700, var(--oks-color-primary-700, #1d4ed8));\n  }\n  .oksTabsRoot[data-variant=light] > .oksTablist .oksTabsTab[data-selected=false] {\n    background-color: transparent;\n  }\n  .oksTabsRoot[data-variant=underlined] > .oksTablist {\n    border-bottom: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n  }\n  .oksTabsRoot[data-variant=underlined] > .oksTablist .oksTabsTab {\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n  }\n  .oksTablist[data-appearance=segmented] {\n    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    background-color: var(--oks-color-neutral-50, #f9fafb);\n    padding: var(--oks-space-1_5, 0.375rem);\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n    gap: var(--oks-space-1, 0.25rem);\n    border-bottom: 0;\n  }\n  .oksTablist[data-appearance=segmented] > * {\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n  }\n  .oksTabsRoot[data-density=compact] > .oksTablist[data-appearance=segmented] {\n    padding: var(--oks-space-1, 0.25rem);\n    gap: var(--oks-space-0_5, 0.125rem);\n  }\n  .oksTabsRoot[data-orientation=vertical] .oksTablist[data-appearance=segmented] {\n    flex-direction: column;\n  }\n  .oksTablist[data-appearance=pill] {\n    border-bottom: 0;\n  }\n  .oksTablist[data-appearance=pill] > * {\n    border-radius: var(--oks-tabs-radius, 9999px);\n  }\n  .oksTablist[data-appearance=pill] .oksTabTrigger {\n    padding: var(--oks-space-2, 0.5rem) var(--oks-space-4, 1rem);\n  }\n  .oksTablist[data-appearance=outline] {\n    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    border-bottom: 0;\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n    padding: var(--oks-space-1_5, 0.375rem);\n    gap: var(--oks-space-1, 0.25rem);\n  }\n  .oksTabsRoot[data-density=compact] > .oksTablist[data-appearance=outline] {\n    padding: var(--oks-space-1, 0.25rem);\n    gap: var(--oks-space-0_5, 0.125rem);\n  }\n  .oksTablist[data-appearance=dot] {\n    border-bottom: 0;\n  }\n  .oksTablist[data-appearance=dot] > .oksButton[data-active=true]::before {\n    content: "";\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    border-radius: 9999px;\n    background-color: var(--oks-color-primary-500, #3b82f6);\n    margin-inline-end: 6px;\n    transform: translateY(-1px);\n  }\n  .oksTabsIndicator {\n    position: absolute;\n    left: 0;\n    right: auto;\n    bottom: 0;\n    height: var(--oks-tabs-indicator-h, 2px);\n    width: var(--oks-tabs-indicator-w, 0px);\n    transform: translateX(var(--oks-tabs-indicator-x, 0px)) translateY(var(--oks-tabs-indicator-offset-y, 0px));\n    background-color: var( --oks-tabs-indicator-color, var(--oks-color-primary-500, #3b82f6) );\n    border-radius: var(--oks-tabs-indicator-radius, 0px);\n  }\n  @media (prefers-reduced-motion: no-preference) {\n    .oksTabsIndicator {\n      transition: transform 120ms ease, width 120ms ease;\n    }\n  }\n  .oksTabsRoot[data-orientation=vertical] .oksTabsIndicator {\n    top: 0;\n    bottom: auto;\n    left: 0;\n    width: var(--oks-tabs-indicator-w, 2px);\n    height: var(--oks-tabs-indicator-h, 0px);\n    transform: translateY(var(--oks-tabs-indicator-y, 0px)) translateX(var(--oks-tabs-indicator-offset-x, 0px));\n  }\n  .oksTablist[data-underline-position=top] .oksTabsIndicator {\n    top: 0;\n    bottom: auto;\n  }\n  .oksTablist[data-appearance=pill] .oksTabTrigger[data-active=true][data-elevated=true] {\n    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12), 0 0 0 4px rgba(147, 197, 253, 0.45);\n  }\n  .oksTablist[data-appearance=outline][data-outline-active=stroke] .oksTabTrigger[data-active=true] {\n    border: 2px solid var(--oks-color-primary-500, #3b82f6);\n    background-color: transparent;\n    color: var(--oks-color-primary-700, #1d4ed8);\n  }\n  .oksTabsPanels {\n    display: block;\n    width: 100%;\n    min-width: 0;\n  }\n  .oksTabsPanel {\n    padding: var(--oks-space-3, 0.75rem) 0 0 0;\n    width: 100%;\n    min-width: 0;\n  }\n  .oksTabTrigger {\n    appearance: none;\n    border: 0;\n    background-color: transparent;\n    color: inherit;\n    padding: var(--oks-space-2, 0.5rem) var(--oks-space-3, 0.75rem);\n    border-radius: var(--oks-tabs-radius, 0.5rem);\n    cursor: pointer;\n  }\n  .oksTabTrigger[data-size=sm] {\n    padding: var(--oks-space-1_5, 0.375rem) var(--oks-space-2, 0.5rem);\n    font-size: 0.875rem;\n  }\n  .oksTabTrigger[data-size=md] {\n    padding: var(--oks-space-2, 0.5rem) var(--oks-space-3, 0.75rem);\n    font-size: 0.95rem;\n  }\n  .oksTablist[data-appearance=segmented] .oksTabTrigger[data-active=true],\n  .oksTablist[data-appearance=pill] .oksTabTrigger[data-active=true] {\n    background-color: var(--oks-color-primary-500, #3b82f6);\n    color: #fff;\n  }\n  .oksTablist[data-appearance=segmented] .oksTabTrigger[data-active=false],\n  .oksTablist[data-appearance=pill] .oksTabTrigger[data-active=false] {\n    background-color: var(--oks-color-primary-50, #eff6ff);\n    color: var(--oks-color-primary-700, #1d4ed8);\n  }\n  .oksTablist[data-appearance=outline] .oksTabTrigger[data-active=false] {\n    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n    background-color: var(--oks-color-neutral-50, #f9fafb);\n  }\n  .oksTablist[data-appearance=outline] .oksTabTrigger[data-active=true] {\n    border: 1px solid var(--oks-color-primary-500, #3b82f6);\n    background-color: var(--oks-color-primary-50, #eff6ff);\n    color: var(--oks-color-primary-700, #1d4ed8);\n  }\n  .oksTablist[data-appearance=dot] .oksTabTrigger[data-active=true]::before {\n    content: "";\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    border-radius: 9999px;\n    background-color: var(--oks-color-primary-500, #3b82f6);\n    margin-inline-end: 6px;\n    transform: translateY(-1px);\n  }\n  .oksTabsRoot[data-orientation=vertical] {\n    flex-direction: row;\n  }\n  .oksTabsRoot[data-orientation=vertical] > .oksTablist {\n    flex-direction: column;\n    gap: var(--oks-space-1, 0.25rem);\n    border-bottom: 0;\n    border-inline-end: 1px solid var(--oks-color-neutral-200, #e5e7eb);\n  }\n  .oksTabsRoot[data-orientation=vertical][data-tablist-position=end] {\n    flex-direction: row-reverse;\n  }\n  .oksTabsRoot[data-orientation=vertical] > .oksTabsPanels {\n    flex: 1 1 auto;\n    padding-inline-start: var(--oks-space-3, 0.75rem);\n  }\n}\n');

// src/components/Tabs/Tabs.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function mergeClassName15(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function getColorVar10(color, depth) {
  const fallback = `var(--oks-color-default-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
  if (color === "default") return fallback;
  return `var(--oks-color-${color}-${depth}, ${fallback})`;
}
function keyToIdPart(key) {
  const str = String(key);
  return str.trim().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9\-_:.]/g, "");
}
function isTabElement(node) {
  return (0, import_react16.isValidElement)(node) && node.type === Tab;
}
function normalizeElementKey2(key) {
  return key.startsWith(".$") ? key.slice(2) : key;
}
function pickInitialKey(keys, disabled) {
  for (const k of keys) {
    if (!disabled.has(k)) return k;
  }
  return void 0;
}
var Tabs = (0, import_react16.forwardRef)(function Tabs2(props, ref) {
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
  const renderedTabs = (0, import_react16.useMemo)(() => {
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
          key: typeof k === "string" ? normalizeElementKey2(k) : k,
          props: el.props
        });
      }
      return out2;
    }
    const out = [];
    for (const node of import_react16.Children.toArray(children)) {
      if (!isTabElement(node)) continue;
      const k = node.key;
      if (k === null || k === void 0) continue;
      out.push({
        key: typeof k === "string" ? normalizeElementKey2(k) : k,
        props: node.props
      });
    }
    return out;
  }, [children, items]);
  const disabledTabSet = (0, import_react16.useMemo)(() => {
    const set = /* @__PURE__ */ new Set();
    for (const k of disabledKeys ?? []) set.add(k);
    for (const t of renderedTabs) {
      if (t.props.isDisabled) set.add(t.key);
    }
    return set;
  }, [disabledKeys, renderedTabs]);
  const keys = (0, import_react16.useMemo)(() => renderedTabs.map((t) => t.key), [renderedTabs]);
  const nodeEnv = globalThis?.process?.env?.NODE_ENV;
  if (nodeEnv !== "production") {
    for (const t of items !== void 0 ? [] : import_react16.Children.toArray(children)) {
      if (isTabElement(t) && t.key == null) {
        throw new Error("oks-ui Tabs: each <Tab /> must have a React `key`.");
      }
    }
  }
  const controlled = selectedKey !== void 0;
  const [internalKey, setInternalKey] = (0, import_react16.useState)(() => {
    if (defaultSelectedKey !== void 0) return defaultSelectedKey;
    return pickInitialKey(keys, disabledTabSet);
  });
  const effectiveVertical = (0, import_react16.useMemo)(() => {
    if (isVertical) return true;
    return placement === "start" || placement === "end";
  }, [isVertical, placement]);
  const resolvedPlacement = (0, import_react16.useMemo)(() => {
    if (isVertical) return "start";
    return placement;
  }, [isVertical, placement]);
  const resolvedSelectedKey = (0, import_react16.useMemo)(() => {
    const current = controlled ? selectedKey : internalKey;
    if (current !== void 0 && current !== null) {
      if (keys.includes(current) && !disabledTabSet.has(current)) return current;
    }
    return pickInitialKey(keys, disabledTabSet);
  }, [controlled, disabledTabSet, internalKey, keys, selectedKey]);
  const selectKey = (0, import_react16.useCallback)(
    (k) => {
      if (isDisabled) return;
      if (disabledTabSet.has(k)) return;
      if (!keys.includes(k)) return;
      if (!controlled) setInternalKey(k);
      onSelectionChange?.(k);
    },
    [controlled, disabledTabSet, isDisabled, keys, onSelectionChange]
  );
  const triggerRefs = (0, import_react16.useRef)(/* @__PURE__ */ new Map());
  const setTriggerRef = (0, import_react16.useCallback)((k, node) => {
    triggerRefs.current.set(k, node);
  }, []);
  const autoId = (0, import_react16.useId)();
  const tabsId = (0, import_react16.useMemo)(() => {
    const base = rest.id ? keyToIdPart(rest.id) : keyToIdPart(`tabs-${autoId}`);
    return `oks-${base}`;
  }, [autoId, rest.id]);
  const getIds = (0, import_react16.useCallback)(
    (k) => {
      const part = keyToIdPart(k);
      return { tab: `${tabsId}-tab-${part}`, panel: `${tabsId}-panel-${part}` };
    },
    [tabsId]
  );
  const tabListRef = (0, import_react16.useRef)(null);
  const cursorRef = (0, import_react16.useRef)(null);
  const positionCursor = (0, import_react16.useCallback)(() => {
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
  (0, import_react16.useEffect)(() => {
    positionCursor();
  }, [positionCursor]);
  (0, import_react16.useEffect)(() => {
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
        if (disabledTabSet.has(nextKey)) continue;
        const node = triggerRefs.current.get(nextKey);
        node?.focus();
        if (keyboardActivation === "automatic") selectKey(nextKey);
        return;
      }
    };
    const focusEdge = (edge) => {
      const ordered = edge === "start" ? keysInOrder : [...keysInOrder].reverse();
      for (const k of ordered) {
        if (disabledTabSet.has(k)) continue;
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
  const baseClassName = mergeClassName15(
    mergeClassName15("oksTabsRoot", classNames?.base),
    className
  );
  const tabListClassName = mergeClassName15("oksTablist", classNames?.tabList);
  const cursorClassName = mergeClassName15("oksTabsCursor", classNames?.cursor);
  const panelsClassName = "oksTabsPanels";
  const panelClassName = mergeClassName15("oksTabsPanel", classNames?.panel);
  const toneVars = {
    ["--oks-tabs-tone"]: getColorVar10(color, 500),
    ["--oks-tabs-tone-50"]: getColorVar10(color, 50),
    ["--oks-tabs-tone-700"]: getColorVar10(color, 700)
  };
  const baseStyle = {
    ...toneVars,
    ...rest.style ?? {}
  };
  const activeTab = (0, import_react16.useMemo)(() => {
    if (resolvedSelectedKey === void 0) return void 0;
    return renderedTabs.find((t) => t.key === resolvedSelectedKey);
  }, [renderedTabs, resolvedSelectedKey]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "div",
          {
            className: tabListClassName,
            role: "tablist",
            "aria-orientation": effectiveVertical ? "vertical" : "horizontal",
            ref: tabListRef,
            onKeyDown: onListKeyDown,
            children: [
              variant === "underlined" ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "div",
                {
                  className: cursorClassName,
                  ref: cursorRef,
                  "aria-hidden": "true"
                }
              ) : null,
              renderedTabs.map((t) => {
                const selected = t.key === resolvedSelectedKey;
                const disabled = isDisabled || disabledTabSet.has(t.key);
                const ids = getIds(t.key);
                const tabWrapperClassName = mergeClassName15(
                  "oksTabsTabWrapper",
                  classNames?.tabWrapper
                );
                const tabClassName = mergeClassName15("oksTabsTab", classNames?.tab);
                const tabContentClassName = mergeClassName15(
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
                const content = /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: tabContentClassName, children: t.props.title });
                return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: tabWrapperClassName, children: t.props.href ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
                ) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: panelsClassName, children: destroyInactiveTabPanel ? activeTab ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var import_react17 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
function slugify(input) {
  return input.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
}
function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function useURLParam(key) {
  const get = (0, import_react17.useCallback)(() => {
    if (!isBrowser() || !key) return null;
    const url = new URL(window.location.href);
    return url.searchParams.get(key);
  }, [key]);
  const set = (0, import_react17.useCallback)(
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
  const subscribe = (0, import_react17.useCallback)(
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
var TabsLegacy = (0, import_react17.forwardRef)(function TabsLegacy2(props, ref) {
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
  const items = (0, import_react17.useMemo)(
    () => data.map((it) => ({
      ...it,
      id: it.id ?? (idStrategy ? idStrategy(it.title) : slugify(it.title))
    })),
    [data, idStrategy]
  );
  const url = useURLParam(mode === "url" ? tabId : void 0);
  const findDefault = (0, import_react17.useCallback)(
    (idx) => {
      if (idx >= 0 && idx < items.length) return idx;
      return 0;
    },
    [items.length]
  );
  const indexFromParam = (0, import_react17.useCallback)(() => {
    if (mode !== "url") return null;
    const val = url.get();
    if (!val) return null;
    const idx = items.findIndex((it) => it.id === val);
    return idx >= 0 ? idx : null;
  }, [items, mode, url]);
  const initialIndex = (0, import_react17.useMemo)(() => {
    const fromUrl = indexFromParam();
    if (fromUrl !== null) return fromUrl;
    return findDefault(defaultTab);
  }, [defaultTab, findDefault, indexFromParam]);
  const isControlled = typeof value === "number";
  const [internalIndex, setInternalIndex] = (0, import_react17.useState)(initialIndex);
  const activeIndex = isControlled ? value : internalIndex;
  (0, import_react17.useEffect)(() => {
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
  const triggerRefs = (0, import_react17.useRef)([]);
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
  const tablistRef = (0, import_react17.useRef)(null);
  const indicatorRef = (0, import_react17.useRef)(null);
  (0, import_react17.useEffect)(() => {
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
  (0, import_react17.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
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
              effAppearance === "underline" ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "oksTabsIndicator", ref: indicatorRef, "aria-hidden": "true" }) : null,
              items.map((it, i) => {
                const active = i === activeIndex;
                const btnProps = mergedFor(active);
                const triggerId = `oks-tab-${it.id}`;
                const panelId = `oks-panel-${it.id}`;
                return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "oksTabsPanels", children: renderLazy ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "div",
          {
            className: "oksTabsPanel",
            role: "tabpanel",
            id: `oks-panel-${items[activeIndex]?.id}`,
            "aria-labelledby": `oks-tab-${items[activeIndex]?.id}`,
            children: renderPanelContent(items[activeIndex]?.content)
          }
        ) : items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var import_react19 = require("react");

// src/components/Tabs/context.ts
var import_react18 = require("react");
var TabsContext = (0, import_react18.createContext)(null);
function useTabsContext() {
  const ctx = (0, import_react18.useContext)(TabsContext);
  if (!ctx) throw new Error("oks-ui Tabs: TabsRoot is required");
  return ctx;
}

// src/components/Tabs/TabsRoot.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function toIdPart(value) {
  const str = String(value);
  return str.trim().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9\-_:.]/g, "");
}
function isBrowser2() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function useURLParam2(key) {
  const get = (0, import_react19.useCallback)(() => {
    if (!isBrowser2() || !key) return null;
    const url = new URL(window.location.href);
    return url.searchParams.get(key);
  }, [key]);
  const set = (0, import_react19.useCallback)(
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
  const subscribe = (0, import_react19.useCallback)(
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
var TabsRoot = (0, import_react19.forwardRef)(
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
    const initial = (0, import_react19.useMemo)(() => {
      if (mode === "url") {
        const u = url.get();
        if (u !== null) return u;
      }
      return defaultValue;
    }, [defaultValue, mode, url]);
    const controlled = value !== void 0;
    const [internal, setInternal] = (0, import_react19.useState)(initial);
    const current = controlled ? value : internal;
    (0, import_react19.useEffect)(() => {
      if (mode !== "url") return;
      const unsub = url.subscribe((val) => {
        if (val !== null) {
          if (!controlled) setInternal(val);
          onChange?.(val);
        }
      });
      return unsub;
    }, [controlled, mode, onChange, url]);
    const setValue = (0, import_react19.useCallback)(
      (v) => {
        if (!controlled) setInternal(v);
        onChange?.(v);
        if (mode === "url") url.set(String(v));
      },
      [controlled, mode, onChange, url]
    );
    const autoId = (0, import_react19.useId)();
    const idsBase = (0, import_react19.useMemo)(() => {
      const base = id ? toIdPart(id) : toIdPart(`tabs-${autoId}`);
      return `oks-${base}`;
    }, [autoId, id]);
    const getIds = (0, import_react19.useCallback)(
      (v) => {
        const part = toIdPart(v);
        return { tab: `${idsBase}-tab-${part}`, panel: `${idsBase}-panel-${part}` };
      },
      [idsBase]
    );
    const ctx = (0, import_react19.useMemo)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(TabsContext.Provider, { value: ctx, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var import_react20 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var TabList = (0, import_react20.forwardRef)(function TabList2(props, ref) {
  const { className, ...rest } = props;
  const ctx = useTabsContext();
  const localRef = (0, import_react20.useRef)(null);
  const listClass = ["oksTablist", className].filter(Boolean).join(" ");
  const indicatorRef = (0, import_react20.useRef)(null);
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
  (0, import_react20.useEffect)(() => {
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
  (0, import_react20.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
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
        ctx.appearance === "underline" ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "oksTabsIndicator", ref: indicatorRef, "aria-hidden": "true" }) : null,
        props.children
      ]
    }
  );
});
TabList.displayName = "TabList";

// src/components/Tabs/TabTrigger.tsx
var import_react21 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var TabTrigger = (0, import_react21.forwardRef)(
  function TabTrigger2(props, ref) {
    const { value, disabled, className, children } = props;
    const ctx = useTabsContext();
    const active = ctx.isActive(value);
    const ids = ctx.getIds(value);
    const sizeAttr = ctx.density === "compact" ? "sm" : "md";
    const cls = ["oksTabTrigger", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "oksTabLabel", children })
      }
    );
  }
);
TabTrigger.displayName = "TabTrigger";

// src/components/Tabs/TabPanel.tsx
var import_react22 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var TabPanel = (0, import_react22.forwardRef)(function TabPanel2(props, ref) {
  const { value, keepMounted, className, children } = props;
  const ctx = useTabsContext();
  const ids = ctx.getIds(value);
  const active = ctx.isActive(value);
  const cls = ["oksTabsPanel", className].filter(Boolean).join(" ");
  if (!active && keepMounted === void 0 && ctx.renderLazy) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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

// src/components/Toast/Toast.tsx
var import_react23 = require("react");

// src/components/Toast/Toast.module.css
styleInject('@layer components {\n  :where(.oksToastViewport) {\n    position: fixed;\n    inset: 0;\n    z-index: 50;\n    display: flex;\n    padding: calc(var(--oks-space-2, 8px) + var(--oks-toast-offset, 0px));\n    pointer-events: none;\n  }\n  :where(.oksToastViewport[data-position^=top]) {\n    align-items: flex-start;\n  }\n  :where(.oksToastViewport[data-position^=bottom]) {\n    align-items: flex-end;\n  }\n  :where(.oksToastViewport[data-position$=left]) {\n    justify-content: flex-start;\n  }\n  :where(.oksToastViewport[data-position$=right]) {\n    justify-content: flex-end;\n  }\n  :where(.oksToastViewport[data-position$=center]) {\n    justify-content: center;\n  }\n  :where(.oksToastStack) {\n    --oks-toast-stack-dir: -1;\n    --oks-toast-stack-collapsed: 10px;\n    --oks-toast-stack-expanded: 64px;\n    --oks-toast-stack-overlap: var(--oks-toast-stack-collapsed);\n    --oks-toast-stack-scale-step: 0.03;\n    --oks-toast-ease: cubic-bezier(0.16, 1, 0.3, 1);\n    --oks-toast-stack-duration: 320ms;\n    --oks-toast-enter-duration: 280ms;\n    --oks-toast-exit-duration: 260ms;\n    width: min(300px, calc(100vw - 24px));\n    pointer-events: auto;\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  :where(.oksToastStack[data-position^=top]) {\n    --oks-toast-stack-dir: 1;\n  }\n  :where(.oksToastStack[data-position^=bottom] .oksToast) {\n    align-self: end;\n  }\n  :where(.oksToastStack[data-position^=top] .oksToast) {\n    align-self: start;\n  }\n  :where(.oksToast) {\n    --oks-toast-gap: var(--oks-space-3, 12px);\n    --oks-toast-padding-y: var(--oks-space-3, 12px);\n    --oks-toast-padding-x: var(--oks-space-3, 12px);\n    --oks-toast-title-font-size: 14px;\n    --oks-toast-message-font-size: 13px;\n    --oks-toast-message-margin-top: var(--oks-space-1, 4px);\n    --oks-toast-icon-box: 28px;\n    --oks-toast-icon-glyph: 18px;\n    --oks-toast-enter-x: 0px;\n    --oks-toast-enter-y: 12px;\n    grid-area: 1 / 1;\n    width: 100%;\n    z-index: calc(100 - var(--oks-toast-stack-index, 0));\n    transition: transform var(--oks-toast-stack-duration) var(--oks-toast-ease);\n    transform: translateY(calc(var(--oks-toast-stack-dir) * (var(--oks-toast-stack-index, 0) * var(--oks-toast-stack-overlap)))) scale(calc(1 - (var(--oks-toast-stack-index, 0) * var(--oks-toast-stack-scale-step))));\n    will-change: transform;\n  }\n  :where(.oksToastSurface) {\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    gap: var(--oks-toast-gap);\n    padding: var(--oks-toast-padding-y) var(--oks-toast-padding-x);\n    border-radius: var(--oks-toast-radius, var(--oks-radius-md, 0.375rem));\n    background-color: var(--oks-toast-bg, rgba(15, 23, 42, 0.92));\n    color: var(--oks-toast-fg, white);\n    border: 1px solid var(--oks-toast-border, rgba(255, 255, 255, 0.12));\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);\n    opacity: 1;\n    transform: translate3d(0, 0, 0) scale(1);\n    will-change: transform, opacity;\n  }\n  :where(.oksToast[data-placement^=top]) {\n    --oks-toast-enter-y: -12px;\n  }\n  :where(.oksToast[data-placement$=right]) {\n    --oks-toast-enter-x: 12px;\n    --oks-toast-enter-y: 0px;\n  }\n  :where(.oksToast[data-placement$=left]) {\n    --oks-toast-enter-x: -12px;\n    --oks-toast-enter-y: 0px;\n  }\n  :where(.oksToastStack:is(:hover, :focus-within)) {\n    --oks-toast-stack-overlap: var(--oks-toast-stack-expanded);\n    --oks-toast-stack-scale-step: 0;\n  }\n  :where(.oksToast[data-motion=default][data-animation=entering] .oksToastSurface) {\n    animation: oksToastIn var(--oks-toast-enter-duration) var(--oks-toast-ease) both;\n  }\n  :where(.oksToast[data-motion=default][data-animation=exiting] .oksToastSurface) {\n    animation: oksToastOut var(--oks-toast-exit-duration) var(--oks-toast-ease) forwards;\n  }\n  @keyframes oksToastIn {\n    from {\n      opacity: 0;\n      transform: translate3d(var(--oks-toast-enter-x), var(--oks-toast-enter-y), 0) scale(0.98);\n    }\n    to {\n      opacity: 1;\n      transform: translate3d(0, 0, 0) scale(1);\n    }\n  }\n  @keyframes oksToastOut {\n    from {\n      opacity: 1;\n      transform: translate3d(0, 0, 0) scale(1);\n    }\n    to {\n      opacity: 0;\n      transform: translate3d(var(--oks-toast-enter-x), var(--oks-toast-enter-y), 0) scale(0.98);\n    }\n  }\n  :where(.oksToast[data-radius=none]) {\n    --oks-toast-radius: 0px;\n  }\n  :where(.oksToast[data-radius=sm]) {\n    --oks-toast-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksToast[data-radius=md]) {\n    --oks-toast-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksToast[data-radius=lg]) {\n    --oks-toast-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksToast[data-radius=full]) {\n    --oks-toast-radius: var(--oks-radius-full, 9999px);\n  }\n  :where(.oksToast[data-state=closing]) {\n    pointer-events: none;\n  }\n  :where(.oksToast[data-motion=reduced]) {\n    transition: none;\n  }\n  :where(.oksToast[data-stack-index]:not([data-stack-index="0"])) {\n    pointer-events: none;\n  }\n  :where(.oksToast[data-motion=reduced] .oksToastSurface) {\n    animation: none;\n    transition: none;\n    transform: none;\n  }\n  :where(.oksToastStack:is(:hover, :focus-within) .oksToast[data-stack-index]) {\n    pointer-events: auto;\n  }\n  :where(.oksToast[data-size=xs]) {\n    --oks-toast-gap: var(--oks-space-1, 4px);\n    --oks-toast-padding-y: var(--oks-space-2, 8px);\n    --oks-toast-padding-x: var(--oks-space-2, 8px);\n    --oks-toast-message-font-size: 12px;\n    --oks-toast-icon-box: 22px;\n    --oks-toast-icon-glyph: 14px;\n  }\n  :where(.oksToast[data-size=xs-sm]) {\n    --oks-toast-gap: var(--oks-space-2, 8px);\n    --oks-toast-padding-y: var(--oks-space-2, 8px);\n    --oks-toast-padding-x: var(--oks-space-2, 8px);\n    --oks-toast-message-font-size: 12px;\n    --oks-toast-icon-box: 24px;\n    --oks-toast-icon-glyph: 16px;\n  }\n  :where(.oksToast[data-size=sm]) {\n    --oks-toast-gap: var(--oks-space-3, 12px);\n    --oks-toast-padding-y: var(--oks-space-2, 8px);\n    --oks-toast-padding-x: var(--oks-space-3, 12px);\n    --oks-toast-message-font-size: 13px;\n    --oks-toast-icon-box: 26px;\n    --oks-toast-icon-glyph: 18px;\n  }\n  :where(.oksToast[data-size=lg]) {\n    --oks-toast-gap: var(--oks-space-4, 16px);\n    --oks-toast-padding-y: var(--oks-space-4, 16px);\n    --oks-toast-padding-x: var(--oks-space-4, 16px);\n    --oks-toast-title-font-size: 15px;\n    --oks-toast-message-font-size: 14px;\n    --oks-toast-icon-box: 32px;\n    --oks-toast-icon-glyph: 20px;\n  }\n  :where(.oksToast[data-size=xl]) {\n    --oks-toast-gap: var(--oks-space-4, 16px);\n    --oks-toast-padding-y: var(--oks-space-5, 20px);\n    --oks-toast-padding-x: var(--oks-space-5, 20px);\n    --oks-toast-title-font-size: 16px;\n    --oks-toast-message-font-size: 15px;\n    --oks-toast-icon-box: 36px;\n    --oks-toast-icon-glyph: 22px;\n  }\n  :where(.oksToastIcon) {\n    color: var(--oks-toast-icon-fg, var(--oks-toast-accent, currentColor));\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--oks-toast-icon-box);\n    height: var(--oks-toast-icon-box);\n    border-radius: var(--oks-radius-sm, 0.25rem);\n    background-color: var( --oks-toast-icon-bg, color-mix(in srgb, var(--oks-toast-accent, #2563eb) 12%, transparent) );\n    flex: none;\n  }\n  :where(.oksToastIcon svg) {\n    width: var(--oks-toast-icon-glyph);\n    height: var(--oks-toast-icon-glyph);\n  }\n  :where(.oksToastLoading) {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n  }\n  :where(.oksToastProgressTrack) {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 2px;\n    background-color: color-mix(in srgb, var(--oks-toast-fg, currentColor) 20%, transparent);\n    pointer-events: none;\n  }\n  :where(.oksToastProgressIndicator) {\n    height: 100%;\n    width: 100%;\n    background-color: var(--oks-toast-fg, currentColor);\n    opacity: 0.6;\n    transform-origin: left;\n    transform: scaleX(1);\n    pointer-events: none;\n  }\n  :where(.oksToast[data-motion=reduced] .oksToastProgressIndicator) {\n    transition: none !important;\n  }\n  :where(.oksToastBody) {\n    flex: 1;\n    min-width: 0;\n  }\n  :where(.oksToastTitle) {\n    font-weight: 600;\n    font-size: var(--oks-toast-title-font-size);\n    line-height: 1.2;\n  }\n  :where(.oksToastMessage) {\n    font-size: var(--oks-toast-message-font-size);\n    line-height: 1.35;\n    opacity: 0.95;\n    word-wrap: break-word;\n  }\n  :where(.oksToastControls) {\n    margin-left: auto;\n    display: inline-flex;\n    align-items: center;\n    gap: var(--oks-space-2, 8px);\n    flex: none;\n  }\n  :where(.oksToastAction) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    color: inherit;\n    padding: 0;\n    margin: 0;\n    font-size: 13px;\n    font-weight: 600;\n    cursor: pointer;\n    text-decoration: underline;\n    text-underline-offset: 3px;\n  }\n  :where(.oksToastClose) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    color: inherit;\n    width: 28px;\n    height: 28px;\n    border-radius: var(--oks-radius-sm, 0.25rem);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n  }\n  :where(.oksToastClose:hover) {\n    background-color: rgba(0, 0, 0, 0.06);\n  }\n  :where(.oksToastClose:focus-visible),\n  :where(.oksToastAction:focus-visible) {\n    outline: 2px solid var(--oks-color-primary-500, #3b82f6);\n    outline-offset: 2px;\n  }\n}\n');

// src/components/Toast/Toast.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var ToastContext = (0, import_react23.createContext)(null);
function mergeClassName16(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function isToastOptions(value) {
  if (!value || typeof value !== "object") return false;
  if ((0, import_react23.isValidElement)(value)) return false;
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
  const ctx = (0, import_react23.useContext)(ToastContext);
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
  const timerId = (0, import_react23.useRef)(null);
  const startedAt = (0, import_react23.useRef)(0);
  const remainingMs = (0, import_react23.useRef)(duration ?? 0);
  const progressRef = (0, import_react23.useRef)(null);
  const canShowDurationBar = stackIndex === 0 && item.showDurationBar && duration != null;
  const setDurationBar = (0, import_react23.useCallback)(
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
  const startDurationBar = (0, import_react23.useCallback)(
    (ms) => {
      if (!canShowDurationBar) return;
      setDurationBar(1, null);
      if (dataMotion === "reduced") return;
      requestAnimationFrame(() => setDurationBar(0, ms));
    },
    [canShowDurationBar, dataMotion, setDurationBar]
  );
  const clear = (0, import_react23.useCallback)(() => {
    if (timerId.current != null) clearTimeout(timerId.current);
    timerId.current = null;
  }, []);
  const arm = (0, import_react23.useCallback)(
    (ms) => {
      clear();
      if (ms <= 0) return;
      startedAt.current = Date.now();
      timerId.current = setTimeout(() => onDismiss(item.id), ms);
    },
    [clear, item.id, onDismiss]
  );
  const pause = (0, import_react23.useCallback)(() => {
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
  const resume = (0, import_react23.useCallback)(() => {
    if (duration == null) return;
    if (item.state !== "open") return;
    arm(remainingMs.current);
    if (canShowDurationBar) setDurationBar(0, remainingMs.current);
  }, [arm, canShowDurationBar, duration, item.state, setDurationBar]);
  (0, import_react23.useEffect)(() => {
    clear();
    if (duration == null) return;
    remainingMs.current = duration;
    if (stackIndex === 0 && item.state === "open") {
      arm(duration);
      startDurationBar(duration);
    }
    return () => clear();
  }, [arm, clear, duration, item.state, stackIndex, startDurationBar]);
  (0, import_react23.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
      className: mergeClassName16(
        mergeClassName16(
          mergeClassName16("oksToast", stackIndex > 0 ? "oksToastStacked" : ""),
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
      children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
        "div",
        {
          className: mergeClassName16(
            mergeClassName16("oksToastSurface", classNames?.motionDiv),
            mergeClassName16(classNames?.base, item.className)
          ),
          children: [
            item.type === "loading" && item.loadingComponent ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "div",
              {
                className: mergeClassName16("oksToastLoading", classNames?.loadingComponent),
                "aria-hidden": "true",
                children: item.loadingComponent
              }
            ) : item.showIcon ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "div",
              {
                className: mergeClassName16("oksToastIcon", classNames?.icon),
                "aria-hidden": "true",
                children: item.icon ?? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(StatusIcon, { type: item.type })
              }
            ) : null,
            /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: mergeClassName16("oksToastBody", classNames?.content), children: [
              hasTitle && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: mergeClassName16("oksToastTitle", classNames?.title), children: item.title }),
              hasDescription && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                "div",
                {
                  className: mergeClassName16("oksToastMessage", classNames?.description),
                  children: description
                }
              )
            ] }),
            stackIndex === 0 && (item.action || item.endContent || item.dismissible) && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: mergeClassName16("oksToastControls", classNames?.wrapper), children: [
              item.action && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                "button",
                {
                  type: "button",
                  className: "oksToastAction",
                  onClick: () => item.action?.onClick?.(),
                  children: item.action.label
                }
              ),
              item.endContent,
              item.dismissible && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                CloseButton,
                {
                  ariaLabel: "Close",
                  className: mergeClassName16("oksToastClose", classNames?.closeButton),
                  ...item.closeIcon !== void 0 ? { icon: item.closeIcon } : {},
                  ...classNames?.closeIcon !== void 0 ? { iconClassName: classNames.closeIcon } : {},
                  onClick: () => onDismiss(item.id)
                }
              )
            ] }),
            canShowDurationBar && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "div",
              {
                className: mergeClassName16(
                  "oksToastProgressTrack",
                  classNames?.progressTrack
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                  "div",
                  {
                    ref: progressRef,
                    className: mergeClassName16(
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
  const idCounter = (0, import_react23.useRef)(0);
  const removalTimers = (0, import_react23.useRef)(/* @__PURE__ */ new Map());
  const [items, dispatch] = (0, import_react23.useReducer)(toastReducer, []);
  const itemsRef = (0, import_react23.useRef)([]);
  itemsRef.current = items;
  const scheduleRemoval = (0, import_react23.useCallback)(
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
  const dismiss = (0, import_react23.useCallback)(
    (id) => {
      const current = itemsRef.current.find((t) => t.id === id);
      if (current && current.state !== "closing") current.onDismiss?.(id);
      dispatch({ type: "MARK_CLOSING", id });
      scheduleRemoval(id);
    },
    [scheduleRemoval]
  );
  const dismissAll = (0, import_react23.useCallback)(() => {
    const current = itemsRef.current;
    for (const t of current) {
      if (t.state !== "closing") t.onDismiss?.(t.id);
    }
    dispatch({ type: "MARK_ALL_CLOSING" });
    for (const t of current) scheduleRemoval(t.id);
  }, [scheduleRemoval]);
  const update = (0, import_react23.useCallback)((id, patch) => {
    dispatch({ type: "PATCH", id, patch });
  }, []);
  const show = (0, import_react23.useCallback)(
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
  const promise = (0, import_react23.useCallback)(
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
  const api = (0, import_react23.useMemo)(
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
  (0, import_react23.useEffect)(() => {
    globalToastApi = api;
    return () => {
      if (globalToastApi === api) globalToastApi = null;
    };
  }, [api]);
  (0, import_react23.useEffect)(() => {
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
  (0, import_react23.useEffect)(() => {
    return () => {
      for (const t of removalTimers.current.values()) clearTimeout(t);
      removalTimers.current.clear();
    };
  }, []);
  const grouped = (0, import_react23.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(ToastContext.Provider, { value: api, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Portal, { container, children: Object.entries(grouped).map(([posKey, list]) => {
      const pos = posKey;
      const visibleCount = Math.max(1, resolvedMaxVisible);
      const visible = list.slice(0, visibleCount);
      const visual = visible;
      const overflowCount = Math.max(0, list.length - visibleCount);
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "div",
        {
          "data-position": pos,
          className: mergeClassName16(
            mergeClassName16("oksToastViewport", regionClassNames?.base),
            className
          ),
          style: viewportStyle,
          "aria-live": "polite",
          ...regionDomProps,
          children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            "div",
            {
              className: "oksToastStack",
              "data-position": pos,
              "data-has-overflow": overflowCount > 0 ? "true" : "false",
              "data-overflow-count": String(overflowCount),
              children: visual.map((t, visualIndex) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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

// src/components/FormFieldSet/FormFieldSet.tsx
var import_react34 = require("react");

// src/components/FormFieldSet/CustomFormElements/CheckboxGroupField/CheckboxGroupField.tsx
var import_react24 = require("react");

// src/components/FormFieldSet/CustomFormElements/internal.ts
function mergeClassName17(a, b) {
  const sa = typeof a === "string" ? a : "";
  const sb = typeof b === "string" ? b : "";
  return [sa, sb].filter(Boolean).join(" ");
}
function getToneVar(tone, depth) {
  return `var(--oks-color-${tone}-${depth}, var(--oks-color-primary-${depth}, #3b82f6))`;
}

// src/components/FormFieldSet/CustomFormElements/CheckboxGroupField/CheckboxGroupField.module.css
styleInject("@layer components {\n  :where(.oksCheckboxGroupField) {\n    --oks-checkbox-fg: var(--oks-palette-neutral-950, #0a0a0a);\n    --oks-checkbox-muted: var(--oks-palette-neutral-700, #404040);\n    --oks-checkbox-border: var(--oks-palette-neutral-300, #d4d4d4);\n    --oks-checkbox-border-focus: var(--oks-checkbox-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-checkbox-error: var(--oks-color-danger-500, #e20202);\n    --oks-checkbox-radius: var(--oks-radius-sm, 0.25rem);\n    width: 100%;\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-1, 4px);\n    color: var(--oks-checkbox-fg);\n  }\n  :where(.oksCheckboxGroupFieldLabel) {\n    font-size: 14px;\n    line-height: 1.2;\n  }\n  :where(.oksCheckboxGroupFieldItems) {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--oks-space-2, 8px);\n  }\n  :where(.oksCheckboxGroupFieldItem) {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--oks-space-2, 8px);\n    user-select: none;\n    cursor: pointer;\n  }\n  :where(.oksCheckboxGroupFieldItem[data-disabled=true]) {\n    cursor: not-allowed;\n    opacity: 0.72;\n  }\n  :where(.oksCheckboxGroupFieldInput) {\n    appearance: none;\n    width: 16px;\n    height: 16px;\n    border: 1px solid var(--oks-checkbox-border);\n    border-radius: var(--oks-checkbox-radius);\n    background: #fff;\n    display: inline-block;\n    position: relative;\n    outline: none;\n  }\n  :where(.oksCheckboxGroupFieldInput:checked) {\n    background: var(--oks-checkbox-border-focus);\n    border-color: var(--oks-checkbox-border-focus);\n  }\n  :where(.oksCheckboxGroupFieldInput:focus-visible) {\n    border-color: var(--oks-checkbox-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-checkbox-border-focus) 28%, transparent);\n  }\n  :where(.oksCheckboxGroupField[data-invalid=true] .oksCheckboxGroupFieldInput) {\n    border-color: var(--oks-checkbox-error);\n  }\n  :where(.oksCheckboxGroupField[data-invalid=true] .oksCheckboxGroupFieldInput:focus-visible) {\n    border-color: var(--oks-checkbox-error);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-checkbox-error) 22%, transparent);\n  }\n  :where(.oksCheckboxGroupFieldItemLabel) {\n    font-size: 14px;\n    line-height: 1.2;\n    color: var(--oks-checkbox-muted);\n  }\n  :where(.oksCheckboxGroupFieldDescription) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-checkbox-muted);\n  }\n  :where(.oksCheckboxGroupFieldError) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-checkbox-error);\n  }\n}\n");

// src/components/FormFieldSet/CustomFormElements/CheckboxGroupField/CheckboxGroupField.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var CheckboxGroupField = (0, import_react24.forwardRef)((props, ref) => {
  const {
    label,
    labelPlacement,
    description,
    error,
    size = "md",
    tone = "primary",
    colorDepth = 500,
    className,
    id,
    required,
    disabled,
    options,
    value,
    defaultValue,
    onChange,
    style,
    ...rest
  } = props;
  const reactId = (0, import_react24.useId)();
  const groupId = id ?? `oks-checkbox-group-${reactId}`;
  const isInvalid = Boolean(error);
  const descriptionId = description ? `${groupId}-description` : void 0;
  const errorId = error && error !== true ? `${groupId}-error-message` : void 0;
  const ariaDescribedBy = [descriptionId, errorId].filter(Boolean).join(" ");
  const isControlled = value !== void 0;
  const normalizeValue = (source) => Array.isArray(source) ? source.map(String) : [];
  const [internalValue, setInternalValue] = (0, import_react24.useState)(
    () => normalizeValue(defaultValue)
  );
  (0, import_react24.useEffect)(() => {
    if (!isControlled) return;
    setInternalValue(normalizeValue(value));
  }, [isControlled, value]);
  const currentValue = isControlled ? normalizeValue(value) : internalValue;
  const toneVars = {
    "--oks-checkbox-tone": getToneVar(tone, colorDepth)
  };
  const handleToggle = (val) => {
    if (disabled) return;
    const exists = currentValue.includes(val);
    const next = exists ? currentValue.filter((v) => v !== val) : [...currentValue, val];
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "div",
    {
      ref,
      className: mergeClassName17("oksCheckboxGroupField", className),
      "data-size": size,
      "data-tone": tone,
      "data-invalid": isInvalid ? "true" : "false",
      "data-disabled": disabled ? "true" : "false",
      style: { ...toneVars, ...style },
      children: [
        label ? /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "oksCheckboxGroupFieldLabel", children: [
          label,
          required ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { role: "group", "aria-describedby": ariaDescribedBy || void 0, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "oksCheckboxGroupFieldItems", children: options.map((opt, idx) => {
          const optionId = `${groupId}-${opt.key ?? `${idx}-${opt.value}`}`;
          const checked = currentValue.includes(opt.value);
          return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
            "label",
            {
              className: "oksCheckboxGroupFieldItem",
              "data-disabled": disabled || opt.disabled ? "true" : "false",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                  "input",
                  {
                    ...rest,
                    id: optionId,
                    type: "checkbox",
                    disabled: disabled || opt.disabled,
                    checked,
                    onChange: () => handleToggle(opt.value),
                    className: "oksCheckboxGroupFieldInput",
                    "aria-invalid": isInvalid ? "true" : void 0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "oksCheckboxGroupFieldItemLabel", children: opt.label })
              ]
            },
            opt.key ?? `${idx}-${opt.value}`
          );
        }) }) }),
        description ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { id: descriptionId, className: "oksCheckboxGroupFieldDescription", children: description }) : null,
        error && error !== true ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { id: errorId, className: "oksCheckboxGroupFieldError", role: "alert", children: error }) : null
      ]
    }
  );
});
CheckboxGroupField.displayName = "CheckboxGroupField";

// src/components/FormFieldSet/CustomFormElements/DatePickerField/DatePickerField.tsx
var import_react26 = require("react");

// src/components/FormFieldSet/CustomFormElements/SelectField/SelectField.tsx
var import_react25 = require("react");

// src/components/FormFieldSet/CustomFormElements/SelectField/SelectField.module.css
styleInject("@layer components {\n  :where(.oksSelectField) {\n    --oks-select-bg: #fff;\n    --oks-select-fg: var(--oks-palette-neutral-950, #0a0a0a);\n    --oks-select-border: var(--oks-palette-neutral-300, #d4d4d4);\n    --oks-select-border-hover: var(--oks-palette-neutral-400, #a3a3a3);\n    --oks-select-border-focus: var(--oks-select-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-select-error: var(--oks-color-danger-500, #e20202);\n    --oks-select-radius: var(--oks-radius-md, 0.375rem);\n    --oks-select-height: 40px;\n    --oks-select-font-size: 14px;\n    --oks-select-pad-x: var(--oks-space-3, 12px);\n    --oks-select-pad-y: var(--oks-space-2, 8px);\n    width: 100%;\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-1, 4px);\n    color: var(--oks-select-fg);\n  }\n  :where(.oksSelectField[data-size=xs]) {\n    --oks-select-height: 32px;\n    --oks-select-font-size: 12px;\n    --oks-select-pad-x: var(--oks-space-2, 8px);\n    --oks-select-pad-y: var(--oks-space-1, 4px);\n  }\n  :where(.oksSelectField[data-size=xs-sm]) {\n    --oks-select-height: 36px;\n    --oks-select-font-size: 13px;\n  }\n  :where(.oksSelectField[data-size=sm]) {\n    --oks-select-height: 38px;\n    --oks-select-font-size: 14px;\n  }\n  :where(.oksSelectField[data-size=md]) {\n    --oks-select-height: 44px;\n    --oks-select-font-size: 14px;\n  }\n  :where(.oksSelectField[data-size=lg]) {\n    --oks-select-height: 48px;\n    --oks-select-font-size: 16px;\n    --oks-select-pad-x: var(--oks-space-4, 16px);\n  }\n  :where(.oksSelectField[data-size=xl]) {\n    --oks-select-height: 52px;\n    --oks-select-font-size: 18px;\n    --oks-select-pad-x: var(--oks-space-4, 16px);\n    --oks-select-pad-y: var(--oks-space-3, 12px);\n  }\n  :where(.oksSelectField[data-radius=none]) {\n    --oks-select-radius: 0;\n  }\n  :where(.oksSelectField[data-radius=sm]) {\n    --oks-select-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksSelectField[data-radius=md]) {\n    --oks-select-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksSelectField[data-radius=lg]) {\n    --oks-select-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksSelectField[data-radius=full]) {\n    --oks-select-radius: 9999px;\n  }\n  :where(.oksSelectFieldLabel) {\n    font-size: 14px;\n    line-height: 1.2;\n    color: var(--oks-palette-neutral-950, #0a0a0a);\n  }\n  :where(.oksSelectFieldControl) {\n    position: relative;\n    min-width: 0;\n    width: 100%;\n  }\n  :where(.oksSelectFieldInput) {\n    appearance: none;\n    width: 100%;\n    min-width: 0;\n    box-sizing: border-box;\n    height: var(--oks-select-height);\n    padding: var(--oks-select-pad-y) var(--oks-select-pad-x);\n    border-radius: var(--oks-select-radius);\n    border: 1px solid var(--oks-select-border);\n    background: var(--oks-select-bg);\n    color: inherit;\n    font-size: var(--oks-select-font-size);\n    line-height: 1.2;\n    outline: none;\n  }\n  :where(.oksSelectFieldTrigger) {\n    width: 100%;\n    min-width: 0;\n    box-sizing: border-box;\n    height: var(--oks-select-height);\n    padding: var(--oks-select-pad-y) var(--oks-select-pad-x);\n    border-radius: var(--oks-select-radius);\n    border: 1px solid var(--oks-select-border);\n    background: var(--oks-select-bg);\n    color: inherit;\n    font-size: var(--oks-select-font-size);\n    line-height: 1.2;\n    outline: none;\n    text-align: left;\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--oks-space-2, 8px);\n  }\n  :where(.oksSelectFieldTriggerValue) {\n    min-width: 0;\n    display: inline-flex;\n    align-items: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  :where(.oksSelectFieldChips) {\n    min-width: 0;\n    max-width: 100%;\n    display: inline-flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    gap: var(--oks-space-2, 8px);\n    overflow: hidden;\n  }\n  :where(.oksSelectFieldChipRemove) {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 18px;\n    height: 18px;\n    border-radius: 9999px;\n    cursor: pointer;\n    color: inherit;\n    opacity: 0.8;\n  }\n  :where(.oksSelectFieldChipRemove:hover) {\n    opacity: 1;\n    background: color-mix(in srgb, currentColor 10%, transparent);\n  }\n  :where(.oksSelectField[data-placeholder-shown=true] .oksSelectFieldInput) {\n    color: var(--oks-palette-neutral-500, #737373);\n  }\n  :where(.oksSelectField[data-placeholder-shown=true] .oksSelectFieldTrigger) {\n    color: var(--oks-palette-neutral-500, #737373);\n  }\n  :where(.oksSelectField[data-variant=soft] .oksSelectFieldInput) {\n    background: var(--oks-palette-neutral-50, #fafafa);\n    border: none;\n  }\n  :where(.oksSelectField[data-variant=soft] .oksSelectFieldTrigger) {\n    background: var(--oks-palette-neutral-50, #fafafa);\n    border: none;\n  }\n  :where(.oksSelectFieldInput:hover) {\n    border-color: var(--oks-select-border-hover);\n  }\n  :where(.oksSelectFieldTrigger:hover) {\n    border-color: var(--oks-select-border-hover);\n  }\n  :where(.oksSelectFieldInput:focus-visible),\n  :where(.oksSelectFieldControl:focus-within .oksSelectFieldInput) {\n    border-color: var(--oks-select-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-select-border-focus) 28%, transparent);\n  }\n  :where(.oksSelectFieldTrigger:focus-visible),\n  :where(.oksSelectFieldControl:focus-within .oksSelectFieldTrigger) {\n    border-color: var(--oks-select-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-select-border-focus) 28%, transparent);\n  }\n  :where(.oksSelectField[data-invalid=true] .oksSelectFieldInput) {\n    border-color: var(--oks-select-error);\n  }\n  :where(.oksSelectField[data-invalid=true] .oksSelectFieldTrigger) {\n    border-color: var(--oks-select-error);\n  }\n  :where(.oksSelectField[data-invalid=true] .oksSelectFieldInput:focus-visible),\n  :where(.oksSelectField[data-invalid=true] .oksSelectFieldControl:focus-within .oksSelectFieldInput) {\n    border-color: var(--oks-select-error);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-select-error) 22%, transparent);\n  }\n  :where(.oksSelectField[data-invalid=true] .oksSelectFieldTrigger:focus-visible),\n  :where(.oksSelectField[data-invalid=true] .oksSelectFieldControl:focus-within .oksSelectFieldTrigger) {\n    border-color: var(--oks-select-error);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-select-error) 22%, transparent);\n  }\n  :where(.oksSelectField[data-disabled=true] .oksSelectFieldInput) {\n    cursor: not-allowed;\n    opacity: 0.72;\n  }\n  :where(.oksSelectField[data-disabled=true] .oksSelectFieldTrigger) {\n    cursor: not-allowed;\n    opacity: 0.72;\n  }\n  :where(.oksSelectField[data-label-placement=floating] .oksSelectFieldControl) {\n    position: relative;\n  }\n  :where(.oksSelectField[data-label-placement=floating] .oksSelectFieldInput),\n  :where(.oksSelectField[data-label-placement=floating] .oksSelectFieldTrigger) {\n    padding-top: calc(var(--oks-select-pad-y) + 10px);\n  }\n  :where(.oksSelectField[data-label-placement=floating] .oksSelectFieldControl > .oksSelectFieldLabel) {\n    position: absolute;\n    left: var(--oks-select-pad-x);\n    top: 50%;\n    transform: translateY(-50%);\n    font-size: var(--oks-select-font-size);\n    line-height: 1;\n    color: var(--oks-palette-neutral-500, #737373);\n    pointer-events: none;\n    max-width: calc(100% - (2 * var(--oks-select-pad-x)));\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    transition:\n      top 140ms ease,\n      transform 140ms ease,\n      font-size 140ms ease,\n      color 140ms ease;\n  }\n  .oksSelectField[data-label-placement=floating][data-placeholder-shown=true] .oksSelectFieldInput {\n    color: transparent;\n  }\n  .oksSelectField[data-label-placement=floating][data-placeholder-shown=true] .oksSelectFieldTriggerValue {\n    color: transparent;\n  }\n  .oksSelectField[data-label-placement=floating][data-placeholder-shown=true] .oksSelectFieldControl:focus-within .oksSelectFieldInput {\n    color: var(--oks-palette-neutral-500, #737373);\n  }\n  .oksSelectField[data-label-placement=floating][data-placeholder-shown=true] .oksSelectFieldControl:focus-within .oksSelectFieldTriggerValue {\n    color: var(--oks-palette-neutral-500, #737373);\n  }\n  :where(.oksSelectField[data-label-placement=floating] .oksSelectFieldControl:focus-within > .oksSelectFieldLabel),\n  :where(.oksSelectField[data-label-placement=floating][data-placeholder-shown=false] .oksSelectFieldControl > .oksSelectFieldLabel) {\n    top: 10px;\n    transform: translateY(0);\n    font-size: 12px;\n    color: var(--oks-select-border-focus);\n  }\n  :where(.oksSelectField[data-label-placement=floating][data-invalid=true] .oksSelectFieldControl:focus-within > .oksSelectFieldLabel) {\n    color: var(--oks-select-error);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :where(.oksSelectField[data-label-placement=floating] .oksSelectFieldControl > .oksSelectFieldLabel) {\n      transition: none;\n    }\n  }\n  :where(.oksSelectField[data-variant=underline] .oksSelectFieldInput) {\n    border-radius: 0;\n    border: none;\n    border-bottom: 1px solid var(--oks-select-border);\n    background: transparent;\n  }\n  :where(.oksSelectField[data-variant=underline] .oksSelectFieldTrigger) {\n    border-radius: 0;\n    border: none;\n    border-bottom: 1px solid var(--oks-select-border);\n    background: transparent;\n  }\n  :where(.oksSelectField[data-variant=underline] .oksSelectFieldInput:hover) {\n    border-bottom-color: var(--oks-select-border-hover);\n  }\n  :where(.oksSelectField[data-variant=underline] .oksSelectFieldTrigger:hover) {\n    border-bottom-color: var(--oks-select-border-hover);\n  }\n  :where(.oksSelectField[data-variant=underline] .oksSelectFieldInput:focus-visible),\n  :where(.oksSelectField[data-variant=underline] .oksSelectFieldControl:focus-within .oksSelectFieldInput) {\n    border-bottom-color: var(--oks-select-border-focus);\n    box-shadow: none;\n  }\n  :where(.oksSelectField[data-variant=underline] .oksSelectFieldTrigger:focus-visible),\n  :where(.oksSelectField[data-variant=underline] .oksSelectFieldControl:focus-within .oksSelectFieldTrigger) {\n    border-bottom-color: var(--oks-select-border-focus);\n    box-shadow: none;\n  }\n  :where(.oksSelectField[data-variant=underline][data-invalid=true] .oksSelectFieldInput) {\n    border-bottom-color: var(--oks-select-error);\n  }\n  :where(.oksSelectField[data-variant=underline][data-invalid=true] .oksSelectFieldTrigger) {\n    border-bottom-color: var(--oks-select-error);\n  }\n  :where(.oksSelectField[data-variant=underline][data-invalid=true] .oksSelectFieldInput:focus-visible),\n  :where(.oksSelectField[data-variant=underline][data-invalid=true] .oksSelectFieldControl:focus-within .oksSelectFieldInput) {\n    border-bottom-color: var(--oks-select-error);\n    box-shadow: none;\n  }\n  :where(.oksSelectField[data-variant=underline][data-invalid=true] .oksSelectFieldTrigger:focus-visible),\n  :where(.oksSelectField[data-variant=underline][data-invalid=true] .oksSelectFieldControl:focus-within .oksSelectFieldTrigger) {\n    border-bottom-color: var(--oks-select-error);\n    box-shadow: none;\n  }\n  :where(.oksSelectFieldMenu) {\n    position: fixed;\n    z-index: var(--oks-z-popover, 60);\n    background: var(--oks-select-bg, #fff);\n    border: 1px solid var(--oks-select-border, var(--oks-palette-neutral-300, #d4d4d4));\n    border-radius: var(--oks-select-radius, var(--oks-radius-md, 0.375rem));\n    padding: var(--oks-space-1, 4px);\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);\n    max-height: 260px;\n    overflow: auto;\n  }\n  :where(.oksSelectFieldFilter) {\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    background: var(--oks-select-bg, #fff);\n    padding: var(--oks-space-1, 4px);\n    margin: calc(-1 * var(--oks-space-1, 4px)) calc(-1 * var(--oks-space-1, 4px)) var(--oks-space-1, 4px);\n    border-bottom: 1px solid var(--oks-select-border, var(--oks-palette-neutral-300, #d4d4d4));\n  }\n  :where(.oksSelectFieldFilterInput) {\n    width: 100%;\n    min-width: 0;\n    box-sizing: border-box;\n    height: 34px;\n    padding: 0 var(--oks-space-2, 8px);\n    border-radius: calc(var(--oks-select-radius, var(--oks-radius-md, 0.375rem)) - 2px);\n    border: 1px solid var(--oks-select-border, var(--oks-palette-neutral-300, #d4d4d4));\n    background: var(--oks-select-bg, #fff);\n    color: var(--oks-select-fg, var(--oks-palette-neutral-950, #0a0a0a));\n    font-size: 13px;\n    outline: none;\n  }\n  :where(.oksSelectFieldFilterInput:focus-visible) {\n    border-color: var(--oks-select-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-select-border-focus) 20%, transparent);\n  }\n  :where(.oksSelectFieldOption) {\n    padding: 8px 10px;\n    border-radius: calc(var(--oks-select-radius, var(--oks-radius-md, 0.375rem)) - 2px);\n    cursor: pointer;\n    user-select: none;\n    color: var(--oks-select-fg, var(--oks-palette-neutral-950, #0a0a0a));\n  }\n  :where(.oksSelectFieldOption[data-disabled=true]) {\n    cursor: not-allowed;\n    opacity: 0.55;\n  }\n  :where(.oksSelectFieldOption[data-active=true]) {\n    background: color-mix(in srgb, var( --oks-select-border-focus, var(--oks-select-tone, var(--oks-color-primary-500, #3b82f6)) ) 18%, transparent);\n  }\n  :where(.oksSelectFieldOption[data-selected=true]) {\n    background: color-mix(in srgb, var( --oks-select-border-focus, var(--oks-select-tone, var(--oks-color-primary-500, #3b82f6)) ) 26%, transparent);\n  }\n  :where(.oksSelectFieldDescription) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-palette-neutral-700, #404040);\n  }\n  :where(.oksSelectFieldError) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-select-error);\n  }\n}\n");

// src/components/FormFieldSet/CustomFormElements/SelectField/SelectField.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var SelectField = (0, import_react25.forwardRef)(
  (props, ref) => {
    const {
      label,
      labelPlacement = "top",
      description,
      error,
      size = "md",
      variant = "outline",
      color,
      tone,
      colorDepth = 500,
      radius,
      rounded,
      className,
      id,
      required,
      disabled,
      options = [],
      placeholderOption = "Select\u2026",
      native = false,
      onValueChange,
      style,
      ...rest
    } = props;
    const resolvedColor = color ?? tone ?? "default";
    const resolvedRadius = radius ?? rounded ?? "md";
    const reactId = (0, import_react25.useId)();
    const fieldId = id ?? `oks-select-${reactId}`;
    const describedBy = rest["aria-describedby"];
    const descriptionId = description ? `${fieldId}-description` : void 0;
    const errorId = error && error !== true ? `${fieldId}-error-message` : void 0;
    const ariaDescribedBy = [describedBy, descriptionId, errorId].filter(Boolean).join(" ");
    const isInvalid = Boolean(error);
    const isMultiple = Boolean(rest.multiple);
    const isNative = native;
    const canRenderPlaceholderOption = !isMultiple && placeholderOption !== null && placeholderOption !== void 0;
    const normalizeValue = (input) => {
      if (isMultiple) {
        if (Array.isArray(input)) return input.map((v) => String(v));
        return [];
      }
      if (input === null || input === void 0) return "";
      if (Array.isArray(input)) return String(input[0] ?? "");
      return String(input);
    };
    const [uncontrolledValue, setUncontrolledValue] = (0, import_react25.useState)(() => {
      if (rest.value !== void 0) return normalizeValue(rest.value);
      if (rest.defaultValue !== void 0) return normalizeValue(rest.defaultValue);
      return isMultiple ? [] : "";
    });
    (0, import_react25.useEffect)(() => {
      if (rest.value !== void 0) setUncontrolledValue(normalizeValue(rest.value));
    }, [rest.value, isMultiple]);
    const resolvedValue = rest.value !== void 0 ? normalizeValue(rest.value) : uncontrolledValue;
    const selectedValues = isMultiple ? Array.isArray(resolvedValue) ? resolvedValue : [] : [];
    const selectedValue = isMultiple ? "" : String(resolvedValue);
    const isPlaceholderShown = (0, import_react25.useMemo)(() => {
      if (isMultiple) return selectedValues.length === 0;
      return selectedValue === "";
    }, [isMultiple, selectedValue, selectedValues.length]);
    const toneVars = {
      "--oks-select-tone": getToneVar(resolvedColor, colorDepth)
    };
    const menuThemeVars = (0, import_react25.useMemo)(() => {
      const result = { ...toneVars };
      if (style && typeof style === "object") {
        for (const [k, v] of Object.entries(style)) {
          if (k.startsWith("--")) result[k] = v;
        }
      }
      return result;
    }, [style, toneVars]);
    const topLabel = labelPlacement === "top" ? label : null;
    const floatingLabel = labelPlacement === "floating" ? label : null;
    const triggerRef = (0, import_react25.useRef)(null);
    const menuRef = (0, import_react25.useRef)(null);
    const typeaheadRef = (0, import_react25.useRef)({
      value: "",
      timer: null
    });
    const [isOpen, setIsOpen] = (0, import_react25.useState)(false);
    const [activeIndex, setActiveIndex] = (0, import_react25.useState)(0);
    const [menuStyle, setMenuStyle] = (0, import_react25.useState)(null);
    const [filterQuery, setFilterQuery] = (0, import_react25.useState)("");
    const valueLabelMap = (0, import_react25.useMemo)(() => {
      const map = /* @__PURE__ */ new Map();
      for (const opt of options) map.set(String(opt.value), opt.label);
      return map;
    }, [options]);
    const filteredItems = (0, import_react25.useMemo)(() => {
      const q = filterQuery.trim().toLowerCase();
      if (!q) return options.map((opt, idx) => ({ opt, idx }));
      return options.map((opt, idx) => ({ opt, idx })).filter(({ opt }) => {
        const labelText = typeof opt.label === "string" ? opt.label : "";
        const hay = `${labelText} ${String(opt.value ?? "")}`.toLowerCase();
        return hay.includes(q);
      });
    }, [filterQuery, options]);
    const visibleIndices = (0, import_react25.useMemo)(
      () => filteredItems.map((i) => i.idx),
      [filteredItems]
    );
    (0, import_react25.useEffect)(() => {
      if (!isOpen) return;
      if (visibleIndices.length < 1) return;
      const isVisible = visibleIndices.includes(activeIndex);
      const isEnabled = !options[activeIndex]?.disabled;
      if (isVisible && isEnabled) return;
      const next = visibleIndices.find((i) => !options[i]?.disabled) ?? visibleIndices[0] ?? 0;
      setActiveIndex(next);
    }, [activeIndex, isOpen, options, visibleIndices]);
    (0, import_react25.useEffect)(() => {
      const target = isMultiple ? selectedValues[0] : selectedValue;
      const idx = options.findIndex((o) => String(o.value) === String(target));
      if (idx >= 0) setActiveIndex(idx);
    }, [isMultiple, options, selectedValue, selectedValues, resolvedValue]);
    const canOpen = !disabled && !isNative && options.length > 0;
    const getNextEnabledIndex = (from, dir) => {
      const enabled = visibleIndices.filter((i) => !options[i]?.disabled);
      if (enabled.length < 1) return from;
      const currentPos = enabled.indexOf(from);
      const basePos = currentPos >= 0 ? currentPos : 0;
      const nextPos = (basePos + dir + enabled.length) % enabled.length;
      return enabled[nextPos] ?? from;
    };
    const close = () => {
      setIsOpen(false);
      setFilterQuery("");
    };
    const open = () => {
      if (!canOpen) return;
      setIsOpen(true);
      const target = isMultiple ? selectedValues[0] : selectedValue;
      const selected = options.findIndex((o) => String(o.value) === String(target));
      const base = selected >= 0 ? selected : 0;
      const next = options[base]?.disabled ? getNextEnabledIndex(base, 1) : base;
      setActiveIndex(next);
    };
    const emitValue = (nextValue, nativeEvent) => {
      if (rest.value === void 0) setUncontrolledValue(nextValue);
      onValueChange?.(nextValue);
      if (isMultiple) {
        const syntheticEvent2 = { target: { value: nextValue } };
        rest.onChange?.(syntheticEvent2);
        return;
      }
      if (nativeEvent) {
        rest.onChange?.(nativeEvent);
        return;
      }
      const syntheticEvent = { target: { value: nextValue } };
      rest.onChange?.(syntheticEvent);
    };
    const runTypeahead = (char) => {
      if (!char) return;
      const nextChar = char.toLowerCase();
      const current = typeaheadRef.current.value + nextChar;
      typeaheadRef.current.value = current;
      if (typeaheadRef.current.timer) window.clearTimeout(typeaheadRef.current.timer);
      typeaheadRef.current.timer = window.setTimeout(() => {
        typeaheadRef.current.value = "";
        typeaheadRef.current.timer = null;
      }, 350);
      const findIndex = () => {
        const enabled = visibleIndices.filter((i) => !options[i]?.disabled);
        if (enabled.length < 1) return -1;
        const startPos = Math.max(0, enabled.indexOf(activeIndex));
        const ordered = [...enabled.slice(startPos), ...enabled.slice(0, startPos)];
        for (const idx2 of ordered) {
          const opt = options[idx2];
          if (!opt) continue;
          const text = typeof opt.label === "string" ? opt.label : String(opt.value ?? "");
          if (text.toLowerCase().startsWith(current)) return idx2;
        }
        return -1;
      };
      const idx = findIndex();
      if (idx >= 0) setActiveIndex(idx);
    };
    (0, import_react25.useEffect)(() => {
      if (!isOpen) return;
      const onDocPointerDown = (e) => {
        const t = e.target;
        if (!t) return;
        if (triggerRef.current?.contains(t)) return;
        if (menuRef.current?.contains(t)) return;
        close();
      };
      const onDocKeyDown = (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          close();
          triggerRef.current?.focus();
        }
      };
      document.addEventListener("pointerdown", onDocPointerDown, true);
      document.addEventListener("keydown", onDocKeyDown, true);
      return () => {
        document.removeEventListener("pointerdown", onDocPointerDown, true);
        document.removeEventListener("keydown", onDocKeyDown, true);
      };
    }, [isOpen]);
    (0, import_react25.useEffect)(() => {
      if (!isOpen) return;
      const update = () => {
        const triggerEl = triggerRef.current;
        const menuEl = menuRef.current;
        if (!triggerEl || !menuEl) return;
        const triggerRect = triggerEl.getBoundingClientRect();
        const tooltipRect = menuEl.getBoundingClientRect();
        const pos = computeTooltipPosition({
          triggerRect,
          tooltipRect,
          side: "bottom",
          align: "start",
          offset: 6,
          collisionPadding: 8,
          strategy: "fixed"
        });
        setMenuStyle({
          position: "fixed",
          top: pos.top,
          left: pos.left,
          minWidth: triggerRect.width
        });
      };
      const raf = requestAnimationFrame(update);
      const onScroll = () => update();
      const onResize = () => update();
      window.addEventListener("scroll", onScroll, true);
      window.addEventListener("resize", onResize);
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("scroll", onScroll, true);
        window.removeEventListener("resize", onResize);
      };
    }, [isOpen]);
    const renderValueLabel = () => {
      const selected = options.find((o) => String(o.value) === String(selectedValue));
      if (!selected) return null;
      return selected.label;
    };
    const activeOptionId = `${fieldId}-opt-${activeIndex}`;
    const menuId = `${fieldId}-menu`;
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      "div",
      {
        className: mergeClassName17("oksSelectField", className),
        "data-size": size,
        "data-variant": variant,
        "data-color": resolvedColor,
        "data-radius": resolvedRadius,
        "data-label-placement": labelPlacement,
        "data-placeholder-shown": isPlaceholderShown ? "true" : "false",
        "data-invalid": isInvalid ? "true" : "false",
        "data-disabled": disabled ? "true" : "false",
        style: { ...toneVars, ...style },
        children: [
          topLabel ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("label", { className: "oksSelectFieldLabel", htmlFor: fieldId, children: [
            topLabel,
            required ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
          ] }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "oksSelectFieldControl", children: [
            isNative ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
              "select",
              {
                ...rest,
                ref,
                id: fieldId,
                required,
                disabled,
                className: "oksSelectFieldInput",
                "aria-invalid": isInvalid ? "true" : void 0,
                "aria-describedby": ariaDescribedBy || void 0,
                "aria-errormessage": errorId,
                value: isMultiple ? selectedValues : selectedValue,
                onChange: (e) => {
                  if (isMultiple) {
                    const next = Array.from(e.currentTarget.selectedOptions).map(
                      (o) => String(o.value)
                    );
                    emitValue(next, e);
                    return;
                  }
                  emitValue(String(e.currentTarget.value), e);
                },
                children: [
                  canRenderPlaceholderOption ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: "", disabled: required, children: placeholderOption }) : null,
                  options.map((opt, idx) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                    "option",
                    {
                      value: opt.value,
                      disabled: opt.disabled,
                      children: opt.label
                    },
                    opt.key ?? `${idx}-${opt.value}`
                  ))
                ]
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                "button",
                {
                  ref: triggerRef,
                  id: fieldId,
                  type: "button",
                  className: "oksSelectFieldTrigger",
                  disabled,
                  "aria-label": rest["aria-label"],
                  "aria-labelledby": rest["aria-labelledby"],
                  "aria-invalid": isInvalid ? "true" : void 0,
                  "aria-describedby": ariaDescribedBy || void 0,
                  "aria-errormessage": errorId,
                  "aria-haspopup": "listbox",
                  "aria-expanded": isOpen ? "true" : "false",
                  "aria-controls": isOpen ? menuId : void 0,
                  "aria-activedescendant": isOpen ? activeOptionId : void 0,
                  onClick: () => isOpen ? close() : open(),
                  onBlur: (e) => {
                    rest.onBlur?.(e);
                    requestAnimationFrame(() => {
                      const ae = document.activeElement;
                      if (!ae) return;
                      if (triggerRef.current?.contains(ae)) return;
                      if (menuRef.current?.contains(ae)) return;
                      close();
                    });
                  },
                  onKeyDown: (e) => {
                    if (disabled) return;
                    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
                      if (!isOpen) open();
                      runTypeahead(e.key);
                      return;
                    }
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      if (!isOpen) {
                        open();
                        return;
                      }
                      setActiveIndex((i) => getNextEnabledIndex(i, 1));
                      return;
                    }
                    if (e.key === "ArrowUp") {
                      e.preventDefault();
                      if (!isOpen) {
                        open();
                        return;
                      }
                      setActiveIndex((i) => getNextEnabledIndex(i, -1));
                      return;
                    }
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      if (!isOpen) {
                        open();
                        return;
                      }
                      const opt = options[activeIndex];
                      if (opt && !opt.disabled) {
                        if (isMultiple) {
                          const v = String(opt.value);
                          const next = selectedValues.includes(v) ? selectedValues.filter((x) => x !== v) : [...selectedValues, v];
                          emitValue(next);
                        } else {
                          emitValue(String(opt.value));
                          close();
                        }
                      }
                      return;
                    }
                    if (e.key === "Escape") {
                      if (isOpen) {
                        e.preventDefault();
                        close();
                      }
                      return;
                    }
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "oksSelectFieldTriggerValue", children: isMultiple ? selectedValues.length < 1 ? placeholderOption : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "oksSelectFieldChips", children: selectedValues.map((v) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                    Chip,
                    {
                      size: "sm",
                      variant: "flat",
                      endContent: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                        "span",
                        {
                          className: "oksSelectFieldChipRemove",
                          role: "button",
                          tabIndex: -1,
                          "aria-label": "Remove",
                          onMouseDown: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          },
                          onClick: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            emitValue(selectedValues.filter((x) => x !== v));
                          },
                          children: "\xD7"
                        }
                      ),
                      onMouseDown: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      },
                      children: valueLabelMap.get(v) ?? v
                    },
                    v
                  )) }) : isPlaceholderShown ? placeholderOption : renderValueLabel() })
                }
              ),
              isOpen ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
                "div",
                {
                  ref: menuRef,
                  id: menuId,
                  className: "oksSelectFieldMenu",
                  role: "listbox",
                  "aria-multiselectable": isMultiple ? "true" : void 0,
                  style: menuStyle ? { ...menuThemeVars, ...menuStyle } : menuThemeVars,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "oksSelectFieldFilter", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                      "input",
                      {
                        className: "oksSelectFieldFilterInput",
                        value: filterQuery,
                        onChange: (e) => setFilterQuery(String(e.currentTarget.value)),
                        placeholder: "Filter\u2026",
                        "aria-label": "Filter options",
                        onKeyDown: (e) => {
                          if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setActiveIndex((i) => getNextEnabledIndex(i, 1));
                            return;
                          }
                          if (e.key === "ArrowUp") {
                            e.preventDefault();
                            setActiveIndex((i) => getNextEnabledIndex(i, -1));
                            return;
                          }
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            const opt = options[activeIndex];
                            if (opt && !opt.disabled) {
                              if (isMultiple) {
                                const v = String(opt.value);
                                const next = selectedValues.includes(v) ? selectedValues.filter((x) => x !== v) : [...selectedValues, v];
                                emitValue(next);
                              } else {
                                emitValue(String(opt.value));
                                close();
                                triggerRef.current?.focus();
                              }
                            }
                            return;
                          }
                          if (e.key === "Escape") {
                            e.preventDefault();
                            close();
                            triggerRef.current?.focus();
                          }
                        }
                      }
                    ) }),
                    filteredItems.map(({ opt, idx }) => {
                      const isSelected = isMultiple ? selectedValues.includes(String(opt.value)) : String(opt.value) === String(selectedValue);
                      const isActive = idx === activeIndex;
                      return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                        "div",
                        {
                          id: `${fieldId}-opt-${idx}`,
                          role: "option",
                          "aria-selected": isSelected ? "true" : "false",
                          "data-selected": isSelected ? "true" : "false",
                          "data-active": isActive ? "true" : "false",
                          "data-disabled": opt.disabled ? "true" : "false",
                          className: "oksSelectFieldOption",
                          onMouseEnter: () => {
                            if (opt.disabled) return;
                            setActiveIndex(idx);
                          },
                          onMouseDown: (e) => e.preventDefault(),
                          onClick: () => {
                            if (opt.disabled) return;
                            if (isMultiple) {
                              const v = String(opt.value);
                              const next = selectedValues.includes(v) ? selectedValues.filter((x) => x !== v) : [...selectedValues, v];
                              emitValue(next);
                              return;
                            }
                            emitValue(String(opt.value));
                            close();
                            triggerRef.current?.focus();
                          },
                          children: opt.label
                        },
                        opt.key ?? `${idx}-${opt.value}`
                      );
                    })
                  ]
                }
              ) }) : null
            ] }),
            floatingLabel ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("label", { className: "oksSelectFieldLabel", htmlFor: fieldId, children: [
              floatingLabel,
              required ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
            ] }) : null
          ] }),
          description ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { id: descriptionId, className: "oksSelectFieldDescription", children: description }) : null,
          error && error !== true ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { id: errorId, className: "oksSelectFieldError", role: "alert", children: error }) : null
        ]
      }
    );
  }
);
SelectField.displayName = "SelectField";

// src/components/FormFieldSet/CustomFormElements/DatePickerField/DatePickerField.module.css
styleInject('@layer components {\n  :where(.oksDatePickerField, .oksDatePickerFieldPopover) {\n    --oks-date-picker-bg: #fff;\n    --oks-date-picker-fg: var(--oks-palette-neutral-950, #0a0a0a);\n    --oks-date-picker-border: var(--oks-palette-neutral-300, #d4d4d4);\n    --oks-date-picker-border-hover: var(--oks-palette-neutral-400, #a3a3a3);\n    --oks-date-picker-border-focus: var( --oks-date-picker-tone, var(--oks-color-primary-500, #3b82f6) );\n    --oks-date-picker-error: var(--oks-color-danger-500, #e20202);\n    --oks-date-picker-radius: var(--oks-radius-md, 0.375rem);\n    --oks-date-picker-popover-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);\n    --oks-date-picker-accent: var( --oks-date-picker-tone, var(--oks-color-primary-500, #3b82f6) );\n  }\n  :where(.oksDatePickerField) {\n    --oks-date-picker-height: 40px;\n    --oks-date-picker-font-size: 14px;\n    --oks-date-picker-pad-x: var(--oks-space-3, 12px);\n    --oks-date-picker-pad-y: var(--oks-space-2, 8px);\n    --oks-date-picker-icon-pad: 40px;\n    width: 100%;\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-1, 4px);\n    color: var(--oks-date-picker-fg);\n  }\n  :where(.oksDatePickerField[data-size=xs]) {\n    --oks-date-picker-height: 32px;\n    --oks-date-picker-font-size: 12px;\n    --oks-date-picker-pad-x: var(--oks-space-2, 8px);\n    --oks-date-picker-pad-y: var(--oks-space-1, 4px);\n  }\n  :where(.oksDatePickerField[data-size=xs-sm]) {\n    --oks-date-picker-height: 36px;\n    --oks-date-picker-font-size: 13px;\n  }\n  :where(.oksDatePickerField[data-size=sm]) {\n    --oks-date-picker-height: 38px;\n    --oks-date-picker-font-size: 14px;\n  }\n  :where(.oksDatePickerField[data-size=md]) {\n    --oks-date-picker-height: 44px;\n    --oks-date-picker-font-size: 14px;\n  }\n  :where(.oksDatePickerField[data-size=lg]) {\n    --oks-date-picker-height: 48px;\n    --oks-date-picker-font-size: 16px;\n    --oks-date-picker-pad-x: var(--oks-space-4, 16px);\n  }\n  :where(.oksDatePickerField[data-size=xl]) {\n    --oks-date-picker-height: 52px;\n    --oks-date-picker-font-size: 18px;\n    --oks-date-picker-pad-x: var(--oks-space-4, 16px);\n    --oks-date-picker-pad-y: var(--oks-space-3, 12px);\n  }\n  :where(.oksDatePickerFieldLabel) {\n    font-size: 14px;\n    line-height: 1.2;\n    color: var(--oks-palette-neutral-950, #0a0a0a);\n  }\n  :where(.oksDatePickerFieldControl) {\n    width: 100%;\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-2, 8px);\n  }\n  :where(.oksDatePickerFieldInput) {\n    appearance: none;\n    width: 100%;\n    min-width: 0;\n    box-sizing: border-box;\n    height: var(--oks-date-picker-height);\n    padding: var(--oks-date-picker-pad-y) var(--oks-date-picker-pad-x);\n    padding-right: var(--oks-date-picker-icon-pad);\n    border-radius: var(--oks-date-picker-radius);\n    border: 1px solid var(--oks-date-picker-border);\n    background: var(--oks-date-picker-bg);\n    color: inherit;\n    font-size: var(--oks-date-picker-font-size);\n    line-height: 1.2;\n    outline: none;\n  }\n  :where(.oksDatePickerFieldRange) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--oks-space-2, 8px);\n    min-width: 0;\n  }\n  :where(.oksDatePickerField[data-variant=soft] .oksDatePickerFieldInput) {\n    background: var(--oks-palette-neutral-50, #fafafa);\n    border: none;\n  }\n  :where(.oksDatePickerFieldInput:hover) {\n    border-color: var(--oks-date-picker-border-hover);\n  }\n  :where(.oksDatePickerFieldInput:focus-visible),\n  :where(.oksDatePickerFieldControl:focus-within .oksDatePickerFieldInput) {\n    border-color: var(--oks-date-picker-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-border-focus) 28%, transparent);\n  }\n  :where(.oksDatePickerField[data-invalid=true] .oksDatePickerFieldInput) {\n    border-color: var(--oks-date-picker-error);\n  }\n  :where(.oksDatePickerField[data-invalid=true] .oksDatePickerFieldInput:focus-visible),\n  :where(.oksDatePickerField[data-invalid=true] .oksDatePickerFieldControl:focus-within .oksDatePickerFieldInput) {\n    border-color: var(--oks-date-picker-error);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-error) 22%, transparent);\n  }\n  :where(.oksDatePickerField[data-disabled=true] .oksDatePickerFieldInput) {\n    cursor: not-allowed;\n    opacity: 0.72;\n  }\n  :where(.oksDatePickerFieldPresets) {\n    width: 100%;\n  }\n  :where(.oksDatePickerFieldDescription) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-palette-neutral-700, #404040);\n  }\n  :where(.oksDatePickerFieldError) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-date-picker-error);\n  }\n  :where(.oksDatePickerFieldTriggerWrap) {\n    position: relative;\n  }\n  :where(.oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap > .oksDatePickerFieldLabel) {\n    position: absolute;\n    left: var(--oks-date-picker-pad-x);\n    top: 50%;\n    transform: translateY(-50%);\n    font-size: var(--oks-date-picker-font-size);\n    line-height: 1;\n    color: var(--oks-palette-neutral-500, #737373);\n    pointer-events: none;\n    max-width: calc(100% - (2 * var(--oks-date-picker-pad-x)) - var(--oks-date-picker-icon-pad));\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    transition:\n      top 140ms ease,\n      transform 140ms ease,\n      font-size 140ms ease,\n      color 140ms ease;\n  }\n  .oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldInput {\n    padding-top: calc(var(--oks-date-picker-pad-y) + 10px);\n  }\n  .oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap[data-trigger=single] .oksDatePickerFieldInput::placeholder {\n    color: transparent;\n    opacity: 1;\n    transition: color 140ms ease;\n  }\n  .oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap[data-trigger=single]:focus-within .oksDatePickerFieldInput::placeholder {\n    color: var(--oks-palette-neutral-500, #737373);\n  }\n  :where(.oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap[data-trigger=dual] > .oksDatePickerFieldLabel) {\n    top: 10px;\n    transform: translateY(0);\n    font-size: 12px;\n  }\n  :where(.oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap:focus-within > .oksDatePickerFieldLabel),\n  :where(.oksDatePickerField[data-label-placement=floating][data-has-value=true] .oksDatePickerFieldTriggerWrap > .oksDatePickerFieldLabel) {\n    top: 10px;\n    transform: translateY(0);\n    font-size: 12px;\n    color: var(--oks-date-picker-border-focus);\n  }\n  :where(.oksDatePickerField[data-label-placement=floating][data-invalid=true] .oksDatePickerFieldTriggerWrap:focus-within > .oksDatePickerFieldLabel) {\n    color: var(--oks-date-picker-error);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap > .oksDatePickerFieldLabel,\n    .oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap[data-trigger=single] .oksDatePickerFieldInput::placeholder {\n      transition: none;\n    }\n  }\n  :where(.oksDatePickerField[data-clear-button=true] .oksDatePickerFieldInput) {\n    padding-right: calc(var(--oks-date-picker-icon-pad) + 28px);\n  }\n  :where(.oksDatePickerFieldDualTrigger) {\n    width: 100%;\n    min-width: 0;\n    display: grid;\n    grid-template-columns: 1fr auto 1fr;\n    gap: var(--oks-space-2, 8px);\n    align-items: center;\n    box-sizing: border-box;\n    height: var(--oks-date-picker-height);\n    border-radius: var(--oks-date-picker-radius);\n    border: 1px solid var(--oks-date-picker-border);\n    background: var(--oks-date-picker-bg);\n    padding-right: var(--oks-date-picker-icon-pad);\n  }\n  :where(.oksDatePickerField[data-clear-button=true] .oksDatePickerFieldDualTrigger) {\n    padding-right: calc(var(--oks-date-picker-icon-pad) + 28px);\n  }\n  :where(.oksDatePickerField[data-variant=soft] .oksDatePickerFieldDualTrigger) {\n    background: var(--oks-palette-neutral-50, #fafafa);\n    border: none;\n  }\n  :where(.oksDatePickerFieldDualTrigger:hover) {\n    border-color: var(--oks-date-picker-border-hover);\n  }\n  :where(.oksDatePickerFieldDualTrigger:focus-within) {\n    border-color: var(--oks-date-picker-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-border-focus) 28%, transparent);\n  }\n  :where(.oksDatePickerField[data-invalid=true] .oksDatePickerFieldDualTrigger) {\n    border-color: var(--oks-date-picker-error);\n  }\n  :where(.oksDatePickerField[data-invalid=true] .oksDatePickerFieldDualTrigger:focus-within) {\n    border-color: var(--oks-date-picker-error);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-error) 22%, transparent);\n  }\n  :where(.oksDatePickerField[data-disabled=true] .oksDatePickerFieldDualTrigger) {\n    cursor: not-allowed;\n    opacity: 0.72;\n  }\n  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldInput) {\n    border-radius: 0;\n    border: none;\n    border-bottom: 1px solid var(--oks-date-picker-border);\n    background: transparent;\n  }\n  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldInput:hover) {\n    border-bottom-color: var(--oks-date-picker-border-hover);\n  }\n  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldInput:focus-visible),\n  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldControl:focus-within .oksDatePickerFieldInput) {\n    border-bottom-color: var(--oks-date-picker-border-focus);\n    box-shadow: none;\n  }\n  :where(.oksDatePickerField[data-variant=underline][data-invalid=true] .oksDatePickerFieldInput) {\n    border-bottom-color: var(--oks-date-picker-error);\n  }\n  :where(.oksDatePickerField[data-variant=underline][data-invalid=true] .oksDatePickerFieldInput:focus-visible),\n  :where(.oksDatePickerField[data-variant=underline][data-invalid=true] .oksDatePickerFieldControl:focus-within .oksDatePickerFieldInput) {\n    border-bottom-color: var(--oks-date-picker-error);\n    box-shadow: none;\n  }\n  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldDualTrigger) {\n    border-radius: 0;\n    border: none;\n    border-bottom: 1px solid var(--oks-date-picker-border);\n    background: transparent;\n  }\n  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldDualTrigger:hover) {\n    border-bottom-color: var(--oks-date-picker-border-hover);\n  }\n  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldDualTrigger:focus-within) {\n    border-bottom-color: var(--oks-date-picker-border-focus);\n    box-shadow: none;\n  }\n  :where(.oksDatePickerField[data-variant=underline][data-invalid=true] .oksDatePickerFieldDualTrigger) {\n    border-bottom-color: var(--oks-date-picker-error);\n  }\n  :where(.oksDatePickerField[data-variant=underline][data-invalid=true] .oksDatePickerFieldDualTrigger:focus-within) {\n    border-bottom-color: var(--oks-date-picker-error);\n    box-shadow: none;\n  }\n  :where(.oksDatePickerFieldDualInput) {\n    appearance: none;\n    width: 100%;\n    min-width: 0;\n    box-sizing: border-box;\n    height: calc(var(--oks-date-picker-height) - 2px);\n    padding: 0 var(--oks-date-picker-pad-x);\n    border: 0;\n    background: transparent;\n    color: inherit;\n    font-size: var(--oks-date-picker-font-size);\n    line-height: 1.2;\n    outline: none;\n  }\n  :where(.oksDatePickerFieldDualInput::placeholder) {\n    color: var(--oks-palette-neutral-500, #737373);\n  }\n  :where(.oksDatePickerFieldDualArrow) {\n    color: var(--oks-palette-neutral-500, #737373);\n    user-select: none;\n    white-space: nowrap;\n    display: inline-flex;\n  }\n  :where(.oksDatePickerFieldClearButton) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    color: var(--oks-palette-neutral-500, #737373);\n    position: absolute;\n    right: 36px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 28px;\n    height: 28px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10px;\n    cursor: pointer;\n  }\n  :where(.oksDatePickerFieldClearButton:hover) {\n    background: var(--oks-palette-neutral-50, #fafafa);\n    color: var(--oks-palette-neutral-700, #404040);\n  }\n  :where(.oksDatePickerFieldClearButton:focus-visible) {\n    outline: none;\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-border-focus) 22%, transparent);\n  }\n  :where(.oksDatePickerFieldIcon) {\n    position: absolute;\n    right: var(--oks-space-3, 12px);\n    top: 50%;\n    transform: translateY(-50%);\n    color: var(--oks-palette-neutral-500, #737373);\n    pointer-events: none;\n    display: inline-flex;\n  }\n  :where(.oksDatePickerFieldPopover) {\n    z-index: var(--oks-z-popover, 60);\n    background: var(--oks-date-picker-bg);\n    color: var(--oks-date-picker-fg);\n    border: 1px solid var(--oks-date-picker-border);\n    border-radius: calc(var(--oks-date-picker-radius) + 2px);\n    box-shadow: var(--oks-date-picker-popover-shadow);\n    padding: var(--oks-space-3, 12px);\n    max-width: min(760px, calc(100vw - 16px));\n  }\n  :where(.oksDatePickerFieldPresetsList) {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    max-height: 280px;\n    overflow: auto;\n    padding: 4px;\n  }\n  :where(.oksDatePickerFieldPresetItem) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    text-align: left;\n    padding: 10px 12px;\n    border-radius: 8px;\n    font-size: 14px;\n    color: inherit;\n    cursor: pointer;\n  }\n  :where(.oksDatePickerFieldPresetItem:hover) {\n    background: var(--oks-palette-neutral-50, #fafafa);\n  }\n  :where(.oksDatePickerFieldPresetItem:focus-visible) {\n    outline: none;\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-accent) 22%, transparent);\n  }\n  :where(.oksDatePickerFieldCalendar) {\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-3, 12px);\n  }\n  :where(.oksDatePickerFieldCalendarHeader) {\n    display: grid;\n    grid-template-columns: 32px 1fr 32px 88px;\n    align-items: center;\n    gap: var(--oks-space-2, 8px);\n  }\n  :where(.oksDatePickerFieldCalendarHeader[data-months="2"]) {\n    grid-template-columns: 32px 1fr 32px 96px;\n  }\n  :where(.oksDatePickerFieldMonthLabels) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--oks-space-3, 12px);\n    align-items: center;\n  }\n  :where(.oksDatePickerFieldMonths) {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--oks-space-3, 12px);\n  }\n  :where(.oksDatePickerFieldMonths[data-months="2"]) {\n    grid-template-columns: 1fr 1fr;\n    gap: var(--oks-space-4, 16px);\n  }\n  :where(.oksDatePickerFieldMonth) {\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-2, 8px);\n  }\n  :where(.oksDatePickerFieldNavButton) {\n    appearance: none;\n    width: 32px;\n    height: 32px;\n    border-radius: 10px;\n    border: 1px solid var(--oks-date-picker-border);\n    background: var(--oks-date-picker-bg);\n    color: var(--oks-palette-neutral-700, #404040);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n  }\n  :where(.oksDatePickerFieldNavButton:hover) {\n    border-color: var(--oks-date-picker-border-hover);\n  }\n  :where(.oksDatePickerFieldNavButton:focus-visible) {\n    outline: none;\n    border-color: var(--oks-date-picker-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-border-focus) 22%, transparent);\n  }\n  :where(.oksDatePickerFieldMonthLabel) {\n    font-size: 14px;\n    font-weight: 600;\n    text-align: center;\n  }\n  :where(.oksDatePickerFieldYearInput) {\n    width: 100%;\n    height: 32px;\n    padding: 0 10px;\n    border-radius: 10px;\n    border: 1px solid var(--oks-date-picker-border);\n    background: var(--oks-date-picker-bg);\n    color: inherit;\n    font-size: 14px;\n    outline: none;\n  }\n  :where(.oksDatePickerFieldYearInput:focus-visible) {\n    border-color: var(--oks-date-picker-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-border-focus) 22%, transparent);\n  }\n  :where(.oksDatePickerFieldWeekdays) {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    gap: 4px;\n    color: var(--oks-palette-neutral-500, #737373);\n    font-size: 12px;\n  }\n  :where(.oksDatePickerFieldWeekday) {\n    text-align: center;\n    padding: 4px 0;\n  }\n  :where(.oksDatePickerFieldGrid) {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    gap: 4px;\n  }\n  :where(.oksDatePickerFieldDay) {\n    appearance: none;\n    border: 0;\n    background: transparent;\n    width: 36px;\n    height: 36px;\n    border-radius: 999px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n    color: inherit;\n    cursor: pointer;\n  }\n  :where(.oksDatePickerFieldDay:disabled),\n  :where(.oksDatePickerFieldDay[data-disabled=true]) {\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n  :where(.oksDatePickerFieldDay:disabled:hover),\n  :where(.oksDatePickerFieldDay[data-disabled=true]:hover) {\n    background: transparent;\n  }\n  :where(.oksDatePickerFieldDay[data-outside=true]) {\n    color: var(--oks-palette-neutral-400, #a3a3a3);\n  }\n  :where(.oksDatePickerFieldDay[data-today=true]:not([data-selected=true]):not([data-range-start=true]):not([data-range-end=true])) {\n    box-shadow: inset 0 0 0 1px var(--oks-date-picker-accent);\n  }\n  :where(.oksDatePickerFieldDay[data-range=true]) {\n    background: color-mix(in srgb, var(--oks-date-picker-accent) 10%, transparent);\n    border-radius: 10px;\n  }\n  :where(.oksDatePickerFieldDay[data-range-start=true]),\n  :where(.oksDatePickerFieldDay[data-range-end=true]),\n  :where(.oksDatePickerFieldDay[data-selected=true]) {\n    background: var(--oks-date-picker-accent);\n    color: #fff;\n    border-radius: 999px;\n  }\n  :where(.oksDatePickerFieldDay:not([data-range=true]):not(:disabled):hover) {\n    background: var(--oks-palette-neutral-50, #fafafa);\n  }\n  :where(.oksDatePickerFieldDay[data-selected=true]:hover),\n  :where(.oksDatePickerFieldDay[data-range-start=true]:hover),\n  :where(.oksDatePickerFieldDay[data-range-end=true]:hover) {\n    background: var(--oks-date-picker-accent);\n  }\n  :where(.oksDatePickerFieldDay:focus-visible) {\n    outline: none;\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-accent) 22%, transparent);\n  }\n  :where(.oksDatePickerFieldDay[data-today=true]:focus-visible) {\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-accent) 22%, transparent), inset 0 0 0 1px var(--oks-date-picker-accent);\n  }\n  :where(.oksDatePickerFieldTime) {\n    border-top: 1px solid var(--oks-date-picker-border);\n    padding-top: var(--oks-space-3, 12px);\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-2, 8px);\n  }\n  :where(.oksDatePickerFieldTimeTitle) {\n    font-weight: 600;\n    font-size: 14px;\n  }\n  :where(.oksDatePickerFieldTimeSubTitle) {\n    font-weight: 600;\n    font-size: 13px;\n    color: var(--oks-palette-neutral-700, #404040);\n    margin-bottom: 6px;\n  }\n  :where(.oksDatePickerFieldTimeRow) {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: var(--oks-space-2, 8px);\n  }\n  :where(.oksDatePickerFieldTimeRange) {\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-3, 12px);\n  }\n  :where(.oksDatePickerFieldPopover[data-range=true][data-months="2"] .oksDatePickerFieldTimeRange) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--oks-space-4, 16px);\n    align-items: start;\n  }\n  :where(.oksDatePickerFieldPopover[data-range=true][data-range-trigger=dual] .oksDatePickerFieldTimeSubTitle) {\n    margin-bottom: 8px;\n  }\n  :where(.oksDatePickerFieldPopover[data-range=true][data-range-trigger=dual] .oksDatePickerFieldTimeRow) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  :where(.oksDatePickerFieldPopover[data-range=true][data-range-trigger=dual] .oksDatePickerFieldTimeCol) {\n    gap: 8px;\n  }\n  :where(.oksDatePickerFieldPopover[data-range=true][data-range-trigger=dual] .oksDatePickerFieldTimeSelect.oksSelectField) {\n    gap: 0;\n  }\n  :where(.oksDatePickerFieldTimeCol) {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n  }\n  :where(.oksDatePickerFieldTimeLabel) {\n    font-size: 12px;\n    color: var(--oks-palette-neutral-700, #404040);\n  }\n  :where(.oksDatePickerFieldTimeSelect) {\n    width: 100%;\n  }\n  :where(.oksDatePickerFieldBackToPresets) {\n    margin-top: var(--oks-space-2, 8px);\n    display: flex;\n    justify-content: flex-end;\n  }\n  :where(.oksDatePickerFieldBackButton) {\n    appearance: none;\n    border: 1px solid var(--oks-date-picker-border);\n    background: var(--oks-date-picker-bg);\n    color: inherit;\n    border-radius: 10px;\n    padding: 8px 10px;\n    font-size: 13px;\n    cursor: pointer;\n  }\n  :where(.oksDatePickerFieldBackButton:hover) {\n    border-color: var(--oks-date-picker-border-hover);\n  }\n  :where(.oksDatePickerFieldBackButton:focus-visible) {\n    outline: none;\n    border-color: var(--oks-date-picker-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-border-focus) 22%, transparent);\n  }\n}\n');

// src/components/FormFieldSet/CustomFormElements/DatePickerField/DatePickerField.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var pad2 = (n) => String(n).padStart(2, "0");
var formatDate = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
var formatDateTimeLocal = (d) => `${formatDate(d)}T${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
var startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
var endOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 0, 0);
var startOfWeek = (d) => {
  const day = d.getDay();
  return startOfDay(addDays(d, -day));
};
var endOfWeek = (d) => endOfDay(addDays(startOfWeek(d), 6));
var startOfMonth = (d) => new Date(d.getFullYear(), d.getMonth(), 1, 0, 0, 0, 0);
var endOfMonth = (d) => new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 0, 0);
var startOfYear = (d) => new Date(d.getFullYear(), 0, 1, 0, 0, 0, 0);
var endOfYear = (d) => new Date(d.getFullYear(), 11, 31, 23, 59, 0, 0);
var addDays = (d, days) => {
  const next = new Date(d);
  next.setDate(next.getDate() + days);
  return next;
};
var addMonths = (d, months) => {
  const next = new Date(d);
  next.setMonth(next.getMonth() + months);
  return next;
};
var defaultPresetLabels = {
  today: "Today",
  yesterday: "Yesterday",
  thisWeek: "This Week",
  lastWeek: "Last Week",
  fortnight: "Fortnight",
  thisMonth: "This month",
  lastMonth: "Last month",
  last3Months: "Last 3 months",
  thisYear: "This year",
  lastYear: "Last year",
  custom: "Custom Dates"
};
var resolvePreset = (preset, now, withTime, range) => {
  if (!range) {
    if (withTime) return formatDateTimeLocal(now);
    return formatDate(now);
  }
  const startEnd = (() => {
    if (preset === "today") {
      return { start: startOfDay(now), end: endOfDay(now) };
    }
    if (preset === "yesterday") {
      const y = addDays(now, -1);
      return { start: startOfDay(y), end: endOfDay(y) };
    }
    if (preset === "thisWeek") {
      return { start: startOfWeek(now), end: endOfDay(now) };
    }
    if (preset === "lastWeek") {
      const prev = addDays(now, -7);
      return { start: startOfWeek(prev), end: endOfWeek(prev) };
    }
    if (preset === "fortnight") {
      const start = startOfDay(addDays(now, -13));
      return { start, end: endOfDay(now) };
    }
    if (preset === "thisMonth") {
      return { start: startOfMonth(now), end: endOfDay(now) };
    }
    if (preset === "lastMonth") {
      const prev = addMonths(now, -1);
      return { start: startOfMonth(prev), end: endOfMonth(prev) };
    }
    if (preset === "last3Months") {
      const start = startOfDay(addMonths(now, -3));
      return { start, end: endOfDay(now) };
    }
    if (preset === "thisYear") {
      return { start: startOfYear(now), end: endOfDay(now) };
    }
    if (preset === "lastYear") {
      const prev = new Date(
        now.getFullYear() - 1,
        now.getMonth(),
        now.getDate(),
        now.getHours(),
        now.getMinutes()
      );
      return {
        start: startOfYear(prev),
        end: endOfYear(prev)
      };
    }
    return { start: startOfDay(now), end: endOfDay(now) };
  })();
  return {
    start: withTime ? formatDateTimeLocal(startEnd.start) : formatDate(startEnd.start),
    end: withTime ? formatDateTimeLocal(startEnd.end) : formatDate(startEnd.end)
  };
};
var normalizeRangeValue = (v) => {
  if (v && typeof v === "object") {
    const obj = v;
    return { start: String(obj.start ?? ""), end: String(obj.end ?? "") };
  }
  return { start: "", end: "" };
};
var parseDateOnly = (s) => {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ""));
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  if (!Number.isFinite(y) || !Number.isFinite(mo) || !Number.isFinite(d))
    return null;
  const dt = new Date(y, mo - 1, d, 0, 0, 0, 0);
  if (dt.getFullYear() !== y || dt.getMonth() !== mo - 1 || dt.getDate() !== d)
    return null;
  return dt;
};
var parseDateTimeLocal = (s) => {
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(String(s || ""));
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  const h = Number(m[4]);
  const mi = Number(m[5]);
  if (![y, mo, d, h, mi].every((n) => Number.isFinite(n))) return null;
  const dt = new Date(y, mo - 1, d, h, mi, 0, 0);
  if (dt.getFullYear() !== y || dt.getMonth() !== mo - 1 || dt.getDate() !== d || dt.getHours() !== h || dt.getMinutes() !== mi)
    return null;
  return dt;
};
var monthShortFormatter = new Intl.DateTimeFormat("en", { month: "short" });
var formatPrettyDate = (d) => `${d.getDate()} ${monthShortFormatter.format(d)}, ${d.getFullYear()}`;
var normalizeConstraintDayKey = (v) => {
  if (!v) return "";
  if (v instanceof Date) return formatDate(v);
  const s = String(v);
  const only = parseDateOnly(s);
  if (only) return formatDate(only);
  const dt = parseDateTimeLocal(s);
  if (dt) return formatDate(dt);
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s);
  if (!m) return "";
  const rough = `${m[1]}-${m[2]}-${m[3]}`;
  return parseDateOnly(rough) ? rough : "";
};
var timePartsFromDate = (d) => {
  const h24 = d.getHours();
  const period = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return { hour: String(h12), minute: pad2(d.getMinutes()), period };
};
var to24Hour = (parts) => {
  const h = Number(parts.hour);
  const base = parts.period === "PM" ? 12 : 0;
  const hh = h % 12;
  return hh + base;
};
var applyTimeToDate = (d, parts) => {
  const next = new Date(d);
  next.setHours(to24Hour(parts), Number(parts.minute), 0, 0);
  return next;
};
var formatDisplay = (value, range, withTime, displayFormat) => {
  const formatOne = (s) => {
    if (!s) return "";
    if (displayFormat === "iso") {
      if (!withTime) return s;
      const dt2 = parseDateTimeLocal(s);
      if (!dt2) return s;
      const parts2 = timePartsFromDate(dt2);
      return `${formatDate(dt2)} ${parts2.hour}:${parts2.minute} ${parts2.period}`;
    }
    if (!withTime) {
      const dt2 = parseDateOnly(s);
      return dt2 ? formatPrettyDate(dt2) : s;
    }
    const dt = parseDateTimeLocal(s);
    if (!dt) return s;
    const parts = timePartsFromDate(dt);
    return `${formatPrettyDate(dt)} ${parts.hour}:${parts.minute} ${parts.period}`;
  };
  if (!range) {
    const s = String(value ?? "");
    return formatOne(s);
  }
  const rv = normalizeRangeValue(value);
  const start = rv.start || "";
  const end = rv.end || "";
  if (!start && !end) return "";
  return `${formatOne(start)}${end ? ` to ${formatOne(end)}` : ""}`;
};
var DatePickerField = (0, import_react26.forwardRef)((props, ref) => {
  const {
    label,
    labelPlacement = "top",
    description,
    error,
    size = "md",
    variant = "outline",
    tone = "primary",
    colorDepth = 500,
    className,
    id,
    name,
    required,
    disabled,
    range = false,
    withTime = false,
    showPresets = false,
    presets,
    displayFormat = "pretty",
    clearable = false,
    onClear,
    rangeTrigger = "single",
    monthsToShow: monthsToShowProp,
    minDate,
    maxDate,
    blockedDates,
    value,
    defaultValue,
    onChange,
    onBlur,
    style
  } = props;
  const reactId = (0, import_react26.useId)();
  const baseId = id ?? `oks-datepicker-${reactId}`;
  const isInvalid = Boolean(error);
  const descriptionId = description ? `${baseId}-description` : void 0;
  const errorId = error && error !== true ? `${baseId}-error-message` : void 0;
  const ariaDescribedBy = [descriptionId, errorId].filter(Boolean).join(" ");
  const toneVars = {
    "--oks-date-picker-tone": getToneVar(tone, colorDepth)
  };
  const currentValue = value ?? defaultValue ?? (range ? { start: "", end: "" } : "");
  const rangeValue = range ? normalizeRangeValue(currentValue) : { start: "", end: "" };
  const singleValue = range ? "" : String(currentValue ?? "");
  const triggerWrapRef = (0, import_react26.useRef)(null);
  const startTriggerRef = (0, import_react26.useRef)(null);
  const endTriggerRef = (0, import_react26.useRef)(null);
  const popoverRef = (0, import_react26.useRef)(null);
  const [isOpen, setIsOpen] = (0, import_react26.useState)(false);
  const [popoverStyle, setPopoverStyle] = (0, import_react26.useState)(null);
  const canOpen = !disabled;
  const showRangePresets = Boolean(range && showPresets);
  const [panel, setPanel] = (0, import_react26.useState)(
    showRangePresets ? "presets" : "calendar"
  );
  (0, import_react26.useEffect)(() => {
    if (!isOpen) return;
    setPanel(showRangePresets ? "presets" : "calendar");
  }, [isOpen, showRangePresets]);
  const presetKeys = (0, import_react26.useMemo)(
    () => presets && presets.length > 0 ? presets : range ? [
      "today",
      "yesterday",
      "thisWeek",
      "lastWeek",
      "thisMonth",
      "lastMonth",
      "thisYear",
      "custom"
    ] : ["today", "yesterday", "thisMonth", "lastMonth", "thisYear"],
    [presets, range]
  );
  const popoverThemeVars = (0, import_react26.useMemo)(() => {
    const result = { ...toneVars };
    if (style && typeof style === "object") {
      for (const [k, v] of Object.entries(style)) {
        if (k.startsWith("--")) result[k] = v;
      }
    }
    return result;
  }, [style, toneVars]);
  const monthsToShow = (0, import_react26.useMemo)(() => {
    const v = Number(monthsToShowProp);
    if (v === 1 || v === 2) return v;
    return range ? 2 : 1;
  }, [monthsToShowProp, range]);
  const displayValue = (0, import_react26.useMemo)(
    () => formatDisplay(currentValue, range, withTime, displayFormat),
    [currentValue, range, withTime, displayFormat]
  );
  const placeholder = range ? "Select date range" : "Select date";
  const displayStartValue = (0, import_react26.useMemo)(() => {
    if (!range) return "";
    return formatDisplay(
      rangeValue.start || "",
      false,
      withTime,
      displayFormat
    );
  }, [range, rangeValue.start, withTime, displayFormat]);
  const displayEndValue = (0, import_react26.useMemo)(() => {
    if (!range) return "";
    return formatDisplay(rangeValue.end || "", false, withTime, displayFormat);
  }, [range, rangeValue.end, withTime, displayFormat]);
  const hasValue = (0, import_react26.useMemo)(() => {
    if (!range) return Boolean(String(currentValue ?? ""));
    return Boolean(rangeValue.start || rangeValue.end);
  }, [currentValue, range, rangeValue.start, rangeValue.end]);
  const minDayKey = (0, import_react26.useMemo)(
    () => normalizeConstraintDayKey(minDate),
    [minDate]
  );
  const maxDayKey = (0, import_react26.useMemo)(
    () => normalizeConstraintDayKey(maxDate),
    [maxDate]
  );
  const blockedDaySet = (0, import_react26.useMemo)(() => {
    const set = /* @__PURE__ */ new Set();
    for (const item of blockedDates ?? []) {
      const k = normalizeConstraintDayKey(item);
      if (k) set.add(k);
    }
    return set;
  }, [blockedDates]);
  const isDayDisabled = (0, import_react26.useCallback)(
    (d) => {
      const k = formatDate(d);
      if (minDayKey && k < minDayKey) return true;
      if (maxDayKey && k > maxDayKey) return true;
      if (blockedDaySet.has(k)) return true;
      return false;
    },
    [blockedDaySet, maxDayKey, minDayKey]
  );
  const minDayDate = (0, import_react26.useMemo)(
    () => minDayKey ? parseDateOnly(minDayKey) : null,
    [minDayKey]
  );
  const maxDayDate = (0, import_react26.useMemo)(
    () => maxDayKey ? parseDateOnly(maxDayKey) : null,
    [maxDayKey]
  );
  const clampToMinMax = (0, import_react26.useCallback)(
    (d) => {
      const key = formatDate(d);
      if (minDayKey && minDayDate && key < minDayKey) {
        return new Date(
          minDayDate.getFullYear(),
          minDayDate.getMonth(),
          minDayDate.getDate(),
          d.getHours(),
          d.getMinutes(),
          0,
          0
        );
      }
      if (maxDayKey && maxDayDate && key > maxDayKey) {
        return new Date(
          maxDayDate.getFullYear(),
          maxDayDate.getMonth(),
          maxDayDate.getDate(),
          d.getHours(),
          d.getMinutes(),
          0,
          0
        );
      }
      return d;
    },
    [maxDayDate, maxDayKey, minDayDate, minDayKey]
  );
  const moveToAllowedDay = (0, import_react26.useCallback)(
    (d, dir) => {
      let next = clampToMinMax(d);
      for (let i = 0; i < 370; i++) {
        if (!isDayDisabled(next)) return next;
        next = addDays(next, dir);
        const k = formatDate(next);
        if (minDayKey && k < minDayKey) return null;
        if (maxDayKey && k > maxDayKey) return null;
      }
      return null;
    },
    [clampToMinMax, isDayDisabled, maxDayKey, minDayKey]
  );
  const constrainPresetValue = (0, import_react26.useCallback)(
    (v) => {
      const rv = normalizeRangeValue(v);
      const parse = withTime ? parseDateTimeLocal : parseDateOnly;
      const sd = parse(rv.start);
      const ed = parse(rv.end);
      if (!sd || !ed) return v;
      const start = moveToAllowedDay(sd, 1);
      const end = moveToAllowedDay(ed, -1);
      if (!start || !end) return { start: "", end: "" };
      if (formatDate(start) > formatDate(end)) return { start: "", end: "" };
      return {
        start: withTime ? formatDateTimeLocal(start) : formatDate(start),
        end: withTime ? formatDateTimeLocal(end) : formatDate(end)
      };
    },
    [moveToAllowedDay, withTime]
  );
  const selectedSingleDate = (0, import_react26.useMemo)(() => {
    if (range) return null;
    return withTime ? parseDateTimeLocal(singleValue) : parseDateOnly(singleValue);
  }, [range, withTime, singleValue]);
  const selectedStartDate = (0, import_react26.useMemo)(() => {
    if (!range) return null;
    return withTime ? parseDateTimeLocal(rangeValue.start) : parseDateOnly(rangeValue.start);
  }, [range, withTime, rangeValue.start]);
  const selectedEndDate = (0, import_react26.useMemo)(() => {
    if (!range) return null;
    return withTime ? parseDateTimeLocal(rangeValue.end) : parseDateOnly(rangeValue.end);
  }, [range, withTime, rangeValue.end]);
  const [rangePart, setRangePart] = (0, import_react26.useState)("start");
  const [singleTime, setSingleTime] = (0, import_react26.useState)(() => {
    const dt = parseDateTimeLocal(singleValue);
    return dt ? timePartsFromDate(dt) : { hour: "12", minute: "00", period: "AM" };
  });
  const [startTime, setStartTime] = (0, import_react26.useState)(() => {
    const dt = parseDateTimeLocal(rangeValue.start);
    return dt ? timePartsFromDate(dt) : { hour: "12", minute: "00", period: "AM" };
  });
  const [endTime, setEndTime] = (0, import_react26.useState)(() => {
    const dt = parseDateTimeLocal(rangeValue.end);
    return dt ? timePartsFromDate(dt) : { hour: "11", minute: "59", period: "PM" };
  });
  (0, import_react26.useEffect)(() => {
    if (!withTime) return;
    if (!range) {
      const dt = parseDateTimeLocal(singleValue);
      if (dt) setSingleTime(timePartsFromDate(dt));
    } else {
      const sd = parseDateTimeLocal(rangeValue.start);
      const ed = parseDateTimeLocal(rangeValue.end);
      if (sd) setStartTime(timePartsFromDate(sd));
      if (ed) setEndTime(timePartsFromDate(ed));
    }
  }, [withTime, range, singleValue, rangeValue.start, rangeValue.end]);
  const [viewMonth, setViewMonth] = (0, import_react26.useState)(() => {
    const base = selectedStartDate ?? selectedSingleDate ?? /* @__PURE__ */ new Date();
    return new Date(base.getFullYear(), base.getMonth(), 1, 0, 0, 0, 0);
  });
  const wasOpenRef = (0, import_react26.useRef)(false);
  const prevRangePartRef = (0, import_react26.useRef)("start");
  (0, import_react26.useEffect)(() => {
    const wasOpen = wasOpenRef.current;
    const prevRangePart = prevRangePartRef.current;
    wasOpenRef.current = isOpen;
    prevRangePartRef.current = rangePart;
    if (!isOpen) return;
    const shouldSync = !wasOpen || range && rangeTrigger === "dual" && prevRangePart !== rangePart;
    if (!shouldSync) return;
    const base = range && rangeTrigger === "dual" && rangePart === "end" ? selectedEndDate ?? selectedStartDate ?? /* @__PURE__ */ new Date() : selectedStartDate ?? selectedSingleDate ?? /* @__PURE__ */ new Date();
    setViewMonth(new Date(base.getFullYear(), base.getMonth(), 1, 0, 0, 0, 0));
  }, [
    isOpen,
    range,
    rangePart,
    rangeTrigger,
    selectedEndDate,
    selectedStartDate,
    selectedSingleDate
  ]);
  const open = () => {
    if (!canOpen) return;
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const topLabel = labelPlacement === "top" ? label : null;
  const floatingLabel = labelPlacement === "floating" ? label : null;
  (0, import_react26.useEffect)(() => {
    if (!isOpen) return;
    const onDocPointerDown = (e) => {
      const t = e.target;
      if (!t) return;
      if (triggerWrapRef.current?.contains(t)) return;
      if (popoverRef.current?.contains(t)) return;
      close();
    };
    const onDocKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        if (range && rangeTrigger === "dual") {
          (rangePart === "end" ? endTriggerRef.current : startTriggerRef.current)?.focus();
        } else {
          startTriggerRef.current?.focus();
        }
      }
    };
    document.addEventListener("pointerdown", onDocPointerDown, true);
    document.addEventListener("keydown", onDocKeyDown, true);
    return () => {
      document.removeEventListener("pointerdown", onDocPointerDown, true);
      document.removeEventListener("keydown", onDocKeyDown, true);
    };
  }, [isOpen]);
  (0, import_react26.useEffect)(() => {
    if (!isOpen) return;
    const update = () => {
      const triggerEl = triggerWrapRef.current;
      const popoverEl = popoverRef.current;
      if (!triggerEl || !popoverEl) return;
      const triggerRect = triggerEl.getBoundingClientRect();
      const tooltipRect = popoverEl.getBoundingClientRect();
      const pos = computeTooltipPosition({
        triggerRect,
        tooltipRect,
        side: "bottom",
        align: "start",
        offset: 6,
        collisionPadding: 8,
        strategy: "fixed"
      });
      setPopoverStyle({
        position: "fixed",
        top: pos.top,
        left: pos.left,
        minWidth: triggerRect.width
      });
    };
    const raf = requestAnimationFrame(update);
    const onScroll = () => update();
    const onResize = () => update();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);
  const popoverId = `${baseId}-popover`;
  const monthGrids = (0, import_react26.useMemo)(() => {
    const todayKey = formatDate(/* @__PURE__ */ new Date());
    const startKey = selectedStartDate ? formatDate(selectedStartDate) : "";
    const endKey = selectedEndDate ? formatDate(selectedEndDate) : "";
    const singleKey = selectedSingleDate ? formatDate(selectedSingleDate) : "";
    const rangeStart = startKey && endKey ? startKey <= endKey ? startKey : endKey : "";
    const rangeEnd = startKey && endKey ? startKey <= endKey ? endKey : startKey : "";
    const buildGrid = (month) => {
      const monthStart = new Date(
        month.getFullYear(),
        month.getMonth(),
        1,
        0,
        0,
        0,
        0
      );
      const gridStart = addDays(monthStart, -monthStart.getDay());
      const cells = [];
      for (let i = 0; i < 42; i++) {
        const d = addDays(gridStart, i);
        const k = formatDate(d);
        const inMonth = d.getMonth() === monthStart.getMonth();
        const isToday = k === todayKey;
        const isStart = range ? k === startKey : k === singleKey;
        const isEnd = range ? k === endKey : false;
        const inRange = Boolean(
          rangeStart && rangeEnd && k >= rangeStart && k <= rangeEnd
        );
        const isDisabled = isDayDisabled(d);
        cells.push({
          date: d,
          key: k,
          inMonth,
          isToday,
          isStart,
          isEnd,
          inRange,
          isDisabled
        });
      }
      return cells;
    };
    return Array.from({ length: monthsToShow }, (_, i) => {
      const month = addMonths(viewMonth, i);
      return { month, cells: buildGrid(month) };
    });
  }, [
    monthsToShow,
    range,
    selectedEndDate,
    selectedSingleDate,
    selectedStartDate,
    isDayDisabled,
    viewMonth
  ]);
  const selectDay = (d) => {
    if (disabled) return;
    if (isDayDisabled(d)) return;
    if (!range) {
      const base = withTime ? applyTimeToDate(d, singleTime) : d;
      const next = withTime ? formatDateTimeLocal(base) : formatDate(base);
      onChange?.(next);
      if (!withTime) close();
      return;
    }
    const startStr = rangeValue.start || "";
    const endStr = rangeValue.end || "";
    const startDate = withTime ? parseDateTimeLocal(startStr) : parseDateOnly(startStr);
    const endDate = withTime ? parseDateTimeLocal(endStr) : parseDateOnly(endStr);
    const clickedKey = formatDate(d);
    if (rangeTrigger === "dual") {
      if (rangePart === "start") {
        const clicked3 = withTime ? applyTimeToDate(d, startTime) : d;
        const clickedStr3 = withTime ? formatDateTimeLocal(clicked3) : formatDate(clicked3);
        onChange?.({ start: clickedStr3, end: "" });
        setRangePart("end");
        return;
      }
      const clicked2 = withTime ? applyTimeToDate(d, endTime) : d;
      const clickedStr2 = withTime ? formatDateTimeLocal(clicked2) : formatDate(clicked2);
      if (!startDate) {
        onChange?.({ start: clickedStr2, end: "" });
        return;
      }
      const startKey2 = formatDate(startDate);
      const isBefore2 = clickedKey < startKey2;
      if (isBefore2) {
        const startNext2 = withTime ? formatDateTimeLocal(applyTimeToDate(d, startTime)) : formatDate(d);
        const endNext2 = withTime ? formatDateTimeLocal(applyTimeToDate(startDate, endTime)) : formatDate(startDate);
        onChange?.({ start: startNext2, end: endNext2 });
      } else {
        onChange?.({ start: startStr, end: clickedStr2 });
      }
      if (!withTime) close();
      return;
    }
    const clicked = withTime ? applyTimeToDate(d, startDate && !endDate ? endTime : startTime) : d;
    const clickedStr = withTime ? formatDateTimeLocal(clicked) : formatDate(clicked);
    if (!startDate || startDate && endDate) {
      onChange?.({ start: clickedStr, end: "" });
      return;
    }
    const startOnly = startDate;
    const startKey = formatDate(startOnly);
    const isBefore = clickedKey < startKey;
    const startNextDate = isBefore ? d : startOnly;
    const endNextDate = isBefore ? startOnly : d;
    const startNext = withTime ? formatDateTimeLocal(applyTimeToDate(startNextDate, startTime)) : formatDate(startNextDate);
    const endNext = withTime ? formatDateTimeLocal(applyTimeToDate(endNextDate, endTime)) : formatDate(endNextDate);
    onChange?.({ start: startNext, end: endNext });
    if (!withTime) close();
  };
  const clear = () => {
    if (disabled) return;
    if (!hasValue) return;
    if (range) onChange?.({ start: "", end: "" });
    else onChange?.("");
    onClear?.();
    setRangePart("start");
    close();
  };
  const hoursOptions = (0, import_react26.useMemo)(
    () => Array.from({ length: 12 }, (_, i) => String(i + 1)),
    []
  );
  const minutesOptions = (0, import_react26.useMemo)(
    () => Array.from({ length: 60 }, (_, i) => pad2(i)),
    []
  );
  const updateTime = (kind, next) => {
    if (kind === "single") {
      setSingleTime(next);
      const dt2 = parseDateTimeLocal(singleValue);
      if (dt2) onChange?.(formatDateTimeLocal(applyTimeToDate(dt2, next)));
      return;
    }
    if (kind === "start") {
      setStartTime(next);
      const dt2 = parseDateTimeLocal(rangeValue.start);
      if (dt2)
        onChange?.({
          start: formatDateTimeLocal(applyTimeToDate(dt2, next)),
          end: rangeValue.end
        });
      return;
    }
    setEndTime(next);
    const dt = parseDateTimeLocal(rangeValue.end);
    if (dt)
      onChange?.({
        start: rangeValue.start,
        end: formatDateTimeLocal(applyTimeToDate(dt, next))
      });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "div",
    {
      className: mergeClassName17("oksDatePickerField", className),
      "data-size": size,
      "data-variant": variant,
      "data-tone": tone,
      "data-label-placement": labelPlacement,
      "data-invalid": isInvalid ? "true" : "false",
      "data-disabled": disabled ? "true" : "false",
      "data-range": range ? "true" : "false",
      "data-range-trigger": rangeTrigger,
      "data-months": String(monthsToShow),
      "data-has-value": hasValue ? "true" : "false",
      "data-clear-button": clearable && hasValue ? "true" : "false",
      style: { ...toneVars, ...style },
      children: [
        topLabel ? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("label", { className: "oksDatePickerFieldLabel", htmlFor: baseId, children: [
          topLabel,
          required ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldControl", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
            "div",
            {
              ref: triggerWrapRef,
              className: "oksDatePickerFieldTriggerWrap",
              "data-trigger": range && rangeTrigger === "dual" ? "dual" : "single",
              children: [
                range && rangeTrigger === "dual" ? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldDualTrigger", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                    "input",
                    {
                      ref: (node) => {
                        startTriggerRef.current = node;
                        if (typeof ref === "function") ref(node);
                        else if (ref) ref.current = node;
                      },
                      id: baseId,
                      name: name ? `${name}-start` : void 0,
                      type: "text",
                      readOnly: true,
                      disabled,
                      required,
                      placeholder: "Start",
                      className: "oksDatePickerFieldDualInput",
                      "aria-invalid": isInvalid ? "true" : void 0,
                      "aria-describedby": ariaDescribedBy || void 0,
                      "aria-errormessage": errorId,
                      "aria-haspopup": "dialog",
                      "aria-expanded": isOpen ? "true" : "false",
                      "aria-controls": isOpen ? popoverId : void 0,
                      value: displayStartValue,
                      onClick: () => {
                        if (!canOpen) return;
                        setRangePart("start");
                        open();
                      },
                      onKeyDown: (e) => {
                        if (!canOpen) return;
                        if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                          e.preventDefault();
                          setRangePart("start");
                          open();
                        }
                        if ((e.key === "Backspace" || e.key === "Delete") && clearable && hasValue) {
                          e.preventDefault();
                          clear();
                        }
                      },
                      onBlur: (e) => {
                        onBlur?.(e);
                        requestAnimationFrame(() => {
                          const ae = document.activeElement;
                          if (!ae) return;
                          if (triggerWrapRef.current?.contains(ae)) return;
                          if (popoverRef.current?.contains(ae)) return;
                          close();
                        });
                      }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "oksDatePickerFieldDualArrow", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                    "svg",
                    {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      "aria-hidden": "true",
                      focusable: "false",
                      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                        "path",
                        {
                          d: "M4 10h12m0 0-4-4m4 4-4 4",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                    "input",
                    {
                      ref: (node) => {
                        endTriggerRef.current = node;
                      },
                      id: `${baseId}-end`,
                      name: name ? `${name}-end` : void 0,
                      type: "text",
                      readOnly: true,
                      disabled,
                      required,
                      placeholder: "End",
                      className: "oksDatePickerFieldDualInput",
                      "aria-invalid": isInvalid ? "true" : void 0,
                      "aria-describedby": ariaDescribedBy || void 0,
                      "aria-errormessage": errorId,
                      "aria-haspopup": "dialog",
                      "aria-expanded": isOpen ? "true" : "false",
                      "aria-controls": isOpen ? popoverId : void 0,
                      value: displayEndValue,
                      onClick: () => {
                        if (!canOpen) return;
                        setRangePart("end");
                        open();
                      },
                      onKeyDown: (e) => {
                        if (!canOpen) return;
                        if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                          e.preventDefault();
                          setRangePart("end");
                          open();
                        }
                        if ((e.key === "Backspace" || e.key === "Delete") && clearable && hasValue) {
                          e.preventDefault();
                          clear();
                        }
                      },
                      onBlur: (e) => {
                        onBlur?.(e);
                        requestAnimationFrame(() => {
                          const ae = document.activeElement;
                          if (!ae) return;
                          if (triggerWrapRef.current?.contains(ae)) return;
                          if (popoverRef.current?.contains(ae)) return;
                          close();
                        });
                      }
                    }
                  )
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                  "input",
                  {
                    ref: (node) => {
                      startTriggerRef.current = node;
                      if (typeof ref === "function") ref(node);
                      else if (ref) ref.current = node;
                    },
                    id: baseId,
                    name,
                    type: "text",
                    readOnly: true,
                    disabled,
                    required,
                    placeholder,
                    className: "oksDatePickerFieldInput",
                    "aria-invalid": isInvalid ? "true" : void 0,
                    "aria-describedby": ariaDescribedBy || void 0,
                    "aria-errormessage": errorId,
                    "aria-haspopup": "dialog",
                    "aria-expanded": isOpen ? "true" : "false",
                    "aria-controls": isOpen ? popoverId : void 0,
                    value: displayValue,
                    onClick: () => {
                      if (!canOpen) return;
                      setIsOpen((v) => !v);
                    },
                    onKeyDown: (e) => {
                      if (!canOpen) return;
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        isOpen ? close() : open();
                      }
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        open();
                      }
                      if ((e.key === "Backspace" || e.key === "Delete") && clearable && hasValue) {
                        e.preventDefault();
                        clear();
                      }
                    },
                    onBlur: (e) => {
                      onBlur?.(e);
                      requestAnimationFrame(() => {
                        const ae = document.activeElement;
                        if (!ae) return;
                        if (triggerWrapRef.current?.contains(ae)) return;
                        if (popoverRef.current?.contains(ae)) return;
                        close();
                      });
                    }
                  }
                ),
                floatingLabel ? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("label", { className: "oksDatePickerFieldLabel", htmlFor: baseId, children: [
                  floatingLabel,
                  required ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
                ] }) : null,
                clearable && hasValue ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "oksDatePickerFieldClearButton",
                    "aria-label": "Clear",
                    onMouseDown: (e) => e.preventDefault(),
                    onClick: clear,
                    children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                      "svg",
                      {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-hidden": "true",
                        focusable: "false",
                        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                          "path",
                          {
                            d: "M5 5l10 10M15 5 5 15",
                            stroke: "currentColor",
                            strokeWidth: "1.8",
                            strokeLinecap: "round"
                          }
                        )
                      }
                    )
                  }
                ) : null,
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "oksDatePickerFieldIcon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
                  "svg",
                  {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    focusable: "false",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                        "path",
                        {
                          d: "M6.2 3.6V2.6M13.8 3.6V2.6",
                          stroke: "currentColor",
                          strokeWidth: "1.6",
                          strokeLinecap: "round"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                        "path",
                        {
                          d: "M3.6 7.2h12.8",
                          stroke: "currentColor",
                          strokeWidth: "1.6",
                          strokeLinecap: "round"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                        "path",
                        {
                          d: "M4.6 5.6h10.8c.6 0 1 .4 1 1v9.2c0 .6-.4 1-1 1H4.6c-.6 0-1-.4-1-1V6.6c0-.6.4-1 1-1Z",
                          stroke: "currentColor",
                          strokeWidth: "1.6",
                          strokeLinejoin: "round"
                        }
                      )
                    ]
                  }
                ) })
              ]
            }
          ),
          isOpen ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
            "div",
            {
              ref: popoverRef,
              id: popoverId,
              className: "oksDatePickerFieldPopover",
              role: "dialog",
              "aria-label": range ? "Date range picker" : "Date picker",
              "data-range": range ? "true" : "false",
              "data-range-trigger": rangeTrigger,
              "data-months": String(monthsToShow),
              style: popoverStyle ? { ...popoverThemeVars, ...popoverStyle } : popoverThemeVars,
              children: [
                showRangePresets && panel === "presets" ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                  "div",
                  {
                    className: "oksDatePickerFieldPresetsList",
                    role: "listbox",
                    "aria-label": "Presets",
                    children: presetKeys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                      "button",
                      {
                        type: "button",
                        className: "oksDatePickerFieldPresetItem",
                        onMouseDown: (e) => e.preventDefault(),
                        onClick: () => {
                          if (k === "custom") {
                            setPanel("calendar");
                            return;
                          }
                          const now = /* @__PURE__ */ new Date();
                          const next = constrainPresetValue(
                            resolvePreset(k, now, withTime, true)
                          );
                          onChange?.(next);
                          close();
                          (range && rangeTrigger === "dual" ? rangePart === "end" ? endTriggerRef.current : startTriggerRef.current : startTriggerRef.current)?.focus();
                        },
                        children: defaultPresetLabels[k]
                      },
                      k
                    ))
                  }
                ) : /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
                  "div",
                  {
                    className: "oksDatePickerFieldCalendar",
                    "data-months": String(monthsToShow),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
                        "div",
                        {
                          className: "oksDatePickerFieldCalendarHeader",
                          "data-months": String(monthsToShow),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                              "button",
                              {
                                type: "button",
                                className: "oksDatePickerFieldNavButton",
                                "aria-label": "Previous month",
                                onMouseDown: (e) => e.preventDefault(),
                                onClick: () => setViewMonth((m) => addMonths(m, -1)),
                                children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                  "svg",
                                  {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                      "path",
                                      {
                                        d: "M12.6 4.6 7.4 10l5.2 5.4",
                                        stroke: "currentColor",
                                        strokeWidth: "1.8",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                      }
                                    )
                                  }
                                )
                              }
                            ),
                            monthsToShow === 1 ? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldMonthLabel", children: [
                              viewMonth.toLocaleString(void 0, { month: "long" }),
                              " ",
                              viewMonth.getFullYear()
                            ] }) : /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldMonthLabels", children: [
                              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldMonthLabel", children: [
                                viewMonth.toLocaleString(void 0, {
                                  month: "long"
                                }),
                                " ",
                                viewMonth.getFullYear()
                              ] }),
                              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldMonthLabel", children: [
                                addMonths(viewMonth, 1).toLocaleString(void 0, {
                                  month: "long"
                                }),
                                " ",
                                addMonths(viewMonth, 1).getFullYear()
                              ] })
                            ] }),
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                              "button",
                              {
                                type: "button",
                                className: "oksDatePickerFieldNavButton",
                                "aria-label": "Next month",
                                onMouseDown: (e) => e.preventDefault(),
                                onClick: () => setViewMonth((m) => addMonths(m, 1)),
                                children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                  "svg",
                                  {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                      "path",
                                      {
                                        d: "M7.4 4.6 12.6 10l-5.2 5.4",
                                        stroke: "currentColor",
                                        strokeWidth: "1.8",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                      }
                                    )
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                              "input",
                              {
                                className: "oksDatePickerFieldYearInput",
                                type: "number",
                                inputMode: "numeric",
                                value: viewMonth.getFullYear(),
                                min: 1900,
                                max: 2100,
                                onChange: (e) => {
                                  const y = Number(e.currentTarget.value);
                                  if (!Number.isFinite(y)) return;
                                  setViewMonth(
                                    (m) => new Date(y, m.getMonth(), 1, 0, 0, 0, 0)
                                  );
                                }
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                        "div",
                        {
                          className: "oksDatePickerFieldMonths",
                          "data-months": String(monthsToShow),
                          children: monthGrids.map(({ month, cells }) => /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
                            "div",
                            {
                              className: "oksDatePickerFieldMonth",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                  "div",
                                  {
                                    className: "oksDatePickerFieldWeekdays",
                                    "aria-hidden": "true",
                                    children: ["S", "M", "T", "W", "T", "F", "S"].map((d, idx) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                      "div",
                                      {
                                        className: "oksDatePickerFieldWeekday",
                                        children: d
                                      },
                                      `${idx}-${d}`
                                    ))
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                  "div",
                                  {
                                    className: "oksDatePickerFieldGrid",
                                    role: "grid",
                                    "aria-label": `Calendar ${month.toLocaleString(void 0, { month: "long" })} ${month.getFullYear()}`,
                                    children: cells.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        role: "gridcell",
                                        className: "oksDatePickerFieldDay",
                                        "data-outside": cell.inMonth ? "false" : "true",
                                        "data-today": cell.isToday ? "true" : "false",
                                        "data-selected": cell.isStart || cell.isEnd ? "true" : "false",
                                        "data-range": range && cell.inRange ? "true" : "false",
                                        "data-range-start": range && cell.isStart ? "true" : "false",
                                        "data-range-end": range && cell.isEnd ? "true" : "false",
                                        "data-disabled": cell.isDisabled ? "true" : "false",
                                        "aria-selected": cell.isStart || cell.isEnd ? "true" : "false",
                                        "aria-label": cell.date.toDateString(),
                                        onMouseDown: (e) => e.preventDefault(),
                                        onClick: () => selectDay(cell.date),
                                        disabled: disabled || cell.isDisabled,
                                        children: cell.date.getDate()
                                      },
                                      cell.key
                                    ))
                                  }
                                )
                              ]
                            },
                            `${month.getFullYear()}-${month.getMonth()}`
                          ))
                        }
                      ),
                      withTime ? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTime", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldTimeTitle", children: "Select Time" }),
                        !range ? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeRow", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeCol", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldTimeLabel", children: "Hours" }),
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                              SelectField,
                              {
                                native: true,
                                size: "xs-sm",
                                variant,
                                tone,
                                colorDepth,
                                value: singleTime.hour,
                                onValueChange: (value2) => updateTime("single", {
                                  ...singleTime,
                                  hour: String(value2)
                                }),
                                placeholderOption: null,
                                className: "oksDatePickerFieldTimeSelect",
                                options: hoursOptions.map((h) => ({
                                  value: h,
                                  label: h
                                }))
                              }
                            )
                          ] }),
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeCol", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldTimeLabel", children: "Minutes" }),
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                              SelectField,
                              {
                                native: true,
                                size: "xs-sm",
                                variant,
                                tone,
                                colorDepth,
                                value: singleTime.minute,
                                onValueChange: (value2) => updateTime("single", {
                                  ...singleTime,
                                  minute: String(value2)
                                }),
                                placeholderOption: null,
                                className: "oksDatePickerFieldTimeSelect",
                                options: minutesOptions.map((m) => ({
                                  value: m,
                                  label: m
                                }))
                              }
                            )
                          ] }),
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeCol", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldTimeLabel", children: "Period" }),
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                              SelectField,
                              {
                                native: true,
                                size: "xs-sm",
                                variant,
                                tone,
                                colorDepth,
                                value: singleTime.period,
                                onValueChange: (value2) => updateTime("single", {
                                  ...singleTime,
                                  period: String(value2)
                                }),
                                placeholderOption: null,
                                className: "oksDatePickerFieldTimeSelect",
                                options: [
                                  { value: "AM", label: "AM" },
                                  { value: "PM", label: "PM" }
                                ]
                              }
                            )
                          ] })
                        ] }) : /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeRange", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeRangeBlock", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldTimeSubTitle", children: "Start" }),
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeRow", children: [
                              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeCol", children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldTimeLabel", children: "Hours" }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                  SelectField,
                                  {
                                    native: true,
                                    size: "xs-sm",
                                    variant,
                                    tone,
                                    colorDepth,
                                    value: startTime.hour,
                                    onValueChange: (value2) => updateTime("start", {
                                      ...startTime,
                                      hour: String(value2)
                                    }),
                                    placeholderOption: null,
                                    className: "oksDatePickerFieldTimeSelect",
                                    options: hoursOptions.map((h) => ({
                                      value: h,
                                      label: h
                                    }))
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeCol", children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldTimeLabel", children: "Minutes" }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                  SelectField,
                                  {
                                    native: true,
                                    size: "xs-sm",
                                    variant,
                                    tone,
                                    colorDepth,
                                    value: startTime.minute,
                                    onValueChange: (value2) => updateTime("start", {
                                      ...startTime,
                                      minute: String(value2)
                                    }),
                                    placeholderOption: null,
                                    className: "oksDatePickerFieldTimeSelect",
                                    options: minutesOptions.map((m) => ({
                                      value: m,
                                      label: m
                                    }))
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeCol", children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldTimeLabel", children: "Period" }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                  SelectField,
                                  {
                                    native: true,
                                    size: "xs-sm",
                                    variant,
                                    tone,
                                    colorDepth,
                                    value: startTime.period,
                                    onValueChange: (value2) => updateTime("start", {
                                      ...startTime,
                                      period: String(value2)
                                    }),
                                    placeholderOption: null,
                                    className: "oksDatePickerFieldTimeSelect",
                                    options: [
                                      { value: "AM", label: "AM" },
                                      { value: "PM", label: "PM" }
                                    ]
                                  }
                                )
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeRangeBlock", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldTimeSubTitle", children: "End" }),
                            /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeRow", children: [
                              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeCol", children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldTimeLabel", children: "Hours" }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                  SelectField,
                                  {
                                    native: true,
                                    size: "xs-sm",
                                    variant,
                                    tone,
                                    colorDepth,
                                    value: endTime.hour,
                                    onValueChange: (value2) => updateTime("end", {
                                      ...endTime,
                                      hour: String(value2)
                                    }),
                                    placeholderOption: null,
                                    className: "oksDatePickerFieldTimeSelect",
                                    options: hoursOptions.map((h) => ({
                                      value: h,
                                      label: h
                                    }))
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeCol", children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldTimeLabel", children: "Minutes" }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                  SelectField,
                                  {
                                    native: true,
                                    size: "xs-sm",
                                    variant,
                                    tone,
                                    colorDepth,
                                    value: endTime.minute,
                                    onValueChange: (value2) => updateTime("end", {
                                      ...endTime,
                                      minute: String(value2)
                                    }),
                                    placeholderOption: null,
                                    className: "oksDatePickerFieldTimeSelect",
                                    options: minutesOptions.map((m) => ({
                                      value: m,
                                      label: m
                                    }))
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "oksDatePickerFieldTimeCol", children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldTimeLabel", children: "Period" }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                  SelectField,
                                  {
                                    native: true,
                                    size: "xs-sm",
                                    variant,
                                    tone,
                                    colorDepth,
                                    value: endTime.period,
                                    onValueChange: (value2) => updateTime("end", {
                                      ...endTime,
                                      period: String(value2)
                                    }),
                                    placeholderOption: null,
                                    className: "oksDatePickerFieldTimeSelect",
                                    options: [
                                      { value: "AM", label: "AM" },
                                      { value: "PM", label: "PM" }
                                    ]
                                  }
                                )
                              ] })
                            ] })
                          ] })
                        ] })
                      ] }) : null
                    ]
                  }
                ),
                showRangePresets && panel === "calendar" ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "oksDatePickerFieldBackToPresets", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "oksDatePickerFieldBackButton",
                    onMouseDown: (e) => e.preventDefault(),
                    onClick: () => setPanel("presets"),
                    children: "Back"
                  }
                ) }) : null
              ]
            }
          ) }) : null
        ] }),
        description ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { id: descriptionId, className: "oksDatePickerFieldDescription", children: description }) : null,
        error && error !== true ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { id: errorId, className: "oksDatePickerFieldError", role: "alert", children: error }) : null
      ]
    }
  );
});
DatePickerField.displayName = "DatePickerField";

// src/components/FormFieldSet/CustomFormElements/PasswordField/PasswordField.tsx
var import_react27 = require("react");

// src/components/FormFieldSet/Validation/validationRules.ts
var DEFAULT_VALIDATION_MESSAGES = {
  required: "This field is required",
  email: "Please enter a valid email address",
  minLength: (min) => `Must be at least ${min} characters`,
  maxLength: (max) => `Must be no more than ${max} characters`,
  pattern: "Please match the required format",
  alpha: "Only letters are allowed",
  alphanumeric: "Only letters and numbers are allowed",
  numeric: "Please enter a valid number",
  min: (min) => `Must be at least ${min}`,
  max: (max) => `Must be no more than ${max}`,
  strongPassword: "Weak password. Must contain required items.",
  matchField: "Fields do not match",
  accept: "Unsupported file type",
  maxFileSize: (maxBytes) => `File must be ${maxBytes} bytes or less`,
  maxFiles: (maxFiles) => `Must select no more than ${maxFiles} files`
};
var digitsOnly = (s) => String(s ?? "").replace(/\D+/g, "");
var getPhoneParts = (value) => {
  if (Array.isArray(value) && value.length > 0) {
    const first = value[0];
    if (first && typeof first === "object") {
      const obj = first;
      return { code: obj.code ?? "", phone: obj.phone ?? "" };
    }
    return null;
  }
  if (value && typeof value === "object") {
    const obj = value;
    if ("phone" in obj || "code" in obj) {
      return { code: obj.code ?? "", phone: obj.phone ?? "" };
    }
  }
  return null;
};
var getDateRangeParts = (value) => {
  if (value && typeof value === "object") {
    const obj = value;
    if ("start" in obj || "end" in obj) {
      return { start: obj.start ?? "", end: obj.end ?? "" };
    }
  }
  return null;
};
var isFileList = (value) => {
  if (typeof FileList === "undefined") return false;
  return value instanceof FileList;
};
var isFile = (value) => {
  if (typeof File === "undefined") return false;
  return value instanceof File;
};
var getFiles = (value) => {
  if (!value) return [];
  if (isFile(value)) return [value];
  if (isFileList(value)) return Array.from(value);
  if (Array.isArray(value) && value.every((v) => isFile(v)))
    return value;
  return [];
};
var getValueByPath = (obj, path) => {
  if (!path) return void 0;
  if (Object.prototype.hasOwnProperty.call(obj, path))
    return obj[path];
  const parts = path.split(".").filter(Boolean);
  let cur = obj;
  for (const p of parts) {
    if (!cur || typeof cur !== "object") return void 0;
    cur = cur[p];
  }
  return cur;
};
var parseAccept = (accept) => {
  const raw = Array.isArray(accept) ? accept.join(",") : accept;
  return raw.split(",").map((s) => s.trim()).filter(Boolean);
};
var matchesAcceptToken = (file, token) => {
  const lowerToken = token.toLowerCase();
  if (lowerToken.startsWith(".")) {
    return file.name.toLowerCase().endsWith(lowerToken);
  }
  if (lowerToken.endsWith("/*")) {
    const prefix = lowerToken.slice(0, -1);
    return file.type.toLowerCase().startsWith(prefix);
  }
  return file.type.toLowerCase() === lowerToken;
};
var normalizeStrongPasswordConfig = (config) => {
  const cfg = config && typeof config === "object" ? config : {};
  const minLength = typeof cfg.minLength === "number" ? cfg.minLength : 8;
  const minUpper = typeof cfg.minUpper === "number" ? cfg.minUpper : 1;
  const minLower = typeof cfg.minLower === "number" ? cfg.minLower : 1;
  const minNumber = typeof cfg.minNumber === "number" ? cfg.minNumber : 1;
  const minSpecial = typeof cfg.minSpecial === "number" ? cfg.minSpecial : 1;
  return { minLength, minUpper, minLower, minNumber, minSpecial };
};
function evaluateStrongPassword(value, config) {
  const { minLength, minUpper, minLower, minNumber, minSpecial } = normalizeStrongPasswordConfig(config);
  const str = String(value ?? "");
  const length = str.length;
  const uppers = (str.match(/[A-Z]/g) || []).length;
  const lowers = (str.match(/[a-z]/g) || []).length;
  const numbers = (str.match(/[0-9]/g) || []).length;
  const specials = (str.match(/[^A-Za-z0-9]/g) || []).length;
  const minLengthOk = length >= minLength;
  const upperOk = uppers >= minUpper;
  const lowerOk = lowers >= minLower;
  const numberOk = numbers >= minNumber;
  const specialOk = specials >= minSpecial;
  const ok = minLengthOk && upperOk && lowerOk && numberOk && specialOk;
  return {
    ok,
    minLength,
    minUpper,
    minLower,
    minNumber,
    minSpecial,
    length,
    uppers,
    lowers,
    numbers,
    specials,
    minLengthOk,
    upperOk,
    lowerOk,
    numberOk,
    specialOk
  };
}
var VALIDATION_RULES = {
  required: (value) => {
    if (value === null || value === void 0) return false;
    if (typeof value === "string") return value.trim().length > 0;
    const phoneParts = getPhoneParts(value);
    if (phoneParts) return digitsOnly(phoneParts.phone).length > 0;
    const dateRangeParts = getDateRangeParts(value);
    if (dateRangeParts)
      return String(dateRangeParts.start ?? "").trim().length > 0 && String(dateRangeParts.end ?? "").trim().length > 0;
    const files = getFiles(value);
    if (files.length > 0) return true;
    if (isFileList(value)) return value.length > 0;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === "boolean") return value === true;
    if (typeof value === "number") return Number.isFinite(value);
    return Boolean(value);
  },
  email: (value) => {
    if (!value) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value));
  },
  minLength: (value, min) => {
    if (!value) return true;
    const phoneParts = getPhoneParts(value);
    if (phoneParts) return digitsOnly(phoneParts.phone).length >= min;
    return String(value).length >= min;
  },
  maxLength: (value, max) => {
    if (!value) return true;
    const phoneParts = getPhoneParts(value);
    if (phoneParts) return digitsOnly(phoneParts.phone).length <= max;
    return String(value).length <= max;
  },
  pattern: (value, pattern) => {
    if (!value) return true;
    if (!(pattern instanceof RegExp)) return true;
    const phoneParts = getPhoneParts(value);
    if (phoneParts) {
      const phone = digitsOnly(phoneParts.phone);
      const code = String(phoneParts.code ?? "");
      const full = `${code}${phone}`;
      return pattern.test(full) || pattern.test(phone);
    }
    return pattern.test(String(value));
  },
  alpha: (value) => {
    if (!value) return true;
    return /^[A-Za-z]+$/.test(String(value));
  },
  alphanumeric: (value) => {
    if (!value) return true;
    return /^[A-Za-z0-9]+$/.test(String(value));
  },
  numeric: (value) => {
    if (!value) return true;
    const phoneParts = getPhoneParts(value);
    const raw = phoneParts ? digitsOnly(phoneParts.phone) : value;
    if (raw === "") return true;
    const num = Number(raw);
    return !Number.isNaN(num) && Number.isFinite(num);
  },
  min: (value, min) => {
    if (!value) return true;
    const phoneParts = getPhoneParts(value);
    const raw = phoneParts ? digitsOnly(phoneParts.phone) : value;
    if (raw === "") return true;
    const num = Number(raw);
    return !Number.isNaN(num) && Number.isFinite(num) && num >= min;
  },
  max: (value, max) => {
    if (!value) return true;
    const phoneParts = getPhoneParts(value);
    const raw = phoneParts ? digitsOnly(phoneParts.phone) : value;
    if (raw === "") return true;
    const num = Number(raw);
    return !Number.isNaN(num) && Number.isFinite(num) && num <= max;
  },
  strongPassword: (value, config) => {
    if (!value) return true;
    return evaluateStrongPassword(String(value), config).ok;
  },
  matchField: (value, otherFieldName, ctx) => {
    if (!ctx?.formData) return true;
    if (!otherFieldName || typeof otherFieldName !== "string") return true;
    const otherValue = getValueByPath(ctx.formData, otherFieldName);
    return value === otherValue;
  },
  accept: (value, accept) => {
    const files = getFiles(value);
    if (files.length < 1) return true;
    if (!accept) return true;
    const tokens = parseAccept(accept);
    if (tokens.length < 1) return true;
    return files.every(
      (file) => tokens.some((t) => matchesAcceptToken(file, t))
    );
  },
  maxFileSize: (value, maxBytes) => {
    const files = getFiles(value);
    if (files.length < 1) return true;
    if (typeof maxBytes !== "number" || !Number.isFinite(maxBytes)) return true;
    return files.every(
      (f) => typeof f.size === "number" ? f.size <= maxBytes : true
    );
  },
  maxFiles: (value, maxFiles) => {
    const files = getFiles(value);
    if (files.length < 1) return true;
    if (typeof maxFiles !== "number" || !Number.isFinite(maxFiles)) return true;
    return files.length <= maxFiles;
  }
};
function validateField(value, rules, customMessages = {}, ctx) {
  const errors = {};
  if (!rules) return errors;
  Object.keys(rules).forEach((ruleName) => {
    const ruleValue = rules[ruleName];
    if (ruleValue === false || ruleValue === void 0) return;
    if (ruleName === "custom") return;
    const fn = VALIDATION_RULES[ruleName];
    if (!fn) return;
    const isValid = fn(value, ruleValue, ctx);
    if (isValid) return;
    const customMessage = customMessages[ruleName];
    if (typeof customMessage === "string" && customMessage.length > 0) {
      errors[ruleName] = customMessage;
      return;
    }
    const defaultMessage = DEFAULT_VALIDATION_MESSAGES[ruleName];
    if (typeof defaultMessage === "function") {
      errors[ruleName] = defaultMessage(ruleValue);
      return;
    }
    errors[ruleName] = typeof defaultMessage === "string" && defaultMessage.length > 0 ? defaultMessage : "Validation failed";
  });
  if (typeof rules.custom === "function") {
    const res = rules.custom(value, ctx);
    if (res !== true) {
      errors.custom = typeof res === "string" ? res : customMessages.custom || "Custom validation failed";
    }
  }
  return errors;
}
function getFirstError(errors) {
  const keys = Object.keys(errors);
  if (keys.length < 1) return null;
  const first = keys[0];
  return errors[first] ?? null;
}
function validateForm(formData, validationSchema) {
  const formErrors = {};
  Object.keys(validationSchema).forEach((fieldName) => {
    const fieldValidation = validationSchema[fieldName];
    const value = formData[fieldName];
    const fieldErrors = validateField(
      value,
      fieldValidation?.rules,
      fieldValidation?.message ?? {},
      { formData, fieldName }
    );
    if (Object.keys(fieldErrors).length > 0) {
      formErrors[fieldName] = getFirstError(fieldErrors);
    }
  });
  return formErrors;
}

// src/components/FormFieldSet/CustomFormElements/PasswordField/PasswordField.module.css
styleInject("@layer components {\n  :where(.oksPasswordFieldRevealButton) {\n    width: 28px;\n    height: 28px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    padding: 0;\n    margin: 0;\n    background: transparent;\n    border-radius: 999px;\n    color: var(--oks-palette-neutral-600, #525252);\n    cursor: pointer;\n    flex: 0 0 auto;\n  }\n  :where(.oksPasswordFieldRevealButton:hover) {\n    color: var(--oks-palette-neutral-800, #262626);\n    background: color-mix(in srgb, var(--oks-palette-neutral-900, #171717) 8%, transparent);\n  }\n  :where(.oksPasswordFieldRevealButton:focus-visible) {\n    outline: none;\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-text-field-border-focus) 28%, transparent);\n  }\n  :where(.oksPasswordFieldRequirements) {\n    position: absolute;\n    top: calc(100% + var(--oks-space-2, 8px));\n    left: 0;\n    width: 100%;\n    z-index: 50;\n    border: 1px solid var(--oks-palette-neutral-200, #e5e5e5);\n    border-radius: var(--oks-radius-md, 0.375rem);\n    padding: var(--oks-space-3, 12px);\n    background: var(--oks-palette-neutral-0, #fff);\n    color: var(--oks-palette-neutral-800, #262626);\n    box-shadow: 0 10px 22px color-mix(in srgb, var(--oks-palette-neutral-950, #0a0a0a) 12%, transparent), 0 2px 6px color-mix(in srgb, var(--oks-palette-neutral-950, #0a0a0a) 10%, transparent);\n  }\n  :where(.oksPasswordFieldRequirementsTitle) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-palette-neutral-700, #404040);\n    margin: 0 0 var(--oks-space-2, 8px) 0;\n  }\n  :where(.oksPasswordFieldRequirementsList) {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-2, 8px);\n  }\n  :where(.oksPasswordFieldRequirement) {\n    display: flex;\n    align-items: center;\n    gap: var(--oks-space-2, 8px);\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-palette-dangeer-500, #e20202);\n  }\n  :where(.oksPasswordFieldRequirement[data-met=true]) {\n    color: var(--oks-palette-success-500, #18a605);\n  }\n  :where(.oksPasswordFieldRequirementIcon) {\n    width: 18px;\n    height: 18px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 auto;\n  }\n}\n");

// src/components/FormFieldSet/CustomFormElements/TextField/TextField.module.css
styleInject("@layer components {\n  :where(.oksTextField) {\n    --oks-text-field-bg: #fff;\n    --oks-text-field-fg: var(--oks-palette-neutral-950, #0a0a0a);\n    --oks-text-field-border: var(--oks-palette-neutral-300, #d4d4d4);\n    --oks-text-field-border-hover: var(--oks-palette-neutral-400, #a3a3a3);\n    --oks-text-field-border-focus: var(--oks-text-field-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-text-field-error: var(--oks-color-danger-500, #e20202);\n    --oks-text-field-radius: var(--oks-radius-md, 0.375rem);\n    --oks-text-field-height: 40px;\n    --oks-text-field-font-size: 14px;\n    --oks-text-field-pad-x: var(--oks-space-3, 12px);\n    --oks-text-field-pad-y: var(--oks-space-2, 8px);\n    --oks-text-field-slot-pad-left: var(--oks-text-field-pad-x);\n    --oks-text-field-slot-pad-right: var(--oks-text-field-pad-x);\n    --oks-text-field-adornment-gap: var(--oks-space-2, 8px);\n    width: 100%;\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-1, 4px);\n    color: var(--oks-text-field-fg);\n  }\n  :where(.oksTextField[data-size=xs]) {\n    --oks-text-field-height: 32px;\n    --oks-text-field-font-size: 12px;\n    --oks-text-field-pad-x: var(--oks-space-2, 8px);\n    --oks-text-field-pad-y: var(--oks-space-1, 4px);\n  }\n  :where(.oksTextField[data-size=xs-sm]) {\n    --oks-text-field-height: 36px;\n    --oks-text-field-font-size: 13px;\n    --oks-text-field-pad-x: var(--oks-space-3, 12px);\n    --oks-text-field-pad-y: var(--oks-space-2, 8px);\n  }\n  :where(.oksTextField[data-size=sm]) {\n    --oks-text-field-height: 38px;\n    --oks-text-field-font-size: 14px;\n    --oks-text-field-pad-x: var(--oks-space-3, 12px);\n    --oks-text-field-pad-y: var(--oks-space-2, 8px);\n  }\n  :where(.oksTextField[data-size=md]) {\n    --oks-text-field-height: 44px;\n    --oks-text-field-font-size: 14px;\n    --oks-text-field-pad-x: var(--oks-space-3, 12px);\n    --oks-text-field-pad-y: var(--oks-space-2, 8px);\n  }\n  :where(.oksTextField[data-size=lg]) {\n    --oks-text-field-height: 48px;\n    --oks-text-field-font-size: 16px;\n    --oks-text-field-pad-x: var(--oks-space-4, 16px);\n    --oks-text-field-pad-y: var(--oks-space-2, 8px);\n  }\n  :where(.oksTextField[data-size=xl]) {\n    --oks-text-field-height: 52px;\n    --oks-text-field-font-size: 18px;\n    --oks-text-field-pad-x: var(--oks-space-4, 16px);\n    --oks-text-field-pad-y: var(--oks-space-3, 12px);\n  }\n  :where(.oksTextField[data-has-start=true]) {\n    --oks-text-field-slot-pad-left: var(--oks-space-2, 8px);\n  }\n  :where(.oksTextField[data-has-end=true]) {\n    --oks-text-field-slot-pad-right: var(--oks-space-2, 8px);\n  }\n  :where(.oksTextField[data-radius=none]) {\n    --oks-text-field-radius: 0;\n  }\n  :where(.oksTextField[data-radius=sm]) {\n    --oks-text-field-radius: var(--oks-radius-sm, 0.25rem);\n  }\n  :where(.oksTextField[data-radius=md]) {\n    --oks-text-field-radius: var(--oks-radius-md, 0.375rem);\n  }\n  :where(.oksTextField[data-radius=lg]) {\n    --oks-text-field-radius: var(--oks-radius-lg, 0.5rem);\n  }\n  :where(.oksTextField[data-radius=full]) {\n    --oks-text-field-radius: 9999px;\n  }\n  :where(.oksTextFieldLabel) {\n    font-size: 14px;\n    line-height: 1.2;\n    color: var(--oks-palette-neutral-950, #0a0a0a);\n  }\n  :where(.oksTextFieldControl) {\n    position: relative;\n    min-width: 0;\n    width: 100%;\n    display: flex;\n    align-items: stretch;\n    box-sizing: border-box;\n    min-height: var(--oks-text-field-height);\n    border-radius: var(--oks-text-field-radius);\n    border: 1px solid var(--oks-text-field-border);\n    background: var(--oks-text-field-bg);\n  }\n  :where(.oksTextFieldInputSlot) {\n    position: relative;\n    min-width: 0;\n    flex: 1 1 auto;\n    display: flex;\n    align-items: center;\n    padding: var(--oks-text-field-pad-y) var(--oks-text-field-slot-pad-right) var(--oks-text-field-pad-y) var(--oks-text-field-slot-pad-left);\n  }\n  :where(.oksTextFieldAdornment) {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--oks-text-field-adornment-gap);\n    color: var(--oks-palette-neutral-600, #525252);\n    flex: 0 0 auto;\n    user-select: none;\n  }\n  :where(.oksTextFieldStart) {\n    padding-left: var(--oks-text-field-pad-x);\n  }\n  :where(.oksTextFieldEnd) {\n    padding-right: var(--oks-text-field-pad-x);\n  }\n  :where(.oksTextFieldAffix) {\n    font-size: var(--oks-text-field-font-size);\n    line-height: 1;\n    white-space: nowrap;\n  }\n  :where(.oksTextFieldIcon) {\n    width: 20px;\n    height: 20px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 auto;\n  }\n  :where(.oksTextFieldInput) {\n    appearance: none;\n    width: 100%;\n    min-width: 0;\n    box-sizing: border-box;\n    height: calc(var(--oks-text-field-height) - (2 * var(--oks-text-field-pad-y)));\n    padding: 0;\n    border-radius: 0;\n    border: none;\n    background: transparent;\n    color: inherit;\n    font-size: var(--oks-text-field-font-size);\n    line-height: 1.2;\n    outline: none;\n  }\n  :where(.oksTextFieldInput:-webkit-autofill),\n  :where(.oksTextFieldInput:-webkit-autofill:hover),\n  :where(.oksTextFieldInput:-webkit-autofill:active) {\n    box-shadow: 0 0 0 1000px var(--oks-text-field-bg) inset;\n    -webkit-text-fill-color: var(--oks-text-field-fg);\n    caret-color: var(--oks-text-field-fg);\n  }\n  :where(.oksTextFieldControl:hover) {\n    border-color: var(--oks-text-field-border-hover);\n  }\n  :where(.oksTextFieldControl:focus-within) {\n    border-color: var(--oks-text-field-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-text-field-border-focus) 28%, transparent);\n  }\n  :where(.oksTextField[data-invalid=true] .oksTextFieldControl) {\n    border-color: var(--oks-text-field-error);\n  }\n  :where(.oksTextField[data-invalid=true] .oksTextFieldControl:focus-within) {\n    border-color: var(--oks-text-field-error);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-text-field-error) 22%, transparent);\n  }\n  :where(.oksTextField[data-disabled=true] .oksTextFieldControl) {\n    cursor: not-allowed;\n    opacity: 0.72;\n  }\n  :where(.oksTextField[data-variant=soft]) {\n    --oks-text-field-bg: var(--oks-palette-neutral-50, #fafafa);\n  }\n  :where(.oksTextField[data-variant=soft] .oksTextFieldControl) {\n    background: var(--oks-palette-neutral-50, #fafafa);\n    border: none;\n  }\n  :where(.oksTextField[data-variant=underline] .oksTextFieldControl) {\n    border-radius: 0;\n    border: none;\n    border-bottom: 1px solid var(--oks-text-field-border);\n    background: transparent;\n  }\n  :where(.oksTextField[data-variant=underline] .oksTextFieldControl:hover) {\n    border-bottom-color: var(--oks-text-field-border-hover);\n  }\n  :where(.oksTextField[data-variant=underline] .oksTextFieldControl:focus-within) {\n    border-bottom-color: var(--oks-text-field-border-focus);\n    box-shadow: none;\n  }\n  :where(.oksTextField[data-variant=underline][data-invalid=true] .oksTextFieldControl) {\n    border-bottom-color: var(--oks-text-field-error);\n  }\n  :where(.oksTextField[data-variant=underline][data-invalid=true] .oksTextFieldControl:focus-within) {\n    border-bottom-color: var(--oks-text-field-error);\n    box-shadow: none;\n  }\n  :where(.oksTextFieldDescription) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-palette-neutral-700, #404040);\n  }\n  :where(.oksTextFieldError) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-text-field-error);\n  }\n  :where(.oksTextField[data-label-placement=floating] .oksTextFieldInputSlot > .oksTextFieldLabel) {\n    position: absolute;\n    left: var(--oks-text-field-slot-pad-left);\n    top: 50%;\n    transform: translateY(-50%);\n    font-size: var(--oks-text-field-font-size);\n    line-height: 1;\n    color: var(--oks-palette-neutral-500, #737373);\n    pointer-events: none;\n    max-width: calc(100% - var(--oks-text-field-slot-pad-left) - var(--oks-text-field-slot-pad-right));\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    background: transparent;\n    padding: 0;\n    transition:\n      top 140ms ease,\n      transform 140ms ease,\n      font-size 140ms ease,\n      color 140ms ease;\n  }\n  :where(.oksTextField[data-label-placement=floating]) .oksTextFieldInput::placeholder {\n    color: transparent;\n    opacity: 1;\n    transition: color 140ms ease;\n    transition-delay: 0ms;\n  }\n  :where(.oksTextField[data-label-placement=floating] .oksTextFieldControl:focus-within) .oksTextFieldInput::placeholder {\n    color: var(--oks-palette-neutral-500, #737373);\n    transition-delay: 90ms;\n  }\n  :where(.oksTextField[data-label-placement=floating] .oksTextFieldControl:focus-within .oksTextFieldInputSlot > .oksTextFieldLabel),\n  :where(.oksTextField[data-label-placement=floating] .oksTextFieldInputSlot > .oksTextFieldInput:not(:placeholder-shown) + .oksTextFieldLabel) {\n    top: 10px;\n    transform: translateY(0);\n    font-size: 12px;\n    color: var(--oks-text-field-border-focus);\n  }\n  :where(.oksTextField[data-variant=outline][data-label-placement=floating] .oksTextFieldControl:focus-within .oksTextFieldInputSlot > .oksTextFieldLabel),\n  :where(.oksTextField[data-variant=outline][data-label-placement=floating] .oksTextFieldInputSlot > .oksTextFieldInput:not(:placeholder-shown) + .oksTextFieldLabel) {\n    top: 0;\n    transform: translateY(-50%);\n    background: var(--oks-text-field-bg);\n    padding: 0 4px;\n  }\n  :where(.oksTextField[data-variant=outline][data-label-placement=floating] .oksTextFieldControl:focus-within .oksTextFieldInputSlot > .oksTextFieldLabel) {\n    left: calc(var(--oks-text-field-slot-pad-left) - 4px);\n  }\n  :where(.oksTextField[data-label-placement=floating][data-invalid=true] .oksTextFieldControl:focus-within .oksTextFieldInputSlot > .oksTextFieldLabel) {\n    color: var(--oks-text-field-error);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :where(.oksTextField[data-label-placement=floating] .oksTextFieldInputSlot > .oksTextFieldLabel),\n    :where(.oksTextField[data-label-placement=floating]) .oksTextFieldInput::placeholder {\n      transition: none;\n    }\n  }\n}\n");

// src/components/FormFieldSet/CustomFormElements/PasswordField/PasswordField.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
var plural = (n, word) => n === 1 ? word : `${word}s`;
var PasswordField = (0, import_react27.forwardRef)(
  (props, ref) => {
    const {
      label,
      labelPlacement = "top",
      description,
      error,
      size = "md",
      variant = "outline",
      color,
      tone,
      colorDepth = 500,
      radius,
      rounded,
      startIcon,
      endIcon,
      prefix,
      suffix,
      className,
      id,
      required,
      disabled,
      placeholder,
      style,
      value,
      defaultValue,
      onFocus,
      onBlur,
      strongPassword,
      revealToggle = true,
      ...rest
    } = props;
    const resolvedColor = color ?? tone ?? "default";
    const resolvedRadius = radius ?? rounded ?? "md";
    const reactId = (0, import_react27.useId)();
    const inputId = id ?? `oks-password-field-${reactId}`;
    const [revealed, setRevealed] = (0, import_react27.useState)(false);
    const [focused, setFocused] = (0, import_react27.useState)(false);
    const describedBy = rest["aria-describedby"];
    const descriptionId = description ? `${inputId}-description` : void 0;
    const errorId = error && error !== true ? `${inputId}-error-message` : void 0;
    const requirementsId = `${inputId}-requirements`;
    const shouldShowRequirements = Boolean(strongPassword) && focused;
    const ariaDescribedBy = [
      describedBy,
      descriptionId,
      shouldShowRequirements ? requirementsId : void 0,
      shouldShowRequirements ? void 0 : errorId
    ].filter(Boolean).join(" ");
    const isInvalid = Boolean(error);
    const resolvedPlaceholder = (0, import_react27.useMemo)(() => {
      if (labelPlacement !== "floating") return placeholder;
      if (!label) return placeholder;
      if (placeholder !== void 0) return placeholder;
      return " ";
    }, [labelPlacement, label, placeholder]);
    const toneVars = {
      "--oks-text-field-tone": getToneVar(resolvedColor, colorDepth)
    };
    const topLabel = labelPlacement === "top" ? label : null;
    const floatingLabel = labelPlacement === "floating" ? label : null;
    const hasStart = startIcon != null || prefix != null;
    const hasEnd = endIcon != null || suffix != null || revealToggle;
    const evalResult = (0, import_react27.useMemo)(() => {
      if (!strongPassword) return null;
      const v = value !== void 0 ? String(value ?? "") : defaultValue !== void 0 ? String(defaultValue ?? "") : "";
      return evaluateStrongPassword(v, strongPassword);
    }, [value, defaultValue, strongPassword]);
    const requirementRows = (0, import_react27.useMemo)(() => {
      const rows = [];
      if (strongPassword && evalResult) {
        const minLength = typeof strongPassword.minLength === "number" ? strongPassword.minLength : 8;
        const minUpper = typeof strongPassword.minUpper === "number" ? strongPassword.minUpper : 1;
        const minLower = typeof strongPassword.minLower === "number" ? strongPassword.minLower : 1;
        const minNumber = typeof strongPassword.minNumber === "number" ? strongPassword.minNumber : 1;
        const minSpecial = typeof strongPassword.minSpecial === "number" ? strongPassword.minSpecial : 1;
        if (minNumber > 0) {
          rows.push({
            key: "number",
            met: evalResult.numberOk,
            label: `At least ${minNumber} ${plural(minNumber, "number")}`
          });
        }
        if (minUpper > 0) {
          rows.unshift({
            key: "upper",
            met: evalResult.upperOk,
            label: `At least ${minUpper} uppercase ${plural(minUpper, "letter")}`
          });
        }
        if (minSpecial > 0) {
          rows.push({
            key: "special",
            met: evalResult.specialOk,
            label: `At least ${minSpecial} special ${plural(minSpecial, "character")}`
          });
        }
        if (minLength > 0) {
          rows.push({
            key: "length",
            met: evalResult.minLengthOk,
            label: `At least ${minLength} ${plural(minLength, "character")}`
          });
        }
        if (minLower > 0) {
          rows.push({
            key: "lower",
            met: evalResult.lowerOk,
            label: `At least ${minLower} lowercase ${plural(minLower, "letter")}`
          });
        }
      }
      return rows;
    }, [strongPassword, evalResult]);
    const requirementsTitle = (0, import_react27.useMemo)(() => {
      if (!strongPassword) return null;
      if (evalResult)
        return evalResult.ok ? "Strong password." : "Weak password. Must contain;";
      return "Must contain;";
    }, [strongPassword, evalResult]);
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      "div",
      {
        className: mergeClassName17("oksTextField oksPasswordField", className),
        "data-size": size,
        "data-variant": variant,
        "data-color": resolvedColor,
        "data-radius": resolvedRadius,
        "data-label-placement": labelPlacement,
        "data-invalid": isInvalid ? "true" : "false",
        "data-disabled": disabled ? "true" : "false",
        "data-has-start": hasStart ? "true" : "false",
        "data-has-end": hasEnd ? "true" : "false",
        style: { ...toneVars, ...style },
        children: [
          topLabel ? /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("label", { className: "oksTextFieldLabel", htmlFor: inputId, children: [
            topLabel,
            required ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
          ] }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
            "div",
            {
              className: "oksTextFieldControl",
              onFocusCapture: () => setFocused(true),
              onBlurCapture: (e) => {
                const next = e.relatedTarget ?? null;
                if (next && e.currentTarget.contains(next)) return;
                setFocused(false);
              },
              children: [
                hasStart ? /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "oksTextFieldAdornment oksTextFieldStart", children: [
                  startIcon != null ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "oksTextFieldIcon", children: startIcon }) : null,
                  prefix != null ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "oksTextFieldAffix", children: prefix }) : null
                ] }) : null,
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "oksTextFieldInputSlot", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "input",
                    {
                      ...rest,
                      ref,
                      id: inputId,
                      required,
                      disabled,
                      type: revealed ? "text" : "password",
                      value,
                      defaultValue,
                      placeholder: resolvedPlaceholder,
                      className: "oksTextFieldInput",
                      "aria-invalid": isInvalid ? "true" : void 0,
                      "aria-describedby": ariaDescribedBy || void 0,
                      "aria-errormessage": shouldShowRequirements ? void 0 : errorId,
                      onFocus: (e) => {
                        onFocus?.(e);
                      },
                      onBlur: (e) => {
                        onBlur?.(e);
                      }
                    }
                  ),
                  floatingLabel ? /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("label", { className: "oksTextFieldLabel", htmlFor: inputId, children: [
                    floatingLabel,
                    required ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
                  ] }) : null
                ] }),
                hasEnd ? /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "oksTextFieldAdornment oksTextFieldEnd", children: [
                  suffix != null ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "oksTextFieldAffix", children: suffix }) : null,
                  endIcon != null ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "oksTextFieldIcon", children: endIcon }) : null,
                  revealToggle ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "button",
                    {
                      type: "button",
                      className: "oksPasswordFieldRevealButton",
                      "aria-label": revealed ? "Hide password" : "Show password",
                      "aria-pressed": revealed,
                      disabled,
                      tabIndex: disabled ? -1 : 0,
                      onClick: () => setRevealed((v) => !v),
                      children: revealed ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(EyeOffIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(EyeIcon, {})
                    }
                  ) : null
                ] }) : null,
                shouldShowRequirements && requirementRows.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { id: requirementsId, className: "oksPasswordFieldRequirements", children: [
                  requirementsTitle ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "oksPasswordFieldRequirementsTitle", children: requirementsTitle }) : null,
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("ul", { className: "oksPasswordFieldRequirementsList", children: requirementRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
                    "li",
                    {
                      className: "oksPasswordFieldRequirement",
                      "data-met": row.met ? "true" : "false",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                          "span",
                          {
                            className: "oksPasswordFieldRequirementIcon",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(StatusIcon, { type: row.met ? "success" : "error" })
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: row.label })
                      ]
                    },
                    row.key
                  )) })
                ] }) : null
              ]
            }
          ),
          description ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { id: descriptionId, className: "oksTextFieldDescription", children: description }) : null,
          shouldShowRequirements ? null : error && error !== true ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { id: errorId, className: "oksTextFieldError", role: "alert", children: error }) : null
        ]
      }
    );
  }
);
PasswordField.displayName = "PasswordField";

// src/components/FormFieldSet/CustomFormElements/PhoneField/PhoneField.tsx
var import_react28 = require("react");

// src/components/FormFieldSet/CustomFormElements/PhoneField/PhoneField.module.css
styleInject('@layer components {\n  :where(.oksPhoneField) {\n    --oks-phone-bg: #fff;\n    --oks-phone-fg: var(--oks-palette-neutral-950, #0a0a0a);\n    --oks-phone-border: var(--oks-palette-neutral-300, #d4d4d4);\n    --oks-phone-border-hover: var(--oks-palette-neutral-400, #a3a3a3);\n    --oks-phone-border-focus: var( --oks-phone-tone, var(--oks-color-primary-500, #3b82f6) );\n    --oks-phone-error: var(--oks-color-danger-500, #e20202);\n    --oks-phone-radius: var(--oks-radius-md, 0.375rem);\n    --oks-phone-height: 40px;\n    --oks-phone-font-size: 14px;\n    --oks-phone-pad-x: var(--oks-space-3, 12px);\n    --oks-phone-pad-y: var(--oks-space-2, 8px);\n    width: 100%;\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-1, 4px);\n    color: var(--oks-phone-fg);\n  }\n  :where(.oksPhoneField[data-size=xs]) {\n    --oks-phone-height: 32px;\n    --oks-phone-font-size: 12px;\n    --oks-phone-pad-x: var(--oks-space-2, 8px);\n    --oks-phone-pad-y: var(--oks-space-1, 4px);\n  }\n  :where(.oksPhoneField[data-size=xs-sm]) {\n    --oks-phone-height: 36px;\n    --oks-phone-font-size: 13px;\n  }\n  :where(.oksPhoneField[data-size=sm]) {\n    --oks-phone-height: 38px;\n    --oks-phone-font-size: 14px;\n  }\n  :where(.oksPhoneField[data-size=md]) {\n    --oks-phone-height: 44px;\n    --oks-phone-font-size: 14px;\n  }\n  :where(.oksPhoneField[data-size=lg]) {\n    --oks-phone-height: 48px;\n    --oks-phone-font-size: 16px;\n    --oks-phone-pad-x: var(--oks-space-4, 16px);\n  }\n  :where(.oksPhoneField[data-size=xl]) {\n    --oks-phone-height: 52px;\n    --oks-phone-font-size: 18px;\n    --oks-phone-pad-x: var(--oks-space-4, 16px);\n    --oks-phone-pad-y: var(--oks-space-3, 12px);\n  }\n  :where(.oksPhoneFieldLabel) {\n    font-size: 14px;\n    line-height: 1.2;\n    color: var(--oks-palette-neutral-950, #0a0a0a);\n  }\n  :where(.oksPhoneFieldControl) {\n    width: 100%;\n    min-width: 0;\n    display: flex;\n    align-items: stretch;\n    border-radius: var(--oks-phone-radius);\n    border: 1px solid var(--oks-phone-border);\n    background: var(--oks-phone-bg);\n    overflow: hidden;\n  }\n  :where(.oksPhoneFieldControl:hover) {\n    border-color: var(--oks-phone-border-hover);\n  }\n  :where(.oksPhoneFieldControl:focus-within) {\n    border-color: var(--oks-phone-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-phone-border-focus) 28%, transparent);\n  }\n  :where(.oksPhoneField[data-invalid=true] .oksPhoneFieldControl) {\n    border-color: var(--oks-phone-error);\n  }\n  :where(.oksPhoneField[data-invalid=true] .oksPhoneFieldControl:focus-within) {\n    border-color: var(--oks-phone-error);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-phone-error) 22%, transparent);\n  }\n  :where(.oksPhoneField[data-disabled=true] .oksPhoneFieldControl) {\n    cursor: not-allowed;\n    opacity: 0.72;\n  }\n  :where(.oksPhoneField[data-variant=soft]) {\n    --oks-phone-bg: var(--oks-palette-neutral-50, #fafafa);\n  }\n  :where(.oksPhoneField[data-variant=soft] .oksPhoneFieldControl) {\n    background: var(--oks-palette-neutral-50, #fafafa);\n    border: none;\n  }\n  :where(.oksPhoneField[data-variant=underline] .oksPhoneFieldControl) {\n    border-radius: 0;\n    border: none;\n    border-bottom: 1px solid var(--oks-phone-border);\n    background: transparent;\n  }\n  :where(.oksPhoneField[data-variant=underline] .oksPhoneFieldControl:hover) {\n    border-bottom-color: var(--oks-phone-border-hover);\n  }\n  :where(.oksPhoneField[data-variant=underline] .oksPhoneFieldControl:focus-within) {\n    border-bottom-color: var(--oks-phone-border-focus);\n    box-shadow: none;\n  }\n  :where(.oksPhoneField[data-variant=underline][data-invalid=true] .oksPhoneFieldControl) {\n    border-bottom-color: var(--oks-phone-error);\n  }\n  :where(.oksPhoneField[data-variant=underline][data-invalid=true] .oksPhoneFieldControl:focus-within) {\n    border-bottom-color: var(--oks-phone-error);\n    box-shadow: none;\n  }\n  :where(.oksPhoneFieldCode) {\n    min-width: 0;\n    display: flex;\n    align-items: stretch;\n    gap: var(--oks-space-2, 8px);\n  }\n  :where(.oksPhoneField[data-country-code-mode=hidden] .oksPhoneFieldCode) {\n    display: none;\n  }\n  :where(.oksPhoneFieldCode :where(.oksSelectField)) {\n    width: auto;\n    min-width: 0;\n    display: block;\n    gap: 0;\n  }\n  :where(.oksPhoneFieldCode :where(.oksSelectFieldControl)) {\n    width: auto;\n    display: flex;\n  }\n  :where(.oksPhoneFieldCode :where(.oksSelectFieldTrigger)) {\n    border: 0;\n    border-radius: 0;\n    height: var(--oks-phone-height);\n    padding: var(--oks-phone-pad-y) var(--oks-phone-pad-x);\n    background: transparent;\n    box-shadow: none;\n    justify-content: flex-start;\n    width: auto;\n    min-width: 72px;\n    gap: 6px;\n  }\n  :where(.oksPhoneFieldCode :where(.oksSelectFieldTriggerValue)) {\n    display: inline-flex;\n    align-items: center;\n    overflow: visible;\n    text-overflow: clip;\n  }\n  :where(.oksPhoneFieldCode :where(.oksSelectFieldTrigger:hover)) {\n    border-color: transparent;\n  }\n  :where(.oksPhoneFieldCode :where(.oksSelectFieldControl:focus-within .oksSelectFieldTrigger)) {\n    border-color: transparent;\n    box-shadow: none;\n  }\n  :where(.oksPhoneFieldCode :where(.oksSelectFieldTrigger)::after) {\n    content: "";\n    width: 6px;\n    height: 6px;\n    margin-left: 0;\n    border-right: 2px solid currentColor;\n    border-bottom: 2px solid currentColor;\n    transform: rotate(45deg);\n    opacity: 0.9;\n    flex: 0 0 auto;\n  }\n  :where(.oksPhoneDialCode) {\n    height: var(--oks-phone-height);\n    display: inline-flex;\n    align-items: center;\n    padding: 0 var(--oks-phone-pad-x);\n    font-size: var(--oks-phone-font-size);\n    color: inherit;\n    font-variant-numeric: tabular-nums;\n    font-weight: 600;\n    flex: 0 0 auto;\n  }\n  :where(.oksPhoneCountryOption) {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--oks-space-2, 8px);\n    min-width: 0;\n  }\n  :where(.oksPhoneCountryFlag) {\n    width: 18px;\n    height: 18px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 auto;\n  }\n  :where(.oksPhoneCountryShort) {\n    font-size: 12px;\n    font-weight: 600;\n    letter-spacing: 0.02em;\n    flex: 0 0 auto;\n  }\n  :where(.oksPhoneCountryName) {\n    min-width: 0;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  :where(.oksPhoneCountryCode) {\n    flex: 0 0 auto;\n    font-variant-numeric: tabular-nums;\n  }\n  :where(.oksPhoneFieldCode :where(.oksSelectFieldTrigger) .oksPhoneCountryName) {\n    display: none;\n  }\n  :where(.oksPhoneFieldCode :where(.oksSelectFieldTrigger) .oksPhoneCountryCode) {\n    display: none;\n  }\n  :where(.oksPhoneFieldCode :where(.oksSelectFieldMenu) .oksPhoneCountryOption) {\n    width: 100%;\n  }\n  :where(.oksPhoneFieldCode :where(.oksSelectFieldMenu) .oksPhoneCountryName) {\n    flex: 1 1 auto;\n  }\n  :where(.oksPhoneFieldInputWrap) {\n    flex: 1 1 auto;\n    min-width: 0;\n    position: relative;\n  }\n  :where(.oksPhoneFieldInput) {\n    appearance: none;\n    flex: 1 1 auto;\n    width: 100%;\n    min-width: 0;\n    box-sizing: border-box;\n    height: var(--oks-phone-height);\n    padding: var(--oks-phone-pad-y) var(--oks-phone-pad-x);\n    border-radius: 0;\n    border: 0;\n    background: transparent;\n    color: inherit;\n    font-size: var(--oks-phone-font-size);\n    line-height: 1.2;\n    outline: none;\n  }\n  :where(.oksPhoneFieldInput::placeholder) {\n    color: var(--oks-palette-neutral-400, #a3a3a3);\n  }\n  :where(.oksPhoneField[data-variant=soft] .oksPhoneFieldInput) {\n    background: transparent;\n  }\n  .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInput {\n    padding-top: calc(var(--oks-phone-pad-y) + 10px);\n  }\n  .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInput::placeholder {\n    color: transparent;\n    opacity: 1;\n    transition: color 140ms ease;\n  }\n  .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInputWrap:focus-within .oksPhoneFieldInput::placeholder {\n    color: var(--oks-palette-neutral-500, #737373);\n  }\n  .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInputWrap > .oksPhoneFieldLabel {\n    position: absolute;\n    left: var(--oks-phone-pad-x);\n    top: 50%;\n    transform: translateY(-50%);\n    font-size: var(--oks-phone-font-size);\n    line-height: 1;\n    color: var(--oks-palette-neutral-500, #737373);\n    pointer-events: none;\n    max-width: calc(100% - (2 * var(--oks-phone-pad-x)));\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    transition:\n      top 140ms ease,\n      transform 140ms ease,\n      font-size 140ms ease,\n      color 140ms ease;\n  }\n  .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInputWrap:focus-within > .oksPhoneFieldLabel,\n  .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInputWrap > .oksPhoneFieldInput:not(:placeholder-shown) + .oksPhoneFieldLabel {\n    top: 10px;\n    transform: translateY(0);\n    font-size: 12px;\n    color: var(--oks-phone-border-focus);\n  }\n  .oksPhoneField[data-label-placement=floating][data-invalid=true] .oksPhoneFieldInputWrap:focus-within > .oksPhoneFieldLabel {\n    color: var(--oks-phone-error);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInput::placeholder,\n    .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInputWrap > .oksPhoneFieldLabel {\n      transition: none;\n    }\n  }\n  :where(.oksPhoneFieldDescription) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-palette-neutral-700, #404040);\n  }\n  :where(.oksPhoneFieldError) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-phone-error);\n  }\n}\n');

// src/components/FormFieldSet/CustomFormElements/PhoneField/PhoneField.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var defaultCountries = [
  { name: "United States", code: "+1", flag: "\u{1F1FA}\u{1F1F8}", shortCode: "US" },
  { name: "India", code: "+91", flag: "\u{1F1EE}\u{1F1F3}", shortCode: "IN" },
  { name: "United Kingdom", code: "+44", flag: "\u{1F1EC}\u{1F1E7}", shortCode: "GB" },
  { name: "United Arab Emirates", code: "+971", flag: "\u{1F1E6}\u{1F1EA}", shortCode: "AE" }
];
var normalizePhoneValue = (v, fallbackCode) => {
  if (v && typeof v === "object") {
    const obj = v;
    return { code: String(obj.code || fallbackCode), phone: String(obj.phone ?? "") };
  }
  return { code: fallbackCode, phone: "" };
};
var PhoneField = (0, import_react28.forwardRef)(
  (props, ref) => {
    const {
      label,
      labelPlacement = "top",
      description,
      error,
      size = "md",
      variant = "outline",
      tone = "primary",
      colorDepth = 500,
      className,
      id,
      name,
      required,
      disabled,
      value,
      defaultValue,
      defaultCountryCode,
      countryCodeMode = "select",
      countryOptions,
      numbersOnly = true,
      onChange,
      phonePlaceholder = "Phone number",
      style,
      onBlur,
      ...rest
    } = props;
    const reactId = (0, import_react28.useId)();
    const baseId = id ?? `oks-phone-${reactId}`;
    const describedBy = rest["aria-describedby"];
    const descriptionId = description ? `${baseId}-description` : void 0;
    const errorId = error && error !== true ? `${baseId}-error-message` : void 0;
    const ariaDescribedBy = [describedBy, descriptionId, errorId].filter(Boolean).join(" ");
    const isInvalid = Boolean(error);
    const toneVars = {
      "--oks-phone-tone": getToneVar(tone, colorDepth)
    };
    const resolvedCountries = countryOptions && countryOptions.length > 0 ? countryOptions : defaultCountries;
    const fallbackCode = defaultCountryCode ?? resolvedCountries[0]?.code ?? "";
    const [uncontrolled, setUncontrolled] = (0, import_react28.useState)(
      () => normalizePhoneValue(value ?? defaultValue, fallbackCode)
    );
    (0, import_react28.useEffect)(() => {
      if (value !== void 0) setUncontrolled(normalizePhoneValue(value, fallbackCode));
    }, [value, fallbackCode]);
    const currentValue = value !== void 0 ? normalizePhoneValue(value, fallbackCode) : uncontrolled;
    const getCountryName = (c) => {
      if (c.name) return String(c.name);
      if (c.label) {
        const s = String(c.label);
        const m = s.match(/^\s*(.*?)\s*\(/);
        if (m?.[1]) return m[1].trim();
        return s.trim();
      }
      return "";
    };
    const getCountryShort = (c) => {
      if (c.shortCode) return String(c.shortCode);
      if (c.label) {
        const s = String(c.label);
        const m = s.match(/^\s*([A-Za-z]{2,3})\s*\(/);
        if (m?.[1]) return m[1].trim();
      }
      return "";
    };
    const codeOptions = (0, import_react28.useMemo)(
      () => resolvedCountries.map((c) => ({
        label: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("span", { className: "oksPhoneCountryOption", children: [
          c.flag ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "oksPhoneCountryFlag", children: c.flag }) : getCountryShort(c) ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "oksPhoneCountryShort", children: getCountryShort(c) }) : null,
          getCountryName(c) ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "oksPhoneCountryName", children: getCountryName(c) }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "oksPhoneCountryCode", children: c.code })
        ] }),
        value: c.code,
        key: c.key ?? c.code
      })),
      [resolvedCountries]
    );
    const resolvedPhonePlaceholder = (0, import_react28.useMemo)(() => {
      if (labelPlacement !== "floating") return phonePlaceholder;
      if (!label) return phonePlaceholder;
      if (phonePlaceholder !== void 0) return phonePlaceholder;
      return " ";
    }, [labelPlacement, label, phonePlaceholder]);
    const topLabel = labelPlacement === "top" ? label : null;
    const floatingLabel = labelPlacement === "floating" ? label : null;
    const emit = (next) => {
      if (value === void 0) setUncontrolled(next);
      onChange?.(next);
    };
    const inputMode = numbersOnly && rest.inputMode === void 0 ? "numeric" : rest.inputMode;
    const htmlPattern = numbersOnly && rest.pattern === void 0 ? "\\d*" : rest.pattern;
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "div",
      {
        className: mergeClassName17("oksPhoneField", className),
        "data-size": size,
        "data-variant": variant,
        "data-tone": tone,
        "data-country-code-mode": countryCodeMode,
        "data-label-placement": labelPlacement,
        "data-invalid": isInvalid ? "true" : "false",
        "data-disabled": disabled ? "true" : "false",
        style: { ...toneVars, ...style },
        children: [
          topLabel ? /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("label", { className: "oksPhoneFieldLabel", htmlFor: `${baseId}-phone`, children: [
            topLabel,
            required ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
          ] }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "oksPhoneFieldControl", children: [
            countryCodeMode === "select" ? /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "oksPhoneFieldCode", children: [
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
                SelectField,
                {
                  "aria-label": "Country code",
                  size,
                  variant,
                  tone,
                  colorDepth,
                  options: codeOptions,
                  value: String(currentValue.code ?? ""),
                  disabled,
                  onChange: (e) => emit({
                    code: String(e?.target?.value ?? ""),
                    phone: currentValue.phone
                  }),
                  onBlur
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "oksPhoneDialCode", "aria-hidden": "true", children: String(currentValue.code ?? "") })
            ] }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "oksPhoneFieldInputWrap", children: [
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
                "input",
                {
                  ...rest,
                  ref,
                  id: `${baseId}-phone`,
                  name,
                  type: "tel",
                  disabled,
                  required,
                  className: "oksPhoneFieldInput",
                  placeholder: resolvedPhonePlaceholder,
                  "aria-invalid": isInvalid ? "true" : void 0,
                  "aria-describedby": ariaDescribedBy || void 0,
                  "aria-errormessage": errorId,
                  value: String(currentValue.phone ?? ""),
                  inputMode,
                  pattern: htmlPattern,
                  onChange: (e) => {
                    const raw = e.currentTarget.value;
                    const nextPhone = numbersOnly ? raw.replace(/[^\d]/g, "") : raw;
                    const max = rest.maxLength;
                    const capped = typeof max === "number" && Number.isFinite(max) && max >= 0 ? nextPhone.slice(0, max) : nextPhone;
                    emit({ code: currentValue.code, phone: capped });
                  },
                  onBlur
                }
              ),
              floatingLabel ? /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("label", { className: "oksPhoneFieldLabel", htmlFor: `${baseId}-phone`, children: [
                floatingLabel,
                required ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
              ] }) : null
            ] })
          ] }),
          description ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { id: descriptionId, className: "oksPhoneFieldDescription", children: description }) : null,
          error && error !== true ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { id: errorId, className: "oksPhoneFieldError", role: "alert", children: error }) : null
        ]
      }
    );
  }
);
PhoneField.displayName = "PhoneField";

// src/components/FormFieldSet/CustomFormElements/RadioGroupField/RadioGroupField.tsx
var import_react29 = require("react");

// src/components/FormFieldSet/CustomFormElements/RadioGroupField/RadioGroupField.module.css
styleInject('@layer components {\n  :where(.oksRadioGroupField) {\n    --oks-radio-fg: var(--oks-palette-neutral-950, #0a0a0a);\n    --oks-radio-muted: var(--oks-palette-neutral-700, #404040);\n    --oks-radio-border: var(--oks-palette-neutral-300, #d4d4d4);\n    --oks-radio-border-focus: var(--oks-radio-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-radio-error: var(--oks-color-danger-500, #e20202);\n    width: 100%;\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-1, 4px);\n    color: var(--oks-radio-fg);\n  }\n  :where(.oksRadioGroupFieldLabel) {\n    font-size: 14px;\n    line-height: 1.2;\n  }\n  :where(.oksRadioGroupFieldItems) {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--oks-space-2, 8px);\n  }\n  :where(.oksRadioGroupFieldItem) {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--oks-space-2, 8px);\n    user-select: none;\n    cursor: pointer;\n  }\n  :where(.oksRadioGroupFieldItem[data-disabled=true]) {\n    cursor: not-allowed;\n    opacity: 0.72;\n  }\n  :where(.oksRadioGroupFieldInput) {\n    appearance: none;\n    width: 16px;\n    height: 16px;\n    border: 1px solid var(--oks-radio-border);\n    border-radius: 999px;\n    background: #fff;\n    display: inline-grid;\n    place-items: center;\n    outline: none;\n  }\n  :where(.oksRadioGroupFieldInput:checked) {\n    border-color: var(--oks-radio-border-focus);\n  }\n  :where(.oksRadioGroupFieldInput:checked::after) {\n    content: "";\n    width: 8px;\n    height: 8px;\n    border-radius: 999px;\n    background: var(--oks-radio-border-focus);\n  }\n  :where(.oksRadioGroupFieldInput:focus-visible) {\n    border-color: var(--oks-radio-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-radio-border-focus) 28%, transparent);\n  }\n  :where(.oksRadioGroupField[data-invalid=true] .oksRadioGroupFieldInput) {\n    border-color: var(--oks-radio-error);\n  }\n  :where(.oksRadioGroupField[data-invalid=true] .oksRadioGroupFieldInput:checked::after) {\n    background: var(--oks-radio-error);\n  }\n  :where(.oksRadioGroupField[data-invalid=true] .oksRadioGroupFieldInput:focus-visible) {\n    border-color: var(--oks-radio-error);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-radio-error) 22%, transparent);\n  }\n  :where(.oksRadioGroupFieldItemLabel) {\n    font-size: 14px;\n    line-height: 1.2;\n    color: var(--oks-radio-muted);\n  }\n  :where(.oksRadioGroupFieldDescription) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-radio-muted);\n  }\n  :where(.oksRadioGroupFieldError) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-radio-error);\n  }\n}\n');

// src/components/FormFieldSet/CustomFormElements/RadioGroupField/RadioGroupField.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var RadioGroupField = (0, import_react29.forwardRef)(
  (props, ref) => {
    const {
      label,
      description,
      error,
      size = "md",
      tone = "primary",
      colorDepth = 500,
      className,
      id,
      name,
      required,
      disabled,
      options,
      value,
      defaultValue,
      onChange,
      style
    } = props;
    const reactId = (0, import_react29.useId)();
    const groupId = id ?? `oks-radio-group-${reactId}`;
    const groupName = name ?? groupId;
    const descriptionId = description ? `${groupId}-description` : void 0;
    const errorId = error && error !== true ? `${groupId}-error-message` : void 0;
    const ariaDescribedBy = [descriptionId, errorId].filter(Boolean).join(" ");
    const isInvalid = Boolean(error);
    const isControlled = value !== void 0;
    const [internalValue, setInternalValue] = (0, import_react29.useState)(
      () => defaultValue ?? ""
    );
    (0, import_react29.useEffect)(() => {
      if (!isControlled) return;
      setInternalValue(value ?? "");
    }, [isControlled, value]);
    const selected = isControlled ? String(value ?? "") : internalValue;
    const toneVars = {
      "--oks-radio-tone": getToneVar(tone, colorDepth)
    };
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      "div",
      {
        ref,
        className: mergeClassName17("oksRadioGroupField", className),
        "data-size": size,
        "data-tone": tone,
        "data-invalid": isInvalid ? "true" : "false",
        "data-disabled": disabled ? "true" : "false",
        style: { ...toneVars, ...style },
        children: [
          label ? /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "oksRadioGroupFieldLabel", children: [
            label,
            required ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
          ] }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { role: "radiogroup", "aria-describedby": ariaDescribedBy || void 0, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "oksRadioGroupFieldItems", children: options.map((opt, idx) => {
            const optionId = `${groupId}-${opt.key ?? `${idx}-${opt.value}`}`;
            const isDisabled = disabled || opt.disabled;
            const checked = String(selected) === opt.value;
            return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
              "label",
              {
                className: "oksRadioGroupFieldItem",
                "data-disabled": isDisabled ? "true" : "false",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                    "input",
                    {
                      id: optionId,
                      type: "radio",
                      name: groupName,
                      disabled: isDisabled,
                      value: opt.value,
                      checked,
                      onChange: () => {
                        if (isDisabled) return;
                        if (!isControlled) setInternalValue(opt.value);
                        onChange?.(opt.value);
                      },
                      className: "oksRadioGroupFieldInput",
                      "aria-invalid": isInvalid ? "true" : void 0
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "oksRadioGroupFieldItemLabel", children: opt.label })
                ]
              },
              opt.key ?? `${idx}-${opt.value}`
            );
          }) }) }),
          description ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { id: descriptionId, className: "oksRadioGroupFieldDescription", children: description }) : null,
          error && error !== true ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { id: errorId, className: "oksRadioGroupFieldError", role: "alert", children: error }) : null
        ]
      }
    );
  }
);
RadioGroupField.displayName = "RadioGroupField";

// src/components/FormFieldSet/CustomFormElements/SwitchField/SwitchField.tsx
var import_react30 = require("react");

// src/components/FormFieldSet/CustomFormElements/SwitchField/SwitchField.module.css
styleInject("@layer components {\n  :where(.oksSwitchField) {\n    --oks-switch-fg: var(--oks-palette-neutral-950, #0a0a0a);\n    --oks-switch-muted: var(--oks-palette-neutral-700, #404040);\n    --oks-switch-border-focus: var(--oks-switch-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-switch-error: var(--oks-color-danger-500, #e20202);\n    width: 100%;\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-1, 4px);\n    color: var(--oks-switch-fg);\n  }\n  :where(.oksSwitchFieldRow) {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--oks-space-2, 8px);\n    cursor: pointer;\n    user-select: none;\n  }\n  :where(.oksSwitchField[data-label-placement=top] .oksSwitchFieldRow) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--oks-space-1, 4px);\n  }\n  :where(.oksSwitchField[data-disabled=true] .oksSwitchFieldRow) {\n    cursor: not-allowed;\n    opacity: 0.72;\n  }\n  :where(.oksSwitchFieldControl) {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n  }\n  :where(.oksSwitchFieldControlInner) {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--oks-space-2, 8px);\n  }\n  :where(.oksSwitchFieldInput) {\n    position: absolute;\n    opacity: 0;\n    width: 1px;\n    height: 1px;\n    pointer-events: none;\n  }\n  :where(.oksSwitchFieldTrack) {\n    width: 36px;\n    height: 20px;\n    border-radius: 999px;\n    background: var(--oks-palette-neutral-300, #d4d4d4);\n    display: inline-flex;\n    align-items: center;\n    padding: 2px;\n    box-sizing: border-box;\n    transition: background 140ms ease;\n  }\n  :where(.oksSwitchFieldThumb) {\n    width: 16px;\n    height: 16px;\n    border-radius: 999px;\n    background: #fff;\n    transform: translateX(0);\n    transition: transform 140ms ease;\n  }\n  :where(.oksSwitchFieldInput:checked + .oksSwitchFieldControlInner .oksSwitchFieldTrack) {\n    background: var(--oks-switch-border-focus);\n  }\n  :where(.oksSwitchFieldInput:checked + .oksSwitchFieldControlInner .oksSwitchFieldTrack .oksSwitchFieldThumb) {\n    transform: translateX(16px);\n  }\n  :where(.oksSwitchFieldInput:focus-visible + .oksSwitchFieldControlInner .oksSwitchFieldTrack) {\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-switch-border-focus) 28%, transparent);\n  }\n  :where(.oksSwitchField[data-invalid=true] .oksSwitchFieldTrack) {\n    background: color-mix(in srgb, var(--oks-switch-error) 40%, #fff);\n  }\n  :where(.oksSwitchField[data-invalid=true] .oksSwitchFieldInput:checked + .oksSwitchFieldControlInner .oksSwitchFieldTrack) {\n    background: var(--oks-switch-error);\n  }\n  :where(.oksSwitchField[data-invalid=true] .oksSwitchFieldInput:focus-visible + .oksSwitchFieldControlInner .oksSwitchFieldTrack) {\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-switch-error) 22%, transparent);\n  }\n  :where(.oksSwitchFieldStateText) {\n    display: inline-flex;\n    font-size: 13px;\n    line-height: 1.2;\n    color: var(--oks-switch-muted);\n    white-space: nowrap;\n  }\n  :where(.oksSwitchFieldControlInner[data-state-text-placement=before] .oksSwitchFieldTrack) {\n    order: 2;\n  }\n  :where(.oksSwitchFieldControlInner[data-state-text-placement=before] .oksSwitchFieldStateText) {\n    order: 1;\n    display: none;\n  }\n  :where(.oksSwitchFieldControlInner[data-state-text-placement=after] .oksSwitchFieldTrack) {\n    order: 2;\n  }\n  :where(.oksSwitchFieldControlInner[data-state-text-placement=after] .oksSwitchFieldStateText) {\n    order: 3;\n    display: none;\n  }\n  :where(.oksSwitchFieldControlInner[data-state-text-placement=both] .oksSwitchFieldTrack) {\n    order: 2;\n  }\n  :where(.oksSwitchFieldControlInner[data-state-text-placement=both] .oksSwitchFieldStateText[data-state=unchecked]) {\n    order: 1;\n  }\n  :where(.oksSwitchFieldControlInner[data-state-text-placement=both] .oksSwitchFieldStateText[data-state=checked]) {\n    order: 3;\n  }\n  :where(.oksSwitchFieldControlInner[data-state-text-placement=both] .oksSwitchFieldStateText) {\n    opacity: 0.7;\n  }\n  :where(.oksSwitchFieldInput:not(:checked) + .oksSwitchFieldControlInner .oksSwitchFieldStateText[data-state=unchecked]) {\n    display: inline-flex;\n    opacity: 1;\n    color: var(--oks-switch-fg);\n  }\n  :where(.oksSwitchFieldInput:checked + .oksSwitchFieldControlInner .oksSwitchFieldStateText[data-state=checked]) {\n    display: inline-flex;\n    opacity: 1;\n    color: var(--oks-switch-fg);\n  }\n  :where(.oksSwitchFieldLabel) {\n    font-size: 14px;\n    line-height: 1.2;\n    color: var(--oks-switch-muted);\n  }\n  :where(.oksSwitchField[data-label-placement=top] .oksSwitchFieldLabel) {\n    color: var(--oks-palette-neutral-950, #0a0a0a);\n  }\n  :where(.oksSwitchFieldDescription) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-switch-muted);\n  }\n  :where(.oksSwitchFieldError) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-switch-error);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :where(.oksSwitchFieldTrack),\n    :where(.oksSwitchFieldThumb) {\n      transition: none;\n    }\n  }\n}\n");

// src/components/FormFieldSet/CustomFormElements/SwitchField/SwitchField.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var SwitchField = (0, import_react30.forwardRef)(
  (props, ref) => {
    const {
      label,
      labelPlacement = "top",
      description,
      error,
      size = "md",
      tone = "primary",
      colorDepth = 500,
      className,
      id,
      required,
      disabled,
      checked,
      defaultChecked,
      onChange,
      showStateText = false,
      checkedText = "On",
      uncheckedText = "Off",
      stateTextPlacement = "after",
      style,
      ...rest
    } = props;
    const reactId = (0, import_react30.useId)();
    const switchId = id ?? `oks-switch-${reactId}`;
    const resolvedLabelPlacement = labelPlacement === "floating" ? "top" : labelPlacement;
    const descriptionId = description ? `${switchId}-description` : void 0;
    const errorId = error && error !== true ? `${switchId}-error-message` : void 0;
    const ariaDescribedBy = [descriptionId, errorId].filter(Boolean).join(" ");
    const isInvalid = Boolean(error);
    const toneVars = {
      "--oks-switch-tone": getToneVar(tone, colorDepth)
    };
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
      "div",
      {
        className: mergeClassName17("oksSwitchField", className),
        "data-size": size,
        "data-tone": tone,
        "data-label-placement": resolvedLabelPlacement,
        "data-invalid": isInvalid ? "true" : "false",
        "data-disabled": disabled ? "true" : "false",
        style: { ...toneVars, ...style },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("label", { ref, className: "oksSwitchFieldRow", htmlFor: switchId, children: [
            resolvedLabelPlacement === "top" && label ? /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { className: "oksSwitchFieldLabel", children: [
              label,
              required ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
            ] }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { className: "oksSwitchFieldControl", children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                "input",
                {
                  ...rest,
                  id: switchId,
                  type: "checkbox",
                  role: "switch",
                  required,
                  disabled,
                  checked,
                  defaultChecked,
                  onChange: (e) => onChange?.(e.currentTarget.checked),
                  className: "oksSwitchFieldInput",
                  "aria-invalid": isInvalid ? "true" : void 0,
                  "aria-describedby": ariaDescribedBy || void 0,
                  "aria-errormessage": errorId
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
                "span",
                {
                  className: "oksSwitchFieldControlInner",
                  "data-state-text-placement": stateTextPlacement,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "oksSwitchFieldTrack", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "oksSwitchFieldThumb" }) }),
                    showStateText ? /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                        "span",
                        {
                          className: "oksSwitchFieldStateText",
                          "data-state": "unchecked",
                          children: uncheckedText
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "oksSwitchFieldStateText", "data-state": "checked", children: checkedText })
                    ] }) : null
                  ]
                }
              )
            ] }),
            resolvedLabelPlacement !== "top" && label ? /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { className: "oksSwitchFieldLabel", children: [
              label,
              required ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
            ] }) : null
          ] }),
          description ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { id: descriptionId, className: "oksSwitchFieldDescription", children: description }) : null,
          error && error !== true ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { id: errorId, className: "oksSwitchFieldError", role: "alert", children: error }) : null
        ]
      }
    );
  }
);
SwitchField.displayName = "SwitchField";

// src/components/FormFieldSet/CustomFormElements/TextAreaField/TextAreaField.tsx
var import_react31 = require("react");

// src/components/FormFieldSet/CustomFormElements/TextAreaField/TextAreaField.module.css
styleInject("@layer components {\n  :where(.oksTextAreaField) {\n    --oks-text-area-bg: #fff;\n    --oks-text-area-fg: var(--oks-palette-neutral-950, #0a0a0a);\n    --oks-text-area-border: var(--oks-palette-neutral-300, #d4d4d4);\n    --oks-text-area-border-hover: var(--oks-palette-neutral-400, #a3a3a3);\n    --oks-text-area-border-focus: var(--oks-text-area-tone, var(--oks-color-primary-500, #3b82f6));\n    --oks-text-area-error: var(--oks-color-danger-500, #e20202);\n    --oks-text-area-radius: var(--oks-radius-md, 0.375rem);\n    --oks-text-area-font-size: 14px;\n    --oks-text-area-pad-x: var(--oks-space-3, 12px);\n    --oks-text-area-pad-y: var(--oks-space-2, 8px);\n    width: 100%;\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--oks-space-1, 4px);\n    color: var(--oks-text-area-fg);\n  }\n  :where(.oksTextAreaField[data-size=xs]) {\n    --oks-text-area-font-size: 12px;\n    --oks-text-area-pad-x: var(--oks-space-2, 8px);\n    --oks-text-area-pad-y: var(--oks-space-1, 4px);\n  }\n  :where(.oksTextAreaField[data-size=xs-sm]) {\n    --oks-text-area-font-size: 13px;\n  }\n  :where(.oksTextAreaField[data-size=sm]) {\n    --oks-text-area-font-size: 14px;\n  }\n  :where(.oksTextAreaField[data-size=md]) {\n    --oks-text-area-font-size: 14px;\n  }\n  :where(.oksTextAreaField[data-size=lg]) {\n    --oks-text-area-font-size: 16px;\n    --oks-text-area-pad-x: var(--oks-space-4, 16px);\n  }\n  :where(.oksTextAreaField[data-size=xl]) {\n    --oks-text-area-font-size: 18px;\n    --oks-text-area-pad-x: var(--oks-space-4, 16px);\n    --oks-text-area-pad-y: var(--oks-space-3, 12px);\n  }\n  :where(.oksTextAreaFieldLabel) {\n    font-size: 14px;\n    line-height: 1.2;\n    color: var(--oks-palette-neutral-950, #0a0a0a);\n  }\n  :where(.oksTextAreaFieldControl) {\n    position: relative;\n    min-width: 0;\n    width: 100%;\n  }\n  :where(.oksTextAreaFieldInput) {\n    appearance: none;\n    width: 100%;\n    min-width: 0;\n    box-sizing: border-box;\n    padding: var(--oks-text-area-pad-y) var(--oks-text-area-pad-x);\n    border-radius: var(--oks-text-area-radius);\n    border: 1px solid var(--oks-text-area-border);\n    background: var(--oks-text-area-bg);\n    color: inherit;\n    font-size: var(--oks-text-area-font-size);\n    line-height: 1.35;\n    outline: none;\n    resize: vertical;\n  }\n  :where(.oksTextAreaField[data-variant=soft]) {\n    --oks-text-area-bg: var(--oks-palette-neutral-50, #fafafa);\n  }\n  :where(.oksTextAreaField[data-variant=soft] .oksTextAreaFieldInput) {\n    background: var(--oks-palette-neutral-50, #fafafa);\n    border: none;\n  }\n  :where(.oksTextAreaFieldInput:-webkit-autofill),\n  :where(.oksTextAreaFieldInput:-webkit-autofill:hover),\n  :where(.oksTextAreaFieldInput:-webkit-autofill:active) {\n    box-shadow: 0 0 0 1000px var(--oks-text-area-bg) inset;\n    -webkit-text-fill-color: var(--oks-text-area-fg);\n    caret-color: var(--oks-text-area-fg);\n  }\n  :where(.oksTextAreaFieldInput:-webkit-autofill:focus-visible),\n  :where(.oksTextAreaFieldControl:focus-within .oksTextAreaFieldInput:-webkit-autofill) {\n    border-color: var(--oks-text-area-border-focus);\n    box-shadow: 0 0 0 1000px var(--oks-text-area-bg) inset, 0 0 0 3px color-mix(in srgb, var(--oks-text-area-border-focus) 28%, transparent);\n  }\n  :where(.oksTextAreaField[data-invalid=true] .oksTextAreaFieldInput:-webkit-autofill:focus-visible),\n  :where(.oksTextAreaField[data-invalid=true] .oksTextAreaFieldControl:focus-within .oksTextAreaFieldInput:-webkit-autofill) {\n    border-color: var(--oks-text-area-error);\n    box-shadow: 0 0 0 1000px var(--oks-text-area-bg) inset, 0 0 0 3px color-mix(in srgb, var(--oks-text-area-error) 22%, transparent);\n  }\n  :where(.oksTextAreaFieldInput:hover) {\n    border-color: var(--oks-text-area-border-hover);\n  }\n  :where(.oksTextAreaFieldInput:focus-visible),\n  :where(.oksTextAreaFieldControl:focus-within .oksTextAreaFieldInput) {\n    border-color: var(--oks-text-area-border-focus);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-text-area-border-focus) 28%, transparent);\n  }\n  :where(.oksTextAreaField[data-invalid=true] .oksTextAreaFieldInput) {\n    border-color: var(--oks-text-area-error);\n  }\n  :where(.oksTextAreaField[data-invalid=true] .oksTextAreaFieldInput:focus-visible),\n  :where(.oksTextAreaField[data-invalid=true] .oksTextAreaFieldControl:focus-within .oksTextAreaFieldInput) {\n    border-color: var(--oks-text-area-error);\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-text-area-error) 22%, transparent);\n  }\n  :where(.oksTextAreaField[data-disabled=true] .oksTextAreaFieldInput) {\n    cursor: not-allowed;\n    opacity: 0.72;\n  }\n  :where(.oksTextAreaField[data-variant=underline] .oksTextAreaFieldInput) {\n    border-radius: 0;\n    border: none;\n    border-bottom: 1px solid var(--oks-text-area-border);\n    background: transparent;\n  }\n  :where(.oksTextAreaField[data-variant=underline] .oksTextAreaFieldInput:hover) {\n    border-bottom-color: var(--oks-text-area-border-hover);\n  }\n  :where(.oksTextAreaField[data-variant=underline] .oksTextAreaFieldInput:focus-visible),\n  :where(.oksTextAreaField[data-variant=underline] .oksTextAreaFieldControl:focus-within .oksTextAreaFieldInput) {\n    border-bottom-color: var(--oks-text-area-border-focus);\n    box-shadow: none;\n  }\n  :where(.oksTextAreaField[data-variant=underline][data-invalid=true] .oksTextAreaFieldInput) {\n    border-bottom-color: var(--oks-text-area-error);\n  }\n  :where(.oksTextAreaField[data-variant=underline][data-invalid=true] .oksTextAreaFieldInput:focus-visible),\n  :where(.oksTextAreaField[data-variant=underline][data-invalid=true] .oksTextAreaFieldControl:focus-within .oksTextAreaFieldInput) {\n    border-bottom-color: var(--oks-text-area-error);\n    box-shadow: none;\n  }\n  :where(.oksTextAreaFieldDescription) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-palette-neutral-700, #404040);\n  }\n  :where(.oksTextAreaFieldError) {\n    font-size: 13px;\n    line-height: 1.35;\n    color: var(--oks-text-area-error);\n  }\n  :where(.oksTextAreaField[data-label-placement=floating] .oksTextAreaFieldInput) {\n    padding-top: calc(var(--oks-text-area-pad-y) + 10px);\n  }\n  :where(.oksTextAreaField[data-label-placement=floating] .oksTextAreaFieldControl > .oksTextAreaFieldLabel) {\n    position: absolute;\n    left: var(--oks-text-area-pad-x);\n    top: 18px;\n    transform: translateY(-50%);\n    font-size: var(--oks-text-area-font-size);\n    color: var(--oks-palette-neutral-500, #737373);\n    pointer-events: none;\n    max-width: calc(100% - (2 * var(--oks-text-area-pad-x)));\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    transition:\n      top 140ms ease,\n      transform 140ms ease,\n      font-size 140ms ease,\n      color 140ms ease;\n  }\n  :where(.oksTextAreaField[data-label-placement=floating]) .oksTextAreaFieldInput::placeholder {\n    opacity: 0;\n    transition: opacity 140ms ease;\n  }\n  :where(.oksTextAreaField[data-label-placement=floating] .oksTextAreaFieldControl:focus-within) .oksTextAreaFieldInput::placeholder {\n    opacity: 0.72;\n  }\n  :where(.oksTextAreaField[data-label-placement=floating] .oksTextAreaFieldControl:focus-within > .oksTextAreaFieldLabel),\n  :where(.oksTextAreaField[data-label-placement=floating] .oksTextAreaFieldControl > .oksTextAreaFieldInput:not(:placeholder-shown) + .oksTextAreaFieldLabel) {\n    top: 8px;\n    transform: translateY(0);\n    font-size: 12px;\n    color: var(--oks-text-area-border-focus);\n  }\n  :where(.oksTextAreaField[data-label-placement=floating][data-invalid=true] .oksTextAreaFieldControl:focus-within > .oksTextAreaFieldLabel) {\n    color: var(--oks-text-area-error);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :where(.oksTextAreaField[data-label-placement=floating] .oksTextAreaFieldControl > .oksTextAreaFieldLabel),\n    :where(.oksTextAreaField[data-label-placement=floating]) .oksTextAreaFieldInput::placeholder {\n      transition: none;\n    }\n  }\n}\n");

// src/components/FormFieldSet/CustomFormElements/TextAreaField/TextAreaField.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
var TextAreaField = (0, import_react31.forwardRef)(
  (props, ref) => {
    const {
      label,
      labelPlacement = "top",
      description,
      error,
      size = "md",
      variant = "outline",
      tone = "primary",
      colorDepth = 500,
      className,
      id,
      required,
      disabled,
      placeholder,
      rows = 4,
      style,
      ...rest
    } = props;
    const reactId = (0, import_react31.useId)();
    const fieldId = id ?? `oks-text-area-${reactId}`;
    const describedBy = rest["aria-describedby"];
    const descriptionId = description ? `${fieldId}-description` : void 0;
    const errorId = error && error !== true ? `${fieldId}-error-message` : void 0;
    const ariaDescribedBy = [describedBy, descriptionId, errorId].filter(Boolean).join(" ");
    const isInvalid = Boolean(error);
    const resolvedPlaceholder = (0, import_react31.useMemo)(() => {
      if (labelPlacement !== "floating") return placeholder;
      if (!label) return placeholder;
      if (placeholder !== void 0) return placeholder;
      return " ";
    }, [labelPlacement, label, placeholder]);
    const toneVars = {
      "--oks-text-area-tone": getToneVar(tone, colorDepth)
    };
    const topLabel = labelPlacement === "top" ? label : null;
    const floatingLabel = labelPlacement === "floating" ? label : null;
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
      "div",
      {
        className: mergeClassName17("oksTextAreaField", className),
        "data-size": size,
        "data-variant": variant,
        "data-tone": tone,
        "data-label-placement": labelPlacement,
        "data-invalid": isInvalid ? "true" : "false",
        "data-disabled": disabled ? "true" : "false",
        style: { ...toneVars, ...style },
        children: [
          topLabel ? /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("label", { className: "oksTextAreaFieldLabel", htmlFor: fieldId, children: [
            topLabel,
            required ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
          ] }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "oksTextAreaFieldControl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
              "textarea",
              {
                ...rest,
                ref,
                id: fieldId,
                required,
                disabled,
                placeholder: resolvedPlaceholder,
                rows,
                className: "oksTextAreaFieldInput",
                "aria-invalid": isInvalid ? "true" : void 0,
                "aria-describedby": ariaDescribedBy || void 0,
                "aria-errormessage": errorId
              }
            ),
            floatingLabel ? /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("label", { className: "oksTextAreaFieldLabel", htmlFor: fieldId, children: [
              floatingLabel,
              required ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
            ] }) : null
          ] }),
          description ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { id: descriptionId, className: "oksTextAreaFieldDescription", children: description }) : null,
          error && error !== true ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { id: errorId, className: "oksTextAreaFieldError", role: "alert", children: error }) : null
        ]
      }
    );
  }
);
TextAreaField.displayName = "TextAreaField";

// src/components/FormFieldSet/CustomFormElements/TextField/TextField.tsx
var import_react32 = require("react");
var import_jsx_runtime32 = require("react/jsx-runtime");
var TextField = (0, import_react32.forwardRef)(
  (props, ref) => {
    const {
      label,
      labelPlacement = "top",
      description,
      error,
      size = "md",
      variant = "outline",
      color,
      tone,
      colorDepth = 500,
      radius,
      rounded,
      startIcon,
      endIcon,
      prefix,
      suffix,
      className,
      id,
      required,
      disabled,
      placeholder,
      style,
      ...rest
    } = props;
    const resolvedColor = color ?? tone ?? "default";
    const resolvedRadius = radius ?? rounded ?? "md";
    const reactId = (0, import_react32.useId)();
    const inputId = id ?? `oks-text-field-${reactId}`;
    const describedBy = rest["aria-describedby"];
    const descriptionId = description ? `${inputId}-description` : void 0;
    const errorId = error && error !== true ? `${inputId}-error-message` : void 0;
    const ariaDescribedBy = [describedBy, descriptionId, errorId].filter(Boolean).join(" ");
    const isInvalid = Boolean(error);
    const resolvedPlaceholder = (0, import_react32.useMemo)(() => {
      if (labelPlacement !== "floating") return placeholder;
      if (!label) return placeholder;
      if (placeholder !== void 0) return placeholder;
      return " ";
    }, [labelPlacement, label, placeholder]);
    const toneVars = {
      "--oks-text-field-tone": getToneVar(resolvedColor, colorDepth)
    };
    const topLabel = labelPlacement === "top" ? label : null;
    const floatingLabel = labelPlacement === "floating" ? label : null;
    const hasStart = startIcon != null || prefix != null;
    const hasEnd = endIcon != null || suffix != null;
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
      "div",
      {
        className: mergeClassName17("oksTextField", className),
        "data-size": size,
        "data-variant": variant,
        "data-color": resolvedColor,
        "data-radius": resolvedRadius,
        "data-label-placement": labelPlacement,
        "data-invalid": isInvalid ? "true" : "false",
        "data-disabled": disabled ? "true" : "false",
        "data-has-start": hasStart ? "true" : "false",
        "data-has-end": hasEnd ? "true" : "false",
        style: { ...toneVars, ...style },
        children: [
          topLabel ? /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("label", { className: "oksTextFieldLabel", htmlFor: inputId, children: [
            topLabel,
            required ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
          ] }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "oksTextFieldControl", children: [
            hasStart ? /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("span", { className: "oksTextFieldAdornment oksTextFieldStart", children: [
              startIcon != null ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "oksTextFieldIcon", children: startIcon }) : null,
              prefix != null ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "oksTextFieldAffix", children: prefix }) : null
            ] }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "oksTextFieldInputSlot", children: [
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
                "input",
                {
                  ...rest,
                  ref,
                  id: inputId,
                  required,
                  disabled,
                  placeholder: resolvedPlaceholder,
                  className: "oksTextFieldInput",
                  "aria-invalid": isInvalid ? "true" : void 0,
                  "aria-describedby": ariaDescribedBy || void 0,
                  "aria-errormessage": errorId
                }
              ),
              floatingLabel ? /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("label", { className: "oksTextFieldLabel", htmlFor: inputId, children: [
                floatingLabel,
                required ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { "aria-hidden": "true", children: "*" }) : null
              ] }) : null
            ] }),
            hasEnd ? /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("span", { className: "oksTextFieldAdornment oksTextFieldEnd", children: [
              suffix != null ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "oksTextFieldAffix", children: suffix }) : null,
              endIcon != null ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "oksTextFieldIcon", children: endIcon }) : null
            ] }) : null
          ] }),
          description ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { id: descriptionId, className: "oksTextFieldDescription", children: description }) : null,
          error && error !== true ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { id: errorId, className: "oksTextFieldError", role: "alert", children: error }) : null
        ]
      }
    );
  }
);
TextField.displayName = "TextField";

// src/components/FormFieldSet/FormWrapper/Form.tsx
var import_react33 = require("react");
var import_jsx_runtime33 = require("react/jsx-runtime");
var FormContext = (0, import_react33.createContext)(void 0);
var useFormContext = () => {
  const ctx = (0, import_react33.useContext)(FormContext);
  if (!ctx) {
    throw new Error("useFormContext must be used within a Form");
  }
  return ctx;
};
var useOptionalFormContext = () => (0, import_react33.useContext)(FormContext);
var Form = (0, import_react33.forwardRef)((props, ref) => {
  const {
    children,
    onSubmit,
    onError,
    validationMode = "blur",
    showErrorsOn = "blur",
    className = "",
    validateOnMount = false,
    initialValues = {},
    disableAutofill = true,
    ...rest
  } = props;
  const { autoComplete: autoCompleteProp, ...restFormProps } = rest;
  const resolvedAutoComplete = autoCompleteProp ?? (disableAutofill ? "off" : void 0);
  const [formData, setFormData] = (0, import_react33.useState)(() => initialValues || {});
  const [errors, setErrors] = (0, import_react33.useState)({});
  const [touched, setTouched] = (0, import_react33.useState)({});
  const [isSubmitting, setIsSubmitting] = (0, import_react33.useState)(false);
  const [validationSchema, setValidationSchema] = (0, import_react33.useState)({});
  const formDataRef = (0, import_react33.useRef)(initialValues || {});
  const changeTimersRef = (0, import_react33.useRef)({});
  const usedFieldNamesRef = (0, import_react33.useRef)(/* @__PURE__ */ new Set());
  const fieldNameCountsRef = (0, import_react33.useRef)({});
  const initialValuesRef = (0, import_react33.useRef)(initialValues || {});
  (0, import_react33.useEffect)(() => {
    initialValuesRef.current = initialValues || {};
  }, [initialValues]);
  (0, import_react33.useEffect)(() => {
    formDataRef.current = formData;
  }, [formData]);
  const getUniqueFieldName = (0, import_react33.useCallback)((baseName) => {
    const base = String(baseName || "field").trim() || "field";
    const used = usedFieldNamesRef.current;
    const counts = fieldNameCountsRef.current;
    if (!used.has(base)) {
      used.add(base);
      counts[base] = 1;
      return base;
    }
    let next = (counts[base] || 1) + 1;
    let candidate = `${base}_${next}`;
    while (used.has(candidate)) {
      next += 1;
      candidate = `${base}_${next}`;
    }
    counts[base] = next;
    used.add(candidate);
    return candidate;
  }, []);
  const registerField = (0, import_react33.useCallback)(
    (fieldName, validation) => {
      if (!validation || !validation.rules || Object.keys(validation.rules).length < 1)
        return;
      setValidationSchema((prev) => {
        const prevVal = prev[fieldName];
        const prevStr = prevVal ? JSON.stringify(prevVal) : "";
        const nextStr = JSON.stringify(validation);
        if (prevStr === nextStr) return prev;
        return { ...prev, [fieldName]: validation };
      });
    },
    []
  );
  const unregisterField = (0, import_react33.useCallback)((fieldName) => {
    setValidationSchema((prev) => {
      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
    usedFieldNamesRef.current.delete(fieldName);
    setErrors((prev) => {
      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
    setTouched((prev) => {
      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
  }, []);
  const validateFieldValue = (0, import_react33.useCallback)(
    (fieldName, value, validation) => {
      if (!validation || !validation.rules) return null;
      const fieldErrors = validateField(
        value,
        validation.rules,
        validation.message ?? {},
        { formData: formDataRef.current, fieldName }
      );
      const first = getFirstError(fieldErrors);
      setErrors((prev) => ({ ...prev, [fieldName]: first }));
      return first;
    },
    []
  );
  const handleFieldChange = (0, import_react33.useCallback)(
    (fieldName, value) => {
      setFormData((prev) => ({ ...prev, [fieldName]: value }));
      const shouldValidateOnChange = !!touched[fieldName] || validationMode === "change";
      if (shouldValidateOnChange && validationSchema[fieldName]) {
        const timers = changeTimersRef.current;
        if (timers[fieldName]) clearTimeout(timers[fieldName]);
        timers[fieldName] = setTimeout(() => {
          const schema = validationSchema[fieldName];
          if (schema) validateFieldValue(fieldName, value, schema);
          timers[fieldName] = void 0;
        }, 400);
      }
    },
    [touched, validationMode, validationSchema, validateFieldValue]
  );
  const handleFieldBlur = (0, import_react33.useCallback)(
    (fieldName) => {
      setTouched((prev) => ({ ...prev, [fieldName]: true }));
      const schema = validationSchema[fieldName];
      if (schema) {
        const value = formData[fieldName];
        validateFieldValue(fieldName, value, schema);
      }
    },
    [validationSchema, formData, validateFieldValue]
  );
  const handleSubmit = (0, import_react33.useCallback)(
    async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      const formErrors = validateForm(formData, validationSchema);
      setErrors(formErrors);
      const hasErrors = Object.keys(formErrors).some(
        (k) => formErrors[k] !== null
      );
      if (hasErrors) {
        const allTouched = {};
        Object.keys(validationSchema).forEach((fieldName) => {
          allTouched[fieldName] = true;
        });
        setTouched(allTouched);
        setIsSubmitting(false);
        onError?.(formErrors);
        return;
      }
      try {
        await onSubmit(formData);
      } catch (e) {
        const message = e instanceof Error ? e.message : "Submit failed";
        onError?.({ submit: message });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validationSchema, onSubmit, onError]
  );
  const reset = (0, import_react33.useCallback)((nextValues) => {
    const values = nextValues && typeof nextValues === "object" ? nextValues : initialValuesRef.current || {};
    setFormData(values);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, []);
  (0, import_react33.useImperativeHandle)(ref, () => ({ reset }), [reset]);
  (0, import_react33.useEffect)(() => {
    if (validateOnMount && Object.keys(validationSchema).length > 0) {
      const formErrors = validateForm(formData, validationSchema);
      setErrors(formErrors);
    }
  }, [validateOnMount, validationSchema, formData]);
  const ctx = {
    formData,
    errors,
    touched,
    isSubmitting,
    disableAutofill,
    validationMode,
    showErrorsOn,
    validationSchema,
    registerField,
    unregisterField,
    validateFieldValue,
    handleFieldChange,
    handleFieldBlur,
    getUniqueFieldName,
    setFormData,
    setErrors,
    setTouched
  };
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(FormContext.Provider, { value: ctx, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    "form",
    {
      onSubmit: handleSubmit,
      className,
      noValidate: true,
      autoComplete: resolvedAutoComplete,
      ...restFormProps,
      children: [
        disableAutofill ? /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "input",
            {
              tabIndex: -1,
              "aria-hidden": "true",
              type: "text",
              name: "__oks_autofill_username",
              autoComplete: "username",
              style: {
                position: "absolute",
                top: 0,
                left: -9999,
                width: 1,
                height: 1,
                opacity: 0,
                pointerEvents: "none"
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "input",
            {
              tabIndex: -1,
              "aria-hidden": "true",
              type: "password",
              name: "__oks_autofill_password",
              autoComplete: "new-password",
              style: {
                position: "absolute",
                top: 0,
                left: -9999,
                width: 1,
                height: 1,
                opacity: 0,
                pointerEvents: "none"
              }
            }
          )
        ] }) : null,
        children
      ]
    }
  ) });
});
Form.displayName = "Form";

// src/components/FormFieldSet/FormFieldSet.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
var sanitize = (str) => String(str || "").toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
function getContextValue(formData, name) {
  if (!formData) return void 0;
  return formData[name];
}
function getContextError(errors, name) {
  if (!errors) return void 0;
  return errors[name];
}
var FormFieldSet = (props) => {
  const {
    type = "text",
    label,
    description,
    labelPlacement,
    size = "md",
    variant = "outline",
    color,
    tone,
    colorDepth = 500,
    name,
    id,
    validation,
    error,
    touched,
    ...rest
  } = props;
  const resolvedColor = color ?? tone ?? "default";
  const {
    onChange: onChangeProp,
    onBlur: onBlurProp,
    value: valueProp,
    defaultValue: defaultValueProp,
    ...restPropsRaw
  } = rest;
  const formContext = useOptionalFormContext();
  const disableAutofill = Boolean(formContext?.disableAutofill);
  const { autoComplete: autoCompleteProp, ...restPropsBase } = restPropsRaw ?? {};
  const resolvedAutoComplete = autoCompleteProp ?? (disableAutofill ? type === "password" ? "new-password" : "off" : void 0);
  const restProps = resolvedAutoComplete === void 0 ? restPropsBase : { ...restPropsBase, autoComplete: resolvedAutoComplete };
  const reactId = (0, import_react34.useId)();
  const sanitizedReactId = (0, import_react34.useMemo)(
    () => String(reactId).replace(/[^a-z0-9_-]/gi, ""),
    [reactId]
  );
  const placeholderCandidate = restProps?.placeholder;
  const baseName = (0, import_react34.useMemo)(() => {
    if (id) return sanitize(id);
    if (label) return sanitize(label);
    if (placeholderCandidate) return sanitize(placeholderCandidate);
    return "field";
  }, [id, label, placeholderCandidate]);
  const nameRef = (0, import_react34.useRef)(null);
  if (nameRef.current === null) {
    if (name) {
      nameRef.current = name;
    } else if (typeof formContext?.getUniqueFieldName === "function") {
      nameRef.current = formContext.getUniqueFieldName(baseName);
    } else {
      nameRef.current = baseName;
    }
  }
  const idRef = (0, import_react34.useRef)(null);
  if (idRef.current === null) {
    if (id) {
      idRef.current = id;
    } else {
      const suffix = sanitizedReactId || "id";
      idRef.current = `${baseName}_${suffix}`;
    }
  }
  const fieldName = nameRef.current ?? baseName;
  const fieldId = idRef.current ?? `${baseName}_${sanitizedReactId || "id"}`;
  const normalizedValidation = (0, import_react34.useMemo)(() => {
    if (validation && validation.rules && Object.keys(validation.rules).length > 0)
      return validation;
    return null;
  }, [validation]);
  const registerFieldFn = formContext?.registerField;
  const unregisterFieldFn = formContext?.unregisterField;
  const isRegisteredRef = (0, import_react34.useRef)(false);
  (0, import_react34.useEffect)(() => {
    if (registerFieldFn && normalizedValidation && !isRegisteredRef.current) {
      registerFieldFn(fieldName, normalizedValidation);
      isRegisteredRef.current = true;
    }
    return () => {
      if (unregisterFieldFn && isRegisteredRef.current) {
        unregisterFieldFn(fieldName);
        isRegisteredRef.current = false;
      }
    };
  }, [fieldName, normalizedValidation, registerFieldFn, unregisterFieldFn]);
  (0, import_react34.useEffect)(() => {
    if (registerFieldFn && normalizedValidation && isRegisteredRef.current) {
      registerFieldFn(fieldName, normalizedValidation);
    }
  }, [normalizedValidation, fieldName, registerFieldFn]);
  const [localValue, setLocalValue] = (0, import_react34.useState)(() => {
    if (valueProp !== void 0) return valueProp;
    if (defaultValueProp !== void 0) return defaultValueProp;
    if (type === "checkbox") return [];
    if (type === "switch") return false;
    if (type === "file") return null;
    return "";
  });
  const [localTouched, setLocalTouched] = (0, import_react34.useState)(false);
  const [localError, setLocalError] = (0, import_react34.useState)(null);
  (0, import_react34.useEffect)(() => {
    if (!formContext && normalizedValidation?.rules) {
      const errors = validateField(
        localValue,
        normalizedValidation.rules,
        normalizedValidation.message ?? {}
      );
      setLocalError(getFirstError(errors));
    }
  }, [formContext, localValue, normalizedValidation]);
  const currentValue = (() => {
    if (formContext) {
      const v = getContextValue(formContext.formData, fieldName);
      if (v !== void 0) return v;
    }
    if (valueProp !== void 0) return valueProp;
    return localValue;
  })();
  const fieldTouched = touched !== void 0 ? touched : formContext ? Boolean(formContext.touched[fieldName]) : localTouched;
  const fieldError = error !== void 0 ? error : formContext ? getContextError(formContext.errors, fieldName) : localError;
  const shouldShowError = Boolean(fieldError) && Boolean(fieldTouched);
  const handleValueChange = (next) => {
    const nextValue = (() => {
      if (next && typeof next === "object" && "target" in next) {
        const target = next.target;
        if (type === "file") return target.files ?? null;
        return target.value;
      }
      return next;
    })();
    if (formContext) {
      formContext.handleFieldChange(fieldName, nextValue);
      if (formContext.validationMode === "change" && normalizedValidation?.rules) {
        formContext.validateFieldValue(
          fieldName,
          nextValue,
          normalizedValidation
        );
      }
    } else {
      setLocalValue(nextValue);
      if (normalizedValidation?.rules) {
        const errors = validateField(
          nextValue,
          normalizedValidation.rules,
          normalizedValidation.message ?? {}
        );
        setLocalError(getFirstError(errors));
      }
    }
    onChangeProp?.(next);
  };
  const handleBlur = (event) => {
    if (formContext) {
      formContext.handleFieldBlur(fieldName);
    } else {
      setLocalTouched(true);
      if (normalizedValidation?.rules) {
        const errors = validateField(
          localValue,
          normalizedValidation.rules,
          normalizedValidation.message ?? {}
        );
        setLocalError(getFirstError(errors));
      }
    }
    onBlurProp?.(event);
  };
  const shared = {
    label,
    description,
    labelPlacement,
    size,
    variant,
    color: resolvedColor,
    colorDepth,
    id: fieldId,
    name: fieldName,
    disabled: restProps.disabled,
    required: restProps.required
  };
  if (type === "textarea") {
    const textValue = currentValue == null ? "" : String(currentValue);
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      TextAreaField,
      {
        ...restProps,
        ...shared,
        value: textValue,
        onChange: handleValueChange,
        onBlur: handleBlur,
        error: shouldShowError ? fieldError : false
      }
    );
  }
  if (type === "select") {
    const { placeholder, placeholderOption, ...selectRest } = restProps;
    const multiple = Boolean(restProps.multiple);
    const selectValue = multiple ? Array.isArray(currentValue) ? currentValue.map((v) => String(v)) : [] : currentValue == null ? "" : String(currentValue);
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      SelectField,
      {
        ...selectRest,
        ...shared,
        placeholderOption: placeholderOption ?? placeholder,
        value: selectValue,
        onChange: handleValueChange,
        onBlur: handleBlur,
        error: shouldShowError ? fieldError : false
      }
    );
  }
  if (type === "radio") {
    const radioValue = currentValue == null ? "" : String(currentValue);
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      RadioGroupField,
      {
        ...restProps,
        ...shared,
        value: radioValue,
        onChange: (v) => handleValueChange(v),
        error: shouldShowError ? fieldError : false
      }
    );
  }
  if (type === "checkbox") {
    const checkboxValue = Array.isArray(currentValue) ? currentValue.map((v) => String(v)) : [];
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      CheckboxGroupField,
      {
        ...restProps,
        ...shared,
        value: checkboxValue,
        onChange: (v) => handleValueChange(v),
        error: shouldShowError ? fieldError : false
      }
    );
  }
  if (type === "switch") {
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      SwitchField,
      {
        ...restProps,
        ...shared,
        checked: Boolean(currentValue),
        onChange: (v) => handleValueChange(v),
        error: shouldShowError ? fieldError : false
      }
    );
  }
  if (type === "datepicker") {
    const isRange = Boolean(restProps.range);
    const datepickerValue = isRange ? currentValue && typeof currentValue === "object" ? {
      start: String(currentValue.start ?? ""),
      end: String(currentValue.end ?? "")
    } : { start: "", end: "" } : currentValue == null ? "" : String(currentValue);
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      DatePickerField,
      {
        ...restProps,
        ...shared,
        value: datepickerValue,
        onChange: (v) => handleValueChange(v),
        onBlur: handleBlur,
        error: shouldShowError ? fieldError : false
      }
    );
  }
  if (type === "phone") {
    const defaultCountryCode = restProps.defaultCountryCode;
    const fallbackCode = String(defaultCountryCode ?? "+1");
    const phoneValue = currentValue && typeof currentValue === "object" ? {
      code: String(currentValue.code || fallbackCode),
      phone: String(currentValue.phone ?? "")
    } : { code: fallbackCode, phone: "" };
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      PhoneField,
      {
        ...restProps,
        ...shared,
        value: phoneValue,
        onChange: (v) => handleValueChange(v),
        onBlur: handleBlur,
        error: shouldShowError ? fieldError : false
      }
    );
  }
  if (type === "password") {
    const passwordValue = currentValue == null ? "" : String(currentValue);
    const strongPassword = normalizedValidation?.rules?.strongPassword;
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      PasswordField,
      {
        ...restProps,
        ...shared,
        value: passwordValue,
        onChange: handleValueChange,
        onBlur: handleBlur,
        error: shouldShowError ? fieldError : false,
        strongPassword
      }
    );
  }
  if (type === "file") {
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      TextField,
      {
        ...restProps,
        ...shared,
        type: "file",
        onChange: handleValueChange,
        onBlur: handleBlur,
        error: shouldShowError ? fieldError : false
      }
    );
  }
  const inputValue = currentValue == null ? "" : String(currentValue);
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    TextField,
    {
      ...restProps,
      ...shared,
      type,
      value: inputValue,
      onChange: handleValueChange,
      onBlur: handleBlur,
      error: shouldShowError ? fieldError : false
    }
  );
};

// src/components/FormFieldSet/LoopFields.tsx
var import_react35 = __toESM(require("react"), 1);
var import_jsx_runtime35 = require("react/jsx-runtime");
var escapeRegExp = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var sanitize2 = (str) => String(str || "").toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
var getChildBaseName = (child) => {
  const p = child?.props || {};
  return sanitize2(p.name ?? p.id ?? p.label ?? p.placeholder ?? "field");
};
var collectBases = (node) => {
  if (!import_react35.default.isValidElement(node)) return [];
  if (node.type === FormFieldSet) return [getChildBaseName(node)];
  const childNodes = node.props?.children;
  if (!childNodes) return [];
  const arr = [];
  import_react35.default.Children.forEach(childNodes, (c) => {
    const bases = collectBases(c);
    if (bases.length) arr.push(...bases);
  });
  return arr;
};
var cloneWithIndex = (node, index, group, nameStrategy) => {
  if (!import_react35.default.isValidElement(node)) return node;
  if (node.type === FormFieldSet) {
    const base = getChildBaseName(node);
    const suffix = nameStrategy === "bracket" && group ? `${group}[${index}].${base}` : `${base}_${index}`;
    return import_react35.default.cloneElement(node, {
      key: suffix,
      name: suffix,
      id: suffix
    });
  }
  const childNodes = node.props?.children;
  if (!childNodes) return node;
  const mapped = import_react35.default.Children.map(
    childNodes,
    (c) => cloneWithIndex(c, index, group, nameStrategy)
  );
  return import_react35.default.cloneElement(node, { children: mapped });
};
var LoopFields = (props) => {
  const {
    children,
    minItems = 0,
    maxItems = 5,
    addTitle = "Add",
    removeTitle = "Remove",
    size = "sm",
    className = "",
    group,
    nameStrategy = "suffix",
    controls = "top"
  } = props;
  const formContext = useOptionalFormContext();
  const initialCount = (0, import_react35.useMemo)(() => minItems < 1 ? 1 : minItems, [minItems]);
  const [count, setCount] = (0, import_react35.useState)(initialCount);
  const addItem = () => setCount((c) => c >= maxItems ? c : c + 1);
  const removeItem = (removeIndex) => {
    const resolvedIndex = typeof removeIndex === "number" ? removeIndex : Math.max(0, count - 1);
    if (resolvedIndex < 0 || resolvedIndex >= count) return;
    const nextCount = count - 1;
    if (nextCount < minItems) return;
    if (formContext) {
      const prevForm = formContext.formData || {};
      if (nameStrategy === "bracket" && group) {
        const re = new RegExp(`^${escapeRegExp(group)}\\[(\\d+)\\]\\.(.+)$`);
        const nextForm = {};
        Object.entries(prevForm).forEach(([key, value]) => {
          const m = key.match(re);
          if (!m) {
            nextForm[key] = value;
            return;
          }
          const idxStr = m[1];
          const field = m[2];
          if (!idxStr || !field) {
            nextForm[key] = value;
            return;
          }
          const idx = parseInt(idxStr, 10);
          if (idx < resolvedIndex) {
            nextForm[key] = value;
            return;
          }
          if (idx === resolvedIndex) return;
          nextForm[`${group}[${idx - 1}].${field}`] = value;
        });
        formContext.setFormData(nextForm);
      } else {
        const templateHelpers = {
          count,
          minItems,
          maxItems,
          canAdd: count < maxItems,
          canRemove: count > minItems,
          addItem: () => {
          },
          removeItem: () => {
          },
          removeLastItem: () => {
          }
        };
        const templateNode = typeof children === "function" ? children(0, templateHelpers) : children;
        const bases = Array.from(new Set(collectBases(templateNode)));
        if (!bases.length) {
          formContext.setFormData(prevForm);
        } else {
          const re = new RegExp(`^(${bases.map(escapeRegExp).join("|")})_(\\d+)$`);
          const nextForm = {};
          Object.entries(prevForm).forEach(([key, value]) => {
            const m = key.match(re);
            if (!m) {
              nextForm[key] = value;
              return;
            }
            const base = m[1];
            const idxStr = m[2];
            if (!base || !idxStr) {
              nextForm[key] = value;
              return;
            }
            const idx = parseInt(idxStr, 10);
            if (idx < resolvedIndex) {
              nextForm[key] = value;
              return;
            }
            if (idx === resolvedIndex) return;
            nextForm[`${base}_${idx - 1}`] = value;
          });
          formContext.setFormData(nextForm);
        }
      }
    }
    setCount(nextCount);
  };
  const removeLastItem = () => removeItem(count - 1);
  const helpers = {
    count,
    minItems,
    maxItems,
    canAdd: count < maxItems,
    canRemove: count > minItems,
    addItem,
    removeItem,
    removeLastItem
  };
  const renderItem = (index) => {
    const node = typeof children === "function" ? children(index, helpers) : children;
    if (Array.isArray(node)) return node.map((n) => cloneWithIndex(n, index, group, nameStrategy));
    return cloneWithIndex(node, index, group, nameStrategy);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className, children: [
    controls === "top" ? /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { style: { display: "flex", gap: "8px", alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        Button,
        {
          variant: "bordered",
          size,
          onClick: addItem,
          isDisabled: !helpers.canAdd,
          children: addTitle
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        Button,
        {
          variant: "bordered",
          size,
          onClick: removeLastItem,
          isDisabled: !helpers.canRemove,
          children: removeTitle
        }
      )
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: renderItem(i) }, `loop_item_${i}`)) })
  ] });
};
var loopGroupToArray = (formData, groupName) => {
  const result = [];
  const re = new RegExp(`^${escapeRegExp(groupName)}\\[(\\d+)\\]\\.(.+)$`);
  Object.keys(formData || {}).forEach((key) => {
    const m = key.match(re);
    if (!m) return;
    const idxStr = m[1];
    const field = m[2];
    if (!idxStr || !field) return;
    const idx = parseInt(idxStr, 10);
    if (!result[idx]) result[idx] = {};
    result[idx][field] = formData[key];
  });
  return result.filter((x) => x && Object.keys(x).length > 0);
};

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