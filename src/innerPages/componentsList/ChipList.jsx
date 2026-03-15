import React from "react";
import {
  Avatar,
  ClassNames,
  CloseButton,
  ColorDepth,
  Colors,
  Disabled,
  HowToUse,
  Radius,
  Sizes,
  StartEndContent,
  Variants,
} from "./ChipList/index";

const ChipList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Variants />
      <Colors />
      <ColorDepth />
      <Sizes />
      <Radius />
      <Disabled />
      <StartEndContent />
      <Avatar />
      <CloseButton />
      <ClassNames />
    </div>
  );
};

export default ChipList;
