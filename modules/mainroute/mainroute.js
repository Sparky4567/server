require("dotenv").config();

exports.mainRoute = (passedres) => {
  passedres.statusCode = 200;
  passedres.setHeader("Content-Type", process.env.JSON_TYPE);
  process.env.MAIN_ROUTE_MESSAGE = JSON.stringify(
    process.env.MAIN_ROUTE_MESSAGE
  );
  passedres.end(process.env.MAIN_ROUTE_MESSAGE);
  return passedres;
};
