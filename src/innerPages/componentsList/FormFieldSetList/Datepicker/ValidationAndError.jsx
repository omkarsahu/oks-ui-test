import React from "react";
import { Button, Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const ValidationAndError = () => {
  return (
    <ShowCode
      title="DatePicker: validation and error"
      preview={
        <Form onSubmit={() => {}} validationMode="blur" showErrorsOn="blur">
          <div className="flex flex-col gap-4 max-w-md">
            <FormFieldSet
              type="datepicker"
              label="Required date"
              name="date"
              validation={{ rules: { required: true } }}
            />
            <FormFieldSet
              type="datepicker"
              label="Required range"
              name="range"
              range
              rangeTrigger="dual"
              monthsToShow={2}
              validation={{ rules: { required: true } }}
            />
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      }
      code={
        <>
          {`import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}} validationMode="blur" showErrorsOn="blur">
      <FormFieldSet type="datepicker" label="Required date" name="date" validation={{ rules: { required: true } }} />
      <FormFieldSet type="datepicker" label="Required range" name="range" range rangeTrigger="dual" monthsToShow={2} validation={{ rules: { required: true } }} />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default ValidationAndError;

