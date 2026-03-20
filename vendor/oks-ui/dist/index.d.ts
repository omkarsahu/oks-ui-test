import * as react from 'react';
import react__default, { HTMLAttributes, ReactNode, ButtonHTMLAttributes, CSSProperties, ElementType, SVGProps, MouseEvent, PointerEvent, KeyboardEvent, FocusEvent, RefObject, Key, ReactElement, HTMLAttributeAnchorTarget, HTMLAttributeReferrerPolicy, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, FormHTMLAttributes, Ref } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type AlertColor = "default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger";
type AlertVariant = "solid" | "bordered" | "flat" | "faded";
type AlertRadius = "none" | "sm" | "md" | "lg" | "full";
type AlertSlot = "base" | "title" | "description" | "mainWrapper" | "closeButton" | "iconWrapper" | "alertIcon";
type AlertClassNames = Partial<Record<AlertSlot, string>>;
type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, "color" | "title"> & {
    title?: ReactNode;
    description?: ReactNode;
    color?: AlertColor;
    variant?: AlertVariant;
    radius?: AlertRadius;
    icon?: ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
    isVisible?: boolean;
    isClosable?: boolean;
    hideIcon?: boolean;
    hideIconWrapper?: boolean;
    closeButtonProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;
    onClose?: () => void;
    onVisibleChange?: (isVisible: boolean) => void;
    classNames?: AlertClassNames;
    style?: CSSProperties;
};
declare const Alert: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "color" | "title"> & {
    title?: ReactNode;
    description?: ReactNode;
    color?: AlertColor;
    variant?: AlertVariant;
    radius?: AlertRadius;
    icon?: ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
    isVisible?: boolean;
    isClosable?: boolean;
    hideIcon?: boolean;
    hideIconWrapper?: boolean;
    closeButtonProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;
    onClose?: () => void;
    onVisibleChange?: (isVisible: boolean) => void;
    classNames?: AlertClassNames;
    style?: CSSProperties;
} & react.RefAttributes<HTMLDivElement>>;

type TooltipSize = "sm" | "md" | "lg";
type TooltipColor = "default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger";
type TooltipRadius = "none" | "sm" | "md" | "lg" | "full";
type TooltipShadow = "none" | "sm" | "md" | "lg";
type TooltipColorDepth = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
type TooltipPlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end";
type TooltipClassNames = Partial<Record<"base" | "content" | "arrow", string>>;
type TooltipProps = {
    children: ReactNode;
    content: ReactNode;
    size?: TooltipSize;
    color?: TooltipColor;
    colorDepth?: TooltipColorDepth;
    radius?: TooltipRadius;
    shadow?: TooltipShadow;
    placement?: TooltipPlacement;
    delay?: number;
    closeDelay?: number;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    onClose?: () => void;
    offset?: number;
    containerPadding?: number;
    crossOffset?: number;
    showArrow?: boolean;
    shouldFlip?: boolean;
    triggerScaleOnOpen?: boolean;
    isKeyboardDismissDisabled?: boolean;
    isDismissable?: boolean;
    shouldCloseOnBlur?: boolean;
    motionProps?: unknown;
    portalContainer?: Element | DocumentFragment | null;
    updatePositionDeps?: any[];
    isDisabled?: boolean;
    disableAnimation?: boolean;
    className?: string;
    classNames?: TooltipClassNames;
    shouldCloseOnInteractOutside?: (element: HTMLElement) => boolean;
};
declare function TooltipDefaultIcon(): react_jsx_runtime.JSX.Element;
declare function Tooltip(props: TooltipProps): react_jsx_runtime.JSX.Element;

type AvatarSize = "sm" | "md" | "lg";
type AvatarColor = "default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger";
type AvatarRadius = "none" | "sm" | "md" | "lg" | "full";
type AvatarSlot = "base" | "img" | "fallback" | "name" | "icon";
type AvatarColorDepth = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
type AvatarTooltip = boolean | Omit<TooltipProps, "children" | "content"> | {
    props?: Omit<TooltipProps, "children" | "content">;
    content?: ReactNode;
};
type AvatarProps<ImgComponent extends ElementType = "img"> = Omit<HTMLAttributes<HTMLDivElement>, "color"> & {
    name?: string;
    src?: string;
    size?: AvatarSize;
    color?: AvatarColor;
    radius?: AvatarRadius;
    colorDepth?: AvatarColorDepth;
    isBordered?: boolean;
    isDisabled?: boolean;
    isFocusable?: boolean;
    showFallback?: boolean;
    icon?: ReactNode;
    fallback?: ReactNode;
    tooltip?: AvatarTooltip;
    ImgComponent?: ImgComponent;
    imgProps?: Omit<react__default.ComponentPropsWithoutRef<ImgComponent>, "src" | "children">;
    classNames?: Partial<Record<AvatarSlot, string>>;
};
type AvatarGroupProps = Omit<HTMLAttributes<HTMLDivElement>, "color" | "children"> & {
    children?: ReactNode;
    max?: number;
    total?: number;
    size?: AvatarSize;
    color?: AvatarColor;
    radius?: AvatarRadius;
    isGrid?: boolean;
    isDisabled?: boolean;
    isBordered?: boolean;
    renderCount?: (count: number) => ReactNode;
    classNames?: Partial<Record<"base" | "count", string>>;
};
declare const Avatar: react__default.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "color"> & {
    name?: string;
    src?: string;
    size?: AvatarSize;
    color?: AvatarColor;
    radius?: AvatarRadius;
    colorDepth?: AvatarColorDepth;
    isBordered?: boolean;
    isDisabled?: boolean;
    isFocusable?: boolean;
    showFallback?: boolean;
    icon?: ReactNode;
    fallback?: ReactNode;
    tooltip?: AvatarTooltip;
    ImgComponent?: "img";
    imgProps?: Omit<Omit<react__default.DetailedHTMLProps<react__default.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref">, "children" | "src">;
    classNames?: Partial<Record<AvatarSlot, string>>;
} & react__default.RefAttributes<HTMLDivElement>>;
declare const AvatarGroup: react__default.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children" | "color"> & {
    children?: ReactNode;
    max?: number;
    total?: number;
    size?: AvatarSize;
    color?: AvatarColor;
    radius?: AvatarRadius;
    isGrid?: boolean;
    isDisabled?: boolean;
    isBordered?: boolean;
    renderCount?: (count: number) => ReactNode;
    classNames?: Partial<Record<"base" | "count", string>>;
} & react__default.RefAttributes<HTMLDivElement>>;

type AvatarIconProps = {
    size?: number;
} & Omit<SVGProps<SVGSVGElement>, "width" | "height" | "viewBox" | "children">;
declare function AvatarIcon({ size, ...rest }: AvatarIconProps): react_jsx_runtime.JSX.Element;

