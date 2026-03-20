import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
];

const Sizes = () => {
  const sizes = ["xs", "xs-sm", "sm", "md", "lg", "xl"];

  return (
    <ShowCode
      title="Radio: size"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sizes.map((size) => (
              <FormFieldSet
                key={size}
                type="radio"
                label={`Size: ${size}`}
                name={`size_${size}`}
                size={size}
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
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="radio" label="SM" name="a" size="sm" options={[{ label: "A", value: "a" }]} />
      <FormFieldSet type="radio" label="LG" name="b" size="lg" options={[{ label: "A", value: "a" }]} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Sizes;

