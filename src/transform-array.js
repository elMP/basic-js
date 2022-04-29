const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw Error('\'arr\' parameter must be an instance of the Array!');

  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (i !== 0) {
          resultArr.pop();
        }
        break;
      case '--double-prev':
        if (i !== 0)
          resultArr.push(resultArr[i - 1]);
        break;
      case '--double-next':
        if (i !== arr.length - 1)
          resultArr.push(arr[i + 1]);
        break;
      case '--discard-next':
        if (i !== arr.length - 1) {
          resultArr.push(undefined);
          i++;
        }
        break;
      default:
        resultArr.push(arr[i]);
    }
  }

  return resultArr.filter(item => item !== undefined);
}

module.exports = {
  transform
};
