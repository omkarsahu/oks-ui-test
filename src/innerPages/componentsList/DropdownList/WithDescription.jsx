import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const WithDescription = () => {
  return (
    <ShowCode
      title="With description and shortcut"
      preview={
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">Open</Button>
          </DropdownTrigger>
          <DropdownMenu onClose={() => console.log("closed")}>
            <DropdownItem
              key="profile"
              title="Profile"
              description="Manage your profile"
              shortcut="P"
            />
            <DropdownItem
              key="settings"
              title="Settings"
              description="App settings"
              shortcut="S"
              showDivider
            />
            <DropdownItem key="logout" title="Log out" closeOnSelect={false} />
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
  <DropdownMenu onClose={() => console.log("closed")}>
    <DropdownItem key="profile" title="Profile" description="Manage your profile" shortcut="P" />
    <DropdownItem key="settings" title="Settings" description="App settings" shortcut="S" showDivider />
    <DropdownItem key="logout" title="Log out" closeOnSelect={false} />
  </DropdownMenu>
</Dropdown>`}
        </>
      }
    />
  );
};

export default WithDescription;
