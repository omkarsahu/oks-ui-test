import React from "react";
import { Divider } from "oks-ui";
import { ShowCode } from "../../../components";

const HowToUse = () => {
  return (
    <ShowCode
      title="How to usage"
      preview={
        <div className="w-full max-w-xl bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="p-4 font-semibold">Account</div>
          <Divider />
          <div className="p-4 text-sm text-gray-600">
            Profile settings and security options.
          </div>
          <Divider />
          <div className="p-4 flex items-center justify-between">
            <span className="text-sm">Notifications</span>
            <span className="text-sm text-gray-500">Enabled</span>
          </div>
        </div>
      }
      code={
        <>
          {`import { Divider } from "oks-ui";

<div>
  <div>Section A</div>
  <Divider />
  <div>Section B</div>
</div>`}
        </>
      }
    />
  );
};

export default HowToUse;
