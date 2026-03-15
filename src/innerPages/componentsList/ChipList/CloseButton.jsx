import React from "react";
import { Chip } from "oks-ui";
import { ShowCode } from "../../../components";

const CloseButton = () => {
  return (
    <ShowCode
      title="With close button"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Chip onClose={() => {}}>Closable</Chip>
          <Chip
            onClose={() => {}}
            endContent={<span aria-hidden="true">×</span>}
            color="danger"
            variant="flat"
          >
            Custom close icon
          </Chip>
        </div>
      }
      code={
        <>
          {`import { Chip } from "oks-ui";

<Chip onClose={() => {}}>Closable</Chip>
<Chip onClose={() => {}} endContent={<span aria-hidden="true">×</span>}>
  Custom close icon
</Chip>`}
        </>
      }
    />
  );
};

export default CloseButton;
