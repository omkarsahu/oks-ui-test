import React, { useState } from "react";
import { Alert, Button } from "oks-ui";
import { ShowCode } from "../../../components";

const Visible = () => {
  const [visible, setVisible] = useState(true);

  return (
    <ShowCode
      title="Controlled Visibility"
      preview={
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <Button
              size="sm"
              variant="bordered"
              onClick={() => setVisible(true)}
            >
              Show
            </Button>
            <Button
              size="sm"
              variant="bordered"
              onClick={() => setVisible(false)}
            >
              Hide
            </Button>
            <div className="text-sm text-gray-700">
              isVisible: {String(visible)}
            </div>
          </div>
          <Alert
            title="Controlled alert"
            description="Uses isVisible and onVisibleChange."
            isClosable
            isVisible={visible}
            onVisibleChange={setVisible}
            color="success"
          />
        </div>
      }
      code={
        <>
          {`import { useState } from "react";
import { Alert, Button } from "oks-ui";

export function Example() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <Button size="sm" variant="bordered" onClick={() => setVisible(true)}>
        Show
      </Button>
      <Button size="sm" variant="bordered" onClick={() => setVisible(false)}>
        Hide
      </Button>

      <Alert
        title="Controlled alert"
        description="Uses isVisible and onVisibleChange."
        isClosable
        isVisible={visible}
        onVisibleChange={setVisible}
        color="success"
      />
    </>
  );
}`}
        </>
      }
    />
  );
};

export default Visible;
