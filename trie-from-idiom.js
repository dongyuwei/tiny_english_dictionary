const Trie = require('node-ternary-search-trie');
const trie = new Trie();
const data = require('./idiom.json');
data.forEach(element => {
  trie.set(element, 0);
});
module.exports = function keysWithPrefix(prefix) {
  return trie.keysWithPrefix(prefix);
};
