import React from "react";
import { HowToUse, Variants, Vertical } from "./DividerList/index";

const DividerList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Variants />
      <Vertical />
    </div>
  );
};

export default DividerList;
