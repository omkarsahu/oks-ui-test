import React from "react";
import { Button, Drawer } from "oks-ui";
import { ShowCode } from "../../../components";

const Options = () => {
  const [open, setOpen] = React.useState(false);
  const [dismissible, setDismissible] = React.useState(true);
  const [blur, setBlur] = React.useState(true);
  const [closeOnOutsideClick, setCloseOnOutsideClick] = React.useState(true);
  const [closeOnEscape, setCloseOnEscape] = React.useState(true);
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
                checked={dismissible}
                onChange={(e) => setDismissible(e.target.checked)}
              />
              <span>dismissible</span>
            </label>

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

          <div className="flex items-center gap-3">
            <Button color="primary" onPress={() => setOpen(true)}>
              Open
            </Button>
          </div>

          <Drawer
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Drawer options"
            dismissible={dismissible}
            blur={blur}
            closeOnOutsideClick={closeOnOutsideClick}
            closeOnEscape={closeOnEscape}
            backgroundOpacity={backgroundOpacity}
          >
            <div className="text-sm text-gray-600">
              Toggle options above and reopen to see changes.
            </div>
          </Drawer>
        </div>
      }
      code={
        `import React from "react";
import { Button, Drawer } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [dismissible, setDismissible] = React.useState(true);
  const [blur, setBlur] = React.useState(true);
  const [closeOnOutsideClick, setCloseOnOutsideClick] = React.useState(true);
  const [closeOnEscape, setCloseOnEscape] = React.useState(true);
  const [backgroundOpacity, setBackgroundOpacity] = React.useState(80);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6 flex-wrap">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={dismissible}
            onChange={(e) => setDismissible(e.target.checked)}
          />
          <span>dismissible</span>
        </label>

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

      <div className="flex items-center gap-3">
        <Button color="primary" onPress={() => setOpen(true)}>
          Open
        </Button>
      </div>

      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Drawer options"
        dismissible={dismissible}
        blur={blur}
        closeOnOutsideClick={closeOnOutsideClick}
        closeOnEscape={closeOnEscape}
        backgroundOpacity={backgroundOpacity}
      >
        <div className="text-sm text-gray-600">
          Toggle options above and reopen to see changes.
        </div>
      </Drawer>
    </div>
  );
}`
      }
    />
  );
};

export default Options;
