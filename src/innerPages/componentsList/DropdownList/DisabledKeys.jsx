import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const DisabledKeys = () => {
  return (
    <ShowCode
      title="Disabled keys"
      preview={
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">Open</Button>
          </DropdownTrigger>
          <DropdownMenu disabledKeys={["delete"]}>
            <DropdownItem key="copy">Copy</DropdownItem>
            <DropdownItem key="rename">Rename</DropdownItem>
            <DropdownItem key="delete">Delete</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      }
      code={
        <>
          {`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu disabledKeys={["delete"]}>
    <DropdownItem key="copy">Copy</DropdownItem>
    <DropdownItem key="rename">Rename</DropdownItem>
    <DropdownItem key="delete">Delete</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
        </>
      }
    />
  );
};

export default DisabledKeys;
