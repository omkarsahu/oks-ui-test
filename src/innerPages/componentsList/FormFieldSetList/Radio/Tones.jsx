import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
];

const Tones = () => {
  const tones = ["primary", "secondary", "info", "success", "warning", "danger"];

  return (
    <ShowCode
      title="Radio: tone"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tones.map((tone) => (
              <FormFieldSet
                key={tone}
                type="radio"
                label={`Tone: ${tone}`}
                name={`tone_${tone}`}
                tone={tone}
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
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="radio" label="Primary" name="a" tone="primary" options={[{ label: "A", value: "a" }]} />
      <FormFieldSet type="radio" label="Success" name="b" tone="success" options={[{ label: "A", value: "a" }]} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Tones;

