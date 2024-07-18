# `is-lower` (v1.0.1)

A simple utility to determine if a given string is in lowercase.

## Installation

You can install `is-lower` using npm:

```bash
npm install is-lower
```

## Usage

To use `is-lower`, require it in your application and call it
with the string you want to check. The function will return `true` if
the string is entirely in lowercase, and `false` otherwise.

```js
const isLowerCase = require('is-lower');

console.log(isLowerCase("Hello"));       // false
console.log(isLowerCase("one"));         // true
console.log(isLowerCase("javascript"));  // true
console.log(isLowerCase("NODEJS"));      // false
console.log(isLowerCase("2024"));        // true
console.log(isLowerCase("hello world")); // true
console.log(isLowerCase("Hello World")); // false
console.log(isLowerCase("hello123"));    // true
console.log(isLowerCase("!@#$%"));       // true
console.log(isLowerCase("h3ll0"));       // true
console.log(isLowerCase(""));            // true (an empty string is considered lowercase)

// It can handle overrides
String.prototype.toLowerCase = () => false;
console.log(isLowerCase("hello world")); // true
console.log(isLowerCase("Hello World")); // false

// And non-strings
console.log(isLowerCase({})); // false
console.log(isLowerCase(-1)); // false
```
