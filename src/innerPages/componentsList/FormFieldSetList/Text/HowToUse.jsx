import React from "react";
import { Button, Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const HowToUse = () => {
  return (
    <ShowCode
      title='Text: how to use'
      preview={
        <Form
          onSubmit={(data) => {
            console.log("submit", data);
          }}
        >
          <div className="flex flex-col gap-4 max-w-md">
            <FormFieldSet
              type="text"
              label="Name"
              name="name"
              placeholder="Enter your name"
              validation={{ rules: { required: true, minLength: 3 } }}
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
        type="text"
        label="Name"
        name="name"
        placeholder="Enter your name"
        validation={{ rules: { required: true, minLength: 3 } }}
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