type BackdropAnimationType = "fade" | "zoom" | "slideUp" | "slideDown" | "slideLeft" | "slideRight";
type BackdropEasing = "ease" | "easeIn" | "easeOut" | "easeInOut";
type BackdropProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
    zIndex?: number;
    closeOnOutsideClick?: boolean;
    closeOnEscape?: boolean;
    lockScroll?: boolean;
    blur?: boolean;
    backgroundColor?: string;
    backgroundOpacity?: number;
    animationDuration?: number;
    animationType?: BackdropAnimationType;
    easing?: BackdropEasing;
    portal?: boolean;
    container?: Element | DocumentFragment | null;
    className?: string;
    style?: CSSProperties;
    contentFullSize?: boolean;
    contentClassName?: string;
    contentStyle?: CSSProperties;
};
declare function Backdrop(props: BackdropProps): react_jsx_runtime.JSX.Element | null;

type BadgeVariant = "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
type BadgeSize = "sm" | "md" | "lg";
type BadgeColor = "default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger";
type BadgePlacement = "top-right" | "top-left" | "bottom-right" | "bottom-left";
type BadgeShape = "circle" | "rectangle";
type BadgeSlot = "base" | "badge";
type BadgeProps = Omit<HTMLAttributes<HTMLSpanElement>, "color" | "children"> & {
    children?: ReactNode;
    content?: string | number | ReactNode;
    max?: number;
    variant?: BadgeVariant;
    color?: BadgeColor;
    size?: BadgeSize;
    shape?: BadgeShape;
    placement?: BadgePlacement;
    showOutline?: boolean;
    disableOutline?: boolean;
    disableAnimation?: boolean;
    isInvisible?: boolean;
    isOneChar?: boolean;
    isDot?: boolean;
    classNames?: Partial<Record<BadgeSlot, string>>;
    style?: CSSProperties;
};
declare const Badge: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLSpanElement>, "children" | "color"> & {
    children?: ReactNode;
    content?: string | number | ReactNode;
    max?: number;
    variant?: BadgeVariant;
    color?: BadgeColor;
    size?: BadgeSize;
    shape?: BadgeShape;
    placement?: BadgePlacement;
    showOutline?: boolean;
    disableOutline?: boolean;
    disableAnimation?: boolean;
    isInvisible?: boolean;
    isOneChar?: boolean;
    isDot?: boolean;
    classNames?: Partial<Record<BadgeSlot, string>>;
    style?: CSSProperties;
} & react.RefAttributes<HTMLSpanElement>>;

type ButtonVariant = "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
type ButtonColor = "default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger";
type ButtonSize = "sm" | "md" | "lg";
type ButtonRadius = "none" | "sm" | "md" | "lg" | "full";
type PressEvent = MouseEvent<HTMLButtonElement> | PointerEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>;
type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "children"> & {
    children?: ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    radius?: ButtonRadius;
    startContent?: ReactNode;
    endContent?: ReactNode;
    spinner?: ReactNode;
    spinnerPlacement?: "start" | "end";
    fullWidth?: boolean;
    isIconOnly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    onPress?: (e: PressEvent) => void;
    onPressStart?: (e: PressEvent) => void;
    onPressEnd?: (e: PressEvent) => void;
    onPressChange?: (isPressed: boolean) => void;
    onPressUp?: (e: PressEvent) => void;
    disableRipple?: boolean;
    disableAnimation?: boolean;
    style?: CSSProperties;
};
declare const Button: react.ForwardRefExoticComponent<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "color"> & {
    children?: ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    radius?: ButtonRadius;
    startContent?: ReactNode;
    endContent?: ReactNode;
    spinner?: ReactNode;
    spinnerPlacement?: "start" | "end";
    fullWidth?: boolean;
    isIconOnly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    onPress?: (e: PressEvent) => void;
    onPressStart?: (e: PressEvent) => void;
    onPressEnd?: (e: PressEvent) => void;
    onPressChange?: (isPressed: boolean) => void;
    onPressUp?: (e: PressEvent) => void;
    disableRipple?: boolean;
    disableAnimation?: boolean;
    style?: CSSProperties;
} & react.RefAttributes<HTMLButtonElement>>;

type ButtonGroupProps = Omit<HTMLAttributes<HTMLDivElement>, "color" | "children"> & {
    children?: ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    radius?: ButtonRadius;
    fullWidth?: boolean;
    isDisabled?: boolean;
    style?: CSSProperties;
};
declare const ButtonGroup: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children" | "color"> & {
    children?: ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    radius?: ButtonRadius;
    fullWidth?: boolean;
    isDisabled?: boolean;
    style?: CSSProperties;
} & react.RefAttributes<HTMLDivElement>>;

type ChipVariant = "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "dot";
type ChipSize = "sm" | "md" | "lg";
type ChipColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
type ChipRadius = "none" | "sm" | "md" | "lg" | "full";
type ChipSlot = "base" | "content" | "dot" | "avatar" | "closeButton";
type ChipColorDepth = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
type ChipProps = Omit<HTMLAttributes<HTMLDivElement>, "color" | "children"> & {
    children?: ReactNode;
    variant?: ChipVariant;
    size?: ChipSize;
    color?: ChipColor;
    radius?: ChipRadius;
    colorDepth?: ChipColorDepth;
    avatar?: ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
    isDisabled?: boolean;
    onClose?: (e: PressEvent) => void;
    classNames?: Partial<Record<ChipSlot, string>>;
    style?: CSSProperties;
};
declare const Chip: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children" | "color"> & {
    children?: ReactNode;
    variant?: ChipVariant;
    size?: ChipSize;
    color?: ChipColor;
    radius?: ChipRadius;
    colorDepth?: ChipColorDepth;
    avatar?: ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
    isDisabled?: boolean;
    onClose?: (e: PressEvent) => void;
    classNames?: Partial<Record<ChipSlot, string>>;
    style?: CSSProperties;
} & react.RefAttributes<HTMLDivElement>>;

type DividerOrientation = "horizontal" | "vertical";
type DividerVariant = "fullWidth" | "inset" | "middle";
type DividerColor = "default" | "primary" | "info" | "success" | "warning" | "danger" | "secondary" | (string & {});
type DividerColorDepth = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
type DividerProps = Omit<HTMLAttributes<HTMLElement>, "color" | "children"> & {
    orientation?: DividerOrientation;
    variant?: DividerVariant;
    color?: DividerColor;
    colorDepth?: DividerColorDepth;
    thickness?: number | string;
    children?: ReactNode;
};
declare const Divider: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLElement>, "children" | "color"> & {
    orientation?: DividerOrientation;
    variant?: DividerVariant;
    color?: DividerColor;
    colorDepth?: DividerColorDepth;
    thickness?: number | string;
    children?: ReactNode;
} & react.RefAttributes<HTMLDivElement | HTMLHRElement>>;

type PageTitleAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type PageTitleColor = "default" | "primary" | "info" | "success" | "warning" | "danger" | "secondary" | "black" | "white" | (string & {});
type PageTitleSlot = "base" | "title" | "icon";
type PageTitleClassNames = Partial<Record<PageTitleSlot, string>>;
type PageTitleTooltipLegacy = {
    message: ReactNode;
    disabled?: boolean;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    openDelay?: number;
    closeDelay?: number;
    portal?: boolean;
    className?: string;
};
type PageTitleTooltip = boolean | Omit<TooltipProps, "children" | "content"> | {
    props?: Omit<TooltipProps, "children" | "content">;
    content?: ReactNode;
} | PageTitleTooltipLegacy;
type PageTitleProps = {
    title?: ReactNode;
    as?: PageTitleAs;
    tag?: PageTitleAs;
    color?: PageTitleColor;
    colorDepth?: number;
    icon?: ReactNode;
    iconPosition?: "start" | "end" | "before" | "after";
    tooltip?: PageTitleTooltip;
    className?: string;
    titleClassName?: string;
    classNames?: PageTitleClassNames;
    style?: CSSProperties;
};
declare function PageTitle(props: PageTitleProps): react_jsx_runtime.JSX.Element;

type DrawerPosition = "left" | "right" | "top" | "bottom";
type DrawerSize = "sm" | "md" | "lg" | (string & {}) | number;
type DrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    position?: DrawerPosition;
    title?: ReactNode;
    children?: ReactNode;
    actions?: ReactNode;
    dismissible?: boolean;
    closeLabel?: string;
    ariaLabel?: string;
    width?: DrawerSize;
    height?: DrawerSize;
    closeOnOutsideClick?: boolean;
    closeOnEscape?: boolean;
    portal?: boolean;
    container?: Element | DocumentFragment | null;
    zIndex?: number;
    blur?: boolean;
    backgroundOpacity?: number;
    animationDuration?: number;
    easing?: BackdropProps["easing"];
    initialFocusRef?: RefObject<HTMLElement | null>;
    backdrop?: Omit<Partial<BackdropProps>, "isOpen" | "onClose" | "children">;
    headers?: Partial<PageTitleProps>;
    className?: string;
    style?: CSSProperties;
};
declare function Drawer(props: DrawerProps): react_jsx_runtime.JSX.Element;

type DropdownPlacement = "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
type DropdownMenuVariant = "solid" | "bordered" | "light" | "flat" | "faded" | "shadow";
type DropdownColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
type DropdownSelectionMode = "none" | "single" | "multiple";
type DropdownProps = {
    children?: ReactNode;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    placement?: DropdownPlacement;
    offset?: number;
    containerPadding?: number;
    shouldFlip?: boolean;
    portalContainer?: Element | DocumentFragment | null;
    isDismissable?: boolean;
    isKeyboardDismissDisabled?: boolean;
    shouldCloseOnInteractOutside?: (target: Element) => boolean;
    closeOnSelect?: boolean;
    classNames?: Partial<Record<"base" | "content", string>>;
    className?: string;
    style?: CSSProperties;
};
type DropdownTriggerProps = {
    children: ReactElement;
};
type DropdownMenuClassNames = Partial<Record<"base" | "list" | "emptyContent", string>>;
type DropdownMenuProps<T = unknown> = {
    children?: ReactNode | ((item: T) => ReactElement);
    items?: Iterable<T>;
    variant?: DropdownMenuVariant;
    color?: DropdownColor;
    selectionMode?: DropdownSelectionMode;
    selectedKeys?: "all" | Iterable<Key>;
    disabledKeys?: Iterable<Key>;
    defaultSelectedKeys?: "all" | Iterable<Key>;
    disallowEmptySelection?: boolean;
    autoFocus?: boolean | "first" | "last";
    topContent?: ReactNode;
    bottomContent?: ReactNode;
    emptyContent?: ReactNode;
    hideEmptyContent?: boolean;
    hideSelectedIcon?: boolean;
    shouldFocusWrap?: boolean;
    closeOnSelect?: boolean;
    disableAnimation?: boolean;
    classNames?: DropdownMenuClassNames;
    itemClasses?: Partial<Record<DropdownItemSlot, string>>;
    onAction?: (key: Key) => void;
    onSelectionChange?: (keys: "all" | (Set<Key> & {
        anchorKey?: Key;
        currentKey?: Key;
    })) => void;
    onClose?: () => void;
};
type DropdownItemSlot = "base" | "wrapper" | "title" | "description" | "shortcut" | "selectedIcon";
type DropdownItemProps = {
    children?: ReactNode;
    title?: string | ReactNode;
    textValue?: string;
    description?: string | ReactNode;
    shortcut?: string | ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
    selectedIcon?: ReactNode;
    showDivider?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    download?: boolean | string;
    ping?: string;
    referrerPolicy?: string;
    isDisabled?: boolean;
    isSelected?: boolean;
    isReadOnly?: boolean;
    hideSelectedIcon?: boolean;
    closeOnSelect?: boolean;
    classNames?: Partial<Record<DropdownItemSlot, string>>;
    onAction?: () => void;
    onClose?: () => void;
    onPress?: (e: DropdownPressEvent) => void;
    onPressStart?: (e: DropdownPressEvent) => void;
    onPressEnd?: (e: DropdownPressEvent) => void;
    onPressChange?: (isPressed: boolean) => void;
    onPressUp?: (e: DropdownPressEvent) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLElement>) => void;
    onKeyUp?: (e: KeyboardEvent<HTMLElement>) => void;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    itemKey?: Key;
};
type DropdownSectionSlot = "base" | "heading" | "group" | "divider";
type DropdownSectionProps = {
    children?: ReactNode | ((item: any) => ReactElement);
    title?: string;
    items?: Iterable<unknown>;
    ["aria-label"]?: string;
    hideSelectedIcon?: boolean;
    showDivider?: boolean;
    dividerProps?: unknown;
    classNames?: Partial<Record<DropdownSectionSlot, string>>;
    itemClasses?: Partial<Record<DropdownItemSlot, string>>;
};
type DropdownPressEvent = MouseEvent<HTMLElement> | PointerEvent<HTMLElement> | KeyboardEvent<HTMLElement> | FocusEvent<HTMLElement>;
declare const Dropdown: react.ForwardRefExoticComponent<DropdownProps & react.RefAttributes<HTMLDivElement>>;
declare const DropdownTrigger: react.ForwardRefExoticComponent<DropdownTriggerProps & react.RefAttributes<HTMLElement>>;
declare const DropdownMenu: <T>(props: DropdownMenuProps<T>) => react_jsx_runtime.JSX.Element | null;
declare const DropdownItem: react.ForwardRefExoticComponent<DropdownItemProps & react.RefAttributes<HTMLElement>>;
declare const DropdownSection: {
    (props: DropdownSectionProps): null;
    displayName: string;
};

