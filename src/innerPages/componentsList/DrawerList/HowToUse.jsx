import React from "react";
import { Button, Drawer } from "oks-ui";
import { ShowCode } from "../../../components";

const HowToUse = () => {
  const [open, setOpen] = React.useState(false);
  const initialFocusRef = React.useRef(null);

  return (
    <ShowCode
      title="How to usage"
      preview={
        <div className="flex items-center gap-3 flex-wrap">
          <Button color="primary" onPress={() => setOpen(true)}>
            Open drawer
          </Button>

          <Drawer
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Drawer title"
            initialFocusRef={initialFocusRef}
            actions={
              <div className="flex justify-end gap-3">
                <Button variant="bordered" onPress={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button color="primary" onPress={() => setOpen(false)}>
                  Save
                </Button>
              </div>
            }
          >
            <div className="flex flex-col gap-4">
              <div className="text-sm text-gray-600">
                This drawer uses Backdrop internally. Press Escape or click outside
                to close.
              </div>
              <input
                ref={initialFocusRef}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Initial focus"
              />
              <div className="text-sm">
                Content area supports any React nodes.
              </div>
            </div>
          </Drawer>
        </div>
      }
      code={
        <>
          {`import { Drawer, Button } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open drawer</Button>
      <Drawer isOpen={open} onClose={() => setOpen(false)} title="Drawer title">
        Drawer content
      </Drawer>
    </>
  );
}`}
        </>
      }
    />
  );
};

export default HowToUse;
