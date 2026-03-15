import React from "react";
import { Badge } from "oks-ui";
import { ShowCode } from "../../../components";

const ClassNames = () => {
  return (
    <ShowCode
      title="Slot styling (classNames)"
      preview={
        <div className="flex gap-6 items-center flex-wrap">
          <Badge
            content={12}
            color="success"
            aria-label="12 items"
            classNames={{
              base: "ring-1 ring-green-400/50 rounded-md",
              badge: "bg-green-600 text-white",
            }}
          >
            <button type="button" className="px-3 py-2 rounded-md border">
              Custom slots
            </button>
          </Badge>
        </div>
      }
      code={
        <>
          {`import { Badge } from "oks-ui";

<Badge
  content={12}
  color="success"
  aria-label="12 items"
  classNames={{
    base: "ring-1 ring-green-400/50 rounded-md",
    badge: "bg-green-600 text-white",
  }}
>
  <button type="button">Custom slots</button>
</Badge>`}
        </>
      }
    />
  );
};

export default ClassNames;
