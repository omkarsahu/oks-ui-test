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
      title="Text: color"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormFieldSet
              type="text"
              label="Default (implicit)"
              name="color_default_implicit"
              placeholder="Type here"
            />
            {colors.map((color) => (
              <FormFieldSet
                key={color}
                type="text"
                label={`Color: ${color}`}
                name={`color_${color}`}
                color={color}
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
      <FormFieldSet type="text" label="Default (implicit)" name="z" />
      <FormFieldSet type="text" label="Default (explicit)" name="y" color="default" />
      <FormFieldSet type="text" label="Primary" name="a" color="primary" />
      <FormFieldSet type="text" label="Success" name="b" color="success" />
      <FormFieldSet type="text" label="Danger" name="c" color="danger" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Tones;
