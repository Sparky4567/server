require("dotenv").config();

exports.apiRoute = (passedres) => {
  passedres.statusCode = 200;
  passedres.setHeader("Content-Type", process.env.JSON_TYPE);
  process.env.API_MESSAGE = JSON.stringify(process.env.API_MESSAGE);
  passedres.end(process.env.API_MESSAGE);
  return passedres;
};
