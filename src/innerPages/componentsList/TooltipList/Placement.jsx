import React from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const Placement = () => {
  return (
    <ShowCode
      title="Placement"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip content="Top start" placement="top-start">
            <Button variant="bordered">Top-start</Button>
          </Tooltip>
          <Tooltip content="Right" placement="right" offset={10}>
            <Button variant="bordered">Right (offset)</Button>
          </Tooltip>
          <Tooltip
            content="Bottom end"
            placement="bottom-end"
            containerPadding={20}
          >
            <Button variant="bordered">Bottom-end</Button>
          </Tooltip>
        </div>
      }
      code={
        <>
          {`<Tooltip content="Top start" placement="top-start">
  <button type="button">Top-start</button>
</Tooltip>

<Tooltip content="Right" placement="right" offset={10}>
  <button type="button">Right</button>
</Tooltip>`}
        </>
      }
    />
  );
};

export default Placement;
