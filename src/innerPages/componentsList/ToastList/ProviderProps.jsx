import React from "react";
import { ShowCode } from "../../../components";

const ProviderProps = () => {
  return (
    <ShowCode
      title="ToastProvider (mounted in main.jsx)"
      preview={
        <div className="text-sm opacity-80">
          ToastProvider is already mounted at the playground root, so the toast
          APIs work anywhere.
        </div>
      }
      code={
        <>
          {`import { ToastProvider } from "oks-ui";

<ToastProvider placement="bottom-right" maxVisibleToasts={3}>
  <App />
</ToastProvider>`}
        </>
      }
    />
  );
};

export default ProviderProps;
