import React from "react";
import {
  DefaultValue,
  Disabled,
  HowToUse,
  PropsTable,
  Sizes,
  Tones,
  ValidationAndError,
} from "./index";

const Radio = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <DefaultValue />
      <Disabled />
      <Sizes />
      <Tones />
      <ValidationAndError />
      <PropsTable />
    </div>
  );
};

export default Radio;