type ModalSize = "sm" | "md" | "lg" | (string & {}) | number;
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: ReactNode;
    children?: ReactNode;
    actions?: ReactNode;
    size?: ModalSize;
    dismissible?: boolean;
    closeLabel?: string;
    closeOnOutsideClick?: boolean;
    closeOnEscape?: boolean;
    portal?: boolean;
    container?: Element | DocumentFragment | null;
    zIndex?: number;
    blur?: boolean;
    backgroundOpacity?: number;
    animationDuration?: number;
    animationType?: BackdropProps["animationType"];
    easing?: BackdropProps["easing"];
    initialFocusRef?: RefObject<HTMLElement | null>;
    backdrop?: Omit<Partial<BackdropProps>, "isOpen" | "onClose" | "children">;
    headers?: Partial<PageTitleProps>;
    divider?: Partial<DividerProps>;
    className?: string;
    style?: CSSProperties;
};
declare function Modal(props: ModalProps): react_jsx_runtime.JSX.Element;

type TabsVariant = "solid" | "bordered" | "light" | "underlined";
type TabsColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
type TabsSize = "sm" | "md" | "lg";
type TabsRadius = "none" | "sm" | "md" | "lg" | "full";
type TabsPlacement = "top" | "bottom" | "start" | "end";
type TabsKeyboardActivation = "automatic" | "manual";
type TabsSlot = "base" | "tabList" | "tab" | "tabContent" | "cursor" | "panel" | "tabWrapper";
type TabsClassNames = Partial<Record<TabsSlot, string>>;
type TabProps = {
    tabRef?: RefObject<HTMLButtonElement>;
    isDisabled?: boolean;
    children?: ReactNode;
    title: ReactNode;
    titleValue?: string;
    href?: string;
    target?: HTMLAttributeAnchorTarget;
    rel?: string;
    download?: boolean | string;
    ping?: string;
    referrerPolicy?: HTMLAttributeReferrerPolicy;
    shouldSelectOnPressUp?: boolean;
};
type TabsProps<T = unknown> = Omit<HTMLAttributes<HTMLDivElement>, "color"> & {
    children?: ReactNode | ((item: T) => ReactElement);
    variant?: TabsVariant;
    color?: TabsColor;
    size?: TabsSize;
    radius?: TabsRadius;
    fullWidth?: boolean;
    items?: Iterable<T>;
    disabledKeys?: Key[];
    selectedKey?: Key;
    defaultSelectedKey?: Key;
    shouldSelectOnPressUp?: boolean;
    keyboardActivation?: TabsKeyboardActivation;
    disableCursorAnimation?: boolean;
    isDisabled?: boolean;
    disableAnimation?: boolean;
    classNames?: TabsClassNames;
    placement?: TabsPlacement;
    isVertical?: boolean;
    destroyInactiveTabPanel?: boolean;
    onSelectionChange?: (key: Key) => any;
};
type TabItem = {
    id?: string;
    title: string;
    content: ReactNode | (() => ReactNode);
};
type TabsOrientation = "horizontal" | "vertical";
type TablistPosition = "start" | "end";
type TabsLegacyProps = {
    data: TabItem[];
    defaultTab?: number;
    value?: number;
    onChange?: (index: number) => void;
    className?: string;
    orientation?: TabsOrientation;
    tablistPosition?: TablistPosition;
    mode?: "basic" | "url";
    tabId?: string;
    variant?: "underlineThick" | "segmented" | "pill" | "dot" | "outline";
    size?: "comfortable" | "compact";
    radius?: "none" | "sm" | "md" | "lg" | "full" | number;
    triggerProps?: Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
    activeTriggerProps?: Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
    allowKeyboardNavigation?: boolean;
    renderLazy?: boolean;
    idStrategy?: (title: string) => string;
};

declare const Tabs: react.ForwardRefExoticComponent<Omit<react.HTMLAttributes<HTMLDivElement>, "color"> & {
    children?: ReactNode | ((item: unknown) => ReactElement);
    variant?: TabsVariant;
    color?: TabsColor;
    size?: TabsSize;
    radius?: TabsRadius;
    fullWidth?: boolean;
    items?: Iterable<unknown>;
    disabledKeys?: Key[];
    selectedKey?: Key;
    defaultSelectedKey?: Key;
    shouldSelectOnPressUp?: boolean;
    keyboardActivation?: TabsKeyboardActivation;
    disableCursorAnimation?: boolean;
    isDisabled?: boolean;
    disableAnimation?: boolean;
    classNames?: TabsClassNames;
    placement?: TabsPlacement;
    isVertical?: boolean;
    destroyInactiveTabPanel?: boolean;
    onSelectionChange?: (key: Key) => any;
} & react.RefAttributes<HTMLDivElement>>;

declare function Tab(_props: TabProps): null;
declare namespace Tab {
    var displayName: string;
}

declare const TabsLegacy: react.ForwardRefExoticComponent<TabsLegacyProps & react.RefAttributes<HTMLDivElement>>;

type TabsValue = string | number;

type TabsRootProps = {
    id?: string;
    value?: TabsValue;
    defaultValue?: TabsValue;
    onChange?: (v: TabsValue) => void;
    mode?: "basic" | "url";
    tabId?: string;
    orientation?: "horizontal" | "vertical";
    tablistPosition?: "start" | "end";
    variant?: "underlineThick" | "segmented" | "pill" | "dot" | "outline";
    size?: "comfortable" | "compact";
    radius?: "none" | "sm" | "md" | "lg" | "full" | number;
    renderLazy?: boolean;
    children?: ReactNode;
    className?: string;
};
declare const TabsRoot: react.ForwardRefExoticComponent<TabsRootProps & react.RefAttributes<HTMLDivElement>>;

type TabListProps = {
    className?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    children?: React.ReactNode;
};
declare const TabList: react.ForwardRefExoticComponent<TabListProps & react.RefAttributes<HTMLDivElement>>;

type TabTriggerProps = {
    value: string | number;
    disabled?: boolean;
    className?: string;
    children?: ReactNode;
};
declare const TabTrigger: react.ForwardRefExoticComponent<TabTriggerProps & react.RefAttributes<HTMLButtonElement>>;

type TabPanelProps = {
    value: string | number;
    keepMounted?: boolean;
    className?: string;
    children?: ReactNode;
};
declare const TabPanel: react.ForwardRefExoticComponent<TabPanelProps & react.RefAttributes<HTMLDivElement>>;

