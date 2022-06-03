exports.notFound = (passedres) => {
  passedres.statusCode = 200;
  passedres.setHeader("Content-Type", "text/plain");
  passedres.end("Not found");
  return passedres;
};
