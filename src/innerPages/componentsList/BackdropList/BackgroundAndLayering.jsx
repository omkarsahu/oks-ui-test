import React from "react";
import { Backdrop, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const BackgroundAndLayering = () => {
  const [open, setOpen] = React.useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = React.useState(80);
  const [backgroundColor, setBackgroundColor] = React.useState(
    "var(--oks-palette-neutral-950, #000)",
  );
  const [zIndex, setZIndex] = React.useState(40);

  return (
    <ShowCode
      title="Background + zIndex"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="text-sm font-semibold text-gray-700 min-w-24">
                Colors
              </div>
              <Button
                variant="bordered"
                onPress={() =>
                  setBackgroundColor("var(--oks-palette-neutral-950, #000)")
                }
              >
                Neutral
              </Button>
              <Button
                variant="bordered"
                onPress={() =>
                  setBackgroundColor("var(--oks-palette-primary-700, #2563eb)")
                }
              >
                Primary
              </Button>
              <Button
                variant="bordered"
                onPress={() =>
                  setBackgroundColor(
                    "var(--oks-palette-secondary-700, #6d28d9)",
                  )
                }
              >
                Secondary
              </Button>
              <Button
                variant="bordered"
                onPress={() =>
                  setBackgroundColor("var(--oks-palette-success-700, #16a34a)")
                }
              >
                Success
              </Button>
              <Button
                variant="bordered"
                onPress={() =>
                  setBackgroundColor("var(--oks-palette-warning-700, #d97706)")
                }
              >
                Warning
              </Button>
              <Button
                variant="bordered"
                onPress={() =>
                  setBackgroundColor("var(--oks-palette-danger-700, #dc2626)")
                }
              >
                Danger
              </Button>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="text-sm font-semibold text-gray-700 min-w-24">
                zIndex
              </div>
              <Button variant="bordered" onPress={() => setZIndex(10)}>
                10
              </Button>
              <Button variant="bordered" onPress={() => setZIndex(40)}>
                40
              </Button>
              <Button variant="bordered" onPress={() => setZIndex(60)}>
                60
              </Button>
              <Button variant="bordered" onPress={() => setZIndex(100)}>
                100
              </Button>
              <Button color="primary" onPress={() => setOpen(true)}>
                Open
              </Button>
            </div>
          </div>

          <label className="flex items-center gap-3 flex-wrap">
            <span className="min-w-40">backgroundOpacity</span>
            <input
              type="range"
              min={0}
              max={100}
              value={backgroundOpacity}
              onChange={(e) => setBackgroundOpacity(Number(e.target.value))}
            />
            <span className="w-10 text-right">{backgroundOpacity}</span>
          </label>

          <label className="flex items-center gap-3 flex-wrap">
            <span className="min-w-40">zIndex</span>
            <input
              type="range"
              min={0}
              max={100}
              value={zIndex}
              onChange={(e) => setZIndex(Number(e.target.value))}
            />
            <span className="w-10 text-right">{zIndex}</span>
          </label>

          <div className="text-sm text-gray-600">
            Tip: the red badge uses z-index 50. Set backdrop zIndex above 50 to
            cover it.
          </div>

          <div className="fixed bottom-4 right-4 z-50 bg-red-600 text-white text-xs px-3 py-2 rounded-md shadow-lg">
            z-50 badge
          </div>

          <Backdrop
            isOpen={open}
            onClose={() => setOpen(false)}
            backgroundColor={backgroundColor}
            backgroundOpacity={backgroundOpacity}
            zIndex={zIndex}
          >
            <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-semibold">Backdrop</div>
                <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
                  Close
                </Button>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                backgroundOpacity: {backgroundOpacity}, zIndex: {zIndex}
              </div>
            </div>
          </Backdrop>
        </div>
      }
      code={
        `import React from "react";
import { Backdrop, Button } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = React.useState(80);
  const [backgroundColor, setBackgroundColor] = React.useState(
    "var(--oks-palette-neutral-950, #000)",
  );
  const [zIndex, setZIndex] = React.useState(40);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="text-sm font-semibold text-gray-700 min-w-24">Colors</div>
          <Button
            variant="bordered"
            onPress={() => setBackgroundColor("var(--oks-palette-neutral-950, #000)")}
          >
            Neutral
          </Button>
          <Button
            variant="bordered"
            onPress={() => setBackgroundColor("var(--oks-palette-primary-700, #2563eb)")}
          >
            Primary
          </Button>
          <Button
            variant="bordered"
            onPress={() => setBackgroundColor("var(--oks-palette-secondary-700, #6d28d9)")}
          >
            Secondary
          </Button>
          <Button
            variant="bordered"
            onPress={() => setBackgroundColor("var(--oks-palette-success-700, #16a34a)")}
          >
            Success
          </Button>
          <Button
            variant="bordered"
            onPress={() => setBackgroundColor("var(--oks-palette-warning-700, #d97706)")}
          >
            Warning
          </Button>
          <Button
            variant="bordered"
            onPress={() => setBackgroundColor("var(--oks-palette-danger-700, #dc2626)")}
          >
            Danger
          </Button>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="text-sm font-semibold text-gray-700 min-w-24">zIndex</div>
          <Button variant="bordered" onPress={() => setZIndex(10)}>
            10
          </Button>
          <Button variant="bordered" onPress={() => setZIndex(40)}>
            40
          </Button>
          <Button variant="bordered" onPress={() => setZIndex(60)}>
            60
          </Button>
          <Button variant="bordered" onPress={() => setZIndex(100)}>
            100
          </Button>
          <Button color="primary" onPress={() => setOpen(true)}>
            Open
          </Button>
        </div>
      </div>

      <label className="flex items-center gap-3 flex-wrap">
        <span className="min-w-40">backgroundOpacity</span>
        <input
          type="range"
          min={0}
          max={100}
          value={backgroundOpacity}
          onChange={(e) => setBackgroundOpacity(Number(e.target.value))}
        />
        <span className="w-10 text-right">{backgroundOpacity}</span>
      </label>

      <label className="flex items-center gap-3 flex-wrap">
        <span className="min-w-40">zIndex</span>
        <input
          type="range"
          min={0}
          max={100}
          value={zIndex}
          onChange={(e) => setZIndex(Number(e.target.value))}
        />
        <span className="w-10 text-right">{zIndex}</span>
      </label>

      <div className="text-sm text-gray-600">
        Tip: the red badge uses z-index 50. Set backdrop zIndex above 50 to cover it.
      </div>

      <div className="fixed bottom-4 right-4 z-50 bg-red-600 text-white text-xs px-3 py-2 rounded-md shadow-lg">
        z-50 badge
      </div>

      <Backdrop
        isOpen={open}
        onClose={() => setOpen(false)}
        backgroundColor={backgroundColor}
        backgroundOpacity={backgroundOpacity}
        zIndex={zIndex}
      >
        <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Backdrop</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            backgroundOpacity: {backgroundOpacity}, zIndex: {zIndex}
          </div>
        </div>
      </Backdrop>
    </div>
  );
}`
      }
    />
  );
};

export default BackgroundAndLayering;
