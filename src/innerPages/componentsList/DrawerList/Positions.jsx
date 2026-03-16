import React from "react";
import { Button, Drawer } from "oks-ui";
import { ShowCode } from "../../../components";

const positions = ["left", "right", "top", "bottom"];

const Positions = () => {
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState("right");

  return (
    <ShowCode
      title="Positions"
      preview={
        <div className="flex items-center gap-3 flex-wrap">
          {positions.map((p) => (
            <Button
              key={p}
              color="primary"
              variant={position === p ? "solid" : "bordered"}
              onPress={() => {
                setPosition(p);
                setOpen(true);
              }}
            >
              {p}
            </Button>
          ))}

          <Drawer
            isOpen={open}
            onClose={() => setOpen(false)}
            position={position}
            title={`Position: ${position}`}
          >
            <div className="text-sm text-gray-600">
              Drawer slides based on the selected position.
            </div>
          </Drawer>
        </div>
      }
      code={
        <>
          {`<Drawer
  isOpen={open}
  onClose={() => setOpen(false)}
  position="left"
  title="Left drawer"
>
  Content
</Drawer>`}
        </>
      }
    />
  );
};

export default Positions;
