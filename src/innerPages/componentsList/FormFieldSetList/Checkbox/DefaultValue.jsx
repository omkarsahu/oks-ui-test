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
      title="Checkbox: defaultValue"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="checkbox"
              label="No default"
              name="noDefault"
              options={options}
            />
            <FormFieldSet
              type="checkbox"
              label='Default value: ["a", "c"]'
              name="defaultValue"
              defaultValue={["a", "c"]}
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
        type="checkbox"
        label="Default value"
        name="a"
        defaultValue={["a", "c"]}
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

