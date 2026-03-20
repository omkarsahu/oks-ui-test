import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Variants = () => {
  const variants = ["outline", "soft", "underline"];

  return (
    <ShowCode
      title="Password: variant"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {variants.map((variant) => (
              <FormFieldSet
                key={variant}
                type="password"
                label={`Variant: ${variant}`}
                name={`variant_${variant}`}
                variant={variant}
                placeholder="Enter password"
              />
            ))}
          </div>
        </Form>
      }
      code={
        <>
          {`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="password" label="Outline" name="a" variant="outline" />
      <FormFieldSet type="password" label="Soft" name="b" variant="soft" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Variants;
