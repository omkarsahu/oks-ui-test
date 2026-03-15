import React from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const IconOnlyLoading = () => {
  return (
    <ShowCode
      title="Icon only + loading"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button isIconOnly isLoading aria-label="Loading">
            <span aria-hidden="true">⚙</span>
          </Button>
          <Button
            isIconOnly
            isLoading
            aria-label="Loading bordered"
            variant="bordered"
          >
            <span aria-hidden="true">⌛</span>
          </Button>
        </div>
      }
      code={
        <>
          {`<Button isIconOnly isLoading aria-label="Loading">
  <span aria-hidden="true">⚙</span>
</Button>`}
        </>
      }
    />
  );
};

export default IconOnlyLoading;
