import React from "react";
import {
  Accept,
  Disabled,
  HowToUse,
  Multiple,
  PropsTable,
  ValidationAndError,
} from "./index";

const File = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Accept />
      <Multiple />
      <Disabled />
      <ValidationAndError />
      <PropsTable />
    </div>
  );
};

export default File;
