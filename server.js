const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mainRoutefunction = require("./modules/mainroute/mainroute");
const apiFunction = require("./modules/api/api");
const notFoundfunction = require("./modules/notfound/notfound");
const blogPostsfunction = require("./modules/blogposts/blogmodule");
app.use(cookieParser());
app.use(cors());
app.listen(process.env.PORT || 5000);

app.get("/", (req, res) => {
  mainRoutefunction.mainRoute(res);
});

app.get("/api", (req, res) => {
  apiFunction.apiRoute(res);
});

app.all("*", (req, res) => {
  notFoundfunction.notFound(res);
});
