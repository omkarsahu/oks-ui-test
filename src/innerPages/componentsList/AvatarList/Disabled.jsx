import React from "react";
import { Avatar } from "oks-ui";
import { ShowCode } from "../../../components";

const Disabled = () => {
  return (
    <ShowCode
      title="Disabled"
      preview={
        <>
          <div className="flex gap-3 items-center">
            <Avatar isDisabled name="Omkar Sahu" />
            <Avatar isDisabled src="https://i.pravatar.cc/150?img=5" />
            <Avatar isDisabled name="Manav" />
          </div>
        </>
      }
      code={
        <>
          {`import { Avatar } from "oks-ui";
            
<Avatar isDisabled name="Omkar Sahu" />
<Avatar isDisabled src="https://i.pravatar.cc/150?img=5" />
<Avatar isDisabled name="Manav" />`}
        </>
      }
    />
  );
};

export default Disabled;
