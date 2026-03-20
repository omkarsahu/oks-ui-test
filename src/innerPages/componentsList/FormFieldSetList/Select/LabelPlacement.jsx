import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
];

const LabelPlacement = () => {
  const placements = ["top", "floating"];

  return (
    <ShowCode
      title="Select: labelPlacement"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {placements.map((labelPlacement) => (
              <FormFieldSet
                key={labelPlacement}
                type="select"
                label={`Label: ${labelPlacement}`}
                name={`label_${labelPlacement}`}
                labelPlacement={labelPlacement}
                placeholder="Select…"
                options={options}
              />
            ))}
          </div>
        </Form>
      }
      code={
        <>
          {`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  const options = [
    { label: "Option 1", value: "one" },
    { label: "Option 2", value: "two" },
  ];

  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="select" label="Top" name="a" labelPlacement="top" options={options} />
      <FormFieldSet type="select" label="Floating" name="b" labelPlacement="floating" options={options} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default LabelPlacement;

