import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();

const candidates = [
  path.join(projectRoot, "node_modules", "oks-ui", "dist", "index.js"),
  path.join(projectRoot, "vendor", "oks-ui", "dist", "index.js"),
];

const indexPath = candidates.find((p) => fs.existsSync(p));

if (!indexPath) {
  console.error(
    `oks-ui verification failed: could not find dist/index.js at:\n${candidates.map((p) => `- ${p}`).join("\n")}`
  );
  process.exit(1);
}

const code = fs.readFileSync(indexPath, "utf8");

const requiredNamedExports = ["Form", "FormFieldSet"];
const missing = requiredNamedExports.filter((name) => {
  const re = new RegExp(String.raw`(^|[\s,{])${name}([\s,}]|$)`, "m");
  return !re.test(code);
});

if (missing.length) {
  console.error(
    `oks-ui verification failed: missing export(s) ${missing.join(
      ", "
    )} in ${indexPath}\n` +
      `Fix: update oks-ui artifact (vendor folder or installed package) so it includes these exports.`
  );
  process.exit(1);
}

process.stdout.write(`oks-ui verification OK (${path.relative(projectRoot, indexPath)})\n`);
