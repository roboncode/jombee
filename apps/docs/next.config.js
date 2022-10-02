const withTM = require("next-transpile-modules")(["@jombee/react-ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
