import React from "react";
import { Button, Modal } from "oks-ui";
import { ShowCode } from "../../../components";

const CloseLabelDemo = () => {
  const [open, setOpen] = React.useState(false);
  const [dismissible, setDismissible] = React.useState(true);
  const [closeLabel, setCloseLabel] = React.useState("Close modal");

  return (
    <ShowCode
      title="Close button label"
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
              <span className="text-sm">closeLabel</span>
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
              closeLabel sets the close button aria-label.
            </div>
          </div>

          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Close label demo"
            dismissible={dismissible}
            closeLabel={closeLabel}
          >
            <div className="text-sm text-gray-600">
              Toggle dismissible to hide/show the close button.
            </div>
          </Modal>
        </div>
      }
      code={
        `import React from "react";
import { Button, Modal } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Close label demo"
        closeLabel="Dismiss dialog"
      >
        Modal content
      </Modal>
    </>
  );
}`
      }
    />
  );
};

export default CloseLabelDemo;
