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
      title="Password: adornments"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="password"
              label="Start icon + prefix"
              name="password_start_prefix"
              startIcon={<DotIcon />}
              prefix="key"
              placeholder="Enter password"
              revealToggle={false}
            />
            <FormFieldSet
              type="password"
              label="Suffix + end icon"
              name="password_suffix_end_icon"
              suffix="123"
              endIcon={<DotIcon />}
              placeholder="Enter password"
              revealToggle={false}
            />
            <FormFieldSet
              type="password"
              label="Reveal toggle + suffix"
              name="password_reveal_suffix"
              suffix="kg"
              placeholder="Enter password"
            />
            <FormFieldSet
              type="password"
              label="Reveal toggle + end icon"
              name="password_reveal_end_icon"
              endIcon={<DotIcon />}
              placeholder="Enter password"
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
      <FormFieldSet type="password" label="Prefix" name="a" prefix="key" revealToggle={false} />
      <FormFieldSet type="password" label="Reveal + suffix" name="b" suffix="kg" />
      <FormFieldSet type="password" label="Reveal + end icon" name="c" endIcon={<DotIcon />} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Adornments;
