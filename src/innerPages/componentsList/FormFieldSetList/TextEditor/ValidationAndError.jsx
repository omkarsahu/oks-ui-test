import React from "react";
import { Button, Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const ValidationAndError = () => {
  return (
    <ShowCode
      title="Text Editor (textarea): validation and error"
      preview={
        <Form onSubmit={() => {}} validationMode="blur" showErrorsOn="blur">
          <div className="flex flex-col gap-4 max-w-xl">
            <FormFieldSet
              type="textarea"
              label="Message"
              name="message"
              placeholder="At least 10 characters"
              description="Required and minLength."
              validation={{ rules: { required: true, minLength: 10 } }}
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
        type="textarea"
        label="Message"
        name="message"
        validation={{ rules: { required: true, minLength: 10 } }}
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

