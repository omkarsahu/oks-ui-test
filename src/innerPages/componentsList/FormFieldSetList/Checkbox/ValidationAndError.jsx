import React from "react";
import { Button, Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const ValidationAndError = () => {
  return (
    <ShowCode
      title="Checkbox: validation and error"
      preview={
        <Form onSubmit={() => {}} validationMode="blur" showErrorsOn="blur">
          <div className="flex flex-col gap-4 max-w-md">
            <FormFieldSet
              type="checkbox"
              label="Pick at least one"
              name="pick"
              description="Required field."
              options={[
                { label: "Option A", value: "a" },
                { label: "Option B", value: "b" },
                { label: "Option C", value: "c" },
              ]}
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
      <FormFieldSet
        type="checkbox"
        label="Pick at least one"
        name="pick"
        options={[
          { label: "Option A", value: "a" },
          { label: "Option B", value: "b" },
        ]}
        validation={{ rules: { required: true } }}
      />
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

