import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const LabelPlacement = () => {
  const placements = ["top", "floating"];

  return (
    <ShowCode
      title="Email: labelPlacement"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {placements.map((labelPlacement) => (
              <FormFieldSet
                key={labelPlacement}
                type="email"
                label={`Label: ${labelPlacement}`}
                name={`label_${labelPlacement}`}
                labelPlacement={labelPlacement}
                placeholder="Enter your email"
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
      <FormFieldSet type="email" label="Top" name="a" labelPlacement="top" />
      <FormFieldSet type="email" label="Floating" name="b" labelPlacement="floating" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default LabelPlacement;
