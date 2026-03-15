import React from "react";
import {
  ButtonGroup,
  Colors,
  CustomStyles,
  Disabled,
  FullWidth,
  HowToUse,
  IconOnly,
  IconOnlyLoading,
  Loading,
  MotionAndRipple,
  PressEvents,
  Radius,
  Sizes,
  Variants,
  WithIcons,
} from "./ButtonList/index";

const ButtonList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Disabled />
      <Sizes />
      <Radius />
      <Colors />
      <Variants />
      <FullWidth />
      <Loading />
      <WithIcons />
      <IconOnly />
      <IconOnlyLoading />
      <ButtonGroup />
      <PressEvents />
      <MotionAndRipple />
      <CustomStyles />
    </div>
  );
};

export default ButtonList;
