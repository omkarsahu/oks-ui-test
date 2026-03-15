import React from "react";
import { Badge } from "oks-ui";
import { ShowCode } from "../../../components";

const Colors = () => {
  return (
    <ShowCode
      title="Colors"
      preview={
        <div className="flex gap-6 items-center flex-wrap">
          <Badge content={1} color="default" aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">default</span>
          </Badge>
          <Badge content={1} color="primary" aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">primary</span>
          </Badge>
          <Badge content={1} color="secondary" aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">secondary</span>
          </Badge>
          <Badge content={1} color="info" aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">info</span>
          </Badge>
          <Badge content={1} color="success" aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">success</span>
          </Badge>
          <Badge content={1} color="warning" aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">warning</span>
          </Badge>
          <Badge content={1} color="danger" aria-label="1 item">
            <span className="px-3 py-2 rounded-md border">danger</span>
          </Badge>
        </div>
      }
      code={
        <>
          {`import { Badge } from "oks-ui";

<Badge content={1} color="default">...</Badge>
<Badge content={1} color="primary">...</Badge>
<Badge content={1} color="secondary">...</Badge>
<Badge content={1} color="success">...</Badge>
<Badge content={1} color="warning">...</Badge>
<Badge content={1} color="danger">...</Badge>`}
        </>
      }
    />
  );
};

export default Colors;
