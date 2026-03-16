import React from "react";
import { HowToUse, Options, Positions } from "./DrawerList/index";

const DrawerList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Positions />
      <Options />
    </div>
  );
};

export default DrawerList;
