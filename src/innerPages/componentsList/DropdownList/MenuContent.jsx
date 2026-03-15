import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const MenuContent = () => {
  return (
    <ShowCode
      title="Menu content (topContent / bottomContent / emptyContent)"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Top + bottom</Button>
            </DropdownTrigger>
            <DropdownMenu
              topContent={<div className="px-2 py-1 text-sm">Top content</div>}
              bottomContent={
                <div className="px-2 py-1 text-sm">Bottom content</div>
              }
            >
              <DropdownItem key="a">Item A</DropdownItem>
              <DropdownItem key="b">Item B</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Empty list</Button>
            </DropdownTrigger>
            <DropdownMenu items={[]} emptyContent="Nothing here">
              {(item) => (
                <DropdownItem key={item.key}>{item.label}</DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Hide empty</Button>
            </DropdownTrigger>
            <DropdownMenu
              items={[]}
              emptyContent="Nothing here"
              hideEmptyContent
            >
              {(item) => (
                <DropdownItem key={item.key}>{item.label}</DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </div>
      }
      code={
        <>
          {`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Top + bottom</Button>
  </DropdownTrigger>
  <DropdownMenu
    topContent={<div className="px-2 py-1 text-sm">Top content</div>}
    bottomContent={<div className="px-2 py-1 text-sm">Bottom content</div>}
  >
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Empty list</Button>
  </DropdownTrigger>
  <DropdownMenu items={[]} emptyContent="Nothing here">
    {(item) => <DropdownItem key={item.key}>{item.label}</DropdownItem>}
  </DropdownMenu>
</Dropdown>`}
        </>
      }
    />
  );
};

export default MenuContent;
