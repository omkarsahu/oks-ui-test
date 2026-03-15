import React from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const ClassNames = () => {
  return (
    <ShowCode
      title="Class names"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip
            content="Custom slot classes"
            showArrow
            classNames={{
              content: "border border-red-400",
              arrow: "text-red-400",
            }}
          >
            <Button variant="bordered">Hover me</Button>
          </Tooltip>
        </div>
      }
      code={
        <>
          {`<Tooltip
  content="Custom slot classes"
  showArrow
  classNames={{
    content: "border border-red-400",
    arrow: "text-red-400",
  }}
>
  <button type="button">Hover me</button>
</Tooltip>`}
        </>
      }
    />
  );
};

export default ClassNames;
