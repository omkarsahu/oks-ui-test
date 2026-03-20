import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Disabled = () => {
  return (
    <ShowCode
      title="Password: disabled"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormFieldSet
              type="password"
              label="Disabled"
              name="disabled"
              disabled
              placeholder="Disabled"
            />
            <FormFieldSet
              type="password"
              label="Enabled"
              name="enabled"
              placeholder="Enabled"
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
      <FormFieldSet type="password" label="Disabled" name="a" disabled />
      <FormFieldSet type="password" label="Enabled" name="b" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Disabled;
