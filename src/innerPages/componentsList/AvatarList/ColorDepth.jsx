import React from "react";
import { ShowCode } from "../../../components";
import { Avatar } from "oks-ui";

const ColorDepth = () => {
  return (
    <ShowCode
      title="Color depth"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Avatar name="50" colorDepth={50} />
          <Avatar name="100" colorDepth={100} />
          <Avatar name="200" colorDepth={200} />
          <Avatar name="3000" colorDepth={300} />
          <Avatar name="400" colorDepth={400} />
          <Avatar name="500" colorDepth={500} />
          <Avatar name="600" colorDepth={600} />
          <Avatar name="700" colorDepth={700} />
          <Avatar name="800" colorDepth={800} />
          <Avatar name="900" colorDepth={900} />
        </div>
      }
      code={
        <>
          {`import { Avatar } from "oks-ui";

<Avatar name="50" colorDepth={50} />
<Avatar name="100" colorDepth={100} />
<Avatar name="200" colorDepth={200} />
<Avatar name="3000" colorDepth={300} />
<Avatar name="400" colorDepth={400} />
<Avatar name="500" colorDepth={500} />
<Avatar name="600" colorDepth={600} />
<Avatar name="700" colorDepth={700} />
<Avatar name="800" colorDepth={800} />
<Avatar name="900" colorDepth={900} />`}
        </>
      }
    />
  );
};

export default ColorDepth;
