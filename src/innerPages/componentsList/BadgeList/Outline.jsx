import React from "react";
import { Badge } from "oks-ui";
import { ShowCode } from "../../../components";

const Outline = () => {
  return (
    <ShowCode
      title="Outline"
      preview={
        <div className="flex gap-8 items-center flex-wrap">
          <Badge content={2} aria-label="2 items">
            <span className="px-3 py-2 rounded-md border">showOutline</span>
          </Badge>
          <Badge content={2} showOutline={false} aria-label="2 items">
            <span className="px-3 py-2 rounded-md border">
              showOutline=false
            </span>
          </Badge>
          <Badge content={2} disableOutline aria-label="2 items">
            <span className="px-3 py-2 rounded-md border">disableOutline</span>
          </Badge>
        </div>
      }
      code={
        <>
          {`import { Badge } from "oks-ui";

<Badge content={2}>...</Badge>
<Badge content={2} showOutline={false}>...</Badge>
<Badge content={2} disableOutline>...</Badge>`}
        </>
      }
    />
  );
};

export default Outline;
