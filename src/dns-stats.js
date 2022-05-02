const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let collection = {};

  for (let i = 0; i < domains.length; i++) {
    let names = domains[i].split('.');
    console.log(names)
    for (let j = names.length - 1, lastName = ''; j >= 0; j--) {
      lastName += '.' + names[j];
      console.log(names[j])
      if (collection.hasOwnProperty(lastName)) {
        collection[lastName] += collection[lastName];
      }
      else {
        collection[lastName] = 1;
      }
    }
  }

  return collection;
}

module.exports = {
  getDNSStats
};