type ToastId = number;
type ToastType = "default" | "info" | "success" | "warning" | "error" | "loading";
type ToastTone = "primary" | "info" | "success" | "warning" | "danger" | "secondary" | (string & {});
type ToastPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
type ToastPlacement = ToastPosition;
type ToastColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
type ToastSeverity = ToastColor;
type ToastVariant = "solid" | "soft" | "outline" | "flat" | "bordered";
type ToastRadius = "none" | "sm" | "md" | "lg" | "full";
type ToastSlot = "base" | "content" | "wrapper" | "title" | "description" | "icon" | "loadingComponent" | "progressTrack" | "progressIndicator" | "motionDiv" | "closeButton" | "closeIcon";
type ToastClassNames = Partial<Record<ToastSlot, string>>;
type ToastRegionProps = Omit<HTMLAttributes<HTMLDivElement>, "className"> & {
    classNames?: Partial<Record<"base", string>>;
};
type ToastSize = "xs" | "xs-sm" | "sm" | "md" | "lg" | "xl";
type ToastAction = {
    label: string;
    onClick?: () => void;
};
type ToastOptions = {
    title?: ReactNode;
    message?: ReactNode;
    description?: ReactNode;
    type?: ToastType;
    tone?: ToastTone;
    color?: ToastColor;
    severity?: ToastSeverity;
    variant?: ToastVariant;
    radius?: ToastRadius;
    size?: ToastSize;
    position?: ToastPosition;
    placement?: ToastPlacement;
    duration?: number | null;
    timeout?: number | null;
    persistent?: boolean;
    showDurationBar?: boolean;
    shouldShowTimeoutProgress?: boolean;
    dismissible?: boolean;
    hideCloseButton?: boolean;
    action?: ToastAction;
    icon?: ReactNode;
    showIcon?: boolean;
    hideIcon?: boolean;
    endContent?: ReactNode;
    closeIcon?: ReactNode;
    loadingComponent?: ReactNode;
    promise?: Promise<unknown>;
    classNames?: ToastClassNames;
    id?: ToastId;
    onDismiss?: (id: ToastId) => void;
    className?: string;
    style?: CSSProperties;
};
type ToastPromiseOptions<T> = {
    loading?: Omit<ToastOptions, "id">;
    success?: (value: T) => Omit<ToastOptions, "id">;
    error?: (error: unknown) => Omit<ToastOptions, "id">;
};
type ToastProviderProps = {
    children?: ReactNode;
    position?: ToastPosition;
    placement?: ToastPlacement;
    maxToasts?: number;
    maxVisibleToasts?: number;
    defaultDuration?: number;
    container?: Element | DocumentFragment | null;
    motion?: "auto" | "reduced" | "default";
    disableAnimation?: boolean;
    toastOffset?: number;
    toastProps?: ToastOptions;
    regionProps?: ToastRegionProps;
    className?: string;
    style?: CSSProperties;
};
type ToastShow = {
    (message?: ReactNode, options?: ToastOptions): ToastId;
    (options: ToastOptions): ToastId;
};
type ToastApi = {
    show: ToastShow;
    info: (message: ReactNode, options?: ToastOptions) => ToastId;
    success: (message: ReactNode, options?: ToastOptions) => ToastId;
    warning: (message: ReactNode, options?: ToastOptions) => ToastId;
    error: (message: ReactNode, options?: ToastOptions) => ToastId;
    update: (id: ToastId, patch: Partial<ToastOptions>) => void;
    dismiss: (id: ToastId) => void;
    dismissAll: () => void;
    promise: <T>(promiseOrFn: Promise<T> | (() => Promise<T>), options: ToastPromiseOptions<T>) => ToastId;
};
type ToastContextValue = ToastApi;
declare function useToast(): ToastContextValue;
type ToastClient = ToastShow & ToastApi;
declare const toast: ToastClient;
declare function showToast(message: ReactNode, options?: ToastOptions): ToastId;
declare function showToast(options: ToastOptions): ToastId;
declare function addToast(options: ToastOptions): ToastId;
declare function ToastProvider({ children, position, placement, maxToasts, maxVisibleToasts, defaultDuration, container, motion, disableAnimation, toastOffset, toastProps, regionProps, className, style, }: ToastProviderProps): react_jsx_runtime.JSX.Element;

type FormElementSize = "xs" | "xs-sm" | "sm" | "md" | "lg" | "xl";
type FormElementVariant = "outline" | "soft" | "underline";
type FormElementTone = "default" | "primary" | "info" | "success" | "warning" | "danger" | "secondary" | (string & {});
type FormElementLabelPlacement = "top" | "floating";

