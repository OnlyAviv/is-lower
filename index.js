const isString = require("is-string");
const toLowerCase = String.prototype.toLowerCase;
module.exports = (input) => isString(input) && toLowerCase.apply(input) === input;