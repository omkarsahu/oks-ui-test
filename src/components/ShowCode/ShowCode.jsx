import React from "react";
import { Tabs, Tab } from "oks-ui";

const ShowCode = ({ title, preview, code }) => {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold">{title}</h3>
      <Tabs defaultSelectedKey="preview" variant="underlined" color="primary">
        <Tab key="preview" title="Preview">
          <div className="w-full h-full p-5 border border-gray-300 rounded-md">
            {preview}
          </div>
        </Tab>
        <Tab key="code" title="Code">
          <pre className="w-full h-full p-5 bg-gray-900 rounded-md text-white">
            <code>{code}</code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ShowCode;
