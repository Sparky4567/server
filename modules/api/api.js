require("dotenv").config();

exports.apiRoute = (passedres) => {
  passedres.statusCode = 200;
  passedres.setHeader("Content-Type", "text/plain");
  passedres.end(process.env.API_MESSAGE);
  return passedres;
};
