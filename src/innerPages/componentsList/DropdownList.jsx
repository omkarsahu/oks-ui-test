import React from "react";
import {
  ClassNames,
  CloseOnSelect,
  ControlledOpen,
  DisabledKeys,
  DynamicItems,
  DismissBehavior,
  HowToUse,
  InteractOutside,
  MenuContent,
  OffsetAndFlip,
  Placement,
  PortalContainer,
  PropsTable,
  Selection,
  Variants,
  WithDescription,
  WithIcons,
  WithSections,
} from "./DropdownList/index";

const DropdownList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <PropsTable />
      <ControlledOpen />
      <Placement />
      <OffsetAndFlip />
      <DismissBehavior />
      <InteractOutside />
      <PortalContainer />
      <CloseOnSelect />
      <MenuContent />
      <ClassNames />
      <Variants />
      <DisabledKeys />
      <WithIcons />
      <WithDescription />
      <WithSections />
      <Selection />
      <DynamicItems />
    </div>
  );
};

export default DropdownList;
