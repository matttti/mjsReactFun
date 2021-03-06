/* */ 
var arrayCopy = require("../internal/arrayCopy"),
    getLength = require("../internal/getLength"),
    isLength = require("../internal/isLength"),
    isString = require("./isString"),
    support = require("../support"),
    values = require("../object/values");
function toArray(value) {
  var length = value ? getLength(value) : 0;
  if (!isLength(length)) {
    return values(value);
  }
  if (!length) {
    return [];
  }
  return (support.unindexedChars && isString(value)) ? value.split('') : arrayCopy(value);
}
module.exports = toArray;
