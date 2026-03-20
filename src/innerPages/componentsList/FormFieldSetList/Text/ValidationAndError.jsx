import React from "react";
import { Button, Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const ValidationAndError = () => {
  return (
    <ShowCode
      title="Text: validation and error"
      preview={
        <Form
          onSubmit={() => {}}
          onError={(errors) => {
            console.log("errors", errors);
          }}
          validationMode="blur"
          showErrorsOn="blur"
        >
          <div className="flex flex-col gap-4 max-w-md">
            <FormFieldSet
              type="text"
              label="Username"
              name="username"
              placeholder="At least 3 characters"
              description="This is shown under the field."
              validation={{ rules: { required: true, minLength: 3 } }}
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
    <Form
      onSubmit={() => {}}
      validationMode="blur"
      showErrorsOn="blur"
    >
      <FormFieldSet
        type="text"
        label="Username"
        name="username"
        placeholder="At least 3 characters"
        description="This is shown under the field."
        validation={{ rules: { required: true, minLength: 3 } }}
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

