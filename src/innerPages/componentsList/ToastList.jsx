import React from "react";
import {
  Action,
  AddToast,
  AddToastPromise,
  ClassNames,
  Duration,
  EndContentLoading,
  HowToUse,
  IdOnDismiss,
  Icons,
  Placement,
  PromiseToast,
  ProviderProps,
  ToneSize,
  Types,
  UpdateDismiss,
  UseHook,
  Variants,
} from "./ToastList/index";

const ToastList = () => {
  return (
    <div className="flex flex-col gap-10">
      <ProviderProps />
      <HowToUse />
      <AddToast />
      <AddToastPromise />
      <Types />
      <Placement />
      <Variants />
      <ToneSize />
      <Duration />
      <Action />
      <Icons />
      <EndContentLoading />
      <UpdateDismiss />
      <IdOnDismiss />
      <PromiseToast />
      <UseHook />
      <ClassNames />
    </div>
  );
};

export default ToastList;
