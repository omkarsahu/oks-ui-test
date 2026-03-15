import React, { useState } from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const DefaultOpen = () => {
  const [closed, setClosed] = useState(0);

  return (
    <ShowCode
      title="Default open / onClose"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip
            content="I start open"
            defaultOpen
            onClose={() => setClosed((v) => v + 1)}
            showArrow
          >
            <Button variant="bordered">Focus / hover</Button>
          </Tooltip>
          <div className="text-sm">Closed count: {closed}</div>
        </div>
      }
      code={
        <>
          {`<Tooltip content="..." defaultOpen onClose={() => {}}>...</Tooltip>`}
        </>
      }
    />
  );
};

export default DefaultOpen;
