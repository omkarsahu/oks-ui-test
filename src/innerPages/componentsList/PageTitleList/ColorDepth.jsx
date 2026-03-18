import React from "react";
import { PageTitle } from "oks-ui";
import { ShowCode } from "../../../components";

const ColorDepth = () => {
  const [colorDepth, setColorDepth] = React.useState(500);

  return (
    <ShowCode
      title="Color depth"
      preview={
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-3">
            <span className="min-w-20">colorDepth</span>
            <input
              type="range"
              min={50}
              max={950}
              step={50}
              value={colorDepth}
              onChange={(e) => setColorDepth(Number(e.target.value))}
            />
            <span className="w-12 text-right">{colorDepth}</span>
          </label>

          <div className="flex flex-col gap-3">
            <PageTitle
              as="h4"
              title={`primary @ ${colorDepth}`}
              color="primary"
              colorDepth={colorDepth}
            />
            <PageTitle
              as="h4"
              title={`secondary @ ${colorDepth}`}
              color="secondary"
              colorDepth={colorDepth}
            />
          </div>
        </div>
      }
      code={
        `import { PageTitle } from "oks-ui";

<PageTitle title="Primary" color="primary" colorDepth={600} />
<PageTitle title="Secondary" color="secondary" colorDepth={300} />`
      }
    />
  );
};

export default ColorDepth;
