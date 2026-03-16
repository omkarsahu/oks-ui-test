import React from "react";
import { HowToUse, Options, Sizes } from "./ModalList/index";

const ModalList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Sizes />
      <Options />
    </div>
  );
};

export default ModalList;
