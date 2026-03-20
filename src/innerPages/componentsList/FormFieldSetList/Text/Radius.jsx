import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Radius = () => {
  const radii = ["none", "sm", "md", "lg", "full"];

  return (
    <ShowCode
      title="Text: radius"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {radii.map((radius) => (
              <FormFieldSet
                key={radius}
                type="text"
                label={`Radius: ${radius}`}
                name={`text_radius_${radius}`}
                {...(radius === "sm" ? { rounded: radius } : { radius })}
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
      <FormFieldSet type="text" label="None" name="a" radius="none" />
      <FormFieldSet type="text" label="Full" name="b" radius="full" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Radius;
