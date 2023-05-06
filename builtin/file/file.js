const fs = require("fs");

// fs.writeFileSync("./text.txt", "My name is Abdul Ahad");
const a = fs.readFile("./text.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
  const b = res;
  fs.writeFile("./first.txt", res, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Writing Async file successfull");
  });
});

// console.log(read);
