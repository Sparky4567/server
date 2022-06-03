exports.mainRoute = (passedres) => {
  passedres.statusCode = 200;
  passedres.setHeader("Content-Type", "text/plain");
  passedres.end("Hello World");
  return passedres;
};
