import React from "react";
import {
  CloseLabelDemo,
  HeaderAndDividerOverrides,
  HowToUse,
  MotionAndBackdrop,
  Options,
  PortalAndContainer,
  PropsTable,
  Sizes,
} from "./ModalList/index";

const ModalList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Sizes />
      <Options />
      <CloseLabelDemo />
      <MotionAndBackdrop />
      <PortalAndContainer />
      <HeaderAndDividerOverrides />
      <PropsTable />
    </div>
  );
};

export default ModalList;
