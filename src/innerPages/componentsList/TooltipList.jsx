import React from "react";
import {
  AdvancedPositioning,
  Animation,
  Arrow,
  Behavior,
  ClassNames,
  ColorDepth,
  Colors,
  Controlled,
  DefaultOpen,
  Disabled,
  Delays,
  HowToUse,
  Placement,
  PortalContainer,
  PropsTable,
  RadiusShadow,
  Sizes,
} from "./TooltipList/index";

const TooltipList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Controlled />
      <DefaultOpen />
      <Sizes />
      <Colors />
      <ColorDepth />
      <RadiusShadow />
      <Placement />
      <AdvancedPositioning />
      <Delays />
      <Arrow />
      <Behavior />
      <Disabled />
      <ClassNames />
      <PortalContainer />
      <Animation />
      <PropsTable />
    </div>
  );
};

export default TooltipList;
