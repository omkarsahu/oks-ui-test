import React from "react";
import { Backdrop, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const DismissOptions = () => {
  const [open, setOpen] = React.useState(false);
  const [closeOnOutsideClick, setCloseOnOutsideClick] = React.useState(true);
  const [closeOnEscape, setCloseOnEscape] = React.useState(true);

  return (
    <ShowCode
      title="Dismiss behavior"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={closeOnOutsideClick}
                onChange={(e) => setCloseOnOutsideClick(e.target.checked)}
              />
              <span>closeOnOutsideClick</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={closeOnEscape}
                onChange={(e) => setCloseOnEscape(e.target.checked)}
              />
              <span>closeOnEscape</span>
            </label>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Button color="primary" onPress={() => setOpen(true)}>
              Open
            </Button>
          </div>

          <Backdrop
            isOpen={open}
            onClose={() => setOpen(false)}
            closeOnOutsideClick={closeOnOutsideClick}
            closeOnEscape={closeOnEscape}
          >
            <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-semibold">Dismiss behavior</div>
                <Button
                  size="sm"
                  variant="bordered"
                  onPress={() => setOpen(false)}
                >
                  Close
                </Button>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Try clicking outside or pressing Escape based on your toggles.
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
  const [closeOnOutsideClick, setCloseOnOutsideClick] = React.useState(true);
  const [closeOnEscape, setCloseOnEscape] = React.useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6 flex-wrap">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={closeOnOutsideClick}
            onChange={(e) => setCloseOnOutsideClick(e.target.checked)}
          />
          <span>closeOnOutsideClick</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={closeOnEscape}
            onChange={(e) => setCloseOnEscape(e.target.checked)}
          />
          <span>closeOnEscape</span>
        </label>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <Button color="primary" onPress={() => setOpen(true)}>
          Open
        </Button>
      </div>

      <Backdrop
        isOpen={open}
        onClose={() => setOpen(false)}
        closeOnOutsideClick={closeOnOutsideClick}
        closeOnEscape={closeOnEscape}
      >
        <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Dismiss behavior</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Try clicking outside or pressing Escape based on your toggles.
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

export default DismissOptions;
