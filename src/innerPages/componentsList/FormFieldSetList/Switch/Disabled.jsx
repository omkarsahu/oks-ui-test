import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Disabled = () => {
  return (
    <ShowCode
      title="Switch: disabled"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet type="switch" label="Disabled" name="disabled" disabled />
            <FormFieldSet type="switch" label="Enabled" name="enabled" />
          </div>
        </Form>
      }
      code={
        <>
          {`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="switch" label="Disabled" name="a" disabled />
      <FormFieldSet type="switch" label="Enabled" name="b" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Disabled;

