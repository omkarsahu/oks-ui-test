import React from "react";
import { Divider } from "oks-ui";
import { ShowCode } from "../../../components";

const Vertical = () => {
  return (
    <ShowCode
      title="Vertical"
      preview={
        <div className="flex items-stretch gap-4 h-24">
          <div className="flex-1 bg-white rounded-md border border-gray-200 p-4">
            Left
          </div>
          <Divider orientation="vertical" tone="secondary" colorDepth={200} />
          <div className="flex-1 bg-white rounded-md border border-gray-200 p-4">
            Right
          </div>
        </div>
      }
      code={
        <>
          {`<div className="flex items-stretch h-24">
  <div className="flex-1">Left</div>
  <Divider orientation="vertical" />
  <div className="flex-1">Right</div>
</div>`}
        </>
      }
    />
  );
};

export default Vertical;
