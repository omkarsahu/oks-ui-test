import React from "react";
import { HowToUse, Options, PropsTable, Sizes } from "./ModalList/index";

const ModalList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <PropsTable />
      <Sizes />
      <Options />
    </div>
  );
};

export default ModalList;
