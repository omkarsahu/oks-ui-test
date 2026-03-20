import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Variants = () => {
  const variants = ["outline", "soft", "underline"];

  return (
    <ShowCode
      title="Phone: variant"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {variants.map((variant) => (
              <FormFieldSet
                key={variant}
                type="phone"
                label={`Variant: ${variant}`}
                name={`variant_${variant}`}
                variant={variant}
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
      <FormFieldSet type="phone" label="Outline" name="a" variant="outline" />
      <FormFieldSet type="phone" label="Soft" name="b" variant="soft" />
      <FormFieldSet type="phone" label="Underline" name="c" variant="underline" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Variants;
