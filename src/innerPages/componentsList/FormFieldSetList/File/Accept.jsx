import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Accept = () => {
  return (
    <ShowCode
      title="File: accept"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet type="file" label="Any file" name="any" />
            <FormFieldSet
              type="file"
              label="Images only"
              name="images"
              accept="image/*"
            />
            <FormFieldSet
              type="file"
              label="PDF only"
              name="pdf"
              accept="application/pdf"
            />
            <FormFieldSet
              type="file"
              label="PNG only"
              name="png"
              accept=".png"
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
      <FormFieldSet type="file" label="Images" name="a" accept="image/*" />
      <FormFieldSet type="file" label="PDF" name="b" accept="application/pdf" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Accept;

