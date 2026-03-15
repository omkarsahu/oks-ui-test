import React, { useState } from "react";
import { Button } from "oks-ui";
import { ShowCode } from "../../../components";

const PressEvents = () => {
  const [last, setLast] = useState("-");
  const [pressed, setPressed] = useState(false);

  return (
    <ShowCode
      title="Press events"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            onPressStart={() => setLast("onPressStart")}
            onPressEnd={() => setLast("onPressEnd")}
            onPressUp={() => setLast("onPressUp")}
            onPress={() => setLast("onPress")}
            onPressChange={(v) => setPressed(v)}
          >
            Press me
          </Button>
          <div className="text-sm">Last event: {last}</div>
          <div className="text-sm">Pressed: {String(pressed)}</div>
        </div>
      }
      code={
        <>
          {`<Button
  onPressStart={() => {}}
  onPressEnd={() => {}}
  onPressUp={() => {}}
  onPress={() => {}}
  onPressChange={(isPressed) => {}}
>
  Press me
</Button>`}
        </>
      }
    />
  );
};

export default PressEvents;
