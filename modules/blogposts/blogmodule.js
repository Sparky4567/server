require("dotenv").config();
const axios = require("axios");
exports.getBlogPosts = (passedres) => {
  passedres.statusCode = 200;
  passedres.setHeader("Content-Type", process.env.JSON_TYPE);
  const fetchLink = process.env.POSTS_WORKER_URL;
  const res = axios.get(fetchLink).then((da) => {
    const jsonData = da.data["items"];
    passedres.end(JSON.stringify(jsonData));
    return passedres;
  });
};
