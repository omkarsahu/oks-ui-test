import React from "react";
import { PageTitle } from "oks-ui";
import { ShowCode } from "../../../components";

const colors = [
  "black",
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
];

const Tones = () => {
  return (
    <ShowCode
      title="Colors"
      preview={
        <div className="flex flex-col gap-3">
          {colors.map((color) => (
            <PageTitle
              key={color}
              as="h5"
              title={`color="${color}"`}
              color={color}
            />
          ))}
        </div>
      }
      code={
        <>
          {`<PageTitle title="Primary title" color="primary" />
<PageTitle title="Danger title" color="danger" colorDepth={600} />`}
        </>
      }
    />
  );
};

export default Tones;
