import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Tones = () => {
  const tones = ["primary", "secondary", "info", "success", "warning", "danger"];

  return (
    <ShowCode
      title="Phone: tone"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tones.map((tone) => (
              <FormFieldSet
                key={tone}
                type="phone"
                label={`Tone: ${tone}`}
                name={`tone_${tone}`}
                tone={tone}
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
      <FormFieldSet type="phone" label="Primary" name="a" tone="primary" />
      <FormFieldSet type="phone" label="Success" name="b" tone="success" />
      <FormFieldSet type="phone" label="Danger" name="c" tone="danger" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Tones;

