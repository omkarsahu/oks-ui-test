import React from "react";
import { Alert, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const EndContent = () => {
  return (
    <ShowCode
      title="With Action"
      preview={
        <div className="flex flex-col gap-3">
          <Alert
            title="Update available"
            description="A newer version is ready to install."
            color="primary"
            endContent={<Button size="sm">Update</Button>}
          />
        </div>
      }
      code={
        <>
          {`import { Alert, Button } from "oks-ui";

<Alert
  title="Update available"
  description="A newer version is ready to install."
  color="primary"
  endContent={<Button size="sm">Update</Button>}
/>`}
        </>
      }
    />
  );
};

export default EndContent;
