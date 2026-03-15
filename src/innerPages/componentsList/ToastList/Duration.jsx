import React, { useRef } from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

const Duration = () => {
  const lastId = useRef(null);

  return (
    <ShowCode
      title="Duration and progress"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            onPress={() => {
              lastId.current = toast("Auto dismiss (2s)", {
                timeout: 2000,
                shouldShowTimeoutProgress: true,
              });
            }}
          >
            timeout=2000
          </Button>
          <Button
            variant="bordered"
            onPress={() => {
              lastId.current = toast("Persistent (manual close)", {
                persistent: true,
                dismissible: true,
              });
            }}
          >
            persistent
          </Button>
          <Button
            variant="bordered"
            onPress={() => {
              if (typeof lastId.current === "number")
                toast.dismiss(lastId.current);
            }}
          >
            Dismiss last
          </Button>
        </div>
      }
      code={
        <>
          {`toast("Auto dismiss (2s)", { timeout: 2000, shouldShowTimeoutProgress: true });
toast("Persistent", { persistent: true, dismissible: true });`}
        </>
      }
    />
  );
};

export default Duration;
