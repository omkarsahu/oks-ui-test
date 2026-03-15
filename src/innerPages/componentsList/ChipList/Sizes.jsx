import React from "react";
import { Chip } from "oks-ui";
import { ShowCode } from "../../../components";

const Sizes = () => {
  return (
    <ShowCode
      title="Sizes"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Chip size="sm">sm</Chip>
          <Chip size="md">md</Chip>
          <Chip size="lg">lg</Chip>
        </div>
      }
      code={
        <>
          {`import { Chip } from "oks-ui";

<Chip size="sm">sm</Chip>
<Chip size="md">md</Chip>
<Chip size="lg">lg</Chip>`}
        </>
      }
    />
  );
};

export default Sizes;
