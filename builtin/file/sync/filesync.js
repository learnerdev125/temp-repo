const syncfile = require("fs");
console.log("start");
const read = syncfile.readFileSync("./filesynctext.txt", "utf8");

console.log(read);

syncfile.writeFileSync(
  "./newfilesynctext.txt",
  read,
  {
    flag: "a",
  },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("file written successfully");
  }
);
console.log("ending");
