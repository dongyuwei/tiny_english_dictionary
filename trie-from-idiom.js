const Trie = require('node-ternary-search-trie');
// const trie = new Trie();
// const Trie = require('tiny-trie-js');
const trie = new Trie();
const data = require('./idiom.json');
data.forEach(element => {
  trie.set(element, 0);
});
// console.log(222, trie.keysWithPrefix('川'));
module.exports = function keysWithPrefix(prefix) {
  return trie.keysWithPrefix(prefix);
};
