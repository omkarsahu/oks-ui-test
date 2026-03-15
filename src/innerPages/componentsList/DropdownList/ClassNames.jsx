import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const ClassNames = () => {
  return (
    <ShowCode
      title="classNames / itemClasses"
      preview={
        <Dropdown
          classNames={{
            base: "inline-flex",
            content: "outline outline-1 outline-purple-500",
          }}
        >
          <DropdownTrigger>
            <Button variant="bordered">Open</Button>
          </DropdownTrigger>
          <DropdownMenu
            classNames={{
              base: "rounded-lg border-2 border-purple-500",
              list: "p-2",
              emptyContent: "text-purple-300",
            }}
            itemClasses={{
              base: "rounded-md",
              title: "font-semibold",
              description: "text-xs opacity-80",
            }}
          >
            <DropdownItem
              key="a"
              title="Item A"
              description="Custom slot classes"
            />
            <DropdownItem
              key="b"
              title="Item B"
              description="Custom slot classes"
            />
          </DropdownMenu>
        </Dropdown>
      }
      code={
        <>
          {`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown
  classNames={{
    base: "inline-flex",
    content: "outline outline-1 outline-purple-500",
  }}
>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu
    classNames={{
      base: "rounded-lg border-2 border-purple-500",
      list: "p-2",
    }}
    itemClasses={{
      base: "rounded-md",
      title: "font-semibold",
      description: "text-xs opacity-80",
    }}
  >
    <DropdownItem key="a" title="Item A" description="Custom slot classes" />
    <DropdownItem key="b" title="Item B" description="Custom slot classes" />
  </DropdownMenu>
</Dropdown>`}
        </>
      }
    />
  );
};

export default ClassNames;
