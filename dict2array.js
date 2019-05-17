const fs = require("fs");
const sp = require("./schemapack.js");
const dict = require("./words_with_frequency_and_translation_and_ipa.json");

const wordList = [];
console.log("sp", sp);

// const schema = sp.build([["string", ["string"], "float32", "string"]]);
const schema = sp.build([
  {
    w: "string",
    t: ["string"],
    f: "float32",
    i: "string"
  }
]);

Object.keys(dict)
  .sort()
  .forEach(key => {
    const item = dict[key];
    wordList.push({
      w: key,
      t: item.translation,
      f: item.frequency,
      i: item.ipa
    });
    // wordList.push([key, item.translation, item.frequency, item.ipa]);
  });

const buffer = schema.encode(wordList);
console.time("spDecode");
const words = schema.decode(buffer);
console.timeEnd("spDecode");
console.log("words length", words.length, words[0]);

const str = JSON.stringify(wordList);
console.time("jsonDecode");
const list2 = JSON.parse(str);
console.timeEnd("jsonDecode");

fs.writeFileSync(
  "./words_with_frequency_and_translation_and_ipa2.json",
  JSON.stringify(wordList),
  "utf-8"
);
fs.writeFileSync(
  "./words_with_frequency_and_translation_and_ipa2.bin",
  buffer,
  "utf-8"
);
console.log(wordList.length);
