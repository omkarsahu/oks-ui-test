import React from "react";
import { Backdrop, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const ContentLayout = () => {
  const [open, setOpen] = React.useState(false);
  const [fullSize, setFullSize] = React.useState(false);
  const [padded, setPadded] = React.useState(true);

  return (
    <ShowCode
      title="Content layout"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={fullSize}
                onChange={(e) => setFullSize(e.target.checked)}
              />
              <span>contentFullSize</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={padded}
                onChange={(e) => setPadded(e.target.checked)}
              />
              <span>contentStyle (padding)</span>
            </label>
            <Button color="primary" onPress={() => setOpen(true)}>
              Open
            </Button>
          </div>

          <Backdrop
            isOpen={open}
            onClose={() => setOpen(false)}
            contentFullSize={fullSize}
            contentClassName="flex items-center justify-center"
            contentStyle={{
              padding: padded ? 24 : 0,
            }}
          >
            <div
              className={
                fullSize
                  ? "w-full h-full bg-white rounded-md shadow-xl flex flex-col"
                  : "w-full max-w-md bg-white rounded-md shadow-xl p-6"
              }
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-semibold">Content</div>
                <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
                  Close
                </Button>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                contentFullSize: {fullSize ? "true" : "false"}
              </div>
              {fullSize ? (
                <div className="mt-4 flex-1 border border-dashed border-gray-300 rounded-md flex items-center justify-center text-sm text-gray-600">
                  Full-size area
                </div>
              ) : null}
            </div>
          </Backdrop>
        </div>
      }
      code={
        `import React from "react";
import { Backdrop, Button } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [fullSize, setFullSize] = React.useState(false);
  const [padded, setPadded] = React.useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6 flex-wrap">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={fullSize}
            onChange={(e) => setFullSize(e.target.checked)}
          />
          <span>contentFullSize</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={padded}
            onChange={(e) => setPadded(e.target.checked)}
          />
          <span>contentStyle (padding)</span>
        </label>
        <Button color="primary" onPress={() => setOpen(true)}>
          Open
        </Button>
      </div>

      <Backdrop
        isOpen={open}
        onClose={() => setOpen(false)}
        contentFullSize={fullSize}
        contentClassName="flex items-center justify-center"
        contentStyle={{ padding: padded ? 24 : 0 }}
      >
        <div
          className={
            fullSize
              ? "w-full h-full bg-white rounded-md shadow-xl flex flex-col"
              : "w-full max-w-md bg-white rounded-md shadow-xl p-6"
          }
        >
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Content</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            contentFullSize: {fullSize ? "true" : "false"}
          </div>
          {fullSize ? (
            <div className="mt-4 flex-1 border border-dashed border-gray-300 rounded-md flex items-center justify-center text-sm text-gray-600">
              Full-size area
            </div>
          ) : null}
        </div>
      </Backdrop>
    </div>
  );
}`
      }
    />
  );
};

export default ContentLayout;
