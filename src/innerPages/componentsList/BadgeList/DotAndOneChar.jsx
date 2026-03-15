import React from "react";
import { Badge } from "oks-ui";
import { ShowCode } from "../../../components";

const DotAndOneChar = () => {
  return (
    <ShowCode
      title="Dot and one-character"
      preview={
        <div className="flex gap-8 items-center flex-wrap">
          <Badge content="9" isOneChar aria-label="9 items">
            <span className="px-3 py-2 rounded-md border">isOneChar</span>
          </Badge>
          <Badge isDot shape="circle" aria-label="Has updates">
            <span className="px-3 py-2 rounded-md border">dot</span>
          </Badge>
        </div>
      }
      code={
        <>
          {`import { Badge } from "oks-ui";

<Badge content="9" isOneChar>...</Badge>
<Badge isDot shape="circle">...</Badge>`}
        </>
      }
    />
  );
};

export default DotAndOneChar;
