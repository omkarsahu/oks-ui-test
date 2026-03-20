import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const LabelPlacement = () => {
  const placements = ["top", "floating"];

  return (
    <ShowCode
      title="Phone: labelPlacement"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {placements.map((labelPlacement) => (
              <FormFieldSet
                key={labelPlacement}
                type="phone"
                label={`Label: ${labelPlacement}`}
                name={`phone_label_${labelPlacement}`}
                labelPlacement={labelPlacement}
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
      <FormFieldSet type="phone" label="Top" name="a" labelPlacement="top" />
      <FormFieldSet type="phone" label="Floating" name="b" labelPlacement="floating" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default LabelPlacement;
