import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const StateText = () => {
  return (
    <ShowCode
      title="Switch: state text"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="switch"
              label="State text (after)"
              name="after"
              showStateText
              stateTextPlacement="after"
            />
            <FormFieldSet
              type="switch"
              label="State text (both)"
              name="both"
              showStateText
              stateTextPlacement="both"
              checkedText="On"
              uncheckedText="Off"
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
      <FormFieldSet type="switch" label="State text" name="a" showStateText stateTextPlacement="both" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default StateText;

