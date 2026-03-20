import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Clearable = () => {
  return (
    <ShowCode
      title="DatePicker: clearable"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="datepicker"
              label="Clearable"
              name="clearable"
              clearable
            />
            <FormFieldSet
              type="datepicker"
              label="Not clearable"
              name="notClearable"
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
      <FormFieldSet type="datepicker" label="Clearable" name="a" clearable />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Clearable;

