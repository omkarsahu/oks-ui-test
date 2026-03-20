import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Variants = () => {
  const variants = ["outline", "soft"];

  return (
    <ShowCode
      title="Text Editor: variant"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {variants.map((variant) => (
              <FormFieldSet
                key={variant}
                type="textarea"
                label={`Variant: ${variant}`}
                name={`variant_${variant}`}
                variant={variant}
                rows={4}
                placeholder="Type here"
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
      <FormFieldSet type="textarea" label="Outline" name="a" variant="outline" />
      <FormFieldSet type="textarea" label="Soft" name="b" variant="soft" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Variants;

