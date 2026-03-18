import React from "react";
import { Button, Drawer } from "oks-ui";
import { ShowCode } from "../../../components";

const colors = [
  "default",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "danger",
  "black",
  "white",
];

const InfoIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 10.5v6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 7.5h.01"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const Headers = () => {
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("secondary");
  const [colorDepth, setColorDepth] = React.useState(600);
  const [showIcon, setShowIcon] = React.useState(true);
  const [showTooltip, setShowTooltip] = React.useState(true);
  const [overrideTitle, setOverrideTitle] = React.useState(false);

  const headers = {
    color,
    colorDepth,
    icon: showIcon ? InfoIcon : undefined,
    tooltip: showTooltip ? { content: "Header tooltip" } : false,
    ...(overrideTitle ? { title: "Overridden header title" } : {}),
  };

  return (
    <ShowCode
      title="Header customization (headers)"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <span className="text-sm">color</span>
              <select
                className="border border-gray-300 rounded-md px-2 py-1"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                {colors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-3">
              <span className="min-w-20">colorDepth</span>
              <input
                type="range"
                min={50}
                max={950}
                step={50}
                value={colorDepth}
                onChange={(e) => setColorDepth(Number(e.target.value))}
              />
              <span className="w-12 text-right">{colorDepth}</span>
            </label>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showIcon}
                onChange={(e) => setShowIcon(e.target.checked)}
              />
              <span>icon</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showTooltip}
                onChange={(e) => setShowTooltip(e.target.checked)}
              />
              <span>tooltip</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={overrideTitle}
                onChange={(e) => setOverrideTitle(e.target.checked)}
              />
              <span>headers.title</span>
            </label>
          </div>

          <div className="flex items-center gap-3">
            <Button color="primary" onPress={() => setOpen(true)}>
              Open
            </Button>
            <div className="text-sm text-gray-600">
              headers lets you customize the internal PageTitle.
            </div>
          </div>

          <Drawer
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Drawer title"
            headers={headers}
          >
            <div className="text-sm text-gray-600">
              Toggle header settings, then reopen to see changes.
            </div>
          </Drawer>
        </div>
      }
      code={
        `import React from "react";
import { Button, Drawer } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Drawer title"
        headers={{ color: "secondary", colorDepth: 600 }}
      >
        Drawer content
      </Drawer>
    </>
  );
}`
      }
    />
  );
};

export default Headers;
