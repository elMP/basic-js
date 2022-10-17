const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (arguments.length === 0) return false;

  if (typeof sampleActivity !== 'string') return false;

  if (sampleActivity <= 0 || sampleActivity >= MODERN_ACTIVITY) return false;

  console.log(+sampleActivity);
  if (isNaN(+sampleActivity) || +sampleActivity == 0) return false;

  const log2 = 0.693;
  const k = log2 / HALF_LIFE_PERIOD;
  const lnA = Math.log(MODERN_ACTIVITY / +sampleActivity);
  const t = Math.ceil(lnA / k);

  return t;
}

module.exports = {
  dateSample,
};

console.log(dateSample(''), false);
