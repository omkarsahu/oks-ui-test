import React from "react";
import { HowToUse, Options, Positions, PropsTable } from "./DrawerList/index";

const DrawerList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <PropsTable />
      <Positions />
      <Options />
    </div>
  );
};

export default DrawerList;
