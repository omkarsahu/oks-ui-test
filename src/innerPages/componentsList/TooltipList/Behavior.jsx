import React from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const Behavior = () => {
  return (
    <ShowCode
      title="Behavior"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip
            content="No flip"
            placement="right"
            shouldFlip={false}
            containerPadding={0}
          >
            <Button variant="bordered">shouldFlip=false</Button>
          </Tooltip>
          <Tooltip content="Dismissable" isDismissable showArrow>
            <Button variant="bordered">isDismissable</Button>
          </Tooltip>
          <Tooltip content="No blur close" shouldCloseOnBlur={false} showArrow>
            <Button variant="bordered">shouldCloseOnBlur=false</Button>
          </Tooltip>
          <Tooltip content="Esc disabled" isKeyboardDismissDisabled showArrow>
            <Button variant="bordered">Esc disabled</Button>
          </Tooltip>
          <Tooltip content="Scale trigger" triggerScaleOnOpen showArrow>
            <Button variant="bordered">triggerScaleOnOpen</Button>
          </Tooltip>
        </div>
      }
      code={
        <>
          {`<Tooltip content="Dismissable" isDismissable showArrow>...</Tooltip>
<Tooltip content="Esc disabled" isKeyboardDismissDisabled showArrow>...</Tooltip>`}
        </>
      }
    />
  );
};

export default Behavior;
