const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    //console.log(arr)
    arr.forEach(element => {
      if (depth < 1)
        depth = 1;

      if (Array.isArray(element)) {
        const currentDepth = recursionCalculate(element, 2);
        if (currentDepth > depth)
          depth = currentDepth;
        // console.log("1", depth, element)
      }
    });

    return depth;
  }
}


function recursionCalculate(arr, depth) {
  // depth++;

  arr.forEach(element => {
    console.log("2", depth, arr, ' ', element)
    if (Array.isArray(element)) {
      const currentDepth = recursionCalculate(element, ++depth);
      if (currentDepth > depth)
        depth = currentDepth;
    }
    //  else
    //   return depth;
  });

  return depth;
}
module.exports = {
  DepthCalculator
};
