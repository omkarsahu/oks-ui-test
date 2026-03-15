import React from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const CustomStyles = () => {
  return (
    <ShowCode
      title="ClassName and style"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
            className
          </Button>
          <Button
            style={{
              background: "linear-gradient(90deg, #14b8a6, #3b82f6)",
              color: "white",
            }}
          >
            style
          </Button>
        </div>
      }
      code={
        <>
          {`<Button className="bg-indigo-600 text-white hover:bg-indigo-500">
  className
</Button>

<Button style={{ background: "linear-gradient(90deg, #14b8a6, #3b82f6)", color: "white" }}>
  style
</Button>`}
        </>
      }
    />
  );
};

export default CustomStyles;
