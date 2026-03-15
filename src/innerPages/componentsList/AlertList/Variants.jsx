import React from "react";
import { Alert } from "oks-ui";
import { ShowCode } from "../../../components";

const Variants = () => {
  return (
    <ShowCode
      title="Variants"
      preview={
        <div className="flex flex-col gap-3">
          <Alert variant="flat" title="Flat" description="Default variant" />
          <Alert variant="solid" title="Solid" description="Solid variant" />
          <Alert
            variant="bordered"
            title="Bordered"
            description="Bordered variant"
          />
          <Alert variant="faded" title="Faded" description="Faded variant" />
        </div>
      }
      code={
        <>
          {`import { Alert } from "oks-ui";

<Alert variant="flat" title="Flat" description="Default variant" />
<Alert variant="solid" title="Solid" description="Solid variant" />
<Alert variant="bordered" title="Bordered" description="Bordered variant" />
<Alert variant="faded" title="Faded" description="Faded variant" />`}
        </>
      }
    />
  );
};

export default Variants;
