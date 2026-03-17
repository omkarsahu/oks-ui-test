import React from "react";

const PropsTable = ({ title, rows, footnote }) => {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="w-full overflow-x-auto border border-gray-200 rounded-md">
        <table className="min-w-[760px] w-full text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="text-left font-semibold px-4 py-3">Prop</th>
              <th className="text-left font-semibold px-4 py-3">Type</th>
              <th className="text-left font-semibold px-4 py-3">Default</th>
              <th className="text-left font-semibold px-4 py-3">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((row) => (
              <tr key={row.prop} className="bg-white">
                <td className="px-4 py-3 align-top">
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {row.prop}
                  </code>
                </td>
                <td className="px-4 py-3 align-top">
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {row.type}
                  </code>
                </td>
                <td className="px-4 py-3 align-top">
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {row.default}
                  </code>
                </td>
                <td className="px-4 py-3 align-top text-gray-700">
                  {row.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote ? (
        <div className="mt-2 text-sm text-gray-600">{footnote}</div>
      ) : null}
    </div>
  );
};

export default PropsTable;

