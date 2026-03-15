import React from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const Arrow = () => {
  return (
    <ShowCode
      title="Arrow"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip content="With arrow" showArrow>
            <Button variant="bordered">Hover me</Button>
          </Tooltip>
          <Tooltip content="Primary" showArrow color="primary">
            <Button color="primary">Primary</Button>
          </Tooltip>
        </div>
      }
      code={
        <>
          {`<Tooltip content="With arrow" showArrow>
  <button type="button">Hover me</button>
</Tooltip>`}
        </>
      }
    />
  );
};

export default Arrow;
