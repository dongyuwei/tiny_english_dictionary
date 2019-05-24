const Trie = require("node-ternary-search-trie");
const trie = new Trie();
const data = require("./idiom.json");
data.forEach(element => {
  trie.set(element, 0);
});
// console.time("time");
// console.log("keysWithPrefix pref", trie.keysWithPrefix("渊"));
// console.timeEnd("time");

module.exports = trie;
