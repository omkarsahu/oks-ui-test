import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const LabelPlacement = () => {
  const placements = ["top", "floating"];

  return (
    <ShowCode
      title="Text: labelPlacement"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {placements.map((labelPlacement) => (
              <FormFieldSet
                key={labelPlacement}
                type="text"
                label={`Label: ${labelPlacement}`}
                name={`label_${labelPlacement}`}
                labelPlacement={labelPlacement}
                placeholder="Type here"
              />
            ))}
          </div>
        </Form>
      }
      code={
        <>
          {`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="text" label="Top" name="a" labelPlacement="top" />
      <FormFieldSet type="text" label="Floating" name="b" labelPlacement="floating" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default LabelPlacement;
