import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B (disabled)", value: "b", disabled: true },
  { label: "Option C", value: "c" },
];

const Disabled = () => {
  return (
    <ShowCode
      title="Checkbox: disabled"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="checkbox"
              label="Disabled group"
              name="disabledGroup"
              disabled
              options={options}
            />
            <FormFieldSet
              type="checkbox"
              label="Disabled option"
              name="disabledOption"
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
      <FormFieldSet type="checkbox" label="Disabled group" name="a" disabled options={[{ label: "A", value: "a" }]} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Disabled;

