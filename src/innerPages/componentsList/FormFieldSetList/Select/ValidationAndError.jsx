import React from "react";
import { Button, Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
];

const ValidationAndError = () => {
  return (
    <ShowCode
      title="Select: validation and error"
      preview={
        <Form onSubmit={() => {}} validationMode="blur" showErrorsOn="blur">
          <div className="flex flex-col gap-4 max-w-md">
            <FormFieldSet
              type="select"
              label="Pick one"
              name="pick"
              placeholder="Select…"
              options={options}
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
        type="select"
        label="Pick one"
        name="pick"
        placeholder="Select…"
        options={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
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

