import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const placements = ["bottom-start", "bottom-end", "top-start", "right"];

const Placement = () => {
  return (
    <ShowCode
      title="Placement"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          {placements.map((placement) => (
            <Dropdown key={placement} placement={placement}>
              <DropdownTrigger>
                <Button variant="bordered">{placement}</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="a">Item A</DropdownItem>
                <DropdownItem key="b">Item B</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ))}
        </div>
      }
      code={
        <>
          {`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

const placements = ["bottom-start", "bottom-end", "top-start", "right"];

<div className="flex gap-3 items-center flex-wrap">
  {placements.map((placement) => (
    <Dropdown key={placement} placement={placement}>
      <DropdownTrigger>
        <Button variant="bordered">{placement}</Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="a">Item A</DropdownItem>
        <DropdownItem key="b">Item B</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ))}
</div>`}
        </>
      }
    />
  );
};

export default Placement;
