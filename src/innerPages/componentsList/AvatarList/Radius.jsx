import React from "react";
import { ShowCode } from "../../../components";
import { Avatar } from "oks-ui";

const Radius = () => {
  return (
    <ShowCode
      title="Radius"
      preview={
        <>
          <div className="flex gap-3 items-center">
            <Avatar radius="none" />
            <Avatar radius="sm" />
            <Avatar radius="md" />
            <Avatar radius="lg" />
            <Avatar radius="full" />
          </div>
        </>
      }
      code={
        <>
          {`import { Avatar } from "oks-ui";
            
<Avatar radius="none" />
<Avatar radius="sm" />
<Avatar radius="md" />
<Avatar radius="lg" />
<Avatar radius="full" />`}
        </>
      }
    />
  );
};

export default Radius;
