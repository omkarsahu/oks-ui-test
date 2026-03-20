import React, { useState } from "react";
import { Button, Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const ValueDefaultValue = () => {
  const [value, setValue] = useState("Controlled value");

  return (
    <ShowCode
      title="Text: value vs defaultValue"
      preview={
        <Form
          onSubmit={(data) => {
            console.log("submit", data);
          }}
        >
          <div className="flex flex-col gap-4 max-w-md">
            <FormFieldSet
              type="text"
              label='Uncontrolled (defaultValue="Hello")'
              name="uncontrolled"
              defaultValue="Hello"
            />

            <FormFieldSet
              type="text"
              label="Controlled (value + onChange)"
              name="controlled"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <div className="flex gap-3">
              <Button type="button" onPress={() => setValue("Preset value")}>
                Set preset
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </Form>
      }
      code={
        <>
          {`import React, { useState } from "react";
import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  const [value, setValue] = useState("Controlled value");

  return (
    <Form onSubmit={(data) => console.log("submit", data)}>
      <FormFieldSet
        type="text"
        label='Uncontrolled (defaultValue="Hello")'
        name="uncontrolled"
        defaultValue="Hello"
      />

      <FormFieldSet
        type="text"
        label="Controlled"
        name="controlled"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button type="button" onPress={() => setValue("Preset value")}>
        Set preset
      </Button>
      <Button type="submit">Submit</Button>
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default ValueDefaultValue;

