import React from "react";
import { Button, Modal } from "oks-ui";
import { ShowCode } from "../../../components";

const colors = ["default", "primary", "secondary", "info", "success", "warning", "danger"];

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

const HeaderAndDividerOverrides = () => {
  const [open, setOpen] = React.useState(false);
  const [headerColor, setHeaderColor] = React.useState("secondary");
  const [headerColorDepth, setHeaderColorDepth] = React.useState(600);
  const [dividerColor, setDividerColor] = React.useState("secondary");
  const [dividerColorDepth, setDividerColorDepth] = React.useState(200);
  const [dividerThickness, setDividerThickness] = React.useState(1);

  return (
    <ShowCode
      title="Header & divider overrides"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <span className="text-sm">headers.color</span>
              <select
                className="border border-gray-300 rounded-md px-2 py-1"
                value={headerColor}
                onChange={(e) => setHeaderColor(e.target.value)}
              >
                {colors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-3">
              <span className="min-w-28">headers.colorDepth</span>
              <input
                type="range"
                min={50}
                max={950}
                step={50}
                value={headerColorDepth}
                onChange={(e) => setHeaderColorDepth(Number(e.target.value))}
              />
              <span className="w-12 text-right">{headerColorDepth}</span>
            </label>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <span className="text-sm">divider.color</span>
              <select
                className="border border-gray-300 rounded-md px-2 py-1"
                value={dividerColor}
                onChange={(e) => setDividerColor(e.target.value)}
              >
                {colors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-3">
              <span className="min-w-28">divider.colorDepth</span>
              <input
                type="range"
                min={50}
                max={950}
                step={50}
                value={dividerColorDepth}
                onChange={(e) => setDividerColorDepth(Number(e.target.value))}
              />
              <span className="w-12 text-right">{dividerColorDepth}</span>
            </label>

            <label className="flex items-center gap-3">
              <span className="min-w-24">thickness</span>
              <input
                type="range"
                min={1}
                max={6}
                step={1}
                value={dividerThickness}
                onChange={(e) => setDividerThickness(Number(e.target.value))}
              />
              <span className="w-8 text-right">{dividerThickness}</span>
            </label>
          </div>

          <div className="flex items-center gap-3">
            <Button color="primary" onPress={() => setOpen(true)}>
              Open
            </Button>
            <div className="text-sm text-gray-600">
              Modal header uses PageTitle and Divider internally.
            </div>
          </div>

          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Modal title"
            headers={{
              color: headerColor,
              colorDepth: headerColorDepth,
              icon: InfoIcon,
              tooltip: { content: "Header tooltip" },
            }}
            divider={{
              color: dividerColor,
              colorDepth: dividerColorDepth,
              thickness: dividerThickness,
            }}
          >
            <div className="text-sm text-gray-600">
              Use headers to customize the title, and divider to customize the
              separator line.
            </div>
          </Modal>
        </div>
      }
      code={
        `import React from "react";
import { Button, Modal } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Modal title"
        headers={{ color: "secondary", colorDepth: 600 }}
        divider={{ color: "secondary", colorDepth: 200, thickness: 2 }}
      >
        Modal content
      </Modal>
    </>
  );
}`
      }
    />
  );
};

export default HeaderAndDividerOverrides;
