import React from "react";
import { Button, Modal } from "oks-ui";
import { ShowCode } from "../../../components";

const sizes = ["sm", "md", "lg"];

const Sizes = () => {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState("md");

  return (
    <ShowCode
      title="Sizes"
      preview={
        <div className="flex items-center gap-3 flex-wrap">
          {sizes.map((s) => (
            <Button
              key={s}
              color="primary"
              variant={size === s ? "solid" : "bordered"}
              onPress={() => {
                setSize(s);
                setOpen(true);
              }}
            >
              {s}
            </Button>
          ))}

          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            title={`Size: ${size}`}
            size={size}
          >
            <div className="text-sm text-gray-600">
              Modal width is controlled by the size prop.
            </div>
          </Modal>
        </div>
      }
      code={
        `import React from "react";
import { Button, Modal } from "oks-ui";

const sizes = ["sm", "md", "lg"];

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState("md");

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {sizes.map((s) => (
        <Button
          key={s}
          color="primary"
          variant={size === s ? "solid" : "bordered"}
          onPress={() => {
            setSize(s);
            setOpen(true);
          }}
        >
          {s}
        </Button>
      ))}

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={\`Size: \${size}\`}
        size={size}
      >
        <div className="text-sm text-gray-600">
          Modal width is controlled by the size prop.
        </div>
      </Modal>
    </div>
  );
}`
      }
    />
  );
};

export default Sizes;
