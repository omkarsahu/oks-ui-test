import React from "react";
import { Alert } from "oks-ui";
import { ShowCode } from "../../../components";

const Colors = () => {
  return (
    <ShowCode
      title="Colors"
      preview={
        <div className="flex flex-col gap-3">
          <Alert color="default" title="Default" description="Default color" />
          <Alert color="primary" title="Primary" description="Primary color" />
          <Alert
            color="secondary"
            title="Secondary"
            description="Secondary color"
          />
          <Alert color="info" title="Info" description="Info color" />
          <Alert color="success" title="Success" description="Success color" />
          <Alert color="warning" title="Warning" description="Warning color" />
          <Alert color="danger" title="Danger" description="Danger color" />
        </div>
      }
      code={
        <>
          {`import { Alert } from "oks-ui";

<Alert color="default" title="Default" description="Default color" />
<Alert color="primary" title="Primary" description="Primary color" />
<Alert color="secondary" title="Secondary" description="Secondary color" />
<Alert color="info" title="Info" description="Info color" />
<Alert color="success" title="Success" description="Success color" />
<Alert color="warning" title="Warning" description="Warning color" />
<Alert color="danger" title="Danger" description="Danger color" />`}
        </>
      }
    />
  );
};

export default Colors;
