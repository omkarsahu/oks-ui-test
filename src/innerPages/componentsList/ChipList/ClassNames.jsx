import React from "react";
import { Chip } from "oks-ui";
import { ShowCode } from "../../../components";

const ClassNames = () => {
  return (
    <ShowCode
      title="Slot styling (classNames)"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Chip
            variant="dot"
            color="success"
            onClose={() => {}}
            avatar={<img src="https://i.pravatar.cc/32?img=3" alt="avatar" />}
            classNames={{
              base: "ring-1 ring-green-400/60",
              content: "font-semibold",
              dot: "bg-green-600",
              avatar: "ring-1 ring-green-300 rounded-full",
              closeButton: "hover:bg-green-200/40",
            }}
          >
            Custom slots
          </Chip>
        </div>
      }
      code={
        <>
          {`import { Chip } from "oks-ui";

<Chip
  variant="dot"
  color="success"
  onClose={() => {}}
  avatar={<img src="https://i.pravatar.cc/32?img=3" alt="avatar" />}
  classNames={{
    base: "ring-1 ring-green-400/60",
    content: "font-semibold",
    dot: "bg-green-600",
    avatar: "ring-1 ring-green-300 rounded-full",
    closeButton: "hover:bg-green-200/40",
  }}
>
  Custom slots
</Chip>`}
        </>
      }
    />
  );
};

export default ClassNames;
