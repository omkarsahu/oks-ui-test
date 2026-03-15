import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const WithIcons = () => {
  return (
    <ShowCode
      title="With icons"
      preview={
        <Dropdown>
          <DropdownTrigger>
            <Button>Open</Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem
              key="star"
              startContent={<span aria-hidden="true">★</span>}
            >
              Star
            </DropdownItem>
            <DropdownItem
              key="arrow"
              endContent={<span aria-hidden="true">→</span>}
            >
              Arrow
            </DropdownItem>
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
  <DropdownMenu>
    <DropdownItem key="star" startContent={<span aria-hidden="true">★</span>}>
      Star
    </DropdownItem>
    <DropdownItem key="arrow" endContent={<span aria-hidden="true">→</span>}>
      Arrow
    </DropdownItem>
  </DropdownMenu>
</Dropdown>`}
        </>
      }
    />
  );
};

export default WithIcons;
