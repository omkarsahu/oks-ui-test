import React from "react";
import dayjs from "dayjs";
import { Form, FormFieldSet } from "oks-ui";
import { ShowCode } from "../../../../components";

const Constraints = () => {
  const today = dayjs();
  const min = today.subtract(30, "day").toDate();
  const max = today.add(30, "day").toDate();

  return (
    <ShowCode
      title="DatePicker: min/max"
      preview={
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldSet
              type="datepicker"
              label="Min/Max"
              name="minMax"
              minDate={min}
              maxDate={max}
            />
            <FormFieldSet
              type="datepicker"
              label="Max only"
              name="maxOnly"
              maxDate={max}
            />
          </div>
        </Form>
      }
      code={
        <>
          {`import dayjs from "dayjs";
import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  const min = dayjs().subtract(30, "day").toDate();
  const max = dayjs().add(30, "day").toDate();

  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="datepicker" label="Min/Max" name="a" minDate={min} maxDate={max} />
    </Form>
  );
}`}
        </>
      }
    />
  );
};

export default Constraints;

