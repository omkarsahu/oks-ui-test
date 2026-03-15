import React from "react";
import { Button, toast } from "oks-ui";
import { ShowCode } from "../../../components";

const Action = () => {
  return (
    <ShowCode
      title="Action"
      preview={
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            onPress={() =>
              toast({
                title: "Undo?",
                description: "Item deleted.",
                color: "warning",
                action: {
                  label: "Undo",
                  onClick: () => toast.success("Undone"),
                },
              })
            }
          >
            With action
          </Button>
        </div>
      }
      code={
        <>
          {`toast({
  title: "Undo?",
  description: "Item deleted.",
  action: { label: "Undo", onClick: () => {} },
});`}
        </>
      }
    />
  );
};

export default Action;
