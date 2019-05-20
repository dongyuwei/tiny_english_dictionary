const nspell = require("nspell");
const data = require("./spell-checker-data.json");

console.time("spellcheck");
const spellchecker = nspell(data.aff, data.dict);
console.timeEnd("spellcheck");

console.time("spellcheck2");
console.log(spellchecker.correct("colour")); // => false
console.log(spellchecker.suggest("colour")); // => ['color']
console.log(spellchecker.correct("color")); // => true
console.log(spellchecker.correct("npm")); // => false
console.timeEnd("spellcheck2");

module.exports = spellchecker;
