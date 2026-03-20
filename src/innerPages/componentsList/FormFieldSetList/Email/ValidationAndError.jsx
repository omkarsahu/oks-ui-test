import React from "react";
import { Button, Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const ValidationAndError = () => {
  return (
    <ShowCode
      title="Email: validation and error"
      preview={
        <Form
          onSubmit={() => {}}
          validationMode="blur"
          showErrorsOn="blur"
          onError={(errors) => console.log("errors", errors)}
        >
          <div className="flex flex-col gap-4 max-w-md">
            <FormFieldSet
              type="email"
              label="Email"
              name="email"
              placeholder="name@company.com"
              description="Must be a valid email address."
              validation={{ rules: { required: true, email: true } }}
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
        type="email"
        label="Email"
        name="email"
        placeholder="name@company.com"
        description="Must be a valid email address."
        validation={{ rules: { required: true, email: true } }}
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