type CheckboxOption = {
    label: ReactNode;
    value: string;
    disabled?: boolean;
    key?: string;
};
type CheckboxGroupFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "color" | "value" | "defaultValue" | "checked" | "defaultChecked" | "onChange"> & {
    label?: ReactNode;
    labelPlacement?: FormElementLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: FormElementSize;
    tone?: FormElementTone;
    colorDepth?: number;
    options: CheckboxOption[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (next: string[]) => void;
    style?: CSSProperties;
};
declare const CheckboxGroupField: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "type" | "onChange" | "size" | "defaultChecked" | "defaultValue" | "value" | "checked"> & {
    label?: ReactNode;
    labelPlacement?: FormElementLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: FormElementSize;
    tone?: FormElementTone;
    colorDepth?: number;
    options: CheckboxOption[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (next: string[]) => void;
    style?: CSSProperties;
} & react.RefAttributes<HTMLDivElement>>;

type DatePresetKey = "today" | "yesterday" | "thisWeek" | "lastWeek" | "fortnight" | "thisMonth" | "lastMonth" | "last3Months" | "thisYear" | "lastYear" | "custom";
type DatePickerRangeValue = {
    start: string;
    end: string;
};
type DatePickerValue = string | DatePickerRangeValue;
type DatePickerDisplayFormat = "pretty" | "iso";
type DatePickerRangeTrigger = "single" | "dual";
type DatePickerMonthsToShow = 1 | 2;
type DatePickerFieldProps = {
    label?: ReactNode;
    labelPlacement?: FormElementLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: FormElementSize;
    variant?: FormElementVariant;
    tone?: FormElementTone;
    colorDepth?: number;
    id?: string;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    range?: boolean;
    withTime?: boolean;
    showPresets?: boolean;
    presets?: DatePresetKey[];
    displayFormat?: DatePickerDisplayFormat;
    clearable?: boolean;
    onClear?: () => void;
    rangeTrigger?: DatePickerRangeTrigger;
    monthsToShow?: DatePickerMonthsToShow;
    minDate?: Date | string;
    maxDate?: Date | string;
    blockedDates?: Array<Date | string>;
    value?: DatePickerValue;
    defaultValue?: DatePickerValue;
    onChange?: (next: DatePickerValue) => void;
    onBlur?: (event: unknown) => void;
    className?: string;
    style?: CSSProperties;
};
declare const DatePickerField: react.ForwardRefExoticComponent<DatePickerFieldProps & react.RefAttributes<HTMLInputElement>>;

type PhoneValue = {
    code: string;
    phone: string;
};
type PhoneCountryOption = {
    code: string;
    name?: string;
    label?: string;
    flag?: ReactNode;
    shortCode?: string;
    key?: string;
};
type PhoneFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "color" | "value" | "defaultValue" | "onChange"> & {
    label?: ReactNode;
    labelPlacement?: FormElementLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: FormElementSize;
    variant?: FormElementVariant;
    tone?: FormElementTone;
    colorDepth?: number;
    value?: PhoneValue;
    defaultValue?: PhoneValue;
    defaultCountryCode?: string;
    countryCodeMode?: "select" | "hidden";
    countryOptions?: PhoneCountryOption[];
    numbersOnly?: boolean;
    onChange?: (next: PhoneValue) => void;
    phonePlaceholder?: string;
    style?: CSSProperties;
};
declare const PhoneField: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "type" | "onChange" | "size" | "defaultValue" | "value"> & {
    label?: ReactNode;
    labelPlacement?: FormElementLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: FormElementSize;
    variant?: FormElementVariant;
    tone?: FormElementTone;
    colorDepth?: number;
    value?: PhoneValue;
    defaultValue?: PhoneValue;
    defaultCountryCode?: string;
    countryCodeMode?: "select" | "hidden";
    countryOptions?: PhoneCountryOption[];
    numbersOnly?: boolean;
    onChange?: (next: PhoneValue) => void;
    phonePlaceholder?: string;
    style?: CSSProperties;
} & react.RefAttributes<HTMLInputElement>>;

type RadioOption = {
    label: ReactNode;
    value: string;
    disabled?: boolean;
    key?: string;
};
type RadioGroupFieldProps = {
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: FormElementSize;
    tone?: FormElementTone;
    colorDepth?: number;
    name?: string;
    id?: string;
    required?: boolean;
    disabled?: boolean;
    options: RadioOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (next: string) => void;
    className?: string;
    style?: CSSProperties;
};
declare const RadioGroupField: react.ForwardRefExoticComponent<RadioGroupFieldProps & react.RefAttributes<HTMLDivElement>>;

type SelectOption = {
    label: ReactNode;
    value: string;
    disabled?: boolean;
    key?: string;
};
type SelectFieldValue = string | string[];
type SelectFieldProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "color"> & {
    label?: ReactNode;
    labelPlacement?: FormElementLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: FormElementSize;
    variant?: FormElementVariant;
    color?: FormElementTone;
    tone?: FormElementTone;
    colorDepth?: number;
    radius?: "none" | "sm" | "md" | "lg" | "full";
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    options?: SelectOption[];
    placeholderOption?: ReactNode;
    native?: boolean;
    onValueChange?: (value: SelectFieldValue) => void;
    style?: CSSProperties;
};
declare const SelectField: react.ForwardRefExoticComponent<Omit<SelectHTMLAttributes<HTMLSelectElement>, "color" | "size"> & {
    label?: ReactNode;
    labelPlacement?: FormElementLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: FormElementSize;
    variant?: FormElementVariant;
    color?: FormElementTone;
    tone?: FormElementTone;
    colorDepth?: number;
    radius?: "none" | "sm" | "md" | "lg" | "full";
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    options?: SelectOption[];
    placeholderOption?: ReactNode;
    native?: boolean;
    onValueChange?: (value: SelectFieldValue) => void;
    style?: CSSProperties;
} & react.RefAttributes<HTMLSelectElement>>;

type SwitchFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "color" | "checked" | "defaultChecked" | "onChange"> & {
    label?: ReactNode;
    labelPlacement?: FormElementLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: FormElementSize;
    tone?: FormElementTone;
    colorDepth?: number;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (next: boolean) => void;
    showStateText?: boolean;
    checkedText?: ReactNode;
    uncheckedText?: ReactNode;
    stateTextPlacement?: "before" | "after" | "both";
    style?: CSSProperties;
};
declare const SwitchField: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "type" | "onChange" | "size" | "defaultChecked" | "checked"> & {
    label?: ReactNode;
    labelPlacement?: FormElementLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: FormElementSize;
    tone?: FormElementTone;
    colorDepth?: number;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (next: boolean) => void;
    showStateText?: boolean;
    checkedText?: ReactNode;
    uncheckedText?: ReactNode;
    stateTextPlacement?: "before" | "after" | "both";
    style?: CSSProperties;
} & react.RefAttributes<HTMLLabelElement>>;

type TextAreaFieldProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "color"> & {
    label?: ReactNode;
    labelPlacement?: FormElementLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: FormElementSize;
    variant?: FormElementVariant;
    tone?: FormElementTone;
    colorDepth?: number;
    style?: CSSProperties;
};
declare const TextAreaField: react.ForwardRefExoticComponent<Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "color"> & {
    label?: ReactNode;
    labelPlacement?: FormElementLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: FormElementSize;
    variant?: FormElementVariant;
    tone?: FormElementTone;
    colorDepth?: number;
    style?: CSSProperties;
} & react.RefAttributes<HTMLTextAreaElement>>;

type TextFieldSize = FormElementSize;
type TextFieldVariant = FormElementVariant;
type TextFieldTone = FormElementTone;
type TextFieldLabelPlacement = FormElementLabelPlacement;
type TextFieldRadius = "none" | "sm" | "md" | "lg" | "full";
type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color"> & {
    label?: ReactNode;
    labelPlacement?: TextFieldLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: TextFieldSize;
    variant?: TextFieldVariant;
    color?: TextFieldTone;
    tone?: TextFieldTone;
    colorDepth?: number;
    radius?: TextFieldRadius;
    rounded?: TextFieldRadius;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    style?: CSSProperties;
};
declare const TextField: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "size"> & {
    label?: ReactNode;
    labelPlacement?: TextFieldLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: TextFieldSize;
    variant?: TextFieldVariant;
    color?: TextFieldTone;
    tone?: TextFieldTone;
    colorDepth?: number;
    radius?: TextFieldRadius;
    rounded?: TextFieldRadius;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    style?: CSSProperties;
} & react.RefAttributes<HTMLInputElement>>;

type ValidationRuleName = "required" | "email" | "minLength" | "maxLength" | "pattern" | "alpha" | "alphanumeric" | "numeric" | "min" | "max" | "strongPassword" | "matchField" | "accept" | "maxFileSize" | "maxFiles" | "custom";
type DefaultValidationMessage = string | ((arg: any) => string);
type ValidationContext = {
    formData?: Record<string, unknown>;
    fieldName?: string;
};
declare const DEFAULT_VALIDATION_MESSAGES: Record<Exclude<ValidationRuleName, "custom">, DefaultValidationMessage>;
type ValidationRules = Partial<{
    required: boolean;
    email: boolean;
    minLength: number;
    maxLength: number;
    pattern: RegExp;
    alpha: boolean;
    alphanumeric: boolean;
    numeric: boolean;
    min: number;
    max: number;
    strongPassword: {
        minLength?: number;
        minUpper?: number;
        minLower?: number;
        minNumber?: number;
        minSpecial?: number;
    };
    matchField: string;
    accept: string | string[];
    maxFileSize: number;
    maxFiles: number;
    custom: (value: unknown, ctx?: ValidationContext) => true | string | boolean;
}>;
type ValidationMessages = Partial<Record<ValidationRuleName, string>>;
type FieldValidation = {
    rules: ValidationRules;
    message?: ValidationMessages;
};
type StrongPasswordConfig = NonNullable<ValidationRules["strongPassword"]>;
type StrongPasswordEvaluation = {
    ok: boolean;
    minLength: number;
    minUpper: number;
    minLower: number;
    minNumber: number;
    minSpecial: number;
    length: number;
    uppers: number;
    lowers: number;
    numbers: number;
    specials: number;
    minLengthOk: boolean;
    upperOk: boolean;
    lowerOk: boolean;
    numberOk: boolean;
    specialOk: boolean;
};
declare function evaluateStrongPassword(value: string, config: ValidationRules["strongPassword"]): StrongPasswordEvaluation;
declare const VALIDATION_RULES: Record<Exclude<ValidationRuleName, "custom">, (value: unknown, arg?: any, ctx?: ValidationContext) => boolean>;
type ValidationErrors = Partial<Record<ValidationRuleName, string>>;
declare function validateField(value: unknown, rules?: ValidationRules, customMessages?: ValidationMessages, ctx?: ValidationContext): ValidationErrors;
declare function getFirstError(errors: ValidationErrors): string | null;
declare function validateForm(formData: Record<string, unknown>, validationSchema: Record<string, FieldValidation>): Record<string, string | null>;

type FormFieldType = "text" | "password" | "email" | "file" | "phone" | "select" | "radio" | "checkbox" | "switch" | "datepicker" | "textarea";
type CommonProps = {
    label?: ReactNode;
    description?: ReactNode;
    labelPlacement?: "top" | "floating";
    size?: "xs" | "xs-sm" | "sm" | "md" | "lg" | "xl";
    variant?: "outline" | "soft" | "underline";
    color?: "default" | "primary" | "info" | "success" | "warning" | "danger" | "secondary" | (string & {});
    tone?: "default" | "primary" | "info" | "success" | "warning" | "danger" | "secondary" | (string & {});
    colorDepth?: number;
    name?: string;
    id?: string;
    validation?: FieldValidation;
    error?: ReactNode;
    touched?: boolean;
};
type FormFieldSetProps = (CommonProps & Omit<react__default.ComponentProps<typeof TextField>, "error" | "id" | "name"> & {
    type?: "text" | "password" | "email" | "file";
}) | (CommonProps & Omit<react__default.ComponentProps<typeof TextAreaField>, "error" | "id" | "name"> & {
    type: "textarea";
}) | (CommonProps & Omit<react__default.ComponentProps<typeof SelectField>, "error" | "id" | "name"> & {
    type: "select";
    placeholder?: ReactNode;
}) | (CommonProps & Omit<react__default.ComponentProps<typeof RadioGroupField>, "error" | "id" | "name"> & {
    type: "radio";
}) | (CommonProps & Omit<react__default.ComponentProps<typeof CheckboxGroupField>, "error" | "id" | "name"> & {
    type: "checkbox";
}) | (CommonProps & Omit<react__default.ComponentProps<typeof SwitchField>, "error" | "id" | "name"> & {
    type: "switch";
}) | (CommonProps & Omit<react__default.ComponentProps<typeof DatePickerField>, "error" | "id" | "name"> & {
    type: "datepicker";
}) | (CommonProps & Omit<react__default.ComponentProps<typeof PhoneField>, "error" | "id" | "name"> & {
    type: "phone";
});
declare const FormFieldSet: (props: FormFieldSetProps) => react_jsx_runtime.JSX.Element;

type LoopFieldsHelpers = {
    count: number;
    minItems: number;
    maxItems: number;
    canAdd: boolean;
    canRemove: boolean;
    addItem: () => void;
    removeItem: (index?: number) => void;
    removeLastItem: () => void;
};
type LoopFieldsProps = {
    children: ReactNode | ((index: number, helpers: LoopFieldsHelpers) => ReactNode);
    minItems?: number;
    maxItems?: number;
    addTitle?: string;
    removeTitle?: string;
    size?: react__default.ComponentProps<typeof Button>["size"];
    className?: string;
    group?: string;
    nameStrategy?: "suffix" | "bracket";
    controls?: "top" | "none";
};
declare const LoopFields: (props: LoopFieldsProps) => react_jsx_runtime.JSX.Element;
declare const loopGroupToArray: (formData: Record<string, unknown>, groupName: string) => any[];

type FormValidationMode = "blur" | "change";
type FormShowErrorsOn = "blur" | "change";
type FormErrors = Record<string, string | null>;
type FormTouched = Record<string, boolean>;
type FormData = Record<string, unknown>;
type FormSchema = Record<string, FieldValidation>;
type FormHandle = {
    reset: (nextValues?: Record<string, unknown>) => void;
};
type FormProps = Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & {
    children?: ReactNode;
    onSubmit: (formData: FormData) => void | Promise<void>;
    onError?: (errors: FormErrors) => void;
    validationMode?: FormValidationMode;
    showErrorsOn?: FormShowErrorsOn;
    validateOnMount?: boolean;
    initialValues?: FormData;
    disableAutofill?: boolean;
};
type FormContextValue = {
    formData: FormData;
    errors: FormErrors;
    touched: FormTouched;
    isSubmitting: boolean;
    disableAutofill: boolean;
    validationMode: FormValidationMode;
    showErrorsOn: FormShowErrorsOn;
    validationSchema: FormSchema;
    registerField: (fieldName: string, validation: FieldValidation) => void;
    unregisterField: (fieldName: string) => void;
    validateFieldValue: (fieldName: string, value: unknown, validation: FieldValidation) => string | null;
    handleFieldChange: (fieldName: string, value: unknown) => void;
    handleFieldBlur: (fieldName: string) => void;
    getUniqueFieldName: (baseName: string) => string;
    setFormData: react__default.Dispatch<react__default.SetStateAction<FormData>>;
    setErrors: react__default.Dispatch<react__default.SetStateAction<FormErrors>>;
    setTouched: react__default.Dispatch<react__default.SetStateAction<FormTouched>>;
};
declare const useFormContext: () => FormContextValue;
declare const useOptionalFormContext: () => FormContextValue | undefined;
declare const Form: react__default.ForwardRefExoticComponent<Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & {
    children?: ReactNode;
    onSubmit: (formData: FormData) => void | Promise<void>;
    onError?: (errors: FormErrors) => void;
    validationMode?: FormValidationMode;
    showErrorsOn?: FormShowErrorsOn;
    validateOnMount?: boolean;
    initialValues?: FormData;
    disableAutofill?: boolean;
} & react__default.RefAttributes<FormHandle>>;

type PasswordFieldSize = FormElementSize;
type PasswordFieldVariant = FormElementVariant;
type PasswordFieldTone = FormElementTone;
type PasswordFieldLabelPlacement = FormElementLabelPlacement;
type PasswordFieldRadius = "none" | "sm" | "md" | "lg" | "full";
type PasswordFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color" | "type"> & {
    label?: ReactNode;
    labelPlacement?: PasswordFieldLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: PasswordFieldSize;
    variant?: PasswordFieldVariant;
    color?: PasswordFieldTone;
    tone?: PasswordFieldTone;
    colorDepth?: number;
    radius?: PasswordFieldRadius;
    rounded?: PasswordFieldRadius;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    style?: CSSProperties;
    strongPassword?: ValidationRules["strongPassword"];
    revealToggle?: boolean;
};
declare const PasswordField: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "type" | "size"> & {
    label?: ReactNode;
    labelPlacement?: PasswordFieldLabelPlacement;
    description?: ReactNode;
    error?: ReactNode | boolean;
    size?: PasswordFieldSize;
    variant?: PasswordFieldVariant;
    color?: PasswordFieldTone;
    tone?: PasswordFieldTone;
    colorDepth?: number;
    radius?: PasswordFieldRadius;
    rounded?: PasswordFieldRadius;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    style?: CSSProperties;
    strongPassword?: ValidationRules["strongPassword"];
    revealToggle?: boolean;
} & react.RefAttributes<HTMLInputElement>>;

