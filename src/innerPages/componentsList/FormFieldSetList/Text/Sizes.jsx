import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Sizes = () => {
  const sizes = ["xs", "xs-sm", "sm", "md", "lg", "xl"];

  return (
    <ShowCode
      title="Text: size"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sizes.map((size) => (
              <FormFieldSet
                key={size}
                type="text"
                label={`Size: ${size}`}
                name={`size_${size}`}
                size={size}
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
      <FormFieldSet type="text" label="XS" name="xs" size="xs" />
      <FormFieldSet type="text" label="MD" name="md" size="md" />
      <FormFieldSet type="text" label="XL" name="xl" size="xl" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Sizes;
