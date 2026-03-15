import React from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const Variants = () => {
  return (
    <ShowCode
      title="Variants"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button variant="solid">Solid</Button>
          <Button variant="bordered">Bordered</Button>
          <Button variant="flat">Flat</Button>
          <Button variant="light">Light</Button>
          <Button variant="faded">Faded</Button>
          <Button variant="shadow">Shadow</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      }
      code={
        <>
          {`<Button variant="solid">Solid</Button>
<Button variant="bordered">Bordered</Button>
<Button variant="flat">Flat</Button>
<Button variant="light">Light</Button>
<Button variant="faded">Faded</Button>
<Button variant="shadow">Shadow</Button>
<Button variant="ghost">Ghost</Button>`}
        </>
      }
    />
  );
};

export default Variants;
