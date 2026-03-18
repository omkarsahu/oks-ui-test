import React from "react";
import { Divider } from "oks-ui";
import { ShowCode } from "../../../components";

const ThicknessAndLabel = () => {
  const [thickness, setThickness] = React.useState(1);
  const [colorDepth, setColorDepth] = React.useState(300);

  return (
    <ShowCode
      title="Thickness & label"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-3">
              <span className="min-w-20">thickness</span>
              <input
                type="range"
                min={1}
                max={8}
                step={1}
                value={thickness}
                onChange={(e) => setThickness(Number(e.target.value))}
              />
              <span className="w-8 text-right">{thickness}</span>
            </label>

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
          </div>

          <div className="flex flex-col gap-3">
            <Divider
              color="secondary"
              colorDepth={colorDepth}
              thickness={thickness}
            />

            <Divider
              color="secondary"
              colorDepth={colorDepth}
              thickness={thickness}
            >
              OR
            </Divider>

            <div className="text-sm text-gray-600">
              Use children to render a labeled divider (horizontal only).
            </div>
          </div>
        </div>
      }
      code={
        `import { Divider } from "oks-ui";

<Divider thickness={2} />
<Divider color="secondary" colorDepth={300} thickness={2}>OR</Divider>`
      }
    />
  );
};

export default ThicknessAndLabel;
