const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    console.log(str, i, i + 1)
    if (str[i] < str[i + 1]) {
      result = str.substr(0, i) + str.substr(i + 1);
      break;
    }
  }

  if (!result)
    result = str.substr(0, str.length - 1)

  return Number(result);
}

module.exports = {
  deleteDigit
};
