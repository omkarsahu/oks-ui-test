import React from "react";
import { Backdrop, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const Options = () => {
  const [open, setOpen] = React.useState(false);
  const [blur, setBlur] = React.useState(true);
  const [closeOnOutsideClick, setCloseOnOutsideClick] = React.useState(true);
  const [closeOnEscape, setCloseOnEscape] = React.useState(true);
  const [lockScroll, setLockScroll] = React.useState(true);
  const [backgroundOpacity, setBackgroundOpacity] = React.useState(80);

  return (
    <ShowCode
      title="Options"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={blur}
                onChange={(e) => setBlur(e.target.checked)}
              />
              <span>blur</span>
            </label>

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

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={lockScroll}
                onChange={(e) => setLockScroll(e.target.checked)}
              />
              <span>lockScroll</span>
            </label>
          </div>

          <label className="flex items-center gap-3">
            <span className="min-w-36">backgroundOpacity</span>
            <input
              type="range"
              min={0}
              max={100}
              value={backgroundOpacity}
              onChange={(e) => setBackgroundOpacity(Number(e.target.value))}
            />
            <span className="w-10 text-right">{backgroundOpacity}</span>
          </label>

          <div className="flex items-center gap-3 flex-wrap">
            <Button color="primary" onPress={() => setOpen(true)}>
              Open with options
            </Button>
          </div>

          <Backdrop
            isOpen={open}
            onClose={() => setOpen(false)}
            blur={blur}
            closeOnOutsideClick={closeOnOutsideClick}
            closeOnEscape={closeOnEscape}
            lockScroll={lockScroll}
            backgroundOpacity={backgroundOpacity}
          >
            <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
              <div className="flex flex-col gap-3">
                <div className="text-lg font-semibold">Options applied</div>
                <div className="text-sm text-gray-600">
                  Try clicking outside or pressing Escape based on your toggles.
                </div>
                <div className="flex justify-end">
                  <Button color="primary" onPress={() => setOpen(false)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </Backdrop>
        </div>
      }
      code={
        <>
          {`<Backdrop
  isOpen={open}
  onClose={() => setOpen(false)}
  blur
  closeOnOutsideClick
  closeOnEscape
  lockScroll
  backgroundOpacity={80}
>
  <div className="bg-white rounded-md p-6 w-full max-w-md">
    Content
  </div>
</Backdrop>`}
        </>
      }
    />
  );
};

export default Options;
