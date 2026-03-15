import React from "react";
import { Badge, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const HowToUse = () => {
  return (
    <ShowCode
      title="How to usage"
      preview={
        <div className="flex gap-6 items-center flex-wrap">
          <Badge content={5} aria-label="5 unread notifications">
            <Button variant="bordered">Notifications</Button>
          </Badge>
          <Badge isDot aria-label="Has new activity">
            <Button variant="bordered">Activity</Button>
          </Badge>
        </div>
      }
      code={
        <>
          {`import { Badge } from "oks-ui";

<Badge content={5} aria-label="5 unread notifications">
  <Button variant="bordered">Notifications</Button>
</Badge>

<Badge isDot aria-label="Has new activity">
  <Button variant="bordered">Activity</Button>
</Badge>`}
        </>
      }
    />
  );
};

export default HowToUse;
