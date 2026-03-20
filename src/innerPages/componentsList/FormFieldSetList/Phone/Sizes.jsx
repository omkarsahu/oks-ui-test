import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Sizes = () => {
  const sizes = ["xs", "xs-sm", "sm", "md", "lg", "xl"];

  return (
    <ShowCode
      title="Phone: size"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sizes.map((size) => (
              <FormFieldSet
                key={size}
                type="phone"
                label={`Size: ${size}`}
                name={`size_${size}`}
                size={size}
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
      <FormFieldSet type="phone" label="XS" name="xs" size="xs" />
      <FormFieldSet type="phone" label="MD" name="md" size="md" />
      <FormFieldSet type="phone" label="XL" name="xl" size="xl" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Sizes;

