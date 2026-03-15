import React from "react";
import { ShowCode } from "../../../components";
import { Avatar } from "oks-ui";

const Tooltip = () => {
  return (
    <ShowCode
      title="Tooltip"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Avatar name="Hover me" tooltip />
          <Avatar
            name="Custom content"
            tooltip={{
              content: (
                <div className="flex flex-col">
                  <span className="font-semibold">Custom tooltip</span>
                  <span className="text-xs opacity-80">Any ReactNode</span>
                </div>
              ),
            }}
          />
          <Avatar
            name="Placement"
            tooltip={{
              props: { placement: "bottom", showArrow: true },
            }}
          />
          <Avatar isDisabled name="Disabled + tooltip" tooltip />
        </div>
      }
      code={
        <>
          {`import { Avatar } from "oks-ui";

<Avatar name="Hover me" tooltip />

<Avatar
  name="Custom content"
  tooltip={{
    content: (
      <div className="flex flex-col">
        <span className="font-semibold">Custom tooltip</span>
        <span className="text-xs opacity-80">Any ReactNode</span>
      </div>
    ),
  }}
/>

<Avatar
  name="Placement"
  tooltip={{
    props: { placement: "bottom", showArrow: true },
  }}
/>

<Avatar isDisabled name="Disabled + tooltip" tooltip />`}
        </>
      }
    />
  );
};

export default Tooltip;
