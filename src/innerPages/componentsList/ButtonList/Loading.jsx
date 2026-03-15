import React from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const Loading = () => {
  return (
    <ShowCode
      title="Loading"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button isLoading>Saving</Button>
          <Button isLoading spinnerPlacement="end">
            Saving
          </Button>
          <Button isLoading spinner={<span aria-hidden="true">⏳</span>}>
            Saving
          </Button>
        </div>
      }
      code={
        <>
          {`<Button isLoading>Saving</Button>
<Button isLoading spinnerPlacement="end">Saving</Button>
<Button isLoading spinner={<span aria-hidden="true">⏳</span>}>Saving</Button>`}
        </>
      }
    />
  );
};

export default Loading;
