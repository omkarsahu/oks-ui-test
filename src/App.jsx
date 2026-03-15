import React from "react";
import { Route, Routes } from "react-router";
import { AlertList, Dashboard } from "./innerPages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
