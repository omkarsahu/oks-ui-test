import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const AutoComplete = () => {
  return (
    <ShowCode
      title="Email: autoComplete"
      preview={
        <div className="flex flex-col gap-6">
          <Form onSubmit={() => {}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormFieldSet
                type="email"
                label='Per-field: autoComplete="email"'
                name="ac_email"
                autoComplete="email"
                placeholder="name@company.com"
              />
              <FormFieldSet
                type="email"
                label='Per-field: autoComplete="off"'
                name="ac_off"
                autoComplete="off"
                placeholder="name@company.com"
              />
            </div>
          </Form>

          <Form disableAutofill={false} autoComplete="on" onSubmit={() => {}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormFieldSet
                type="email"
                label='Form autoComplete="on"'
                name="form_on"
                autoComplete="email"
                placeholder="Browser can suggest"
              />
              <FormFieldSet
                type="email"
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
        <FormFieldSet type="email" label="Email" name="a" autoComplete="email" />
        <FormFieldSet type="email" label="No autofill" name="b" autoComplete="off" />
      </Form>

      <Form disableAutofill={false} autoComplete="on" onSubmit={() => {}}>
        <FormFieldSet type="email" label="Browser can suggest" name="c" autoComplete="email" />
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
