import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Radius = () => {
  const radii = ["none", "sm", "md", "lg", "full"];

  return (
    <ShowCode
      title="Password: radius"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {radii.map((radius) => (
              <FormFieldSet
                key={radius}
                type="password"
                label={`Radius: ${radius}`}
                name={`password_radius_${radius}`}
                {...(radius === "sm" ? { rounded: radius } : { radius })}
                placeholder="Enter password"
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
      <FormFieldSet type="password" label="None" name="a" radius="none" />
      <FormFieldSet type="password" label="Full" name="b" radius="full" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Radius;
