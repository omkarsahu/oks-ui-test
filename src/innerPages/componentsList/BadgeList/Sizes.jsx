import React from "react";
import { Badge } from "oks-ui";
import { ShowCode } from "../../../components";

const Sizes = () => {
  return (
    <ShowCode
      title="Sizes"
      preview={
        <div className="flex gap-8 items-center flex-wrap">
          <Badge content={7} size="sm" aria-label="7 items">
            <span className="px-3 py-2 rounded-md border">sm</span>
          </Badge>
          <Badge content={7} size="md" aria-label="7 items">
            <span className="px-3 py-2 rounded-md border">md</span>
          </Badge>
          <Badge content={7} size="lg" aria-label="7 items">
            <span className="px-3 py-2 rounded-md border">lg</span>
          </Badge>
        </div>
      }
      code={
        <>
          {`import { Badge } from "oks-ui";

<Badge content={7} size="sm">...</Badge>
<Badge content={7} size="md">...</Badge>
<Badge content={7} size="lg">...</Badge>`}
        </>
      }
    />
  );
};

export default Sizes;
