import React from "react";
import { Button, ButtonGroup } from "oks-ui";
import { ShowCode } from "../../../components";

const ButtonGroupSection = () => {
  return (
    <ShowCode
      title="ButtonGroup"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <ButtonGroup
            variant="bordered"
            color="primary"
            aria-label="Pagination"
          >
            <Button>Prev</Button>
            <Button>Next</Button>
          </ButtonGroup>
          <ButtonGroup variant="solid" color="secondary" aria-label="Actions">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </div>
      }
      code={
        <>
          {`import { Button, ButtonGroup } from "oks-ui";

<ButtonGroup variant="bordered" color="primary" aria-label="Pagination">
  <Button>Prev</Button>
  <Button>Next</Button>
</ButtonGroup>`}
        </>
      }
    />
  );
};

export default ButtonGroupSection;
