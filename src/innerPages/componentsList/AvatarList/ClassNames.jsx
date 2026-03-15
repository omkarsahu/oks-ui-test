import React from "react";
import { ShowCode } from "../../../components";
import { Avatar } from "oks-ui";

const ClassNames = () => {
  return (
    <ShowCode
      title="classNames (slots)"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Avatar
            name="Slot styles"
            classNames={{
              base: "ring-2 ring-pink-500 ring-offset-2 ring-offset-white",
              name: "text-black",
              fallback: "bg-white/30",
            }}
          />
          <Avatar
            src="https://i.pravatar.cc/150?img=5"
            classNames={{
              base: "ring-2 ring-emerald-500 ring-offset-2 ring-offset-white",
              img: "scale-110",
            }}
          />
          <Avatar
            classNames={{
              base: "ring-2 ring-sky-500 ring-offset-2 ring-offset-white",
              icon: "text-yellow-200",
            }}
            icon={<span className="text-sm">★</span>}
          />
        </div>
      }
      code={
        <>
          {`import { Avatar } from "oks-ui";

<Avatar
  name="Slot styles"
  classNames={{
    base: "ring-2 ring-pink-500 ring-offset-2 ring-offset-white",
    name: "text-black",
    fallback: "bg-white/30",
  }}
/>

<Avatar
  src="https://i.pravatar.cc/150?img=5"
  classNames={{
    base: "ring-2 ring-emerald-500 ring-offset-2 ring-offset-white",
    img: "scale-110",
  }}
/>

<Avatar
  classNames={{
    base: "ring-2 ring-sky-500 ring-offset-2 ring-offset-white",
    icon: "text-yellow-200",
  }}
  icon={<span className="text-sm">★</span>}
/>`}
        </>
      }
    />
  );
};

export default ClassNames;
