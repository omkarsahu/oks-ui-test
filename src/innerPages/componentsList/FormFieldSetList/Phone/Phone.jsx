import React from "react";
import {
  CountryCode,
  HowToUse,
  LabelPlacement,
  NumbersOnly,
  PropsTable,
  Sizes,
  Tones,
  ValidationAndError,
  Variants,
} from "./index";

const Phone = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <CountryCode />
      <NumbersOnly />
      <Sizes />
      <Variants />
      <LabelPlacement />
      <Tones />
      <ValidationAndError />
      <PropsTable />
    </div>
  );
};

export default Phone;
