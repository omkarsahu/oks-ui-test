import React, { useState } from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const Animation = () => {
  const [disableAnimation, setDisableAnimation] = useState(false);

  return (
    <ShowCode
      title="Animation"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            variant="bordered"
            onPress={() => setDisableAnimation((v) => !v)}
          >
            disableAnimation: {String(disableAnimation)}
          </Button>
          <Tooltip
            content="Hover me"
            disableAnimation={disableAnimation}
            showArrow
          >
            <Button>Trigger</Button>
          </Tooltip>
        </div>
      }
      code={`import React from "react";
import { Button, Tooltip } from "oks-ui";

export default function Example() {
  const [disableAnimation, setDisableAnimation] = React.useState(false);

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <Button variant="bordered" onPress={() => setDisableAnimation((v) => !v)}>
        disableAnimation: {String(disableAnimation)}
      </Button>

      <Tooltip content="Hover me" disableAnimation={disableAnimation} showArrow>
        <Button>Trigger</Button>
      </Tooltip>
    </div>
  );
}`}
    />
  );
};

export default Animation;
