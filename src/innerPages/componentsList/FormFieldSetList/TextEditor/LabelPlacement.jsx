import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const LabelPlacement = () => {
  const placements = ["top", "floating"];

  return (
    <ShowCode
      title="Text Editor: labelPlacement"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {placements.map((labelPlacement) => (
              <FormFieldSet
                key={labelPlacement}
                type="textarea"
                label={`Label: ${labelPlacement}`}
                name={`label_${labelPlacement}`}
                labelPlacement={labelPlacement}
                rows={4}
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
      <FormFieldSet type="textarea" label="Top" name="a" labelPlacement="top" />
      <FormFieldSet type="textarea" label="Floating" name="b" labelPlacement="floating" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default LabelPlacement;

