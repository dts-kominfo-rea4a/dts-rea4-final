const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = {
  target: process.env.REACT_APP_NEWS_URL || "http://api.mediastack.com",
  changeOrigin: true,
};

module.exports = (app) => {
  app.use(createProxyMiddleware("/news", proxy));
};
