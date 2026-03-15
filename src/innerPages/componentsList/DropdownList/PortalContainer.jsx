import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const PortalContainer = () => {
  const boxRef = React.useRef(null);
  const [portalEl, setPortalEl] = React.useState(null);

  React.useEffect(() => {
    setPortalEl(boxRef.current);
  }, []);

  return (
    <ShowCode
      title="portalContainer"
      preview={
        <div className="flex gap-3 items-start flex-wrap">
          <div
            ref={boxRef}
            className="w-72 h-40 border border-gray-300 rounded-md p-2"
          >
            Portal container box
          </div>

          <Dropdown portalContainer={portalEl} placement="bottom-start">
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
  const boxRef = React.useRef(null);
  const [portalEl, setPortalEl] = React.useState(null);

  React.useEffect(() => {
    setPortalEl(boxRef.current);
  }, []);

  return (
    <div className="flex gap-3 items-start flex-wrap">
      <div ref={boxRef} className="w-72 h-40 border border-gray-300 rounded-md p-2">
        Portal container box
      </div>

      <Dropdown portalContainer={portalEl}>
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

export default PortalContainer;
