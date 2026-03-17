import React from "react";
import { HowToUse, PropsTable, Tones, TooltipDemo } from "./PageTitleList/index";

const PageTitleList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <PropsTable />
      <Tones />
      <TooltipDemo />
    </div>
  );
};

export default PageTitleList;
