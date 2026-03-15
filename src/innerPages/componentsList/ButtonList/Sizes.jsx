import React from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const Sizes = () => {
  return (
    <ShowCode
      title="Sizes"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      }
      code={
        <>
          {`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        </>
      }
    />
  );
};

export default Sizes;
