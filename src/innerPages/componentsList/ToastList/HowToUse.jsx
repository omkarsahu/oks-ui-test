import React from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

const HowToUse = () => {
  return (
    <ShowCode
      title="How to usage"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button onPress={() => toast("Saved")}>Simple</Button>
          <Button
            variant="bordered"
            onPress={() =>
              toast({
                title: "Saved",
                message: "Profile updated",
                type: "success",
              })
            }
          >
            With title
          </Button>
        </div>
      }
      code={
        <>
          {`import { toast } from "oks-ui";

toast("Saved");
toast({ title: "Saved", message: "Profile updated", type: "success" });`}
        </>
      }
    />
  );
};

export default HowToUse;
