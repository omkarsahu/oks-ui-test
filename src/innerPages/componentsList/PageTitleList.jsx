import React from "react";
import { HowToUse, Tones, TooltipDemo } from "./PageTitleList/index";

const PageTitleList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Tones />
      <TooltipDemo />
    </div>
  );
};

export default PageTitleList;
