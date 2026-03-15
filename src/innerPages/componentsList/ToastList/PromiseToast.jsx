import React from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

function fakeSave() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.4) resolve(true);
      else reject(new Error("Failed"));
    }, 800);
  });
}

const PromiseToast = () => {
  return (
    <ShowCode
      title="Promise helper"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            onPress={() =>
              toast.promise(fakeSave(), {
                loading: {
                  message: "Saving...",
                  persistent: true,
                  dismissible: false,
                },
                success: () => ({
                  message: "Saved",
                  type: "success",
                  persistent: false,
                }),
                error: () => ({
                  message: "Failed",
                  type: "error",
                  persistent: false,
                }),
              })
            }
          >
            Save demo
          </Button>
        </div>
      }
      code={
        <>
          {`toast.promise(promise, {
  loading: { message: "Saving...", persistent: true, dismissible: false },
  success: () => ({ message: "Saved", type: "success", persistent: false }),
  error: () => ({ message: "Failed", type: "error", persistent: false }),
});`}
        </>
      }
    />
  );
};

export default PromiseToast;
