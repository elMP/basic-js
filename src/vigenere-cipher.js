const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

class VigenereCipheringMachine {
  isDirect = true;

  constructor(isDirect) {
    if (isDirect === false) this.isDirect = false;
  }

  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string')
      throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    let currentKey = 0;
    let newStr = '';
    for (let i = 0; i < message.length; i++) {
      let pos = alphabet.indexOf(message[i]);
      if (pos === -1) {
        newStr += message[i];
      } else {
        let keyPos = alphabet.indexOf(key[currentKey]);
        let indexOfNewSymbol = (pos + keyPos) % 26;
        newStr += alphabet[indexOfNewSymbol];

        if (currentKey === key.length - 1) currentKey = 0;
        else currentKey++;
      }
    }

    if (this.isDirect) return newStr;

    let reverseArray = newStr.split('').reverse();
    return reverseArray.join('');
  }

  decrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string')
      throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    let currentKey = 0;
    let newStr = '';
    for (let i = 0; i < message.length; i++) {
      let pos = alphabet.indexOf(message[i]);
      if (pos === -1) {
        newStr += message[i];
      } else {
        let keyPos = alphabet.indexOf(key[currentKey]);
        let indexOfNewSymbol = (pos - keyPos) % 26;
        if (indexOfNewSymbol < 0)
          indexOfNewSymbol = (indexOfNewSymbol + 26) % 26;
        newStr += alphabet[indexOfNewSymbol];

        if (currentKey === key.length - 1) currentKey = 0;
        else currentKey++;
      }
    }

    if (this.isDirect) return newStr;

    let reverseArray = newStr.split('').reverse();
    return reverseArray.join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
