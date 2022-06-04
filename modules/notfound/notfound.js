require("dotenv").config();

exports.notFound = (passedres) => {
  passedres.statusCode = 200;
  passedres.setHeader("Content-Type", process.env.JSON_TYPE);
  process.env.NOT_FOUND_MESSAGE = JSON.stringify(process.env.NOT_FOUND_MESSAGE);
  passedres.end(process.env.NOT_FOUND_MESSAGE);
  return passedres;
};
