import React from "react";
import {
  Clearable,
  Constraints,
  HowToUse,
  LabelPlacement,
  Presets,
  PropsTable,
  Range,
  Time,
  ValidationAndError,
  Variants,
} from "./index";

const DatePicker = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Constraints />
      <Clearable />
      <Time />
      <Presets />
      <Range />
      <Variants />
      <LabelPlacement />
      <ValidationAndError />
      <PropsTable />
    </div>
  );
};

export default DatePicker;
