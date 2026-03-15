import React from "react";
import { Chip } from "oks-ui";
import { ShowCode } from "../../../components";

const ColorDepth = () => {
  return (
    <ShowCode
      title="Color depth"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Chip color="primary" colorDepth={300}>
            300
          </Chip>
          <Chip color="primary" colorDepth={500}>
            500
          </Chip>
          <Chip color="primary" colorDepth={700}>
            700
          </Chip>
        </div>
      }
      code={
        <>
          {`import { Chip } from "oks-ui";

<Chip color="primary" colorDepth={300}>300</Chip>
<Chip color="primary" colorDepth={500}>500</Chip>
<Chip color="primary" colorDepth={700}>700</Chip>`}
        </>
      }
    />
  );
};

export default ColorDepth;
