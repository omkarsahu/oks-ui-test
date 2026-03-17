import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "oks-ui/styles.css";
import "./index.css";
import "./oks-ui-theme.css";
import App from "./App.jsx";
import { ToastProvider } from "oks-ui";
import { BrowserRouter, Router } from "react-router";

createRoot(document.getElementById("root")).render(
  <ToastProvider placement="bottom-right" maxVisibleToasts={3}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ToastProvider>,
);
