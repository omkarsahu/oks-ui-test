import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Time = () => {
  return (
    <ShowCode
      title="DatePicker: withTime"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet type="datepicker" label="Date only" name="dateOnly" />
            <FormFieldSet
              type="datepicker"
              label="With time"
              name="withTime"
              withTime
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
      <FormFieldSet type="datepicker" label="With time" name="a" withTime />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Time;

