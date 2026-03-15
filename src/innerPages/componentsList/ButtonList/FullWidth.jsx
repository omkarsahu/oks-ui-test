import React from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const FullWidth = () => {
  return (
    <ShowCode
      title="Full width"
      preview={
        <div className="flex flex-col gap-3">
          <div className="w-full max-w-sm">
            <Button fullWidth>Submit</Button>
          </div>
          <div className="flex gap-3 items-center w-full max-w-sm">
            <Button variant="bordered">Back</Button>
            <Button fullWidth>Continue</Button>
            <Button variant="bordered">Next</Button>
          </div>
        </div>
      }
      code={
        <>
          {`<Button fullWidth>Submit</Button>

<div style={{ display: "flex", gap: 8 }}>
  <Button>Back</Button>
  <Button fullWidth>Continue</Button>
  <Button>Next</Button>
</div>`}
        </>
      }
    />
  );
};

export default FullWidth;
