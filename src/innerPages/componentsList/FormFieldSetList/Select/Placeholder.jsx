import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
];

const Placeholder = () => {
  return (
    <ShowCode
      title="Select: placeholder"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="select"
              label="With placeholder"
              name="withPlaceholder"
              placeholder="Select a value"
              options={options}
            />
            <FormFieldSet
              type="select"
              label="No placeholder"
              name="noPlaceholder"
              placeholder={null}
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
      <FormFieldSet type="select" label="With placeholder" name="a" placeholder="Select a value" options={options} />
      <FormFieldSet type="select" label="No placeholder" name="b" placeholder={null} options={options} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Placeholder;

