import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const ColorDepth = () => {
  const depths = [300, 500, 700];

  return (
    <ShowCode
      title="Text: colorDepth"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {depths.map((colorDepth) => (
              <FormFieldSet
                key={colorDepth}
                type="text"
                label={`Primary: ${colorDepth}`}
                name={`primary_${colorDepth}`}
                color="primary"
                colorDepth={colorDepth}
                placeholder="Type here"
              />
            ))}
            {depths.map((colorDepth) => (
              <FormFieldSet
                key={`success_${colorDepth}`}
                type="text"
                label={`Success: ${colorDepth}`}
                name={`success_${colorDepth}`}
                color="success"
                colorDepth={colorDepth}
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
      <FormFieldSet type="text" label="Primary 300" name="a" color="primary" colorDepth={300} />
      <FormFieldSet type="text" label="Primary 700" name="b" color="primary" colorDepth={700} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default ColorDepth;
