const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Home Page");
      break;
    case "/about":
      res.end("About Page");
      break;
    default:
      res.end(`
      <div>
         <h3>Return to <a href=/>Home Page</a></h3>
      </div>
    `);
  }
});

server.listen(3000, () => {
  console.log("it's running on port 300");
});
