import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const RevealToggle = () => {
  return (
    <ShowCode
      title="Password: revealToggle"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormFieldSet
              type="password"
              label="Reveal toggle on"
              name="on"
              revealToggle
              placeholder="With eye icon"
            />
            <FormFieldSet
              type="password"
              label="Reveal toggle off"
              name="off"
              revealToggle={false}
              placeholder="No eye icon"
            />
          </div>
        </Form>
      }
      code={
        <>
          {`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="password" label="On" name="a" revealToggle />
      <FormFieldSet type="password" label="Off" name="b" revealToggle={false} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default RevealToggle;
