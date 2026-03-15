import React from "react";
import { Alert } from "oks-ui";
import { ShowCode } from "../../../components";

const ClassNames = () => {
  return (
    <ShowCode
      title="ClassNames"
      preview={
        <div className="flex flex-col gap-3">
          <Alert
            title="Custom slots"
            description="Uses classNames slots to style parts."
            classNames={{
              base: "ring-2 ring-purple-400/60",
              title: "text-purple-900",
              description: "text-purple-900/80",
              iconWrapper: "text-purple-900",
              closeButton: "text-purple-900",
            }}
            isClosable
            color="secondary"
            variant="flat"
          />
        </div>
      }
      code={
        <>
          {`import { Alert } from "oks-ui";

<Alert
  title="Custom slots"
  description="Uses classNames slots to style parts."
  isClosable
  color="secondary"
  variant="flat"
  classNames={{
    base: "ring-2 ring-purple-400/60",
    title: "text-purple-900",
    description: "text-purple-900/80",
    iconWrapper: "text-purple-900",
    closeButton: "text-purple-900",
  }}
/>`}
        </>
      }
    />
  );
};

export default ClassNames;
