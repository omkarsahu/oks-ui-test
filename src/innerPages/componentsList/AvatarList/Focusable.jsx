import React from "react";
import { ShowCode } from "../../../components";
import { Avatar } from "oks-ui";

const Focusable = () => {
  return (
    <ShowCode
      title="Focusable"
      preview={
        <div className="flex flex-col gap-3">
          <div className="text-sm opacity-80">Use Tab to see focus ring</div>
          <div className="flex gap-3 items-center flex-wrap">
            <Avatar isFocusable name="Focusable" />
            <Avatar isFocusable isBordered name="Bordered" />
            <Avatar isFocusable tooltip name="Focusable + tooltip" />
            <Avatar isFocusable tabIndex={-1} name="tabIndex -1" />
          </div>
        </div>
      }
      code={
        <>
          {`import { Avatar } from "oks-ui";

<Avatar isFocusable name="Focusable" />
<Avatar isFocusable isBordered name="Bordered" />
<Avatar isFocusable tooltip name="Focusable + tooltip" />
<Avatar isFocusable tabIndex={-1} name="tabIndex -1" />`}
        </>
      }
    />
  );
};

export default Focusable;
