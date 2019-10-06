const Typo = require('typo-js');
const data = require('./spell-checker-data.json');

const spellchecker = new Typo('en_US', data.aff, data.dict);

module.exports = spellchecker;
