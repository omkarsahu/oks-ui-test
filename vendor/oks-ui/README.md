# oks-ui

Premium animated React component library (strict TypeScript) with a CSS-variable design system and an opt-in Tailwind-like utility layer (prefixed).

## Install
```bash
npm i oks-ui
```

## Styles (tokens + utilities)
Recommended (one line):
```ts
import "oks-ui/styles.css";
```

Or import what you need (opt-in):
```ts
import "oks-ui/tokens.css";
import "oks-ui/utilities.css";
```

You can also import `oks-ui/theme.css` (currently same as tokens).

`oks-ui/styles` is also supported, but `oks-ui/styles.css` is the most bundler-friendly option.

Component styles use `--oks-*` tokens (spacing/radius/colors). If you don’t import tokens/theme, any `var(--oks-*)` declarations fall back to initial values (e.g. Tooltip padding becomes 0). For best results, import at least:
```ts
import "oks-ui/theme.css";
```

## Components
- [Tooltip](./docs/components/tooltip.md)
- [Toast](./docs/components/toast.md)

## Customization
Override any variable in your app:
```css
:root {
  --oks-color-primary-500: #7c3aed;
  --oks-space-4: 18px;
}
```

Add a new semantic color role (example: `secondary`) in your app:
```css
:root {
  --oks-color-secondary-500: var(--oks-palette-slate-500);
}
```

## Utilities (prefixed)
Examples:
- `.oks-p-4`, `.oks-px-6`, `.oks-pt-2` (padding)
- `.oks-m-4`, `.oks-mx-6`, `.oks-mt-2` (margin)
- `.oks-rounded`, `.oks-rounded-lg` (radius)
- `.oks-bg-primary-500`, `.oks-text-slate-900`, `.oks-border-danger-500` (colors)

## Repo configuration
The file `oks.config.json` controls which palettes, semantic roles, and utilities are generated into `dist/*.css`.
