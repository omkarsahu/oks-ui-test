import React from "react";
import { Tabs, Tab } from "oks-ui";

function extractText(node) {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (React.isValidElement(node)) return extractText(node.props.children);
  return "";
}

function indentLines(text, indent) {
  return text
    .split("\n")
    .map((line) => (line.length ? `${indent}${line}` : line))
    .join("\n");
}

function toRunnableCode(codeText) {
  const trimmed = (codeText ?? "").trim();
  if (!trimmed) return "";
  if (/^\s*import\s/m.test(trimmed) || /export\s+default\s/m.test(trimmed)) {
    if (!/import\s+React\b/.test(trimmed) && /\bReact\./.test(trimmed)) {
      return `import React from "react";
${trimmed}`;
    }
    return trimmed;
  }

  const matches = [...trimmed.matchAll(/<([A-Z][A-Za-z0-9]*)\b/g)];
  const componentNames = Array.from(
    new Set(matches.map((m) => m[1]).filter((n) => n !== "React")),
  );

  const importLine = componentNames.length
    ? `import { ${componentNames.join(", ")} } from "oks-ui";\n`
    : "";

  const body = indentLines(trimmed, "      ");
  return `import React from "react";
${importLine}
export default function Example() {
  return (
    <>
${body}
    </>
  );
}`;
}

const ShowCode = ({ title, preview, code }) => {
  const codeText = extractText(code);
  const displayCode = toRunnableCode(codeText);

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
          <pre className="w-full h-full p-5 bg-gray-900 rounded-md text-white overflow-x-auto text-sm font-mono">
            <code>{displayCode}</code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ShowCode;
