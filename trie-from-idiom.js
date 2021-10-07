const TinyTrie = require('tiny-trie');
const idioms = require('./idiom.json');

const trie = TinyTrie.createSync(idioms);
module.exports = function idiomsOfInput(input) {
  return trie
    .search(input, {prefix: true})
    .concat(trie.search(`*${input}`, {wildcard: '*'}));
};
