import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
  { label: "Option 3", value: "three", disabled: true },
];

const Mode = () => {
  return (
    <ShowCode
      title="Select: custom vs native"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="select"
              label="Custom select"
              name="custom"
              placeholder="Select…"
              options={options}
            />
            <FormFieldSet
              type="select"
              label="Native select"
              name="native"
              native
              placeholder="Select…"
              options={options}
            />
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
      <FormFieldSet type="select" label="Custom" name="a" options={options} />
      <FormFieldSet type="select" label="Native" name="b" native options={options} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Mode;

