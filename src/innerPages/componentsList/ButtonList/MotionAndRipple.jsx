import React, { useState } from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const MotionAndRipple = () => {
  const [disableRipple, setDisableRipple] = useState(false);
  const [disableAnimation, setDisableAnimation] = useState(false);

  return (
    <ShowCode
      title="Ripple and animation"
      preview={
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center flex-wrap">
            <Button
              variant="bordered"
              onPress={() => setDisableRipple((v) => !v)}
            >
              disableRipple: {String(disableRipple)}
            </Button>
            <Button
              variant="bordered"
              onPress={() => setDisableAnimation((v) => !v)}
            >
              disableAnimation: {String(disableAnimation)}
            </Button>
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <Button
              color="primary"
              disableRipple={disableRipple}
              disableAnimation={disableAnimation}
            >
              Try click
            </Button>
            <Button
              variant="bordered"
              disableRipple={disableRipple}
              disableAnimation={disableAnimation}
            >
              Try click
            </Button>
          </div>
        </div>
      }
      code={<>{`<Button disableRipple disableAnimation>Try click</Button>`}</>}
    />
  );
};

export default MotionAndRipple;
