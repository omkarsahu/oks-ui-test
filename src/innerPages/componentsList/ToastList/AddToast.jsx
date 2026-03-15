import React from "react";
import { Button, addToast } from "oks-ui";
import { ShowCode } from "../../../components";

const AddToast = () => {
  return (
    <ShowCode
      title="addToast (HeroUI-style)"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            onPress={() =>
              addToast({
                title: "Saved",
                description: "Your changes have been saved.",
                color: "success",
              })
            }
          >
            Success
          </Button>
          <Button
            variant="bordered"
            onPress={() =>
              addToast({
                title: "Network",
                description: "Something went wrong.",
                color: "danger",
              })
            }
          >
            Error
          </Button>
        </div>
      }
      code={
        <>
          {`import { addToast } from "oks-ui";

addToast({ title: "Saved", description: "Your changes have been saved.", color: "success" });`}
        </>
      }
    />
  );
};

export default AddToast;
