import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const InteractOutside = () => {
  const safeRef = React.useRef(null);

  return (
    <ShowCode
      title="shouldCloseOnInteractOutside"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <div
            ref={safeRef}
            className="px-3 py-2 border border-dashed border-gray-400 rounded-md"
          >
            Safe zone (clicking here won&apos;t close)
          </div>

          <Dropdown
            shouldCloseOnInteractOutside={(target) =>
              !safeRef.current?.contains(target)
            }
          >
            <DropdownTrigger>
              <Button variant="bordered">Open</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="a">Item A</DropdownItem>
              <DropdownItem key="b">Item B</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      }
      code={
        <>
          {`import React from "react";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

export default function Example() {
  const safeRef = React.useRef(null);

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <div ref={safeRef} className="px-3 py-2 border border-dashed border-gray-400 rounded-md">
        Safe zone
      </div>

      <Dropdown shouldCloseOnInteractOutside={(target) => !safeRef.current?.contains(target)}>
        <DropdownTrigger>
          <Button variant="bordered">Open</Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="a">Item A</DropdownItem>
          <DropdownItem key="b">Item B</DropdownItem>
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

export default InteractOutside;
