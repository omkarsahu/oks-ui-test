import React from "react";
import { Backdrop, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const HowToUse = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <ShowCode
      title="How to usage"
      preview={
        <div className="flex items-center gap-3 flex-wrap">
          <Button color="primary" onPress={() => setOpen(true)}>
            Open backdrop
          </Button>

          <Backdrop isOpen={open} onClose={() => setOpen(false)}>
            <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
              <div className="flex flex-col gap-4">
                <div className="text-lg font-semibold">Backdrop content</div>
                <div className="text-sm text-gray-600">
                  Click outside or press Escape to close.
                </div>
                <div className="flex gap-3 justify-end">
                  <Button variant="bordered" onPress={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button color="primary" onPress={() => setOpen(false)}>
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </Backdrop>
        </div>
      }
      code={
        <>
          {`import { Backdrop, Button } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open backdrop</Button>

      <Backdrop isOpen={open} onClose={() => setOpen(false)}>
        <div className="bg-white rounded-md p-6 w-full max-w-md">
          Backdrop content
        </div>
      </Backdrop>
    </>
  );
}`}
        </>
      }
    />
  );
};

export default HowToUse;
