import React from "react";
import { Divider } from "oks-ui";
import { ShowCode } from "../../../components";

const variants = ["fullWidth", "inset", "middle"];
const colors = ["primary", "secondary", "success", "warning", "danger"];

const Variants = () => {
  return (
    <ShowCode
      title="Variants and colors"
      preview={
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold">Variants</div>
            {variants.map((variant) => (
              <div key={variant} className="flex flex-col gap-2">
                <div className="text-xs text-gray-600">{variant}</div>
                <Divider variant={variant} />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold">With text</div>
            <Divider color="secondary" colorDepth={300}>
              OR
            </Divider>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold">Colors</div>
            <div className="flex flex-col gap-3">
              {colors.map((color) => (
                <Divider key={color} color={color} colorDepth={300} />
              ))}
            </div>
          </div>
        </div>
      }
      code={
        <>
          {`<Divider variant="inset" />
<Divider color="secondary" colorDepth={300}>OR</Divider>
<Divider orientation="vertical" />`}
        </>
      }
    />
  );
};

export default Variants;
