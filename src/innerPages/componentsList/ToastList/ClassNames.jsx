import React from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

const ClassNames = () => {
  return (
    <ShowCode
      title="Class names"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            variant="bordered"
            onPress={() =>
              toast({
                title: "Custom styles",
                description: "Slots customized via classNames",
                classNames: {
                  base: "border border-blue-400",
                  title: "text-blue-300",
                  description: "text-blue-200",
                  progressIndicator: "bg-blue-400",
                },
                shouldShowTimeoutProgress: true,
                timeout: 3500,
              })
            }
          >
            Show toast
          </Button>
        </div>
      }
      code={
        <>
          {`toast({
  title: "Custom styles",
  description: "Slots customized via classNames",
  classNames: { base: "...", title: "...", description: "..." },
});`}
        </>
      }
    />
  );
};

export default ClassNames;
