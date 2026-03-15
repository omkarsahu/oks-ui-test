import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const DismissBehavior = () => {
  return (
    <ShowCode
      title="Dismiss behavior (isDismissable / isKeyboardDismissDisabled)"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Default</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="a">Outside click closes</DropdownItem>
              <DropdownItem key="b">Escape closes</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown isDismissable={false}>
            <DropdownTrigger>
              <Button variant="bordered">No outside close</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="a">Try clicking outside</DropdownItem>
              <DropdownItem key="b">Use item or Escape</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown isKeyboardDismissDisabled>
            <DropdownTrigger>
              <Button variant="bordered">No Escape</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="a">Try pressing Escape</DropdownItem>
              <DropdownItem key="b">Outside click still works</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      }
      code={
        <>
          {`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown isDismissable={false}>
  <DropdownTrigger>
    <Button variant="bordered">No outside close</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem key="a">Try clicking outside</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown isKeyboardDismissDisabled>
  <DropdownTrigger>
    <Button variant="bordered">No Escape</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem key="a">Try pressing Escape</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
        </>
      }
    />
  );
};

export default DismissBehavior;
