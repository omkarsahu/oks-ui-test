import React from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const ColorDepth = () => {
  return (
    <ShowCode
      title="Color depth"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip
            content="Depth 100"
            color="primary"
            colorDepth={100}
            showArrow
          >
            <Button variant="bordered">100</Button>
          </Tooltip>
          <Tooltip
            content="Depth 500"
            color="primary"
            colorDepth={500}
            showArrow
          >
            <Button variant="bordered">500</Button>
          </Tooltip>
          <Tooltip
            content="Depth 900"
            color="primary"
            colorDepth={900}
            showArrow
          >
            <Button variant="bordered">900</Button>
          </Tooltip>
        </div>
      }
      code={
        <>
          {`<Tooltip content="Depth 100" color="primary" colorDepth={100} showArrow>...</Tooltip>
<Tooltip content="Depth 900" color="primary" colorDepth={900} showArrow>...</Tooltip>`}
        </>
      }
    />
  );
};

export default ColorDepth;
