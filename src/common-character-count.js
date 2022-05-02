const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0;

  let s1Symbols = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1Symbols.hasOwnProperty(s1[i])) {
      ++s1Symbols[s1[i]];
    } else {
      s1Symbols[s1[i]] = 1;
    }
  }

  let s2Symbols = {};
  for (let i = 0; i < s2.length; i++) {
    if (s2Symbols.hasOwnProperty(s2[i])) {
      ++s2Symbols[s2[i]];
    } else {
      s2Symbols[s2[i]] = 1;
    }
  }

  for (let key in s1Symbols) {
    if (s2Symbols.hasOwnProperty(key)) {
      count += Math.min(s1Symbols[key], s2Symbols[key])
    }
  }

  return count;
}

//console.log(getCommonCharacterCount('aac', 'abccc'))
module.exports = {
  getCommonCharacterCount
};
