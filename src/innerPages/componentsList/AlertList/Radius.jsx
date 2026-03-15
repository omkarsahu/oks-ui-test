import React from "react";
import { Alert } from "oks-ui";
import { ShowCode } from "../../../components";

const Radius = () => {
  return (
    <ShowCode
      title="Radius"
      preview={
        <div className="flex flex-col gap-3">
          <Alert radius="none" title="None" description="radius=none" />
          <Alert radius="sm" title="Small" description="radius=sm" />
          <Alert radius="md" title="Medium" description="radius=md" />
          <Alert radius="lg" title="Large" description="radius=lg" />
          <Alert radius="full" title="Full" description="radius=full" />
        </div>
      }
      code={
        <>
          {`import { Alert } from "oks-ui";

<Alert radius="none" title="None" description="radius=none" />
<Alert radius="sm" title="Small" description="radius=sm" />
<Alert radius="md" title="Medium" description="radius=md" />
<Alert radius="lg" title="Large" description="radius=lg" />
<Alert radius="full" title="Full" description="radius=full" />`}
        </>
      }
    />
  );
};

export default Radius;
