import React from "react";
import { Alert } from "oks-ui";
import { ShowCode } from "../../../components";

const IconControls = () => {
  return (
    <ShowCode
      title="Icons"
      preview={
        <div className="flex flex-col gap-3">
          <Alert
            title="Default icon"
            description="Icon is derived from color"
            color="primary"
          />
          <Alert title="Hide icon" description="hideIcon=true" hideIcon />
          <Alert
            title="Hide icon wrapper"
            description="hideIconWrapper=true"
            hideIconWrapper
          />
          <Alert
            title="Custom icon"
            description="Use icon prop"
            icon={
              <span aria-hidden className="text-lg leading-none">
                ★
              </span>
            }
          />
        </div>
      }
      code={
        <>
          {`import { Alert } from "oks-ui";

<Alert title="Default icon" description="Icon is derived from color" color="primary" />
<Alert title="Hide icon" description="hideIcon=true" hideIcon />
<Alert title="Hide icon wrapper" description="hideIconWrapper=true" hideIconWrapper />
<Alert title="Custom icon" description="Use icon prop" icon={<span aria-hidden>★</span>} />`}
        </>
      }
    />
  );
};

export default IconControls;
