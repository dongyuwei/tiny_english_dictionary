const fs = require("fs");
const dict = require("./words_with_frequency_and_translation_and_ipa.json");

const dict2 = { keys: [], values: [] };

Object.keys(dict)
  .sort()
  .forEach(key => {
    dict2.keys.push(key);
    dict2.values.push(dict[key]);
  });

fs.writeFileSync(
  "./words_with_frequency_and_translation_and_ipa2.json",
  JSON.stringify(dict2),
  "utf-8"
);
console.log(dict2.keys.length);
