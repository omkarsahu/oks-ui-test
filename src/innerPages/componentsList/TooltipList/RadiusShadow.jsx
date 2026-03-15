import React from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const RadiusShadow = () => {
  return (
    <ShowCode
      title="Radius and shadow"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip content="radius=none" radius="none" showArrow>
            <Button variant="bordered">none</Button>
          </Tooltip>
          <Tooltip content="radius=full" radius="full" showArrow>
            <Button variant="bordered">full</Button>
          </Tooltip>
          <Tooltip content="shadow=none" shadow="none" showArrow>
            <Button variant="bordered">shadow none</Button>
          </Tooltip>
          <Tooltip content="shadow=lg" shadow="lg" showArrow>
            <Button variant="bordered">shadow lg</Button>
          </Tooltip>
        </div>
      }
      code={
        <>
          {`<Tooltip content="radius=full" radius="full" showArrow>...</Tooltip>
<Tooltip content="shadow=lg" shadow="lg" showArrow>...</Tooltip>`}
        </>
      }
    />
  );
};

export default RadiusShadow;
