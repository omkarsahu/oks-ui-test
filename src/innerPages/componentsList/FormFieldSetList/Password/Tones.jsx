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
      title="Password: color"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormFieldSet
              type="password"
              label="Default (implicit)"
              name="password_color_default_implicit"
              placeholder="Enter password"
              revealToggle={false}
            />
            {colors.map((color) => (
              <FormFieldSet
                key={color}
                type="password"
                label={`Color: ${color}`}
                name={`password_color_${color}`}
                color={color}
                placeholder="Enter password"
                revealToggle={false}
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
      <FormFieldSet type="password" label="Default (implicit)" name="z" revealToggle={false} />
      <FormFieldSet type="password" label="Default (explicit)" name="y" color="default" revealToggle={false} />
      <FormFieldSet type="password" label="Primary" name="a" color="primary" revealToggle={false} />
      <FormFieldSet type="password" label="Danger" name="b" color="danger" revealToggle={false} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Tones;
