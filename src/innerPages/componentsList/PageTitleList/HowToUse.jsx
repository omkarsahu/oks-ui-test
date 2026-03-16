import React from "react";
import { PageTitle } from "oks-ui";
import { ShowCode } from "../../../components";

const HowToUse = () => {
  return (
    <ShowCode
      title="How to usage"
      preview={
        <div className="flex flex-col gap-4">
          <PageTitle title="Dashboard" as="h2" />
          <PageTitle
            title="Billing"
            as="h4"
            color="primary"
            icon={<span className="text-base">★</span>}
            iconPosition="start"
          />
          <PageTitle
            title="Settings"
            as="h5"
            color="secondary"
            icon={<span className="text-base">→</span>}
            iconPosition="end"
          />
          <PageTitle
            title="Slot classNames"
            as="h6"
            color="info"
            icon={<span className="text-base">i</span>}
            classNames={{
              base: "gap-1",
              title: "uppercase tracking-wide",
              icon: "text-blue-600",
            }}
          />
        </div>
      }
      code={
        <>
          {`import { PageTitle } from "oks-ui";

<PageTitle title="Dashboard" as="h2" />
<PageTitle title="Billing" as="h4" color="primary" />`}
        </>
      }
    />
  );
};

export default HowToUse;
