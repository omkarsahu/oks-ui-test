import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const CloseOnSelect = () => {
  return (
    <ShowCode
      title="closeOnSelect (Dropdown default)"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Default (closes)</Button>
            </DropdownTrigger>
            <DropdownMenu
              onAction={(key) => console.log("default onAction:", key)}
            >
              <DropdownItem key="a">Select me</DropdownItem>
              <DropdownItem key="b">Select me</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown closeOnSelect={false}>
            <DropdownTrigger>
              <Button variant="bordered">closeOnSelect=false</Button>
            </DropdownTrigger>
            <DropdownMenu
              onAction={(key) => console.log("no close onAction:", key)}
            >
              <DropdownItem key="a">Menu stays open</DropdownItem>
              <DropdownItem key="b">Menu stays open</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      }
      code={
        <>
          {`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown closeOnSelect={false}>
  <DropdownTrigger>
    <Button variant="bordered">closeOnSelect=false</Button>
  </DropdownTrigger>
  <DropdownMenu onAction={(key) => console.log(key)}>
    <DropdownItem key="a">Menu stays open</DropdownItem>
    <DropdownItem key="b">Menu stays open</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
        </>
      }
    />
  );
};

export default CloseOnSelect;
