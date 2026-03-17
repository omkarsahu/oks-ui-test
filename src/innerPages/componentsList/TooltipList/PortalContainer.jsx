import React, { useState } from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const PortalContainer = () => {
  const [container, setContainer] = useState(null);

  return (
    <ShowCode
      title="Portal container"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <div
            className="relative border border-white/10 rounded-md p-3"
            ref={setContainer}
          >
            <div className="text-sm opacity-80">Custom container</div>
            <div className="mt-2">
              <Tooltip
                content="Portaled into the bordered box"
                portalContainer={container}
                showArrow
              >
                <Button variant="bordered">Hover</Button>
              </Tooltip>
            </div>
          </div>
        </div>
      }
      code={`import React from "react";
import { Button, Tooltip } from "oks-ui";

export default function Example() {
  const [container, setContainer] = React.useState(null);

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <div
        className="relative border border-white/10 rounded-md p-3"
        ref={setContainer}
      >
        <div className="text-sm opacity-80">Custom container</div>
        <div className="mt-2">
          <Tooltip
            content="Portaled into the bordered box"
            portalContainer={container}
            showArrow
          >
            <Button variant="bordered">Hover</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}`}
    />
  );
};

export default PortalContainer;
