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
      title="Email: adornments"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="email"
              label="Start icon"
              name="email_start_icon"
              startIcon={<DotIcon />}
              placeholder="Enter your email"
              autoComplete="email"
            />
            <FormFieldSet
              type="email"
              label="Suffix"
              name="email_suffix"
              suffix="@company.com"
              placeholder="username"
              autoComplete="email"
            />
            <FormFieldSet
              type="email"
              label="Icon + prefix"
              name="email_icon_prefix"
              startIcon={<DotIcon />}
              prefix="mailto:"
              placeholder="user@domain.com"
              autoComplete="email"
            />
            <FormFieldSet
              type="email"
              label="Suffix + icon"
              name="email_suffix_icon"
              suffix=".com"
              endIcon={<DotIcon />}
              placeholder="user@domain"
              autoComplete="email"
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
      <FormFieldSet type="email" label="Start icon" name="a" startIcon={<DotIcon />} />
      <FormFieldSet type="email" label="Suffix" name="b" suffix="@company.com" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Adornments;
