const lod = require("lodash");
const person = [2, [3, [5, [6]]]];
console.log(lod.flattenDeep(person));
