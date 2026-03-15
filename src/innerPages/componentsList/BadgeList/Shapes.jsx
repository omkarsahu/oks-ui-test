import React from "react";
import { Badge } from "oks-ui";
import { ShowCode } from "../../../components";

const Shapes = () => {
  return (
    <ShowCode
      title="Shapes"
      preview={
        <div className="flex gap-8 items-center flex-wrap">
          <Badge content={9} shape="rectangle" aria-label="9 items">
            <span className="px-3 py-2 rounded-md border">rectangle</span>
          </Badge>
          <Badge content={9} shape="circle" aria-label="9 items">
            <span className="px-3 py-2 rounded-md border">circle</span>
          </Badge>
        </div>
      }
      code={
        <>
          {`import { Badge } from "oks-ui";

<Badge content={9} shape="rectangle">...</Badge>
<Badge content={9} shape="circle">...</Badge>`}
        </>
      }
    />
  );
};

export default Shapes;
