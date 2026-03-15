import React from "react";
import { Button, addToast } from "oks-ui";
import { ShowCode } from "../../../components";

function fakeRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.4) resolve(true);
      else reject(new Error("Failed"));
    }, 900);
  });
}

const AddToastPromise = () => {
  return (
    <ShowCode
      title="addToast with promise"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            onPress={() =>
              addToast({
                description: "Saving…",
                promise: fakeRequest(),
                loadingComponent: <span className="text-sm">⏳</span>,
              })
            }
          >
            Save demo
          </Button>
        </div>
      }
      code={
        <>
          {`addToast({ description: "Saving…", promise, loadingComponent: <span>⏳</span> });`}
        </>
      }
    />
  );
};

export default AddToastPromise;
