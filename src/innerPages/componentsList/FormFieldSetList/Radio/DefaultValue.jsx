import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c" },
];

const DefaultValue = () => {
  return (
    <ShowCode
      title="Radio: defaultValue"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="radio"
              label="No default"
              name="noDefault"
              options={options}
            />
            <FormFieldSet
              type="radio"
              label='Default value: "c"'
              name="defaultValue"
              defaultValue="c"
              options={options}
            />
          </div>
        </Form>
      }
      code={
        <>
          {`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet
        type="radio"
        label="Default value"
        name="a"
        defaultValue="c"
        options={[
          { label: "Option A", value: "a" },
          { label: "Option C", value: "c" },
        ]}
      />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default DefaultValue;

