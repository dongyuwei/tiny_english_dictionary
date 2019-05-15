const fs = require("fs");
const dict = require("./words_with_frequency_and_translation_and_ipa.json");

const dict2 = { entries: [] };

Object.keys(dict)
  .sort()
  .forEach(key => {
    dict2.entries.push({
      key: key,
      value: dict[key]
    });
  });

fs.writeFileSync(
  "./words_with_frequency_and_translation_and_ipa2.json",
  JSON.stringify(dict2),
  "utf-8"
);
console.log(dict2.entries.length);
