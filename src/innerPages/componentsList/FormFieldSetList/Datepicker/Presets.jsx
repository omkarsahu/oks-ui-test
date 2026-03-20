import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Presets = () => {
  return (
    <ShowCode
      title="DatePicker: presets"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="datepicker"
              label="Presets"
              name="presets"
              showPresets
            />
            <FormFieldSet
              type="datepicker"
              label="No presets"
              name="noPresets"
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
      <FormFieldSet type="datepicker" label="Presets" name="a" showPresets />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Presets;

