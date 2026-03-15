import React from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

const Placement = () => {
  return (
    <ShowCode
      title="Placement"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            variant="bordered"
            onPress={() => toast("Top left", { position: "top-left" })}
          >
            Top-left
          </Button>
          <Button
            variant="bordered"
            onPress={() => toast("Top center", { position: "top-center" })}
          >
            Top-center
          </Button>
          <Button
            variant="bordered"
            onPress={() =>
              toast("Bottom center", { position: "bottom-center" })
            }
          >
            Bottom-center
          </Button>
        </div>
      }
      code={
        <>
          {`toast("Top left", { position: "top-left" });
toast("Top center", { position: "top-center" });
toast("Bottom center", { position: "bottom-center" });`}
        </>
      }
    />
  );
};

export default Placement;
