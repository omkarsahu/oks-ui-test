import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const DisabledAndRequired = () => {
  return (
    <ShowCode
      title="Text: disabled / required"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="text"
              label="Disabled"
              name="disabled"
              disabled
              placeholder="Disabled"
            />
            <FormFieldSet
              type="text"
              label="Required"
              name="required"
              required
              placeholder="Required"
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
      <FormFieldSet type="text" label="Disabled" name="a" disabled />
      <FormFieldSet type="text" label="Required" name="b" required />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default DisabledAndRequired;

