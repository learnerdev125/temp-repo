const asyncfs = require("fs");
console.log("start");
asyncfs.readFile("./asynctext.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const fstext = res;
  asyncfs.writeFile(
    "./newasynctext.txt",
    fstext,
    (err,
    (result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("File Written Successfully");
    })
  );
});
console.log("ending");
