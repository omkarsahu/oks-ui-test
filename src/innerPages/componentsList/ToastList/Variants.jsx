import React from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

const Variants = () => {
  return (
    <ShowCode
      title="Variants"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            variant="bordered"
            onPress={() =>
              toast("Solid", { variant: "solid", color: "primary" })
            }
          >
            Solid
          </Button>
          <Button
            variant="bordered"
            onPress={() =>
              toast("Soft", { variant: "soft", color: "secondary" })
            }
          >
            Soft
          </Button>
          <Button
            variant="bordered"
            onPress={() =>
              toast("Outline", { variant: "outline", color: "warning" })
            }
          >
            Outline
          </Button>
        </div>
      }
      code={
        <>
          {`toast("Solid", { variant: "solid", color: "primary" });
toast("Soft", { variant: "soft", color: "secondary" });
toast("Outline", { variant: "outline", color: "warning" });`}
        </>
      }
    />
  );
};

export default Variants;
