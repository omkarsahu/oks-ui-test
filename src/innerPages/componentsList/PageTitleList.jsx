import React from "react";
import {
  AsVsTag,
  ClassNameVsSlots,
  ColorDepth,
  HowToUse,
  InlineStyle,
  PropsTable,
  Tones,
  TooltipDemo,
} from "./PageTitleList/index";

const PageTitleList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Tones />
      <ColorDepth />
      <AsVsTag />
      <ClassNameVsSlots />
      <TooltipDemo />
      <InlineStyle />
      <PropsTable />
    </div>
  );
};

export default PageTitleList;
