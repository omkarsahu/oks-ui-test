import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const OffsetAndFlip = () => {
  return (
    <ShowCode
      title="Offset / containerPadding / shouldFlip"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Dropdown offset={0}>
            <DropdownTrigger>
              <Button variant="bordered">offset=0</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="a">Item A</DropdownItem>
              <DropdownItem key="b">Item B</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown offset={16}>
            <DropdownTrigger>
              <Button variant="bordered">offset=16</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="a">Item A</DropdownItem>
              <DropdownItem key="b">Item B</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown
            containerPadding={0}
            shouldFlip={false}
            placement="bottom-end"
          >
            <DropdownTrigger>
              <Button variant="bordered">no flip</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="a">Item A</DropdownItem>
              <DropdownItem key="b">Item B</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      }
      code={
        <>
          {`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown offset={0}>
  <DropdownTrigger>
    <Button variant="bordered">offset=0</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown offset={16}>
  <DropdownTrigger>
    <Button variant="bordered">offset=16</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown containerPadding={0} shouldFlip={false} placement="bottom-end">
  <DropdownTrigger>
    <Button variant="bordered">no flip</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
        </>
      }
    />
  );
};

export default OffsetAndFlip;
