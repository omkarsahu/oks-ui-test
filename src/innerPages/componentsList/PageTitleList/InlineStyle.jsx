import React from "react";
import { PageTitle } from "oks-ui";
import { ShowCode } from "../../../components";

const InlineStyle = () => {
  return (
    <ShowCode
      title="Inline style"
      preview={
        <div className="flex flex-col gap-4">
          <PageTitle title="Default" as="h4" />
          <PageTitle
            title="Custom style"
            as="h4"
            color="primary"
            style={{
              opacity: 0.85,
              transform: "translateY(1px)",
              letterSpacing: "0.02em",
            }}
          />
        </div>
      }
      code={
        `import { PageTitle } from "oks-ui";

<PageTitle
  title="Custom style"
  color="primary"
  style={{ opacity: 0.85, transform: "translateY(1px)" }}
/>`
      }
    />
  );
};

export default InlineStyle;
