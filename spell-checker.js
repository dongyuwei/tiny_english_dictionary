const Typo = require("typo-js");
const data = require("./spell-checker-data.json");

console.time("spellcheck");
const spellchecker = new Typo("en_US", data.aff, data.dict);
console.timeEnd("spellcheck");

console.time("spellcheck2");
console.log(spellchecker.suggest("tesst")); // => [ 'test', 'tests', 'testy', 'text', 'tent' ]
console.timeEnd("spellcheck2");

module.exports = spellchecker;
