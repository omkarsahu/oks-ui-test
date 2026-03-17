import React from "react";
import {
  ClassNames,
  Closable,
  Colors,
  EndContent,
  HowToUse,
  IconControls,
  PropsTable,
  Radius,
  Variants,
  Visible,
} from "./AlertList/index";

const AlertList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Colors />
      <Variants />
      <Radius />
      <IconControls />
      <EndContent />
      <Closable />
      <Visible />
      <ClassNames />
      <PropsTable />
    </div>
  );
};

export default AlertList;
