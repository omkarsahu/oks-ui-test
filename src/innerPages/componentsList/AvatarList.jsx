import React from "react";
import {
  Border,
  ClassNames,
  ColorDepth,
  Colors,
  CustomImg,
  Disabled,
  Fallback,
  Focusable,
  Group,
  HowToUse,
  Radius,
  Sizes,
  Tooltip,
} from "./AvatarList/index";

const AvatarList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Sizes />
      <Colors />
      <ColorDepth />
      <Radius />
      <Border />
      <Disabled />
      <Tooltip />
      <Fallback />
      <Focusable />
      <CustomImg />
      <ClassNames />
      <Group />
    </div>
  );
};

export default AvatarList;
