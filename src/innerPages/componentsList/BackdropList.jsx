import React from "react";
import {
  Animations,
  BackgroundAndLayering,
  BlurOption,
  ContentLayout,
  DismissOptions,
  Easing,
  HowToUse,
  PortalAndContainer,
  PropsTable,
  ScrollLockOption,
} from "./BackdropList/index";

const BackdropList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <BlurOption />
      <DismissOptions />
      <ScrollLockOption />
      <BackgroundAndLayering />
      <Animations />
      <Easing />
      <PortalAndContainer />
      <ContentLayout />
      <PropsTable />
    </div>
  );
};

export default BackdropList;
