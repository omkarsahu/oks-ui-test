import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Tones = () => {
  const colors = [
    "default",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
  ];

  return (
    <ShowCode
      title="Email: color"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormFieldSet
              type="email"
              label="Default (implicit)"
              name="color_default_implicit"
              placeholder="Enter your email"
              autoComplete="email"
            />
            {colors.map((color) => (
              <FormFieldSet
                key={color}
                type="email"
                label={`Color: ${color}`}
                name={`color_${color}`}
                color={color}
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
      <FormFieldSet type="email" label="Default (implicit)" name="z" />
      <FormFieldSet type="email" label="Default (explicit)" name="y" color="default" />
      <FormFieldSet type="email" label="Primary" name="a" color="primary" />
      <FormFieldSet type="email" label="Success" name="b" color="success" />
      <FormFieldSet type="email" label="Danger" name="c" color="danger" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Tones;
