import React from "react";
import { ShowCode } from "../../../components";
import { Avatar } from "oks-ui";

const Sizes = () => {
  return (
    <ShowCode
      title="Sizes"
      preview={
        <>
          <div className="flex gap-3 items-center">
            <Avatar
              className="w-6 h-6 text-tiny"
              src="https://i.pravatar.cc/150?img=5"
            />
            <Avatar size="sm" src="https://i.pravatar.cc/150?img=5" />
            <Avatar size="md" src="https://i.pravatar.cc/150?img=5" />
            <Avatar size="lg" src="https://i.pravatar.cc/150?img=5" />
            <Avatar
              className="w-20 h-20 text-large"
              src="https://i.pravatar.cc/150?img=5"
            />
          </div>
        </>
      }
      code={
        <>
          {`import { Avatar } from "oks-ui";
            
<Avatar className="w-6 h-6 text-tiny" name="Omkar Sahu" />
<Avatar size="sm" src="https://i.pravatar.cc/150?img=5" />
<Avatar size="md" src="https://i.pravatar.cc/150?img=5" />
<Avatar size="lg" src="https://i.pravatar.cc/150?img=5" />
<Avatar className="w-20 h-20 text-large" src="https://i.pravatar.cc/150?img=5" />`}
        </>
      }
    />
  );
};

export default Sizes;
