import React from "react";
import {
  Accessibility,
  Headers,
  HowToUse,
  MotionAndBackdrop,
  Options,
  PortalAndContainer,
  Positions,
  PropsTable,
  Sizing,
} from "./DrawerList/index";

const DrawerList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Positions />
      <Sizing />
      <Accessibility />
      <Options />
      <MotionAndBackdrop />
      <PortalAndContainer />
      <Headers />
      <PropsTable />
    </div>
  );
};

export default DrawerList;
