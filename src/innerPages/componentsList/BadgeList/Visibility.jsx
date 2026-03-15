import React from "react";
import { Badge } from "oks-ui";
import { ShowCode } from "../../../components";

const Visibility = () => {
  return (
    <ShowCode
      title="Badge visibility"
      preview={
        <div className="flex gap-8 items-center flex-wrap">
          <Badge content={1} aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">visible</span>
          </Badge>
          <Badge content={1} isInvisible aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">isInvisible</span>
          </Badge>
        </div>
      }
      code={
        <>
          {`import { Badge } from "oks-ui";

<Badge content={1}>...</Badge>
<Badge content={1} isInvisible>...</Badge>`}
        </>
      }
    />
  );
};

export default Visibility;
