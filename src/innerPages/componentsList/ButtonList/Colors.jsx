import React from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const Colors = () => {
  return (
    <ShowCode
      title="Colors"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button color="default">Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="info">Info</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
        </div>
      }
      code={
        <>
          {`<Button color="default">Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>`}
        </>
      }
    />
  );
};

export default Colors;
