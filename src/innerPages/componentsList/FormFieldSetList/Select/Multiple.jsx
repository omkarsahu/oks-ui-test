import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
  { label: "Option 3", value: "three" },
];

const Multiple = () => {
  return (
    <ShowCode
      title="Select: multiple"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="select"
              label="Single (custom)"
              name="single"
              placeholder="Select…"
              options={options}
            />
            <FormFieldSet
              type="select"
              label="Multiple (custom)"
              name="multiple"
              multiple
              defaultValue={["one", "three"]}
              options={options}
            />
            <FormFieldSet
              type="select"
              label="Multiple (native)"
              name="multipleNative"
              native
              multiple
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
    { label: "Option 3", value: "three" },
  ];

  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="select" label="Multiple (custom)" name="a" multiple defaultValue={["one", "three"]} options={options} />
      <FormFieldSet type="select" label="Multiple (native)" name="b" native multiple options={options} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Multiple;
