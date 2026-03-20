import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const NumbersOnly = () => {
  return (
    <ShowCode
      title="Phone: numbersOnly"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="phone"
              label="Numbers only"
              name="numbersOnly"
              numbersOnly={true}
              phonePlaceholder="Phone number"
            />
            <FormFieldSet
              type="phone"
              label="Allow non-digits"
              name="nonDigits"
              numbersOnly={false}
              phonePlaceholder="e.g. (555) 123-4567"
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
      <FormFieldSet type="phone" label="Digits only" name="a" numbersOnly />
      <FormFieldSet type="phone" label="Allow formatting" name="b" numbersOnly={false} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default NumbersOnly;

