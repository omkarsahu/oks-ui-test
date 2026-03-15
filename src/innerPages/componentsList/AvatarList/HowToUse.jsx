import React from "react";
import { ShowCode } from "../../../components";
import { Avatar } from "oks-ui";

const HowToUse = () => {
  return (
    <ShowCode
      title="How to usage"
      preview={
        <>
          <div className="flex gap-3 items-center">
            <Avatar name="Omkar Sahu" />
            <Avatar src="https://i.pravatar.cc/150?img=5" />
            <Avatar name="Manav" />
          </div>
        </>
      }
      code={
        <>
          {`import { Avatar } from "oks-ui";
            
            <Avatar name="Omkar Sahu" />
            <Avatar src="https://i.pravatar.cc/150?img=5" />
            <Avatar name="Manav" />`}
        </>
      }
    />
  );
};

export default HowToUse;
