import React from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const IconOnly = () => {
  return (
    <ShowCode
      title="Icon only"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button isIconOnly aria-label="Settings">
            <span aria-hidden="true">⚙</span>
          </Button>
          <Button isIconOnly aria-label="Search" variant="bordered">
            <span aria-hidden="true">⌕</span>
          </Button>
        </div>
      }
      code={
        <>
          {`<Button isIconOnly aria-label="Settings">
  <span aria-hidden="true">⚙</span>
</Button>
<Button isIconOnly aria-label="Search" variant="bordered">
  <span aria-hidden="true">⌕</span>
</Button>`}
        </>
      }
    />
  );
};

export default IconOnly;
