import React from "react";
import { Animations, HowToUse, Options } from "./BackdropList/index";

const BackdropList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Animations />
      <Options />
    </div>
  );
};

export default BackdropList;
