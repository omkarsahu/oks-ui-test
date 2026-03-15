import React from "react";
import { Alert } from "oks-ui";
import { ShowCode } from "../../../components";

const HowToUse = () => {
  return (
    <ShowCode
      title="How to usage"
      preview={
        <div className="flex flex-col gap-3">
          <Alert title="Heads up" description="Something happened." />
          <Alert title="Title only" />
        </div>
      }
      code={
        <>
          {`import { Alert } from "oks-ui";

<Alert title="Heads up" description="Something happened." />
<Alert title="Title only" />`}
        </>
      }
    />
  );
};

export default HowToUse;
