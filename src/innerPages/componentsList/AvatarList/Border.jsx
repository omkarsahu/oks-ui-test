import React from "react";
import { Avatar } from "oks-ui";
import { ShowCode } from "../../../components";

const Border = () => {
  return (
    <ShowCode
      title="Border"
      preview={
        <>
          <div className="flex gap-3 items-center">
            <Avatar isBordered name="Omkar Sahu" />
            <Avatar isBordered src="https://i.pravatar.cc/150?img=5" />
            <Avatar isBordered name="Manav" />
          </div>
        </>
      }
      code={
        <>
          {`import { Avatar } from "oks-ui";
                
    <Avatar isBordered name="Omkar Sahu" />
    <Avatar isBordered src="https://i.pravatar.cc/150?img=5" />
    <Avatar isBordered name="Manav" />`}
        </>
      }
    />
  );
};

export default Border;
