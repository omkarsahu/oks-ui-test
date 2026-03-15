import React from "react";
import { Badge } from "oks-ui";
import { ShowCode } from "../../../components";

const Placements = () => {
  return (
    <ShowCode
      title="Placements"
      preview={
        <div className="flex gap-8 items-center flex-wrap">
          <Badge content={1} placement="top-left" aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">top-left</span>
          </Badge>
          <Badge content={1} placement="top-right" aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">top-right</span>
          </Badge>
          <Badge content={1} placement="bottom-left" aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">bottom-left</span>
          </Badge>
          <Badge content={1} placement="bottom-right" aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">bottom-right</span>
          </Badge>
        </div>
      }
      code={
        <>
          {`import { Badge } from "oks-ui";

<Badge content={1} placement="top-left">...</Badge>
<Badge content={1} placement="top-right">...</Badge>
<Badge content={1} placement="bottom-left">...</Badge>
<Badge content={1} placement="bottom-right">...</Badge>`}
        </>
      }
    />
  );
};

export default Placements;
