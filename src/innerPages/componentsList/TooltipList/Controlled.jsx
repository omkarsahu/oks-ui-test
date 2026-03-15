import React, { useState } from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const Controlled = () => {
  const [open, setOpen] = useState(false);

  return (
    <ShowCode
      title="Controlled"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button onPress={() => setOpen((v) => !v)}>
            {open ? "Close tooltip" : "Open tooltip"}
          </Button>
          <Tooltip content="Hello" isOpen={open} onOpenChange={setOpen}>
            <Button variant="bordered">Hover / Focus</Button>
          </Tooltip>
        </div>
      }
      code={
        <>
          {`import { useState } from "react";
import { Tooltip } from "oks-ui";

const [open, setOpen] = useState(false);

<Tooltip content="Hello" isOpen={open} onOpenChange={setOpen}>
  <button type="button">Hover / Focus</button>
</Tooltip>`}
        </>
      }
    />
  );
};

export default Controlled;
