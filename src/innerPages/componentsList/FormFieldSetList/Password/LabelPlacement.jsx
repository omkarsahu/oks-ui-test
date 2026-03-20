import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const LabelPlacement = () => {
  const placements = ["top", "floating"];

  return (
    <ShowCode
      title="Password: labelPlacement"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {placements.map((labelPlacement) => (
              <FormFieldSet
                key={labelPlacement}
                type="password"
                label={`Label: ${labelPlacement}`}
                name={`label_${labelPlacement}`}
                labelPlacement={labelPlacement}
                placeholder="Enter password"
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
      <FormFieldSet type="password" label="Top" name="a" labelPlacement="top" />
      <FormFieldSet type="password" label="Floating" name="b" labelPlacement="floating" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default LabelPlacement;
