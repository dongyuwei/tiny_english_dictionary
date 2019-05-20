const path = require("path");
const fs = require("fs");
const base = require.resolve("dictionary-en-us").replace("index.js", "");

const dict = fs.readFileSync(path.join(base, "index.dic"), "utf-8");
const aff = fs.readFileSync(path.join(base, "index.aff"), "utf-8");

fs.writeFileSync(
  "./spell-checker-data.json",
  JSON.stringify({
    aff,
    dict
  }),
  "utf-8"
);
