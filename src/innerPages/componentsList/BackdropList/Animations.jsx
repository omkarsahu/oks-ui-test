import React from "react";
import { Backdrop, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const animationTypes = [
  "fade",
  "zoom",
  "slideUp",
  "slideDown",
  "slideLeft",
  "slideRight",
];

const Animations = () => {
  const [open, setOpen] = React.useState(false);
  const [animationType, setAnimationType] = React.useState("fade");

  return (
    <ShowCode
      title="Animation types"
      preview={
        <div className="flex items-center gap-3 flex-wrap">
          {animationTypes.map((type) => (
            <Button
              key={type}
              variant={animationType === type ? "solid" : "bordered"}
              color="primary"
              onPress={() => {
                setAnimationType(type);
                setOpen(true);
              }}
            >
              {type}
            </Button>
          ))}

          <Backdrop
            isOpen={open}
            onClose={() => setOpen(false)}
            animationType={animationType}
            animationDuration={0.25}
          >
            <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-semibold">{animationType}</div>
                <Button
                  size="sm"
                  variant="bordered"
                  onPress={() => setOpen(false)}
                >
                  Close
                </Button>
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
  animationType="zoom"
  animationDuration={0.25}
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

export default Animations;
