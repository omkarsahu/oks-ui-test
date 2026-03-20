import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const DotIcon = () => (
  <span
    aria-hidden="true"
    className="inline-flex w-5 h-5 rounded-full bg-slate-300"
  />
);

const Adornments = () => {
  return (
    <ShowCode
      title="Text: adornments"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="text"
              label="Prefix"
              name="text_prefix"
              prefix="kg"
              placeholder="0"
            />
            <FormFieldSet
              type="text"
              label="Suffix"
              name="text_suffix"
              suffix="kg"
              placeholder="0"
            />
            <FormFieldSet
              type="text"
              label="Start icon"
              name="text_start_icon"
              startIcon={<DotIcon />}
              placeholder="Type here"
            />
            <FormFieldSet
              type="text"
              label="End icon"
              name="text_end_icon"
              endIcon={<DotIcon />}
              placeholder="Type here"
            />
            <FormFieldSet
              type="text"
              label="Icon + prefix"
              name="text_icon_prefix"
              startIcon={<DotIcon />}
              prefix="kg"
              placeholder="0"
            />
            <FormFieldSet
              type="text"
              label="Suffix + icon"
              name="text_suffix_icon"
              suffix="kg"
              endIcon={<DotIcon />}
              placeholder="0"
            />
          </div>
        </Form>
      }
      code={
        <>
          {`import { Form, FormFieldSet } from "oks-ui";

const DotIcon = () => (
  <span aria-hidden="true" className="inline-flex w-5 h-5 rounded-full bg-slate-300" />
);

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="text" label="Prefix" name="a" prefix="kg" />
      <FormFieldSet type="text" label="Suffix" name="b" suffix="kg" />
      <FormFieldSet type="text" label="Start icon" name="c" startIcon={<DotIcon />} />
      <FormFieldSet type="text" label="End icon" name="d" endIcon={<DotIcon />} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Adornments;
