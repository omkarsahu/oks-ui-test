import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const AutoComplete = () => {
  return (
    <ShowCode
      title="Text: autoComplete"
      preview={
        <div className="flex flex-col gap-6">
          <Form onSubmit={() => {}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormFieldSet
                type="text"
                label='Per-field: autoComplete="name"'
                name="ac_name"
                autoComplete="name"
                placeholder="Full name"
              />
              <FormFieldSet
                type="text"
                label='Per-field: autoComplete="off"'
                name="ac_off"
                autoComplete="off"
                placeholder="No autofill"
              />
            </div>
          </Form>

          <Form disableAutofill={false} autoComplete="on" onSubmit={() => {}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormFieldSet
                type="text"
                label='Form autoComplete="on"'
                name="form_on"
                autoComplete="name"
                placeholder="Browser can suggest"
              />
              <FormFieldSet
                type="text"
                label='Form autoComplete="on" + autoComplete="off"'
                name="form_on_field_off"
                autoComplete="off"
                placeholder="Still off"
              />
            </div>
          </Form>
        </div>
      }
      code={
        <>
          {`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <>
      <Form onSubmit={() => {}}>
        <FormFieldSet type="text" label="Name" name="a" autoComplete="name" />
        <FormFieldSet type="text" label="No autofill" name="b" autoComplete="off" />
      </Form>

      <Form disableAutofill={false} autoComplete="on" onSubmit={() => {}}>
        <FormFieldSet type="text" label="Browser can suggest" name="c" autoComplete="name" />
      </Form>
    </>
  );
}`}
        </>
      }
    />
  );
};

export default AutoComplete;
