import React from "react";
import {
  AutoComplete,
  Adornments,
  ColorDepth,
  DisabledAndRequired,
  HowToUse,
  LabelPlacement,
  PropsTable,
  Radius,
  Sizes,
  Tones,
  ValidationAndError,
  ValueDefaultValue,
  Variants,
} from "./index";

const Text = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Sizes />
      <Variants />
      <Adornments />
      <Radius />
      <LabelPlacement />
      <Tones />
      <ColorDepth />
      <AutoComplete />
      <ValueDefaultValue />
      <DisabledAndRequired />
      <ValidationAndError />
      <PropsTable />
    </div>
  );
};

export default Text;
