import React from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const Disabled = () => {
  return (
    <ShowCode
      title="Disabled"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip content="You won't see this" isDisabled>
            <Button variant="bordered">Disabled tooltip</Button>
          </Tooltip>
          <Tooltip content="Disabled tooltip" isDisabled showArrow>
            <Button color="danger">Danger</Button>
          </Tooltip>
        </div>
      }
      code={`import React from "react";
import { Button, Tooltip } from "oks-ui";

export default function Example() {
  return (
    <div className="flex gap-3 items-center flex-wrap">
      <Tooltip content="You won't see this" isDisabled>
        <Button variant="bordered">Disabled tooltip</Button>
      </Tooltip>

      <Tooltip content="Disabled tooltip" isDisabled showArrow>
        <Button color="danger">Danger</Button>
      </Tooltip>
    </div>
  );
}`}
    />
  );
};

export default Disabled;
