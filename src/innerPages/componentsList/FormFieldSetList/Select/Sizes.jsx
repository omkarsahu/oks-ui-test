import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
];

const Sizes = () => {
  const sizes = ["xs", "xs-sm", "sm", "md", "lg", "xl"];

  return (
    <ShowCode
      title="Select: size"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sizes.map((size) => (
              <FormFieldSet
                key={size}
                type="select"
                label={`Size: ${size}`}
                name={`size_${size}`}
                size={size}
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
      <FormFieldSet type="select" label="SM" name="a" size="sm" options={options} />
      <FormFieldSet type="select" label="LG" name="b" size="lg" options={options} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Sizes;

