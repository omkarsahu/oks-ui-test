import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Variants = () => {
  const variants = ["outline", "soft", "underline"];

  return (
    <ShowCode
      title="Text: variant"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {variants.map((variant) => (
              <FormFieldSet
                key={variant}
                type="text"
                label={`Variant: ${variant}`}
                name={`variant_${variant}`}
                variant={variant}
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
      <FormFieldSet type="text" label="Outline" name="a" variant="outline" />
      <FormFieldSet type="text" label="Soft" name="b" variant="soft" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Variants;
