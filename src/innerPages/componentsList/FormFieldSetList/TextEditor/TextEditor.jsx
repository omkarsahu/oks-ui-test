import React from "react";
import {
  HowToUse,
  LabelPlacement,
  PropsTable,
  Rows,
  Sizes,
  Tones,
  ValidationAndError,
  Variants,
} from "./index";

const TextEditor = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Rows />
      <Sizes />
      <Variants />
      <LabelPlacement />
      <Tones />
      <ValidationAndError />
      <PropsTable />
    </div>
  );
};

export default TextEditor;
