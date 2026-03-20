import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const LabelPlacement = () => {
  const placements = ["top", "floating"];

  return (
    <ShowCode
      title="DatePicker: labelPlacement"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {placements.map((labelPlacement) => (
              <FormFieldSet
                key={labelPlacement}
                type="datepicker"
                label={`Label: ${labelPlacement}`}
                name={`datepicker_label_${labelPlacement}`}
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
      <FormFieldSet type="datepicker" label="Top" name="a" labelPlacement="top" />
      <FormFieldSet type="datepicker" label="Floating" name="b" labelPlacement="floating" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default LabelPlacement;
