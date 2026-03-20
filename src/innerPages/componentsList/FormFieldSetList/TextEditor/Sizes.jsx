import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Sizes = () => {
  const sizes = ["xs", "xs-sm", "sm", "md", "lg", "xl"];

  return (
    <ShowCode
      title="Text Editor: size"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sizes.map((size) => (
              <FormFieldSet
                key={size}
                type="textarea"
                label={`Size: ${size}`}
                name={`size_${size}`}
                size={size}
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
      <FormFieldSet type="textarea" label="SM" name="a" size="sm" />
      <FormFieldSet type="textarea" label="LG" name="b" size="lg" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Sizes;

