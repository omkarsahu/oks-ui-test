import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Tones = () => {
  const tones = ["primary", "secondary", "info", "success", "warning", "danger"];

  return (
    <ShowCode
      title="Text Editor: tone"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tones.map((tone) => (
              <FormFieldSet
                key={tone}
                type="textarea"
                label={`Tone: ${tone}`}
                name={`tone_${tone}`}
                tone={tone}
                rows={4}
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
      <FormFieldSet type="textarea" label="Primary" name="a" tone="primary" />
      <FormFieldSet type="textarea" label="Success" name="b" tone="success" />
      <FormFieldSet type="textarea" label="Danger" name="c" tone="danger" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Tones;

