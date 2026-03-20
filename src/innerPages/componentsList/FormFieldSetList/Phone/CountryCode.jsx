import React from "react";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const CountryCode = () => {
  return (
    <ShowCode
      title="Phone: country code"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="phone"
              label="Default country: +1"
              name="us"
              defaultCountryCode="+1"
            />
            <FormFieldSet
              type="phone"
              label="Default country: +91"
              name="in"
              defaultCountryCode="+91"
            />
            <FormFieldSet
              type="phone"
              label="Country code hidden"
              name="hidden"
              countryCodeMode="hidden"
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
      <FormFieldSet type="phone" label="Phone (+91)" name="phone" defaultCountryCode="+91" />
      <FormFieldSet type="phone" label="Hidden code" name="phone2" countryCodeMode="hidden" />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default CountryCode;

