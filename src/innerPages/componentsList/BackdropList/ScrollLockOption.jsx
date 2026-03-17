import React from "react";
import { Backdrop, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const ScrollLockOption = () => {
  const [open, setOpen] = React.useState(false);
  const [lockScroll, setLockScroll] = React.useState(true);

  return (
    <ShowCode
      title="lockScroll"
      preview={
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={lockScroll}
              onChange={(e) => setLockScroll(e.target.checked)}
            />
            <span>lockScroll</span>
          </label>

          <div className="flex items-center gap-3 flex-wrap">
            <Button color="primary" onPress={() => setOpen(true)}>
              Open
            </Button>
          </div>

          <div className="text-sm text-gray-600">
            With lockScroll enabled, the document should not scroll while the
            backdrop is open.
          </div>

          <div className="h-40 overflow-y-auto border border-gray-200 rounded-md p-3">
            <div className="text-sm font-semibold">Scrollable area</div>
            <div className="text-sm text-gray-600 mt-2">
              This box can scroll independently, but lockScroll affects document
              scrolling.
            </div>
            <div className="h-64" />
            <div className="text-xs text-gray-500">End</div>
          </div>

          <Backdrop
            isOpen={open}
            onClose={() => setOpen(false)}
            lockScroll={lockScroll}
          >
            <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-semibold">Scroll lock</div>
                <Button
                  size="sm"
                  variant="bordered"
                  onPress={() => setOpen(false)}
                >
                  Close
                </Button>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                lockScroll: {lockScroll ? "true" : "false"}
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
  const [lockScroll, setLockScroll] = React.useState(true);

  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={lockScroll}
          onChange={(e) => setLockScroll(e.target.checked)}
        />
        <span>lockScroll</span>
      </label>

      <div className="flex items-center gap-3 flex-wrap">
        <Button color="primary" onPress={() => setOpen(true)}>
          Open
        </Button>
      </div>

      <div className="text-sm text-gray-600">
        With lockScroll enabled, the document should not scroll while the backdrop is open.
      </div>

      <div className="h-40 overflow-y-auto border border-gray-200 rounded-md p-3">
        <div className="text-sm font-semibold">Scrollable area</div>
        <div className="text-sm text-gray-600 mt-2">
          This box can scroll independently, but lockScroll affects document scrolling.
        </div>
        <div className="h-64" />
        <div className="text-xs text-gray-500">End</div>
      </div>

      <Backdrop isOpen={open} onClose={() => setOpen(false)} lockScroll={lockScroll}>
        <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Scroll lock</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            lockScroll: {lockScroll ? "true" : "false"}
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

export default ScrollLockOption;
