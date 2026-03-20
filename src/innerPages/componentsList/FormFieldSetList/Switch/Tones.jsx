import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Tones = () => {
  const tones = ["primary", "secondary", "info", "success", "warning", "danger"];

  return (
    <ShowCode
      title="Switch: tone"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tones.map((tone) => (
              <FormFieldSet
                key={tone}
                type="switch"
                label={`Tone: ${tone}`}
                name={`tone_${tone}`}
                tone={tone}
                showStateText
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
      <FormFieldSet type="switch" label="Primary" name="a" tone="primary" />
      <FormFieldSet type="switch" label="Success" name="b" tone="success" />
      <FormFieldSet type="switch" label="Danger" name="c" tone="danger" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Tones;