type MotionPreference = "no-preference" | "reduce";

declare function useReducedMotion(): boolean;

type PortalProps = {
    children: ReactNode;
    container?: Element | DocumentFragment | null | undefined;
};
declare function Portal({ children, container }: PortalProps): react.ReactPortal | null;

type SlotProps = {
    children: ReactElement;
} & Record<string, unknown>;
declare function Slot({ children, ...slotProps }: SlotProps): ReactElement<unknown, string | react.JSXElementConstructor<any>> | null;

type OksVarName = string;
declare function oksVar(name: OksVarName): string;

declare const OKS_COLOR_SHADES: readonly [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
type OksColorShade = (typeof OKS_COLOR_SHADES)[number];
declare function oksPaletteVarName(palette: string, shade: OksColorShade): string;
declare function oksColorVarName(role: string, shade: OksColorShade): string;

declare function oksRadiusVarName(radius: string): string;

declare function oksSpaceVarName(space: string): string;

declare function clamp(value: number, min: number, max: number): number;

declare function composeEventHandlers<E>(theirHandler: ((event: E) => void) | undefined, ourHandler: (event: E) => void): (event: E) => void;

declare function composeRefs<T>(...refs: Array<Ref<T> | undefined>): (node: T) => void;

export { Alert, type AlertClassNames, type AlertColor, type AlertProps, type AlertRadius, type AlertSlot, type AlertVariant, Avatar, type AvatarColor, type AvatarColorDepth, AvatarGroup, type AvatarGroupProps, AvatarIcon, type AvatarIconProps, type AvatarProps, type AvatarRadius, type AvatarSize, type AvatarSlot, type AvatarTooltip, Backdrop, type BackdropAnimationType, type BackdropEasing, type BackdropProps, Badge, type BadgeColor, type BadgePlacement, type BadgeProps, type BadgeShape, type BadgeSize, type BadgeSlot, type BadgeVariant, Button, type ButtonColor, ButtonGroup, type ButtonGroupProps, type ButtonProps, type ButtonRadius, type ButtonSize, type ButtonVariant, CheckboxGroupField, type CheckboxGroupFieldProps, type CheckboxOption, Chip, type ChipColor, type ChipColorDepth, type ChipProps, type ChipRadius, type ChipSize, type ChipSlot, type ChipVariant, DEFAULT_VALIDATION_MESSAGES, type DatePickerDisplayFormat, DatePickerField, type DatePickerFieldProps, type DatePickerMonthsToShow, type DatePickerRangeTrigger, type DatePickerRangeValue, type DatePickerValue, type DatePresetKey, type DefaultValidationMessage, Divider, type DividerColor, type DividerColorDepth, type DividerOrientation, type DividerProps, type DividerVariant, Drawer, type DrawerPosition, type DrawerProps, type DrawerSize, Dropdown, DropdownItem, type DropdownItemProps, type DropdownItemSlot, DropdownMenu, type DropdownMenuClassNames, type DropdownMenuProps, type DropdownMenuVariant, type DropdownPlacement, type DropdownProps, DropdownSection, type DropdownSectionProps, type DropdownSectionSlot, type DropdownSelectionMode, DropdownTrigger, type DropdownTriggerProps, type FieldValidation, Form, type FormContextValue, type FormData, type FormElementLabelPlacement, type FormElementSize, type FormElementTone, type FormElementVariant, type FormErrors, FormFieldSet, type FormFieldSetProps, type FormFieldType, type FormHandle, type FormProps, type FormSchema, type FormShowErrorsOn, type FormTouched, type FormValidationMode, LoopFields, type LoopFieldsHelpers, type LoopFieldsProps, Modal, type ModalProps, type ModalSize, type MotionPreference, OKS_COLOR_SHADES, type OksColorShade, type OksVarName, PageTitle, type PageTitleAs, type PageTitleClassNames, type PageTitleColor, type PageTitleProps, type PageTitleSlot, type PageTitleTooltip, type PageTitleTooltipLegacy, PasswordField, type PasswordFieldLabelPlacement, type PasswordFieldProps, type PasswordFieldRadius, type PasswordFieldSize, type PasswordFieldTone, type PasswordFieldVariant, type PhoneCountryOption, PhoneField, type PhoneFieldProps, type PhoneValue, Portal, type PortalProps, type PressEvent, RadioGroupField, type RadioGroupFieldProps, type RadioOption, SelectField, type SelectFieldProps, type SelectFieldValue, type SelectOption, Slot, type SlotProps, type StrongPasswordConfig, type StrongPasswordEvaluation, SwitchField, type SwitchFieldProps, Tab, type TabItem, TabList, TabPanel, type TabProps, TabTrigger, Tabs, type TabsClassNames, type TabsColor, type TabsKeyboardActivation, TabsLegacy, type TabsLegacyProps, type TabsPlacement, type TabsProps, type TabsRadius, TabsRoot, type TabsSize, type TabsVariant, TextAreaField, type TextAreaFieldProps, TextField, type TextFieldLabelPlacement, type TextFieldProps, type TextFieldRadius, type TextFieldSize, type TextFieldTone, type TextFieldVariant, type ToastAction, type ToastClassNames, type ToastClient, type ToastColor, type ToastId, type ToastOptions, type ToastPlacement, type ToastPosition, type ToastPromiseOptions, ToastProvider, type ToastProviderProps, type ToastRadius, type ToastRegionProps, type ToastSeverity, type ToastSize, type ToastSlot, type ToastTone, type ToastType, type ToastVariant, Tooltip, TooltipDefaultIcon, type TooltipProps, VALIDATION_RULES, type ValidationContext, type ValidationErrors, type ValidationMessages, type ValidationRuleName, type ValidationRules, addToast, clamp, composeEventHandlers, composeRefs, evaluateStrongPassword, getFirstError, loopGroupToArray, oksColorVarName, oksPaletteVarName, oksRadiusVarName, oksSpaceVarName, oksVar, showToast, toast, useFormContext, useOptionalFormContext, useReducedMotion, useToast, validateField, validateForm };
