import React from "react";
import { Button, Drawer } from "oks-ui";
import { ShowCode } from "../../../components";

const PortalAndContainer = () => {
  const [open, setOpen] = React.useState(false);
  const [portal, setPortal] = React.useState(true);
  const [useContainer, setUseContainer] = React.useState(true);
  const [zIndex, setZIndex] = React.useState(60);
  const containerRef = React.useRef(null);

  const container = portal && useContainer ? containerRef.current : undefined;

  return (
    <ShowCode
      title="Portal, container, and zIndex"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={portal}
                onChange={(e) => setPortal(e.target.checked)}
              />
              <span>portal</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={useContainer}
                onChange={(e) => setUseContainer(e.target.checked)}
                disabled={!portal}
              />
              <span>container</span>
            </label>

            <label className="flex items-center gap-3">
              <span className="min-w-12">zIndex</span>
              <input
                type="range"
                min={10}
                max={200}
                value={zIndex}
                onChange={(e) => setZIndex(Number(e.target.value))}
              />
              <span className="w-10 text-right">{zIndex}</span>
            </label>
          </div>

          <div className="flex items-center gap-3">
            <Button color="primary" onPress={() => setOpen(true)}>
              Open
            </Button>
            <div className="text-sm text-gray-600">
              {portal
                ? useContainer
                  ? "Portaled into the container below."
                  : "Portaled to document.body."
                : "Rendered inline (no portal)."}
            </div>
          </div>

          <div
            ref={containerRef}
            className="relative border border-dashed border-gray-300 rounded-md p-4 h-56 overflow-hidden bg-white"
          >
            <div className="text-sm font-semibold">Portal container</div>
            <div className="text-xs text-gray-600">
              When container is enabled, the drawer/backdrop portal into this
              element.
            </div>
          </div>

          <Drawer
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Portal demo"
            portal={portal}
            container={container}
            zIndex={zIndex}
          >
            <div className="text-sm text-gray-600">
              Toggle portal/container to see where the drawer renders.
            </div>
          </Drawer>
        </div>
      }
      code={
        `import React from "react";
import { Button, Drawer } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <div ref={containerRef} />
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        portal
        container={containerRef.current}
        zIndex={60}
        title="Portal demo"
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

export default PortalAndContainer;
