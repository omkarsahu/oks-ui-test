import React from "react";
import {
  AutoComplete,
  Adornments,
  HowToUse,
  LabelPlacement,
  PropsTable,
  Radius,
  Sizes,
  Tones,
  ValidationAndError,
  Variants,
} from "./index";

const Email = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Sizes />
      <Variants />
      <Adornments />
      <Radius />
      <LabelPlacement />
      <Tones />
      <AutoComplete />
      <ValidationAndError />
      <PropsTable />
    </div>
  );
};

export default Email;
