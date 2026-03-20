import React from "react";
import { Button, Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const ValidationAndError = () => {
  return (
    <ShowCode
      title="Password: validation and error"
      preview={
        <Form onSubmit={() => {}} validationMode="blur" showErrorsOn="blur">
          <div className="flex flex-col gap-4 max-w-md">
            <FormFieldSet
              type="password"
              label="Password"
              name="password"
              placeholder="Try: Aa1!aaaa"
              description="Focus the field to see requirements."
              validation={{
                rules: {
                  required: true,
                  strongPassword: {
                    minLength: 8,
                    minUpper: 1,
                    minLower: 1,
                    minNumber: 1,
                    minSpecial: 1,
                  },
                },
              }}
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
        type="password"
        label="Password"
        name="password"
        validation={{
          rules: {
            required: true,
            strongPassword: {
              minLength: 8,
              minUpper: 1,
              minLower: 1,
              minNumber: 1,
              minSpecial: 1,
            },
          },
        }}
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

