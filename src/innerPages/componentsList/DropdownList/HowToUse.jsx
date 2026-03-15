import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const HowToUse = () => {
  return (
    <ShowCode
      title="How to use"
      preview={
        <Dropdown>
          <DropdownTrigger>
            <Button>Open</Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="solid"
            color="primary"
            autoFocus="first"
            onAction={(key) => console.log("onAction:", key)}
            onClose={() => console.log("onClose")}
          >
            <DropdownItem key="new">New</DropdownItem>
            <DropdownItem key="edit">Edit</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      }
      code={
        <>
          {`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button>Open</Button>
  </DropdownTrigger>
  <DropdownMenu
    variant="solid"
    color="primary"
    autoFocus="first"
    onAction={(key) => console.log("onAction:", key)}
    onClose={() => console.log("onClose")}
  >
    <DropdownItem key="new">New</DropdownItem>
    <DropdownItem key="edit">Edit</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
        </>
      }
    />
  );
};

export default HowToUse;
