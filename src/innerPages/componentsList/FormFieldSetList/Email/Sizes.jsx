import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Sizes = () => {
  const sizes = ["xs", "xs-sm", "sm", "md", "lg", "xl"];

  return (
    <ShowCode
      title="Email: size"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sizes.map((size) => (
              <FormFieldSet
                key={size}
                type="email"
                label={`Size: ${size}`}
                name={`size_${size}`}
                size={size}
                placeholder="Enter your email"
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
      <FormFieldSet type="email" label="XS" name="xs" size="xs" />
      <FormFieldSet type="email" label="MD" name="md" size="md" />
      <FormFieldSet type="email" label="XL" name="xl" size="xl" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Sizes;
