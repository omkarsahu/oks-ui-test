import React from "react";
import { Button, Drawer } from "oks-ui";
import { ShowCode } from "../../../components";

const positions = ["left", "right", "top", "bottom"];
const presets = ["sm", "md", "lg"];

const Sizing = () => {
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState("right");
  const [widthPreset, setWidthPreset] = React.useState("md");
  const [heightPreset, setHeightPreset] = React.useState("md");
  const [customWidth, setCustomWidth] = React.useState("600px");
  const [customHeight, setCustomHeight] = React.useState("420px");
  const [useCustomWidth, setUseCustomWidth] = React.useState(false);
  const [useCustomHeight, setUseCustomHeight] = React.useState(false);

  const isHorizontal = position === "left" || position === "right";
  const resolvedWidth = useCustomWidth ? customWidth : widthPreset;
  const resolvedHeight = useCustomHeight ? customHeight : heightPreset;

  return (
    <ShowCode
      title="Sizing (width/height)"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <label className="flex items-center gap-2">
              <span className="text-sm min-w-16">position</span>
              <select
                className="border border-gray-300 rounded-md px-2 py-1"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                {positions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {isHorizontal ? (
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={useCustomWidth}
                  onChange={(e) => setUseCustomWidth(e.target.checked)}
                />
                <span className="text-sm">custom width</span>
              </label>

              {useCustomWidth ? (
                <input
                  className="border border-gray-300 rounded-md px-2 py-1"
                  value={customWidth}
                  onChange={(e) => setCustomWidth(e.target.value)}
                  placeholder='e.g. "600px"'
                />
              ) : (
                <select
                  className="border border-gray-300 rounded-md px-2 py-1"
                  value={widthPreset}
                  onChange={(e) => setWidthPreset(e.target.value)}
                >
                  {presets.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={useCustomHeight}
                  onChange={(e) => setUseCustomHeight(e.target.checked)}
                />
                <span className="text-sm">custom height</span>
              </label>

              {useCustomHeight ? (
                <input
                  className="border border-gray-300 rounded-md px-2 py-1"
                  value={customHeight}
                  onChange={(e) => setCustomHeight(e.target.value)}
                  placeholder='e.g. "420px"'
                />
              ) : (
                <select
                  className="border border-gray-300 rounded-md px-2 py-1"
                  value={heightPreset}
                  onChange={(e) => setHeightPreset(e.target.value)}
                >
                  {presets.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              )}
            </div>
          )}

          <div className="flex items-center gap-3">
            <Button color="primary" onPress={() => setOpen(true)}>
              Open
            </Button>
            <div className="text-sm text-gray-600">
              {isHorizontal
                ? `width: ${resolvedWidth}`
                : `height: ${resolvedHeight}`}
            </div>
          </div>

          <Drawer
            isOpen={open}
            onClose={() => setOpen(false)}
            position={position}
            title="Sizing demo"
            {...(isHorizontal ? { width: resolvedWidth } : { height: resolvedHeight })}
          >
            <div className="text-sm text-gray-600">
              For left/right drawers, use width. For top/bottom drawers, use
              height.
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
        position="right"
        width="lg"
        title="Sizing demo"
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

export default Sizing;
