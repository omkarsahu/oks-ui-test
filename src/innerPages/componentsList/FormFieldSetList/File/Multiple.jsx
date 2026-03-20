import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Multiple = () => {
  return (
    <ShowCode
      title="File: multiple"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet type="file" label="Single" name="single" />
            <FormFieldSet
              type="file"
              label="Multiple"
              name="multiple"
              multiple
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
      <FormFieldSet type="file" label="Multiple" name="a" multiple />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Multiple;

