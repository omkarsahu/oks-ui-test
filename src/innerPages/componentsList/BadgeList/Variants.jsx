import React from "react";
import { Badge } from "oks-ui";
import { ShowCode } from "../../../components";

const Variants = () => {
  return (
    <>
      <ShowCode
        title="Variants"
        preview={
          <div className="flex gap-6 items-center flex-wrap">
            <Badge content={3} variant="solid" aria-label="3 items">
              <span className="px-3 py-2 rounded-md border bg-white text-black">
                solid
              </span>
            </Badge>
            <Badge content={3} variant="bordered" aria-label="3 items">
              <span className="px-3 py-2 rounded-md border bg-white text-black">
                bordered
              </span>
            </Badge>
            <Badge content={3} variant="light" aria-label="3 items">
              <span className="px-3 py-2 rounded-md border bg-white text-black">
                light
              </span>
            </Badge>
            <Badge content={3} variant="flat" aria-label="3 items">
              <span className="px-3 py-2 rounded-md border bg-white text-black">
                flat
              </span>
            </Badge>
            <Badge content={3} variant="faded" aria-label="3 items">
              <span className="px-3 py-2 rounded-md border bg-white text-black">
                faded
              </span>
            </Badge>
            <Badge content={3} variant="shadow" aria-label="3 items">
              <span className="px-3 py-2 rounded-md border bg-white text-black">
                shadow
              </span>
            </Badge>
            <Badge content={3} variant="ghost" aria-label="3 items">
              <span className="px-3 py-2 rounded-md border bg-white text-black">
                ghost
              </span>
            </Badge>
          </div>
        }
        code={
          <>
            {`import { Badge } from "oks-ui";

<Badge content={3} variant="solid">...</Badge>
<Badge content={3} variant="bordered">...</Badge>
<Badge content={3} variant="light">...</Badge>
<Badge content={3} variant="flat">...</Badge>
<Badge content={3} variant="faded">...</Badge>
<Badge content={3} variant="shadow">...</Badge>
<Badge content={3} variant="ghost">...</Badge>`}
          </>
        }
      />

      <ShowCode
        title="Max"
        preview={
          <div className="flex gap-6 items-center flex-wrap">
            <Badge content={9} max={9} aria-label="9 notifications">
              <span className="px-3 py-2 rounded-md border bg-white text-black">
                max=9
              </span>
            </Badge>
            <Badge content={10} max={9} aria-label="10 notifications">
              <span className="px-3 py-2 rounded-md border bg-white text-black">
                10 → 9+
              </span>
            </Badge>
            <Badge content={4890} max={999} aria-label="4890 notifications">
              <span className="px-3 py-2 rounded-md border bg-white text-black">
                4890 → 999+
              </span>
            </Badge>
          </div>
        }
        code={
          <>
            {`import { Badge } from "oks-ui";

<Badge content={9} max={9} aria-label="9 notifications">...</Badge>
<Badge content={10} max={9} aria-label="10 notifications">...</Badge>
<Badge content={4890} max={999} aria-label="4890 notifications">...</Badge>`}
          </>
        }
      />
    </>
  );
};

export default Variants;
