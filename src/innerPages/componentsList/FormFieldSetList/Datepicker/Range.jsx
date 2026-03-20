import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Range = () => {
  return (
    <ShowCode
      title="DatePicker: range"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="datepicker"
              label="Range (single trigger)"
              name="rangeSingle"
              range
              rangeTrigger="single"
            />
            <FormFieldSet
              type="datepicker"
              label="Range (dual trigger)"
              name="rangeDual"
              range
              rangeTrigger="dual"
              monthsToShow={2}
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
      <FormFieldSet type="datepicker" label="Range" name="a" range rangeTrigger="dual" monthsToShow={2} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Range;

