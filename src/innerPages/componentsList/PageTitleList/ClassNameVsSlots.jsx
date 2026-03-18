import React from "react";
import { PageTitle } from "oks-ui";
import { ShowCode } from "../../../components";

const ClassNameVsSlots = () => {
  return (
    <ShowCode
      title="className vs titleClassName"
      preview={
        <div className="flex flex-col gap-4">
          <PageTitle
            title="Root className (layout)"
            as="h4"
            className="gap-1 items-end"
            icon={<span className="text-base">★</span>}
          />
          <PageTitle
            title="titleClassName (typography)"
            as="h4"
            color="secondary"
            icon={<span className="text-base">→</span>}
            titleClassName="uppercase tracking-wide"
          />
          <PageTitle
            title="Slot classNames"
            as="h4"
            color="info"
            icon={<span className="text-base">i</span>}
            classNames={{
              base: "gap-2",
              title: "font-semibold",
              icon: "text-blue-600",
            }}
          />
        </div>
      }
      code={
        `import { PageTitle } from "oks-ui";

<PageTitle
  title="Root layout"
  className="gap-1 items-end"
  icon={<span>★</span>}
/>

<PageTitle
  title="Title typography"
  titleClassName="uppercase tracking-wide"
/>
`
      }
    />
  );
};

export default ClassNameVsSlots;
