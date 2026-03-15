import React from "react";
import { Chip } from "oks-ui";
import { ShowCode } from "../../../components";

const StartEndContent = () => {
  return (
    <ShowCode
      title="Start & end content"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Chip startContent={<span aria-hidden="true">★</span>}>Start</Chip>
          <Chip endContent={<span aria-hidden="true">→</span>}>End</Chip>
          <Chip
            startContent={<span aria-hidden="true">★</span>}
            endContent={<span aria-hidden="true">→</span>}
          >
            Both
          </Chip>
        </div>
      }
      code={
        <>
          {`import { Chip } from "oks-ui";

<Chip startContent={<span aria-hidden="true">★</span>}>Start</Chip>
<Chip endContent={<span aria-hidden="true">→</span>}>End</Chip>
<Chip
  startContent={<span aria-hidden="true">★</span>}
  endContent={<span aria-hidden="true">→</span>}
>
  Both
</Chip>`}
        </>
      }
    />
  );
};

export default StartEndContent;
