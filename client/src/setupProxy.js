const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/loginUser", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/registerUser", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/resources", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/application", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/process-payment", { target: process.env.PORT||"http://localhost:3001/" }));

};