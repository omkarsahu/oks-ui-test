import React from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

const Types = () => {
  return (
    <ShowCode
      title="Types"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button onPress={() => toast.info("Heads up")}>Info</Button>
          <Button color="success" onPress={() => toast.success("Saved")}>
            Success
          </Button>
          <Button color="warning" onPress={() => toast.warning("Be careful")}>
            Warning
          </Button>
          <Button
            color="danger"
            onPress={() => toast.error("Something went wrong")}
          >
            Error
          </Button>
        </div>
      }
      code={
        <>
          {`toast.info("Heads up");
toast.success("Saved");
toast.warning("Be careful");
toast.error("Something went wrong");`}
        </>
      }
    />
  );
};

export default Types;
