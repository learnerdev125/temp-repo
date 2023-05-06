const name = require("./expo");
const { person1, person2, person3 } = name;

const sayname = (name) => {
  return console.log(`name is ${name}`);
};
sayname(person1);
sayname(person2);
sayname(person3);
