import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const accountItems = [
  { key: "profile", label: "Profile" },
  { key: "settings", label: "Settings" },
];

const WithSections = () => {
  return (
    <ShowCode
      title="With sections"
      preview={
        <Dropdown>
          <DropdownTrigger>
            <Button>Open</Button>
          </DropdownTrigger>
          <DropdownMenu onAction={(key) => console.log(key)}>
            <DropdownSection title="Actions">
              <DropdownItem key="copy">Copy</DropdownItem>
              <DropdownItem key="move">Move</DropdownItem>
            </DropdownSection>
            <DropdownSection title="Account" items={accountItems} showDivider>
              {(item) => (
                <DropdownItem key={item.key}>{item.label}</DropdownItem>
              )}
            </DropdownSection>
            <DropdownSection aria-label="Danger zone">
              <DropdownItem key="delete">Delete</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      }
      code={
        <>
          {`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "oks-ui";

const accountItems = [
  { key: "profile", label: "Profile" },
  { key: "settings", label: "Settings" },
];

<Dropdown>
  <DropdownTrigger>
    <Button>Open</Button>
  </DropdownTrigger>
  <DropdownMenu onAction={(key) => console.log(key)}>
    <DropdownSection title="Actions">
      <DropdownItem key="copy">Copy</DropdownItem>
      <DropdownItem key="move">Move</DropdownItem>
    </DropdownSection>
    <DropdownSection title="Account" items={accountItems} showDivider>
      {(item) => <DropdownItem key={item.key}>{item.label}</DropdownItem>}
    </DropdownSection>
    <DropdownSection aria-label="Danger zone">
      <DropdownItem key="delete">Delete</DropdownItem>
    </DropdownSection>
  </DropdownMenu>
</Dropdown>`}
        </>
      }
    />
  );
};

export default WithSections;
