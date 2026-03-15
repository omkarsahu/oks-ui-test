import React from "react";
import { Chip } from "oks-ui";
import { ShowCode } from "../../../components";

const Disabled = () => {
  return (
    <ShowCode
      title="Disabled"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Chip isDisabled>Disabled</Chip>
          <Chip isDisabled onClose={() => {}}>
            Disabled close
          </Chip>
        </div>
      }
      code={
        <>
          {`import { Chip } from "oks-ui";

<Chip isDisabled>Disabled</Chip>
<Chip isDisabled onClose={() => {}}>Disabled close</Chip>`}
        </>
      }
    />
  );
};

export default Disabled;
