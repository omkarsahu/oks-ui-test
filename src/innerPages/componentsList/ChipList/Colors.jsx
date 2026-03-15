import React from "react";
import { Chip } from "oks-ui";
import { ShowCode } from "../../../components";

const Colors = () => {
  return (
    <ShowCode
      title="Colors"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Chip color="default">default</Chip>
          <Chip color="primary">primary</Chip>
          <Chip color="secondary">secondary</Chip>
          <Chip color="success">success</Chip>
          <Chip color="warning">warning</Chip>
          <Chip color="danger">danger</Chip>
        </div>
      }
      code={
        <>
          {`import { Chip } from "oks-ui";

<Chip color="default">default</Chip>
<Chip color="primary">primary</Chip>
<Chip color="secondary">secondary</Chip>
<Chip color="success">success</Chip>
<Chip color="warning">warning</Chip>
<Chip color="danger">danger</Chip>`}
        </>
      }
    />
  );
};

export default Colors;
