const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
const mainFunc = require("./modules/mainroute/mainroute");
const defaultFunction = require("./modules/notfound/notfound");
const apiFunction = require("./modules/api/api");

const server = http.createServer((req, res) => {
  let path = req.url;
  switch (path) {
    case "/":
      mainFunc.mainRoute(res);
      break;

    case "/api":
      apiFunction.apiRoute(res);
      break;

    default:
      defaultFunction.notFound(res);
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
