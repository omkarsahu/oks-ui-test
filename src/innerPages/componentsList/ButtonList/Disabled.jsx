import React from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const Disabled = () => {
  return (
    <ShowCode
      title="Disabled"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button isDisabled>Disabled</Button>
          <Button color="primary" isDisabled>
            Primary Disabled
          </Button>
        </div>
      }
      code={
        <>
          {`<Button isDisabled>Disabled</Button>
<Button color="primary" isDisabled>
  Primary Disabled
</Button>`}
        </>
      }
    />
  );
};

export default Disabled;
