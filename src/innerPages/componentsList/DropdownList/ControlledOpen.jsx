import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const ControlledOpen = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <ShowCode
      title="Controlled open (isOpen / onOpenChange)"
      preview={
        <div className="flex items-center gap-3 flex-wrap">
          <Button variant="bordered" onPress={() => setOpen((v) => !v)}>
            Toggle (external)
          </Button>
          <Dropdown isOpen={open} onOpenChange={setOpen}>
            <DropdownTrigger>
              <Button>Open</Button>
            </DropdownTrigger>
            <DropdownMenu onAction={(key) => console.log("onAction:", key)}>
              <DropdownItem key="new">New</DropdownItem>
              <DropdownItem key="edit">Edit</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      }
      code={
        <>
          {`import React from "react";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Button variant="bordered" onPress={() => setOpen((v) => !v)}>
        Toggle (external)
      </Button>

      <Dropdown isOpen={open} onOpenChange={setOpen}>
        <DropdownTrigger>
          <Button>Open</Button>
        </DropdownTrigger>
        <DropdownMenu onAction={(key) => console.log("onAction:", key)}>
          <DropdownItem key="new">New</DropdownItem>
          <DropdownItem key="edit">Edit</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}`}
        </>
      }
    />
  );
};

export default ControlledOpen;
