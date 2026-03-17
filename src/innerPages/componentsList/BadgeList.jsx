import React from "react";
import {
  ClassNames,
  Colors,
  DotAndOneChar,
  HowToUse,
  Outline,
  Placements,
  PropsTable,
  Shapes,
  Sizes,
  Variants,
  Visibility,
} from "./BadgeList/index";

const BadgeList = () => {
  return (
    <div className="flex flex-col gap-10">
      <HowToUse />
      <Variants />
      <Colors />
      <Sizes />
      <Placements />
      <Shapes />
      <Outline />
      <Visibility />
      <DotAndOneChar />
      <ClassNames />
      <PropsTable />
    </div>
  );
};

export default BadgeList;
