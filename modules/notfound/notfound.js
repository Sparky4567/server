require("dotenv").config();

exports.notFound = (passedres) => {
  passedres.statusCode = 200;
  passedres.setHeader("Content-Type", "text/plain");
  passedres.end(process.env.NOT_FOUND_MESSAGE);
  return passedres;
};
