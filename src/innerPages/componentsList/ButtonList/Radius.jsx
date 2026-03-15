import React from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const Radius = () => {
  return (
    <ShowCode
      title="Radius"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button radius="none">None</Button>
          <Button radius="sm">SM</Button>
          <Button radius="md">MD</Button>
          <Button radius="lg">LG</Button>
          <Button radius="full">Full</Button>
        </div>
      }
      code={
        <>
          {`<Button radius="none">None</Button>
<Button radius="sm">SM</Button>
<Button radius="md">MD</Button>
<Button radius="lg">LG</Button>
<Button radius="full">Full</Button>`}
        </>
      }
    />
  );
};

export default Radius;
