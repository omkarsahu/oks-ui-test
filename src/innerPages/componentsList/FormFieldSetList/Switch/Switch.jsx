import React from "react";
import {
  Disabled,
  HowToUse,
  PropsTable,
  Sizes,
  StateText,
  Tones,
  ValidationAndError,
} from "./index";

const Switch = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Sizes />
      <Tones />
      <StateText />
      <Disabled />
      <ValidationAndError />
      <PropsTable />
    </div>
  );
};

export default Switch;
