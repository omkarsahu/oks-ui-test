import React from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const HowToUse = () => {
  return (
    <ShowCode
      title="How to usage"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button>Save</Button>
          <Button variant="bordered">Cancel</Button>
        </div>
      }
      code={
        <>
          {`import { Button } from "oks-ui";

<Button>Save</Button>
<Button variant="bordered">Cancel</Button>`}
        </>
      }
    />
  );
};

export default HowToUse;
