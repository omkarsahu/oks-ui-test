import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "oks-ui";
import { ShowCode } from "../../../components";

const Selection = () => {
  const [singleSelected, setSingleSelected] = React.useState(new Set(["a"]));
  const [multipleSelected, setMultipleSelected] = React.useState(
    new Set(["a", "c"]),
  );

  return (
    <ShowCode
      title="Selection"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Single</Button>
            </DropdownTrigger>
            <DropdownMenu
              selectionMode="single"
              closeOnSelect={false}
              shouldFocusWrap
              selectedKeys={singleSelected}
              onSelectionChange={(keys) => {
                setSingleSelected(new Set(keys));
                console.log("single onSelectionChange:", keys);
              }}
            >
              <DropdownItem key="a">A</DropdownItem>
              <DropdownItem key="b">B</DropdownItem>
              <DropdownItem key="c">C</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Multiple</Button>
            </DropdownTrigger>
            <DropdownMenu
              selectionMode="multiple"
              closeOnSelect={false}
              hideSelectedIcon
              selectedKeys={multipleSelected}
              onSelectionChange={(keys) => {
                setMultipleSelected(new Set(keys));
                console.log("multiple onSelectionChange:", keys);
              }}
            >
              <DropdownItem key="a" selectedIcon="✓">
                A
              </DropdownItem>
              <DropdownItem key="b">B</DropdownItem>
              <DropdownItem key="c">C</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      }
      code={
        <>
          {`import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

export default function Example() {
  const [singleSelected, setSingleSelected] = React.useState(new Set(["a"]));
  const [multipleSelected, setMultipleSelected] = React.useState(new Set(["a", "c"]));

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Single</Button>
        </DropdownTrigger>
        <DropdownMenu
          selectionMode="single"
          closeOnSelect={false}
          shouldFocusWrap
          selectedKeys={singleSelected}
          onSelectionChange={(keys) => setSingleSelected(new Set(keys))}
        >
          <DropdownItem key="a">A</DropdownItem>
          <DropdownItem key="b">B</DropdownItem>
          <DropdownItem key="c">C</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Multiple</Button>
        </DropdownTrigger>
        <DropdownMenu
          selectionMode="multiple"
          closeOnSelect={false}
          hideSelectedIcon
          selectedKeys={multipleSelected}
          onSelectionChange={(keys) => setMultipleSelected(new Set(keys))}
        >
          <DropdownItem key="a" selectedIcon="✓">
            A
          </DropdownItem>
          <DropdownItem key="b">B</DropdownItem>
          <DropdownItem key="c">C</DropdownItem>
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

export default Selection;
