import React from "react";
import { PageTitle } from "oks-ui";
import { ShowCode } from "../../../components";

const TooltipDemo = () => {
  return (
    <ShowCode
      title="Tooltip"
      preview={
        <div className="flex flex-col gap-3">
          <PageTitle
            title="Hover me"
            as="h4"
            tooltip={{
              message: "This tooltip comes from PageTitle.tooltip",
              side: "top",
              align: "center",
            }}
          />
          <PageTitle title="Derived from title" as="h5" tooltip={{ delay: 0, closeDelay: 0 }} />
          <PageTitle
            title="Custom content"
            as="h5"
            tooltip={{
              props: { delay: 0, closeDelay: 0 },
              content: "This uses Avatar-style { props, content }",
            }}
          />
          <PageTitle
            title="Disabled tooltip"
            as="h5"
            tooltip={{ message: "Hidden", disabled: true }}
          />
        </div>
      }
      code={
        <>
          {`<PageTitle
  title="Hover me"
  tooltip={{ message: "Tooltip text", side: "top", align: "center" }}
/>

<PageTitle title="Derived from title" tooltip={{ delay: 0, closeDelay: 0 }} />

<PageTitle
  title="Custom content"
  tooltip={{ props: { delay: 0 }, content: "Custom tooltip" }}
/>`}
        </>
      }
    />
  );
};

export default TooltipDemo;
