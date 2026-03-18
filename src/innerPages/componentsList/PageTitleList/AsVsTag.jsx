import React from "react";
import { PageTitle } from "oks-ui";
import { ShowCode } from "../../../components";

const AsVsTag = () => {
  const [as, setAs] = React.useState("h3");

  return (
    <ShowCode
      title="as vs tag"
      preview={
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <span className="text-sm min-w-10">h</span>
            <select
              className="border border-gray-300 rounded-md px-2 py-1"
              value={as}
              onChange={(e) => setAs(e.target.value)}
            >
              <option value="h1">h1</option>
              <option value="h2">h2</option>
              <option value="h3">h3</option>
              <option value="h4">h4</option>
              <option value="h5">h5</option>
              <option value="h6">h6</option>
            </select>
          </label>

          <div className="flex flex-col gap-3">
            <PageTitle title={`as="${as}"`} as={as} />
            <PageTitle title={`tag="${as}"`} tag={as} />
          </div>
        </div>
      }
      code={
        `import { PageTitle } from "oks-ui";

<PageTitle title="Heading" as="h3" />
<PageTitle title="Heading" tag="h3" />`
      }
    />
  );
};

export default AsVsTag;
