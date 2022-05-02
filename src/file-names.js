const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let output = [];
  let fileNames = [];

  for (let i = 0; i < names.length; i++) {
    console.log(fileNames)
    if (fileNames.indexOf(names[i]) === -1) {
      output.push(names[i]);
      fileNames.push({ "names[i]": 0 });
    }
    else {
      let lastFile = output[output.lastIndexOf(names[i])];
      console.log(lastFile)
      let num = Number(lastFile[lastFile.length - 2]);
      if (isNaN(num))
        num = 1;
      output.push(names[i] + `(${num})`);
    }
  }

  return output;
}

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

module.exports = {
  renameFiles
};
