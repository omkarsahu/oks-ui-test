import React from "react";
import { Button, Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const HowToUse = () => {
  return (
    <ShowCode
      title="Checkbox: how to use"
      preview={
        <Form onSubmit={(data) => console.log("submit", data)}>
          <div className="flex flex-col gap-4 max-w-md">
            <FormFieldSet
              type="checkbox"
              label="Hobby"
              name="hobby"
              options={[
                { label: "Reading", value: "reading" },
                { label: "Traveling", value: "traveling" },
                { label: "Cooking", value: "cooking" },
              ]}
              validation={{ rules: { required: true } }}
            />
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      }
      code={
        <>
          {`import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={(data) => console.log("submit", data)}>
      <FormFieldSet
        type="checkbox"
        label="Hobby"
        name="hobby"
        options={[
          { label: "Reading", value: "reading" },
          { label: "Traveling", value: "traveling" },
          { label: "Cooking", value: "cooking" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default HowToUse;

