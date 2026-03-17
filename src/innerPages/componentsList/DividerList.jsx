import React from "react";
import { HowToUse, PropsTable, Variants, Vertical } from "./DividerList/index";

const DividerList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Variants />
      <Vertical />
      <PropsTable />
    </div>
  );
};

export default DividerList;
