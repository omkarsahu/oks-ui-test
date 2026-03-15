import React from "react";
import { Alert } from "oks-ui";
import { ShowCode } from "../../../components";

const Closable = () => {
  return (
    <ShowCode
      title="Closable"
      preview={
        <div className="flex flex-col gap-3">
          <Alert
            title="Closable alert"
            description="Click Close to hide (uncontrolled)."
            isClosable
          />
          <Alert
            title="Closable (custom close button)"
            description="closeButtonProps example"
            isClosable
            closeButtonProps={{ className: "bg-white/15 hover:bg-white/20" }}
            color="danger"
            variant="solid"
          />
        </div>
      }
      code={
        <>
          {`import { Alert } from "oks-ui";

<Alert
  title="Closable alert"
  description="Click Close to hide (uncontrolled)."
  isClosable
/>

<Alert
  title="Closable (custom close button)"
  description="closeButtonProps example"
  isClosable
  closeButtonProps={{ className: "bg-white/15 hover:bg-white/20" }}
  color="danger"
  variant="solid"
/>`}
        </>
      }
    />
  );
};

export default Closable;
