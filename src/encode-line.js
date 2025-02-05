const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str)
    return '';

  let s = str[0];
  let count = 1;
  let result = '';

  for (let i = 1; i < str.length; i++) {
    //console.log(s, str[i], count)
    if (str[i] == s)
      count++;
    else {

      if (count !== 1)
        result += count;
      result += s;

      // console.log(result)
      s = str[i];
      count = 1;
    }
  }

  if (count !== 1)
    result += count;
  result += s;

  return result;
}

console.log(encodeLine('aaaatttt'));
module.exports = {
  encodeLine
};
