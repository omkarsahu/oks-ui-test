import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Rows = () => {
  return (
    <ShowCode
      title="Text Editor: rows"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="textarea"
              label="Rows: 3"
              name="rows3"
              rows={3}
              placeholder="3 rows"
            />
            <FormFieldSet
              type="textarea"
              label="Rows: 8"
              name="rows8"
              rows={8}
              placeholder="8 rows"
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
      <FormFieldSet type="textarea" label="Rows 6" name="a" rows={6} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Rows;

