import React from "react";
import { Chip } from "oks-ui";
import { ShowCode } from "../../../components";

const Avatar = () => {
  return (
    <ShowCode
      title="With avatar"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Chip
            avatar={
              <img
                src="https://i.pravatar.cc/32?img=1"
                alt="avatar"
                width={24}
                height={24}
              />
            }
          >
            Avatar
          </Chip>
          <Chip
            variant="faded"
            color="secondary"
            avatar={
              <img
                src="https://i.pravatar.cc/32?img=2"
                alt="avatar"
                width={24}
                height={24}
              />
            }
          >
            Faded
          </Chip>
        </div>
      }
      code={
        <>
          {`import { Chip } from "oks-ui";

<Chip avatar={<img src="https://i.pravatar.cc/32?img=1" alt="avatar" />}>
  Avatar
</Chip>`}
        </>
      }
    />
  );
};

export default Avatar;
