import React from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const Delays = () => {
  return (
    <ShowCode
      title="Delay and closeDelay"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip content="delay=0" delay={0}>
            <Button variant="bordered">delay 0</Button>
          </Tooltip>
          <Tooltip content="delay=600" delay={600}>
            <Button variant="bordered">delay 600</Button>
          </Tooltip>
          <Tooltip content="closeDelay=0" closeDelay={0}>
            <Button variant="bordered">close 0</Button>
          </Tooltip>
          <Tooltip content="closeDelay=1500" closeDelay={1500}>
            <Button variant="bordered">close 1500</Button>
          </Tooltip>
        </div>
      }
      code={
        <>
          {`<Tooltip content="delay=600" delay={600}>...</Tooltip>
<Tooltip content="closeDelay=1500" closeDelay={1500}>...</Tooltip>`}
        </>
      }
    />
  );
};

export default Delays;
