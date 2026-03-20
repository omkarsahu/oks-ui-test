import React from "react";
import {
  AutoComplete,
  Adornments,
  Disabled,
  HowToUse,
  LabelPlacement,
  PropsTable,
  Radius,
  RevealToggle,
  Sizes,
  Tones,
  ValidationAndError,
  Variants,
} from "./index";

const Password = () => {
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
      <RevealToggle />
      <Disabled />
      <ValidationAndError />
      <PropsTable />
    </div>
  );
};

export default Password;
