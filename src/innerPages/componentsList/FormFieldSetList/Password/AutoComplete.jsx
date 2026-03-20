import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const AutoComplete = () => {
  return (
    <ShowCode
      title="Password: autoComplete"
      preview={
        <div className="flex flex-col gap-6">
          <Form onSubmit={() => {}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormFieldSet
                type="password"
                label='Per-field: "current-password"'
                name="ac_current"
                autoComplete="current-password"
                placeholder="Login password"
              />
              <FormFieldSet
                type="password"
                label='Per-field: "new-password"'
                name="ac_new"
                autoComplete="new-password"
                placeholder="New password"
              />
            </div>
          </Form>

          <Form disableAutofill={false} autoComplete="on" onSubmit={() => {}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormFieldSet
                type="password"
                label='Form autoComplete="on"'
                name="form_on"
                autoComplete="current-password"
                placeholder="Browser can suggest"
              />
              <FormFieldSet
                type="password"
                label='Form autoComplete="on" + "new-password"'
                name="form_on_new"
                autoComplete="new-password"
                placeholder="Signup password"
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
        <FormFieldSet type="password" label="Login" name="a" autoComplete="current-password" />
        <FormFieldSet type="password" label="Signup" name="b" autoComplete="new-password" />
      </Form>

      <Form disableAutofill={false} autoComplete="on" onSubmit={() => {}}>
        <FormFieldSet type="password" label="Allow autofill" name="c" autoComplete="current-password" />
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
