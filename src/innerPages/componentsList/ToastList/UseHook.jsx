import React from "react";
import { Button, useToast } from "oks-ui";
import { ShowCode } from "../../../components";

const HookButtons = () => {
  const t = useToast();

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <Button onPress={() => t.success("Saved")}>Success</Button>
      <Button color="danger" onPress={() => t.error("Failed")}>
        Error
      </Button>
    </div>
  );
};

const UseHook = () => {
  return (
    <ShowCode
      title="useToast() hook"
      preview={<HookButtons />}
      code={
        <>
          {`import { useToast } from "oks-ui";

const t = useToast();
t.success("Saved");
t.error("Failed");`}
        </>
      }
    />
  );
};

export default UseHook;
