import React from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

const ToneSize = () => {
  return (
    <ShowCode
      title="Tone and size"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            onPress={() =>
              toast({
                title: "Tone: secondary",
                description: "Toast size: xl",
                tone: "secondary",
                size: "xl",
              })
            }
          >
            secondary + xl
          </Button>
          <Button
            color="danger"
            onPress={() =>
              toast({
                title: "Tone: danger",
                description: "Toast size: sm",
                tone: "danger",
                size: "sm",
              })
            }
          >
            danger + sm
          </Button>
        </div>
      }
      code={
        <>
          {`toast({ title: "Tone", description: "Size", tone: "secondary", size: "xl" });`}
        </>
      }
    />
  );
};

export default ToneSize;
