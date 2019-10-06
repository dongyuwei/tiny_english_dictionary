const PTrie = require('dawg-lookup/lib/ptrie').PTrie;
const words = require('./words_with_frequency_and_translation_and_ipa.json');
const packed = require('./packed.json').content;
const spellchecker = require('./spell-checker.js');

const ptrie = new PTrie(packed);

const getSuggestions = prefix => {
  let suggestion = ptrie
    .completions(prefix)
    .sort((a, b) => {
      return (
        (words[b] || {frequency: 0}).frequency -
        (words[a] || {frequency: 0}).frequency
      );
    })
    .slice(0, 30)
    .map(word => {
      return {
        ...words[word],
        word,
      };
    });

  if (suggestion.length === 0) {
    suggestion = spellchecker.suggest(prefix);
    if (suggestion.length > 0) {
      suggestion = suggestion.map(item => {
        return {
          ...words[item],
          word: item.toLowerCase(),
        };
      });
    }
  }
  return suggestion;
};

module.exports = getSuggestions;
