import React from "react";
import { Backdrop, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const BlurOption = () => {
  const [open, setOpen] = React.useState(false);
  const [blur, setBlur] = React.useState(true);

  return (
    <ShowCode
      title="blur"
      preview={
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={blur}
              onChange={(e) => setBlur(e.target.checked)}
            />
            <span>blur</span>
          </label>

          <div className="flex items-center gap-3 flex-wrap">
            <Button color="primary" onPress={() => setOpen(true)}>
              Open
            </Button>
          </div>

          <Backdrop isOpen={open} onClose={() => setOpen(false)} blur={blur}>
            <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-semibold">Blur</div>
                <Button
                  size="sm"
                  variant="bordered"
                  onPress={() => setOpen(false)}
                >
                  Close
                </Button>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                blur: {blur ? "true" : "false"}
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
  const [blur, setBlur] = React.useState(true);

  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={blur}
          onChange={(e) => setBlur(e.target.checked)}
        />
        <span>blur</span>
      </label>

      <div className="flex items-center gap-3 flex-wrap">
        <Button color="primary" onPress={() => setOpen(true)}>
          Open
        </Button>
      </div>

      <Backdrop isOpen={open} onClose={() => setOpen(false)} blur={blur}>
        <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Blur</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            blur: {blur ? "true" : "false"}
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

export default BlurOption;
