import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const items = [
  { key: "profile", label: "Profile" },
  { key: "settings", label: "Settings" },
  { key: "logout", label: "Log out" },
];

const DynamicItems = () => {
  return (
    <ShowCode
      title="Dynamic items"
      preview={
        <Dropdown>
          <DropdownTrigger>
            <Button>Open</Button>
          </DropdownTrigger>
          <DropdownMenu items={items} onAction={(key) => console.log(key)}>
            {(item) => <DropdownItem key={item.key}>{item.label}</DropdownItem>}
          </DropdownMenu>
        </Dropdown>
      }
      code={
        <>
          {`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

const items = [
  { key: "profile", label: "Profile" },
  { key: "settings", label: "Settings" },
  { key: "logout", label: "Log out" },
];

<Dropdown>
  <DropdownTrigger>
    <Button>Open</Button>
  </DropdownTrigger>
  <DropdownMenu items={items} onAction={(key) => console.log(key)}>
    {(item) => <DropdownItem key={item.key}>{item.label}</DropdownItem>}
  </DropdownMenu>
</Dropdown>`}
        </>
      }
    />
  );
};

export default DynamicItems;
