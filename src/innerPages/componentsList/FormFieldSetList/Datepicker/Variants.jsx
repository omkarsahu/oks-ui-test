import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Variants = () => {
  const variants = ["outline", "soft", "underline"];

  return (
    <ShowCode
      title="DatePicker: variant"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {variants.map((variant) => (
              <FormFieldSet
                key={variant}
                type="datepicker"
                label={`Variant: ${variant}`}
                name={`datepicker_variant_${variant}`}
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
      <FormFieldSet type="datepicker" label="Outline" name="a" variant="outline" />
      <FormFieldSet type="datepicker" label="Soft" name="b" variant="soft" />
      <FormFieldSet type="datepicker" label="Underline" name="c" variant="underline" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Variants;
