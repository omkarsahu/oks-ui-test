import React from "react";
import { Backdrop, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const PortalAndContainer = () => {
  const boxRef = React.useRef(null);
  const [containerEl, setContainerEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState("container");

  React.useEffect(() => {
    setContainerEl(boxRef.current);
  }, []);

  return (
    <ShowCode
      title="portal + container"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <Button
              variant="bordered"
              onPress={() => {
                setMode("inline");
                setOpen(true);
              }}
            >
              Open (portal=false)
            </Button>
            <Button
              color="primary"
              onPress={() => {
                setMode("container");
                setOpen(true);
              }}
            >
              Open (custom container)
            </Button>
          </div>

          <div
            ref={boxRef}
            className="w-full max-w-xl h-56 border border-gray-300 rounded-md p-3 bg-gray-50 overflow-hidden relative"
            style={{ transform: "translateZ(0)" }}
          >
            <div className="text-sm text-gray-700 font-medium">
              Custom portal container box
            </div>
            <div className="text-xs text-gray-600 mt-1">
              Backdrop can be portaled into this element using container.
            </div>
          </div>

          {mode === "inline" ? (
            <Backdrop isOpen={open} onClose={() => setOpen(false)} portal={false}>
              <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-lg font-semibold">Inline render</div>
                  <Button
                    size="sm"
                    variant="bordered"
                    onPress={() => setOpen(false)}
                  >
                    Close
                  </Button>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  This Backdrop is not rendered via a portal.
                </div>
              </div>
            </Backdrop>
          ) : (
            <Backdrop
              isOpen={open}
              onClose={() => setOpen(false)}
              portal
              container={containerEl}
            >
              <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-lg font-semibold">Portaled</div>
                  <Button
                    size="sm"
                    variant="bordered"
                    onPress={() => setOpen(false)}
                  >
                    Close
                  </Button>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  This Backdrop is portaled into the gray box.
                </div>
              </div>
            </Backdrop>
          )}
        </div>
      }
      code={
        `import React from "react";
import { Backdrop, Button } from "oks-ui";

export default function Example() {
  const boxRef = React.useRef(null);
  const [containerEl, setContainerEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState("container");

  React.useEffect(() => {
    setContainerEl(boxRef.current);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 flex-wrap">
        <Button
          variant="bordered"
          onPress={() => {
            setMode("inline");
            setOpen(true);
          }}
        >
          Open (portal=false)
        </Button>
        <Button
          color="primary"
          onPress={() => {
            setMode("container");
            setOpen(true);
          }}
        >
          Open (custom container)
        </Button>
      </div>

      <div
        ref={boxRef}
        className="w-full max-w-xl h-56 border border-gray-300 rounded-md p-3 bg-gray-50 overflow-hidden relative"
        style={{ transform: "translateZ(0)" }}
      >
        <div className="text-sm text-gray-700 font-medium">
          Custom portal container box
        </div>
        <div className="text-xs text-gray-600 mt-1">
          Backdrop can be portaled into this element using container.
        </div>
      </div>

      {mode === "inline" ? (
        <Backdrop isOpen={open} onClose={() => setOpen(false)} portal={false}>
          <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-semibold">Inline render</div>
              <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
                Close
              </Button>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              This Backdrop is not rendered via a portal.
            </div>
          </div>
        </Backdrop>
      ) : (
        <Backdrop
          isOpen={open}
          onClose={() => setOpen(false)}
          portal
          container={containerEl}
        >
          <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-semibold">Portaled</div>
              <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
                Close
              </Button>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              This Backdrop is portaled into the gray box.
            </div>
          </div>
        </Backdrop>
      )}
    </div>
  );
}`
      }
    />
  );
};

export default PortalAndContainer;
