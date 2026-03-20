import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
];

const Tones = () => {
  const colors = ["primary", "secondary", "info", "success", "warning", "danger"];

  return (
    <ShowCode
      title="Select: color"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {colors.map((color) => (
              <FormFieldSet
                key={color}
                type="select"
                label={`Color: ${color}`}
                name={`color_${color}`}
                color={color}
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
      <FormFieldSet type="select" label="Primary" name="a" color="primary" options={options} />
      <FormFieldSet type="select" label="Success" name="b" color="success" options={options} />
      <FormFieldSet type="select" label="Danger" name="c" color="danger" options={options} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Tones;
