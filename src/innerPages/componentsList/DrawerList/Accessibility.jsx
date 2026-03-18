import React from "react";
import { Button, Drawer } from "oks-ui";
import { ShowCode } from "../../../components";

const Accessibility = () => {
  const [open, setOpen] = React.useState(false);
  const [withTitle, setWithTitle] = React.useState(false);
  const [dismissible, setDismissible] = React.useState(true);
  const [ariaLabel, setAriaLabel] = React.useState("Account drawer");
  const [closeLabel, setCloseLabel] = React.useState("Close account drawer");
  const [closeOnOutsideClick, setCloseOnOutsideClick] = React.useState(true);
  const [closeOnEscape, setCloseOnEscape] = React.useState(true);

  return (
    <ShowCode
      title="Accessibility & labels"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={withTitle}
                onChange={(e) => setWithTitle(e.target.checked)}
              />
              <span>title</span>
            </label>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="flex flex-col gap-1">
              <span className="text-sm text-gray-600">ariaLabel</span>
              <input
                className="border border-gray-300 rounded-md px-2 py-1"
                value={ariaLabel}
                onChange={(e) => setAriaLabel(e.target.value)}
                disabled={withTitle}
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm text-gray-600">closeLabel</span>
              <input
                className="border border-gray-300 rounded-md px-2 py-1"
                value={closeLabel}
                onChange={(e) => setCloseLabel(e.target.value)}
                disabled={!dismissible}
              />
            </label>
          </div>

          <div className="flex items-center gap-3">
            <Button color="primary" onPress={() => setOpen(true)}>
              Open
            </Button>
            <div className="text-sm text-gray-600">
              {withTitle
                ? "Title is used for aria-labelledby."
                : "ariaLabel is used when no title is provided."}
            </div>
          </div>

          <Drawer
            isOpen={open}
            onClose={() => setOpen(false)}
            dismissible={dismissible}
            closeLabel={closeLabel}
            closeOnOutsideClick={closeOnOutsideClick}
            closeOnEscape={closeOnEscape}
            {...(withTitle ? { title: "Account" } : { ariaLabel })}
          >
            <div className="text-sm text-gray-600">
              Toggle title/dismissible to see how labeling and the close button
              behave.
            </div>
          </Drawer>
        </div>
      }
      code={
        `import React from "react";
import { Button, Drawer } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        ariaLabel="Account drawer"
        closeLabel="Close account drawer"
        dismissible
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

export default Accessibility;
