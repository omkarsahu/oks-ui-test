import React from "react";
import { Button, Modal } from "oks-ui";
import { ShowCode } from "../../../components";

const easings = ["ease", "easeIn", "easeOut", "easeInOut"];
const overlayColors = [
  { label: "Neutral", value: "var(--oks-palette-neutral-950, #000)" },
  { label: "Indigo", value: "rgba(79, 70, 229, 1)" },
  { label: "Emerald", value: "rgba(5, 150, 105, 1)" },
];

const MotionAndBackdrop = () => {
  const [open, setOpen] = React.useState(false);
  const [animationDuration, setAnimationDuration] = React.useState(0.3);
  const [easing, setEasing] = React.useState("ease");
  const [lockScroll, setLockScroll] = React.useState(true);
  const [backgroundColor, setBackgroundColor] = React.useState(
    overlayColors[0].value,
  );

  return (
    <ShowCode
      title="Motion & backdrop overrides"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-3">
              <span className="min-w-32">animationDuration</span>
              <input
                type="range"
                min={0}
                max={1.2}
                step={0.05}
                value={animationDuration}
                onChange={(e) => setAnimationDuration(Number(e.target.value))}
              />
              <span className="w-12 text-right">{animationDuration.toFixed(2)}s</span>
            </label>

            <label className="flex items-center gap-2">
              <span className="text-sm">easing</span>
              <select
                className="border border-gray-300 rounded-md px-2 py-1"
                value={easing}
                onChange={(e) => setEasing(e.target.value)}
              >
                {easings.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={lockScroll}
                onChange={(e) => setLockScroll(e.target.checked)}
              />
              <span>backdrop.lockScroll</span>
            </label>

            <label className="flex items-center gap-2">
              <span className="text-sm">backdrop.backgroundColor</span>
              <select
                className="border border-gray-300 rounded-md px-2 py-1"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              >
                {overlayColors.map((c) => (
                  <option key={c.label} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex items-center gap-3">
            <Button color="primary" onPress={() => setOpen(true)}>
              Open
            </Button>
            <div className="text-sm text-gray-600">
              Modal composes Backdrop; customize overlay behavior via the backdrop
              prop when needed.
            </div>
          </div>

          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Motion demo"
            animationDuration={animationDuration}
            easing={easing}
            backdrop={{
              lockScroll,
              backgroundColor,
            }}
          >
            <div className="text-sm text-gray-600">
              Change animation duration/easing and backdrop overrides, then reopen.
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
        animationDuration={0.5}
        easing="easeInOut"
        backdrop={{ lockScroll: false, backgroundColor: "rgba(79, 70, 229, 1)" }}
        title="Motion demo"
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

export default MotionAndBackdrop;
