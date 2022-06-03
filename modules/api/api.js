exports.apiRoute = (passedres) => {
  passedres.statusCode = 200;
  passedres.setHeader("Content-Type", "text/plain");
  passedres.end("API");
  return passedres;
};
