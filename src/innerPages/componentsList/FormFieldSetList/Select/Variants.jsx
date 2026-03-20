import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
];

const Variants = () => {
  const variants = ["outline", "soft", "underline"];

  return (
    <ShowCode
      title="Select: variant"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {variants.map((variant) => (
              <FormFieldSet
                key={variant}
                type="select"
                label={`Variant: ${variant}`}
                name={`variant_${variant}`}
                variant={variant}
                placeholder="Select…"
                options={options}
              />
            ))}
          </div>
        </Form>
      }
      code={
        <>
          {`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  const options = [
    { label: "Option 1", value: "one" },
    { label: "Option 2", value: "two" },
  ];

  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="select" label="Outline" name="a" variant="outline" options={options} />
      <FormFieldSet type="select" label="Soft" name="b" variant="soft" options={options} />
      <FormFieldSet type="select" label="Underline" name="c" variant="underline" options={options} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Variants;
