import React from "react";
import { ShowCode } from "../../../components";
import { Avatar } from "oks-ui";

const Colors = () => {
  return (
    <ShowCode
      title="Colors"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Avatar name="Default" color="default" />
          <Avatar name="Primary" color="primary" />
          <Avatar name="Secondary" color="secondary" />
          <Avatar name="Info" color="info" />
          <Avatar name="Success" color="success" />
          <Avatar name="Warning" color="warning" />
          <Avatar name="Danger" color="danger" />
        </div>
      }
      code={
        <>
          {`import { Avatar } from "oks-ui";

<Avatar name="Default" color="default" />
<Avatar name="Primary" color="primary" />
<Avatar name="Secondary" color="secondary" />
<Avatar name="Info" color="info" />
<Avatar name="Success" color="success" />
<Avatar name="Warning" color="warning" />
<Avatar name="Danger" color="danger" />`}
        </>
      }
    />
  );
};

export default Colors;
