import React from "react";
import dayjs from "dayjs";
import { Button, Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const HowToUse = () => {
  return (
    <ShowCode
      title="DatePicker: how to use"
      preview={
        <Form onSubmit={(data) => console.log("submit", data)}>
          <div className="flex flex-col gap-4 max-w-md">
            <FormFieldSet
              type="datepicker"
              label="Date of birth"
              name="dob"
              maxDate={dayjs().toDate()}
              validation={{ rules: { required: true } }}
            />
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      }
      code={
        <>
          {`import dayjs from "dayjs";
import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={(data) => console.log("submit", data)}>
      <FormFieldSet
        type="datepicker"
        label="Date of birth"
        name="dob"
        maxDate={dayjs().toDate()}
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

