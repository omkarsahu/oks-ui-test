import React from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const Sizes = () => {
  return (
    <ShowCode
      title="Sizes"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip content="Small" size="sm">
            <Button variant="bordered">sm</Button>
          </Tooltip>
          <Tooltip content="Medium" size="md">
            <Button variant="bordered">md</Button>
          </Tooltip>
          <Tooltip content="Large" size="lg">
            <Button variant="bordered">lg</Button>
          </Tooltip>
        </div>
      }
      code={
        <>
          {`<Tooltip content="Small" size="sm">...</Tooltip>
<Tooltip content="Medium" size="md">...</Tooltip>
<Tooltip content="Large" size="lg">...</Tooltip>`}
        </>
      }
    />
  );
};

export default Sizes;
