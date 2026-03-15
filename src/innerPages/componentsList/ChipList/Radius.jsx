import React from "react";
import { Chip } from "oks-ui";
import { ShowCode } from "../../../components";

const Radius = () => {
  return (
    <ShowCode
      title="Radius"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Chip radius="none">none</Chip>
          <Chip radius="sm">sm</Chip>
          <Chip radius="md">md</Chip>
          <Chip radius="lg">lg</Chip>
          <Chip radius="full">full</Chip>
        </div>
      }
      code={
        <>
          {`import { Chip } from "oks-ui";

<Chip radius="none">none</Chip>
<Chip radius="sm">sm</Chip>
<Chip radius="md">md</Chip>
<Chip radius="lg">lg</Chip>
<Chip radius="full">full</Chip>`}
        </>
      }
    />
  );
};

export default Radius;
