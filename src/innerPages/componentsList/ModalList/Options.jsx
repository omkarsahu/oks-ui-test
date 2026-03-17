import React from "react";
import { Button, Modal } from "oks-ui";
import { ShowCode } from "../../../components";

const animationTypes = ["fade", "zoom", "slideUp", "slideDown", "slideLeft", "slideRight"];

const Options = () => {
  const [open, setOpen] = React.useState(false);
  const [dismissible, setDismissible] = React.useState(true);
  const [blur, setBlur] = React.useState(true);
  const [closeOnOutsideClick, setCloseOnOutsideClick] = React.useState(true);
  const [closeOnEscape, setCloseOnEscape] = React.useState(true);
  const [backgroundOpacity, setBackgroundOpacity] = React.useState(80);
  const [animationType, setAnimationType] = React.useState("slideUp");

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

          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm min-w-28">animationType</span>
            {animationTypes.map((type) => (
              <Button
                key={type}
                size="sm"
                color="primary"
                variant={animationType === type ? "solid" : "bordered"}
                onPress={() => setAnimationType(type)}
              >
                {type}
              </Button>
            ))}
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

          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Modal options"
            dismissible={dismissible}
            blur={blur}
            closeOnOutsideClick={closeOnOutsideClick}
            closeOnEscape={closeOnEscape}
            backgroundOpacity={backgroundOpacity}
            animationType={animationType}
            animationDuration={0.25}
          >
            <div className="text-sm text-gray-600">
              Toggle options above and reopen to see changes.
            </div>
          </Modal>
        </div>
      }
      code={
        `import React from "react";
import { Button, Modal } from "oks-ui";

const animationTypes = ["fade", "zoom", "slideUp", "slideDown", "slideLeft", "slideRight"];

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [dismissible, setDismissible] = React.useState(true);
  const [blur, setBlur] = React.useState(true);
  const [closeOnOutsideClick, setCloseOnOutsideClick] = React.useState(true);
  const [closeOnEscape, setCloseOnEscape] = React.useState(true);
  const [backgroundOpacity, setBackgroundOpacity] = React.useState(80);
  const [animationType, setAnimationType] = React.useState("slideUp");

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

      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm min-w-28">animationType</span>
        {animationTypes.map((type) => (
          <Button
            key={type}
            size="sm"
            color="primary"
            variant={animationType === type ? "solid" : "bordered"}
            onPress={() => setAnimationType(type)}
          >
            {type}
          </Button>
        ))}
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

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Modal options"
        dismissible={dismissible}
        blur={blur}
        closeOnOutsideClick={closeOnOutsideClick}
        closeOnEscape={closeOnEscape}
        backgroundOpacity={backgroundOpacity}
        animationType={animationType}
        animationDuration={0.25}
      >
        <div className="text-sm text-gray-600">
          Toggle options above and reopen to see changes.
        </div>
      </Modal>
    </div>
  );
}`
      }
    />
  );
};

export default Options;
