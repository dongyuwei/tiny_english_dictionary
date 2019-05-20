const fs = require("fs");
const aff = fs.readFileSync(
  "node_modules/typo-js/dictionaries/en_US/en_US.aff",
  "utf-8"
);
const dict = fs.readFileSync(
  "node_modules/typo-js/dictionaries/en_US/en_US.dic",
  "utf-8"
);

fs.writeFileSync(
  "./spell-checker-data.json",
  JSON.stringify({
    aff,
    dict
  }),
  "utf-8"
);
