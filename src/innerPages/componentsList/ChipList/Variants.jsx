import React from "react";
import { Chip } from "oks-ui";
import { ShowCode } from "../../../components";

const Variants = () => {
  return (
    <ShowCode
      title="Variants"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Chip variant="solid" color="primary">
            solid
          </Chip>
          <Chip variant="bordered" color="primary">
            bordered
          </Chip>
          <Chip variant="light" color="primary">
            light
          </Chip>
          <Chip variant="flat" color="primary">
            flat
          </Chip>
          <Chip variant="faded" color="primary">
            faded
          </Chip>
          <Chip variant="shadow" color="primary">
            shadow
          </Chip>
          <Chip variant="dot" color="primary">
            dot
          </Chip>
        </div>
      }
      code={
        <>
          {`import { Chip } from "oks-ui";

<Chip variant="solid" color="primary">solid</Chip>
<Chip variant="bordered" color="primary">bordered</Chip>
<Chip variant="light" color="primary">light</Chip>
<Chip variant="flat" color="primary">flat</Chip>
<Chip variant="faded" color="primary">faded</Chip>
<Chip variant="shadow" color="primary">shadow</Chip>
<Chip variant="dot" color="primary">dot</Chip>`}
        </>
      }
    />
  );
};

export default Variants;
