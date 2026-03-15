import React from "react";
import { Chip } from "oks-ui";
import { ShowCode } from "../../../components";

const HowToUse = () => {
  return (
    <ShowCode
      title="How to usage"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Chip>Chip</Chip>
          <Chip variant="bordered">Bordered</Chip>
        </div>
      }
      code={
        <>
          {`import { Chip } from "oks-ui";

<Chip>Chip</Chip>
<Chip variant="bordered">Bordered</Chip>`}
        </>
      }
    />
  );
};

export default HowToUse;
