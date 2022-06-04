require("dotenv").config();

exports.mainRoute = (passedres) => {
  passedres.statusCode = 200;
  passedres.setHeader("Content-Type", "text/plain");
  passedres.end(process.env.MAIN_ROUTE_MESSAGE);
  return passedres;
};
