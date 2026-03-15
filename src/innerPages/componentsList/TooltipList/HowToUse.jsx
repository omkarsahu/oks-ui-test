import React from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const HowToUse = () => {
  return (
    <ShowCode
      title="How to usage"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip content="Hello" placement="top" delay={0}>
            <Button>Hover me</Button>
          </Tooltip>
          <Tooltip
            content="No delay"
            placement="right"
            delay={0}
            closeDelay={0}
          >
            <Button variant="bordered">Focus me</Button>
          </Tooltip>
        </div>
      }
      code={
        <>
          {`import { Tooltip } from "oks-ui";

<Tooltip content="Hello" placement="top" delay={0}>
  <button type="button">Hover me</button>
</Tooltip>`}
        </>
      }
    />
  );
};

export default HowToUse;
