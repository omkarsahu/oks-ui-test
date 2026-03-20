import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2 (disabled)", value: "two", disabled: true },
  { label: "Option 3", value: "three" },
];

const Disabled = () => {
  return (
    <ShowCode
      title="Select: disabled"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="select"
              label="Disabled select"
              name="disabled"
              disabled
              placeholder="Select…"
              options={options}
            />
            <FormFieldSet
              type="select"
              label="Disabled option"
              name="disabledOption"
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
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="select" label="Disabled" name="a" disabled options={[{ label: "One", value: "one" }]} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Disabled;

