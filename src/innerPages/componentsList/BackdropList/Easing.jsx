import React from "react";
import { Backdrop, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const easings = ["ease", "easeIn", "easeOut", "easeInOut"];

const Easing = () => {
  const [open, setOpen] = React.useState(false);
  const [easing, setEasing] = React.useState("ease");

  return (
    <ShowCode
      title="Easing"
      preview={
        <div className="flex items-center gap-3 flex-wrap">
          {easings.map((value) => (
            <Button
              key={value}
              variant={easing === value ? "solid" : "bordered"}
              color="primary"
              onPress={() => {
                setEasing(value);
                setOpen(true);
              }}
            >
              {value}
            </Button>
          ))}

          <Backdrop
            isOpen={open}
            onClose={() => setOpen(false)}
            animationType="zoom"
            animationDuration={0.35}
            easing={easing}
          >
            <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-semibold">{easing}</div>
                <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
                  Close
                </Button>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                easing controls the CSS transition timing function.
              </div>
            </div>
          </Backdrop>
        </div>
      }
      code={
        `import React from "react";
import { Backdrop, Button } from "oks-ui";

const easings = ["ease", "easeIn", "easeOut", "easeInOut"];

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [easing, setEasing] = React.useState("ease");

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {easings.map((value) => (
        <Button
          key={value}
          variant={easing === value ? "solid" : "bordered"}
          color="primary"
          onPress={() => {
            setEasing(value);
            setOpen(true);
          }}
        >
          {value}
        </Button>
      ))}

      <Backdrop
        isOpen={open}
        onClose={() => setOpen(false)}
        animationType="zoom"
        animationDuration={0.35}
        easing={easing}
      >
        <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">{easing}</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            easing controls the CSS transition timing function.
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

export default Easing;
