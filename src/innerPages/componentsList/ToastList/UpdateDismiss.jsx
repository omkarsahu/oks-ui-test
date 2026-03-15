import React from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

const UpdateDismiss = () => {
  return (
    <ShowCode
      title="Update and dismiss"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            onPress={() => {
              const id = toast("Uploading...", {
                type: "loading",
                persistent: true,
                dismissible: false,
              });

              setTimeout(() => {
                toast.update(id, {
                  type: "success",
                  message: "Uploaded",
                  persistent: false,
                });
              }, 900);
            }}
          >
            Upload demo
          </Button>
          <Button variant="bordered" onPress={() => toast.dismissAll()}>
            Dismiss all
          </Button>
        </div>
      }
      code={
        <>
          {`const id = toast("Uploading...", { type: "loading", persistent: true, dismissible: false });
toast.update(id, { type: "success", message: "Uploaded", persistent: false });
toast.dismiss(id);
toast.dismissAll();`}
        </>
      }
    />
  );
};

export default UpdateDismiss;
