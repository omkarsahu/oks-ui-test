import React from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const AdvancedPositioning = () => {
  return (
    <ShowCode
      title="Advanced positioning"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip
            content="crossOffset=16"
            placement="top"
            crossOffset={16}
            showArrow
          >
            <Button variant="bordered">crossOffset</Button>
          </Tooltip>
          <Tooltip
            content="Close on outside click only"
            isDismissable
            shouldCloseOnInteractOutside={(el) => el.tagName !== "BUTTON"}
            showArrow
          >
            <Button variant="bordered">Interact outside</Button>
          </Tooltip>
        </div>
      }
      code={
        <>
          {`<Tooltip content="crossOffset=16" crossOffset={16} showArrow>...</Tooltip>
<Tooltip
  content="Close on outside click only"
  isDismissable
  shouldCloseOnInteractOutside={(el) => el.tagName !== "BUTTON"}
>...</Tooltip>`}
        </>
      }
    />
  );
};

export default AdvancedPositioning;
