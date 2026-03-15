import React from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

const Icons = () => {
  return (
    <ShowCode
      title="Icons and close button"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            variant="bordered"
            onPress={() =>
              toast({
                description: "No icon",
                hideIcon: true,
              })
            }
          >
            hideIcon
          </Button>
          <Button
            variant="bordered"
            onPress={() =>
              toast({
                description: "No close button",
                hideCloseButton: true,
              })
            }
          >
            hideCloseButton
          </Button>
          <Button
            variant="bordered"
            onPress={() =>
              toast({
                description: "Custom close icon",
                closeIcon: <span aria-hidden="true">×</span>,
              })
            }
          >
            closeIcon
          </Button>
        </div>
      }
      code={
        <>
          {`toast({ description: "No icon", hideIcon: true });
toast({ description: "No close button", hideCloseButton: true });
toast({ description: "Custom close icon", closeIcon: <span aria-hidden="true">×</span> });`}
        </>
      }
    />
  );
};

export default Icons;
