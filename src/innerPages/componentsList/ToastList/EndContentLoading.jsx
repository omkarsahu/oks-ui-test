import React from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

const EndContentLoading = () => {
  return (
    <ShowCode
      title="End content and loading component"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            variant="bordered"
            onPress={() =>
              toast({
                title: "Export ready",
                description: "Download your file",
                endContent: <span className="text-sm">⬇</span>,
              })
            }
          >
            endContent
          </Button>
          <Button
            onPress={() =>
              toast({
                type: "loading",
                message: "Uploading...",
                persistent: true,
                dismissible: false,
                loadingComponent: <span className="text-sm">⏳</span>,
              })
            }
          >
            loadingComponent
          </Button>
        </div>
      }
      code={
        <>
          {`toast({ title: "Export ready", endContent: <span>⬇</span> });
toast({ type: "loading", message: "Uploading...", loadingComponent: <span>⏳</span> });`}
        </>
      }
    />
  );
};

export default EndContentLoading;
