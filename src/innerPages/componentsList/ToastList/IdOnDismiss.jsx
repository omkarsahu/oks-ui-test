import React, { useState } from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

const IdOnDismiss = () => {
  const [count, setCount] = useState(0);
  const [lastDismissed, setLastDismissed] = useState("-");

  return (
    <ShowCode
      title="id and onDismiss"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            onPress={() => {
              const next = count + 1;
              setCount(next);
              toast({
                id: 42,
                title: "Single toast (id=42)",
                description: `Updated count: ${next}`,
                shouldShowTimeoutProgress: true,
                timeout: 2500,
                onDismiss: (id) => setLastDismissed(String(id)),
              });
            }}
          >
            Update same id
          </Button>
          <div className="text-sm">Last dismissed: {lastDismissed}</div>
        </div>
      }
      code={
        <>
          {`toast({ id: 42, description: "This replaces the existing toast with id=42", onDismiss: (id) => {} });`}
        </>
      }
    />
  );
};

export default IdOnDismiss;
