const fs = require("fs");
const dict = require("./words_with_frequency_and_translation_and_ipa.json");

for (var key in dict) {
  var word = dict[key];
  if (!word.translation || !word.ipa) {
    delete dict[key];
  }
}

fs.writeFileSync(
  "words_with_frequency_and_translation_and_ipa.json",
  JSON.stringify(dict),
  "utf-8"
);
console.log(Object.keys(dict).length);
