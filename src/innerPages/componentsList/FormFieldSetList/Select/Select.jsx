import React from "react";
import {
  Disabled,
  HowToUse,
  LabelPlacement,
  Mode,
  Multiple,
  Placeholder,
  PropsTable,
  Sizes,
  Tones,
  ValidationAndError,
  Variants,
} from "./index";

const Select = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Mode />
      <Multiple />
      <Placeholder />
      <Disabled />
      <Sizes />
      <Variants />
      <LabelPlacement />
      <Tones />
      <ValidationAndError />
      <PropsTable />
    </div>
  );
};

export default Select;
