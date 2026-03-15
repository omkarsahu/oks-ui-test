import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const Variants = () => {
  return (
    <ShowCode
      title="Variants"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          {["solid", "bordered", "light", "flat", "faded", "shadow"].map(
            (variant) => (
              <Dropdown key={variant}>
                <DropdownTrigger>
                  <Button variant="bordered">{variant}</Button>
                </DropdownTrigger>
                <DropdownMenu variant={variant}>
                  <DropdownItem key="a">Item A</DropdownItem>
                  <DropdownItem key="b">Item B</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ),
          )}
        </div>
      }
      code={
        <>
          {`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">solid</Button>
  </DropdownTrigger>
  <DropdownMenu variant="solid">
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
        </>
      }
    />
  );
};

export default Variants;
