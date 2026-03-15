import React from "react";
import { Button, Tooltip } from "oks-ui";
import { ShowCode } from "../../../components";

const Colors = () => {
  return (
    <ShowCode
      title="Colors"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Tooltip content="Default" color="default" showArrow>
            <Button variant="bordered">default</Button>
          </Tooltip>
          <Tooltip content="Primary" color="primary" showArrow>
            <Button color="primary">primary</Button>
          </Tooltip>
          <Tooltip content="Secondary" color="secondary" showArrow>
            <Button color="secondary">secondary</Button>
          </Tooltip>
          <Tooltip content="Info" color="info" showArrow>
            <Button variant="bordered">info</Button>
          </Tooltip>
          <Tooltip content="Success" color="success" showArrow>
            <Button color="success">success</Button>
          </Tooltip>
          <Tooltip content="Warning" color="warning" showArrow>
            <Button color="warning">warning</Button>
          </Tooltip>
          <Tooltip content="Danger" color="danger" showArrow>
            <Button color="danger">danger</Button>
          </Tooltip>
        </div>
      }
      code={
        <>
          {`<Tooltip content="Primary" color="primary" showArrow>...</Tooltip>
<Tooltip content="Success" color="success" showArrow>...</Tooltip>`}
        </>
      }
    />
  );
};

export default Colors;
