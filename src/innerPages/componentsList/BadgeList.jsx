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
      <PropsTable />
      <Variants />
      <Colors />
      <Sizes />
      <Placements />
      <Shapes />
      <Outline />
      <Visibility />
      <DotAndOneChar />
      <ClassNames />
    </div>
  );
};

export default BadgeList;

