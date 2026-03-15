import React from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const WithIcons = () => {
  return (
    <ShowCode
      title="With icons"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button startContent={<span aria-hidden="true">←</span>}>Back</Button>
          <Button endContent={<span aria-hidden="true">→</span>}>Next</Button>
        </div>
      }
      code={
        <>
          {`<Button startContent={<span aria-hidden="true">←</span>}>Back</Button>
<Button endContent={<span aria-hidden="true">→</span>}>Next</Button>`}
        </>
      }
    />
  );
};

export default WithIcons;
